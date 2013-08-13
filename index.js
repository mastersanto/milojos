var express = require('express');
var server = express();
var ejs = require('ejs');

require('./api')(server);

server.configure(function() {
  server.set('view engine', 'ejs');
  server.use('/css', express.static(__dirname + '/assets/css'));
  server.use('/app', express.static(__dirname + '/assets/debug'));
  server.use('/components', express.static(__dirname + '/components'));
});

server.get('/', function(req, res) {
  res.render('index');
});

server.listen(8000);
