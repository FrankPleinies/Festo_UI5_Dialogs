"use strict";

sap.ui.define(["./Base.controller"], function (Controller) {
    "use strict";

    return Controller.extend("y20_outb_pick.controller.Messages", {

        onInit: function () {
            this.initMessageManager()
        },

        initMessageManager: function () {
            const messageManager = sap.ui.getCore().getMessageManager();
            this.getView().setModel(messageManager.getMessageModel(), "message");
        },

        getMessagePopover: function () {
            if (!this.messagePopover) {
                this.messagePopover = sap.ui.xmlfragment(this.getView().getId(), "y20_outb_pick.view.MessagePopover", this);
                this.getView().addDependent(this.messagePopover);
            }
            return this.messagePopover;
        },

        onMessagePopoverPress: function (oEvent) {
            this.getMessagePopover().openBy(oEvent.getSource());
        },

        onExitPressed: function () {
            const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_MULTI_SRV", true);
            const warehouseNumber = this.whNumber
            if (!warehouseNumber) {
                this.checkWhNumberAndWorkstation()
            }

            let requestBody = { LGNUM: warehouseNumber, UCOMM: "03" }
            requestBody.Ucomm_WarehouseTaskNav = JSON.parse(JSON.stringify(this.getView().getModel("modelWarehouseTaskNav").getData()))
            requestBody.Ucomm_WarehouseTaskNav.QUAN.QUAN = requestBody.Ucomm_WarehouseTaskNav.QUAN.QUAN.toString()


            oModel.create("/UcommCollection", requestBody, {
                success: () => location.reload(),
                error: () => location.reload()
            });

        }

    });
});