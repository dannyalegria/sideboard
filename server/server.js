// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');

// CONFIG //
var config = require('./config');

// EXPRESS //
var app = module.exports = express();

// IF YOU'RE RUNNING NODE AND GULP MAKE SURE THIS POINTS TO DIST NOT PUBLIC!!!
app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.json());

// MASSIVE //
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
	connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

// DB SETUP. Enable when you have an initialize folder in db:

// var dbSetup = require('./services/dbSetup');
// dbSetup.run();

// CONTROLLERS //

// SERVICES //

// ENDPOINTS //

// CONNECTIONS //
var port = config.PORT;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});
