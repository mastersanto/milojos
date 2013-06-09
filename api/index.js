module.exports = function (server) {
	var mongo = require('mongojs').connect('milojos:mil0j05@ds027728.mongolab.com:27728/milojos');
	var issues = mongo.collection('issues');

	server.get('/api/issues', function(req, res) {
		issues.find().toArray(function(err, data) {
			res.send(data);
		});
	});

	server.post('/api/issues', function(req, res) {
		// issues.insert();
	});
};

