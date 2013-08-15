module.exports = function (server) {
	var mongo = require('mongojs').connect('milojos:mil0j05@ds027728.mongolab.com:27728/milojos');

	server.get('/api/issues', function(req, res) {
		var issues = mongo.collection('issues');
		issues.find().toArray(function(err, data) {
			res.send(data);
		});
	});

	server.post('/api/issues', function(req, res) {
		// issues.insert();
	});
};

