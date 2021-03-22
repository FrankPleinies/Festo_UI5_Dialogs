sap.ui.define([
	"./Base.controller",
	"../model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/ui/core/BusyIndicator"
], function (BaseController, formatter, JSONModel, Fragment, BusyIndicator) {
	"use strict";

	return BaseController.extend("y20_outb_pcon.controller.MainScreen", {
		formatJson: "&$format=json",
		formatter: formatter,
		initialRequestData: undefined,

		//################ Public APIs ###################

		/**
		* onInit
		*/
		onInit: function () {
			//this.getView().addStyleClass(sap.ui.Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
			this.getView().addStyleClass("sapUiSizeCozy");
			const isTouch = sap.ui.Device.support.touch;
			isTouch && this.getView().byId("BlockLayout").addStyleClass("tablet-transform");

			//TODO: Header: Dialog name, user, date and the current used workstation
			this.setCurrentLoggedInUser();

			//Set empty models
			this.getView().setModel(new JSONModel(null), "modelBinContent");
			this.getView().setModel(new JSONModel(null), "modelBinOBDDestinations");
			this.getView().setModel(new JSONModel(null), "modelPopupRackCoordinates");

			//Set the Message model
			this.initMessageModel();

			// test header
			this.byId("storageBinTitle").setText("");
			this.getInitialData();

			//Set the jsonModel for all Elements of the screen
			this.initElementsModel();

		},

		getInitialData: function (documentNumber) {
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_PICK_CONSOLIDATION_SRV", true);
			const doc = documentNumber ? documentNumber : ""
			const setInfo = `(Lgnum='TMPL',DocNo='${doc}')`

			BusyIndicator.show();
			oModel.read(`/ProposeBinCollection${setInfo}`, {
				urlParameters: {
					"$expand": "ProposeBin_BinContentNav"
				},
				useBatch: false,
				success: (data) => {
					const storageBinString = data.StorageBin;
					this.byId("storageBinTitle").setText(storageBinString);
					this.getView().getModel("modelBinContent").setData(data.ProposeBin_BinContentNav);
					this.initialRequestData = {
						DocNo: data.DocNo,
						Lgnum: data.Lgnum,
						StorageBin: data.StorageBin
					}
					BusyIndicator.hide();

				},
				error: err => {
					BusyIndicator.hide();
					sap.m.MessageToast.show("Error while reading initial data!");
				}
			});
		},

		/**
		* onAfterRendering
		*/
		onAfterRendering: function (oEvent) {

			const isTouch = sap.ui.Device.support.touch;
			const reg = RegExp('customButton');
			setTimeout(() => {
				const btnArr = Array.from(document.getElementsByTagName("button")).filter(button => reg.test(button.className))
				isTouch && btnArr.forEach(button => window.setTimeout(() => button.classList.add("customTabletButton"), 0))
			}, 0)
			// set focus on scan field
			jQuery.sap.delayedCall(200, this, function () {
				this.byId("scanSource").focus();
			});
		},

		/**
		* onScanSourceSubmit
		* OData request
		*/
		onScanSourceSubmit: function onScanSourceSubmit(oEvent) {
			var _this = this;

			// scanned HU or the resource ID (with HUs) 
			var scannedValue = oEvent.getSource().getValue();
			if (scannedValue === null || scannedValue.length == 0) {
				// no scanned value
				_this.showMessage("warning", "Scan Source", "Please scan or enter a scan source value!");
				return;
			}

			// show scannend value in title bar
			this.byId("storageBinTitle").setText(scannedValue);

			var sWarehouse = "TMPL"; 	// TODO: get from global parameter
			var additialValue = this.initialRequestData
			// JSONModel of list with OBD and destination
			var requestBody = {
				"Lgnum": sWarehouse,
				"ScanStorageBin": scannedValue,
				"Scan_ProposeBin": additialValue,
				"Scan_BinContent": {
					"results": []
				},
				"Scan_BinOBDDestinations": {
					"results": []
				},
				"Scan_PopupRackCoordinates": {
					"results": []
				}
			}

			var jsonModelBinOBDDestinations = this.getView().getModel("modelBinOBDDestinations");
			if (jsonModelBinOBDDestinations !== undefined) {
				var dataBinOBDDestinations = jsonModelBinOBDDestinations.getData().results;
				if (dataBinOBDDestinations !== undefined) {
					requestBody = {
						"Lgnum": sWarehouse,
						"ScanStorageBin": scannedValue,
						"Scan_ProposeBin": additialValue,
						"Scan_BinContent": {
							"results": []
						},
						"Scan_BinOBDDestinations": {
							"results": dataBinOBDDestinations
						},
						"Scan_PopupRackCoordinates": {
							"results": []
						}
					}
				}
			}

			// OData Model
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_PICK_CONSOLIDATION_SRV", true);
			BusyIndicator.show();

			oModel.create("/ScanSet", requestBody, {
				useBatch: false,
				success: function (oData, oResponse) {
					try {
						// create model from received data
						_this.createModelsFromData(oData);
						BusyIndicator.hide();

						var additialValue = _this.initialRequestData
						_this.getInitialData(additialValue.DocNo)
						//_this.handleMessageResponse(oResponse);

						// add success message
						var successmsg = _this.getResourceBundle().getText("SCAN_SUCCESS_MESSAGE") + " " + scannedValue;
						_this.addMessage("info", "Scan Source", successmsg, false);

						// check for rack coordinates
						_this.showRackCoordinates();

					} catch (err) {
						console.log(err);
						BusyIndicator.hide();
						_this.addMessage("error", "Scan Source", err.message, true);
					}
				},

				error: function (oError) {
					_this.byId("scanSource").setValue("");
					_this.byId("scanSource").focus();
		
					console.log(oError);
					BusyIndicator.hide();
					_this.handleMessageResponse(oError);
				}
			});
		},

		/**
		* createModelsFromData
		* List with OBD and destination
		*/
		createModelsFromData: function createModelsFromData(data) {
			// Scan_BinContent, Scan_BinOBDDestinations, Scan_PopupRackCoordinates

			var dataBinContent = data.Scan_BinContent;
			var jsonModelBinContent = new JSONModel(dataBinContent);
			this.getView().setModel(jsonModelBinContent, "modelBinContent");

			var dataBinOBDDestinations = data.Scan_BinOBDDestinations;
			var jsonModelBinOBDDestinations = new JSONModel(dataBinOBDDestinations);
			this.getView().setModel(jsonModelBinOBDDestinations, "modelBinOBDDestinations");

			var dataPopupRackCoordinates = data.Scan_PopupRackCoordinates;
			var jsonModelPopupRackCoordinates = new JSONModel(dataPopupRackCoordinates);
			this.getView().setModel(jsonModelPopupRackCoordinates, "modelPopupRackCoordinates");

			this._resetSortingState();

			// next scan
			this.byId("scanSource").setValue("");
			this.byId("scanSource").focus();
		},

		/**
		* showRackCoordinates
		* In case several PCON rack coordinates had to be used for one outbound delivery a popup will appear when first coordinate was scanned. 
		* To inform user about this special case. Screen will suggest second coordinate in main screen automatically.
		* 
		*/
		showRackCoordinates: function showRackCoordinates() {
			var sDocno = "";

			var jsonModelPopupRackCoordinates = this.getView().getModel("modelPopupRackCoordinates");
			if (jsonModelPopupRackCoordinates !== undefined) {
				var dataPopupRackCoordinates = jsonModelPopupRackCoordinates.getData().results;
				if (dataPopupRackCoordinates !== undefined && dataPopupRackCoordinates.length > 0) {
					sDocno = dataPopupRackCoordinates[0].Docno;
					this.getRackCoordinateDialogs().open();
					var sRackCoordinatesText = this.getResourceBundle().getText("dialogRackCoordinatesText", [sDocno]);
					this.byId("dialogRackCoordinatesText").setText(sRackCoordinatesText);
				}
			}
		},

		/**
		* onClearPressed
		*/
		onClearPressed: function onClearPressed(oEvent) {
			// clear tables
			this.getView().setModel(new JSONModel(null), "modelBinContent");
			this.getView().setModel(new JSONModel(null), "modelBinOBDDestinations");
			this.getView().setModel(new JSONModel(null), "modelPopupRackCoordinates");
			this._resetSortingState();

			this.clearMessages();

			// next scan
			this.byId("storageBinTitle").setText("");
			this.byId("scanSource").setValue("");
			this.byId("scanSource").focus();
		},

		/**
		* onExitPressed
		*/
		onExitPressed: function onClearPressed(oEvent) {
			//TODO: exit logic
			// exit app
			jQuery.sap.require("sap.m.MessageToast");
			sap.m.MessageToast.show("Good bye!");
		},

		/**
		* setCurrentLoggedInUser
		*/
		setCurrentLoggedInUser: function setCurrentLoggedInUser() {
			var _thisUser = this;
			var xmlHttp = new XMLHttpRequest();

			xmlHttp.onreadystatechange = function () {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					var oUserData = JSON.parse(xmlHttp.responseText);
					var user = " " + oUserData.id;
					_thisUser.byId("headerContentText").setText(_thisUser.byId("headerContentText").getText().concat(user));
				}
			};

			xmlHttp.open("GET", "/sap/bc/ui2/start_up", false);
			xmlHttp.send(null);
		},

		//################ Private APIs ###################

		/**
		* _resetSortingState
		*/
		_resetSortingState: function () {
			var oTableOBD = this.byId("uiTableOBD");
			oTableOBD.getBinding("rows").sort(null);
			var aColumnsOBD = oTableOBD.getColumns();
			for (var i = 0; i < aColumnsOBD.length; i++) {
				aColumnsOBD[i].setSorted(false);
			}
			var oTableBin = this.byId("uiTableBinContent");
			oTableBin.getBinding("rows").sort(null);
			var aColumnsBin = oTableBin.getColumns();
			for (var i = 0; i < aColumnsBin.length; i++) {
				aColumnsBin[i].setSorted(false);
			}
		},

		onShowKeyboard: function (oEvent) {
			var oModel = this.getElementsModel();
			var propertyString = "/keyboard" + "/inputmode";

			this.toggleButton(oEvent.mParameters.id, oEvent.mParameters.pressed);
			if (this.getView().byId("scanSource")) {
				this.getView().byId("scanSource").setEditable(false);
				this.getView().byId("scanSource").setEditable(true);
			}
			if(oEvent.mParameters.pressed) {
				oModel.setProperty(propertyString, "text");
				oModel.refresh(true);
			} else {
				oModel.setProperty(propertyString, "none");
				oModel.refresh(true);
			}
		}


	});
});