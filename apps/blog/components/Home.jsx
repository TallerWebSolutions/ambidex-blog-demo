var Ambidex     = require("ambidex");
var React       = require("react/addons");
var ReactRouter = require("react-router");
var { RouteHandler } = ReactRouter;

var Home = React.createClass(
  {
    "mixins": [
      Ambidex.mixins.Title
    ],

    "sectionTitle": "Home",

    "getInitialState": function () {
      return {};
    },

    "render": function () {

      return (
        <div className="Home">
          <div className="content">
            <RouteHandler />
          </div>
        </div>
      );
    }
  }
);

module.exports = Home;