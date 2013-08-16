module.exports = function (server) {
  //var mongo = require('mongojs').connect('milojos:mil0j05@ds027728.mongolab.com:27728/milojos');
  var mongo = require('mongojs').connect('milojos:mil0j05@localhost:27017/milojos');
  var CATEGORIES = [
    'ATRACO',
    'RAPONAZO',
    'ROBO-RESIDENCIA',
    'ROBO-VEHICULO',
    'PASEO-MILLONARIO',
    'OTROS'
  ];

  server.get('/api/issues', function(req, res) {
    var lat = Number(req.query.lat);
    var lng = Number(req.query.lng);
    var limit = req.query.limit || 20;
    var km = 111.12;

    mongo.runCommand({
      geoSearch: 'issues',
      search: {type: 'ATRACO'},
      near: [lat, lng],
      maxDistance: 3 / km, // around 3 kms
      limit: limit

    }, function(err, data) {
      res.send(data.results);
    });
  });

  server.post('/api/issues', function(req, res) {
    // issues.insert();
  });
};

