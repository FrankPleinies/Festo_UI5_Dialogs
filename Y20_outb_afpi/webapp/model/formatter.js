sap.ui.define([], function () {
	"use strict";

	return {
		
		/**
		 * format DocNo
		 * (Outbound Delivery Number)
		 */
		formatDocNo: function (sValue) {
			if (sValue === undefined) {
				return "";
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
		    // TODO: Format with leading zeros ?
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