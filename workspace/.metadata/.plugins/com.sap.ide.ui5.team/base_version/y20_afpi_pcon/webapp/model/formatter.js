sap.ui.define([], function () {
	"use strict";

	return {

		/**
		 * removeLeadingZeros
		 * remove leading zeros
		 */
		removeLeadingZeros: function (sValue) {
			if (sValue === undefined) {
				return null;
			}
			if (sValue == null) {
				return null;
			}
			// trim spaces and leading zeros
			sValue = sValue.trim();
		    while (sValue.length > 0 && sValue.startsWith("0"))
		    {
		    	sValue = sValue.substr(1, sValue.length - 1);
		    }
		    return sValue;
		},
	
		/**
		 * format Quantity
		 */
		formatQuantity: function (sValue) {
			if (sValue === undefined) {
				return null;
			}
			if (sValue == null) {
				return null;
			}
			if (sValue.indexOf(".") > -1) {
			    // maximum of 3 trailing digits 
				var iValue = parseFloat(sValue);
				let dec = 3;
				sValue = (Math.round(iValue * Math.pow(10,dec)) / Math.pow(10,dec)).toString();
				// replace char for the decimal point
				sValue = sValue.replace(".", ",");
			}
			
		    return sValue;
		},
		
		/**
		 * format DocNo
		 * (Outbound Delivery Number)
		 */
		formatDocNo: function (sValue) {
			if (sValue === undefined) {
				return null;
			}
			if (sValue == null) {
				return null;
			}
			// trim spaces and leading zeros
			sValue = sValue.trim();
		    while (sValue.length > 0 && sValue.charAt(0) == '0')
		    {
		    	sValue = sValue.substr(1, sValue.length - 1);
		    }
		    // 10 leading zeros
		    var mask = "0000000000";
		    var len = 10;
		    sValue = mask + sValue;
		    if (sValue.length > len) {
		    	sValue = sValue.substr(sValue.length - len);
		    }
		    
		    return sValue;
		}
	};
});