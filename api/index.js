var api = require('express')();
var mongo = require('mongojs').connect('milojos:mil0j05@ds027728.mongolab.com:27728/milojos');

var issues = mongo.collection('issues');

api.get('/issues', function(req, res) {
	issues.find().toArray(function(err, data) {
		res.send(data);
	});
});

api.post('/issues', function(req, res) {
	issues.insert();
});


api.listen(8000);
