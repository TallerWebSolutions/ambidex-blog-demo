var Lazy = require("lazy.js");
var mach = require("mach");

// var DrupalServices

var CurrentArticle = {

  "actions": [
    "viewArticle",
  ],

  "store": {
    "init": function () {
      this.state = {};
    },

    onViewArticle: function (articleID) {
      this.articleID = articleID;

      if (!Lazy(this.state.uuid).isEmpty() && this.state.uuid != articleID) {
        this.state = {};
      }

      // @TODO: Create a service singleton.
      mach.get({
        url: 'http://d8-sandbox.local/node/article/' + this.articleID,
        headers: {
          'Accept': 'application/json'
        } 
      }).then(function (connection) {
        // @TODO: Prepare this response, don't just load everything into memory.
        var response = JSON.parse(connection.responseText);
        this.state = response[0];
        this.trigger(this.state);

      }.bind(this));

    },
  },
  
};

module.exports = CurrentArticle;