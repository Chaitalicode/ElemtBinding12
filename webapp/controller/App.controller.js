sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("EB.ElemtBinding12.controller.App", {
		onInit: function () {

		},
		onSelectItem: function(oEvent){
			debugger;
			//Get the selected path
			var listItm = oEvent.getParameter("listItem").getBindingContext().getPath();   
			// Get the List id, where you want to bind, that particular element.
			var OList = this.getView().byId("ListId");
			//Bind that path to that particular control.
			OList.bindElement(listItm);
		}
	});
});