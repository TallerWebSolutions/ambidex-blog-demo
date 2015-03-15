var Lazy = require("lazy.js");

module.exports = Lazy(
  [
    "Articles",
    "CurrentArticle"
  ]
).map(
  key => [key, require(`./${ key }.js`)]
).toObject();