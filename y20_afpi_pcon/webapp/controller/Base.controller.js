sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/Dialog",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/ui/core/message/Message",
	"sap/ui/core/library"
], function (Controller, MessageBox, MessageToast, Dialog, JSONModel, Device, Message, Library) {
	"use strict";

	var oMessageManager;
	var MessageType = Library.MessageType;

	return Controller.extend("y20_outb_afpi_pcon.controller.Base", {

		//################ Public APIs ###################


		initElementsModel: function () {
			var oModelData = new sap.ui.model.json.JSONModel();
			oModelData.loadData("model/Elements.json");
			this.getView().setModel(oModelData, "ELEMENTS");
		},

		getElementsModel: function () {
			return this.getView().getModel("ELEMENTS");
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

		toggleButton: function (Element, toggle) {
			var oModel = this.getElementsModel();
			var propertyString = "/" + Element + "/pressed";
			oModel.setProperty(propertyString, toggle);
			oModel.refresh(true);
		},

		displayMessageInFooter(message, msgType) {

			const messageHBox = this.getView().byId("hbox1");
			const messageType = {
				error: "Error",
				info: "Information",
				none: "None",
				success: "Success",
				warning: "Warning"
			}
			messageHBox.destroyItems()
			messageHBox.addItem(new sap.m.MessageStrip({
				text: message,
				showCloseButton: false,
				showIcon: false,
				type: messageType[msgType]
			}));
			setTimeout(() => messageHBox.destroyItems(), 5000)
		},

		/**
		* showMessage
		* Shows a simple message in a message box
		*/
		showMessage: function (severity, msgtitle, msgtext) {
			//sap.m.MessageToast.show(msgtext);
			var msgicon = MessageBox.Icon.INFORMATION;
			var msgdefaulttitle = "Information";
			if (severity === "error") {
				msgicon = MessageBox.Icon.ERROR;
				msgdefaulttitle = "Error";
			} else if (severity === "warning") {
				msgicon = MessageBox.Icon.WARNING;
				msgdefaulttitle = "Warning";
			} else if (severity === "info") {
				msgicon = MessageBox.Icon.INFORMATION;
				msgdefaulttitle = "Information";
			} else if (severity === "success") {
				msgicon = MessageBox.Icon.SUCCESS;
				msgdefaulttitle = "Success";
			}
			if (msgtitle === null || msgtitle.length == 0) {
				msgtitle = msgdefaulttitle;
			}
			MessageBox.show(msgtext, {
				icon: msgicon,
				title: msgtitle,
				styleClass: "sapUiSizeCozy"
			});

		},

		/**
		* showMessageDialog
		* Shows a message in a dialog
		*/
		showMessageDialog: function (severity, msgheader, msgtitle, msgtext) {
			// Severity
			var msgicon = "";
			var msgiconcolor = "";
			var msgdefaultheader = "Information";
			if (severity === "error") {
				msgicon = "sap-icon://message-error";
				msgiconcolor = "#e00"; // sapUiErrorColor	
				msgdefaultheader = "Error";
			} else if (severity === "warning") {
				msgicon = "sap-icon://message-warning";
				msgiconcolor = "#f58d33"; // sapUiWarningColor
				msgdefaultheader = "Warning";
			} else if (severity === "info") {
				msgicon = "sap-icon://message-information";
				msgiconcolor = "#0a6ed1";  // sapUiInformative	
				msgdefaultheader = "Information";
			} else if (severity === "success") {
				msgicon = "sap-icon://message-success";
				msgiconcolor = "#16ab54"; // sapUiSuccessColor	
				msgdefaultheader = "Success";
			}
			if (msgheader === null || msgheader.length == 0) {
				msgheader = msgdefaultheader;
			}

			// Message model
			var messageDialog = {
				"msgHeader": msgheader,
				"msgTitle": msgtitle,
				"msgText": msgtext,
				"msgIcon": msgicon,
				"msgIconColor": msgiconcolor
			}
			var jsonModelMessageDialog = new JSONModel(messageDialog);
			this.getView().setModel(jsonModelMessageDialog, "modelMessageDialog");

			this._getMessageDialog().open();
		},

		/**
		* onCloseMessageDialog
		* Close message dialog
		*/
		onCloseMessageDialog: function onCloseMessageDialog() {
			this.byId("messageDialog").close();
		},

		/**
		* initMessageModel
		* Initialize the message model by using the message manager
		*/
		initMessageModel: function () {
			// set message model
			oMessageManager = sap.ui.getCore().getMessageManager();
			this.getView().setModel(oMessageManager.getMessageModel(), "message");

			// activate automatic message generation for complete view
			oMessageManager.registerObject(this.getView(), true);
		},

		/**
		* addMessage
		* Add a message to the message manager
		*/
		addMessage: function (severity, msgtitle, msgtext, show) {
			//var oText = this.getResourceBundle().getText("TEST_MESSAGE");
			var msgtype = MessageType.Information;
			if (severity === "error") {
				msgtype = MessageType.Error;
			} else if (severity === "warning") {
				msgtype = MessageType.Warning;
			} else if (severity === "info") {
				msgtype = MessageType.Information;
			} else if (severity === "success") {
				msgtype = MessageType.Success;
			}

			var oMessage = new Message({
				message: msgtext,
				type: msgtype
			});
			sap.ui.getCore().getMessageManager().addMessages(oMessage);

			if (show) {
				this.showMessage(severity, msgtitle, msgtext);
			}
		},

		/**
		* clearMessages
		* Clear all messages in the message manager 
		*/
		clearMessages: function () {
			sap.ui.getCore().getMessageManager().removeAllMessages();
		},

		/**
		* onMessagePopoverPress
		* Open message popover
		*/
		onMessagePopoverPress: function (oEvent) {
			this._getMessagePopover().openBy(oEvent.getSource());
		},

		/**
		* handleMessageResponse
		* Handle response and show it as message
		*/
		handleMessageResponse: function handleMessageResponse(response) {
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

				this._createSAPMessage(sapMessages);

			} else {
				var property = null;
				response.hasOwnProperty("responseText") ? property = "responseText" : property = "body";

				if (response[property].includes("error")) {
					//TODO: Uncaught SyntaxError: Unexpected token < in JSON at position 0 at JSON.parse (<anonymous>)
					try {
						var error = JSON.parse(response[property]);
						var message = error.error.message.value;

						if (error.error.code.includes(errorCodeInvalidRange)) {
							message = "Invalid Value";
						}
					} catch (err) {
						message = "Unknown error";
					}
					//message will be added automatic, just show it
					this.showMessage("error", "", message);
				}
			}
		},

		/**
		 * setFocusOnField
		 * set the focus on a field
		 */
		setFocusOnField: function (fieldname) {
			jQuery.sap.delayedCall(200, this, function () {
				this.byId(fieldname).focus();
			});
		},

		/**
		 * Convenience method for getting the resource bundle.
		 * @public
		 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
		 */
		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		/**
		* getChangeDestBinDialog
		* Getter for popup dialog for changing destination bin
		*/
		getChangeDestBinDialog: function () {
			// created dialog for changing destination bin
			if (!this._oDestBinDialog) {
				this._oDestBinDialog = sap.ui.xmlfragment(this.getView().getId(),
					"y20_outb_afpi_pcon.view.PopupDialogChangeDestBin", this);
				this.getView().addDependent(this._oDestBinDialog);
			}
			return this._oDestBinDialog;
		},

		//################ Private APIs ###################

		/**
		* _getMessageDialog
		* Getter for message dialog
		*/
		_getMessageDialog: function () {
			// create message dialog
			if (!this._oMessageDialog) {
				this._oMessageDialog = sap.ui.xmlfragment(this.getView().getId(),
					"y20_outb_afpi_pcon.view.MessageDialog", this);
				this.getView().addDependent(this._oMessageDialog);
			}
			return this._oMessageDialog;
		},

		/**
		* _getMessagePopover
		* Getter for message popover
		*/
		_getMessagePopover: function () {
			// create popover lazily (singleton)
			if (!this._oMessagePopover) {
				this._oMessagePopover = sap.ui.xmlfragment(this.getView().getId(),
					"y20_outb_afpi_pcon.view.MessagePopover", this);
				this.getView().addDependent(this._oMessagePopover);
			}
			return this._oMessagePopover;
		},

		/**
		* createSAPMessage
		* Create a sap message 
		*/
		_createSAPMessage: function createSAPMessage(sapMessages) {
			//message will be added automatic, just show it
			var severity = sapMessages.severity;
			this.showMessage(
				severity,
				severity[0].toUpperCase() + severity.slice(1),
				sapMessages.message);
		}

	});

});
