sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("student00.sap.training.startnavigation.controller.Main", {
			onInit: function () {
                    this._fnGetService = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;
                    this._oCrossAppNavigation = this._fnGetService && this._fnGetService("CrossApplicationNavigation");

                    if(this._oCrossAppNavigation) {
                        var oHref = this._oCrossAppNavigation.hrefForExternal({
                            target : {
                                semanticObject : "UX410NavEnd00",
                                action: "display"
                            }
                        }) || "";
                    }
                    
                    var oLink = this.byId("idNavLink");
                    oLink.setHref(oHref);
            },
            
            onPress : function(oEvent) {
                if(this._oCrossAppNavigation) {
                        var oHref = this._oCrossAppNavigation.toExternal({
                            target : {
                                semanticObject : "UX410NavEnd00",
                                action: "display"
                            },
                            params: { 
                                "helloText": "Hello UX410, this is from data from the Start App."
                            }
                        });
                    }
            }
		});
	});
