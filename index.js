var express = require("express");
var app = express();

app.use('/', express.static('public'));
app.listen(9000);
console.log('Starting static web server in "public" on port 9000.');
