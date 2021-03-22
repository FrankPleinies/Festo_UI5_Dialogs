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

	return BaseController.extend("y20_inb_exec_tr.controller.Main", {

		formatter: formatter,

		onInit: function () {
			this.checkWhNumberAndWorkstation();

			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			//Set the jsonModel for all Elements of the screen
			this.initElementsModel();
			//Set the Message model
			this.initMessageModel();
			//Load all chained trolleys at the beginning of the dialog
			this.loadChainedTrolleys();

			//Set focus to the scan trolley field
			var that = this;
            setTimeout(function () {
				var input = that.getView().byId("if_scanTrolley");
			  	input.focus();
            }, 0);
			MLibrary.closeKeyboard();

			this.setCurrentLoggedInUser();
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

		  onBeforeRendering: function () {
			//	sap.base.Log.info("Method onBeforeRendering");
			var oMs = sap.ui.getCore().byId("msgStrip");
			//debugger

			if (oMs) {
				oMs.destroy();
			}
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

		changeTrolley: function (level) {
			var oModel = this.getElementsModel();
			var propertyString = "/img_trolley/path";
			var path = "Trolley";

			//Only level 1 to 3 are allowed else show the empty trolley
			switch (level) {
				case "1":
				case "2":
				case "3":
					path = path + level + ".png";
					break;
				default:
					path = path + ".png";

			}

			oModel.setProperty(propertyString, path);
			oModel.refresh(true);
		},


		onVerifyHU: function () {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_TROLLEY_SRV", true);

			var oData = this.getView().getModel("nextWT").getData();
			var lgnum = this.whNumber;
			var request = {};
			request = oData;
			request.HuidentVal = this.getView().byId("scanHU").getValue();
			request.UserComm = "01";

			oModel.create("/PtwyWTConfTrolSet", request, {
				//oModel.read("/ScanTrolleySet(Lgnum='" + lgnum + "',ScanTrolley='" + trolley + "')?$expand=ScanTrolley_TrolleyNav,ScanTrolley_TrolleyContentNav", {
				//oModel.read("/ScanTrolleySet(Lgnum='" + lgnum + "',ScanTrolley='" + trolley + "')?$expand=ScanTrolley_TrolleyNav", {
				success: function (oData, response) {
					var oText = oResourceBundle.getText("VERIFY_HU_SUCCESS", [that.getView().byId("scanHU").getValue()]);
					var oMessage = new Message({
					 	message: oText,
					 	type: MessageType.Success,
					 	target: "/Dummy" //,
					 	//processor: view.getModel()
					 });
					 sap.ui.getCore().getMessageManager().addMessages(oMessage);

					MessageToast.show(oText);

					that.getView().byId("scanDest").focus();
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

		onVerifyDest: function() {
			this._clearMessage();
			var openDialog = false;
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_TROLLEY_SRV", true);

			var oData = this.getView().getModel("nextWT").getData();

			//var obj = tableModel.getProperty(path);
			var chbd = that.getView().byId("tgbtn_chgDst").getPressed();
			var userComm = "02";
			if(chbd) {
				userComm = "03";
			}

			var request = {};
			request = oData;
			request.HuidentVal = this.getView().byId("scanHU").getValue();
			request.LgplaVal = this.getView().byId("scanDest").getValue();
			request.UserComm = userComm;
			BusyIndicator.show();
			 oModel.create("/PtwyWTConfTrolSet", request, {
			 	success: function (data, response) {
			 		BusyIndicator.hide();
			 		var oText = oResourceBundle.getText("CONF_WT_SUCCESS", [oData.Tanum]);
			 		var oMessage = new Message({
			 		 	message: oText,
			 		 	type: MessageType.Success,
			 		 	target: "/Dummy" //,
			 		 	//processor: view.getModel()
			 		 });
			 		 sap.ui.getCore().getMessageManager().addMessages(oMessage);

			 		MessageToast.show(oText);

			 		that.getView().byId("scanHU").focus();
					that.getView().byId("scanHU").setValue("");
					that.getView().byId("scanDest").setValue(""); 
			 		that.getView().byId("scanHU").focus();
					that.toggleButton("btn_chgDst", false);
					
					that.loadNextWT(that);

			 	},
			 	error: function (oError) {
			 		BusyIndicator.hide();
			 		//var oMsg = JSON.parse(oError.responseText);
					 that.handleMessageResponse(oError, false);
					 that.getView().byId("scanDest").setValue("");
			 		that.getView().byId("scanDest").focus();
			 	}
			 }

			 );
		},

		onShowKeyboard: function (oEvent) {
			var oModel = this.getElementsModel();
			var propertyString = "/keyboard" + "/inputmode";

			this.toggleButton(oEvent.mParameters.id, oEvent.mParameters.pressed);
			if (this.getView().byId("if_scanTrolley")) {
				this.getView().byId("if_scanTrolley").setEditable(false);
				this.getView().byId("if_scanTrolley").setEditable(true);
			}
			if (this.getView().byId("scanHU")) {
				this.getView().byId("scanHU").setEditable(false);
				this.getView().byId("scanHU").setEditable(true);
			}				
			if (this.getView().byId("scanDest")) {
				this.getView().byId("scanDest").setEditable(false);
				this.getView().byId("scanDest").setEditable(true);
			}
			if(oEvent.mParameters.pressed) {
				oModel.setProperty(propertyString, "text");
				oModel.refresh(true);
			} else {
				oModel.setProperty(propertyString, "none");
				oModel.refresh(true);
			}
		},


		onPress: function (oEvent) {
			this.toggleButton("btn_chgDst", oEvent.getSource().getPressed());
			this.getView().byId("scanDest").focus();
		},

		onScanTrolley: function() {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oInputTrolley = this.getView().byId("if_scanTrolley");
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_TROLLEY_SRV", true);
			//var trolley = event.srcElement.value;
			var trolley = that.getView().byId("if_scanTrolley").getValue();

			//var propertyString = "/Button2" + "/text";
			var request = {
				"Lgnum": this.whNumber,
				"ScanTrolley": trolley,
			};
			oModel.create("/ScanTrolleyEnt", request, {
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

					//Load all chained trolleys at the beginning of the dialog
					that.loadChainedTrolleys();
					that.getView().byId("if_scanTrolley").setValue("");
					that.getView().byId("if_scanTrolley").focus();
					

				},
				error: function (oError) {
					//var oMsg = JSON.parse(oError.responseText);
					that.handleMessageResponse(oError, true);
					//var oInput1 = that.getView().byId("scanPos");
					//var oText = oResourceBundle.getText("HU_PACKED_TO_TROLLEY_FAIL", [oInputHU.getValue(), oInput1.getValue()]);
					//that.showMessage(oText, MessageType.Error);
					that.getView().byId("if_scanTrolley").setValue("");
					that.getView().byId("if_scanTrolley").focus();
				}
			}

			);
			oModel.refresh(true);

		},

		loadChainedTrolleys: function() {
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_TROLLEY_SRV", true);
			var lgnum = this.whNumber;
			var filterValue = `Lgnum eq '${lgnum}'`;
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
	  
				let chainedTrolleys = data.results;
				let modelData = { "items": chainedTrolleys };
				var oModelChainedTrolleys = new sap.ui.model.json.JSONModel();
				oModelChainedTrolleys.setData(modelData);
				that.getView().setModel(oModelChainedTrolleys, "chainedTableModel");
  
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
				name: "y20_inb_exec_tr.view.ChooseTrolleys",
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

		  onClearTrolleys: function () {
			//Clear the chained trolleys table
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_TROLLEY_SRV", true);
			var request = {
				"Lgnum": this.whNumber,
			};
			var that = this;
			BusyIndicator.show();
			oModel.create("/ClearUserChainSet", request, {
			//   urlParameters: {
			// 	"$expand": "ScanDoc_DocHeadNav,ScanDoc_DocItemNav,ScanDoc_NewPackNav,ScanDoc_ProductNav,ScanDoc_PopDocHeadNav"
			//   },
			  success: function success(data) {
				that.loadChainedTrolleys();
				that.getView().byId("if_scanTrolley").setValue("");
				that.getView().byId("if_scanTrolley").focus();
				BusyIndicator.hide();
			  },
			  error: function error(err) {
				BusyIndicator.hide();
				that.handleMessageResponse(err);
				that.getView().byId("if_scanTrolley").setValue("");
				that.getView().byId("if_scanTrolley").focus();
		  }
			});
		  },

		onStart: function () {
			  //Close the chain dialog
			  this.byId("chainDialog").close();

			  this.loadNextWT();

		},

		loadNextWT: function (controller) {
			//Clear the chained trolleys table
			var oModel2 = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_TROLLEY_SRV", true);
			var that2 = this;
			if(controller) {
				that2 = controller;
			}
			var lgnum = this.whNumber;
			BusyIndicator.show();
			//oModel.create("/ClearUserChainSet" + request, {
			oModel2.read("/PtwyWTConfTrolSet(Lgnum='" + lgnum + "')", {
					useBatch: false,
			//   urlParameters: {
			// 	"$expand": "ScanDoc_DocHeadNav,ScanDoc_DocItemNav,ScanDoc_NewPackNav,ScanDoc_ProductNav,ScanDoc_PopDocHeadNav"
			//   },
			  success: function success(data) {
				BusyIndicator.hide();
				
				let nextWT = data;
				//let modelData = { "nextWT": nextWT };
				var oModelNextWT = new sap.ui.model.json.JSONModel();
				oModelNextWT.setData(nextWT);
				that2.getView().setModel(oModelNextWT, "nextWT");
				
				let huPos = nextWT.HuTrolleyPosition;
				that2.changeTrolley(huPos.substring(0, 1));
				that2.buildStorageBin(true);

			  },
			  error: function error(err) {
				BusyIndicator.hide();
				that2.getView().getModel("nextWT").setData(null);
				that2.changeTrolley(0);
				//Load all chained trolleys again if no further Ptwy WT were found
				that2.getView().byId("scanHU").setValue("");
				that2.getView().byId("scanDest").setValue("");
				that2.loadChainedTrolleys();
				that2.onOpenChainDialog();
				that2.buildStorageBin(false);
				that2.handleMessageResponse(err);
				
			  }
			});

		},


	  	buildStorageBin: function (visible) {
			//debugger;

			if(!visible) {
				this.getView().byId("ShelfDisplay").setVisible(false);
				return;
			}
			
			var that = this;
			var wt = this.getView().getModel("nextWT").getData();

			//Default values
			var shelfs = 1;
			var shelfToDisplay = 1;
			var shelfSections = 3;
			var targetShelfSection = 1;

			var oModel2 = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_SBIN_SERVICES_SRV", true);
			var lgnum = this.whNumber;
			BusyIndicator.show();
			//wt.Nlpla = 'RND-01-05-03/5';
			var nlpla = encodeURIComponent(wt.Nlpla);
			//(Lgnum='TMPL',Lgpla='RND-01-05-03%2F5')
				oModel2.read(`/SbinEntSet(Lgnum='${lgnum}',Lgpla='${nlpla}')`, {
					useBatch: false,
			  success: function success(data) {
				BusyIndicator.hide();
					shelfs = parseInt(data.RackHeight); //Amount of levels
					shelfToDisplay = parseInt(data.Lvl_V); //Relevant level
					shelfSections = parseInt(data.LvlPositions); //Amount of positions in relevant level
					targetShelfSection = parseInt(data.Plpos); // Position to be marked in relevant level
					targetShelfSection = parseInt(data.Plpos); // Position to be marked in relevant level
					that.drawStorageBin(that.getView(), shelfs, shelfToDisplay, shelfSections, targetShelfSection);
			  },
			  error: function error(err) {
				BusyIndicator.hide();
				
			  }
			});



		},

		drawStorageBin: function drawStorageBin(view, shelfs, shelfToDisplay, shelfSections, targetShelfSection) {
			var container = view.byId("ShelfDisplay");
			container.destroyItems();
	  
			for (var count = 1; count <= shelfs; count++) {
			  var shelf = getBox("40px", "70%", "Start", "Center", "stack");
	  
			  if (count === shelfToDisplay) {
				for (var sections = 1; sections <= shelfSections; sections++) {
				  if (sections === targetShelfSection) {
					var innerBoxSelected = getBox("30px", "100%", "Start", "Center", "itemNotRelevant");
					 if(sections == 1) {
					 	innerBoxSelected.addStyleClass("sapUiSmallMarginBegin");	
					 }
	
					 if(sections == shelfSections) {
					 	innerBoxSelected.addStyleClass("sapUiSmallMarginEnd");	
					 }

					innerBoxSelected.setLayoutData(new sap.m.FlexItemData({
						growFactor: 1
					}));

					shelf.addItem(innerBoxSelected);
				  } else {
					var innerBox = getBox("30px", "100%", "Start", "Center", "itemRelevant");
					 if(sections == 1) {
					 	innerBox.addStyleClass("sapUiSmallMarginBegin");	
					 }

					 if(sections == shelfSections) {
					 	innerBox.addStyleClass("sapUiSmallMarginEnd");	
					 }

					innerBox.setLayoutData(new sap.m.FlexItemData({
						growFactor: 1
					}));

					shelf.addItem(innerBox);
				  }
				}
			  }
	  
			  container.addItem(shelf);
			}
	  
			function getBox(height, width, alignItems, justifyContent, styleClass) {
			  return new sap.m.FlexBox({
				height: height,
				width: width,
				alignItems: alignItems,
				justifyContent: justifyContent
			  }).addStyleClass(styleClass);
			}
		  }
		  
		 

	});
});