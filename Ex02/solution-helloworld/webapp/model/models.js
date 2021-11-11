sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (JSONModel, Device) {
    "use strict";

    return {

        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createAppModel: function () {
            var oData = { firstName: "Leon", lastName: "Boeijen", address: { street: "My Street", houseNr: 4 },
        SelectedValue:"",
    myList:[
        {myKey:1, Name:"First"},
        {myKey:2, Name:"Second"},
        {myKey:3, Name:"Third"},
        {myKey:4, Name:"Fourth"},
        {myKey:5, Name:"fifth"}
    ] };
            var oModel = new JSONModel(oData);
            oModel.setDefaultBindingMode("TwoWay");
            return oModel;
        }

    };
});