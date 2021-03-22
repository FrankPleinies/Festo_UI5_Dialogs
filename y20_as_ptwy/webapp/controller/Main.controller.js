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



	return BaseController.extend("y20_as_ptwy.controller.Main", {

		currentSelectedTableItemFromFirstSection: undefined,
		formatter: formatter,

		onInit: function () {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			this.checkWhNumberAndWorkstation();

			this.initWhenNotLocked();

		},

		initWhenNotLocked: function () {
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_DIA_LOGON_SRV", true);
			const workStation = this.workstation;
			const ws_mode = "PTWY";
			var that = this;
			if (workStation) {
				let setInfo = `(WORKSTATION='${workStation}',WS_MODE='${ws_mode}')`
				BusyIndicator.show();
				oModel.read("/LogonCollection" + setInfo, {
					useBatch: false,
					success: (data, response) => {
						BusyIndicator.hide();
						//Set the jsonModel for all Elements of the screen
						that.initElementsModel();
						//Set the Message model
						that.initMessageModel();

						//Call AutoStoreController
						that.ASctrl = new ASController(this);
						that.ASctrl.openPort();

						that.setCurrentLoggedInUser();
						that.refreshUIElements();

						//Catch event when browser refresh is triggered
						window.addEventListener("beforeunload", function (e) {
							that.handleBeforeUnload(that);
						});

						//Catch event when Browser/Tab is closed
						window.addEventListener("unload", function (e) {
							that.handleUnload(that);
						});

					},
					error: err => {
						BusyIndicator.hide();
						that.handleMessageResponse(err ,true);
					}
				});
			} else {
				sap.m.MessageToast.show("Enter Data!")
			}

		},

		handleBeforeUnload: function handleBeforeUnload(Controller) {
			Controller.logoffFromWorkstation();
			console.log("BeforeUnload event");
			//Controller.ASctrl.closePort();
		},

		handleUnload: function handleUnload(Controller) {
			Controller.logoffFromWorkstation();
			console.log("Unload event");
			//BusyIndicator.show();
			//Controller.ASctrl.closePort();
			//BusyIndicator.hide();
		},

		logoffFromWorkstation: function() {
			var that = this;
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_DIA_LOGON_SRV", true);
			const request = {};
			request.LGNUM = this.whNumber;
			request.WORKSTATION = this.workstation;
				oModel.create("/LogoffCollection", request, {
					useBatch: false,
					success: (data, response) => {
						//BusyIndicator.hide();
						//that.ASctrl.closePort();
	
					},
					error: err => {
						//BusyIndicator.hide();
						that.handleMessageResponse(err);
						that.ASctrl.closePort();
					}
				});

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
				this.enableElement("btn_hucomplete");
				this.enableElement("btn_chglayout");
				this.setTitleTexts("Grid3", modelHU.oData.BinID);
				this.enableElement("btn_pack");
				this.enableElement("qty_counted");
				if (!this.ASctrl.getSelectedCompartment()) {
					this.disableElement("btn_pack");
					this.disableElement("qty_counted");
				}

				this.enableElement("btn_reprint");
				if (modelHU.oData.DefaultLayout) {
					this.disableElement("btn_reprint");
				}
			} else {
				this.disableElement("btn_hucomplete");
				this.disableElement("btn_chglayout");
				this.setTitleTexts("Grid3");
				this.disableElement("btn_pack");
				this.disableElement("qty_counted");
				this.disableElement("btn_reprint");
			}

		},

		_clearMessage: function () {
			var oMs = sap.ui.getCore().byId("msgStrip");
			//debugger

			if (oMs) {
				oMs.destroy();
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

		onScanSubmit: function onScanSubmit(oEvent, value) {
			var _this = this;

			var scannedValue;
			if (oEvent) {
				//oEvent.getSource().setEnabled(false);
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

					_this.selectFirstTableRow(_this.currentSelectedTableItemFromFirstSection);

					_this.setTitleTexts("Grid1", scannedValue);
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

		selectFirstTableRow: function selectFirstTableRow(lastSelectedRow) {
			var table = this.byId("uiTable");
			var firstRow = table.getRows()[0];

			if (lastSelectedRow !== undefined) {
				if (lastSelectedRow < table.getBinding().getModel().getData().results.length) {
					this.onRowSelectionChangeUiTable(undefined, lastSelectedRow);
					setTimeout(function () {
						return table.setSelectedIndex(lastSelectedRow);
					}, 0);
				} else if (firstRow && firstRow.getCells()[0].getText()) {
					this.onRowSelectionChangeUiTable(undefined, 0);
					setTimeout(function () {
						return firstRow._setSelected(true);
					}, 0);

				}
			}
			else if (firstRow && firstRow.getCells()[0].getText()) {
				this.onRowSelectionChangeUiTable(undefined, 0);
				setTimeout(function () {
					return firstRow._setSelected(true);
				}, 0);
			}
		},

		//  * Select row from section one UI table
		//  * param  {Object} event SAPUI5 Standard UI event
		//  * param  {Number} selectRow Select any row in the table
		//  * return {Void}   
		onRowSelectionChangeUiTable: function onRowSelectionChangeUiTable(event, selectRow) {
			var _this4 = this;

			var table = this.byId("uiTable");
			var selectedIndex = -1; //If selectRow is passed use it.

			if (selectRow !== undefined) {
				selectedIndex = selectRow; // If selectFirstRow is passed use 0.
			} else {
				selectedIndex = table.getSelectedIndex();
			}

			if (selectedIndex !== -1) {
				this.currentSelectedTableItemFromFirstSection = selectedIndex;
				var dataArr = this.getView().getModel("modelDocItemNav").getData().results;
				var docId = dataArr[selectedIndex].DocId;
				var lgNum = dataArr[selectedIndex].Lgnum;
				var itemId = dataArr[selectedIndex].ItemId;

				var createdHUNav = dataArr[selectedIndex];
				var jsonModelCreatedHUNav = new JSONModel(createdHUNav);

				_this4.getView().setModel(jsonModelCreatedHUNav, "selectedRow");
				_this4.refreshModels();

				_this4.getElementsModel().setProperty("/qty_counted/value", createdHUNav.Qty.Quan);
				_this4.getElementsModel().refresh(true);

				_this4.setCountBtnText(_this4.getElementsModel().getProperty("/qty_counted/value"));

				//   var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_EWM_AS_INBOUND_SRV", true);
				//   var setInfo = "(Lgnum='".concat(lgNum, "',DocId=guid'").concat(docId, "',ItemId=guid'").concat(itemId, "')");
				//   BusyIndicator.show();
				//   oModel.read("/DocumentItemSet" + setInfo, {
				// 	useBatch: false,
				// 	urlParameters: {
				// 	  "$expand": "DocItem_CreatedHUNav,DocItem_NewPackNav,DocItem_ProductNav"
				// 	},
				// 	success: function success(data, resp) {
				// 	  BusyIndicator.hide();
				// 	  var productNav = data.DocItem_ProductNav;
				// 	  var jsonModelproductNav = new JSONModel(productNav);

				// 	  _this4.getView().setModel(jsonModelproductNav, "modelProductNav"); //Popup dialogs below
				// 	  // if (productNav.IndConf && this.isPopupShownArray[this.currentSelectedTableItemFromFirstSection]) {
				// 	  // 	this.isPopupShownArray[this.currentSelectedTableItemFromFirstSection] = false
				// 	  // 	this.onOpenWeightDialog()
				// 	  // }


				// 	  var createdHUNav = data.DocItem_CreatedHUNav;
				// 	  var jsonModelCreatedHUNav = new JSONModel(createdHUNav);

				// 	  _this4.getView().setModel(jsonModelCreatedHUNav, "modelcreatedHUNav");

				// 	  var newPackNav = data.DocItem_NewPackNav;
				// 	  var jsonModelnewPackNav = new JSONModel(newPackNav);

				// 	  _this4.getView().setModel(jsonModelnewPackNav, "modelNewPackNav");

				// 	  _this4.refreshModels();

				// 	  sap.m.MessageToast.show("Data Updated!");

				// 	  _this4.handleMessageResponse(resp);

				// 	  if (!noFocus) {
				// 		setTimeout(function () {
				// 		  //return _this4.byId("scanPackHUType").focus();
				// 		}, 0);
				// 	  }
				// 	},
				// 	error: function error(err) {
				// 	  BusyIndicator.hide();

				// 	  _this4.handleMessageResponse(err);
				// 	}
				//   });
			}
		},

		onPackPressed: function onPackPressed(oEvent) {
			var _this10 = this;

			var element = oEvent.getSource();
			element.setEnabled(false);
			BusyIndicator.show();
			var selectedIndex = this.currentSelectedTableItemFromFirstSection;

			if (selectedIndex !== undefined) {
				var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PUTAWAY_SRV", {
					useBatch: false
				});
				var selectedItem = this.getView().getModel("selectedRow").getData();
				var sourceHU = this.getView().getModel("modelDocHeadNav").getData().ScanHU;
				var tableModelItems = this.getView().getModel("modelDocItemNav").getData().results;

				var request = {};
				request.Lgnum = selectedItem.Lgnum;
				request.UserCommand = "01";
				request.Docid = selectedItem.DocId;
				request.Itemid = selectedItem.Itemid;
				request.SourceHU = sourceHU;
				request.DestTopHU = this.ASctrl.getTopHUIdent();
				request.DestHU = this.ASctrl.getSelectedCompartment();
				request.Qty = this.getView().byId("stepInputQuan").getValue().toString();
				request.Guid_Parent = selectedItem.Guid_Parent;
				request.Guid_Stock = selectedItem.Guid_Stock;
				request.Workstation = this.workstation;
				request.DocumentItemEntSet = tableModelItems;

				oModel.create("/UserCommandEntCollection", request, {
					success: function success(successData, response) {
						element.setEnabled(true);
						BusyIndicator.hide();

						_this10.handleMessageResponse(response);

						sap.m.MessageToast.show("Packing Sucessfull!"); //update table 3
						//_this10.createModelsFromData(successData);
						//_this10.refreshModels();

						//_this10.onRowSelectionChangeUiTable(null, selectedIndex);
						_this10.getView().setModel(new JSONModel(), "selectedRow");
						_this10.refreshModels();
						_this10.getElementsModel().setProperty("/qty_counted/value", 0);
						_this10.getElementsModel().refresh(true);
						_this10.setCountBtnText(_this10.getElementsModel().getProperty("/qty_counted/value"));

						//Refresh the AS Bin data
						_this10.ASctrl.reReadHU();
						//Refresh the source table
						var source = _this10.getView().getModel("modelDocHeadNav").getData().ScannedValue;
						_this10.onScanSubmit(null, source);

					},
					error: function error(err) {
						element.setEnabled(true);
						BusyIndicator.hide();

						_this10.handleMessageResponse(err);
					}
				});
			} else {
				element.setEnabled(true);
				BusyIndicator.hide();
				sap.m.MessageToast.show("No item are selected.");
			}
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

		onConfirmDialog: function onConfirmDialog() {
			var _this3 = this;

			var table = this.byId("uiTablePopup");
			var selectedIndex = table.getSelectedIndex();

			if (selectedIndex !== -1) {
				var dataArr = this.getView().getModel("modelPopDocHeadNav").getData().results;
				var docId = dataArr[selectedIndex].DocId;
				var lgNum = dataArr[selectedIndex].Lgnum;
				var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_EWM_AS_INBOUND_SRV", true);
				var setInfo = "(Lgnum='".concat(lgNum, "',DocId=guid'").concat(docId, "')");
				oModel.read("/PopupSelectDocEntCollection" + setInfo, {
					useBatch: false,
					urlParameters: {
						"$expand": "PopDocHead_DocHeadNav,PopDocHead_DocItemNav"
					},
					success: function success(data) {
						var docHeadNav = data.PopDocHead_DocHeadNav;
						var jsonModelDocHeadNav = new JSONModel(docHeadNav);

						_this3.getView().setModel(jsonModelDocHeadNav, "modelDocHeadNav");

						// _this3.byId("blockLayoutCellFirst").setTitle("SAP IBD : ".concat(+docHeadNav.DocNo));

						var docItemNav = data.PopDocHead_DocItemNav;
						var jsonModeldocItemNav = new JSONModel(docItemNav);

						_this3.getView().setModel(jsonModeldocItemNav, "modelDocItemNav");

						_this3.refreshModels();

						setTimeout(function () {
							return _this3.selectFirstTableRow();
						}, 0);
					},
					error: function error(err) {
						console.log(err);
					}
				});
			} else {
				sap.m.MessageToast.show("No Item Selected!");
			}

			var popupDialog = this.byId("popupDialog");
			popupDialog.close();
		},

		onQuanChange: function (oEvent) {
			var propertyString = "/qty_counted" + "/value";
			this.getElementsModel().setProperty(propertyString, oEvent.getParameter("value"));
			this.getElementsModel().refresh(true);

			this.setCountBtnText(oEvent.getParameter("value"));
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

		onPressReprint: function (oEvent) {
			var _this10 = this;
			this._clearMessage();
			//sap.m.MessageToast.show("Label is not yet implemented.");

			var selectedRow = oEvent.getSource().getParent().getIndex();
			var dataArr = this.getView().getModel("BinContent").getData().results;
			var compartment = dataArr[selectedRow];
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PUTAWAY_SRV", {
				useBatch: false
			});

			if (!this.getView().getModel("modelDocItemNav")) {
				this.getView().setModel(new JSONModel(null), "modelDocItemNav");
			}
			var tableModelItems = this.getView().getModel("modelDocItemNav").getData().results;
			var request = {};
			request.Lgnum = this.whNumber;
			request.UserCommand = "03";
			request.Product = {};
			request.Product.MATNR = compartment.Product.MATNR;
			request.Product.MAKTX = compartment.Product.MAKTX;
			request.Quantity = {};
			request.Quantity.Quan = compartment.Quant.Quan.toString();
			request.Quantity.Unit = compartment.Quant.Unit;
			request.Workstation = this.workstation;
			request.DestHU = compartment.BinID;
			request.DestTopHU = this.getView().getModel("HU").getData().BinID;
			request.DocumentItemEntSet = tableModelItems;
			BusyIndicator.show();
			oModel.create("/UserCommandEntCollection", request, {
				success: function success(successData, response) {
					BusyIndicator.hide();
					sap.m.MessageToast.show("Reprint successful!"); //update table 3
				},
				error: function error(err) {
					BusyIndicator.hide();
					_this10.handleMessageResponse(err);
				}
			});

		},

		onPressHUComplete: function (oEvent) {

			var _this11 = this;
			_this11._clearMessage();
			BusyIndicator.show();

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PUTAWAY_SRV", {
				useBatch: false
			});
			//var selectedItem = this.getView().getModel("selectedRow").getData();
			//var sourceHU = this.getView().getModel("modelDocHeadNav").getData().ScanHU;

			if (!this.getView().getModel("modelDocItemNav")) {
				this.getView().setModel(new JSONModel(null), "modelDocItemNav");
			}
			var tableModelItems = this.getView().getModel("modelDocItemNav").getData().results;
			var request = {};
			request.Lgnum = _this11.whNumber;
			request.UserCommand = "02";
			//request.Docid = selectedItem.DocId;
			//request.Itemid = selectedItem.Itemid;
			//request.SourceHU = sourceHU;
			request.DestTopHU = this.ASctrl.getTopHUIdent();
			//request.DestHU = this.ASctrl.getSelectedCompartment(); 
			//request.Qty =  this.getView().byId("stepInputQuan").getValue().toString();
			//request.Guid_Parent = selectedItem.Guid_Parent;
			//request.Guid_Stock = selectedItem.Guid_Stock;
			request.DocumentItemEntSet = tableModelItems;

			oModel.create("/UserCommandEntCollection", request, {
				success: function success(successData, response) {
					BusyIndicator.hide();

					_this11.handleMessageResponse(response);

					sap.m.MessageToast.show("HU Complete Sucessfull!"); //update table 3
					//_this10.createModelsFromData(successData);
					//_this10.refreshModels();

					//_this10.onRowSelectionChangeUiTable(null, selectedIndex);
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

		onPressLayout: function (hutype) {
			this._clearMessage();
			this.ASctrl.changeLayout(true, hutype);

		},

		onExitPressed: function () {
			this.ASctrl.closePort();
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
		},

		afterOpenSelection: function afterOpenSelection() {
			var _this = this;
			var container = _this.getView().byId("BinTypes");
			container.destroyItems();

			var row = createRow("LayoutRow");
			container.addItem(row);

			var image = createImage("AS01", "./img/AS01.png");
			row.addItem(image);
			var image = createImage("ASH2", "./img/ASH2.png");
			row.addItem(image);
			var image = createImage("ASV2", "./img/ASV2.png");
			row.addItem(image);
			var image = createImage("AS04", "./img/AS04.png");
			row.addItem(image);
			var image = createImage("AS08", "./img/AS08.png");
			row.addItem(image);

			function createImage(id, src) {
				return new sap.m.Image({
					id: id,
					src: src,
					press: function (e) {
						console.log("Image pressed");
						var popupDialog = _this.byId("popupDialogSelection");
						_this.onPressLayout(e.getSource().getId()); //Transfer the HU Type for selecting
						popupDialog.close();
						//that.onSelectComp(e);
					}
					//alignItems: alignItems,
					//justifyContent: justifyContent
				}).addStyleClass("sapUiSmallMargin");
			}

			function createRow(id) {
				return new sap.m.FlexBox({
					id: id,
					//height: height,
					width: "100%"
					//text: text
					//alignItems: alignItems,
					//justifyContent: justifyContent
				});//.addStyleClass(styleClass);
			}


		},

		onPressChgLayout: function (oEvent) {
			this.onOpenSelectionDialog();
		},

		onOpenSelectionDialog: function onOpenSelectionDialog() {
			var view = this.getView();
			var popupDialogSelection = this.byId("popupDialogSelection");

			if (!popupDialogSelection) {
				Fragment.load({
					id: view.getId(),
					name: "y20_as_ptwy.view.popupDialogSelCC",
					controller: this
				}).then(function (popupDialogSelection) {
					view.addDependent(popupDialogSelection);
					popupDialogSelection.open();
				});
			} else {
				this.byId("popupDialogSelection").open();
			}
		},







	});
});