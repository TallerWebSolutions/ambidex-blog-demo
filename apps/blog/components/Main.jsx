var Ambidex     = require("ambidex");
var React       = require("react/addons");
var ReactRouter = require("react-router");
var { RouteHandler, Link } = ReactRouter;

var Main = React.createClass(
  {
    "mixins": [
      Ambidex.mixins.Reflux,
      Ambidex.mixins.Settings,
      Ambidex.mixins.Title
    ],

    "sectionTitle": "Blog",

    "getInitialState": function () {
      return {};
    },

    "render": function () {

      return (
        <div className="Main">
          <header>
            <h1><Link to="home">Taller blog</Link></h1>
          </header>

          <RouteHandler />

          <footer>
            <p>Powered by Ambidex and Drupal 8.</p>
          </footer>
        </div>
      );
    }
  }
);

module.exports = Main;