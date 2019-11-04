Ext.define("MyGeoExtApp.view.main.Map", {
    // extend: "Ext.panel.Panel",
    extend: "GeoExt.component.Map",
    xtype: 'mappanel',
    requires: [
        "MyGeoExtApp.view.main.MapController",
        "MyGeoExtApp.view.main.MapModel"
    ],
    controller: "main-map",
    viewModel: {
        type: "main-map"
    },
    // html: "Hello, World!!"
    map: new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([5.7, 54]),
            zoom: 2
        })
    })
});