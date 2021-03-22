"use strict";

sap.ui.define(["./Base.controller", "../model/formatter", "sap/ui/model/json/JSONModel", "sap/ui/core/Fragment", "sap/ui/core/BusyIndicator", "../model/formatter"], function (Controller, formatter, JSONModel, Fragment, BusyIndicator) {
  "use strict";

  return Controller.extend("y20_outb_pick.controller.MainScreen", {
    formatter: formatter,
    scannedValue: undefined,
    initialQuantityValue: undefined,
    deviationCommand: undefined,
    warehouseTask: undefined,
    isExceptionPressed: undefined,
    doCheckNewPickHU: true,
    scanPickHUValue: undefined,
    onInit: function onInit() {
      this.checkWhNumberAndWorkstation();
      this.setCurrentLoggedInUser();
      this.onOpenScanDialog();
      var isTouch = sap.ui.Device.support.touch;
      this.getView().addStyleClass(isTouch ? "sapUiSizeCozy" : "sapUiSizeCompact");
      isTouch && this.getView().byId("BlockLayout").addStyleClass("tablet-transform"); // this.onOpenZeroStockCheckDialog()
      // this.onOpenLowStockCheckDialog()
      //this.onOpenDeviationDialog()
      //this.onOpenNewHUDialog()
 			//Set the jsonModel for all Elements of the screen
			this.initElementsModel();

    },
    onAfterRendering: function onAfterRendering() {
      var _this = this;

      var isTouch = sap.ui.Device.support.touch;
      var reg = RegExp('customButton');
      setTimeout(function () {
        var btnArr = Array.from(document.getElementsByTagName("button")).filter(function (button) {
          return reg.test(button.className);
        });
        isTouch && btnArr.forEach(function (button) {
          return window.setTimeout(function () {
            return sap.ui.getCore().byId(button.id).addStyleClass("customTabletButton");
          }, 0);
        });
        isTouch && _this.byId("firstSectionText").addStyleClass("customTextTablet");
        isTouch && _this.byId("firstSectionThird").addStyleClass("customTextTablet");
        isTouch && _this.byId("firstSectionThirdPos").addStyleClass("customTextTablet");
        isTouch && _this.byId("secondCellTextOne").addStyleClass("sapUiSmallMarginTop");
        isTouch && _this.byId("secondCellTextTwo").addStyleClass("customTextTablet"); // this.byId("scanPickText").addStyleClass("sapUiTinyMarginTop")
        // this.byId("onScanPick").removeStyleClass("sapUiTinyMarginTop")

        !isTouch && _this.byId("exceptionFlex").removeStyleClass("sapUiLargeMarginTop");
      }, 0);
    },
    refreshModels: function refreshModels() {
      var models = this.getView().oModels;

      for (var modelName in models) {
        models[modelName].refresh();
      }
    },
    onOpenScanDialog: function onOpenScanDialog() {
      var view = this.getView();
      var popupDialogScan = this.byId("popupDialogScan");

      if (!popupDialogScan) {
        Fragment.load({
          id: view.getId(),
          name: "y20_outb_pick.view.dialogs.popupDialogScan",
          controller: this
        }).then(function (popupDialogScan) {
          view.addDependent(popupDialogScan);
          popupDialogScan.open();
        });
      } else {
        this.byId("popupDialogScan").open();
      }
    },
    onConfirmDialog: function onConfirmDialog(event, scanValue, isArrowPressed) {
      var _this2 = this;

      var dataInput = this.getView().byId("formScanInput");
      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_MULTI_SRV", true);
      var scan = scanValue ? scanValue : dataInput.getValue();
      var warehouseNumber = this.whNumber;
      var setInfo = "(LGNUM='".concat(warehouseNumber, "',SCAN='").concat(scan, "')");

      //if (event && event.oSource.getText() === "Confirm" && dataInput.getValue() === "") {
      if (dataInput.getValue() === "") {
          sap.m.MessageToast.show("No value entered!");
        return;
      }

      BusyIndicator.show();
      oModel.read("/ScanCollection" + setInfo, {
        urlParameters: {
          "$expand": "Scan_TrolleyNav,Scan_WarehouseTaskNav"
        },
        useBatch: false,
        success: function success(data) {
          _this2.setModels(data);

          var popupDialog = _this2.byId("popupDialogScan");

          popupDialog.close();

          _this2.removeException();

          _this2.buildStorageBin();

          BusyIndicator.hide();
          var zeroStock = data.Scan_WarehouseTaskNav.ZEROSCK;
          var lowStock = data.Scan_WarehouseTaskNav.LSCK;

          if (lowStock || zeroStock) {
            _this2.byId("redTextLabel").setText("Low Stock Check");
          } else {
            _this2.byId("redTextLabel").setText("");
          }

          var trolley = data.Scan_TrolleyNav.TROLLEY;
          var lgNum = data.Scan_TrolleyNav.LGNUM;
          var whOrder = data.Scan_WarehouseTaskNav.TANUM;

          if (!whOrder && trolley && lgNum) {
            _this2.loadDropOffRequestData(trolley, lgNum, true);
          }

          setTimeout(function () {
            _this2.byId("scanInput").focus();
          }, 0);
        },
        error: function error(err) {
          BusyIndicator.hide();
          dataInput && dataInput.setValue("");

          if (isArrowPressed) {
            var errorCode = JSON.parse(err.responseText).error.code;

            if (errorCode === "/SCWM/RF_DE/264") {
              _this2.loadDropOffRequestData(_this2.scannedValue, _this2.whNumber, true);
            } else {
              _this2.handleMessageResponse(err);
            }
          } else {
            _this2.handleMessageResponse(err);
          }
        }
      });
    },
    setModels: function setModels(data, overrideTask) {
      var _this3 = this;

      var models = [{
        modelTrolley: data
      }, {
        modelTrolleyNav: data.Scan_TrolleyNav
      }, {
        modelWarehouseTaskNav: data.Scan_WarehouseTaskNav
      }];
      models.forEach(function (model) {
        var name = Object.keys(model)[0];

        _this3.getView().setModel(new JSONModel(model[name]), name);
      });
      this.initialQuantityValue = data.Scan_WarehouseTaskNav.QUAN.QUAN;
      this.onQuanChange();
      this.getView().byId("stepInputQuan").setMax(parseInt(this.initialQuantityValue));
      this.scannedValue = data.Scan_TrolleyNav.TROLLEY;

      if (!overrideTask) {
        this.warehouseTask = data.Scan_WarehouseTaskNav.TANUM;
      }
    },
    onAutoAssignDialog: function onAutoAssignDialog() {
      var dataInput = this.getView().byId("formScanInput");
      var scanValue = dataInput.getValue();
      this.onConfirmDialog(null, scanValue);
    },
    onGoToAssignPressed: function onGoToAssignPressed() {
      var url = window.location.protocol + "//" + window.location.host;
      window.location.href = url + "/sap/bc/ui5_ui5/sap/y20_deashutron2/index.html";
    },
    setCurrentLoggedInUser: function setCurrentLoggedInUser() {
      var _this4 = this;

      var xmlHttp = new XMLHttpRequest();

      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          var oUserData = JSON.parse(xmlHttp.responseText);

          var user = " " + oUserData.id;
          _this4.byId("headerContentText").setText(_this4.byId("headerContentText").getText().concat(user));
        }
      };

      xmlHttp.open("GET", "/sap/bc/ui2/start_up", false);
      xmlHttp.send(null);
    },
    buildStorageBin: function buildStorageBin(requestDataString) {
      var _this5 = this;

      var shelfs = 1;
      var shelfToDisplay = 1;
      var shelfSections = 3;
      var targetShelfSection = 1;
      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_SBIN_SERVICES_SRV", true);
      var warehouseNumber = this.whNumber;
      var modelWarehouseTaskNav = this.getView().getModel("modelWarehouseTaskNav").getData();
      BusyIndicator.show();
      var VlplaNum = requestDataString ? requestDataString : modelWarehouseTaskNav.VLPLA;
      var vlpla = encodeURIComponent(VlplaNum);
      oModel.read("/SbinEntSet(Lgnum='".concat(warehouseNumber, "',Lgpla='").concat(vlpla, "')"), {
        useBatch: false,
        success: function success(data) {
          BusyIndicator.hide();
          shelfs = parseInt(data.RackHeight); //Amount of levels

          shelfToDisplay = parseInt(data.Lvl_V); //Relevant level

          shelfSections = parseInt(data.LvlPositions); //Amount of positions in relevant level

          targetShelfSection = parseInt(data.Plpos); // Position to be marked in relevant level

          targetShelfSection = parseInt(data.Plpos); // Position to be marked in relevant level

          _this5.drawStorageBin(_this5.getView(), shelfs, shelfToDisplay, shelfSections, targetShelfSection);
        },
        error: function error() {
          return BusyIndicator.hide();
        }
      });
    },
    drawStorageBin: function drawStorageBin(view, shelfs, shelfToDisplay, shelfSections, targetShelfSection) {
      var container = view.byId("ShelfDisplay");
      container.destroyItems();

      for (var count = 1; count <= shelfs; count++) {
        var shelf = getBox("40px", "70%", "Start", "Center", "stack");

        if (count === shelfToDisplay) {
          for (var sections = 1; sections <= shelfSections; sections++) {
            if (sections === targetShelfSection) {
              var innerBoxSelected = getBox("30px", "100%", "Start", "Center", "itemNotRelevant");

              if (sections == 1) {
                innerBoxSelected.addStyleClass("sapUiSmallMarginBegin");
              }

              if (sections == shelfSections) {
                innerBoxSelected.addStyleClass("sapUiSmallMarginEnd");
              }

              innerBoxSelected.setLayoutData(new sap.m.FlexItemData({
                growFactor: 1
              }));
              shelf.addItem(innerBoxSelected);
            } else {
              var innerBox = getBox("30px", "100%", "Start", "Center", "itemRelevant");

              if (sections == 1) {
                innerBox.addStyleClass("sapUiSmallMarginBegin");
              }

              if (sections == shelfSections) {
                innerBox.addStyleClass("sapUiSmallMarginEnd");
              }

              innerBox.setLayoutData(new sap.m.FlexItemData({
                growFactor: 1
              }));
              shelf.addItem(innerBox);
            }
          }
        }

        container.addItem(shelf);
      }

      function getBox(height, width, alignItems, justifyContent, styleClass) {
        return new sap.m.FlexBox({
          height: height,
          width: width,
          alignItems: alignItems,
          justifyContent: justifyContent
        }).addStyleClass(styleClass);
      }
    },
    onScanSourceSubmit: function onScanSourceSubmit() {
      var _this6 = this;

      var input = this.getView().byId("scanInput");
      var focusInput = this.getView().byId("onScanPick");
      var scannedData = input.getValue();

      if (scannedData) {
        input.setValue();
        var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_MULTI_SRV", true);
        var requestBody = JSON.parse(JSON.stringify(this.getView().getModel("modelTrolley").getData()));
        delete requestBody["Scan_TrolleyNav"];
        requestBody.LGNUM = this.whNumber;
        requestBody.SCAN = scannedData;
        requestBody.Scan_WarehouseTaskNav.QUAN.QUAN = requestBody.Scan_WarehouseTaskNav.QUAN.QUAN.toString();
        BusyIndicator.show();
        oModel.create("/ScanCollection", requestBody, {
          success: function success(successData, response) {
            BusyIndicator.hide();

            _this6.handleMessageResponse(response);

            _this6.getView().setModel(new JSONModel(successData.Scan_WarehouseTaskNav), "modelWarehouseTaskNav");

            _this6.getView().getModel("modelTrolley").getData().Scan_WarehouseTaskNav = successData.Scan_WarehouseTaskNav;
            focusInput.focus();
            sap.m.MessageToast.show("Verification Successfull!");
          },
          error: function error(err) {
            BusyIndicator.hide();

            _this6.handleMessageResponse(err);
          }
        });
      } else {
        sap.m.MessageToast.show("Nothing was entered!");
      }
    },
    onScanPickHuSubmit: function onScanPickHuSubmit(event, scannedHuValue) {
      var _this7 = this;

      // 
      var input = this.getView().byId("onScanPick");
      var scannedData = scannedHuValue ? scannedHuValue : input.getValue();

      if (scannedData) {
        this.scanPickHUValue = scannedData;
        input.setValue();
        var stepInput = this.getView().byId("stepInputQuan");
        var diffValue = parseInt(this.initialQuantityValue) != parseInt(stepInput.getValue());

        if (this.isExceptionPressed && diffValue) {
          this.loadDeviationRequestData(true, scannedData);
          return;
        }

        if (!this.isExceptionPressed && diffValue && this.doCheckNewPickHU) {
          this.onNewPickHUPress(null, true);
          return;
        }

        this.doCheckNewPickHU = true;
        var taskNav = this.getView().getModel("modelWarehouseTaskNav").getData();
        var zeroStock = taskNav.ZEROSCK;
        var lowStock = taskNav.LSCK;
        var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_MULTI_SRV", true);
        var requestBody = {};
        requestBody = this.getView().getModel("modelTrolley").getData();
        requestBody.LGNUM = this.whNumber;
        requestBody.SCAN = scannedData;
        requestBody.Scan_WarehouseTaskNav.QUAN.QUAN = requestBody.Scan_WarehouseTaskNav.QUAN.QUAN.toString();
        BusyIndicator.show();
        oModel.create("/ScanCollection", requestBody, {
          success: function success(successData, response) {
            BusyIndicator.hide(); //do not override tanum with this

            _this7.setModels(successData, true);

            var trolley = _this7.scannedValue + "11";

            if (zeroStock) {
              //ako zero stock e true 
              // tonav QUAN SPLIT и HIODEN NEW ako sa populneni
              _this7.loadZeroStockRequestData(true);
            } else if (lowStock) {
              _this7.loadLowStockRequestData(true);
            } else {
              _this7.onConfirmDialog(null, trolley, true);
            }

            _this7.handleMessageResponse(response, null, true);
          },
          error: function error(err) {
            BusyIndicator.hide();

            _this7.handleMessageResponse(err);
          }
        });
      } else {
        sap.m.MessageToast.show("Nothing was entered!");
      }
    },
    onInfoPressed: function onInfoPressed() {
      var _this8 = this;

      var taskNumberVal = this.getView().getModel("modelWarehouseTaskNav").getData().TANUM;
      var lgNum = new sap.ui.model.Filter("LGNUM", "EQ", this.whNumber);
      var taskNumber = new sap.ui.model.Filter("TANUM", "EQ", taskNumberVal);
      var arr = [lgNum, taskNumber];
      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_MULTI_SRV", {
        useBatch: false
      });
      oModel.read("/ItemTextCollection", {
        filters: arr,
        success: function success(data, resp) {
          _this8.getView().setModel(new JSONModel(data), "informationCollectionModel");

          _this8.handleMessageResponse(resp);

          if (data.results.length > 0) {
            _this8.onOpenInfoDialog();
          }
        },
        error: function error(err) {
          _this8.handleMessageResponse(err);
        }
      });
    },
    onArrowButtonPressed: function onArrowButtonPressed() {
      var _this9 = this;

      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_MULTI_SRV", true);
      var stepInput = this.getView().byId("stepInputQuan");
      var isNewHU = this.getView().getModel("modelWarehouseTaskNav").getData().NEWHU;
      var taskNav = this.getView().getModel("modelWarehouseTaskNav").getData();
      var zeroStock = taskNav.ZEROSCK;
      var lowStock = taskNav.LSCK;

      if (parseInt(this.initialQuantityValue) != parseInt(stepInput.getValue()) && !isNewHU) {
        this.loadDeviationRequestData(true);
      } else {
        var requestBody = JSON.parse(JSON.stringify(this.getView().getModel("modelWarehouseTaskNav").getData()));
        requestBody["WarehouseTask_TrolleyNav"] = JSON.parse(JSON.stringify(this.getView().getModel("modelTrolleyNav").getData()));
        requestBody.QUAN.QUAN = requestBody.QUAN.QUAN.toString();
        BusyIndicator.show();
        oModel.create("/WarehouseTaskCollection", requestBody, {
          success: function success(successData, response) {
            _this9.getView().setModel(new JSONModel(successData.WarehouseTask_TrolleyNav), "modelTrolleyNav");

            _this9.getView().setModel(new JSONModel(successData), "modelWarehouseTaskNav");

            var isThereMessage = !!response.headers["sap-message"]; //this.scannedValue = successData.WarehouseTask_TrolleyNav.TROLLEY

            var trolley = _this9.scannedValue + "11";

            if (zeroStock) {
              _this9.loadZeroStockRequestData(true);
            } else if (lowStock) {
              _this9.loadLowStockRequestData(true);
            } else {
              if (isThereMessage) {
                _this9.handleMessageResponse(response, _this9.onConfirmDialog.bind(_this9, null, trolley, true));
              } else {
                _this9.onConfirmDialog(null, trolley, true);
              }
            }

            BusyIndicator.hide();
          },
          error: function error(err) {
            _this9.handleMessageResponse(err);

            BusyIndicator.hide();
          }
        });
      }
    },
    onOpenInfoDialog: function onOpenInfoDialog() {
      var view = this.getView();
      var popupDialogInfo = this.byId("popupDialogInfo");

      if (!popupDialogInfo) {
        Fragment.load({
          id: view.getId(),
          name: "y20_outb_pick.view.dialogs.PopupDialogInfo",
          controller: this
        }).then(function (popupDialogInfo) {
          view.addDependent(popupDialogInfo);
          popupDialogInfo.open();
        });
      } else {
        this.byId("popupDialogInfo").open();
      }
    },
    onCloseInfoDialog: function onCloseInfoDialog() {
      var popupDialog = this.byId("popupDialogInfo");
      popupDialog.close();
    },
    onOpenDropOffDialog: function onOpenDropOffDialog() {
      var view = this.getView();
      var popupDialogDropOff = this.byId("popupDialogDropOff");

      if (!popupDialogDropOff) {
        Fragment.load({
          id: view.getId(),
          name: "y20_outb_pick.view.dialogs.PopupDialogDropOff",
          controller: this
        }).then(function (popupDialogDropOff) {
          view.addDependent(popupDialogDropOff);
          popupDialogDropOff.open();
        });
      } else {
        this.byId("popupDialogDropOff").open();
      }
    },
    loadDropOffRequestData: function loadDropOffRequestData(trolleyData, warehouseNumber, openPopup) {
      var _this10 = this;

      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", {
        useBatch: false
      });
      var trolley = trolleyData ? trolleyData : "";
      var setInfo = "(Lgnum='".concat(warehouseNumber, "',Trolley='").concat(trolley, "')");
      BusyIndicator.show();
      oModel.read("/PickDropOffTrolScrSet" + setInfo, {
        success: function success(data) {
          _this10.getView().setModel(new JSONModel(data), "modelDropOff");

          BusyIndicator.hide();
          openPopup && _this10.onOpenDropOffDialog();
        },
        error: function error(err) {
          BusyIndicator.hide();
          var errorCode = JSON.parse(err.responseText).error.code;

          if (errorCode === "Y20_UI5/045") {
            _this10.onOpenScanDialog();
          } else {
            _this10.handleMessageResponse(err);
          }
        }
      });
    },
    onConfirmDropOffDialog: function onConfirmDropOffDialog() {
      var _this11 = this;

      var popupDialog = this.byId("popupDialogDropOff");
      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", true);
      var input = this.getView().byId("scanPopupDropOffInput");
      var requestBody = this.getView().getModel("modelDropOff").getData();
      requestBody.LgplaVerifScan = input.getValue();
      oModel.create("/PickDropOffTrolScrSet ", requestBody, {
        success: function success(successData, response) {
          _this11.handleMessageResponse(response);

          popupDialog.close();

          _this11.onOpenScanDialog();
        },
        error: function error(err) {
          return _this11.handleMessageResponse(err);
        }
      });
    },
    afterOpenDropOff: function afterOpenDropOff() {
      var _this12 = this;

      setTimeout(function () {
        var scanPopupDropOffInput = _this12.getView().byId("scanPopupDropOffInput");

        scanPopupDropOffInput.setValue();
        scanPopupDropOffInput.focus();
      }, 0);
    },
    loadDeviationRequestData: function loadDeviationRequestData(openPopup, hu) {
      var _this13 = this;

      var dataModelWarehouseTask = this.getView().getModel("modelWarehouseTaskNav").getData();
      var dataModelTrolley = this.getView().getModel("modelTrolleyNav").getData();
      var stepInput = this.getView().byId("stepInputQuan");
      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", {
        useBatch: false
      });
      var warehouseNumber = this.whNumber;
      var trolley = dataModelTrolley.TROLLEY;
      var tanum = dataModelWarehouseTask.TANUM;
      var nistm = stepInput.getValue().toString();
      var nlenr = hu ? hu : dataModelTrolley.HU;
      var setInfo = "(Lgnum='".concat(warehouseNumber, "',Tanum='").concat(tanum, "',Nistm='").concat(nistm, "',Trolley='").concat(trolley, "',Nlenr='").concat(nlenr, "')");
      BusyIndicator.show();
      oModel.read("/LoadPickDeviationSet" + setInfo, {
        success: function success(data) {
          _this13.getView().setModel(new JSONModel(data), "modelDeviation");

          BusyIndicator.hide();
          openPopup && _this13.onOpenDeviationDialog();
        },
        error: function error(err) {
          _this13.handleMessageResponse(err);

          BusyIndicator.hide();
        }
      });
    },
    onOpenDeviationDialog: function onOpenDeviationDialog() {
      var view = this.getView();
      var popupDialogDeviation = this.byId("popupDialogDeviation");

      if (!popupDialogDeviation) {
        Fragment.load({
          id: view.getId(),
          name: "y20_outb_pick.view.dialogs.popupDialogDeviation",
          controller: this
        }).then(function (popupDialogDeviation) {
          view.addDependent(popupDialogDeviation);
          popupDialogDeviation.open();
        });
      } else {
        this.byId("popupDialogDeviation").open();
      }
    },
    afterOpenDeviation: function afterOpenDeviation() {
      var deviationAdjustButton = this.getView().byId("deviationAdjustButton");
      var deviationBlockButton = this.getView().byId("deviationBlockButton");
      var deviationModelData = this.getView().getModel("modelDeviation").getData();

      if (parseInt(deviationModelData.Nistm) == parseInt(this.initialQuantityValue)) {
        deviationAdjustButton.setEnabled(false);
        deviationBlockButton.setEnabled(false);
      } else {
        deviationAdjustButton.setEnabled(true);
        deviationBlockButton.setEnabled(true);
      }
    },
    onDeviationStepChangedPressed: function onDeviationStepChangedPressed() {
      this.afterOpenDeviation();
    },
    onDeviationAdjustPressed: function onDeviationAdjustPressed(event, command) {
      this.deviationCommand = command ? command : "03";
      var deviationAdjustButton = this.getView().byId("deviationAdjustButton");
      var deviationBlockButton = this.getView().byId("deviationBlockButton");
      deviationAdjustButton.setEnabled(false);
      deviationBlockButton.setEnabled(false);
    },
    onDeviationBlockStockPressed: function onDeviationBlockStockPressed() {
      this.onDeviationAdjustPressed(null, "04");
    },
    onDeviationPostReqest: function onDeviationPostReqest(devCommand) {
      var _this14 = this;

      BusyIndicator.show();
      var popupDialog = this.byId("popupDialogDeviation");
      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", true);
      var requestBody = this.getView().getModel("modelDeviation").getData();
      var stepInputDeviation = this.getView().byId("stepInputDeviation").getValue().toString();
      requestBody.UserComm = devCommand;
      requestBody.Nistm = stepInputDeviation;
      oModel.create("/LoadPickDeviationSet ", requestBody, {
        success: function success(successData, response) {
          _this14.handleMessageResponse(response);

          popupDialog.close();
          BusyIndicator.hide();
          _this14.isExceptionPressed = false;
          var trolley = _this14.scannedValue + "11";

          _this14.onConfirmDialog(null, trolley, true);
        },
        error: function error(err) {
          _this14.handleMessageResponse(err);

          popupDialog.close();
          BusyIndicator.hide();
        }
      });
    },
    onCloseDeviationDialog: function onCloseDeviationDialog() {
      if (this.deviationCommand) {
        this.onDeviationPostReqest(this.deviationCommand);
      } else {
        var popupDialog = this.byId("popupDialogDeviation");
        popupDialog.close();
      }
    },
    //Zero Stock
    onOpenZeroStockCheckDialog: function onOpenZeroStockCheckDialog() {
      var view = this.getView();
      var popupDialogZero = this.byId("popupDialogZeroStockCheck");

      if (!popupDialogZero) {
        Fragment.load({
          id: view.getId(),
          name: "y20_outb_pick.view.dialogs.PopupDialogZeroStockCheck",
          controller: this
        }).then(function (popupDialogZero) {
          view.addDependent(popupDialogZero);
          popupDialogZero.open();
        });
      } else {
        this.byId("popupDialogZeroStockCheck").open();
      }
    },
    loadZeroStockRequestData: function loadZeroStockRequestData(openPopup) {
      var _this15 = this;

      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", {
        useBatch: false
      });
      var whTask = this.warehouseTask;
      var whNumber = this.whNumber;
      var setInfo = "(Lgnum='".concat(whNumber, "',Tanum='").concat(whTask, "')");
      BusyIndicator.show();
      oModel.read("/LowStockCheckPISet" + setInfo, {
        success: function success(data) {
          _this15.getView().setModel(new JSONModel(data), "modelZeroStockCheck");

          BusyIndicator.hide();
          openPopup && _this15.onOpenZeroStockCheckDialog();
        },
        error: function error(err) {
          _this15.handleMessageResponse(err);

          BusyIndicator.hide();
        }
      });
    },
    onPostZeroStockDialog: function onPostZeroStockDialog(userCommand) {
      var _this16 = this;

      var popupDialog = this.byId("popupDialogZeroStockCheck");
      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", true);
      var modelWarehouseTaskNav = this.getView().getModel("modelWarehouseTaskNav").getData();
      var stepInput = this.getView().byId("stepInputZeroStockCheck");
      var requestBody = this.getView().getModel("modelZeroStockCheck").getData();
      requestBody.Qty = stepInput.getValue().toString();
      requestBody.UserComm = userCommand;
      requestBody.HuidentNew = modelWarehouseTaskNav.NEWHU;
      requestBody.HuidentScan = modelWarehouseTaskNav.NLENR;
      requestBody.QtySplt = modelWarehouseTaskNav.QUAN.QUAN; // QUAN 

      var trolley = this.scannedValue + "11";
      BusyIndicator.show();
      oModel.create("/LowStockCheckPISet ", requestBody, {
        success: function success(successData, response) {
          _this16.handleMessageResponse(response);

          popupDialog.close();

          _this16.onConfirmDialog(null, trolley, true);

          BusyIndicator.hide();
        },
        error: function error(err) {
          _this16.handleMessageResponse(err);

          _this16.onConfirmDialog(null, trolley, true);

          popupDialog.close();
          BusyIndicator.hide();
        }
      });
    },
    onZeroStockCheckYesButtonPressed: function onZeroStockCheckYesButtonPressed() {
      this.onPostZeroStockDialog("02");
    },
    onZeroStockCheckNoButtonPressed: function onZeroStockCheckNoButtonPressed() {
      this.byId("stepInputZeroStockCheck").setEnabled(true);
      this.byId("ZeroStockCheckAdjustButton").setEnabled(true);
    },
    onZeroStockCheckAdjustPressed: function onZeroStockCheckAdjustPressed() {
      this.onPostZeroStockDialog("01");
    },
    afterOpenZeroStockCheck: function afterOpenZeroStockCheck() {
      var _this17 = this;

      setTimeout(function () {
        _this17.getView().byId("zeroStockCheckYesButton").focus();
      }, 0);
      var zeroStockStepInput = this.byId("stepInputZeroStockCheck");
      zeroStockStepInput.setEnabled(false);
      zeroStockStepInput.setValue(0);
      this.byId("ZeroStockCheckAdjustButton").setEnabled(false);
    },
    //Low Stock
    onOpenLowStockCheckDialog: function onOpenLowStockCheckDialog() {
      var view = this.getView();
      var popupDialogLow = this.byId("popupDialogLowStockCheck");

      if (!popupDialogLow) {
        Fragment.load({
          id: view.getId(),
          name: "y20_outb_pick.view.dialogs.PopupDialogLowStockCheck",
          controller: this
        }).then(function (popupDialogLow) {
          view.addDependent(popupDialogLow);
          popupDialogLow.open();
        });
      } else {
        this.byId("popupDialogLowStockCheck").open();
      }
    },
    loadLowStockRequestData: function loadLowStockRequestData(openPopup) {
      var _this18 = this;

      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", {
        useBatch: false
      });
      var whTask = this.warehouseTask;
      var whNumber = this.whNumber;
      var setInfo = "(Lgnum='".concat(whNumber, "',Tanum='").concat(whTask, "')");
      BusyIndicator.show();
      oModel.read("/LowStockCheckMatNrPISet" + setInfo, {
        success: function success(data) {
          _this18.getView().setModel(new JSONModel(data), "modelLowStock");

          BusyIndicator.hide();
          openPopup && _this18.onOpenLowStockCheckDialog();
        },
        error: function error(err) {
          _this18.handleMessageResponse(err);

          BusyIndicator.hide();
        }
      });
    },
    onPostLowStockDialog: function onPostLowStockDialog(userCommand) {
      var _this19 = this;

      var popupDialog = this.byId("popupDialogLowStockCheck");
      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", true);
      var requestBody = this.getView().getModel("modelLowStock").getData();
      requestBody.Qty = requestBody.Qty.toString();
      requestBody.UserComm = userCommand;
      var trolley = this.scannedValue + "11";
      oModel.create("/LowStockCheckMatNrPISet ", requestBody, {
        success: function success(successData, response) {
          _this19.handleMessageResponse(response);

          popupDialog.close();

          _this19.onConfirmDialog(null, trolley, true);
        },
        error: function error(err) {
          _this19.handleMessageResponse(err); //this.onOpenScanDialog();


          popupDialog.close();

          _this19.onConfirmDialog(null, trolley, true);
        }
      });
    },
    onLowStockCheckAdjustPressed: function onLowStockCheckAdjustPressed() {
      this.onPostLowStockDialog("01");
    },
    //New HU
    onNewPickHUPress: function onNewPickHUPress(event, called) {
      var _this20 = this;

      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_MULTI_SRV", true);
      var requestBody = JSON.parse(JSON.stringify(this.getView().getModel("modelTrolleyNav").getData()));
      requestBody.Trolley_WarehouseTaskNav = JSON.parse(JSON.stringify(this.getView().getModel("modelWarehouseTaskNav").getData()));
      requestBody.Trolley_WarehouseTaskNav.QUAN.QUAN = requestBody.Trolley_WarehouseTaskNav.QUAN.QUAN.toString();
      BusyIndicator.show();
      oModel.create("/TrolleyCollection", requestBody, {
        success: function success(successData, response) {
          _this20.handleMessageResponse(response);

          _this20.getView().setModel(new JSONModel(successData.Trolley_WarehouseTaskNav), "modelWarehouseTaskNav");

          _this20.getView().getModel("modelTrolley").getData().Scan_WarehouseTaskNav = successData.Trolley_WarehouseTaskNav;
          _this20.getView().getModel("modelTrolleyNav").getData().HU = successData.HU;

          _this20.refreshModels();

          BusyIndicator.hide();

          if (called) {
            _this20.onOpenNewHUDialog();
          }
        },
        error: function error(err) {
          BusyIndicator.hide();

          _this20.handleMessageResponse(err);
        }
      });
    },
    afterOpenNewHU: function afterOpenNewHU() {
      var _this21 = this;

      setTimeout(function () {
        var newHUInput = _this21.getView().byId("newHUInput");

        newHUInput.setValue();
        newHUInput.focus();
      }, 0);
    },
    onOpenNewHUDialog: function onOpenNewHUDialog() {
      var view = this.getView();
      var popupDialogNewHU = this.byId("popupDialogNewHU");

      if (!popupDialogNewHU) {
        Fragment.load({
          id: view.getId(),
          name: "y20_outb_pick.view.dialogs.PopupDialogNewHU",
          controller: this
        }).then(function (popupDialogNewHU) {
          view.addDependent(popupDialogNewHU);
          popupDialogNewHU.open();
        });
      } else {
        this.byId("popupDialogNewHU").open();
      }
    },
    onNewHUClose: function onNewHUClose() {
      this.byId("popupDialogNewHU").close();
    },
    onNewHuSubmitInput: function onNewHuSubmitInput() {
      var _this22 = this;

      var inputValue = this.getView().byId("newHUInput").getValue();
      var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_MULTI_SRV", true);
      var requestBody = {
        LGNUM: this.whNumber,
        SCAN: inputValue
      };
      requestBody.ScanNewHU_WarehouseTaskNav = JSON.parse(JSON.stringify(this.getView().getModel("modelWarehouseTaskNav").getData()));
      oModel.create("/ScanNewHUCollection", requestBody, {
        success: function success(successData, response) {
          _this22.handleMessageResponse(response);

          _this22.getView().setModel(new JSONModel(successData.ScanNewHU_WarehouseTaskNav), "modelWarehouseTaskNav");

          _this22.getView().getModel("modelTrolley").getData().Scan_WarehouseTaskNav = successData.ScanNewHU_WarehouseTaskNav;

          _this22.byId("popupDialogNewHU").close();

          _this22.doCheckNewPickHU = false;

          _this22.onScanPickHuSubmit(null, _this22.scanPickHUValue);
        },
        error: function error(err) {
          return _this22.handleMessageResponse(err);
        }
      });
    },
    afterCloseOpenNewHU: function afterCloseOpenNewHU() {
      var _this23 = this;

      setTimeout(function () {
        _this23.byId("customButton").focus();
      }, 0);
    },
    onExceptionPress: function onExceptionPress() {
      var stepInputVal = this.getView().byId("stepInputQuan").getValue();
      this.isExceptionPressed = !this.isExceptionPressed;
      this.getView().getModel("localModel").getData().exception = this.isExceptionPressed;
      this.getView().getModel("localModel").refresh(true);

      if (parseInt(stepInputVal) == 0 && this.isExceptionPressed) {
        this.loadDeviationRequestData(true);
      }
    },
    removeException: function removeException() {
      this.isExceptionPressed = false;
      this.getView().getModel("localModel").getData().exception = this.isExceptionPressed;
      this.getView().getModel("localModel").refresh(true);
    },
    onQuanChange: function onQuanChange() {
      var stepInput = this.getView().byId("stepInputQuan");
      var sameVal = parseInt(this.initialQuantityValue) == parseInt(stepInput.getValue());
      this.getView().getModel("localModel").getData().newPickHu = sameVal;
      this.getView().getModel("localModel").refresh(true);

      if (parseInt(stepInput.getValue()) == 0 && this.isExceptionPressed) {
        this.loadDeviationRequestData(true);
      }
    },
    afterOpenDialogScan: function afterOpenDialogScan() {
      var _this24 = this;

      setTimeout(function () {
        var dialogFormScanInput = _this24.getView().byId("formScanInput");

        dialogFormScanInput.setValue();
        dialogFormScanInput.focus();
      }, 0);
    },
    onShowKeyboard: function (oEvent) {
			var oModel = this.getElementsModel();
			var propertyString = "/keyboard" + "/inputmode";

			this.toggleButton(oEvent.mParameters.id, oEvent.mParameters.pressed);
			if (this.getView().byId("scanInput")) {
				this.getView().byId("scanInput").setEditable(false);
				this.getView().byId("scanInput").setEditable(true);
			}
			if (this.getView().byId("onScanPick")) {
				this.getView().byId("onScanPick").setEditable(false);
				this.getView().byId("onScanPick").setEditable(true);
			}				
			if(oEvent.mParameters.pressed) {
				oModel.setProperty(propertyString, "text");
				oModel.refresh(true);
			} else {
				oModel.setProperty(propertyString, "none");
				oModel.refresh(true);
			}
		}

  });
});