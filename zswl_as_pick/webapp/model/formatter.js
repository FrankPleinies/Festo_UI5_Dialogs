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
		},

		showCheckText: function (value) {
			if(!value) {
				return ' ';
			}
			
			if (value <= '1') {
				return ' ';
			} else {
				return 'Check line item number';
			}
		},

		setHighlight: function (value) {
			if(!value) {
				return 'None';
			}

			if(value == '2') {
				return 'Error'
			} else if (value == '3') {
				return 'Success';
			}
		},

		setResult: function (value) {
			if(!value) {
				return '';
			}

			if(value == '2') {
				return 'Fail'
			} else if (value == '3') {
				return 'Ok';
			}
		}
	};
});