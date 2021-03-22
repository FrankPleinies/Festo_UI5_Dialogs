/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/swl/Y20_PTWY_TROLLEY/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});