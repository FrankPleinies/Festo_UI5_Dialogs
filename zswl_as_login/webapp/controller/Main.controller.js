sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/ui/core/BusyIndicator",
	"sap/m/MessageBox"

], function (Controller, JSONModel, Fragment, BusyIndicator, MessageBox) {
	"use strict";

	const workstationModes = {
		PTWY: "y20_as_ptwy",
		PICK: "zswl_as_pick",
		CC: "zswl_as_cons",
		PI: "zswl_as_inve",
		INSB: "zswl_as_insb",
		VIEW: "zswl_as_view",
		INTP: "zswl_as_pickint"
	}

	return Controller.extend("zswl_as_login.controller.Main", {

		appLocation: undefined,
		appQueryName: undefined,

		onInit: function () {
			this.onOpenScanDialog()

			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);
			const app = urlParams.get('wsMode')
			this.appQueryName = app
			let arr = window.location.pathname.split("/")
			arr[arr.length - 2] = workstationModes[app]
			const pathName = arr.join("/")

			this.appLocation = window.location.origin + pathName + "?" + queryString.split('&').slice(1).join('&')
		},


		onOpenScanDialog: function () {
			const view = this.getView();
			let popupDialog = this.byId("popupDialogWelcome")
			if (!popupDialog) {
				Fragment.load({
					id: view.getId(),
					name: "zswl_as_login.view.PopupDialogWelcome",
					controller: this
				}).then(function (popupDialog) {
					view.addDependent(popupDialog);
					popupDialog.open();
				});
			} else {
				this.byId("popupDialogWelcome").open();
			}
		},

		onConfirmDialog: function (event, scanValue, isArrowPressed) {
			const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZSWL_AS_DIA_LOGON_SRV", true);
			const workStation = this.getView().byId("workstationInput").getValue();
			const ws_mode = this.appQueryName;
			
			if (workStation) {
				let setInfo = `(WORKSTATION='${workStation}',WS_MODE='${ws_mode}')`
				BusyIndicator.show();
				oModel.read("/LogonCollection" + setInfo, {
					useBatch: false,
					success: (data, response) => {
						BusyIndicator.hide();
						this.handleMessageResponse(response)
						const warehouseNumber = data.LGNUM
						const url = `${this.appLocation}&whnumber=${warehouseNumber}&workstation=${workStation}`

 						location.replace(url)
	
					},
					error: err => {
						BusyIndicator.hide();
						this.handleMessageResponse(err)
					}
				});
			} else {
				sap.m.MessageToast.show("Enter Data!")
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
					sapMessagesArr.slice().reverse().forEach(messageObj => {
						sapMessages.message += "\n" + messageObj.message;
					});
				}
				if (!showToast) {
					this.createMessageBox(sapMessages, closeCallback);
				} else {
					sap.m.MessageToast.show(sapMessages.message);
				}

			} else {
				let property = null
				response.hasOwnProperty("responseText") ? property = "responseText" : property = "body"
				if (response[property].includes("error")) {
					try {
						let error = JSON.parse(response[property]);
						let message = error.error.message.value;
						if (error.error.code.includes(errorCodeInvalidRange)) {
							message = "Invalid Value";
						}
						this.createMessageBox({ severity: "error", message: message }, closeCallback);

					} catch (error) {
						sap.m.MessageToast.show("Invalid Message Response");
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

	});

});