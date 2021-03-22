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

	return Controller.extend("zswl_as_inve.controller.BaseController", {
		whNumber: undefined,
		workstation: undefined,

		checkWhNumberAndWorkstation: function  checkWhNumberAndWorkstation() {
			var queryString = window.location.search;
			console.log(queryString);
			var urlParams = new URLSearchParams(queryString); // ?product=shirt&color=blue&newuser&size=m
	  
			this.whNumber = urlParams.get('whnumber');
			this.workstation = urlParams.get('workstation');
	  
			if (!this.whNumber || !this.workstation) {
			  //change this url later
			  var arr = window.location.pathname.split("/");
			  arr[arr.length - 2] = "zswl_as_login";
			  var pathName = arr.join("/");
			  var search = window.location.search;
			  var appLocation = window.location.origin + pathName; //Send all the params to the login application
	  
			  location.replace("".concat(appLocation, "?wsMode=PI&").concat(search.substring(1, search.length)));
			}
		  },

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
					"zswl_as_inve.view.MessagePopover", this);
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

		showElement: function (Element) {
			var oModel = this.getElementsModel();
			var propertyString = "/" + Element + "/visible";
			oModel.setProperty(propertyString, true);
			oModel.refresh(true);
		},

		hideElement: function (Element) {
			var oModel = this.getElementsModel();
			var propertyString = "/" + Element + "/visible";
			oModel.setProperty(propertyString, false);
			oModel.refresh(true);
		},

		toggleButton: function (Element, toggle) {
			var oModel = this.getElementsModel();
			var propertyString = "/" + Element + "/pressed";
			oModel.setProperty(propertyString, toggle);
			oModel.refresh(true);
		},

		handleMessageResponse: function handleMessageResponse(response, messagebox, showToast) {
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
	  
			  //this.createMessageBox(sapMessages);
			} else {
			  var property = null;
			  response.hasOwnProperty("responseText") ? property = "responseText" : property = "body";
	  
			  if (response[property].includes("error")) {
				var error = JSON.parse(response[property]);
				var message = error.error.message.value;
	  
				if (error.error.code.includes(errorCodeInvalidRange)) {
				  message = "Invalid Value";
				}
				
				if(showToast) {
					MessageToast.show(message);
				} else {
					this.showMessage(message, "Error", messagebox);
				}
			  }
			}
		  }


	});
});