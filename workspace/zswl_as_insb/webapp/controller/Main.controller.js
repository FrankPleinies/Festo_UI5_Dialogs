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

	return BaseController.extend("zswl_as_insb.controller.Main", {

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
			var that = this;
			setTimeout(function () {
				var input = that.getView().byId("scanInput");
				input.focus();
			}, 0);
			MLibrary.closeKeyboard();

			//Call AutoStoreController
			this.ASctrl = new ASController(this);
			this.ASctrl.openPort();

			this.setCurrentLoggedInUser();
			this.refreshUIElements();
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

		refreshUIElements: function () {

			//Handle Source document relevant elements

			//Handle AS Bin relevant elements
			let modelHU = this.getView().getModel("HU");

			if (modelHU && modelHU.oData && modelHU.oData.BinID) {
				this.enableElement("btn_pack");
				var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
				var btn_text = oResourceBundle.getText("Btn_Insb");
				this.setCountBtnText(btn_text);
				this.getView().byId("btn_pack").focus();
			} else {
				this.disableElement("btn_pack");
				this.setCountBtnText("");
				this.getView().byId("scanInput").focus();

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

		onScanSubmit: function onScanSubmit(oEvent) {
			var _this = this;

			var scannedValue;
			if (oEvent) {
				var currentInput = oEvent.getSource();
				scannedValue = oEvent.getSource().getValue();
				//currentInput.setValue();
			}

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_EWM_AUTOSTORE_SRV", true);

			var request = {};
			request.Lgnum = this.whNumber;
			request.BinID = scannedValue;
			request.Workstation = this.workstation;
			request.CallAS = '';
  
			oModel.create("/ASBinSet", request, {
			success: function (oData, response) {
					var oModelHU = new sap.ui.model.json.JSONModel();
					//Set HU model
					oModelHU.setData(oData);
					_this.getView().setModel(oModelHU, "HU");

                    _this.ASctrl.buildGrid();
                    _this.refreshUIElements();
				},
				error: function (oError) {
					_this.handleMessageResponse(oError, false);
				}
			}

			);

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

		onPackPressed: function onPackPressed(oEvent) {
			var _this10 = this;

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_EWM_AUTOSTORE_SRV", true);
			var modelHU = this.getView().getModel("HU").getData();
			var request = {};
			request.Lgnum = this.whNumber;
			request.BinID = modelHU.BinID;
			request.Workstation = this.workstation;
			request.CallAS = 'X';
  
			oModel.create("/ASBinSet", request, {
			success: function (oData, response) {

					if(oData.BinID) {
						var oMessage = new Message({
							message: _this10.getView().getModel("i18n").getResourceBundle().getText("Msg_InsBin"),
							type: MessageType.Warning,
							target: "/Dummy" //,
							//processor: view.getModel()
					   });
					  sap.ui.getCore().getMessageManager().addMessages(oMessage);
					  MessageToast.show(_this10.getView().getModel("i18n").getResourceBundle().getText("Msg_InsBinSuccess", oData.BinID));
					}
					_this10.getView().getModel("HU").setData(null);
					_this10.getView().byId("scanInput").setValue("");
                    _this10.ASctrl.buildGrid(true);
					_this10.refreshUIElements();
				},
				error: function (oError) {
					_this.handleMessageResponse(oError, false);
				}
			});

		},

		refreshModels: function refreshModels() {
			var models = this.getView().oModels;

			for (var modelName in models) {
				models[modelName].refresh();
			}
		},


		setCountBtnText: function (value) {
			var propertyString = "/btn_pack" + "/text";
			this.getElementsModel().setProperty(propertyString, value);
			this.getElementsModel().refresh(true);

			//Make Button Always enabled regardless of its value
			this.enableElement("btn_pack");
			//			if(value > 0) {
			//				this.enableElement("btn_count");
			//			} else {
			//				this.disableElement("btn_count");
			//			}
		},

		onExitPressed: function () {
			this.ASctrl.closePort();
		}

	});
});