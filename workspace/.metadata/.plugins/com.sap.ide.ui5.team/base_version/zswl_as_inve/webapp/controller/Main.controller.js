sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/m/MessageStrip",
	"sap/base/Log",
	"sap/ui/model/json/JSONModel",
	"./BaseController",
	"sap/ui/core/library",
	"sap/ui/core/message/Message",
	"sap/m/MessageToast",
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/Text",
	"sap/ui/core/Fragment",
	"sap/ui/core/BusyIndicator",
	"../model/formatter",
	"sap/m/library",
	"sap/ui/core/ws/WebSocket",
	"./ASController"
], function (Controller, Device, MessageStrip, Log, JSONModel, BaseController, Library, Message, MessageToast, Button, Dialog, Text, Fragment, BusyIndicator, formatter, MLibrary, WebSocket, ASController) {
	"use strict";
	var MessageType = Library.MessageType;
	var path;
	var ASctrl;

	return BaseController.extend("zswl_as_inve.controller.Main", {

		currentSelectedTableItemFromFirstSection: undefined,
		formatter: formatter,

		onInit: function () {
			this.checkWhNumberAndWorkstation();

			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			//Set the jsonModel for all Elements of the screen
			this.initElementsModel();
			//Set the Message model
			this.initMessageModel();

			//Set focus to the scan trolley field
			// var that = this;
			// setTimeout(function () {
			// 	that.getView().byId("btn_hucreate").focus();
			// }, 0);
			// MLibrary.closeKeyboard();

			//Call AutoStoreController
			this.ASctrl = new ASController(this);
			this.ASctrl.openPort();

			this.setCurrentLoggedInUser();
			//this.refreshUIElements();
		},

		handleProgressIndicator: function handleProgressIndicator() {
			var propertyStringDisplayValue = "/pi_picks" + "/displayValue";
			var propertyStringPercentValue = "/pi_picks" + "/percentValue";
			var propertyStringStateValue = "/pi_picks" + "/state";

			var picksCompleted = 0;
			var totalPicks = 4;

			var valueDisplayValue = "1/1";
			var valuePercentValue = "100";
			var valueStateValue = "Success";
			// this.getElementsModel().setProperty(propertyStringDisplayValue, valueDisplayValue);
			// this.getElementsModel().setProperty(propertyStringPercentValue, valuePercentValue);
			// this.getElementsModel().setProperty(propertyStringStateValue, valueStateValue);
			// this.getElementsModel().refresh(true);

			var oProgressIndicator = this.getView().byId("pi_picks");

			oProgressIndicator.setPercentValue(valuePercentValue);
			oProgressIndicator.setDisplayValue(valueDisplayValue);
			oProgressIndicator.setState(valueStateValue);
		},

		setCurrentLoggedInUser: function setCurrentLoggedInUser() {
			var _this7 = this;

			var xmlHttp = new XMLHttpRequest();

			xmlHttp.onreadystatechange = function () {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					var oUserData = JSON.parse(xmlHttp.responseText);

					var user = " " + oUserData.id;
					_this7.byId("user").setText(_this7.byId("user").getText().concat(user));
				}
			};

			xmlHttp.open("GET", "/sap/bc/ui2/start_up", false);
			xmlHttp.send(null);
		},

		handleMessage: function (event) {
			if (event) {
			}
		},

		onBeforeRendering: function () {
			//	sap.base.Log.info("Method onBeforeRendering");
			var oMs = sap.ui.getCore().byId("msgStrip");
			//debugger

			if (oMs) {
				oMs.destroy();
			}
			//this.refreshUIElements();
		},

		onAfterRendering: function () {
		},

		_clearMessage: function () {
			var oMs = sap.ui.getCore().byId("msgStrip");
			//debugger

			if (oMs) {
				oMs.destroy();
			}
		},

		refreshUIElements: function refreshUIElements() {

			//Handle Source document relevant elements
			//Handle AS Bin relevant elements
			let modelHU = this.getView().getModel("HU");
			let modelItem = this.getView().getModel("selectedRow");
			//this.showElement("btn_hucreate");
			//this.hideElement("btn_hucomplete");

			if (modelHU && modelHU.oData && modelHU.oData.BinID) {
				//this.showElement("btn_hucomplete");
				//this.hideElement("btn_hucreate");
				this.setTitleTexts("Grid1", modelHU.oData.BinID);
				this.enableElement("btn_pack");
				this.enableElement("qty_counted");
			} else {
				//this.showElement("btn_hucreate");
				//this.hideElement("btn_hucomplete");
				//this.hideElement("btn_hucomplete");
				this.setTitleTexts("Grid1");
				this.disableElement("btn_pack");
				this.disableElement("qty_counted");
			}

			if (modelItem && modelItem.oData && modelItem.oData.Product.MATNR) {
				//this.enableElement("btn_pack");
				//this.enableElement("qty_counted");
				this.disableElement("btn_add");
			} else {
				//this.disableElement("btn_pack");
				//this.disableElement("qty_counted");
				this.enableElement("btn_add");

			}

			if (this.getView().getModel("UserComm") && this.getView().getModel("UserComm").getData()
				&& this.getView().getModel("UserComm").getData().completed) {
				this.showElement("btn_hucomplete");
			} else {
				this.hideElement("btn_hucomplete");
			}


		},

		setTitleTexts: function (id, param1, param2) {
			var that = this;
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var mlText = oResourceBundle.getText(`${id}_Title`);
			if (param1) {
				that.byId(id).setTitle(mlText.concat("  ").concat(param1));
				if (param2) {
					that.byId(id).setTitle(mlText.concat("  ").concat(param1).concat(" / ").concat(itemno));
				}
			} else {
				that.byId(id).setTitle(mlText);
			}
		},

		readCountItems: function readCountItems(asBin) {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_INVENTORY_SRV", true);

			oModel.read("/ScanHandlingUnitSet(Lgnum='" + this.whNumber + "',ScanHU='" + asBin + "')", {
				urlParameters: {
					"$expand": "CountItemsEntSet"
				},
				success: function (oData, response) {
					// var oText = oResourceBundle.getText("OBD_FOUND", [oData.DocumentHeaderEnt.ERPDocNo]);
					// var oMessage = new Message({
					//   	message: oText,
					//   	type: MessageType.Success,
					//   	target: "/Dummy" //,
					//   	//processor: view.getModel()
					//  });
					// sap.ui.getCore().getMessageManager().addMessages(oMessage);

					// MessageToast.show(oText);
					var oModelCountItems = new sap.ui.model.json.JSONModel();
					oModelCountItems.setData(oData.CountItemsEntSet);
					that.getView().setModel(oModelCountItems, "CountItems");
					that.selectTableRow(that.ASctrl.getSelectedCompartment());
					//that.setTitleTexts(oData.DocumentHeaderEnt.ERPDocNo);

					// var oModelDlvItems = new sap.ui.model.json.JSONModel();
					// let dlvItemsData = oData.DocumentItemEntSet.results;
					// let modelData = { "items": dlvItemsData };
					// oModelDlvItems.setData(modelData);
					// that.getView().setModel(oModelDlvItems, "uiTableModel");
					// var table = that.getView().byId("tblDeliveryContent");
					// table.setModel(oModelDlvItems, "uiTableModel");

				},
				error: function (oError) {
					that.handleMessageResponse(oError, false);
				}
			}

			);
		},

		onRequestPressed: function onRequestPressed() {

			this.onOpenRequestDialog();
		},

		onOpenRequestDialog: function () {
			const view = this.getView();
			let popupDialog = this.byId("popupDialogRequest")
			if (!popupDialog) {
				Fragment.load({
					id: view.getId(),
					name: "zswl_as_inve.view.PopupDialogRequest",
					controller: this
				}).then(function (popupDialog) {
					view.addDependent(popupDialog);
					popupDialog.open();
				});
			} else {
				this.byId("popupDialogRequest").open();
			}
		},

		onConfirmDialog: function onConfirmDialog() {
			const binId = this.getView().byId("requestBinInput").getValue();

			if (binId) {
				//Call closeBin to remove the Bin from Port back to Grid
				//this.ASctrl.closeBin();
				//this.getView().byId("scanInput").setValue("");
				//Call openBin to get the next Bin from Grid
				this.readPIRequest(binId);
				this.byId("popupDialogRequest").close();
			} else {
				sap.m.MessageToast.show("Enter BinId!")
			}

		},

		readPIRequest: function readPIRequest(asBin) {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_INVENTORY_SRV", true);
			var tophu = '';
			if(asBin !== undefined) {
				tophu = asBin;
			}
			oModel.read("/ReadPIRequestSet(Lgnum='" + this.whNumber + "',TopHU='" + tophu + "')", {
				success: function (oData, response) {
					// MessageToast.show(oText);
					var oModelPIDoc = new sap.ui.model.json.JSONModel();
					oModelPIDoc.setData(oData);
					that.getView().setModel(oModelPIDoc, "PIDoc");
					that.ASctrl.openBin();
					//that.selectTableRow(that.ASctrl.getSelectedCompartment());
					//that.setTitleTexts(oData.DocumentHeaderEnt.ERPDocNo);
				},
				error: function (oError) {
					that.handleMessageResponse(oError, false, true);
				}
			}

			);
		},

		onChangeCompartment: function onChangeCompartment() {
			var that = this;

			var countItems = that.getView().getModel("CountItems").getData;

		},

		onScanSubmit: function onScanSubmit(oEvent, value) {
			var _this = this;

			var scannedValue;
			if (oEvent) {
				oEvent.getSource().setEnabled(false);
				var currentInput = oEvent.getSource();
				scannedValue = oEvent.getSource().getValue();
				currentInput.setValue();
			}
			if (value) {
				scannedValue = value;
			}
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PUTAWAY_SRV", true);
			var setInfo = "(Lgnum='".concat(this.whNumber, "',ScannedValue='").concat(scannedValue, "')");
			BusyIndicator.show();
			oModel.read("/ScanHandlingUnitSet" + setInfo, {
				useBatch: false,
				urlParameters: {
					"$expand": "DocumentHeaderEnt,DocumentItemEntSet"
				},
				success: function success(data) {
					BusyIndicator.hide();

					_this.createModelsFromData(data);
					_this.refreshModels();

					_this.selectFirstTableRow();
				},
				error: function error(err) {
					BusyIndicator.hide();

					_this.handleMessageResponse(err);
				}
			});
		},

		createModelsFromData: function createModelsFromData(data) {
			var _this2 = this;

			if (data.DocumentHeaderEnt) {
				var docHead = data.DocumentHeaderEnt;
				var jsonModelDocHead = new JSONModel(docHead);
				this.getView().setModel(jsonModelDocHead, "modelDocHeadNav");
			}

			if (data.DocumentItemEntSet) {
				var docItems = data.DocumentItemEntSet;
				var jsonModeldocItems = new JSONModel(docItems);
				this.getView().setModel(jsonModeldocItems, "modelDocItemNav");
			}
		},

		selectTableRow: function selectTableRow(compartment, next) {
			var table = this.byId("tblCountItems");

			if (table.getModel("CountItems")) {
				var items = table.getModel("CountItems").getData().results;

				let countItemToBeSelected;

				if (next) {
					countItemToBeSelected = (element) => element.Counted !== "X";
				} else {
					countItemToBeSelected = (element) => element.SubHU == compartment;
				}

				var selectedIndex = items.findIndex(countItemToBeSelected);
				//var selectedItem = items.filter(item => item.SubHU == compartment );

				// if (firstRow && firstRow.getCells()[0].getText()) {
				this.onRowSelectionChangeUiTable(undefined, selectedIndex);
				//   setTimeout(function () {
				// 	return firstRow._setSelected(true);
				//   }, 0);
			}
		},

		//  * Select row from section one UI table
		//  * param  {Object} event SAPUI5 Standard UI event
		//  * param  {Number} selectRow Select any row in the table
		//  * return {Void}   
		onRowSelectionChangeUiTable: function onRowSelectionChangeUiTable(event, selectRow, toggle) {
			var _this4 = this;

			var table = this.byId("tblCountItems");
			var selectedIndex = -1; //If selectRow is passed use it.

			if (selectRow !== undefined) {
				selectedIndex = selectRow; // If selectFirstRow is passed use 0.
			} else {
				selectedIndex = table.getSelectedIndex();
			}

			if (selectedIndex !== -1) {
				var dataArr = _this4.getView().getModel("CountItems").getData().results;

				var selectedRow = dataArr[selectedIndex];
				var jsonModelSelectedRow = new JSONModel(selectedRow);

				_this4.getView().setModel(jsonModelSelectedRow, "selectedRow");
				_this4.refreshModels();

				_this4.getElementsModel().setProperty("/qty_counted/value", selectedRow.Qty.Quan);
				_this4.getElementsModel().refresh(true);

				_this4.setCountBtnText(_this4.getElementsModel().getProperty("/qty_counted/value"));
				table.setSelectedIndex(selectRow);

				if (toggle) {
					var id = selectedRow.Compartment.split("-");
					var btnId = "BTN".concat(id[0]).concat(id[1]);
					var button = _this4.getView().byId(btnId);
					if (sap.m.ToggleButton.comp) {
						sap.m.ToggleButton.comp.RaiseEvent(new RoutedEventArgs(Button.ClickEvent));
					}
				}
			}
		},

		onPackPressed: function onPackPressed(oEvent) {
			//this.onOpenLowStockCheckDialog();
			var _this10 = this;

			var element = oEvent.getSource();
			element.setEnabled(false);
			BusyIndicator.show();
			//var selectedIndex = this.currentSelectedTableItemFromFirstSection;

			// if (selectedIndex !== undefined) {
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_INVENTORY_SRV", {
				useBatch: false
			});
			var selectedItem = this.getView().getModel("selectedRow").getData();
			//   var sourceHU = this.getView().getModel("modelDocHeadNav").getData().ScanHU;
			var countItems = this.getView().getModel("CountItems").getData().results;

			var request = {};
			request.Lgnum = selectedItem.Lgnum;
			request.UserCommand = "01";
			request.SubHU = selectedItem.SubHU;
			request.TopHU = this.ASctrl.getTopHUIdent();
			request.QtyCounted = this.getView().byId("stepInputQuan").getValue().toString();
			request.CountItemsEntSet = countItems;

			oModel.create("/UserCommandEntCollection", request, {
				success: function success(oData, response) {
					element.setEnabled(true);
					BusyIndicator.hide();

					_this10.handleMessageResponse(response);

					sap.m.MessageToast.show("Counting Sucessfull!"); //update table 3
					var oModelCountItems = new sap.ui.model.json.JSONModel();
					oModelCountItems.setData(oData.CountItemsEntSet);
					_this10.getView().setModel(oModelCountItems, "CountItems");
					var oModelUserComm = new sap.ui.model.json.JSONModel();
					oModelUserComm.setData(oData);
					_this10.getView().setModel(oModelUserComm, "UserComm");

					//_this10.onRowSelectionChangeUiTable(null, selectedIndex);
					_this10.getElementsModel().setProperty("/qty_counted/value", 0);
					_this10.getElementsModel().refresh(true);
					_this10.setCountBtnText(_this10.getElementsModel().getProperty("/qty_counted/value"));
					_this10.refreshUIElements();
					//_this10.selectTableRow(undefined, true);
				},
				error: function error(err) {
					//element.setEnabled(true);
					BusyIndicator.hide();

					_this10.handleMessageResponse(err);
				}
			});
		},

		refreshModels: function refreshModels() {
			var models = this.getView().oModels;

			for (var modelName in models) {
				models[modelName].refresh();
			}
		},

		onOpenDialog: function onOpenDialog() {
			var view = this.getView();
			var popupDialog = this.byId("popupDialog");

			if (!popupDialog) {
				Fragment.load({
					id: view.getId(),
					name: "y20_as_ptwy.view.PopupDialog",
					controller: this
				}).then(function (popupDialog) {
					view.addDependent(popupDialog);
					popupDialog.open();
				});
			} else {
				this.byId("popupDialog").open();
			}
		},

		

		onQuanChange: function (oEvent) {
			var propertyString = "/qty_counted" + "/value";
			this.getElementsModel().setProperty(propertyString, oEvent.getParameter("value"));
			this.getElementsModel().refresh(true);

			this.setCountBtnText(oEvent.getParameter("value"));
		},

		setCountBtnText: function (value) {
			var propertyString = "/btn_pack" + "/text";
			var qty = Math.trunc(value);
			this.getElementsModel().setProperty(propertyString, qty);
			this.getElementsModel().refresh(true);

			//Make Button Always enabled regardless of its value
			this.enableElement("btn_pack");
			//			if(value > 0) {
			//				this.enableElement("btn_count");
			//			} else {
			//				this.disableElement("btn_count");
			//			}
		},

		onPressPrint: function (oEvent) {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			that.handleProgressIndicator();

			that.refreshUIElements();
		},

		onPressHUComplete: function (oEvent) {

			var _this11 = this;

			BusyIndicator.show();

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap//ZSWL_AS_INVENTORY_SRV", {
				useBatch: false
			});
			var selectedItem = this.getView().getModel("selectedRow").getData();
			//   var sourceHU = this.getView().getModel("modelDocHeadNav").getData().ScanHU;
			var countItems = this.getView().getModel("CountItems").getData().results;

			var request = {};
			request.Lgnum = _this11.whNumber;
			request.Workstation = _this11.workstation;
			request.UserCommand = "02";
			//request.SubHU = selectedItem.SubHU;
			request.TopHU = this.ASctrl.getTopHUIdent();
			//request.QtyCounted = this.getView().byId("stepInputQuan").getValue().toString();
			request.CountItemsEntSet = countItems;

			oModel.create("/UserCommandEntCollection", request, {
				success: function success(successData, response) {
					BusyIndicator.hide();

					_this11.handleMessageResponse(response);

					sap.m.MessageToast.show("Counting successful"); //update table 3
					_this11.getView().getModel("selectedRow").setData(null);
					_this11.getView().getModel("CountItems").setData(null);
		
					_this11.getElementsModel().setProperty("/qty_counted/value", 0);
					_this11.getElementsModel().refresh(true);
					_this11.setCountBtnText(_this11.getElementsModel().getProperty("/qty_counted/value"));

					//Call function HU complete
					_this11.ASctrl.closeBin(true);
				},
				error: function error(err) {
					BusyIndicator.hide();

					_this11.handleMessageResponse(err);
				}
			});

		},

		onExitPressed: function () {
			this.ASctrl.closePort();
		},

		onRunoutPressed: function (oEvent) {
			if (oEvent.mParameters.pressed) {
				oEvent.getSource().setIcon("sap-icon://locked");
			} else {
				oEvent.getSource().setIcon("sap-icon://unlocked");
			}

			//Call OData Service to set the runout status on the Workstation
			if (this.ASctrl) {
				this.ASctrl.handleRunoutMode(oEvent.mParameters.pressed);
			}
		},

		onDeviationPressed: function (oEvent) {
			this.onOpenDeviationDialog();
		},

		onOpenDeviationDialog: function onOpenDeviationDialog() {
			var view = this.getView();
			var popupDialogDeviation = this.byId("popupDialogDeviation");

			if (!popupDialogDeviation) {
				Fragment.load({
					id: view.getId(),
					name: "zswl_as_pick.view.popupDialogDeviation",
					controller: this
				}).then(function (popupDialogDeviation) {
					view.addDependent(popupDialogDeviation);
					popupDialogDeviation.open();
				});
			} else {
				this.byId("popupDialogDeviation").open();
			}
		},

		onCloseDeviationDialog: function onCloseDeviationDialog() {
			if (this.deviationCommand) {
				this.onDeviationPostReqest(this.deviationCommand);
			} else {
				var popupDialog = this.byId("popupDialogDeviation");
				popupDialog.close();
			}
		},


		//Low Stock
		onOpenLowStockCheckDialog: function onOpenLowStockCheckDialog() {
			var view = this.getView();
			var popupDialogLow = this.byId("popupDialogLowStockCheck");

			if (!popupDialogLow) {
				Fragment.load({
					id: view.getId(),
					name: "zswl_as_pick.view.PopupDialogLowStockCheck",
					controller: this
				}).then(function (popupDialogLow) {
					view.addDependent(popupDialogLow);
					popupDialogLow.open();
				});
			} else {
				this.byId("popupDialogLowStockCheck").open();
			}
		},

		onPostLowStockDialog: function onPostLowStockDialog(userCommand) {
			var _this19 = this;

			var popupDialog = this.byId("popupDialogLowStockCheck");
			// var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", true);
			// var requestBody = this.getView().getModel("modelLowStock").getData();
			// requestBody.Qty = requestBody.Qty.toString();
			// requestBody.UserComm = userCommand;
			// var trolley = this.scannedValue + "11";
			// oModel.create("/LowStockCheckMatNrPISet ", requestBody, {
			//   success: function success(successData, response) {
			// 	_this19.handleMessageResponse(response);

			popupDialog.close();

			// 	_this19.onConfirmDialog(null, trolley, true);
			//   },
			//   error: function error(err) {
			// 	_this19.handleMessageResponse(err); //this.onOpenScanDialog();


			// 	popupDialog.close();

			// 	_this19.onConfirmDialog(null, trolley, true);
			//   }
			// });
		},
		onLowStockCheckAdjustPressed: function onLowStockCheckAdjustPressed() {
			this.onPostLowStockDialog("01");
		},

		onShowMsgDialog: function (msg) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			var title_textID = `MSG_TITLE_${msg}`;
			var content_textID = `MSG_CONTENT_${msg}`;

			var title = oResourceBundle.getText(title_textID);
			var content = oResourceBundle.getText(content_textID);

			var state;
			switch (msg) {
				case "01":
					state = 'Warning';
					break;
				case "02":
					state = 'Error';
					break;
				case "03":
					state = 'Error';
					break;
				case "04":
					state = 'Success';
					break;
			}


			var oDialog = new Dialog({
				title: title,
				type: 'Message',
				state: state,
				content: new Text({
					text: content
				}),
				beginButton: new Button({
					//type: ButtonType.Emphasized,
					text: 'Close',
					press: function () {
						oDialog.close();
					}
				}),
				afterClose: function () {
					oDialog.destroy();
				}
			});

			oDialog.open();
		}





	});
});