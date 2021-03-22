"use strict";

sap.ui.define(["./Base.controller"], function (Controller) {
    "use strict";

    return Controller.extend("y20_out_pick_s.controller.Messages", {

        onInit: function () {
            this.initMessageManager()
        },

        initMessageManager: function () {
            const messageManager = sap.ui.getCore().getMessageManager();
            this.getView().setModel(messageManager.getMessageModel(), "message");
        },

        getMessagePopover: function () {
            if (!this.messagePopover) {
                this.messagePopover = sap.ui.xmlfragment(this.getView().getId(), "y20_out_pick_s.view.MessagePopover", this);
                this.getView().addDependent(this.messagePopover);
            }
            return this.messagePopover;
        },

        onMessagePopoverPress: function (oEvent) {
            this.getMessagePopover().openBy(oEvent.getSource());
        },

        onExitPressed: function () {
            const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_SINGLE_SRV", {
                useBatch: false,
                defaultUpdateMethod: "PUT"
            });
            const warehouseNumber = this.whNumber
            if (!warehouseNumber) {
                this.checkWhNumberAndWorkstation()
            }
            const setInfo = `(LGNUM='${this.whNumber}')`
            let requestBody = JSON.parse(JSON.stringify(this.getView().getModel("modelToNav").getData()))
            requestBody.UCOMM = "03"
            oModel.update("/WarehouseTaskCollection" + setInfo, requestBody, {
                success: (successData, response) => {
                    this.handleMessageResponse(response)
                    // this.onConfirmDialog(null, this.lastSetInfoDataOnLoadData)
                    location.reload()
                },
                error: err => this.handleMessageResponse(err)
            });
        }

    });
});