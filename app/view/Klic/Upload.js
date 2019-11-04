
Ext.define('MyGeoExtApp.view.Klic.Upload',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyGeoExtApp.view.Klic.UploadController',
        'MyGeoExtApp.view.Klic.UploadModel'
    ],

    controller: 'klic-upload',
    viewModel: {
        type: 'klic-upload'
    },

    html: 'Hello, World!!'
});
