sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/ui/core/message/Message",
	"sap/ui/core/library"
], function (Controller, MessageBox, MessageToast, JSONModel, Device, Message, Library) {
	"use strict";

	var oMessageManager;
	var MessageType = Library.MessageType;
	
	return Controller.extend("y20_outb_afpi.controller.Base", {
		
		//################ Public APIs ###################
		
		/**
		* showMessage
		* Shows a simple message in a message box
		*/
		showMessage: function(severity, msgtitle, msgtext) {
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
		* initMessageModel
		* Initialize the message model by using the message manager
		*/
		initMessageModel: function() {
			// set message model
			oMessageManager = sap.ui.getCore().getMessageManager();
			this.getView().setModel(oMessageManager.getMessageModel(), "message");

			// activate automatic message generation for complete view
			oMessageManager.registerObject(this.getView(), true);
		},
		
		initElementsModel: function() {
			var oModelData = new sap.ui.model.json.JSONModel();
			oModelData.loadData("model/Elements.json");
			this.getView().setModel(oModelData, "ELEMENTS");
		 },
		 
		 getElementsModel: function() {
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
	 	handleMessageResponse : function handleMessageResponse(response) {
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
		 * Convenience method for getting the resource bundle.
		 * @public
		 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
		 */
		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},
		
		//################ Private APIs ###################
		
		/**
		* _getMessagePopover
		* Getter for message popover
		*/	
		_getMessagePopover: function () {
			// create popover lazily (singleton)
			if (!this._oMessagePopover) {
				this._oMessagePopover = sap.ui.xmlfragment(this.getView().getId(),
					"y20_outb_afpi.view.MessagePopover", this);
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
