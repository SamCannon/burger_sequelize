const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const methOver = require('method-override');
const burgCont = require('./controllers/burgers_controllers.js');

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methOver('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use('/', burgCont);

app.listen(PORT, () => {

	console.log("Listening on port: ", PORT);

});