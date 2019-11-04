$('#cesiumContainer').append('new Cesium.Viewer("cesiumContainer");');
//var viewer = new Cesium.Viewer('cesiumContainer');
// or

//var divElement = document.createElement('cesiumContainer');
//debugger;
//var viewer = new Cesium.Viewer('cesiumContainer');


/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyGeoExtApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {
        name: 'MyGeoExtApp',
        loremIpsum: '.........Project KLIC 2.0 ...... ',
        //CesiumViewer: <div id="cesiumContainer" style="width: 700px; height:400px"></div>
        CesiumViewer: cesiumContainer
    }
});
