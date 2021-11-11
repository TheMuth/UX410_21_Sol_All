/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00/sap/training/ex12_dynamicpage/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});