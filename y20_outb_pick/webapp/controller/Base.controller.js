"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/ui/core/message/Message"], function (Controller, MessageBox, Message) {
  "use strict";

  return Controller.extend("y20_outb_pick.controller.Base", {
    whNumber: undefined,
    onInit: function onInit() {
      this.checkWhNumberAndWorkstation();
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

  checkWhNumberAndWorkstation: function checkWhNumberAndWorkstation() {
      var queryString = window.location.search;
      console.log(queryString);
      var urlParams = new URLSearchParams(queryString);
      this.whNumber = urlParams.get('whnumber');
      var workStation = urlParams.get('workstation');

      if (!this.whNumber || !workStation) {
        var arr = window.location.pathname.split("/");
        arr[arr.length - 2] = "y20_ui5_login";
        var pathName = arr.join("/");
        var search = window.location.search;
        var appLocation = window.location.origin + pathName; //Send all the params to the login application

        location.replace("".concat(appLocation, "?appname=multipick&").concat(search.substring(1, search.length)));
      }
    },
    handleMessageResponse: function handleMessageResponse(response, closeCallback, showToast) {
      var errorCodeInvalidRange = "9FB7E23B75B7157FE10000000A11447B";

      if (!response.headers) {
        response = response.response;
      }

      var isThereSuccessMessage = !!response.headers["sap-message"];

      if (isThereSuccessMessage) {
        var sapMessages = JSON.parse(response.headers["sap-message"]);
        var sapMessagesArr = sapMessages.details;

        if (sapMessagesArr && sapMessagesArr instanceof Array) {
          sapMessagesArr.slice().reverse().forEach(function (messageObj) {
            sapMessages.message += "\n" + messageObj.message;
          });
        }

        if (!showToast) {
          this.createMessageBox(sapMessages, closeCallback);
          this.displayMessageInFooter(sapMessages.message, sapMessages.severity);
        } else {
          sap.m.MessageToast.show(sapMessages.message);
        }
      } else {
        var property = null; // eslint-disable-next-line no-prototype-builtins

        response.hasOwnProperty("responseText") ? property = "responseText" : property = "body";

        if (response[property].includes("error")) {
          try {
            var error = JSON.parse(response[property]);
            var message = error.error.message.value;

            if (error.error.code.includes(errorCodeInvalidRange)) {
              message = "Invalid Value";
            }

            this.createMessageBox({
              severity: "error",
              message: message
            }, closeCallback);
            this.displayMessageInFooter(message, "error");
          } catch (error) {
            this.displayMessageInFooter("Invalid Message Response", "error");
          }
        }
      }
    },
    createMessageBox: function createMessageBox(sapMessages, closeCallback) {
      var severity = sapMessages.severity;
      var newIcon = MessageBox.Icon.SUCCESS;

      if (severity === "error") {
        newIcon = MessageBox.Icon.ERROR;
      } else if (severity === "warning") {
        newIcon = MessageBox.Icon.WARNING;
      } else if (severity === "info") {
        newIcon = MessageBox.Icon.INFORMATION;
      }

      var title = severity[0].toUpperCase() + severity.slice(1);
      MessageBox.show(sapMessages.message, {
        icon: newIcon,
        title: title,
        styleClass: "sapUiSizeCozy",
        onClose: function onClose() {
          closeCallback ? closeCallback() : undefined;
        }
      });
    },
    addMessageToMsgManager: function addMessageToMsgManager(message, type, additionalText) {
      var oMessage = new Message({
        message: message,
        type: type[0].toUpperCase() + type.slice(1),
        additionalText: additionalText ? additionalText : "",
        processor: this.getView().getModel()
      });
      sap.ui.getCore().getMessageManager().addMessages(oMessage);
    },
    displayMessageInFooter: function displayMessageInFooter(message, msgType) {
      var rootViewId = this.getView().getId();
      var separator = "--";
      var nextedViewId = "messagesView";
      var messageHBox = rootViewId.includes(nextedViewId) ? this.byId("messageHBox") : sap.ui.getCore().byId("".concat(rootViewId).concat(separator).concat(nextedViewId)).byId("messageHBox");
      var messageType = {
        error: "Error",
        info: "Information",
        none: "None",
        success: "Success",
        warning: "Warning"
      };
      messageHBox.destroyItems();
      messageHBox.addItem(new sap.m.MessageStrip({
        text: message,
        showCloseButton: false,
        showIcon: false,
        type: messageType[msgType]
      }));
      setTimeout(function () {
        return messageHBox.destroyItems();
      }, 5000);
    }
  });
});