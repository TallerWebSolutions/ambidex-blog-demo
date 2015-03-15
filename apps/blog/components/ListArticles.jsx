var Ambidex     = require("ambidex");
var React       = require("react/addons");
var ReactRouter = require("react-router");

var { Link }    = ReactRouter;

var ListArticles = React.createClass(
  {
    "mixins": [
      Ambidex.mixinCreators.connectStoresToLocalState(
        [
          "Articles",
        ]
      ),
      Ambidex.mixins.Title
    ],

    "sectionTitle": "Articles",

    "getInitialState": function () {
      return {};
    },

    "render": function () {
      return (
        <div className="ListArticles">
          <ul>
            {
              this.state.articles.map(item =>
                <li key={item.uuid}>
                  <Link to="viewArticle" params={{ articleID: item.uuid }}>
                    <h2>{ item.title }</h2>
                    <span dangerouslySetInnerHTML={{ __html: item.body }} />
                    <span dangerouslySetInnerHTML={{ __html: item.field_featured_image }} />
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
      );
    }
  }
);

module.exports = ListArticles;