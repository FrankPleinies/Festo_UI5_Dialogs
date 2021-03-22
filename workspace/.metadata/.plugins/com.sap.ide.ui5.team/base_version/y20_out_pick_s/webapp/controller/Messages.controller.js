"use strict";

sap.ui.define(["./Base.controller"], function (Controller) {
  "use strict";

  return Controller.extend("y20_out_pick_s.controller.Messages", {
    onInit: function onInit() {
      this.initMessageManager();
    },
    initMessageManager: function initMessageManager() {
      var messageManager = sap.ui.getCore().getMessageManager();
      this.getView().setModel(messageManager.getMessageModel(), "message");
    },
    getMessagePopover: function getMessagePopover() {
      if (!this.messagePopover) {
        this.messagePopover = sap.ui.xmlfragment(this.getView().getId(), "y20_out_pick_s.view.MessagePopover", this);
        this.getView().addDependent(this.messagePopover);
      }

      return this.messagePopover;
    },
    onMessagePopoverPress: function onMessagePopoverPress(oEvent) {
      this.getMessagePopover().openBy(oEvent.getSource());
    },
    onExitPressed: function onExitPressed() {
      var _this = this;

      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_SINGLE_SRV", {
        useBatch: false,
        defaultUpdateMethod: "PUT"
      });
      var warehouseNumber = this.whNumber;

      if (!warehouseNumber) {
        this.checkWhNumberAndWorkstation();
      }

      var setInfo = "(LGNUM='".concat(this.whNumber, "')");
      var requestBody = JSON.parse(JSON.stringify(this.getView().getModel("modelToNav").getData()));
      requestBody.UCOMM = "03";
      oModel.update("/WarehouseTaskCollection" + setInfo, requestBody, {
        success: function success(successData, response) {
          _this.handleMessageResponse(response); // this.onConfirmDialog(null, this.lastSetInfoDataOnLoadData)


          location.reload();
        },
        error: function error(err) {
          return _this.handleMessageResponse(err);
        }
      });
    }
  });
});