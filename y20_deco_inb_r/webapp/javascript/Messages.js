"use strict";

sap.ui.define(["./Base.controller"], function (Controller) {
    "use strict";

    return Controller.extend("y20_deco_inb_r.controller.Messages", {

        onInit: function () {
            this.initMessageManager()
        },

        initMessageManager: function () {
            const messageManager = sap.ui.getCore().getMessageManager();
            this.getView().setModel(messageManager.getMessageModel(), "message");
        },

        getMessagePopover: function () {
            if (!this.messagePopover) {
                this.messagePopover = sap.ui.xmlfragment(this.getView().getId(), "y20_deco_inb_r.view.MessagePopover", this);
                this.getView().addDependent(this.messagePopover);
            }
            return this.messagePopover;
        },

        onMessagePopoverPress: function (oEvent) {
            this.getMessagePopover().openBy(oEvent.getSource());
        },

        onExitPressed: function () {
            this.addMessageToMsgManager("Bye!", "warning", "Demo Message")
            this.displayMessageInFooter("Bye!", "warning", "Demo Message")
        }

    });
});