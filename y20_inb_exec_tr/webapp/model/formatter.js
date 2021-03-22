sap.ui.define([], function () {
	"use strict";
	return {

		enabledInputFormatter: function (value) {
			return !!value;
		},

		longTextFormatter: function (value) {
			if(!value) {
				return '';
			}
			
			if (value.length <= 25) {
				return value
			} else {
				value = value.substring(0, 23);
				return value + '...';
			}
		}
	};
});