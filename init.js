require("node-jsx").install(
  {
    "extension":  ".js",
    "harmony":    true
  }
);

require("make-node-env-global")();

if (process.argv.length == 2) {
  module.exports = require("./apps/init.js");
}
else {
  throw new Error(require("./apps/settings.common.js").NAME + ' should be started with "npm start" or "npm start tardis".  It does not understand "' + process.argv.join(" ") + '".');
}