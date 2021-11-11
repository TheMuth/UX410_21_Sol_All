sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("student00.sap.training.solutionhelloworld.controller.Main", {
            onInit: function () {

            },

            onReset: function (oEvent) {
                this.getView().getModel("appModel").setProperty("/firstName", "Leon");
                if (oEvent.getSource().getType() === "Negative") {
                    oEvent.getSource().setType("Success");
                } else {
                    oEvent.getSource().setType("Negative");
                }
            }
        });
    });
