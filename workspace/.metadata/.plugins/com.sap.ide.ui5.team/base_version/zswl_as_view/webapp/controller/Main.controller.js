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

	return BaseController.extend("zswl_as_view.controller.Main", {

		formatter: formatter,

		onInit: function () {
			this.checkWhNumberAndWorkstation();

			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			//Set the jsonModel for all Elements of the screen
			this.initElementsModel();
			//Set the Message model
			this.initMessageModel();

			//Call AutoStoreController
			this.ASctrl = new ASController(this);
			this.ASctrl.openPort();

			this.setCurrentLoggedInUser();

			//	sap.base.Log.info("Method onBeforeRendering");
			var oMs = sap.ui.getCore().byId("msgStrip");
			//debugger
			if (oMs) {
				oMs.destroy();
			}
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

		onBeforeRendering: function () {
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

			//Handle AS Bin relevant elements
			let modelHU = this.getView().getModel("HU");
			let modelSelComp = this.getView().getModel("selectedCompContent");

			if (modelHU && modelHU.oData && modelHU.oData.BinID) {
				this.setTitleTexts("Grid2", modelHU.oData.BinID);
				this.enableElement("if_hu");
				this.enableElement("btn_nextbin");
				this.enableElement("btn_reqman");
			} else {
				this.setTitleTexts("Grid2");
				this.disableElement("if_hu");
				this.disableElement("btn_nextbin");
				this.disableElement("btn_reqman");
			}

			if (modelSelComp && modelSelComp.oData && modelSelComp.oData.Compartment) {
				this.enableElement("btn_block");
				this.enableElement("btn_deviation");
				this.enableElement("btn_expext");
			} else {
				this.disableElement("btn_block");
				this.disableElement("btn_deviation");
				this.disableElement("btn_expext");
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

		onNextBinPressed: function onNextBinPressed() {

			//Call closeBin to remove the Bin from Port back to Grid
			this.ASctrl.closeBin();
			this.getView().byId("scanInput").setValue("");
			//Call openBin to get the next Bin from Grid
			this.ASctrl.openBin();
		},

		
		onPressBlock: function onPressBlock() {
			var _this19 = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_VIEW_SRV", true);
			var selectedComp = _this19.getView().getModel("selectedCompContent").getData();
			var request = {};
			var product = {};
			request.Lgnum = _this19.whNumber;
			request.Workstation = _this19.workstation;
			request.UserCommand = '01';
			request.BinID = selectedComp.BinID;
			request.Compartment =  selectedComp.Compartment;
			request.StockType =  selectedComp.StockType;
			product.MATID = selectedComp.Product.MATID;
			request.Product = product;
			BusyIndicator.show();
			oModel.create("/UserCommandEntSet", request, {
			  success: function success(successData, response) {
				BusyIndicator.hide();
				_this19.handleMessageResponse(response);

				_this19.ASctrl.reReadHU();
				_this19.refreshModels();
				_this19.selectTableRow(successData.Compartment);

			},
			   error: function error(err) {
				BusyIndicator.hide();

				_this19.handleMessageResponse(err); //this.onOpenScanDialog();

				}
			 });


		},

		onPressExpireExtend: function onPressExpireExtend() {
			var _this19 = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_VIEW_SRV", true);
			var selectedComp = _this19.getView().getModel("selectedCompContent").getData();
			var request = {};
			var product = {};
			request.Lgnum = _this19.whNumber;
			request.Workstation = _this19.workstation;
			request.UserCommand = '03';
			request.BinID = selectedComp.BinID;
			request.Compartment =  selectedComp.Compartment;
			request.StockType =  selectedComp.StockType;
			request.GuidParent =  selectedComp.GuidParent;
			request.GuidStock =  selectedComp.GuidStock;
			product.MATID = selectedComp.Product.MATID;
			product.Matnr = selectedComp.Product.Matnr;
			request.Product = product;
			BusyIndicator.show();
			oModel.create("/UserCommandEntSet", request, {
			  success: function success(successData, response) {
				BusyIndicator.hide();
				_this19.handleMessageResponse(response);

				_this19.ASctrl.reReadHU();
				_this19.refreshModels();

			},
			   error: function error(err) {
				BusyIndicator.hide();

				_this19.handleMessageResponse(err); //this.onOpenScanDialog();

				}
			 });


		},

		afterOpenDeviation: function afterOpenDeviation() {
			var _this17 = this;

			setTimeout(function () {
				_this17.getView().byId("stepInputDeviation").focus();
			}, 0);
			var selectedComp = _this17.getView().getModel("selectedCompContent").getData();
			var modelDeviation = selectedComp;
			var quant = {};
			modelDeviation.Quantity = quant;
			modelDeviation.Quantity.Quan = selectedComp.Quant.Quan;
			modelDeviation.Quantity.Unit = selectedComp.Quant.Unit;
			var quantAdj = {};
			modelDeviation.QuantityAdj = quantAdj;
			modelDeviation.QuantityAdj.Quan = selectedComp.Quant.Quan;
			modelDeviation.QuantityAdj.Unit = selectedComp.Quant.Unit;
			modelDeviation.Product = selectedComp.Product;
			_this17.getView().setModel(new JSONModel(modelDeviation), "Deviation");
			//_this17.byId("stepInputDeviation").setValue(_this17.getView().getModel("WarehouseTask").getData().Quantity.Quan);
		},

		onDeviationAdjustPressed: function onDeviationAdjustPressed() {
			this.onPostDeviationDialog("01");
		},

		onPostDeviationDialog: function onPostDeviationDialog(userCommand) {
			var _this19 = this;

			var popupDialog = this.byId("popupDialogDeviation");
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_VIEW_SRV", true);
			var deviation = _this19.getView().getModel("Deviation").getData();
			

			//var warehouseTask = _this19.getView().getModel("WarehouseTask").getData();
			var request = {};
			request.Lgnum = _this19.whNumber;
			request.Workstation = _this19.workstation;
			request.UserCommand = '02';
			var qty = {};
			request.Qty = qty;
			request.Qty.Quan = this.getView().byId("stepInputDeviation").getValue().toString();
			request.Qty.Unit = deviation.Quantity.Unit;
			request.BinID = _this19.getView().getModel("selectedCompContent").getData().BinID;
			BusyIndicator.show();
			oModel.create("/UserCommandEntSet", request, {
			  success: function success(successData, response) {
				BusyIndicator.hide();
				_this19.ASctrl.reReadHU();
				_this19.refreshModels();

				

				popupDialog.close();
			},
			   error: function error(err) {
				BusyIndicator.hide();
			 	_this19.handleMessageResponse(err); //this.onOpenScanDialog();


				 popupDialog.close();
				}
			 });
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
					name: "zswl_as_view.view.popupDialogDeviation",
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

		refreshModels: function refreshModels() {
			var models = this.getView().oModels;

			for (var modelName in models) {
				models[modelName].refresh();
			}
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
					name: "zswl_as_view.view.PopupDialogRequest",
					controller: this
				}).then(function (popupDialog) {
					view.addDependent(popupDialog);
					popupDialog.open();
				});
			} else {
				this.byId("popupDialogRequest").open();
			}
		},

		onConfirmDialog: function () {
			const binId = this.getView().byId("requestBinInput").getValue();

			if (binId) {
				//Call closeBin to remove the Bin from Port back to Grid
				this.ASctrl.closeBin();
				this.getView().byId("scanInput").setValue("");
				//Call openBin to get the next Bin from Grid
				this.ASctrl.openBin(binId);
				this.byId("popupDialogRequest").close();
			} else {
				sap.m.MessageToast.show("Enter BinId!")
			}

		},

		onExitPressed: function () {
			this.ASctrl.closePort();
			this.getView().byId("scanInput").setValue("");
		},

		refreshModels: function refreshModels() {
			var models = this.getView().oModels;
	  
			for (var modelName in models) {
			  models[modelName].refresh();
			}
		  },

		  onTableRowChange: function onTableRowChange(compartment, next) {
			var table = this.byId("tblBinContent");
			var selectedIndex = table.getSelectedIndex();
  
			this.onRowSelectionChangeUiTable(undefined, selectedIndex, true);
		  },

		selectTableRow: function selectTableRow(compartment, next) {
			var table = this.byId("tblBinContent");

			if (table.getModel("BinContent")) {
				var items = table.getModel("BinContent").getData().results;

				let itemToBeSelected;

				itemToBeSelected = (element) => element.Compartment == compartment;

				var selectedIndex = items.findIndex(itemToBeSelected);
				//var selectedItem = items.filter(item => item.SubHU == compartment );

				// if (firstRow && firstRow.getCells()[0].getText()) {
				this.onRowSelectionChangeUiTable(undefined, selectedIndex);
				//   setTimeout(function () {
				// 	return firstRow._setSelected(true);
				//   }, 0);
			}
		},

		selectFirstTableRow: function selectFirstTableRow() {
			var table = this.byId("tblBinContent");
			var firstRow = table.getRows()[0];
	  
			//if (firstRow && firstRow.getCells()[0].getText()) {
			  this.onRowSelectionChangeUiTable(undefined, 0);
			//   setTimeout(function () {
			// 	return firstRow._setSelected(true);
			//   }, 0);
			//}
		  },

    //  * Select row from section one UI table
    //  * param  {Object} event SAPUI5 Standard UI event
    //  * param  {Number} selectRow Select any row in the table
    //  * return {Void}   
    onRowSelectionChangeUiTable: function onRowSelectionChangeUiTable(event, selectRow, toggle) {
		var _this4 = this;
  
		var table = _this4.byId("tblBinContent");
		var selectedIndex = -1; //If selectRow is passed use it.
  
		if (selectRow !== undefined) {
		  selectedIndex = selectRow; // If selectFirstRow is passed use 0.
		} else {
		  selectedIndex = table.getSelectedIndex();
		}
		//selectedIndex = 0;
		if (selectedIndex !== -1) {
			var dataArr = _this4.getView().getModel("BinContent").getData().results;

			var selectedRow = dataArr[selectedIndex];
			var selComp = dataArr[selectedIndex].Compartment;
		
			let modelGrid = _this4.getView().getModel("BinCompContent").getData().results;
  
			const found = modelGrid.find(element => element.Compartment == selComp);
						  if(found) {
							  var oModelBinCompContent = new sap.ui.model.json.JSONModel();
							  oModelBinCompContent.setData(found);
							  _this4.getView().setModel(oModelBinCompContent, "selectedCompContent");
						  }
			table.setSelectedIndex(selectRow);
			if (toggle) {
				var id = selectedRow.Compartment.split("-");
				var btnId = "BTN".concat(id[0]).concat(id[1]);
				var button = _this4.byId(btnId);
				if (button) {
					button.RaiseEvent(new RoutedEventArgs(Button.ClickEvent));
				}
			}
	  //this.currentSelectedTableItemFromFirstSection = selectedIndex;



		 } else {
			table.setSelectedIndex(-1);
			_this4.getView().setModel(new sap.ui.model.json.JSONModel(), "selectedCompContent");
		 }
		 _this4.refreshUIElements();
	  },


	});
});