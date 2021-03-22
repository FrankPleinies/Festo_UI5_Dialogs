sap.ui.define([
    "sap/ui/base/Object",
	"sap/m/MessageStrip",
	"sap/m/MessageToast",
	"sap/ui/core/library",
	"sap/ui/model/json/JSONModel",
	"sap/m/Button",
    "sap/ui/core/message/Message"

], function(Object, MessageStrip, MessageToast, Library, JSONModel, Button, Message) {
    "use strict";
	var MessageType = Library.MessageType;
    
    return Object.extend("zswl_as_view.controller.ASController", {
        constructor: function(Controller) {
            this.ctrl = Controller;	
            this.compButtons = [];
			this.selectedComp = "";
			this.selectedCompartment;
			this.whNumber = Controller.whNumber;
			this.workstation = Controller.workstation;
			this.oResourceBundle = Controller.getView().getModel("i18n").getResourceBundle();

        
        },

        openPort: function() {
            var that = this;
            var view = this.ctrl;
            var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_EWM_AUTOSTORE_SRV", true);

            //var lgnum = this.whNumber;
            //var workstation = this.workstation;
            var method = "/OpenPort";
            var lgnum = this.whNumber;
			var workstation = this.workstation;

            oModel.callFunction(method, {
                "method": "POST", urlParameters: { Lgnum: lgnum, Workstation: workstation },
                success: function (oData, response) {
                    var oModelASIf = new sap.ui.model.json.JSONModel();
                    oModelASIf.setData(oData);
                    view.getView().setModel(oModelASIf, "ASIF");

                    var oMessage = new Message({
                        message: that.oResourceBundle.getText("Msg_OpenPort"),
                        type: MessageType.Warning,
                        target: "/Dummy" //,
                    });
                    sap.ui.getCore().getMessageManager().addMessages(oMessage);

                    if (oData.Successful) {
                        that.openBin();
                    } else {
                        var oMessage = new Message({
                            message: oData.errortext,
                            type: MessageType.Warning,
                            target: "/Dummy" //,
                        });
                        sap.ui.getCore().getMessageManager().addMessages(oMessage);
                    }

                },
                error: function (oError) {
                    view.handleMessageResponse(oError, false);
                }
            });

         },

         openBin: function(binId) {
            var view = this.ctrl;
            var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_EWM_AUTOSTORE_SRV", true);

			//var lgnum = this.whNumber;
			//var workstation = this.workstation;
			var method = "/OpenBin";
			var lgnum = this.whNumber;
			var workstation = this.workstation;
			var asBinId = "";
			if(binId) {
				asBinId = binId;
			}

			oModel.callFunction(method,  { "method": "POST", urlParameters: { Lgnum: lgnum, Workstation: workstation, BinId: asBinId }, 
				success: function (oData, response) {
					var oModelASIf = new sap.ui.model.json.JSONModel();
					oModelASIf.setData(oData);
					view.getView().setModel(oModelASIf, "ASIF");
					var msg = that.oResourceBundle.getText("Msg_OpenBin");
					if(binId) {
						msg = that.oResourceBundle.getText("Msg_OpenBinMan", binId);
					}
					var oMessage = new Message({
						message: msg,
						type: MessageType.Warning,
						target: "/Dummy" //,
						//processor: view.getModel()
				   });
				  sap.ui.getCore().getMessageManager().addMessages(oMessage);

				  if(oData.Successful) {
						that.setAutoRefresh();
						view.getView().byId("scanInput").setValue(oData.BinId);
					} else {
						var oMessage = new Message({
							  message: oData.errortext,
							  type: MessageType.Warning,
							  target: "/Dummy" //,
							  //processor: view.getModel()
						 });
						sap.ui.getCore().getMessageManager().addMessages(oMessage);
	
						//MessageToast.show(oText);
						}


				},
				error: function (oError) {
					view.handleMessageResponse(oError, false);
				}
			}

			);

        },

        closePort: function() {
            var view = this.ctrl;
            var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_EWM_AUTOSTORE_SRV", true);

			//var lgnum = this.whNumber;
			//var workstation = this.workstation;
			var method = "/ClosePort";
			var lgnum = this.whNumber;
			var workstation = this.workstation;
			
			oModel.callFunction(method,  { "method": "POST", urlParameters: { Lgnum: lgnum, Workstation: workstation }, 
				success: function (oData, response) {
                    var oMessage = new Message({
						message: that.oResourceBundle.getText("Msg_ClosePort"),
						type: MessageType.Warning,
						target: "/Dummy" //,
						//processor: view.getModel()
				   });
				  sap.ui.getCore().getMessageManager().addMessages(oMessage);

                  view.getView().getModel("HU").setData(null);
				  view.getView().getModel("BinContent").setData(null);
                  view.refreshUIElements();
                  that.buildGrid(true);
				},
				error: function (oError) {
					view.handleMessageResponse(oError, false);
				}
			}

			);

		},
        
		closeBin: function(nextHU) {
            var view = this.ctrl;
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_EWM_AUTOSTORE_SRV", true);

			//var lgnum = view.whNumber;
			//var workstation = view.workstation;
			var method = "/CloseBin";
			var lgnum = this.whNumber;
			var workstation = this.workstation;
			
			oModel.callFunction(method,  { "method": "POST", urlParameters: { Lgnum: lgnum, Workstation: workstation }, 
				success: function (oData, response) {
                    var oMessage = new Message({
						message: that.oResourceBundle.getText("Msg_CloseBin"),
						type: MessageType.Warning,
						target: "/Dummy" //,
						//processor: view.getModel()
				   });
				  sap.ui.getCore().getMessageManager().addMessages(oMessage);

				  view.getView().getModel("HU").setData(null);
				  view.getView().getModel("BinContent").setData(null);

                  view.refreshUIElements();
                  that.buildGrid(true);

                  if(nextHU) {
                      that.openBin();
                  }
				},
				error: function (oError) {
					view.handleMessageResponse(oError, false);
				}
			}

			);

		},

        setAutoRefresh: function() {
			var that = this;
			var count = 1;
			var autoRefresh = setInterval(checkASBin, 3000);

			function checkASBin() {
				var msg = that.oResourceBundle.getText("Msg_OnPort", count);
				MessageToast.show(msg);
				that.portStatus(autoRefresh);
				count++;
				if(count == 5) {
					clearInterval(autoRefresh);
				}				
			}
        },
        
        portStatus: function(autoRefresh) {
            var view = this.ctrl;
            var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_EWM_AUTOSTORE_SRV", true);

			//var lgnum = this.whNumber;
			//var workstation = this.workstation;
			var method = "/GetPortStatus";
			var lgnum = this.whNumber;
			var workstation = this.workstation;
			
			oModel.callFunction(method,  { "method": "POST", urlParameters: { Lgnum: lgnum, Workstation: workstation }, 
				success: function (oData, response) {
					var oModelASIf = new sap.ui.model.json.JSONModel();
					oModelASIf.setData(oData);
					view.getView().setModel(oModelASIf, "ASIF");
					var oMessage = new Message({
						message:that.oResourceBundle.getText("Msg_GetPortStatus"),
						type: MessageType.Warning,
						target: "/Dummy" //,
						//processor: view.getModel()
				   });
				  sap.ui.getCore().getMessageManager().addMessages(oMessage);

				  if(oData.IsReady) {
						//Read the HU
						that.readHU(oData.SelectedBin);
						clearInterval(autoRefresh);
						var msg = that.oResourceBundle.getText("Msg_BinArrived", oData.SelectedBin);
						MessageToast.show(msg);
						var oMessage = new Message({
							message: msg,
							type: MessageType.Warning,
							target: "/Dummy" //,
							//processor: view.getModel()
					   });
					  sap.ui.getCore().getMessageManager().addMessages(oMessage);
						}

				},
				error: function (oError) {
					that.handleMessageResponse(oError, false);
				}
			}

			);

		},

		getTopHUIdent: function getTopHUIdent() {
			var view = this.ctrl;
			var modelHU = view.getView().getModel("HU").getData();
			if(modelHU) {
				return modelHU.BinID;
			}
		},

		reReadHU: function reRadHU() {
            var view = this.ctrl;
			var hu = view.getView().getModel("HU").getData();
			this.selectedComp = "";
			this.readHU(hu.BinID);
		},

		readHU: function readHU(huident) {
            var view = this.ctrl;
			var that = this;
			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_EWM_AUTOSTORE_SRV", true);

			//var lgnum = this.whNumber;
			//var workstation = this.workstation;
			var lgnum = this.whNumber;

			oModel.read("/ASBinSet(Lgnum='" + lgnum + "',BinID='" + huident + "')", {
				urlParameters: {
					"$expand": "ASBin_ASBinContentNav,ASBin_BuildGridNav,ASBin_ASBinCompContentNav"
				},
			success: function (oData, response) {
					var oModelHU = new sap.ui.model.json.JSONModel();
					//Set HU model
					oModelHU.setData(oData);
					view.getView().setModel(oModelHU, "HU");
					//Set HU content model
					let binContent = oData.ASBin_ASBinContentNav;
					var oModelBinContent = new sap.ui.model.json.JSONModel();
					oModelBinContent.setData(binContent);
					view.getView().setModel(oModelBinContent, "BinContent");
					//Set HU Grid model
					let binGrid = oData.ASBin_BuildGridNav.results;
					let modelBinGrid = { "items": binGrid };
					var oModelBinGrid = new sap.ui.model.json.JSONModel();
					oModelBinGrid.setData(modelBinGrid);
					view.getView().setModel(oModelBinGrid, "BinGrid");
					//Set HU Compartment content model
					let binCompContent = oData.ASBin_ASBinCompContentNav;
					var oModelBinCompContent = new sap.ui.model.json.JSONModel();
					oModelBinCompContent.setData(binCompContent);
					view.getView().setModel(oModelBinCompContent, "BinCompContent");

                    that.buildGrid();
					view.refreshUIElements();
					view.refreshModels();
					view.selectFirstTableRow();
				},
				error: function (oError) {
					//that.handleMessageResponse(oError, false);
				}
			}

			);

		},

		buildGrid: function buildGrid(invisible) {
            var view = this.ctrl;
			var container = view.getView().byId("GridDisplay");
            container.destroyItems();
            if(invisible) {
                return;
            }
			//compButtons = []; //Clear the compartmentButtonsArray

			var that = this;
			let modelHU = view.getView().getModel("HU");
			let modelGrid = view.getView().getModel("BinGrid");

			var rows = modelHU.oData.Rows;
			var cols = modelHU.oData.Columns;
			
			var counter_cols = 1;
			var counter_rows = 1;
			var btnId;
			var btnText;

			while(counter_rows <= rows) {

				var row = createRow("ROW".concat(counter_rows.toString()));
				container.addItem(row);

				while(counter_cols <= cols) {

					btnId = "BTN".concat(counter_rows.toString().concat(counter_cols.toString()));
					btnText = counter_rows.toString().concat("-").concat(counter_cols.toString());
					var button = createButton(btnId, "90%", btnText, that);
					that.compButtons.push(btnId);
					const found = modelGrid.oData.items.find(element => element.Compartment == btnText);
					// if(found && found.HasStock) {
					// 	view.disableElement(btnId);
					// 	view.toggleButton(btnId, false);
					// }

					// if(found && !found.HasStock && !that.selectedComp) {
						if(found && !that.selectedComp) {
							view.toggleButton(btnId, true);
							that.selectedComp = btnId;
							that.setSelectedCompartment(btnText);
						}
	
	
					//button.addStyleClass("sapUiLargeMargin");
					button.setLayoutData(new sap.m.FlexItemData({
					growFactor: 1
			 		}));

					row.addItem(button);

					counter_cols++;
				}
				counter_rows++;
				counter_cols = 1;
			}

			  function createButton(id, width, text, that) {
				return new sap.m.ToggleButton({
				  id: id,
				  //height: height,
				  width: width,
				  text: text,
				  enabled: `{ELEMENTS>/${id}/enabled}`,
				  pressed:  `{ELEMENTS>/${id}/pressed}`,
				  press: function(e) { 
                   that.onSelectComp(e);
                }
				  //alignItems: alignItems,
				  //justifyContent: justifyContent
				});
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

		setSelectedCompartment: function setSelectedCompartment(btnText) {
			if(btnText) {
				var view = this.ctrl;
				let modelGrid = view.getView().getModel("BinGrid");
				const found = modelGrid.oData.items.find(element => element.Compartment == btnText);
						if(found) {
							this.selectedCompartment = found.Compartment;
						}
			} else {
				this.selectedCompartment = "";
			}
			view.selectTableRow(this.selectedCompartment, undefined);
		},

		getSelectedCompartment: function getSelectedCompartment() {
			return this.selectedCompartment;
		},

		onSelectComp: function(oEvent) {
            var view = this.ctrl;
			this.compButtons.forEach(element => view.toggleButton(element, false));

			view.toggleButton(oEvent.mParameters.id, oEvent.mParameters.pressed);
			if(oEvent.mParameters.pressed) {
				this.selectedComp = oEvent.mParameters.id;
				this.setSelectedCompartment(oEvent.oSource.mProperties.text);
			} else {
				this.selectedComp = "";
				this.setSelectedCompartment("");
			}
			view.refreshUIElements();
		}
       



    }); 
});
