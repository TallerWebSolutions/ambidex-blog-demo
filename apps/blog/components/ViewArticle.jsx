var Ambidex     = require("ambidex");
var React       = require("react/addons");
var ReactRouter = require("react-router");

// var { Link }    = ReactRouter;

var ViewArticles = React.createClass(
  {
    "mixins": [
      Ambidex.mixinCreators.connectStoresToLocalState(
        [
          "CurrentArticle",
        ]
      ),
      Ambidex.mixins.Title
    ],

    "sectionTitle": "Article",

    "getInitialState": function () {
      return {};
    },

    "render": function () {
      var article = this.state.currentArticle;

      return (
        <div className="ViewArticle">
          <h2>{ article.title }</h2>
          <span dangerouslySetInnerHTML={{ __html: article.body }} />
          <span dangerouslySetInnerHTML={{ __html: article.field_featured_image }} />
        </div>
      );
    }
  }
);

module.exports = ViewArticles;