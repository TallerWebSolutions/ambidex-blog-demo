var Ambidex = require("ambidex");
var mach    = require("mach");

var settings = require("./settings." + NODE_ENV + ".js");

module.exports = new Ambidex(
  {
    settings,

    "middlewareInjector": function (stack) {
      stack.map(
        settings.CUSTOM_SETTINGS.STATIC_URL + "/blog",
        mach.file(__dirname + "/blog/static")
      );
    }
  }
);