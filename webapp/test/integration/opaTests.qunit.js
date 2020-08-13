/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"EB/ElemtBinding12/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});