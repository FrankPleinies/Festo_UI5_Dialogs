sap.ui.define([
	"./Base.controller",
	"../model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/ui/core/BusyIndicator"
], function (Controller, formatter, JSONModel, Fragment, BusyIndicator) {
	"use strict";

	return Controller.extend("y20_deco_inb_r.controller.MainScreen", {

		currentSelectedTableItemFromFirstSection: undefined,
		formatJson: "&$format=json",
		formatter: formatter,
		isPopupShownArray: undefined,
		isPopupInfoShownArray: undefined,
		whNumber: undefined,

		onInit: function () {
			this.setCurrentLoggedInUser()
			this.getView().addStyleClass(sap.ui.Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
			this.checkWhNumberAndWorkstation()
		},

		checkWhNumberAndWorkstation: function () {
			const queryString = window.location.search;
			console.log(queryString);
			const urlParams = new URLSearchParams(queryString);
			// ?product=shirt&color=blue&newuser&size=m
			this.whNumber = urlParams.get('whnumber')
			const workStation = urlParams.get('workstation')

			if (!this.whNumber || !workStation) {
				//change this url later
				let arr = window.location.pathname.split("/")
				arr[arr.length - 2] = "y20_ui5_login"
				const pathName = arr.join("/")
				const search = window.location.search
				const appLocation = window.location.origin + pathName
				//Send all the params to the login application
				location.replace(`${appLocation}?appname=deco&${search.substring(1, search.length)}`)
			}

		},


		onAfterRendering: function () {
			this.setFocusOnScanInput()
		},


		onScanSubmit: function (oEvent) {
			oEvent.getSource().setEnabled(false)

			const currentInput = oEvent.getSource()
			const scannedValue = oEvent.getSource().getValue();
			currentInput.setValue()
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_DECO_INBOUND_RECEIVING_SRV", true);
			let setInfo = `(Lgnum='${this.whNumber}',ScanKey='${scannedValue}')`;
			BusyIndicator.show();
			oModel.read("/ScanDocumentEntCollection" + setInfo, {
				useBatch: false,
				urlParameters: {
					"$expand": "ScanDoc_DocHeadNav,ScanDoc_DocItemNav,ScanDoc_NewPackNav,ScanDoc_ProductNav,ScanDoc_PopDocHeadNav"
				},
				success: (data) => {
					//fix this later
					currentInput.setEnabled(true)
					let isDialogClosed = true;
					try {
						if (data.ScanDoc_PopDocHeadNav.results.length > 0) {
							this.onOpenDialog()
							isDialogClosed = false
						}
					} catch (err) {
						console.log(err)
						BusyIndicator.hide();
					}
					this.createModelsFromData(data)
					isDialogClosed && setTimeout(() => this.selectFirstTableRow(), 0)
					BusyIndicator.hide();
				},
				error: err => {
					currentInput.setEnabled(true)
					BusyIndicator.hide();
					this.handleMessageResponse(err);
				}
			});
		},

		selectFirstTableRow: function () {
			const table = this.byId("uiTable");
			const firstRow = table.getRows()[0]
			if (firstRow && firstRow.getCells()[0].getText()) {
				this.onRowSelectionChangeUiTable(undefined, 0)
				setTimeout(() => firstRow._setSelected(true), 0)
			}
		},

		createModelsFromData: function (data) {
			const docHeadNav = data.ScanDoc_DocHeadNav;
			const jsonModelDocHeadNav = new JSONModel(docHeadNav);
			this.getView().setModel(jsonModelDocHeadNav, "modelDocHeadNav");
			this.byId("blockLayoutCellFirst").setTitle(`SAP IBD : ${+docHeadNav.DocNo}`)

			//this has arr of results
			const docItemNav = data.ScanDoc_DocItemNav
			const jsonModeldocItemNav = new JSONModel(docItemNav)
			this.getView().setModel(jsonModeldocItemNav, "modelDocItemNav")

			this.isPopupShownArray = []
			this.isPopupInfoShownArray = []
			docItemNav.results && docItemNav.results.forEach(() => {
				this.isPopupShownArray.push(true)
				this.isPopupInfoShownArray.push(true)
			})

			const newPackNav = data.ScanDoc_NewPackNav
			const jsonModelnewPackNav = new JSONModel(newPackNav)
			this.getView().setModel(jsonModelnewPackNav, "modelNewPackNav");

			const productNav = data.ScanDoc_ProductNav
			const jsonModelproductNav = new JSONModel(productNav)
			this.getView().setModel(jsonModelproductNav, "modelProductNav");

			const createdHUNav = data.ScanDoc_CreatedHUNav
			const jsonModelCreatedHUNav = new JSONModel(createdHUNav)
			this.getView().setModel(jsonModelCreatedHUNav, "modelcreatedHUNav");

			//this has arr of results
			const popDocHeadNav = data.ScanDoc_PopDocHeadNav
			const jsonModelproductDocNav = new JSONModel(popDocHeadNav)
			this.getView().setModel(jsonModelproductDocNav, "modelPopDocHeadNav");


			let measureModel = {
				"Weight": {
					"Quan": "",
					"Unit": ""
				},
				"Height": {
					"Quan": "",
					"Unit": ""
				},
				"Width": {
					"Quan": "",
					"Unit": ""
				},
				"Length": {
					"Quan": "",
					"Unit": ""
				},
				"Lgnum": "",
				"DocId": "",
				"ItemId": ""
			}
			this.getView().setModel(new JSONModel(measureModel), "measureModel")
		},

		onExitPressed: function () {
			console.log(1)
		},



		onOpenDialog: function () {
			const view = this.getView();
			let popupDialog = this.byId("popupDialog")
			if (!popupDialog) {
				Fragment.load({
					id: view.getId(),
					name: "y20_deco_inb_r.view.PopupDialog",
					controller: this
				}).then(function (popupDialog) {
					view.addDependent(popupDialog);
					popupDialog.open();
				});
			} else {
				this.byId("popupDialog").open();
			}
		},


		onConfirmDialog: function () {
			const table = this.byId("uiTablePopup")
			const selectedIndex = table.getSelectedIndex();

			if (selectedIndex !== -1) {
				const dataArr = this.getView().getModel("modelPopDocHeadNav").getData().results;
				const docId = dataArr[selectedIndex].DocId
				const lgNum = dataArr[selectedIndex].Lgnum

				const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_DECO_INBOUND_RECEIVING_SRV", true);
				let setInfo = `(Lgnum='${lgNum}',DocId=guid'${docId}')`

				oModel.read("/PopupSelectDocEntCollection" + setInfo, {
					useBatch: false,
					urlParameters: {
						"$expand": "PopDocHead_DocHeadNav,PopDocHead_DocItemNav"
					},
					success: (data) => {
						const docHeadNav = data.PopDocHead_DocHeadNav
						const jsonModelDocHeadNav = new JSONModel(docHeadNav);
						this.getView().setModel(jsonModelDocHeadNav, "modelDocHeadNav");
						this.byId("blockLayoutCellFirst").setTitle(`SAP IBD : ${+docHeadNav.DocNo}`)

						const docItemNav = data.PopDocHead_DocItemNav
						const jsonModeldocItemNav = new JSONModel(docItemNav)
						this.getView().setModel(jsonModeldocItemNav, "modelDocItemNav");
						this.refreshModels()
						setTimeout(() => this.selectFirstTableRow(), 0)
					},
					error: err => {
						console.log(err);
					}
				});
			} else {
				sap.m.MessageToast.show("No Item Selected!")
			}
			const popupDialog = this.byId("popupDialog")
			popupDialog.close();
		},


		//  * Select row from section one UI table
		//  * param  {Object} event SAPUI5 Standard UI event
		//  * param  {Number} selectRow Select any row in the table
		//  * return {Void}   

		onRowSelectionChangeUiTable: function (event, selectRow, noFocus) {
			const table = this.byId("uiTable")
			let selectedIndex = -1

			//If selectRow is passed use it.
			if (selectRow !== undefined) {
				selectedIndex = selectRow
				// If selectFirstRow is passed use 0.
			} else {
				selectedIndex = table.getSelectedIndex();
			}

			if (selectedIndex !== -1) {
				this.currentSelectedTableItemFromFirstSection = selectedIndex

				const dataArr = this.getView().getModel("modelDocItemNav").getData().results;
				const docId = dataArr[selectedIndex].DocId
				const lgNum = dataArr[selectedIndex].Lgnum
				const itemId = dataArr[selectedIndex].ItemId

				const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_DECO_INBOUND_RECEIVING_SRV", true);
				let setInfo = `(Lgnum='${lgNum}',DocId=guid'${docId}',ItemId=guid'${itemId}')`
				BusyIndicator.show();
				this.setAvailableTrolleys(setInfo)
				oModel.read("/DocumentItemSet" + setInfo, {
					useBatch: false,
					urlParameters: {
						"$expand": "DocItem_CreatedHUNav,DocItem_NewPackNav,DocItem_ProductNav"
					},
					success: (data, resp) => {
						BusyIndicator.hide();
						const productNav = data.DocItem_ProductNav
						const jsonModelproductNav = new JSONModel(productNav)
						this.getView().setModel(jsonModelproductNav, "modelProductNav");

						//Popup dialogs below
						// if (productNav.IndConf && this.isPopupShownArray[this.currentSelectedTableItemFromFirstSection]) {
						// 	this.isPopupShownArray[this.currentSelectedTableItemFromFirstSection] = false
						// 	this.onOpenWeightDialog()
						// }
						this.onInfoPressed(null, true)
						const createdHUNav = data.DocItem_CreatedHUNav
						const jsonModelCreatedHUNav = new JSONModel(createdHUNav)
						this.getView().setModel(jsonModelCreatedHUNav, "modelcreatedHUNav");

						const newPackNav = data.DocItem_NewPackNav
						const jsonModelnewPackNav = new JSONModel(newPackNav)
						this.getView().setModel(jsonModelnewPackNav, "modelNewPackNav");
						this.refreshModels()
						sap.m.MessageToast.show("Data Updated!")
						this.handleMessageResponse(resp)

						if (!noFocus) {
							setTimeout(() => this.byId("scanPackHUType").focus(), 0)
						}


					},
					error: err => {
						BusyIndicator.hide();
						this.handleMessageResponse(err)
					}
				});
			}

		},

		setAvailableTrolleys: function (setInfo) {

			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_DECO_INBOUND_RECEIVING_SRV", true);
			oModel.read("/UserCommandCollection" + setInfo, {
				useBatch: false,
				urlParameters: {
					"$expand": "UserComm_TrolleyNav"
				},
				success: (data) => {
					const trolleyDataArr = data.UserComm_TrolleyNav
					const jsonModelTrolleyNav = new JSONModel(trolleyDataArr);
					this.getView().setModel(jsonModelTrolleyNav, "modelTrolleyNav");
					this.refreshModels()
				},
				error: err => {
					this.handleMessageResponse(err)
				}
			})

		},

		onQuanChange: function () {

			const selectedIndex = this.currentSelectedTableItemFromFirstSection
			if (selectedIndex !== undefined) {
				const dataArr = this.getView().getModel("modelDocItemNav").getData().results;
				const docId = dataArr[selectedIndex].DocId
				const lgNum = dataArr[selectedIndex].Lgnum
				const itemId = dataArr[selectedIndex].ItemId
				const quantity = this.byId("stepInputQuan").getValue()
				const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_DECO_INBOUND_RECEIVING_SRV", true);
				let setInfo = `(Lgnum='${lgNum}',DocId=guid'${docId}',ItemId=guid'${itemId}',ScanQuan=${quantity}M)`

				oModel.read("/ScanQuantityEntCollection" + setInfo, {
					useBatch: false,
					success: (data, resp) => {
						this.handleMessageResponse(resp)
						const newData = data.ScanQuan * 1
						this.byId("stepInputQuan").setValue(newData)
						//Check This
						this.getView().getModel("modelNewPackNav").getData().Quantity.Quan = newData.toString()
						this.refreshModels()

					},
					error: err => {
						this.handleMessageResponse(err)
					}
				});
			} else {
				sap.m.MessageToast.show("No Items is Selected!")
			}


		},

		refreshModels: function () {
			const models = this.getView().oModels
			for (let modelName in models) {
				models[modelName].refresh()
			}
		},

		onPrintPressed: function (oEvent) {
			const element = oEvent.getSource()
			element.setEnabled(false)
			BusyIndicator.show()
			const selectedIndex = this.currentSelectedTableItemFromFirstSection;
			//if 
			//nqma danni this.getView().getModel("modelDocItemNav")
			//ima danni this.getView().getModel("modelNewPackNav")


			const createCall = () => {
				const context = this
				const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_DECO_INBOUND_RECEIVING_SRV", true);
				let requestBody = {}
				requestBody = this.getView().getModel("modelNewPackNav").getData()
				requestBody.NewPack_CreatedHUNav = this.getView().getModel("modelcreatedHUNav").getData()
				requestBody.NewPack_ProductNav = this.getView().getModel("modelProductNav").getData()
				if (requestBody.Quantity.Quan !== undefined) {
					requestBody.Quantity.Quan = requestBody.Quantity.Quan.toString()
				}
				oModel.create("/NewPackingEntCollection", requestBody, {
					success: (successData, response) => {
						//Check this function calls 
						element.setEnabled(true)
						BusyIndicator.hide()
						const cbFunction = successData.Cursor == "RFSCAN" ? this.setFocusOnScanInput : this.setFocusOnHUTypeInput
						this.handleMessageResponse(response, cbFunction.bind(context))


						setTimeout(() => { this.onRowSelectionChangeUiTable(null, selectedIndex, true) }, 0)
						cbFunction.call(this)
					},
					error: err => {
						element.setEnabled(true)
						BusyIndicator.hide()
						this.handleMessageResponse(err, this.setFocusOnHUTypeInput.bind(this))
					}
				});
			}

			const packNav = this.getView().getModel("modelNewPackNav");
			const docItemModel = this.getView().getModel("modelDocItemNav");

			let packNavData = packNav && packNav.getData()
			let emptyArr = docItemModel && docItemModel.getData().results
			if ((emptyArr && emptyArr.length === 0) && (packNavData && packNavData.HU.HUIdent !== "")) {
				createCall()
			} else if (selectedIndex !== undefined) {
				createCall()
			} else {
				element.setEnabled(true)
				BusyIndicator.hide()
				sap.m.MessageToast.show("No item is selected.")
			}
		},


		onOpenWeightDialog: function () {
			var view = this.getView();
			let popupDialogWeight = this.byId("popupDialogWeight")
			if (!popupDialogWeight) {
				Fragment.load({
					id: view.getId(),
					name: "y20_deco_inb_r.view.PopupDialogWeight",
					controller: this
				}).then(function (popupDialogWeight) {
					view.addDependent(popupDialogWeight);
					popupDialogWeight.open();
				});
			} else {
				this.byId("popupDialogWeight").open();
			}
		},

		onCloseWeightDialog: function () {
			const popupDialog = this.byId("popupDialogWeight")
			popupDialog.close();
		},

		onConfirmWeightDialog: function () {

			const selectedIndex = this.currentSelectedTableItemFromFirstSection;
			if (selectedIndex !== undefined) {
				const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_DECO_INBOUND_RECEIVING_SRV", {
					useBatch: false,
					defaultUpdateMethod: sap.ui.model.odata.UpdateMethod.Put
				});

				const dataArr = this.getView().getModel("modelDocItemNav").getData().results;
				const docId = dataArr[selectedIndex].DocId
				const lgNum = dataArr[selectedIndex].Lgnum
				const itemId = dataArr[selectedIndex].ItemId

				const measureModelData = this.getView().getModel("measureModel").getData()
				measureModelData.Lgnum = lgNum
				measureModelData.DocId = docId
				measureModelData.ItemId = itemId

				const setInfo = `(Lgnum='${lgNum}',DocId=guid'${docId}',ItemId=guid'${itemId}')`

				if (measureModelData.Weight.Quan && measureModelData.Height.Quan && measureModelData.Width.Quan && measureModelData.Length.Quan && measureModelData.Height.Unit) {
					oModel.update("/PopupWeightCollection" + setInfo, measureModelData, {
						success: (successData, response) => {
							this.handleMessageResponse(response)
							sap.m.MessageToast.show("Confirmed!")
						},
						error: err => this.handleMessageResponse(err)
					});
					const popupDialog = this.byId("popupDialogWeight")
					popupDialog.close();
				} else {
					sap.m.MessageToast.show("Fill all input fields first!")
				}

			} else {
				sap.m.MessageToast.show("No item is selected.")
			}
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

		onUndoPressed: function (oEvent) {
			const element = oEvent.getSource()
			element.setEnabled(false)
			BusyIndicator.show()

			const selectedIndex = this.currentSelectedTableItemFromFirstSection;
			if (selectedIndex !== undefined) {
				const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_DECO_INBOUND_RECEIVING_SRV", {
					useBatch: false
				});
				const dataArr = this.getView().getModel("modelcreatedHUNav").getData().results;
				const selectedItemsArr = []
				const selectedIndicesArr = this.byId("uiTableThird").getSelectedIndices()
				if (selectedIndicesArr.length > 0) {

					const docId = dataArr[0].DocId
					const lgNum = dataArr[0].Lgnum
					const itemId = dataArr[0].ItemId

					selectedIndicesArr.forEach(index => {
						selectedItemsArr.push(dataArr[index])
					})
					let requestBody = {
						"Lgnum": lgNum,
						"DocId": docId,
						"ItemId": itemId,
						"UserComm": "",
					}
					requestBody.UserComm_CreatedHUNav = selectedItemsArr
					oModel.create("/UserCommandCollection", requestBody, {
						success: (successData, response) => {
							element.setEnabled(true)
							BusyIndicator.hide()
							this.handleMessageResponse(response)
							sap.m.MessageToast.show("Undo Sucessfull!")
							//update table 3
							const newModeldataResultsArr = successData.UserComm_CreatedHUNav
							const jsonModelCreatedHUNav = new JSONModel(newModeldataResultsArr)
							this.getView().setModel(jsonModelCreatedHUNav, "modelcreatedHUNav");
							this.refreshModels()

							this.onRowSelectionChangeUiTable(null, selectedIndex)
							this.byId("uiTableThird").setSelectedIndex(-1)

						},
						error: err => {
							element.setEnabled(true)
							BusyIndicator.hide()
							this.handleMessageResponse(err)
						}
					});
				} else {
					element.setEnabled(true)
					BusyIndicator.hide()
					sap.m.MessageToast.show("No items to undo are selected.")
				}

			} else {
				element.setEnabled(true)
				BusyIndicator.hide()
				sap.m.MessageToast.show("No item is selected.")
			}

		},

		onInfoPressed: function (event, checkForMessages) {

			const selectedIndex = this.currentSelectedTableItemFromFirstSection;
			if (selectedIndex !== undefined) {
				const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_DECO_INBOUND_RECEIVING_SRV", true);

				const dataArr = this.getView().getModel("modelDocItemNav").getData().results;
				const docId = dataArr[selectedIndex].DocId
				const lgNum = dataArr[selectedIndex].Lgnum
				const itemId = dataArr[selectedIndex].ItemId
				const setInfo = `(Lgnum='${lgNum}',DocId=guid'${docId}',ItemId=guid'${itemId}')`

				oModel.read("/UserCommandCollection" + setInfo, {
					useBatch: true,
					urlParameters: {
						"$expand": "UserComm_PopupInfoNav,UserComm_ItemTextNav"
					},
					success: (successData, response) => {
						this.handleMessageResponse(response)
						let itemTexts = ""
						successData.UserComm_ItemTextNav.results.forEach(item => {
							itemTexts += item.Text + "\n"
						})

						const popupInfoNav = successData.UserComm_PopupInfoNav
						popupInfoNav.ItemTXT = itemTexts
						const jsonModelPopupInfoNav = new JSONModel(popupInfoNav)

						this.getView().setModel(jsonModelPopupInfoNav, "modelPopupInfoNav");
						this.refreshModels()
						if (checkForMessages) {
							if (popupInfoNav.ItemTXT && this.isPopupInfoShownArray[this.currentSelectedTableItemFromFirstSection]) {
								this.isPopupInfoShownArray[this.currentSelectedTableItemFromFirstSection] = false
								this.onOpenInfoDialog()
							} else {
								const productNav = this.getView().getModel("modelProductNav").getData()
								if (productNav.IndConf && this.isPopupShownArray[this.currentSelectedTableItemFromFirstSection]) {
									this.isPopupShownArray[this.currentSelectedTableItemFromFirstSection] = false
									this.onOpenWeightDialog()
								}
							}
						} else {
							this.onOpenInfoDialog()
						}

					},
					error: err => this.handleMessageResponse(err)
				});
			} else {
				sap.m.MessageToast.show("No item is selected.")
			}

		},

		onPrintSuccess: function (lastSelectedIndex) {
			//create request here
			if (lastSelectedIndex !== undefined) {
				const dataArr = this.getView().getModel("modelDocItemNav").getData().results;
				const docId = dataArr[lastSelectedIndex].DocId
				const lgNum = dataArr[lastSelectedIndex].Lgnum
				const itemId = dataArr[lastSelectedIndex].ItemId

				const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/Y20_EWM_DECO_INBOUND_RECEIVING_SRV", true);
				const setInfo = `(Lgnum = '${lgNum}', DocId = guid'${docId}', ItemId = guid'${itemId}')`
				BusyIndicator.show();
				oModel.read("/DocumentItemSet" + setInfo, {
					useBatch: true,
					urlParameters: {
						"$expand": "DocItem_CreatedHUNav"
					},
					success: (data, resp) => {
						BusyIndicator.hide();
						const createdHUNav = data.DocItem_CreatedHUNav
						const jsonModelCreatedHUNav = new JSONModel(createdHUNav)
						this.getView().setModel(jsonModelCreatedHUNav, "modelcreatedHUNav");
						this.refreshModels()
						sap.m.MessageToast.show("Data Updated!")
						this.handleMessageResponse(resp)
					},
					error: err => {
						BusyIndicator.hide();
						this.handleMessageResponse(err)
					}
				});
			}
		},

		onOpenInfoDialog: function () {
			var view = this.getView();
			let popupDialogInfo = this.byId("popupDialogInfo")
			if (!popupDialogInfo) {
				Fragment.load({
					id: view.getId(),
					name: "y20_deco_inb_r.view.PopupDialogInfo",
					controller: this
				}).then(function (popupDialogInfo) {
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

			const productNav = this.getView().getModel("modelProductNav").getData()
			if (productNav.IndConf && this.isPopupShownArray[this.currentSelectedTableItemFromFirstSection]) {
				this.isPopupShownArray[this.currentSelectedTableItemFromFirstSection] = false
				this.onOpenWeightDialog()
			}
		},

		handleUserInput: function (oEvent) {
			const userInput = oEvent.getParameter("value");
			const inputControl = oEvent.getSource();
			if (userInput) {
				inputControl.setValueState(sap.ui.core.ValueState.Success);
			} else {
				inputControl.setValueState(sap.ui.core.ValueState.Error);
			}
		},

		setFocusOnHUTypeInput() {
			const input = this.getView().byId("scanPackHUType")
			setTimeout(() => { input.focus() }, 0)
		},

		setFocusOnScanInput() {
			const input = this.getView().byId("scanInput")
			setTimeout(() => { input.focus() }, 0)
		}

	});

});