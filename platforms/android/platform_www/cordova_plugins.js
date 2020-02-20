cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com-sarriaroman-photoviewer.PhotoViewer",
      "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
      "pluginId": "com-sarriaroman-photoviewer",
      "clobbers": [
        "PhotoViewer"
      ]
    },
    {
      "id": "cordova-plugin-in-app-youtube.plugin",
      "file": "plugins/cordova-plugin-in-app-youtube/www/plugin.js",
      "pluginId": "cordova-plugin-in-app-youtube",
      "clobbers": [
        "InAppYouTube"
      ],
      "runs": true
    }
  ];
  module.exports.metadata = {
    "com-sarriaroman-photoviewer": "1.2.4",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-in-app-youtube": "1.0.0"
  };
});