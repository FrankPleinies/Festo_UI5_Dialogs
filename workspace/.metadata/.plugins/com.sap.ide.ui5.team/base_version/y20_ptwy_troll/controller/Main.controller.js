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
	"sap/ui/core/BusyIndicator"
], function (Controller, Device, MessageStrip, Log, JSONModel, BaseController, Library, Message, MessageToast, Button, Dialog, Text, Fragment, BusyIndicator) {
	"use strict";
	var MessageType = Library.MessageType;
	var path;

	return BaseController.extend("com.swl.Y20_PTWY_TROLL.controller.Main", {
		onInit: function () {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			//Set the jsonModel for all Elements of the screen
			//var oModelData = new sap.ui.model.json.JSONModel();
			//oModelData.loadData("model/Elements.json");
			//this.getView().setModel(oModelData, "ELEMENTS");
			this.initElementsModel();
			//Set the jsonModel for the header elements of the screen
			//			this.initHeaderModel();
			//Set the Message model
			this.initMessageModel();

			var that = this;
			setTimeout(function () {
			var input = that.getView().byId("scanHU");
			 	input.focus();
			 }, 0);

			 this.loadChainedTrolleys();
		},

		onBeforeRendering: function () {
			//	sap.base.Log.info("Method onBeforeRendering");
			var oMs = sap.ui.getCore().byId("msgStrip");
			//debugger

			if (oMs) {
				oMs.destroy();
			}
			 this.buildStorageBin();
		},

		onAfterRendering: function () {
			this.onOpenChainDialog();
		},
		
		_clearMessage: function () {
			var oMs = sap.ui.getCore().byId("msgStrip");
			//debugger

			if (oMs) {
				oMs.destroy();
			}
		},

		onScanTrolley: function() {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oInputTrolley = this.getView().byId("if_scanTrolley");
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_TROLLEY_SRV", true);
			var trolley = event.srcElement.value;
			var lgnum = "TMPL";

			//var propertyString = "/Button2" + "/text";
			var request = {
				"Lgnum": "TMPL",
				"ScanTrolley": trolley,
			};
			oModel.create("/ScanTrolleyEnt", request, {
				//oModel.read("/ScanTrolleySet(Lgnum='" + lgnum + "',ScanTrolley='" + trolley + "')?$expand=ScanTrolley_TrolleyNav,ScanTrolley_TrolleyContentNav", {
				//oModel.read("/ScanTrolleySet(Lgnum='" + lgnum + "',ScanTrolley='" + trolley + "')?$expand=ScanTrolley_TrolleyNav", {
				success: function (oData, response) {
					//Log.info(response);

					// var oText = oResourceBundle.getText("HU_PACKED_TO_TROLLEY_SUCCESS", [oInputHU.getValue(), trolley]);
					// var oMessage = new Message({
					// 	message: oText,
					// 	type: MessageType.Success,
					// 	target: "/Dummy" //,
					// 	//processor: view.getModel()
					// });
					// sap.ui.getCore().getMessageManager().addMessages(oMessage);

					//MessageToast.show(oText);
					//oModel.refresh(true);
					// var oModelTrolley = new sap.ui.model.json.JSONModel();
					// oModelTrolley.setData(oData);
					// that.getView().setModel(oModelTrolley, "Troll");

					//After successful scan on an trolley, load the chained trolleys again to refresh the table
					that.loadChainedTrolleys();
					

				},
				error: function (oError) {
					//var oMsg = JSON.parse(oError.responseText);
					var oInput1 = that.getView().byId("scanPos");
					var oText = oResourceBundle.getText("HU_PACKED_TO_TROLLEY_FAIL", [oInputHU.getValue(), oInput1.getValue()]);
					that.showMessage(oText, MessageType.Error);
					that.changeTrolley(0);
				}
			}

			);
			oModel.refresh(true);

		},

		loadChainedTrolleys: function() {
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_TROLLEY_SRV", true);
			var filterValue = "Lgnum eq 'TMPL'";
			var that = this;
			BusyIndicator.show();
			oModel.read("/UserTrolleyChainSet", {
			  useBatch: false,
			   urlParameters: {
			 	"$filter": filterValue
			   },
			  success: function success(data) {
				// try {

				// } catch (err) {
				//   console.log(err);
				//   BusyIndicator.hide();
				// }
	  
				var oModelChainedTrolleys = new sap.ui.model.json.JSONModel();
				oModelChainedTrolleys.setData(data);
				that.getView().setModel(oModelChainedTrolleys, "chainedTrolleys");
  
				BusyIndicator.hide();
			  },
			  error: function error(err) {
				BusyIndicator.hide();
	  
				//_this.handleMessageResponse(err);
			  }
			});
				  
		},

		onOpenChainDialog: function onOpenChainDialog () {
			var view = this.getView();
			var popupDialog = this.byId("chainDialog");
	  
			if (!popupDialog) {
			  Fragment.load({
				id: view.getId(),
				name: "com.swl.Y20_PTWY_TROLL.view.ChooseTrolleys",
				controller: this
			  }).then(function (popupDialog) {
				view.addDependent(popupDialog);
				popupDialog.addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
				popupDialog.open();
			  });
			} else {
				this.byId("chainDialog").addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
			  this.byId("chainDialog").open();
			}
		  },

		  onClearTrolleysDialog: function () {
			//Clear the chained trolleys table
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_TROLLEY_SRV", true);
			var setInfo = "(Lgnum='TMPL')";
			var that = this;
			BusyIndicator.show();
			oModel.read("/ClearUserChainSet" + setInfo, {
			  useBatch: false,
			//   urlParameters: {
			// 	"$expand": "ScanDoc_DocHeadNav,ScanDoc_DocItemNav,ScanDoc_NewPackNav,ScanDoc_ProductNav,ScanDoc_PopDocHeadNav"
			//   },
			  success: function success(data) {
				// try {

				// } catch (err) {
				//   console.log(err);
				//   BusyIndicator.hide();
				// }
	  
				var oModelChainedTrolleys = new sap.ui.model.json.JSONModel();
				oModelChainedTrolleys.setData(null);
				that.getView().setModel(oModelChainedTrolleys, "chainedTrolleys");
  
				BusyIndicator.hide();
			  },
			  error: function error(err) {
				BusyIndicator.hide();
	  
				_this.handleMessageResponse(err);
			  }
			});
		  },

		  onCloseChainDialog: function () {
			  //Close the chain dialog
			  this.byId("chainDialog").close();
		  },


	  	buildStorageBin: function () {
			//debugger;

			var container = this.getView().byId("ShelfDisplay");
			var shelfs = 8;
			var shelfToDisplay = 6;
			var shelfSections = 3;
			var targetShelfSection = 2;

			var count;
			for (count = 1; count <= shelfs; count++) {
				var id = "stack" + count;
				var shelf = new sap.m.FlexBox(id, {
					alignItems: "Start",
					justifyContent: "Center",
					height: "30px",
					width: "70%"
				});
				shelf.addStyleClass("stack");
				if (count === shelfToDisplay) {
					//debugger;
					for (var sections = 1; sections <= shelfSections; sections++) {
						if (sections === targetShelfSection) {
							var innerBoxSelected = new sap.m.FlexBox(id + sections, {
								height: "30px",
								width: "33%",
								alignItems: "Start",
								justifyContent: "Center"
							}).addStyleClass("item2");

							innerBoxSelected.setLayoutData(new sap.m.FlexItemData({
								growFactor: 1
							}));
							shelf.addItem(innerBoxSelected);
						} else {
							var innerBox = new sap.m.FlexBox(id + sections, {
								height: "30px",
								width: "33%",
								alignItems: "Start",
								justifyContent: "Center"
							}).addStyleClass("item1");

							innerBox.setLayoutData(new sap.m.FlexItemData({
								growFactor: 1
							}));
							shelf.addItem(innerBox);
						}
					}
				}
				container.addItem(shelf);
			}

		}

	});
});