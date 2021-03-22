sap.ui.define([], function () {
	"use strict";
	return {

		enabledInputFormatter: function (value) {
			console.log(12)
			return !!value;
		},

		longTextFormatter: function (value) {
			if (value) {
				if (value.length <= 21) {
					return value
				} else {
					value = value.substring(0, 19);
					return value + '..';
				}
			}
			return value
		},

		longTextFormatterDeviation: function (value) {
			if (value) {
				if (value.length <= 14) {
					return value
				} else {
					value = value.substring(0, 12);
					return value + '..';
				}
			}
			return value
		},

		arrowButtonFormat(valueOne, valueTwo, huValue) {
			if (valueTwo && huValue) {
				const intValOne = valueOne * 1
				const intValueTwo = valueTwo * 1
				if (intValueTwo != 0) {
					return intValOne + " / " + intValueTwo
				}
			}
			return valueOne * 1
		}
	};
});