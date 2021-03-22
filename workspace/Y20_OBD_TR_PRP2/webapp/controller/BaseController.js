sap.ui.define([
	"sap/ui/core/mvc/Controller",
	// "sap/ui/core/mvc/XMLView",
	"sap/m/MessageStrip",
	"sap/base/Log",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/Device",
	"sap/ui/core/message/Message",
	"sap/ui/core/library"
], function (Controller, MessageStrip, Log, JSONModel, MessageToast, MessageBox, Device, Message, library) {
	"use strict";

	var oMessageManager;

	return Controller.extend("Y20_OBD_TR_PRP2.controller.BaseController", {

		initElementsModel: function() {
			 var oModelData = new sap.ui.model.json.JSONModel();
			 oModelData.loadData("model/Elements.json");
			 this.getView().setModel(oModelData, "ELEMENTS");
		},
		
		getElementsModel: function() {
			return this.getView().getModel("ELEMENTS");
		},
		
		initHeaderModel: function() {
			 var oModelData = new sap.ui.model.json.JSONModel();
			 oModelData.loadData("model/Header.json");
			 this.getView().setModel(oModelData, "HEADER");
		},
		
		getHeaderModel: function() {
			return this.getView().getModel("HEADER");
		},

		initMessageModel: function() {
			// set message model
			oMessageManager = sap.ui.getCore().getMessageManager();
			this.getView().setModel(oMessageManager.getMessageModel(), "message");

			// or just do it for the whole view
			oMessageManager.registerObject( this.getView(), true);
		},
		
		showMessage: function (message, type, messagebox) {
			var oMessage = new Message({
				message: message,
				type: type,
				target: "/Dummy",
				processor: this.getView().getModel()
			});
			sap.ui.getCore().getMessageManager().addMessages(oMessage);

					if(messagebox) {
						MessageBox.error(message);
					} else {
					var oHL = this.getView().byId("hbox1");
					var oMs = sap.ui.getCore().byId("msgStrip");

					if (oMs) {
						oMs.destroy();
					}

					var oMsgStrip = new sap.m.MessageStrip("msgStrip", {
						text: message,
						showCloseButton: false,
						showIcon: false,
						type: type
					});
					oHL.addItem(oMsgStrip);
				}
		},

		
		onMessagePopoverPress: function (oEvent) {
			this._getMessagePopover().openBy(oEvent.getSource());
		},

		_getMessagePopover: function () {
			// create popover lazily (singleton)
			if (!this._oMessagePopover) {
				this._oMessagePopover = sap.ui.xmlfragment(this.getView().getId(),
					"Y20_OBD_TR_PRP2.view.MessagePopover", this);
				this.getView().addDependent(this._oMessagePopover);
			}
			return this._oMessagePopover;
		},
		

		enableElement: function (Element) {
			var oModel = this.getElementsModel();
			var propertyString = "/" + Element + "/enabled";
			oModel.setProperty(propertyString, true);
			oModel.refresh(true);
		},

		disableElement: function (Element) {
			var oModel = this.getElementsModel();
			var propertyString = "/" + Element + "/enabled";
			oModel.setProperty(propertyString, false);
			oModel.refresh(true);
		},

		handleMessageResponse: function handleMessageResponse(response, messagebox) {
			var errorCodeInvalidRange = "9FB7E23B75B7157FE10000000A11447B";
	  
			if (!response.headers) {
			  response = response.response;
			}
	  
			var isThereSuccessMessage = !!response.headers["sap-message"];
	  
			if (isThereSuccessMessage) {
			  var sapMessages = JSON.parse(response.headers["sap-message"]);
			  var sapMessagesArr = sapMessages.details;
	  
			  if (sapMessagesArr && sapMessagesArr instanceof Array) {
				sapMessagesArr.forEach(function (messageObj) {
				  sapMessages.message += "\n" + messageObj.message;
				});
			  }
	  
			  this.createMessageBox(sapMessages);
			} else {
			  var property = null;
			  response.hasOwnProperty("responseText") ? property = "responseText" : property = "body";
	  
			  if (response[property].includes("error")) {
				var error = JSON.parse(response[property]);
				var message = error.error.message.value;
	  
				if (error.error.code.includes(errorCodeInvalidRange)) {
				  message = "Invalid Value";
				}
				
				this.showMessage(message, "Error", messagebox);
				
			  }
			}
		  }


	});
});