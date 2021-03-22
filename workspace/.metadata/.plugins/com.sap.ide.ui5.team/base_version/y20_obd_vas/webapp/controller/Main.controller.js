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
	"sap/m/library"
], function (Controller, Device, MessageStrip, Log, JSONModel, BaseController, Library, Message, MessageToast, Button, Dialog, Text, Fragment, BusyIndicator, formatter, MLibrary) {
	"use strict";
	var MessageType = Library.MessageType;
	var path;

	return BaseController.extend("y20_obd_vas.controller.Main", {

		formatter: formatter,

		onInit: function () {
			this.checkWhNumberAndWorkstation();

			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			//Set the jsonModel for all Elements of the screen
			this.initElementsModel();
			//Set the Message model
			this.initMessageModel();

			this.setCurrentLoggedInUser();

			//Set focus to the scan trolley field
			var that = this;
            setTimeout(function () {
				var input = that.getView().byId("scanHU");
			  	input.focus();
            }, 0);
			MLibrary.closeKeyboard();

			that.disableElement("btn_count");

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
		  
		 handleMessage: function(event) {
			if(event) {
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

		setTitleTexts: function(docno) {
			var that = this;
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			if (docno) {
				that.byId("Cell1").setTitle(oResourceBundle.getText("Grid1_Title").concat("  ").concat(docno));
				//that.byId("Cell3").setTitle(oResourceBundle.getText("Grid3_Title").concat("  ").concat(docno));
			} else {
				that.byId("Cell1").setTitle(oResourceBundle.getText("Grid1_Title"));
				//that.byId("Cell3").setTitle(oResourceBundle.getText("Grid3_Title"));
			}
		},

		onScanHU: function () {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_VAS_SRV", true);

			var lgnum = this.whNumber;
			var huident = this.getView().byId("scanHU").getValue();

			oModel.read("/ScanHandlingUnitSet(Lgnum='" + lgnum + "',ScanHU='" + huident + "')", {
					urlParameters: {
						"$expand": "DocumentHeaderEnt,DocumentItemEntSet"
					},
				success: function (oData, response) {
					var oText = oResourceBundle.getText("OBD_FOUND", [oData.DocumentHeaderEnt.DocNo]);
					var oMessage = new Message({
					  	message: oText,
					  	type: MessageType.Success,
					  	target: "/Dummy" //,
					  	//processor: view.getModel()
					 });
					sap.ui.getCore().getMessageManager().addMessages(oMessage);

					MessageToast.show(oText);
					var oModelDlvHead = new sap.ui.model.json.JSONModel();
					oModelDlvHead.setData(oData.DocumentHeaderEnt);
					that.getView().setModel(oModelDlvHead, "DlvHeader");
					that.setTitleTexts(oData.DocumentHeaderEnt.ERPDocNo);

					var oModelDlvItems = new sap.ui.model.json.JSONModel();
					let dlvItemsData = oData.DocumentItemEntSet.results;
					let modelData = { "items": dlvItemsData };
					oModelDlvItems.setData(modelData);
					that.getView().setModel(oModelDlvItems, "uiTableModel");
					var table = that.getView().byId("tblDeliveryContent");
					table.setModel(oModelDlvItems, "uiTableModel");

					if(dlvItemsData.length > 0) {
						var oModelSelEntry = new sap.ui.model.json.JSONModel();
						oModelSelEntry.setData(dlvItemsData[0]);
						that.getView().setModel(oModelSelEntry, "selectedRow");
						table.setSelectedIndex(0);

					}

					var oModelDlvItemHU = new sap.ui.model.json.JSONModel();
					oModelDlvItemHU.setData(modelData);
					that.getView().setModel(oModelDlvItems, "uiTableModelHU");
					var tableHU = that.getView().byId("tblDeliveryHUContent");
					tableHU.setModel(oModelDlvItems, "uiTableModelHU");

				

					that.getView().byId("scanHU").setValue("");
					that.enableElement("btn_confirm");
					that.enableElement("btn_print");
				},
				error: function (oError) {
					//var oMsg = JSON.parse(oError.responseText);
					that.handleMessageResponse(oError, false);
					that.getView().byId("scanHU").setValue("");
					that.getView().byId("scanHU").focus();
					//var oInput1 = that.getView().byId("scanPos");
					//var oText = oResourceBundle.getText("HU_PACKED_TO_TROLLEY_FAIL", [oInputHU.getValue(), oInput1.getValue()]);
					//that.showMessage(oText, MessageType.Error);
					//that.changeTrolley(0);
				}
			}

			);

		},


		onSelect: function (event, selectedIndexOld) {
				var that = this;
		  
				//create request here
				var table = this.byId("tblDeliveryContent");
				var selectedIndex = -1;
		  
				if (selectedIndexOld !== undefined) {
				  selectedIndex = selectedIndexOld;
				} else {
				  selectedIndex = table.getSelectedIndex();
				}
		  
				if (selectedIndex >= 0) {
				  this.currentSelectedTableItemFromFirstSection = selectedIndex;
				  var dataArr = this.getView().getModel("uiTableModel").getData().items;
				  var oModelSelEntry = new sap.ui.model.json.JSONModel();
				  oModelSelEntry.setData(dataArr[selectedIndex]);
				  that.getView().setModel(oModelSelEntry, "selectedRow");
				  that.loadHus(oModelSelEntry);
				}
	
		},

		loadHus: function(selectedRow) {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_VAS_SRV", true);

			var items = that.getView().getModel("uiTableModel").getData().items;
			//var hus = that.getView().getModel("uiTableModelHU").getData().items;

			//var tableModelItems = this.getView().getModel("tblDeliveryHUContent").getData().items;
			var lgnum = this.whNumber;
			var result = { "results": [{}] };
			var request = {};
			request.Lgnum = selectedRow.oData.Lgnum;
			request.UserCommand = "03";
			request.Docid = selectedRow.oData.Docid;
			request.Itemid = selectedRow.oData.Itemid;
			request.DocumentItemEntSet = items;
			request.HandlingUnitEntSet = result;

			oModel.create("/UserCommandEntCollection", request, {
				success: function (oData, response) {

					var oModelDlvHUContent = new sap.ui.model.json.JSONModel();
					let husData = oData.HandlingUnitEntSet.results;
					let modelData = { "items": husData };
					oModelDlvHUContent.setData(modelData);
					that.getView().setModel(oModelDlvHUContent, "uiTableModelHU");
					var tableHU = that.getView().byId("tblDeliveryHUContent");
					tableHU.setModel(oModelDlvHUContent, "uiTableModelHU");
				},
				error: function (oError) {
					that.handleMessageResponse(oError, false);
					//that.getView().byId("scanHU").focus();
				}
			}

			);
		},

		onPressConfirm: function(oEvent) {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_VAS_SRV", true);
			//const table = this.getView().byId("tblTrolleyContent");

			var oModelSelected = this.getView().getModel("selectedRow").getData();
			var oModelDlvHeader = this.getView().getModel("DlvHeader").getData();
			var tableModelItems = this.getView().getModel("uiTableModel").getData().items;
			var lgnum = this.whNumber;
			var request = {};
			request.Lgnum = lgnum;
			request.UserCommand = "01";
			request.Itemid = oModelSelected.Itemid;
			request.DocumentItemEntSet = tableModelItems;

			// var request = {
			// 	"Lgnum": lgnum,
			// 	"UserCommand": "06",
			// 	"UserCommand_TrolleyContentNav": {
			// 		"results": [obj
			// 		]
			// 	}
			// 	//				}
			// };
			oModel.create("/UserCommandEntCollection", request, {
				success: function (oData, response) {
					// var oText = oResourceBundle.getText("VERIFY_HU_SUCCESS", [that.getView().byId("scanHU").getValue()]);
					// var oMessage = new Message({
					//  	message: oText,
					//  	type: MessageType.Success,
					//  	target: "/Dummy" //,
					//  	//processor: view.getModel()
					//  });
					//  sap.ui.getCore().getMessageManager().addMessages(oMessage);

					// MessageToast.show(oText);
					// var oModelDlvHead = new sap.ui.model.json.JSONModel();
					// oModelDlvHead.setData(oData.DocumentHeaderEnt);
					// that.getView().setModel(oModelDlvHead, "DlvHeader");
					var oModelDlvItems = new sap.ui.model.json.JSONModel();
					let dlvItemsData = oData.DocumentItemEntSet.results;
					let modelData = { "items": dlvItemsData };
					oModelDlvItems.setData(modelData);
					that.getView().setModel(oModelDlvItems, "uiTableModel");
					var table = that.getView().byId("tblDeliveryContent");
					table.setModel(oModelDlvItems, "uiTableModel");

					if(oData.showMsg) {
						if(oModelDlvHeader.qgate) {
							oData.showMsg = '03';
						}
						that.onShowMsgDialog(oData.showMsg);
					} else {
						var items = table.getModel("uiTableModel").getData().items;
						for(var i = 0; i <= items.length; i++) {
							var item = items[i];
							if(!item.Confirmed) {
								table.setSelectedIndex(i);
							}
						}
					}

					if(oData.completed == 'X') {
						that.getView().getModel("selectedRow").setData(null);
						that.getView().getModel("uiTableModelHU").setData(null);
						that.getView().getModel("uiTableModel").setData(null);
						that.getView().getModel("DlvHeader").setData(null);
						that.setTitleTexts();
						that.getView().byId("scanHU").focus();
						that.disableElement("btn_confirm");
						that.disableElement("btn_print");
	

					}
				},
				error: function (oError) {
					//var oMsg = JSON.parse(oError.responseText);
					that.handleMessageResponse(oError, false);
					//var oInput1 = that.getView().byId("scanPos");
					//var oText = oResourceBundle.getText("HU_PACKED_TO_TROLLEY_FAIL", [oInputHU.getValue(), oInput1.getValue()]);
					//that.showMessage(oText, MessageType.Error);
					//that.changeTrolley(0);
				}
			}

			);
			
		},

		onPressPrint: function(oEvent) {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_VAS_SRV", true);

			var tableModelItems = this.getView().getModel("uiTableModel").getData().items;
			var lgnum = this.whNumber;
			var request = {};
			request.Lgnum = lgnum;
			request.UserCommand = "02";
			request.DocumentItemEntSet = tableModelItems;

			oModel.create("/UserCommandEntCollection", request, {
				success: function (oData, response) {
					// var oModelDlvItemsCounted = new sap.ui.model.json.JSONModel();
					// let dlvItemsData = oData.DocumentItemEntSet.results;
					// let modelData = { "items": dlvItemsData };
					// oModelDlvItemsCounted.setData(modelData);
					// that.getView().setModel(oModelDlvItemsCounted, "uiTableModelCounted");
					// var tableCounted = that.getView().byId("tblDeliveryCountedContent");
					// tableCounted.setModel(oModelDlvItemsCounted, "uiTableModelCounted");

					// if(oData.showMsg) {
					// 	that.onShowMsgDialog(oData.showMsg);
					// } else {
					// 	var table = that.getView().byId("tblDeliveryContent");
					// 	var index = table.getSelectedIndex();
					// 	index = index + 1;
					// 	var nextRow = table.getRows()[index];
					// 	if (nextRow && nextRow.getCells()[index].getText()) {
					// 		table.setSelectedIndex(index);
					// 	  }
					// }

					// if(oData.completed == 'X') {
					// 	that.getView().getModel("selectedRow").setData(null);
					// 	that.getView().getModel("uiTableModelCounted").setData(null);
					// 	that.getView().getModel("uiTableModel").setData(null);
					// 	that.setCountBtnText("");
					// 	that.disableElement("btn_count");
					// 	that.getView().byId("scanHU").focus();
					// }

				},
				error: function (oError) {
					that.handleMessageResponse(oError, false);
					that.getView().byId("scanHU").focus();
				}
			}

			);
			
		},

		onShowMsgDialog: function(msg) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			var title_textID =  `MSG_TITLE_${msg}`;
			var content_textID = `MSG_CONTENT_${msg}`;

			var title = oResourceBundle.getText(title_textID);
			var content = oResourceBundle.getText(content_textID);

			var state = 'Success';
			
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