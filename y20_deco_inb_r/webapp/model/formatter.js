sap.ui.define([], function () {
	"use strict";
	return {

		enabledInputFormatter: function (value) {
			return !!value;
		},

		longTextFormatter: function (value) {
			if (value.length <= 28) {
				return value
			} else {
				value = value.substring(0, 25);
				return value + '...';
			}
		}
	};
});