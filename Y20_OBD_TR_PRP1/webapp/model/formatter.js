sap.ui.define([], function () {
	"use strict";
	return {

		enabledInputFormatter: function (value) {
			return !!value;
		},

		longTextFormatter: function (value) {
			if (value.length <= 20) {
				return value
			} else {
				value = value.substring(0, 18);
				return value + '...';
			}
		}
	};
});