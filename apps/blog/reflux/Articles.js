var Lazy = require("lazy.js");
var mach = require("mach");

// var DrupalServices

var Articles = {

  "actions": [
    "getArticles",
  ],

  "store": {
    "init": function () {
      this.state = {};
    },

    onGetArticles: function () {

      // @TODO: Create a service singleton.
      mach.get({
        url: 'http://d8-sandbox.local/node/article',
        headers: {
          'Accept': 'application/json'
        } 
      }).then(function (connection) {

        // @TODO: Prepare this response, don't just load everything into memory.
        this.state = JSON.parse(connection.responseText);
        this.trigger(this.state);
      }.bind(this));

    },
  },
  
};

module.exports = Articles;