sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/message/Message"
], function (Controller, MessageBox, Message) {
    "use strict";

    return Controller.extend("y20_out_pick_s.controller.Base", {

        whNumber: undefined,
        trolleyQuery: undefined,

        onInit: function () {
            this.checkWhNumberAndWorkstation()
        },

        checkWhNumberAndWorkstation: function () {
            const queryString = window.location.search;
            console.log(queryString);
            const urlParams = new URLSearchParams(queryString);
            // ?product=shirt&color=blue&newuser&size=m
            this.whNumber = urlParams.get('whnumber')
            const workStation = urlParams.get('workstation')
            this.trolleyQuery = urlParams.get('trolley')
            if (!this.whNumber || !workStation) {
                //change this url later
                let arr = window.location.pathname.split("/")
                arr[arr.length - 2] = "y20_ui5_login"
                const pathName = arr.join("/")
                const search = window.location.search
                const appLocation = window.location.origin + pathName
                //Send all the params to the login application
                location.replace(`${appLocation}?appname=singlepick&${search.substring(1, search.length)}`)
            }

        },


        handleMessageResponse: function (response, closeCallback, showToast) {

            const errorCodeInvalidRange = "9FB7E23B75B7157FE10000000A11447B";

            if (!response.headers) {
                response = response.response;
            }
            let isThereSuccessMessage = !!response.headers["sap-message"];
            if (isThereSuccessMessage) {
                let sapMessages = JSON.parse(response.headers["sap-message"]);
                let sapMessagesArr = sapMessages.details
                if (sapMessagesArr && sapMessagesArr instanceof Array) {
                    sapMessagesArr.forEach(messageObj => {
                        sapMessages.message += "\n" + messageObj.message;
                    });
                }
                if (!showToast) {
                    this.createMessageBox(sapMessages, closeCallback);
                    this.displayMessageInFooter(sapMessages.message, sapMessages.severity)
                } else {
                    sap.m.MessageToast.show(sapMessages.message)
                }

            } else {
                let property = null
                // eslint-disable-next-line no-prototype-builtins
                response.hasOwnProperty("responseText") ? property = "responseText" : property = "body"
                if (response[property].includes("error")) {
                    try {
                        let error = JSON.parse(response[property]);
                        let message = error.error.message.value;
                        if (error.error.code.includes(errorCodeInvalidRange)) {
                            message = "Invalid Value";
                        }
                        this.createMessageBox({ severity: "error", message: message }, closeCallback);
                        this.displayMessageInFooter(message, "error")
                    } catch (error) {
                        this.displayMessageInFooter("Invalid Message Response", "error")
                    }
                }
            }
        },

        createMessageBox: function (sapMessages, closeCallback) {
            let severity = sapMessages.severity;
            let newIcon = MessageBox.Icon.SUCCESS;
            if (severity === "error") {
                newIcon = MessageBox.Icon.ERROR;
            }
            else if (severity === "warning") {
                newIcon = MessageBox.Icon.WARNING;
            }
            else if (severity === "info") {
                newIcon = MessageBox.Icon.INFORMATION;
            }
            const title = severity[0].toUpperCase() + severity.slice(1)
            MessageBox.show(sapMessages.message, {
                icon: newIcon,
                title: title,
                styleClass: "sapUiSizeCozy",
                onClose: function () { closeCallback ? closeCallback() : undefined }
            });
        },

        addMessageToMsgManager: function (message, type, additionalText) {
            const oMessage = new Message({
                message: message,
                type: type[0].toUpperCase() + type.slice(1),
                additionalText: additionalText ? additionalText : "",
                processor: this.getView().getModel()
            });
            sap.ui.getCore().getMessageManager().addMessages(oMessage);
        },

        displayMessageInFooter(message, msgType) {
            const rootViewId = this.getView().getId();
            const separator = "--"
            const nextedViewId = "messagesView"
            const messageHBox = rootViewId.includes(nextedViewId) ? this.byId("messageHBox") : sap.ui.getCore().byId(`${rootViewId}${separator}${nextedViewId}`).byId("messageHBox")

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
    });
});



