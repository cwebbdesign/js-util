// Swap attributes of HTML elements
/* jslint browser: true */
var Swap = {

		os : null,
		init : function (target, targetAttribute, value32, value64) {
			"use strict";
			Swap.detectOS();
			var value = Swap.setValue(value32, value64);
			Swap.swapValue(target, targetAttribute, value);
		},
		detectOS : function () {
			"use strict";
			var os = Swap.os;
			if (navigator.userAgent.indexOf("WOW64") !== -1 ||
					navigator.userAgent.indexOf("Win64") !== -1) {
				os = "64";
			} else {
				os = "32";
			}
			return os;
		},
		setValue : function (value32, value64) {
			"use strict";
			var os = Swap.os,
				value = (os === "64") ? value64 : value32;
			return value;
		},
		swapValue : function (target, targetAttribute, value) {
			"use strict";
			target = document.getElementById(target);
			target.setAttribute(targetAttribute, value);
		}
	};
//Swap.init("target", "href", "link1", "link2");
