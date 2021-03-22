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

	return BaseController.extend("y20_inb_exec_pa.controller.Main", {

		formatter: formatter,

		onInit: function () {
			this.checkWhNumberAndWorkstation();
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
			const isTouch = sap.ui.Device.support.touch;
			isTouch && this.getView().byId("BlockLayout").addStyleClass("tablet-transform");

			//Set the jsonModel for all Elements of the screen
			this.initElementsModel();
			//Set the Message model
			this.initMessageModel();
			//Load all chained trolleys at the beginning of the dialog
			this.loadChainedPallets();

			//Set focus to the scan trolley field
			var that = this;
			setTimeout(function () {
				var input = that.getView().byId("if_scanPallet");
				input.focus();
			}, 0);
//			MLibrary.closeKeyboard();

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
			const isTouch = sap.ui.Device.support.touch;
			const reg = RegExp('customButton');
			setTimeout(() => {
				const btnArr = Array.from(document.getElementsByTagName("button")).filter(button => reg.test(button.className))
				isTouch && btnArr.forEach(button => window.setTimeout(() => button.classList.add("customTabletButton"), 0))
			}, 0)
			this.onOpenChainDialog();

		},

		_clearMessage: function () {
			var oMs = sap.ui.getCore().byId("msgStrip");
			//debugger

			if (oMs) {
				oMs.destroy();
			}
		},

		onVerifyHU: function () {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_PALLET_SRV", true);

			var oData = this.getView().getModel("nextWT").getData();
			var request = {};
			request = oData;
			request.HuidentVal = this.getView().byId("scanHU").getValue();
			request.UserComm = "01";

			oModel.create("/PtwyWTConfPallSet", request, {
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
				}
			}

			);

		},

		onVerifyDest: function () {
			this._clearMessage();
			var openDialog = false;
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_PALLET_SRV", true);

			var oData = this.getView().getModel("nextWT").getData();

			//var obj = tableModel.getProperty(path);
			var chbd = that.getView().byId("tgbtn_chgDst").getPressed();
			var userComm = "02";
			if (chbd) {
				userComm = "03";
			}

			var request = {};
			request = oData;
			request.HuidentVal = this.getView().byId("scanHU").getValue();
			request.LgplaVal = this.getView().byId("scanDest").getValue();
			request.UserComm = userComm;
			BusyIndicator.show();
			oModel.create("/PtwyWTConfPallSet", request, {
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

		onPress: function (oEvent) {
			this.toggleButton("btn_chgDst", oEvent.getSource().getPressed());
			this.getView().byId("scanDest").focus();
		},

		onScanPallet: function () {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_PALLET_SRV", true);
			var pallet = that.getView().byId("if_scanPallet").getValue();
			var resource = that.getView().byId("if_scanResource").getValue();
			var lgnum = this.whNumber;

			//var propertyString = "/Button2" + "/text";
			var request = {
				"Lgnum": lgnum,
				"Resource": resource,
				"Pallet": pallet
			};
			oModel.create("/ScanNewPallSet", request, {
				success: function (oData, response) {
					//Log.info(response);

					//Load all chained trolleys at the beginning of the dialog
					that.loadChainedPallets();
					that.getView().byId("if_scanPallet").setValue("");
					that.getView().byId("if_scanPallet").focus();


				},
				error: function (oError) {
					//var oMsg = JSON.parse(oError.responseText);
					that.handleMessageResponse(oError, true);
					that.getView().byId("if_scanPallet").setValue("");
					that.getView().byId("if_scanPallet").focus();
v				}
			}

			);
			oModel.refresh(true);

		},

		onScanResource: function () {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_PALLET_SRV", true);
			var resource = that.getView().byId("if_scanResource").getValue();
			var lgnum = this.whNumber;

			//var propertyString = "/Button2" + "/text";
			var request = {
				"Lgnum": lgnum,
				"Resource": resource,
			};
			oModel.create("/ScanNewResourceSet", request, {
				success: function (oData, response) {
					//Log.info(response);

					//Load all chained trolleys at the beginning of the dialog
					that.loadChainedPallets();
					that.getView().byId("if_scanPallet").setValue("");
					that.getView().byId("if_scanPallet").focus();


				},
				error: function (oError) {
					//var oMsg = JSON.parse(oError.responseText);
					that.handleMessageResponse(oError, true);
					that.getView().byId("if_scanResource").setValue("");
					that.getView().byId("if_scanResource").focus();
				}
			}

			);
			oModel.refresh(true);

		},

		loadChainedPallets: function () {
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap//Y20_EWM_PTWY_EXEC_PALLET_SRV", true);
			var that = this;
			BusyIndicator.show();
			var lgnum = this.whNumber;
			var resource = '';
			if (that.getView().byId("if_scanResource")) {
				resource = that.getView().byId("if_scanResource").getValue();
			}

			oModel.read("/UserRsrcScannSet(Lgnum='" + lgnum + "',Resource='" + resource + "')", {
				useBatch: false,
				urlParameters: {
					"$expand": "UserRsrc_RsrcPallet"
				},
				success: function success(data) {
					BusyIndicator.hide();

					let chainedPallets = data.UserRsrc_RsrcPallet.results;
					let modelData = { "items": chainedPallets };
					var oModelChainedPallets = new sap.ui.model.json.JSONModel();
					oModelChainedPallets.setData(modelData);
					that.getView().setModel(oModelChainedPallets, "chainedTableModel");

				},
				error: function error(err) {
					BusyIndicator.hide();

					//_this.handleMessageResponse(err);
				}
			});

		},

		onOpenChainDialog: function onOpenChainDialog() {
			var view = this.getView();
			var popupDialog = this.byId("chainDialog");

			if (!popupDialog) {
				Fragment.load({
					id: view.getId(),
					name: "y20_inb_exec_pa.view.ChoosePallet",
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

			var that = this;
            setTimeout(function () {
				var input = that.getView().byId("if_scanResource");
			  	input.focus();
            }, 0);
			// Add event delegate
			//view.byId("if_scanResource").setEditable(false);
			// view.byId("if_scanResource").addEventDelegate({
			// onfocusin : function() {
			// 	//alert("focus");
			// 	MLibrary.closeKeyboard();

			// }
			// });
			
	
			
			
		},

		onClearPallets: function () {
			//Clear the chained trolleys table
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_PALLET_SRV", true);
			var that = this;
			var resource = that.getView().byId("if_scanResource").getValue();
			var lgnum = this.whNumber;
			var request = {
				"Lgnum": lgnum,
				"Resource": resource
			};
			var that = this;
			BusyIndicator.show();
			oModel.create("/ClearPalletSet", request, {
				//   urlParameters: {
				// 	"$expand": "ScanDoc_DocHeadNav,ScanDoc_DocItemNav,ScanDoc_NewPackNav,ScanDoc_ProductNav,ScanDoc_PopDocHeadNav"
				//   },
				success: function success(data) {
					BusyIndicator.hide();
					that.loadChainedPallets();
					that.getView().byId("if_scanPallet").setValue("");
					that.getView().byId("if_scanPallet").focus();
				},
				error: function error(err) {
					BusyIndicator.hide();
					that.handleMessageResponse(err);
					that.getView().byId("if_scanPallet").setValue("");
					that.getView().byId("if_scanPallet").focus();
				}
			});
		},

		onShowKeyboard: function (oEvent) {
			var oModel = this.getElementsModel();
			var propertyString = "/keyboard" + "/inputmode";

			this.toggleButton(oEvent.mParameters.id, oEvent.mParameters.pressed);
			if (this.getView().byId("if_scanResource")) {
				this.getView().byId("if_scanResource").setEditable(false);
				this.getView().byId("if_scanResource").setEditable(true);
			}
			if (this.getView().byId("if_scanPallet")) {
				this.getView().byId("if_scanPallet").setEditable(false);
				this.getView().byId("if_scanPallet").setEditable(true);
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

		onStart: function () {
			//Close the chain dialog
			this.byId("chainDialog").close();

			this.loadNextWT();

		},

		loadNextWT: function (controller) {
			//Clear the chained trolleys table
			var oModel2 = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PTWY_EXEC_PALLET_SRV", true);
			var that2 = this;
			if (controller) {
				that2 = controller;
			}
			var lgnum = this.whNumber;
			var resource = that2.getView().byId("if_scanResource").getValue();
			BusyIndicator.show();
			//oModel.create("/ClearUserChainSet" + request, {
			oModel2.read(`/PtwyWTConfPallSet(Lgnum='${lgnum}',Resource='${resource}')`, {
				useBatch: false,
				// //   urlParameters: {
				// // 	"$expand": "ScanDoc_DocHeadNav,ScanDoc_DocItemNav,ScanDoc_NewPackNav,ScanDoc_ProductNav,ScanDoc_PopDocHeadNav"
				//   },
				success: function success(data) {
					BusyIndicator.hide();

					let nextWT = data;
					//let modelData = { "nextWT": nextWT };
					var oModelNextWT = new sap.ui.model.json.JSONModel();
					oModelNextWT.setData(nextWT);
					that2.getView().setModel(oModelNextWT, "nextWT");
					that2.buildStorageBin(true);

				},
				error: function error(err) {
					BusyIndicator.hide();
					that2.getView().getModel("nextWT").setData(null);
					//Load all chained Pallets again if no further Ptwy WT were found
					that2.getView().byId("scanHU").setValue("");
					that2.getView().byId("scanDest").setValue("");
					that2.loadChainedPallets();
					that2.onOpenChainDialog();
					that2.buildStorageBin(false);
					that2.handleMessageResponse(err);

				}
			});

		},

		buildStorageBin: function (visible) {
			//debugger;

			if (!visible) {
				this.getView().byId("ShelfDisplay").setVisible(false);
				return;
			}

			var that = this;
			var wt = this.getView().getModel("nextWT").getData();

			//Default values
			var shelfs = 1;
			var shelfToDisplay = 1;
			var shelfSections = 3;
			var targetShelfSection = 2;

			var oModel2 = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_SBIN_SERVICES_SRV", true);
			var lgnum = wt.Lgnum;
			BusyIndicator.show();
			//wt.Nlpla = 'BUL-01-03';
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
							if (sections == 1) {
								innerBoxSelected.addStyleClass("sapUiSmallMarginBegin");
							}

							if (sections == shelfSections) {
								innerBoxSelected.addStyleClass("sapUiSmallMarginEnd");
							}

							innerBoxSelected.setLayoutData(new sap.m.FlexItemData({
								growFactor: 1
							}));

							shelf.addItem(innerBoxSelected);
						} else {
							var innerBox = getBox("30px", "100%", "Start", "Center", "itemRelevant");
							if (sections == 1) {
								innerBox.addStyleClass("sapUiSmallMarginBegin");
							}

							if (sections == shelfSections) {
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