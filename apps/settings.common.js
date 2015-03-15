module.exports = {
  "NAME":         "Blog D8 with Ambidex",
  "SHORT_NAME":   "d8-ambidex",
  "FAV_ICON_URL": "/static/blog/imgs/favicon.ico",
  
  "TITLE_SEPARATOR": " - ",
  
  "FILESYSTEM_PATHS": {
    "BASE": __dirname,
    "ROUTES": "routes.jsx",
    "REFLUX_DEFINITIONS": "./reflux/definitions.js",
    "REFLUX_ACTIONS_FOR_ROUTER_STATE": "./reflux/actionsForRouterState.js",
    "BUNDLES": "../bundles/",
    "STYLES": "styles.scss",
  },

  "CUSTOM_SETTINGS": {
    "STATIC_URL": "/static",
    "API_BASE_URL": "http://d8-sandbox.local",
    "ACTIONS_UPDATE_CACHED_DATA":   true
  }
};