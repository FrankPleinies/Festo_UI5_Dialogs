/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/swl/GridLayout_Template/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});