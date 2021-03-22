sap.ui.define([
	"./Base.controller",
	"../model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/ui/core/BusyIndicator"
], function (BaseController, formatter, JSONModel, Fragment, BusyIndicator) {
	"use strict";

	return BaseController.extend("y20_outb_afpi.controller.MainScreen", {
		formatJson: "&$format=json",
		formatter: formatter,

		//################ Public APIs ###################

		/**
		* onInit
		*/
		onInit: function () {
			//this.getView().addStyleClass(sap.ui.Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
			this.getView().addStyleClass("sapUiSizeCozy");
			const isTouch = sap.ui.Device.support.touch;

			//isTouch && this.getView().byId("BlockLayout").addStyleClass("tablet-transform");

			//TODO: Header: Dialog name, user, date and the current used workstation
			this.setCurrentLoggedInUser();

			//Set empty model
			this.getView().setModel(new JSONModel(null), "modelConfirmedTaskNav");

			//Set the Message model
			this.initMessageModel();

			//Set the jsonModel for all Elements of the screen
			 this.initElementsModel();
			},

		/**
		* onAfterRendering
		*/
		onAfterRendering: function (oEvent) {
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

			var sWarehouse = "TMPL"; 	// TODO: get from global parameter

			// JSONModel of list with OBD and destination
			var requestBody = {
				"Lgnum": sWarehouse,
				"Scan": scannedValue,
				"Scan_ConfirmedTaskNav": {
					"results": []
				}
			}

			var jsonModelconfirmedTaskNav = this.getView().getModel("modelConfirmedTaskNav");
			if (jsonModelconfirmedTaskNav !== undefined) {
				var confirmedTaskNav = jsonModelconfirmedTaskNav.getData().results;
				if (confirmedTaskNav !== undefined) {
					requestBody = {
						"Lgnum": sWarehouse,
						"Scan": scannedValue,
						"Scan_ConfirmedTaskNav": {
							"results": confirmedTaskNav
						}
					}
				}
			}

			// OData Model
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_AFTER_PICK_DROPOFF_SRV", true);
			BusyIndicator.show();

			oModel.create("/ScanSourceEntCollection", requestBody, {
				useBatch: false,
				success: function (oData, oResponse) {
					try {
						// create model from received data
						_this.createModelsFromData(oData);
						BusyIndicator.hide();
						//_this.handleMessageResponse(oResponse);

						// add success message
						var successmsg = _this.getResourceBundle().getText("SCAN_SUCCESS_MESSAGE") + " " + scannedValue;
						_this.addMessage("info", "Scan Source", successmsg, false);

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
			//Scan_ConfirmedTaskNav

			var confirmedTaskNav = data.Scan_ConfirmedTaskNav;
			var jsonModelconfirmedTaskNav = new JSONModel(confirmedTaskNav);
			//var testdata = jsonModelconfirmedTaskNav.getJSON();
			this.getView().setModel(jsonModelconfirmedTaskNav, "modelConfirmedTaskNav");
			//this.getView().refresh();

			this._resetSortingState();

			// next scan
			this.byId("scanSource").setValue("");
			this.byId("scanSource").focus();
		},

		/**
		* onClearPressed
		*/
		onClearPressed: function onClearPressed(oEvent) {
			// clear table
			this.getView().setModel(new JSONModel(null), "modelConfirmedTaskNav");
			this._resetSortingState();

			this.clearMessages();

			// next scan
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
			var oTable = this.byId("uiTableOBD");
			oTable.getBinding("rows").sort(null);
			var aColumns = oTable.getColumns();
			for (var i = 0; i < aColumns.length; i++) {
				aColumns[i].setSorted(false);
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