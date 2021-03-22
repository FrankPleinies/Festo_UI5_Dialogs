sap.ui.define([
	"./Base.controller",
	"../model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/ui/core/BusyIndicator",
], function (Controller, formatter, JSONModel, Fragment, BusyIndicator) {
	"use strict";



	return Controller.extend("y20_out_pick_s.controller.MainScreen", {

		formatter: formatter,
		initialQuantityValue: undefined,
		deviationCommand: undefined,
		warehouseTaskNumber: undefined,
		lastSetInfoDataOnLoadData: undefined,
		setInfoNoResource: undefined,
		isOneCyclePassed: false,
		currentTrolley: undefined,
		showDropOffErrorMessageOnSuccess: false,
		isResource: undefined,
		radioButtonGroupEnums: undefined,

		onInit: function () {
			this.checkWhNumberAndWorkstation()
			this.setCurrentLoggedInUser()
			const isTouch = sap.ui.Device.support.touch;
			this.getView().addStyleClass(isTouch ? "sapUiSizeCozy" : "sapUiSizeCompact");
			isTouch && this.getView().byId("BlockLayout").addStyleClass("tablet-transform");
			this.onOpenScanDialog()
		},

		onAfterRendering: function () {
			const isTouch = sap.ui.Device.support.touch;
			const reg = RegExp('customButton');
			setTimeout(() => {
				const btnArr = Array.from(document.getElementsByTagName("button")).filter(button => reg.test(button.className))
				isTouch && btnArr.forEach(button => window.setTimeout(() => button.classList.add("customTabletButton"), 0))
				isTouch && this.byId("firstSectionText").addStyleClass("customTextTablet")
				isTouch && this.byId("secondCellTextOne").addStyleClass("sapUiSmallMarginTop")
				isTouch && this.byId("secondCellTextTwo").addStyleClass("customTextTablet")
				this.byId("fullDropBtn").addStyleClass("sapUiLargeMarginEnd")
			}, 0)
			this.setConsts()
		},

		setConsts: function () {
			const resourceBundle = this.getView().getModel("i18n").getResourceBundle()
			this.radioButtonGroupEnums = {
				RBGOne: {
					[resourceBundle.getText("noUseResource")]: false,
					[resourceBundle.getText("yes")]: true
				},
				RBGTwo: {
					[resourceBundle.getText("autoAssign")]: 0,
					[resourceBundle.getText("onlyCons")]: 1,
					[resourceBundle.getText("onlyNoCons")]: 2,
					[resourceBundle.getText("anyCons")]: 3
				},
				RBGThree: {
					[resourceBundle.getText("mix")]: true,
					[resourceBundle.getText("singlePool")]: false
				}

			}
		},

		refreshModels: function () {
			const models = this.getView().oModels
			for (let modelName in models) {
				models[modelName].refresh()
			}
		},

		onOpenScanDialog: function () {
			var view = this.getView();
			let popupDialogScan = this.byId("popupDialogScan")
			if (!popupDialogScan) {
				Fragment.load({
					id: view.getId(),
					name: "y20_out_pick_s.view.dialogs.popupDialogScan",
					controller: this
				}).then(function (popupDialogScan) {
					view.addDependent(popupDialogScan);
					popupDialogScan.open();
				});
			} else {
				this.byId("popupDialogScan").open();
			}
		},

		onConfirmDialog: function (event, setInfoData) {
			const warehouseNumber = this.whNumber
			const dataInputTrolley = this.getView().byId("formScanInput")
			const activityArea = this.getView().byId("formPickAAInput")
			const rbgFirstSprw = this.getView().byId("rbgFirst").getSelectedButton().getText()
			const rbgSecondConsolidate = this.getView().byId("rbgSecond").getSelectedButton().getText()
			const rbgThirdPoolMix = this.getView().byId("rbgThird").getSelectedButton().getText()

			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_SINGLE_SRV", true);
			this.setInfoNoResource = `(LGNUM='${warehouseNumber}',TROLLEY='',SPWR=${this.radioButtonGroupEnums.RBGOne[rbgFirstSprw]},AAREA='${activityArea.getValue()}',CONSOLIDATE='${this.radioButtonGroupEnums.RBGTwo[rbgSecondConsolidate]}',POOL_MIX=${this.radioButtonGroupEnums.RBGThree[rbgThirdPoolMix]})`;
			let setInfo = setInfoData ? setInfoData : `(LGNUM='${warehouseNumber}',TROLLEY='${dataInputTrolley.getValue()}',SPWR=${this.radioButtonGroupEnums.RBGOne[rbgFirstSprw]},AAREA='${activityArea.getValue()}',CONSOLIDATE='${this.radioButtonGroupEnums.RBGTwo[rbgSecondConsolidate]}',POOL_MIX=${this.radioButtonGroupEnums.RBGThree[rbgThirdPoolMix]})`
			this.lastSetInfoDataOnLoadData = setInfo
			this.showDropOffErrorMessageOnSuccess = false
			activityArea.setValue()
			BusyIndicator.show();
			oModel.read("/StartPopupCollection" + setInfo, {
				urlParameters: {
					"$expand": "StartPopup_TONav,StartPopup_TrolleyNav"
				},
				useBatch: false,
				success: (data) => {
					this.isResource = !this.radioButtonGroupEnums.RBGOne[rbgFirstSprw]
					this.setModels(data)
					this.buildStorageBin()
					const popupDialog = this.byId("popupDialogScan")
					popupDialog.close();
					BusyIndicator.hide();
					setTimeout(() => { this.getView().byId("scanInput").focus() }, 0)


				},
				error: err => {
					BusyIndicator.hide();
					dataInputTrolley && dataInputTrolley.setValue("")
					if (this.isOneCyclePassed && this.currentTrolley) {
						this.onFullDropPressed(null, this.currentTrolley)
						this.showDropOffErrorMessageOnSuccess = true
					} else {
						this.handleMessageResponse(err)
					}
				}
			});
		},

		setModels: function (data) {
			let trolley = null
			const models = [
				{ modelTrolley: data },
				{ modelToNav: data.StartPopup_TONav },
				{ modelTrolleyNav: data.StartPopup_TrolleyNav }
			]
			models.forEach(model => {
				const name = Object.keys(model)[0]
				this.getView().setModel(new JSONModel(model[name]), name)
			})

			this.byId("blockLayoutCellFirst").setTitle(`Storage Bin : ${data.StartPopup_TONav.VLPLA}`)
			if (data.StartPopup_TrolleyNav.results.length > 0) {
				trolley = data.StartPopup_TrolleyNav.results[0].TROLLEY
				this.byId("blockLayoutCellThird").setTitle(`Resource : ${trolley}`)
			}
			if (data.StartPopup_TONav.LSCK || data.StartPopup_TONav.ZEROSCK) {
				this.byId("redTextLabel").setText("Low Stock Check")
			} else {
				this.byId("redTextLabel").setText("")
			}
			this.warehouseTaskNumber = data.StartPopup_TONav.TANUM
			this.initialQuantityValue = data.StartPopup_TONav.QUAN.QUAN
			this.getView().byId("stepInputQuan").setMax(parseInt(this.initialQuantityValue))

			//ako tonav e prazna i trolleynav ima trolley -> dropoff popup
			if (!this.warehouseTaskNumber && trolley) {
				this.loadDropOffRequestData(trolley, this.whNumber, true)
			}
		},

		onAutoAssignDialog: function () {
			const popupDialog = this.byId("popupDialogScan")
			popupDialog.close();
		},

		onGoToAssignPressed: function () {
			const url = window.location.protocol + "//" + window.location.host
			window.location.href = url + "/sap/bc/ui5_ui5/sap/y20_deashutron2/index.html"

		},

		setCurrentLoggedInUser: function () {
			const xmlHttp = new XMLHttpRequest();
			xmlHttp.onreadystatechange = () => {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					let oUserData = JSON.parse(xmlHttp.responseText);
					this.byId("headerContentText").setText(`User: ${oUserData.id}`)
				}
			};
			xmlHttp.open("GET", "/sap/bc/ui2/start_up", false);
			xmlHttp.send(null);
		},


		buildStorageBin: function (requestDataString) {

			let shelfs = 1;
			let shelfToDisplay = 1;
			let shelfSections = 3;
			let targetShelfSection = 1;

			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_SBIN_SERVICES_SRV", true);

			const warehouseNumber = this.whNumber

			const modelWarehouseTaskNav = this.getView().getModel("modelToNav").getData()

			BusyIndicator.show();

			const VlplaNum = requestDataString ? requestDataString : modelWarehouseTaskNav.VLPLA;
			const vlpla = encodeURIComponent(VlplaNum);

			oModel.read(`/SbinEntSet(Lgnum='${warehouseNumber}',Lgpla='${vlpla}')`, {
				useBatch: false,
				success: (data) => {
					BusyIndicator.hide();
					shelfs = parseInt(data.RackHeight); //Amount of levels
					shelfToDisplay = parseInt(data.Lvl_V); //Relevant level
					shelfSections = parseInt(data.LvlPositions); //Amount of positions in relevant level
					targetShelfSection = parseInt(data.Plpos); // Position to be marked in relevant level
					targetShelfSection = parseInt(data.Plpos); // Position to be marked in relevant level
					this.drawStorageBin(this.getView(), shelfs, shelfToDisplay, shelfSections, targetShelfSection);
				},
				error: () => BusyIndicator.hide()


			});

		},

		drawStorageBin: function (view, shelfs, shelfToDisplay, shelfSections, targetShelfSection) {
			const container = view.byId("ShelfDisplay");
			container.destroyItems();

			for (var count = 1; count <= shelfs; count++) {
				let shelf = getBox("40px", "70%", "Start", "Center", "stack");

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

		onScanSourceSubmit: function () {
			const requestObject = this.getView().getModel("requestsData").getData().Objects[0]
			const input = this.getView().byId("scanInput")
			const focusInput = this.getView().byId("scanDestPosInput")
			const scannedData = input.getValue()
			if (scannedData) {
				input.setValue()
				const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_SINGLE_SRV", true);
				let requestBody = JSON.parse(JSON.stringify(requestObject))
				requestBody.Scan_WarehouseTaskNav = this.getView().getModel("modelToNav").getData()
				requestBody.LGNUM = this.whNumber
				requestBody.SCAN = scannedData
				requestBody.Scan_WarehouseTaskNav.QUAN.QUAN = requestBody.Scan_WarehouseTaskNav.QUAN.QUAN.toString()
				oModel.create("/ScanCollection", requestBody, {
					success: (successData, response) => {
						this.handleMessageResponse(response)
						this.getView().setModel(new JSONModel(successData.Scan_WarehouseTaskNav), "modelToNav")
						focusInput.focus()
						this.displayMessageInFooter("Verification Successfull!", "info")
					},
					error: err => this.handleMessageResponse(err)
				});
			} else {
				this.displayMessageInFooter("Nothing was entered!", "info")
			}
		},

		onScanDestPosSubmit: function () {
			const requestObject = this.getView().getModel("requestsData").getData().Objects[0]
			const input = this.getView().byId("scanDestPosInput")
			const scannedData = input.getValue()
			if (scannedData) {
				input.setValue()
				const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_SINGLE_SRV", true);
				const isResource = this.isResource
				let requestBody = JSON.parse(JSON.stringify(requestObject))
				requestBody.Scan_WarehouseTaskNav = this.getView().getModel("modelToNav").getData()
				requestBody.Scan_TrolleyNav = this.getView().getModel("modelTrolleyNav").getData().results[0]
				requestBody.LGNUM = this.whNumber
				requestBody.SCAN = scannedData
				if (!requestBody.Scan_TrolleyNav) {
					requestBody.Scan_TrolleyNav = {
						LGNUM: this.whNumber
					}
				}
				requestBody.Scan_WarehouseTaskNav.QUAN.QUAN = requestBody.Scan_WarehouseTaskNav.QUAN.QUAN.toString()
				requestBody.Scan_WarehouseTaskNav.IS_RESOURCE = isResource
				oModel.create("/ScanCollection", requestBody, {
					success: (successData) => {
						this.getView().setModel(new JSONModel(successData.Scan_WarehouseTaskNav), "modelToNav")
						this.getView().byId("arrowButton").focus()

						this.byId("destHuType").setText(successData.Scan_TrolleyNav.HUTYPE)
						this.byId("blockLayoutCellThird").setTitle(`Resource : ${successData.Scan_TrolleyNav.TROLLEY}`)

						//const stringSetData = this.setInfoNoResource
						const trolley = successData.Scan_TrolleyNav.TROLLEY;
						this.currentTrolley = trolley

						// const position = 23;
						// const newSetDataOutput = [stringSetData.slice(0, position), trolley, stringSetData.slice(position)].join('');
						// this.lastSetInfoDataOnLoadData = newSetDataOutput

						this.isOneCyclePassed = true
						this.displayMessageInFooter("Verification Successfull!", "info")
						//ako e true ne pravq request
						if (!successData.Scan_WarehouseTaskNav.NO_ARROW) {
							this.onArrowButtonPressed()
						} else {
							this.onConfirmDialog(null, this.lastSetInfoDataOnLoadData)
						}
					},
					error: err => this.handleMessageResponse(err)
				});
			} else {
				this.displayMessageInFooter("Nothing was entered!", "info")
			}
		},

		onArrowButtonPressed: function () {
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_SINGLE_SRV", true);
			const modelToNavData = this.getView().getModel("modelToNav").getData()
			const lowStock = modelToNavData.LSCK
			const zeroStock = modelToNavData.ZEROSCK
			const stepInput = this.getView().byId("stepInputQuan")
			if (parseInt(this.initialQuantityValue) != parseInt(stepInput.getValue())) {
				this.loadDeviationRequestData(true)
			} else {
				let requestBody = {}
				requestBody = this.getView().getModel("modelToNav").getData()
				requestBody.WarehouseTask_TrolleyNav = this.getView().getModel("modelTrolleyNav").getData().results[0]
				requestBody.QUAN.QUAN = requestBody.QUAN.QUAN.toString()

				if (!requestBody.WarehouseTask_TrolleyNav) {
					requestBody.WarehouseTask_TrolleyNav = {
						LGNUM: this.whNumber
					}
				}

				oModel.create("/WarehouseTaskCollection", requestBody, {
					success: (successData, response) => {
						this.handleMessageResponse(response, null, true);
						//update models
						if (zeroStock) {
							this.loadZeroStockRequestData(true)
						} else if (lowStock) {
							this.loadLowStockRequestData(true)
						} else {
							//reload data
							this.onConfirmDialog(null, this.lastSetInfoDataOnLoadData)
						}
					},
					error: err => this.handleMessageResponse(err)
				});
			}

		},

		onInfoPressed: function () {
			const taskNumberVal = this.getView().getModel("modelToNav").getData().TANUM
			let lgNum = new sap.ui.model.Filter("LGNUM", "EQ", this.whNumber);
			let taskNumber = new sap.ui.model.Filter("TANUM", "EQ", taskNumberVal);
			const arr = [lgNum, taskNumber];
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_SINGLE_SRV", { useBatch: false });
			oModel.read("/ItemTextCollection", {
				filters: arr,
				success: (data, resp) => {
					this.getView().setModel(new JSONModel(data), "informationCollectionModel")
					this.handleMessageResponse(resp)
					if (data.results.length > 0) {
						this.onOpenInfoDialog()
					}
				},
				error: err => { this.handleMessageResponse(err) }
			})
		},

		onOpenInfoDialog: function () {
			const view = this.getView();
			const popupDialogInfo = this.byId("popupDialogInfo")
			if (!popupDialogInfo) {
				Fragment.load({
					id: view.getId(),
					name: "y20_out_pick_s.view.dialogs.PopupDialogInfo",
					controller: this
				}).then((popupDialogInfo) => {
					view.addDependent(popupDialogInfo);
					popupDialogInfo.open();
				});
			} else {
				this.byId("popupDialogInfo").open();
			}
		},

		onCloseInfoDialog: function () {
			const popupDialog = this.byId("popupDialogInfo")
			popupDialog.close();
		},

		loadDeviationRequestData: function (openPopup) {
			const dataModelWarehouseTask = this.getView().getModel("modelToNav").getData()
			const stepInput = this.getView().byId("stepInputQuan")
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", { useBatch: false });
			const warehouseNumber = this.whNumber

			const trolley = this.currentTrolley
			const tanum = dataModelWarehouseTask.TANUM
			const nistm = stepInput.getValue().toString()
			const nlenr = dataModelWarehouseTask.NLENR
			const setInfo = `(Lgnum='${warehouseNumber}',Tanum='${tanum}',Nistm='${nistm}',Trolley='${trolley}',Nlenr='${nlenr}')`

			BusyIndicator.show();
			oModel.read("/LoadPickDeviationSet" + setInfo, {
				success: (data) => {
					this.getView().setModel(new JSONModel(data), "modelDeviation")
					BusyIndicator.hide();
					openPopup && this.onOpenDeviationDialog()
				},
				error: err => {
					this.handleMessageResponse(err)
					BusyIndicator.hide();
				}
			});


		},

		onOpenDeviationDialog: function () {
			const view = this.getView();
			const popupDialogDeviation = this.byId("popupDialogDeviation")
			if (!popupDialogDeviation) {
				Fragment.load({
					id: view.getId(),
					name: "y20_out_pick_s.view.dialogs.PopupDialogDeviation",
					controller: this
				}).then((popupDialogDeviation) => {
					view.addDependent(popupDialogDeviation);
					popupDialogDeviation.open();
				});
			} else {
				this.byId("popupDialogDeviation").open();
			}
		},

		afterOpenDeviation: function () {
			const deviationAdjustButton = this.getView().byId("deviationAdjustButton");
			const deviationBlockButton = this.getView().byId("deviationBlockButton");
			const deviationModelData = this.getView().getModel("modelDeviation").getData();

			if (parseInt(deviationModelData.Nistm) == parseInt(this.initialQuantityValue)) {
				deviationAdjustButton.setEnabled(false);
				deviationBlockButton.setEnabled(false);
			} else {
				deviationAdjustButton.setEnabled(true);
				deviationBlockButton.setEnabled(true);
			}
		},

		onDeviationStepChangedPressed: function () {
			this.afterOpenDeviation()
		},

		onDeviationAdjustPressed: function (event, command) {
			this.deviationCommand = command ? command : "03"
			const deviationAdjustButton = this.getView().byId("deviationAdjustButton");
			const deviationBlockButton = this.getView().byId("deviationBlockButton");
			deviationAdjustButton.setEnabled(false)
			deviationBlockButton.setEnabled(false)
		},

		onDeviationBlockStockPressed: function () {
			this.onDeviationAdjustPressed(null, "04")
		},



		onDeviationPostReqest: function (devCommand) {
			BusyIndicator.show();
			const popupDialog = this.byId("popupDialogDeviation")
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", true);
			const requestBody = this.getView().getModel("modelDeviation").getData();
			const stepInputDeviation = this.getView().byId("stepInputDeviation").getValue().toString()
			const modelToNavData = this.getView().getModel("modelToNav").getData()

			requestBody.UserComm = devCommand;
			requestBody.Nistm = stepInputDeviation
			requestBody.Nlenr = modelToNavData.NLENR;

			oModel.create("/LoadPickDeviationSet ", requestBody, {
				success: (successData, response) => {
					popupDialog.close();
					BusyIndicator.hide();

					if (!response.headers) {
						response = response.response;
					}
					let isThereSuccessMessage = !!response.headers["sap-message"];

					if (isThereSuccessMessage) {
						this.handleMessageResponse(response, this.onConfirmDialog.bind(this, null, this.lastSetInfoDataOnLoadData))
					} else {
						this.onConfirmDialog(null, this.lastSetInfoDataOnLoadData)
					}

				},
				error: err => {
					this.handleMessageResponse(err)
					popupDialog.close();
					BusyIndicator.hide();
				}
			});
		},

		onCloseDeviationDialog: function () {
			if (this.deviationCommand) {
				this.onDeviationPostReqest(this.deviationCommand)
			} else {
				const popupDialog = this.byId("popupDialogDeviation")
				popupDialog.close();
			}
		},

		onOpenDropOffDialog: function () {
			const view = this.getView();
			const popupDialogDropOff = this.byId("popupDialogDropOff")
			if (!popupDialogDropOff) {
				Fragment.load({
					id: view.getId(),
					name: "y20_out_pick_s.view.dialogs.PopupDialogDropOff",
					controller: this
				}).then((popupDialogDropOff) => {
					view.addDependent(popupDialogDropOff);
					popupDialogDropOff.open();
				});
			} else {
				this.byId("popupDialogDropOff").open();
			}
		},

		loadDropOffRequestData: function (trolleyData, warehouseNumber, openPopup) {

			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", { useBatch: false });
			const trolley = trolleyData ? trolleyData : ""
			const setInfo = `(Lgnum='${warehouseNumber}',Trolley='${trolley}')`

			BusyIndicator.show();
			oModel.read("/PickDropOffTrolScrSet" + setInfo, {
				success: (data) => {
					this.getView().setModel(new JSONModel(data), "modelDropOff")
					BusyIndicator.hide();
					openPopup && this.onOpenDropOffDialog()
				},
				error: err => {
					BusyIndicator.hide();
					const errorCode = JSON.parse(err.responseText).error.code
					if (errorCode === "Y20_UI5/045") {
						this.onOpenScanDialog()
					} else {
						this.handleMessageResponse(err)
					}

				}
			});
		},

		onConfirmDropOffDialog: function () {
			const popupDialog = this.byId("popupDialogDropOff")
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", true);
			const input = this.getView().byId("scanPopupDropOffInput");
			const requestBody = this.getView().getModel("modelDropOff").getData();
			requestBody.LgplaVerifScan = input.getValue();

			oModel.create("/PickDropOffTrolScrSet", requestBody, {
				success: () => {
					popupDialog.close();
					if (this.showDropOffErrorMessageOnSuccess) {
						this.showDropOffErrorMessageOnSuccess = false
						//show error
						this.createMessageBox({ severity: "error", message: "No Suitable Warehouse Tasks found!" }, this.onOpenScanDialog.bind(this));
					} else {
						this.onOpenScanDialog()
					}

				},
				error: err => this.handleMessageResponse(err)
			});
		},

		afterOpenDropOff: function () {
			setTimeout(() => {
				const dropOffInput = this.getView().byId("scanPopupDropOffInput")
				dropOffInput.setValue()
				dropOffInput.focus()
			}, 0)
		},

		onFullDropPressed: function (event, trol) {
			const dataModelTrolleyResults = this.getView().getModel("modelTrolleyNav").getData().results
			const trolleyEntry = dataModelTrolleyResults ? dataModelTrolleyResults[0].TROLLEY : this.currentTrolley

			if (trolleyEntry || trol) {
				const trolley = trol ? trol : trolleyEntry
				this.loadDropOffRequestData(trolley, this.whNumber, true)
			} else {
				sap.m.MessageToast.show("Invalid Trolley Data!")
			}

		},

		//Zero Stock
		onOpenZeroStockCheckDialog: function () {
			const view = this.getView();
			const popupDialogZero = this.byId("popupDialogZeroStockCheck")
			if (!popupDialogZero) {
				Fragment.load({
					id: view.getId(),
					name: "y20_out_pick_s.view.dialogs.PopupDialogZeroStockCheck",
					controller: this
				}).then((popupDialogZero) => {
					view.addDependent(popupDialogZero);
					popupDialogZero.open();
				});
			} else {
				this.byId("popupDialogZeroStockCheck").open();
			}
		},

		loadZeroStockRequestData: function (openPopup) {

			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", { useBatch: false });
			const whTask = this.warehouseTaskNumber
			const whNumber = this.whNumber
			const setInfo = `(Lgnum='${whNumber}',Tanum='${whTask}')`

			BusyIndicator.show();
			oModel.read("/LowStockCheckPISet" + setInfo, {
				success: (data) => {
					this.getView().setModel(new JSONModel(data), "modelZeroStockCheck")
					BusyIndicator.hide();
					openPopup && this.onOpenZeroStockCheckDialog()
				},
				error: err => {
					this.handleMessageResponse(err)
					BusyIndicator.hide();
				}
			});
		},

		onPostZeroStockDialog: function (userCommand) {
			const popupDialog = this.byId("popupDialogZeroStockCheck")
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", true);
			const stepInput = this.getView().byId("stepInputZeroStockCheck");
			const requestBody = this.getView().getModel("modelZeroStockCheck").getData();
			const modelToNavData = this.getView().getModel("modelToNav").getData()

			requestBody.Qty = stepInput.getValue().toString();
			requestBody.UserComm = userCommand;
			requestBody.HuidentScan = modelToNavData.NLENR;


			BusyIndicator.show();

			oModel.create("/LowStockCheckPISet ", requestBody, {
				success: (successData, response) => {
					this.handleMessageResponse(response)
					this.onConfirmDialog(null, this.lastSetInfoDataOnLoadData)
					popupDialog.close();
					BusyIndicator.hide();
				},
				error: err => {
					this.handleMessageResponse(err);
					this.onConfirmDialog(null, this.lastSetInfoDataOnLoadData)
					popupDialog.close();
					BusyIndicator.hide();
				}
			});
		},

		onZeroStockCheckYesButtonPressed: function () {
			this.onPostZeroStockDialog("02")
		},
		onZeroStockCheckNoButtonPressed: function () {
			this.byId("stepInputZeroStockCheck").setEnabled(true)
			this.byId("ZeroStockCheckAdjustButton").setEnabled(true)
		},

		onZeroStockCheckAdjustPressed: function () {
			this.onPostZeroStockDialog("01")
		},

		afterOpenZeroStockCheck: function () {
			setTimeout(() => { this.getView().byId("zeroStockCheckYesButton").focus() }, 0)
			const zeroStockStepInput = this.byId("stepInputZeroStockCheck")
			zeroStockStepInput.setEnabled(false)
			zeroStockStepInput.setValue(0)
			this.byId("ZeroStockCheckAdjustButton").setEnabled(false)
		},

		//Low Stock
		onOpenLowStockCheckDialog: function () {
			const view = this.getView();
			const popupDialogLow = this.byId("popupDialogLowStockCheck")
			if (!popupDialogLow) {
				Fragment.load({
					id: view.getId(),
					name: "y20_out_pick_s.view.dialogs.PopupDialogLowStockCheck",
					controller: this
				}).then((popupDialogLow) => {
					view.addDependent(popupDialogLow);
					popupDialogLow.open();
				});
			} else {
				this.byId("popupDialogLowStockCheck").open();
			}
		},

		loadLowStockRequestData: function (openPopup) {

			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", { useBatch: false });
			const whTask = this.warehouseTaskNumber
			const whNumber = this.whNumber
			const setInfo = `(Lgnum='${whNumber}',Tanum='${whTask}')`

			BusyIndicator.show();
			oModel.read("/LowStockCheckMatNrPISet" + setInfo, {
				success: (data) => {
					this.getView().setModel(new JSONModel(data), "modelLowStock")
					BusyIndicator.hide();
					openPopup && this.onOpenLowStockCheckDialog()
				},
				error: err => {
					this.handleMessageResponse(err)
					BusyIndicator.hide();
				}
			});
		},

		onPostLowStockDialog: function (userCommand) {
			const popupDialog = this.byId("popupDialogLowStockCheck")
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICK_POP_UPS_SRV", true);
			const requestBody = this.getView().getModel("modelLowStock").getData();

			requestBody.Qty = requestBody.Qty.toString()
			requestBody.UserComm = userCommand;

			BusyIndicator.show();
			oModel.create("/LowStockCheckMatNrPISet ", requestBody, {
				success: (successData, response) => {
					BusyIndicator.hide();
					this.handleMessageResponse(response)
					this.onConfirmDialog(null, this.lastSetInfoDataOnLoadData)
					popupDialog.close();

				},
				error: err => {
					BusyIndicator.hide();
					this.handleMessageResponse(err);
					popupDialog.close();
					this.onOpenScanDialog();

				}
			});
		},

		onLowStockCheckAdjustPressed: function () {
			this.onPostLowStockDialog("01")
		},


		// Change Queue

		onSkipButtonPress: function () {
			this.onOpenChangeQueueDialog()
		},

		onOpenChangeQueueDialog: function () {
			const view = this.getView();
			const popupDialogChangeQueue = this.byId("popupDialogChangeQueue")
			if (!popupDialogChangeQueue) {
				Fragment.load({
					id: view.getId(),
					name: "y20_out_pick_s.view.dialogs.PopupDialogChangeQueue",
					controller: this
				}).then((popupDialogChangeQueue) => {
					view.addDependent(popupDialogChangeQueue);
					popupDialogChangeQueue.open();
				});
			} else {
				this.byId("popupDialogChangeQueue").open();
			}
		},

		onChangeQueueClose: function () {
			this.byId("popupDialogChangeQueue").close();
		},

		onChangeQueueSubmit: function () {
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_OUT_PICKING_SINGLE_SRV", {
				useBatch: false,
				defaultUpdateMethod: "PUT"
			});
			const warehouseNumber = this.whNumber
			const setInfo = `(LGNUM='${warehouseNumber}')`
			let requestBody = JSON.parse(JSON.stringify(this.getView().getModel("modelToNav").getData()))
			requestBody.UCOMM = "01"
			oModel.update("/WarehouseTaskCollection" + setInfo, requestBody, {
				success: (successData, response) => {
					this.handleMessageResponse(response)
					this.onConfirmDialog(null, this.lastSetInfoDataOnLoadData)
				},
				error: err => this.handleMessageResponse(err)
			});
		},

		afterCloseChangeQueue: function () {
			setTimeout(() => { this.byId("customButton").focus() }, 0)
		},

		afterOpenChangeQueue: function () {
			setTimeout(() => {
				const changeQueueInput = this.byId("changeQueueInput")
				changeQueueInput.setValue()
				changeQueueInput.focus()
			}, 0)
		},

		onAfterOpenScanDialog: function () {


			const confirmSubmitButton = this.getView().byId("confirmSubmitButton")
			const rbgFirstSprw = this.getView().byId("rbgFirst").getSelectedButton().getText()
			const inputResource = this.getView().byId("formScanInput")

			if (this.trolleyQuery) {
				inputResource.setValue(this.trolleyQuery)
			}

			if (!this.radioButtonGroupEnums.RBGOne[rbgFirstSprw]) {
				inputResource.setEnabled(true)
				if (inputResource.getValue()) {
					inputResource.setValueState(sap.ui.core.ValueState.None)
					confirmSubmitButton.setEnabled(true)
				} else {
					inputResource.setValueState(sap.ui.core.ValueState.Error)
					inputResource.setValueStateText("Enter Resource")
					confirmSubmitButton.setEnabled(false)
				}
			} else {
				inputResource.setValueState(sap.ui.core.ValueState.None)
				inputResource.setEnabled(false)
				inputResource.setValue()
				confirmSubmitButton.setEnabled(true)
			}
		},

		onRadioButtonGroupFirstSelect: function () {
			this.onAfterOpenScanDialog()
		},

		onInputResourceChange: function () {
			this.onAfterOpenScanDialog()
		}

	});

});