var utilities    = require("ambidex").addons.utilities;

module.exports = [
  // Articles: Get list.
  {
    "actionName":     "getArticles",
    "storeName":      "Articles",
  },
  
  // // Articles: View article.
  {
    "actionName":     "viewArticle",
    "parameterName":  "articleID",
    "storeName":      "CurrentArticle",
    // "isReady":        utilities.hasContent,
  }
];