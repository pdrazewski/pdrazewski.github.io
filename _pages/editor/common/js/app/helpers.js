/* jshint strict: true */
/* global $:false, namespace:false */

'use strict';

/**
 * Avoid `console` errors in browsers that lack a console.
 * Based on boilersplate
 */
(function() {
	var method, noop, methods, length, console;

	noop = function() {};
	methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	length = methods.length;
	console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

/**
 * General namespace function
 */
function namespace(namespaceString) {
	var parts, parent, currentPart, i, length;

	parts = namespaceString.split('.');
	parent = window;
	currentPart = '';
	for (i = 0, length = parts.length; i < length; i += 1) {
		currentPart = parts[i];
		parent[currentPart] = parent[currentPart] || {};
		parent = parent[currentPart];
	}
	return parent;
}
