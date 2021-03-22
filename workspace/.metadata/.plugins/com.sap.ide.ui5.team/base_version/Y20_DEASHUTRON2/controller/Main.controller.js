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
	"sap/ui/table/library"
], function (Controller, Device, MessageStrip, Log, JSONModel, BaseController, Library, Message, MessageToast, Button, Dialog, Text, Fragment, tabLibrary) {
	"use strict";

	var MessageType = Library.MessageType;
	var path;
	var SortOrder = tabLibrary.SortOrder;

	return BaseController.extend("com.swl.DECO_ASSIGN_HU_TROLLEY.controller.Main", {

		whNumber: undefined,

		onInit: function () {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			//Set the jsonModel for all Elements of the screen
			this.initElementsModel();
			//Set the Message model
			this.initMessageModel();

			this.setCurrentLoggedInUser();
			this.getWarehouseNumberFromURLParams()

		},


		getWarehouseNumberFromURLParams: function () {
			var queryString = window.location.search;
			var urlParams = new URLSearchParams(queryString);
			this.whNumber = urlParams.get('whnumber');
			if (!this.whNumber) {
				//open dialog
				this.onOpenScanWhNumberDialog()
			}
		},

		onOpenScanWhNumberDialog: function () {
			var view = this.getView();
			var popupDialogWarehouseNumber = this.byId("popupDialogWarehouseNumber");

			if (!popupDialogWarehouseNumber) {
				Fragment.load({
					id: view.getId(),
					name: "com.swl.DECO_ASSIGN_HU_TROLLEY.view.WarehouseNumberDialog",
					controller: this
				}).then(function (dialog) {
					view.addDependent(dialog);
					dialog.open();
				});
			} else {
				this.byId("popupDialogWarehouseNumber").open();
			}
		},

		onConfirmWarehouseNumberDialog: function () {
			const inputValue = this.byId("formWarehouseNumberInput").getValue()
			const urlParams = new URLSearchParams(window.location.search);
			if (inputValue) {
				urlParams.set('whnumber', inputValue);
				//This reloads the application
				window.location.search = urlParams;

			} else {
				sap.m.MessageToast.show("Invalid Value!");
			}

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
			var view = this.getView();
			var that = this;
			var oModel = this.getView().getModel("odata");
			//var propertyString = "/Button2" + "/text";
			var huident = event.srcElement.value;
			var lgnum = this.whNumber;

			oModel.read("/ScanHandlingUnitSet(Lgnum='" + lgnum + "',ScanHU='" + huident + "')", {
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
						view.getModel("HU").setData(null);
						that.disableElement("btn_info");
						that.disableElement("btn_reprint");
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
						view.setModel(oModelHU, "HU");

						view.byId("scanPos").focus();
						that.enableElement("btn_info");
						that.enableElement("btn_reprint");
					}

				},
				//error: err => {
				error: function (oError) {
					//sap.ui.core.BusyIndicator.hide();
					var oInputHU = that.getView().byId("scanHU");
					var oMsg = oResourceBundle.getText("HU_READ_FAIL", oInputHU.getValue());
					that.showMessage(oMsg, MessageType.Error);

					view.getModel("HU").setData(null);
					oInputHU.setValue("");
					that.disableElement("btn_info");
					that.disableElement("btn_reprint");
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
			var oModel = this.getView().getModel("odata");
			var trolley = event.srcElement.value;
			var lgnum = this.whNumber;

			if (oInputHU.getValue().length === 0) {
				//var oText = oResourceBundle.getText("NO_HU_SCANNED");
				//this.showMessage(oText, MessageType.Error);
				//return;
				oModel.read("/ScanTrolleySet(Lgnum='" + lgnum + "',ScanTrolley='" + trolley + "')", {
					urlParameters: {
						"$expand": "ScanTrolley_TrolleyNav,ScanTrolley_TrolleyContentNav"
					},
					success: function (oData, response) {
						if (oData.ScanTrolley_TrolleyNav.Trolley.length === 0) {
							var oInput1 = that.getView().byId("scanPos");
							var oText = oResourceBundle.getText("TROLLEY_READ_FAIL", oInput1.getValue());
							that.showMessage(oText, MessageType.Error);
							oInput1.setValue("");
							oInput1.focus();
						}
						else {
							var oText = oResourceBundle.getText("TROLLEY_READ_SUCCESS", oData.ScanTrolley_TrolleyNav.Trolley);
							var oMessage = new Message({
								message: oText,
								type: MessageType.Success,
								target: "/Dummy" //,
								//processor: view.getModel()
							});
							sap.ui.getCore().getMessageManager().addMessages(oMessage);

							MessageToast.show(oText);

							oInputPos.setValue("");
							oInputHU.focus();
							that.enableElement("btn_closeTrolley");

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




					},
					error: function (oError) {
						var oInput1 = that.getView().byId("scanPos");
						var oText = oResourceBundle.getText("TROLLEY_READ_FAIL", oInput1.getValue());
						that.showMessage(oText, MessageType.Error);
						oInput1.setValue("");
						oInput1.focus();
					}
				}

				);
				return;

			}

			var oModelJson = this.getView().getModel("trolley");

			//var propertyString = "/Button2" + "/text";
			var lgNumb = this.whNumber;
			var request = {
				"Lgnum": lgNumb,
				"ScanTrolley": trolley,
				"ScanTrolley_TrolleyNav": {
					"LastHU": {
						"HUGuid": "00000000-0000-0000-0000-000000000000",
						"HUIdent": oInputHU.getValue(),
						"HUType": "",
						"PackMat": {
							"MatID": "00000000-0000-0000-0000-000000000000",
							"MatNR": ""
						}
					},
					"Lgnum": lgNumb,
					"Trolley": trolley
				},
				"ScanTrolley_TrolleyContentNav": {
					"results": [{}]
				}
			};
			oModel.create("/ScanTrolleySet", request, {
				//oModel.read("/ScanTrolleySet(Lgnum='" + lgnum + "',ScanTrolley='" + trolley + "')?$expand=ScanTrolley_TrolleyNav,ScanTrolley_TrolleyContentNav", {
				//oModel.read("/ScanTrolleySet(Lgnum='" + lgnum + "',ScanTrolley='" + trolley + "')?$expand=ScanTrolley_TrolleyNav", {
				success: function (oData, response) {
					//Log.info(response);

					var oText = oResourceBundle.getText("HU_PACKED_TO_TROLLEY_SUCCESS", [oInputHU.getValue(), trolley]);
					var oMessage = new Message({
						message: oText,
						type: MessageType.Success,
						target: "/Dummy" //,
						//processor: view.getModel()
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);

					MessageToast.show(oText);
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

					that.getView().getModel("HU").setData(null);


					oInputHU.setValue("");
					oInputPos.setValue("");

					oInputHU.focus();
					that.enableElement("btn_closeTrolley");
					that.disableElement("btn_info");
					that.disableElement("btn_reprint");
					that.disableElement("btn_undo");

					that.changeTrolley(trolley.substring(5, 6));
				},
				error: function (oError) {
					//var oMsg = JSON.parse(oError.responseText);
					var oInput1 = that.getView().byId("scanPos");
					var oText = oResourceBundle.getText("HU_PACKED_TO_TROLLEY_FAIL", [oInputHU.getValue(), oInput1.getValue()]);
					that.showMessage(oText, MessageType.Error);
					oInput1.setValue("");
					oInput1.focus();
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

			var oModel = this.getView().getModel("odata");
			var oModelTroll = this.getView().getModel("Troll");
			var request = {
				"Lgnum": oModelTroll.oData.ScanTrolley_TrolleyNav.Lgnum,
				"UserCommand": "04",
				"UserCommand_TrolleyNav": {
					"LastHU": {
						"HUGuid": "00000000-0000-0000-0000-000000000000",
						"HUIdent": "",
						"HUType": "",
						"PackMat": {
							"MatID": "00000000-0000-0000-0000-000000000000",
							"MatNR": ""
						}
					},
					"Lgnum": oModelTroll.oData.ScanTrolley_TrolleyNav.Lgnum,
					"Trolley": oModelTroll.oData.ScanTrolley_TrolleyNav.Trolley,
					"ActivArea": "",
					"WarehouseTask": "000000000000"
				}
			};
			oModel.create("/UserCommandEntCollection", request, {
				//oModel.read("/ScanHandlingUnitSet(Lgnum='" + lgnum + "',ScanHU='" + huident + "')", { urlParameters: { "$expand":"ScanHU_HUNav" } }, {
				success: function (oData, response) {
					//Log.info(response);
					var oText = oResourceBundle.getText("TROLLEY_CLOSE_SUCCESS", oModelTroll.oData.ScanTrolley_TrolleyNav.Trolley);
					var oMessage = new Message({
						message: oText,
						type: MessageType.Success,
						target: "/Dummy" //,
						//processor: view.getModel()
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);

					MessageToast.show(oText);

					that.getView().getModel("Troll").setData(null);

					that.disableElement("btn_closeTrolley");
					that.getView().byId("scanPos").setValue("");
					that.getView().byId("scanHU").focus();

				},
				error: function (oError) {
					var oMsg = oResourceBundle.getText("TROLLEY_CLOSE_FAIL", oModelTroll.oData.ScanTrolley_TrolleyNav.Trolley);
					that.showMessage(oMsg, MessageType.Error);
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
					name: "com.swl.DECO_ASSIGN_HU_TROLLEY.view.ConfTrolley",
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

			var oModel = this.getView().getModel("odata");
			var oModelTroll = this.getView().getModel("Troll");
			var lgnum = this.whNumber;
			var items = this.getView().getModel("confTableModel");

			var request = {
				"Lgnum": lgnum,
				"UserCommand": "05",
				"UserCommand_TrolleyListNav": {
					"results":
						items.oData.items

				}
			};
			oModel.create("/UserCommandEntCollection", request, {
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

					if (that.getView().getModel("Troll")) {
						that.getView().getModel("Troll").setData(null);
					}

					that.disableElement("btn_closeTrolley");
					that.getView().byId("scanPos").setValue("");
					that.getView().byId("scanHU").focus();

				},
				error: function (oError) {
					var oMsg = oResourceBundle.getText("TROLLEY_CLOSEALL_Fail", "DECO1");
					this.showMessage(oMsg, MessageType.Error);
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

			var oModel = this.getView().getModel("odata");
			var oModelTroll = this.getView().getModel("Troll");
			var lgnum = this.whNumber;
			oModel.read("/UserCommandEntCollection(Lgnum='" + lgnum + "')", {
				urlParameters: {
					"$expand": "UserCommand_TrolleyListNav"
				},
				success: function (oData, response) {
					let trolleysData = oData.UserCommand_TrolleyListNav.results;
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

			var oModel = this.getView().getModel("odata");
			var tableModel = this.getView().getModel("uiTableModel");


			var obj = tableModel.getProperty(path);
			//var propertyString = "/Button2" + "/text";
			var lgnum = this.whNumber;
			var request = {
				"Lgnum": lgnum,
				"UserCommand": "06",
				"UserCommand_TrolleyContentNav": {
					"results": [obj
					]
				}
				//				}
			};
			oModel.create("/UserCommandEntCollection", request, {
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

					let trolleyContentData = oData.UserCommand_TrolleyContentNav.results;
					let modelData = { "items": trolleyContentData };
					var oModelTable = new sap.ui.model.json.JSONModel();
					oModelTable.setData(modelData);
					that.getView().setModel(oModelTable, "uiTableModel");
					table.setModel(oModelTable, "uiTableModel");

					//that.getView().getModel("Troll").setData(null);

					//that.disableElement("btn_closeTrolley");
					that.getView().byId("scanPos").setValue("");
					that.getView().byId("scanHU").focus();
					that.disableElement("btn_info");
					that.disableElement("btn_reprint");

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

			var oModel = this.getView().getModel("odata");
			var model = this.getView().getModel("HU");
			var obj = model.getProperty("/ScanHU_HUNav");

			var huident = event.srcElement.value;
			var lgnum = this.whNumber;

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

		onReprint: function () {
			//debugger;
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;

			var oModel = this.getView().getModel("odata");
			var model = this.getView().getModel("HU");

			var obj = model.getProperty("/ScanHU_HUNav");
			var request = {
				"Lgnum": obj.Lgnum,
				"UserCommand": "02",
				"UserCommand_HUNav": obj
			};
			oModel.create("/UserCommandEntCollection", request, {
				success: function (oData, response) {
					//Log.info(response);
					var oMsg = oResourceBundle.getText("HU_PRINT_SUCCESS", obj.HUIdent);
					var oMessage = new Message({
						message: oMsg,
						type: MessageType.Success,
						target: "/Dummy" //,
						//processor: view.getModel()
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);

					MessageToast.show(oMsg);

				},
				error: function (oError) {
					var oMsg = oResourceBundle.getText("HU_PRINT_FAIL", obj.HUIdent);
					that.showMessage(oMsg, MessageType.Error);
				}
			}

			);
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

		openWCDialog: function () {
			var that = this;

			var oDialog = new Dialog({
				title: '{i18n>WC_Dialog_Title}',
				type: 'Message',
				contentWidth: "400px",
				contentHeight: "200px",
				resizable: false,
				content: [
					new sap.ui.layout.BlockLayout({
						id: 'dialogLayout',
						background: 'Dashboard',
						content: [
							new sap.ui.layout.BlockLayoutRow({
								content: [
									new sap.ui.layout.BlockLayoutCell({
										width: 1,
										title: '{i18n>Dialog_ChooseWC}',
										content: [
											new sap.m.VBox({
												height: '5rem',
												items: [
													new sap.m.FlexBox({
														justifyContent: 'SpaceBetween',
														items: [
															new Text({ text: '{i18n>Form_WC} :' }).addStyleClass("sapUiSmallMarginTop"),
															new sap.m.Input({ value: '{ELEMENTS>/header/workcenter}', submit: 'onClose' })
														]
													}).addStyleClass("sapUiSmallMarginTop")
												]
											})
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
					text: '{i18n>Btn_WCDialog_Ok}',
					press: function () {
						oDialog.close();
						setTimeout(function () {
							var input = that.getView().byId("scanHU");
							input.focus();
						}, 0);
					}
				}),
				afterClose: function () {
					oDialog.destroy();
				},
				onClose: function () {
					oDialog.close();



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
			window.location.href = url + "/sap/bc/ui5_ui5/sap/y20_deco_inb_r/index.html";
		},


		buildStorageBin: function () {
			//debugger;

			var container = sap.ui.getCore().byId("container-com.swl---Main--innergrid1--ShelfDisplay");
			var shelfs = 8;
			var shelfToDisplay = 4;
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