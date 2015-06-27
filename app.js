var express = require('express')
  , load = require('express-load')
  , bodyParser = require('body-parser')
  , path  = require( "path" )
  , app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use( "/public", express.static( path.join( __dirname, "public" ) ) );

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, function () {
  console.log("Rodando na porta 3000.");
});
