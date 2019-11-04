Ext.define('MyGeoExtApp.view.3dCesium.Map',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyGeoExtApp.view.3dCesium.MapController',
        'MyGeoExtApp.view.3dCesium.MapModel'
    ],

    controller: '3dcesium-map',
    viewModel: {
        type: '3dcesium-map'
    },

    html: 'Hello, World!!'
});
