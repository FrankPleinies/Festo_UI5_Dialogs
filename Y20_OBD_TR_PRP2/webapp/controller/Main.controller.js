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
	"sap/ui/model/Sorter",
	"sap/ui/table/library"
], function (Controller, Device, MessageStrip, Log, JSONModel, BaseController, Library, Message, MessageToast, Button, Dialog, Text, Fragment, Sorter, tabLibrary) {
	"use strict";

	var MessageType = Library.MessageType;
	var path;
	var SortOrder = tabLibrary.SortOrder;

	return BaseController.extend("Y20_OBD_TR_PRP2.controller.Main", {
		onInit: function () {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			//Set the jsonModel for all Elements of the screen
			this.initElementsModel();
			//Set the Message model
			this.initMessageModel();

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
			//this.openWCDialog();
			var that = this;
			setTimeout(function () {
				var input = that.getView().byId("scanHU");
				input.focus();
			}, 0);
			
		},

		initView: function () {
			this.getView().invalidate();

		},

		_clearMessage: function () {
			var oMs = sap.ui.getCore().byId("msgStrip");
			//debugger

			if (oMs) {
				oMs.destroy();
			}
		},

		onDeviation: function () {
			this.showMessage("No Deviation Popup implemented", MessageType.Error);
		},

		onClose: function () {
			this.showMessage("No logic implemented", MessageType.Information);
		},

		onSelect: function (event) {
			path = event.getParameters().rowContext.sPath;
			this.enableElement("btn_undo");
		},

		onScanHU: function () {
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUTRL_SRV", true);
			var that = this;
			//var propertyString = "/Button2" + "/text";
			var huident = event.srcElement.value;
			var lgnum = "TMPL";

			oModel.read("/ScanHandlingUnitEntCollection(Lgnum='" + lgnum + "',ScanHU='" + huident + "')", {
				urlParameters: {
					"$expand": "ScanHU_HUNav"
				},
				success: function (oData, response) {
					//Log.info(response);
					if (oData.ScanHU_HUNav.HUIdent.length === 0) {
						var oInputHU = that.getView().byId("scanHU");
						var oMsg = oResourceBundle.getText("HU_READ_FAIL_EMPTY");
						that.showMessage(oMsg, MessageType.Error);

						oInputHU.setValue("");
						oInputHU.focus();
						that.getView().getModel("HU").setData(null);
					}
					else {

						var oText = oResourceBundle.getText("HU_READ_SUCCESS", huident);
						var oMessage = new Message({
							message: oText,
							type: MessageType.Success,
							target: "/Dummy" //,
							//processor: view.getModel()
						});
						sap.ui.getCore().getMessageManager().addMessages(oMessage);

						MessageToast.show(oText);

						var oModelHU = new sap.ui.model.json.JSONModel();
						oModelHU.setData(oData);
						that.getView().setModel(oModelHU, "HU");

						that.getView().byId("scanPos").focus();
					}

				},
				//error: err => {
				error: function (oError) {
					//sap.ui.core.BusyIndicator.hide();
					var oInputHU = that.getView().byId("scanHU");
					var oMsg = oResourceBundle.getText("HU_READ_FAIL", oInputHU.getValue());
					oInputHU.setValue("");
					that.showMessage(oMsg, MessageType.Error);

					that.getView().getModel("HU").setData(null);
				}
			});

		},

		onScanTrolley: function () {
			//debugger;
			
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oInputHU = this.getView().byId("scanHU");
			var oInputPos = this.getView().byId("scanPos");
			const table = this.getView().byId("tblTrolleyContent");
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUTRL_SRV", true);
			var trolley = event.srcElement.value;
			var lgnum = "TMPL";

			var request = {
				"Lgnum": "TMPL",
				"ScanTrolley": trolley,
				"ScanTrolley_TrolleyNav": {
					"Lgnum": lgnum,
					"Trolley": trolley,
					"ActivArea": "",
					"PickCons": false,
					"PoolMix": "",
					"Queue": ""
				},
			   "ScanTrolley_TrolleyContentNav": {
					"results": [{}]
				// },
				// "ScanTrolley_HUNav": {
			  // 	"Lgnum" : lgnum,
			   // 	"HUIdent" : huData.ScanHU_HUNav.HUIdent,
				// 	"HUGUID" : huData.ScanHU_HUNav.HUGuid,
				// 	"HUType" : huData.ScanHU_HUNav.HUType,
			  // 	"WarehouseTask" : "000000000000",
				// 	"WarehouseOrder" : "0000000000",
				// 	"ActivArea" : "",
			   // 	"PickCons" : false,
			   // 	"PoolMix" : ""
			}
		   };

		   if(oInputHU.getValue().length === 0) {

			} else {
				var huData = this.getView().getModel("HU").getData();
				//var propertyString = "/Button2" + "/text";
				 request.ScanTrolley_HUNav = huData.ScanHU_HUNav;
			}

  	     	oModel.create("/ScanTrolleyEntCollection", request, {
				//oModel.read("/ScanTrolleySet(Lgnum='" + lgnum + "',ScanTrolley='" + trolley + "')?$expand=ScanTrolley_TrolleyNav,ScanTrolley_TrolleyContentNav", {
				//oModel.read("/ScanTrolleySet(Lgnum='" + lgnum + "',ScanTrolley='" + trolley + "')?$expand=ScanTrolley_TrolleyNav", {
				success: function (oData, response) {
					//Log.info(response);

					if(oInputHU.getValue().length > 0) {

						var oText = oResourceBundle.getText("HU_PACKED_TO_TROLLEY_SUCCESS", [oInputHU.getValue(), trolley]);
						var oMessage = new Message({
							message: oText,
							type: MessageType.Success,
							target: "/Dummy" //,
							//processor: view.getModel()
						});
						sap.ui.getCore().getMessageManager().addMessages(oMessage);
						MessageToast.show(oText);
	
						that.getView().getModel("HU").setData(null);
						oInputHU.setValue("");
					}
					//oModel.refresh(true);
					var oModelTrolley = new sap.ui.model.json.JSONModel();
					oModelTrolley.setData(oData);
					that.getView().setModel(oModelTrolley, "Troll");

					let trolleyContentData = oData.ScanTrolley_TrolleyContentNav.results;
					let modelData = { "items": trolleyContentData };
					var oModelTable = new sap.ui.model.json.JSONModel();
					oModelTable.setData(modelData);
					that.getView().setModel(oModelTable, "uiTableModel");
					table.setModel(oModelTable, "uiTableModel");
					//Initial sorting
					var oProductNameColumn = that.getView().byId("col1");
					table.sort(oProductNameColumn, SortOrder.Ascending);



					oInputPos.setValue("");

					oInputHU.focus();
					that.enableElement("btn_closeTrolley");
					that.disableElement("btn_undo");

					that.changeTrolley(trolley.substring(5, 6));
				},
				error: function (oError) {
					//var oMsg = JSON.parse(oError.responseText);
					that.handleMessageResponse(oError, false);
					oInputPos.setValue("");

					//var oInput1 = that.getView().byId("scanPos");
					//var oText = oResourceBundle.getText("HU_PACKED_TO_TROLLEY_FAIL", [oInputHU.getValue(), oInput1.getValue()]);
					//that.showMessage(oText, MessageType.Error);
					that.changeTrolley(0);
				}
			}

			);
			oModel.refresh(true);
		},

		onCloseTrolley: function () {
			//debugger;
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			//var oModelHU = this.getView().getModel();
			var that = this;

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUTRL_SRV", true);
			var oModelTroll = this.getView().getModel("Troll").getData();
			var request = {};
			request = oModelTroll.ScanTrolley_TrolleyNav;
			
			oModel.create("/TrolleyEntCollection", request, {
				//oModel.read("/ScanHandlingUnitSet(Lgnum='" + lgnum + "',ScanHU='" + huident + "')", { urlParameters: { "$expand":"ScanHU_HUNav" } }, {
				success: function (oData, response) {
					//Log.info(response);
					var oText = oResourceBundle.getText("TROLLEY_CLOSE_SUCCESS", oModelTroll.ScanTrolley_TrolleyNav.Trolley);
					var oMessage = new Message({
						message: oText,
						type: MessageType.Success,
						target: "/Dummy" //,
						//processor: view.getModel()
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);

					MessageToast.show(oText);

					that.getView().getModel("Troll").setData(null);
					that.getView().getModel("uiTableModel").setData(null);


					that.disableElement("btn_closeTrolley");
					that.getView().byId("scanPos").setValue("");
					that.getView().byId("scanHU").focus();

				},
				error: function (oError) {
					//var oMsg = oResourceBundle.getText("TROLLEY_CLOSE_FAIL", oModelTroll.ScanTrolley_TrolleyNav.Trolley);
					//that.showMessage(oMsg, MessageType.Error);
					that.handleMessageResponse(oError, false);

				}
			}

			);
			oModel.refresh(true);
		},

		onOpenConfDialog: function onOpenDialog() {
			var view = this.getView();
			var popupDialog = this.byId("confDialog");
	  
			if (!popupDialog) {
			  Fragment.load({
				id: view.getId(),
				name: "Y20_OBD_TR_PRP2.view.ConfTrolley",
				controller: this
			  }).then(function (popupDialog) {
				view.addDependent(popupDialog);
				popupDialog.open();
			  });
			} else {
			  this.byId("confDialog").open();
			}
		  },

		  onConfirmConfDialog: function onConfirmDialog() {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			//var oModelHU = this.getView().getModel();
			var that = this;

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUTRL_SRV", true);
			var oModelTroll = this.getView().getModel("Troll");
			var lgnum = 'TMPL';
			var items = this.getView().getModel("confTableModel");

			var request = {
			 	"Lgnum": lgnum,
			 	"TrolleyCloseListNav": {
					"results": 
						items.oData.items
					
			 	}
			 };
			 oModel.create("/TrolleyCloseListEntCollection", request, {
			 	//oModel.read("/ScanHandlingUnitSet(Lgnum='" + lgnum + "',ScanHU='" + huident + "')", { urlParameters: { "$expand":"ScanHU_HUNav" } }, {
			 	success: function (oData, response) {
			 		//Log.info(response);
			 		var oText = oResourceBundle.getText("TROLLEY_CLOSEALL_SUCCESS");
			 		var oMessage = new Message({
			 			message: oText,
			 			type: MessageType.Success,
			 			target: "/Dummy" //,
			 			//processor: view.getModel()
			 		});
			 		sap.ui.getCore().getMessageManager().addMessages(oMessage);
			 		MessageToast.show(oText);
					
					if(that.getView().getModel("Troll")) {
						that.getView().getModel("Troll").setData(null);
					}

			 		that.disableElement("btn_closeTrolley");
			 		that.getView().byId("scanPos").setValue("");
			 		that.getView().byId("scanHU").focus();

			 	},
			 	error: function (oError) {
			 		//var oMsg = oResourceBundle.getText("TROLLEY_CLOSEALL_Fail", "DECO1");
					 //this.showMessage(oMsg, MessageType.Error);
					 that.handleMessageResponse(oError, false);
			 	}
			 }

			 );
			var popupDialog = this.byId("confDialog");
			popupDialog.close();
		  },

		  onCloseConfDialog: function () {
			  this.byId("confDialog").close();
		  },

		onCloseAllTrolley: function () {
			//debugger;
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			//var oModelHU = this.getView().getModel();
			var that = this;

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUTRL_SRV", true);
			var oModelTroll = this.getView().getModel("Troll");
			var lgnum = 'TMPL';
			var filterValue = "Lgnum eq 'TMPL'";
			oModel.read("/TrolleyCloseListEntCollection", {
				useBatch: false,
				urlParameters: {
					"$filter": filterValue
			  },
		//    oModel.read("/TrolleyCloseListEntCollection(Lgnum='" + lgnum + "')", {
		// 		urlParameters: {
		// 			"$expand": "UserCommand_TrolleyListNav"
		// 		},
				success: function (oData, response) {
					let trolleysData = oData.results;
					let modelData = { "items": trolleysData };
					var oModelTable = new sap.ui.model.json.JSONModel();
					oModelTable.setData(modelData);
					that.getView().setModel(oModelTable, "confTableModel");
					//table.setModel(oModelTable, "confTableModel");

					that.onOpenConfDialog();

				},
				error: function (oError) {
					var oInput1 = that.getView().byId("scanPos");
					var oText = oResourceBundle.getText("TROLLEY_READ_FAIL", oInput1.getValue());
					that.showMessage(oText, MessageType.Error);
				}
			}

			);


			oModel.refresh(true);
		},

		onUndo: function () {
			//debugger;
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			//var oModelHU = this.getView().getModel();
			var that = this;
			const table = this.getView().byId("tblTrolleyContent");

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUTRL_SRV", true);
			var tableModel = this.getView().getModel("uiTableModel");


			var obj = tableModel.getProperty(path);
			//var propertyString = "/Button2" + "/text";
			var lgnum = "TMPL";
			
			//var oData = this.getView().getModel("nextWT").getData();
			var request = {};
			//request = oData;
			request.Lgnum = lgnum;
			request.TrolleyContent_ListNav = { results: [obj] };
			// var request = {
			// 	"Lgnum": lgnum,
			// 	"Trolley": "06",
			// 	"TrolleyContent_ListNav": {
			// 		"results": [obj
			// 		]
			// 	}
			// 	//				}
			// };
			oModel.create("/TrolleyContentEntCollection", request, {
				success: function (oData, response) {
					//Log.info(response);
					var oText = oResourceBundle.getText("UNDO_HU_SUCCESS", obj.HU.HUIdent);
					var oMessage = new Message({
						message: oText,
						type: MessageType.Success,
						target: "/Dummy" //,
						//processor: view.getModel()
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);

					MessageToast.show(oText);

					let trolleyContentData = oData.TrolleyContent_ListNav.results;
					let modelData = { "items": trolleyContentData };
					var oModelTable = new sap.ui.model.json.JSONModel();
					oModelTable.setData(modelData);
					that.getView().setModel(oModelTable, "uiTableModel");
					table.setModel(oModelTable, "uiTableModel");

					//that.getView().getModel("Troll").setData(null);

					//that.disableElement("btn_closeTrolley");
					that.getView().byId("scanPos").setValue("");
					that.getView().byId("scanHU").focus();

				},
				error: function (oError) {
					var oMsg = oResourceBundle.getText("UNDO_HU_FAIL", obj.HU.HUIdent);
					that.showMessage(oMsg, MessageType.Error);
				}
			}

			);
			oModel.refresh(true);
		},

		onInfo: function () {
			//debugger;
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUTRL_SRV", true);
			var model = this.getView().getModel("HU");
			var obj = model.getProperty("/ScanHU_HUNav");

			oModel.read(`/ItemTextEntCollection(Lgnum='${obj.Lgnum}',HUIdent='${obj.HUIdent}')`, {
				success: function (oData, response) {
					//Log.info(response);

						var oModelInfo = new sap.ui.model.json.JSONModel();
						oModelInfo.setData(oData);
						that.getView().setModel(oModelInfo, "info");

						that.openInfoDialog();
				},
				//error: err => {
				error: function (oError) {
					//sap.ui.core.BusyIndicator.hide();
					// var oInputHU = that.getView().byId("scanHU");
					// var oMsg = oResourceBundle.getText("HU_READ_FAIL", oInputHU.getValue());
					// that.showMessage(oMsg, MessageType.Error);

					// view.getModel("HU").setData(null);
					// oInputHU.setValue("");
					// that.disableElement("btn_info");
					// that.disableElement("btn_reprint");
				}
			});

			oModel.refresh(true);
		},

		openInfoDialog: function () {
			var that = this;

			var oDialog = new Dialog({
				title: '{i18n>Info_Dialog_Title}',
				type: 'Message',
				contentWidth: "600px",
				contentHeight: "450px",
				resizable: true,
				content: [
					new sap.ui.layout.BlockLayout({
						id: 'dialogLayout',
						background: 'Dashboard',
						content: [
							new sap.ui.layout.BlockLayoutRow({
								content: [
									new sap.ui.layout.BlockLayoutCell({
										width: 1,
										title: '{i18n>Form_Product}',
										content: [
											new sap.m.VBox({
												height: '10rem',
												items: [
													new sap.m.FlexBox({
														justifyContent: 'SpaceBetween',
														items: [
															new Text({ text: '{i18n>Form_Product} :' }).addStyleClass("customTextSmall"),
															new Text({ text: '{HU>/ScanHU_HUNav/Product/MatNR}' }).addStyleClass("customTextSmall")
														]
													})
												]
											})
										]
									}).addStyleClass("smallPaddingCustom customCellHeader")
								]
							}),
							new sap.ui.layout.BlockLayoutRow({
								content: [
									new sap.ui.layout.BlockLayoutCell({
										width: 1,
										title: '{i18n>Form_ERP_Texts}',
										content: [
											new Text({ text: '{info>/Text}' }).addStyleClass("customTextSmall")
										]
									}).addStyleClass("smallPaddingCustom customCellHeader")
								]
							})

						]
					})
				],


				// beginButton: new Button({
				// 	type: ButtonType.Emphasized,
				// 	text: 'Submit',
				// 	press: function () {
				// 		var sText = sap.ui.getCore().byId('confirmDialogTextarea').getValue();
				// 		MessageToast.show('Note is: ' + sText);
				// 		oDialog.close();
				// 	}
				// }),
				endButton: new Button({
					text: '{i18n>Btn_Dialog_Close}',
					press: function () {
						oDialog.close();
					}
				}),
				afterClose: function () {
					oDialog.destroy();
				}
			});
			// Enable responsive padding by adding the appropriate classes to the control
			oDialog.addStyleClass("sapUiResponsivePadding--content sapUiResponsivePadding--header sapUiResponsivePadding--footer sapUiResponsivePadding--subHeader");

			//to get access to the global model
			this.getView().addDependent(oDialog);
			//oDialog.setModel(that.getView().getModel("HU"), "HU");
			oDialog.open();
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

		onGoToAssignPressed: function onGoToAssignPressed() {
			var url = window.location.protocol + "//" + window.location.host;
			window.location.href = url + "/sap/bc/ui5_ui5/sap/Y20_OBD_TR_PRP1/index.html";
		  },
		
		sortTable : function(oEvent) {
			var oCurrentColumn = oEvent.getParameter("column");

			//oEvent.preventDefault();
//			this._resetSortingState(); //No multi-column sorting

			var sOrder = oEvent.getParameter("sortOrder");


//			var oSorter = new Sorter(oCurrentColumn.getSortProperty(), sOrder ? SortOrder.Descending : SortOrder.Ascending, true );
			//var oSorter = new Sorter(oCurrentColumn.getSortProperty(), sOrder === SortOrder.Descending, true);

			this.getView().byId("tblTrolleyContent").getBinding("rows").sort(oCurrentColumn.getSortProperty(), sOrder, false);

		}		  



	});
});