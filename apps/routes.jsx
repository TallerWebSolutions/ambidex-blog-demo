require("./vendor/polyfills.js");

var React       = require("react/addons");
var ReactRouter = require("react-router");

var { Route, DefaultRoute }  = ReactRouter;

var Main         = require('./blog/components/Main.jsx');
var Home         = require('./blog/components/Home.jsx');
var ListArticles = require('./blog/components/ListArticles.jsx');
var ViewArticle = require('./blog/components/ViewArticle.jsx');

module.exports =  (
  <Route path="/" handler={ Main }>

    <Route path="/" name="home" handler={ Home }>
      <DefaultRoute name="listArticles" handler={ ListArticles } />
    </Route>

  	<Route name="viewArticle" path="/articles/:articleID/" handler={ ViewArticle } />

  </Route>
);