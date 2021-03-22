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

	return BaseController.extend("zswl_as_pickint.controller.Main", {

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
				that.getView().byId("btn_hucreate").focus();
			}, 0);
			// MLibrary.closeKeyboard();

			//Call AutoStoreController
			this.ASctrl = new ASController(this);
			this.ASctrl.openPort();

			this.setCurrentLoggedInUser();
			this.refreshUIElements();
		},

		handleProgressIndicator: function handleProgressIndicator() {
			var propertyStringDisplayValue = "/pi_picks" + "/displayValue";
			var propertyStringPercentValue = "/pi_picks" + "/percentValue";
			var propertyStringStateValue = "/pi_picks" + "/state";

			var picksCompleted = this.getView().getModel("OrderData").getData().ProcessedPicks;
			var totalPicks = this.getView().getModel("OrderData").getData().TotalPicks;

			var valueStateValue = 0;
			var valueDisplayValue = picksCompleted.toString().concat("/").concat(totalPicks.toString());
			var valuePercentValue = 0;
			if (picksCompleted == 0) {
				valuePercentValue = 0;
			} else {
				valuePercentValue = (picksCompleted * 100) / totalPicks;

			}
			switch (valuePercentValue) {
				case 0:
					valueStateValue = "None";
					break;
				case 100:
					valueStateValue = "Success";
					break;
				default:
					valueStateValue = 'Warning';
					break;
			}

			//var valueStateValue   = "Success";

			this.getElementsModel().setProperty(propertyStringDisplayValue, valueDisplayValue);
			this.getElementsModel().setProperty(propertyStringPercentValue, valuePercentValue);
			this.getElementsModel().setProperty(propertyStringStateValue, valueStateValue);
			this.getElementsModel().refresh(true);

			//var oProgressIndicator = this.getView().byId("pi_picks");

			//oProgressIndicator.setPercentValue(valuePercentValue);
			//oProgressIndicator.setDisplayValue(valueDisplayValue);
			//oProgressIndicator.setState(valueStateValue);
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
			this.refreshUIElements();
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
			let modelTargetHU = this.getView().getModel("TargetHU");
			let modelOrderData = this.getView().getModel("OrderData");
			let modelWarehouseTask = this.getView().getModel("WarehouseTask");
			this.showElement("btn_hucreate");
			this.hideElement("btn_hudlvcomplete");

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
				//this.disableElement("btn_pack");
				//this.disableElement("qty_counted");
			}

			if (modelTargetHU && modelTargetHU.oData && modelTargetHU.oData.Huident) {
				this.setTitleTexts("Grid3", modelTargetHU.oData.Huident);
				this.hideElement("btn_hucreate");
				this.showElement("btn_hudlvcomplete");
			} else {
				this.setTitleTexts("Grid3");
				this.showElement("btn_hucreate");
				this.hideElement("btn_hudlvcomplete");
			}

			if (modelWarehouseTask && modelWarehouseTask.oData && modelWarehouseTask.oData.Tanum) {
				this.enableElement("btn_deviation");
			} else {
				this.disableElement("btn_deviation");
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

		checkNextWtForBin: function checkNextWtForBin() {
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PICKING_SRV", true);

			//var lgnum = this.whNumber;
			var works = this.workstation;
			var lgnum = this.whNumber;

			oModel.read("/WarehouseTaskSet(Lgnum='" + lgnum + "',ASTask='',Huident='',EWMDlvNo='',Workstation='" + works + "')", {
				//urlParameters: {
				//	"$expand": "ASBin_ASBinContentNav,ASBin_BuildGridNav,ASBin_ASBinCompContentNav"
				//},
				success: function (oData, response) {
					var oModel = new sap.ui.model.json.JSONModel();
					//IF one WT found, then we have a further pick from this Bin, don't call CloseBin
					if (oData.Tanum) {

					} else {
						if(warehouseTask.OrderDataEnt.Completed) {
							that.ASctrl.closeBin();
						} else {
						that.ASctrl.closeBin(true);
						}
					}
					that.refreshUIElements();
				},
				error: function (oError) {
					that.handleMessageResponse(oError, false);
				}
			}

			);

		},

		loadNextWT: function loadNextWT() {
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PICKING_SRV", true);

			//var lgnum = this.whNumber;
			var works = this.workstation;
			var lgnum = this.whNumber;

			oModel.read(`/WarehouseTaskSet(Lgnum='${lgnum}',ASTask='',Huident='',EWMDlvNo='',Workstation='${works}')`, {
				urlParameters: {
					"$expand": "OrderDataEnt,DeliveryHUEntSet"
				},
				success: function (oData, response) {
					var oModelWT = new sap.ui.model.json.JSONModel();
					//Set HU model
					oModelWT.setData(oData);
					that.getView().setModel(oModelWT, "WarehouseTask");
					//Set Order Data model
					let orderData = oData.OrderDataEnt;
					var oModelOrderData = new sap.ui.model.json.JSONModel();
					oModelOrderData.setData(orderData);
					that.getView().setModel(oModelOrderData, "OrderData");

  					//var link = document.getElementById('BTN22');
					//var button =document.querySelector("button#BTN22");
					//$('button#BTN22').trigger('click');
					//oData.SoureHUComp = '11';
					that.ASctrl.compButtons.forEach(element => that.toggleButton(element, false));
					var buttonid = 'BTN'.concat('11');//oModeltWT.SoureHUComp);
					that.enableElement(buttonid);
					that.toggleButton(buttonid, true);


					//Set Delivery HUs model
					let deliveryHus = oData.DeliveryHUEntSet.results;
					var oModelDlvHus = new sap.ui.model.json.JSONModel();
					oModelDlvHus.setData(deliveryHus);
					that.getView().setModel(oModelDlvHus, "DeliveryHUs");

					that.getElementsModel().setProperty("/qty_counted/value", oData.Quantity.Quan);
					that.getElementsModel().refresh(true);

					that.setCountBtnText(that.getElementsModel().getProperty("/qty_counted/value"));
					that.handleProgressIndicator();


					that.refreshUIElements();
				},
				error: function (oError) {
					that.handleMessageResponse(oError, false);
				}
			}

			);

		},

		onPackPressed: function onPackPressed(oEvent) {
			 var _this10 = this;

			BusyIndicator.show();

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PICKING_SRV", {
				useBatch: false
			});
			var warehouseTask = _this10.getView().getModel("WarehouseTask").getData();
			var request = warehouseTask;
			request.Workstation = _this10.workstation;
			request.OrderDataEnt = warehouseTask.OrderDataEnt;
			request.DeliveryHUEntSet = warehouseTask.DeliveryHUEntSet.results;
			

			 oModel.create("/WarehouseTaskSet", request, {
			 	success: function success(successData, response) {
			 		BusyIndicator.hide();

			 		//_this10.handleMessageResponse(response);

			 		sap.m.MessageToast.show("WT successfully confirmed"); //update table 3
					// _this10.getView().setModel(new JSONModel(successData), "modelWarehouseTaskNav");
					
			 		if(successData.OrderDataEnt.LowStockCheck) {
			 			_this10.onOpenLowStockCheckDialog();
			 		} else if (successData.OrderDataEnt.CompEmpty) {
			 			_this10.onOpenEmptyBinCheckDialog();
			 		} else if( successData.OrderDataEnt.Completed) {
			 			_this10.showMessage("Delivery completely picked.", "Info", true);
			 			_this10.ASctrl.closeBin(); //Only closeBin, OpenBin will be called when User closed the last PickHU for the reference
			 		} else {
			 			_this10.checkNextWtForBin(); //Check for further pick from this bin else Close current Bin and deliver the next one
			 		}
					
			 	},
			 	error: function error(err) {
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
					name: "zswl_as_pickint.view.PopupDialog",
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

			this.getView().getModel("WarehouseTask").getData().QuantityAdj.Quan = oEvent.getParameter("value").toString();
			this.getView().getModel("WarehouseTask").getData().SplitQty = 'X';
			this.refreshModels();
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

		onPressPrint: function (oEvent) {
			this.onOpenLowStockCheckDialog();
			//this._clearMessage();
			//var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			//var that = this;
			//that.handleProgressIndicator();

			//that.refreshUIElements();
		},

		onPressHUComplete: function (oEvent) {

			var _this10 = this;

			BusyIndicator.show();

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PICKING_SRV", {
				useBatch: false
			});
			var warehouseTask = _this10.getView().getModel("WarehouseTask").getData();
			var targetHU = _this10.getView().getModel("TargetHU").getData();
			var tableModelItems = _this10.getView().getModel("TargetHUItems").getData().results;
			4
			var request = {};
			request.Lgnum = warehouseTask.Lgnum;
			request.Command = "02";
			request.TargetHUEnt = targetHU;
			request.TargetHUItemEntSet = tableModelItems;
			

			oModel.create("/UserCommCollection", request, {
				success: function success(successData, response) {
					BusyIndicator.hide();

					_this10.handleMessageResponse(response);

					sap.m.MessageToast.show("HU Complete Sucessfull!"); //update table 3

					//Clear targetHU and items models
					_this10.getView().getModel("TargetHU").setData(new sap.ui.model.json.JSONModel());
					_this10.getView().getModel("TargetHUItems").setData(new sap.ui.model.json.JSONModel());
					_this10.refreshUIElements();

					//This was the last hu complete for current reference. Call obenBin to get the next WT
					if(warehouseTask.OrderDataEnt.Completed) {
						_this10.ASctrl.openBin();
					}
				},
				error: function error(err) {
					BusyIndicator.hide();

					_this10.handleMessageResponse(err);
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

		onPressHUCreate: function (oEvent) {
			this.onOpenCreateHUDialog();
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
					name: "zswl_as_pickint.view.popupDialogDeviation",
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


		afterOpenEmptyBinCheck: function afterOpeEmptyBinCheck() {
			var _this17 = this;

			setTimeout(function () {
				_this17.getView().byId("emptyBinCheckConfirmButton").focus();
			}, 0);
			//var zeroStockStepInput = this.byId("stepInputZeroStockCheck");
			//zeroStockStepInput.setEnabled(false);
			//zeroStockStepInput.setValue(0);
			//this.byId("ZeroStockCheckAdjustButton").setEnabled(false);
		},

		afterOpenLowStockCheck: function afterOpenLowStockCheck() {
			var _this17 = this;

			setTimeout(function () {
				_this17.getView().byId("lowStockCheckAdjustButton").focus();
			}, 0);

			var warehouseTask = _this17.getView().getModel("WarehouseTask").getData();
			var modelLowStock = {};
			modelLowStock.Qty = warehouseTask.Quantity;
			modelLowStock.QtyAdj = warehouseTask.Quantity;
			modelLowStock.Product = warehouseTask.Product;
			_this17.getView().setModel(new JSONModel(modelLowStock), "LowStock");
			//var zeroStockStepInput = this.byId("stepInputZeroStockCheck");
			//zeroStockStepInput.setEnabled(false);
			//zeroStockStepInput.setValue(0);
			//this.byId("ZeroStockCheckAdjustButton").setEnabled(false);
		},

		afterOpenDeviation: function afterOpenDeviation() {
			var _this17 = this;

			setTimeout(function () {
				_this17.getView().byId("stepInputDeviation").focus();
			}, 0);
			var warehouseTask = _this17.getView().getModel("WarehouseTask").getData();
			var modelDeviation = warehouseTask;
			modelDeviation.Quantity.Quan = warehouseTask.Quantity.Quan;
			modelDeviation.Quantity.Unit = warehouseTask.Quantity.Unit;
			modelDeviation.QuantityAdj.Quan = warehouseTask.Quantity.Quan;
			modelDeviation.QuantityAdj.Unit = warehouseTask.Quantity.Unit;
			modelDeviation.Product = warehouseTask.Product;
			_this17.getView().setModel(new JSONModel(modelDeviation), "Deviation");
			//_this17.byId("stepInputDeviation").setValue(_this17.getView().getModel("WarehouseTask").getData().Quantity.Quan);
		},

		afterOpenCreateHU: function afterOpenCreateHU() {
			var _this17 = this;

			setTimeout(function () {
				_this17.getView().byId("scanHUType").focus();
			}, 0);
			this.byId("scanHUType").setValue("");
		},

		//Low Stock
		onOpenLowStockCheckDialog: function onOpenLowStockCheckDialog() {
			var view = this.getView();
			var popupDialogLow = this.byId("popupDialogLowStockCheck");

			if (!popupDialogLow) {
				Fragment.load({
					id: view.getId(),
					name: "zswl_as_pickint.view.PopupDialogLowStockCheck",
					controller: this
				}).then(function (popupDialogLow) {
					view.addDependent(popupDialogLow);
					popupDialogLow.open();
				});
			} else {
				this.byId("popupDialogLowStockCheck").open();
			}
		},

		//EmptyBinCheck
		onOpenEmptyBinCheckDialog: function onOpenEmptyBinCheckDialog() {
			var view = this.getView();
			var popupDialogLow = this.byId("popupDialogEmptyBinCheck");

			if (!popupDialogLow) {
				Fragment.load({
					id: view.getId(),
					name: "zswl_as_pickint.view.PopupDialogEmptyBin",
					controller: this
				}).then(function (popupDialogLow) {
					view.addDependent(popupDialogLow);
					popupDialogLow.open();
				});
			} else {
				this.byId("popupDialogEmptyBinCheck").open();
			}
		},

		//CreateHU
		onOpenCreateHUDialog: function onOpenCreateHUDialog() {
			var view = this.getView();
			var popupDialogLow = this.byId("popupDialogCreateHU");

			if (!popupDialogLow) {
				Fragment.load({
					id: view.getId(),
					name: "zswl_as_pickint.view.PopupDialogCreateHU",
					controller: this
				}).then(function (popupDialogLow) {
					view.addDependent(popupDialogLow);
					popupDialogLow.open();
				});
			} else {
				this.byId("popupDialogCreateHU").open();
			}
		},

		onPostEmptyBinDialog: function onPostEmptyBinDialog(userCommand) {
			var _this19 = this;

			var popupDialog = this.byId("popupDialogEmptyBinCheck");

			var warehouseTask = _this19.getView().getModel("WarehouseTask").getData();
			var requestBody = {};
			requestBody.Lgnum = warehouseTask.Lgnum;
			requestBody.Workstation = _this19.workstation;
			requestBody.Tanum = warehouseTask.Tanum;
			requestBody.Quantity = warehouseTask.Quantity;
			requestBody.QuantityAdj = warehouseTask.QuantityAdj;
			requestBody.SourceHU = '34005';//warehouseTask.SourceHU;
			requestBody.SourceHUComp = warehouseTask.SourceHUComp;
			requestBody.CreatePI = 'X';

			if (userCommand == '01') {
				requestBody.CountEmpty = 'X';
				requestBody.PostPI = 'X';
			}
			if (userCommand == '02') {
				_this19.showMessage("PI Doc created. Count AS Bin later", "Error", true);
				requestBody.CreatePI = 'X';
				requestBody.PostPI   = '';
				requestBody.CountEmpty = '';
			}
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PICKING_SRV", true);
			
			oModel.create("/InvRequestSet ", requestBody, {
			  success: function success(successData, response) {
				_this19.handleMessageResponse(response);


				popupDialog.close();
			},
			   error: function error(err) {
			 	_this19.handleMessageResponse(err); //this.onOpenScanDialog();


				 popupDialog.close();
				}
			 });
		},

		onPostDeviationDialog: function onPostDeviationDialog(userCommand) {
			var _this19 = this;

			var popupDialog = this.byId("popupDialogDeviation");
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PICKING_SRV", true);
			var deviation = _this19.getView().getModel("Deviation").getData();
			

			var warehouseTask = _this19.getView().getModel("WarehouseTask").getData();
			var request = warehouseTask;
			request.QuantityAdj.Quan = this.getView().byId("stepInputDeviation").getValue().toString();
			//request.QuantityAdj.Quan = request.QuantityAdj.Quan.toString();
			//request.QuantityAdj.Unit = request.Quantity.Unit;
			request.Workstation = _this19.workstation;
			request.OrderDataEnt = warehouseTask.OrderDataEnt;
			request.DeliveryHUEntSet = warehouseTask.DeliveryHUEntSet.results;
			request.Deviation = 'X';
			
			oModel.create("/WarehouseTaskSet", request, {
			  success: function success(successData, response) {
				_this19.handleMessageResponse(response);

				_this19.getView().getModel("WarehouseTask").getData().CreatePI = successData.CreatePI;
				_this19.getView().getModel("WarehouseTask").getData().Deviation = successData.Deviation;
				_this19.refreshModels();

				if(successData.CreatePI = 'X') {
					_this19.getElementsModel().setProperty("/qty_counted/value", successData.QuantityAdj.Quan);
					_this19.getElementsModel().refresh(true);
					_this19.setCountBtnText(_this19.getElementsModel().getProperty("/qty_counted/value"));
				}

				popupDialog.close();
			},
			   error: function error(err) {
			 	_this19.handleMessageResponse(err); //this.onOpenScanDialog();


				 popupDialog.close();
				}
			 });
		},

		onPostLowStockDialog: function onPostLowStockDialog(userCommand) {
			var _this19 = this;

			var popupDialog = this.byId("popupDialogLowStockCheck");
			var warehouseTask = _this19.getView().getModel("WarehouseTask").getData();
			var lowStock = _this19.getView().getModel("LowStock").getData();
			var requestBody = {};
			requestBody.Lgnum = warehouseTask.Lgnum;
			requestBody.Workstation = _this19.workstation;
			requestBody.Tanum = warehouseTask.Tanum;
			requestBody.QuantityCounted = lowStock.Qty;
			requestBody.QuantityCounted.Quan = lowStock.Qty.Quan.toString();
			requestBody.QuantityCounted.Unit = lowStock.Qty.Unit;
			requestBody.QuantityAdj = lowStock.QtyAdj;
			requestBody.QuantityAdj.Quan = lowStock.QtyAdj.Quan.toString();
			requestBody.QuantityAdj.Unit = lowStock.QtyAdj.Unit.toString();
			requestBody.SourceHU = '34001';//warehouseTask.SourceHU;
			requestBody.SourceHUComp = warehouseTask.SourceHUComp;
			requestBody.CreatePI = 'X';

			if (userCommand == '01') {
				requestBody.LowStockPI = 'X';
				requestBody.PostPI = 'X';
			}
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PICKING_SRV", true);
			
			oModel.create("/InvRequestSet ", requestBody, {
			  success: function success(successData, response) {
				_this19.handleMessageResponse(response);


				popupDialog.close();
			},
			   error: function error(err) {
			 	_this19.handleMessageResponse(err); //this.onOpenScanDialog();


				 popupDialog.close();
				}
			 });
		},

		onPostCreateHUDialog: function onPostCreateHUDialog(userCommand) {
			if (userCommand == "01") {
				var _this19 = this;
				var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_PICKING_SRV", true);

				var lgnum = this.whNumber;
				var requestBody = {};
				requestBody.Lgnum = lgnum;
				requestBody.Command = userCommand;
				requestBody.HuType = _this19.getView().byId("scanHUType").getValue();
				requestBody.Workstation = this.workstation;
				requestBody.TargetHUEnt = {};
				requestBody.TargetHUItemEntSet = { "results": [{}] };

				// var trolley = this.scannedValue + "11";
				// oModel.create("/LowStockCheckMatNrPISet ", requestBody, {
				oModel.create("/UserCommCollection", requestBody, {
					//urlParameters: {
					//	"$expand": "TargetHUEnt,TargetHUItemEntSet"
					//},
					success: function (oData, response) {
						var oModelTargetHU = new sap.ui.model.json.JSONModel();
						//Set Target HU model
						oModelTargetHU.setData(oData.TargetHUEnt);
						_this19.getView().setModel(oModelTargetHU, "TargetHU");
						//Set Target HU Items model
						var oModelTargetHUItems = new sap.ui.model.json.JSONModel();
						//Set Target HU model
						oModelTargetHUItems.setData(oData.TargetHUItemEntSet);
						_this19.getView().setModel(oModelTargetHUItems, "TargetHUItems");

						_this19.refreshUIElements();
						//_this19.setTitleTexts("Grid3", oData.TargetHUEnt.Huident);
						var popupDialog = _this19.byId("popupDialogCreateHU");
						popupDialog.close();

					},
					error: function (oError) {
						_this19.handleMessageResponse(oError, false);
					}
				}

				);
			} else {
				var popupDialog = this.byId("popupDialogCreateHU");
				popupDialog.close();
			}
		},

		onScanHUType: function onScanHUType() {
			this.onPostCreateHUDialog("01");
		},

		onCreateHUClosePressed: function onCreateHUClosePressed() {
			this.onPostCreateHUDialog("02");
		},

		onDeviationAdjustPressed: function onDeviationAdjustPressed() {
			this.onPostDeviationDialog("01");
		},

		onLowStockCheckAdjustPressed: function onLowStockCheckAdjustPressed() {
			this.onPostLowStockDialog("01");
		},

		onEmptyBinCheckConfirmPressed: function onEmptyBinCheckConfirmPressed() {
			this.onPostEmptyBinDialog("01");
		},

		onEmptyBinCheckNoPressed: function onEmptyBinCheckNoPressed() {
			this.onPostEmptyBinDialog("02");
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

		refreshModels: function refreshModels() {
			var models = this.getView().oModels;
	  
			for (var modelName in models) {
			  models[modelName].refresh();
			}
		  },
	  





	});
});