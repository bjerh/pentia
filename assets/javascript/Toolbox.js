"use strict";

var Toolbox = (function() {
	var me = {};
	
	me.placeholderSupport = function placeholderIsSupported() {
		var test = document.createElement('input');
		return ('placeholder' in test);
	}
	
	return me;
}());