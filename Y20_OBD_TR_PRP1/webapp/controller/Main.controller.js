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
	"../model/formatter"
], function (Controller, Device, MessageStrip, Log, JSONModel, BaseController, Library, Message, MessageToast, Button, Dialog, Text, Fragment, BusyIndicator, formatter) {
	"use strict";
	var MessageType = Library.MessageType;
	var path;

	return BaseController.extend("Y20_OBD_TR_PRP1.controller.Main", {

		formatter: formatter,

		onInit: function () {
			this.checkWhNumberAndWorkstation();

			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			//Set the jsonModel for all Elements of the screen
			this.initElementsModel();
			//Set the Message model
			this.initMessageModel();

			//Load the inital work list
			this.loadDefaultTableData();

			//Load active trolleys
			this.loadActiveTrolleys();

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

		},
		
		_clearMessage: function () {
			var oMs = sap.ui.getCore().byId("msgStrip");
			//debugger

			if (oMs) {
				oMs.destroy();
			}
		},

		loadDefaultTableData: function() {
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUCRT_SRV", true);
			var lgnum = this.whNumber;
			var filterValue = `Lgnum eq '${lgnum}'`;
			var that = this;
			BusyIndicator.show();
			oModel.read("/HUTypeListEntCollection", {
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
	  
				let defaultData = data.results;
				let modelData = { "items": defaultData };
				var oModelPickTable = new sap.ui.model.json.JSONModel();
				oModelPickTable.setData(modelData);
				that.getView().setModel(oModelPickTable, "pickTableModel");
				var oModelFilter = new sap.ui.model.json.JSONModel();
				that.getView().setModel(oModelFilter, "filter");
				if(defaultData.length > 0) {
					var oModelSelEntry = new sap.ui.model.json.JSONModel();
					oModelSelEntry.setData(defaultData[0]);
					that.getView().setModel(oModelSelEntry, "selectedRow");
					var table = that.getView().byId("tblAA");
					table.setSelectedIndex(0);
					that.enableElement("btn_print");
					}
				else {
					that.disableElement("btn_print");
				}

  
				BusyIndicator.hide();
			  },
			  error: function error(err) {
				BusyIndicator.hide();
	  
				//_this.handleMessageResponse(err);
			  }
			});
				  
		},

		loadActiveTrolleys: function() {
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUCRT_SRV", true);
			var lgnum = this.whNumber;
			var filterValue = `Lgnum eq '${lgnum}'`;
			var that = this;
			BusyIndicator.show();
			oModel.read("/ActiveTrolleyEntCollection", {
			  useBatch: false,
			   urlParameters: {
			 	"$filter": filterValue
			   },
			  success: function success(data) {
				BusyIndicator.hide();
	  
				let defaultData = data.results;
				let modelData = { "items": defaultData };
				var oModelPickTable = new sap.ui.model.json.JSONModel();
				oModelPickTable.setData(modelData);
				that.getView().setModel(oModelPickTable, "trollTableModel");
  
			  },
			  error: function error(err) {
				BusyIndicator.hide();
	  
				//_this.handleMessageResponse(err);
			  }
			});
				  
		},

		onRowSelectionChangeUiTable: function(event, selectedIndexOld) {
			var that = this;
	  
			//create request here
			var table = this.byId("tblAA");
			var selectedIndex = -1;
	  
			if (selectedIndexOld !== undefined) {
			  selectedIndex = selectedIndexOld;
			} else {
			  selectedIndex = table.getSelectedIndex();
			}
	  
			if (selectedIndex >= 0) {
			  this.currentSelectedTableItemFromFirstSection = selectedIndex;
			  var dataArr = this.getView().getModel("pickTableModel").getData().items;
			  var oModelSelEntry = new sap.ui.model.json.JSONModel();
			  oModelSelEntry.setData(dataArr[selectedIndex]);
			  this.getView().setModel(oModelSelEntry, "selectedRow");
			}

		  },

		onApplyFilter: function () {
			BusyIndicator.show();
			//Get the value of the consolidate radio button
			var cons;
			switch (this.getView().byId("rbg1").getSelectedButton().getProperty("posinset")) {
				case "0":
					cons = "";
					break;
				default:
					cons = this.getView().byId("rbg1").getSelectedButton().getProperty("posinset");
			}
			var poolMix;
			switch (this.getView().byId("rbg2").getSelectedButton().getProperty("posinset")) {
				case "0":
					poolMix = "1";
					break;
				case "1":
					poolMix = "2";
			}
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUCRT_SRV", true);
			//var trolley = event.srcElement.value;
			var lgnum = this.whNumber;
			var filter = this.getView().getModel("filter").getData();
			//var propertyString = "/Button2" + "/text";
			//filter.OrderComplTime = "01.01.1999";
			var request = {
				"Lgnum": lgnum,
				"Aarea": filter.Aarea,
				"Consolidate": cons,
				"PoolName": filter.Pool,
				"OrderComplTime": filter.OrderComplTime,
				"PoolMix": poolMix,
				"Filter_HUTypeListNav": {
					"results": []
				},
				"Filter_CreatedHUNav": {
					"results": []
				}
			};
			oModel.create("/FilterEntCollection", request, {
				success: function (data, response) {
					let defaultData = data.Filter_HUTypeListNav.results;
					let modelData = { "items": defaultData };
					var oModelPickTable = new sap.ui.model.json.JSONModel();
					oModelPickTable.setData(modelData);
					that.getView().setModel(oModelPickTable, "pickTableModel");
					if(defaultData.length > 0) {
						var oModelSelEntry = new sap.ui.model.json.JSONModel();
						oModelSelEntry.setData(defaultData[0]);
						that.getView().setModel(oModelSelEntry, "selectedRow");
						var table = that.getView().byId("tblAA");
						table.setSelectedIndex(0);
						that.enableElement("btn_print");
						}
					else {
						that.disableElement("btn_print");
					}
	
					let huData = data.Filter_CreatedHUNav.results;
					let modelhuData = { "items": huData };
					var oModelHUTable = new sap.ui.model.json.JSONModel();
					oModelHUTable.setData(modelhuData);
					that.getView().setModel(oModelHUTable, "huTableModel");
	  
					BusyIndicator.hide();
						

				},
				error: function (oError) {
					BusyIndicator.hide();
					//var oMsg = JSON.parse(oError.responseText);
					that.handleMessageResponse(oError, false);
				}
			}

			);
			oModel.refresh(true);

		},

		onRefreshFilter: function () {
			BusyIndicator.show();
			this.loadDefaultTableData();
			BusyIndicator.hide();
		},
		
		onPrint: function () {
			BusyIndicator.show();
			//Get the value of the consolidate radio button
			var quan = this.getView().byId("stepInputQuan").getValue().toString();
			this._clearMessage();
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_PICK_PREPARE_HUCRT_SRV", true);
			//var trolley = event.srcElement.value;
			var lgnum = this.whNumber;
			var selectedRow = this.getView().getModel("selectedRow").getData();
			//var propertyString = "/Button2" + "/text";
			//filter.OrderComplTime = "01.01.1999";
			var request = {
				"Lgnum": lgnum,
				"Quan": quan,
				"NoNewHU_HUTypeListNav": {
					"Lgnum": lgnum,
					"Aarea": selectedRow.Aarea,
					"HUType": selectedRow.HUType,
					"Priority": selectedRow.Priority,
					"Total": selectedRow.Total,
					"Open": selectedRow.Open,
					"Linked": selectedRow.Linked,
					"Pool": selectedRow.Pool
				},
				"NoNewHU_CreatedHUNav": {
					"results": []
				}
			};
			oModel.create("/NoNewHUsEntCollection", request, {
				success: function (data, response) {
					let huData = data.NoNewHU_CreatedHUNav.results;
					let modelData = { "items": huData };
					var oModelHUTable = new sap.ui.model.json.JSONModel();
					oModelHUTable.setData(modelData);
					that.getView().setModel(oModelHUTable, "huTableModel");
					that.onApplyFilter();
					BusyIndicator.hide();
					var oText = oResourceBundle.getText("HU_CREATION_SUCCESS");
					var oMessage = new Message({
						message: oText,
						type: MessageType.Success,
						target: "/Dummy" //,
						//processor: view.getModel()
					});
					sap.ui.getCore().getMessageManager().addMessages(oMessage);

					MessageToast.show(oText);


					

				},
				error: function (oError) {
					BusyIndicator.hide();
					//var oMsg = JSON.parse(oError.responseText);
					that.handleMessageResponse(oError, false);
				}
			}

			);
			oModel.refresh(true);

		},

		onGoToStep2: function () {
			var url = window.location.protocol + "//" + window.location.host;
			window.location.href = url + "/sap/bc/ui5_ui5/sap/Y20_OBD_TR_PRP2/index.html";
		  },



	});
});