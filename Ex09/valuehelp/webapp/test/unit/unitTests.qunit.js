/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00/sap/training/ex9_valuehelp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
