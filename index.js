var express = require('express');
var server = express();
var ejs = require('ejs');

require('./api')(server);

server.configure(function() {
	server.set('view engine', 'ejs');
	server.use('/css', express.static(__dirname + '/assets/css'));
	server.use('/img', express.static(__dirname + '/assets/img'));
	server.use('/app', express.static(__dirname + '/assets/app'));
	server.use('/scripts', express.static(__dirname + '/components'));
});

server.get('/', function(req, res) {
	res.render('index');
});

server.listen(8000);
