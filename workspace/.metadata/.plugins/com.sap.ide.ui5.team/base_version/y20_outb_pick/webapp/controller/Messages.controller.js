"use strict";

sap.ui.define(["./Base.controller"], function (Controller) {
  "use strict";

  return Controller.extend("y20_outb_pick.controller.Messages", {
    onInit: function onInit() {
      this.initMessageManager();
    },
    initMessageManager: function initMessageManager() {
      var messageManager = sap.ui.getCore().getMessageManager();
      this.getView().setModel(messageManager.getMessageModel(), "message");
    },
    getMessagePopover: function getMessagePopover() {
      if (!this.messagePopover) {
        this.messagePopover = sap.ui.xmlfragment(this.getView().getId(), "y20_outb_pick.view.MessagePopover", this);
        this.getView().addDependent(this.messagePopover);
      }

      return this.messagePopover;
    },
    onMessagePopoverPress: function onMessagePopoverPress(oEvent) {
      this.getMessagePopover().openBy(oEvent.getSource());
    },
    onExitPressed: function onExitPressed() {
      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_MULTI_SRV", true);
      var warehouseNumber = this.whNumber;

      if (!warehouseNumber) {
        this.checkWhNumberAndWorkstation();
      }

      var requestBody = {
        LGNUM: warehouseNumber,
        UCOMM: "03"
      };
      requestBody.Ucomm_WarehouseTaskNav = JSON.parse(JSON.stringify(this.getView().getModel("modelWarehouseTaskNav").getData()));
      requestBody.Ucomm_WarehouseTaskNav.QUAN.QUAN = requestBody.Ucomm_WarehouseTaskNav.QUAN.QUAN.toString();
      oModel.create("/UcommCollection", requestBody, {
        success: function success() {
          return location.reload();
        },
        error: function error() {
          return location.reload();
        }
      });
    }
  });
});