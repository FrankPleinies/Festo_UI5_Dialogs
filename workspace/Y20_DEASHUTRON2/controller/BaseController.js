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

	return Controller.extend("com.swl.DECO_ASSIGN_HU_TROLLEY.controller.BaseController", {

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
		
		showMessage: function (message, type) {
			var oHL = this.getView().byId("hbox1");
			var oMessage = new Message({
				message: message,
				type: type,
				target: "/Dummy",
				processor: this.getView().getModel()
			});
			sap.ui.getCore().getMessageManager().addMessages(oMessage);

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
		},

		onMessagePopoverPress: function (oEvent) {
			this._getMessagePopover().openBy(oEvent.getSource());
		},

		_getMessagePopover: function () {
			// create popover lazily (singleton)
			if (!this._oMessagePopover) {
				this._oMessagePopover = sap.ui.xmlfragment(this.getView().getId(),
					"com.swl.DECO_ASSIGN_HU_TROLLEY.view.MessagePopover", this);
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
		}


	});
});