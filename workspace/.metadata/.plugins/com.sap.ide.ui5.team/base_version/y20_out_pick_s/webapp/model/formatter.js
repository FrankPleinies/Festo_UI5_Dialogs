sap.ui.define([], function () {
	"use strict";
	return {

		enabledInputFormatter: function (value) {
			return !!value;
		},

		longTextFormatter: function (value) {
			if (value.length <= 17) {
				return value
			} else {
				value = value.substring(0, 15);
				return value + '..';
			}
		},

		longTextFormatterDeviation: function (value) {
			if (value.length <= 14) {
				return value
			} else {
				value = value.substring(0, 12);
				return value + '..';
			}
		}
	};
});