cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.OrientationLock/www/orientationLock.js",
        "id": "com.phonegap.plugins.OrientationLock.OrientationLock",
        "pluginId": "com.phonegap.plugins.OrientationLock",
        "clobbers": [
            "OrientationLock"
        ]
    },
    {
        "file": "plugins/net.yoik.cordova.plugins.screenorientation/www/screenorientation.js",
        "id": "net.yoik.cordova.plugins.screenorientation.screenorientation",
        "pluginId": "net.yoik.cordova.plugins.screenorientation",
        "clobbers": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "file": "plugins/org.adlotto.cordova.recheck-screen-orientation/www/recheck_screen_orientation.js",
        "id": "org.adlotto.cordova.recheck-screen-orientation.RecheckScreenOrientation",
        "pluginId": "org.adlotto.cordova.recheck-screen-orientation",
        "clobbers": [
            "cordova.recheckScreenOrientation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.OrientationLock": "0.1",
    "net.yoik.cordova.plugins.screenorientation": "1.3.2",
    "org.adlotto.cordova.recheck-screen-orientation": "0.1.0",
    "org.apache.cordova.inappbrowser": "0.5.4",
    "cordova-plugin-device": "1.1.2"
}
// BOTTOM OF METADATA
});