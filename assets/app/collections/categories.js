define([
  'backbone'

], function(
  Backbone

) {
  return new Backbone.Collection([
    {
      id: 'raponazo',
      name: 'Raponazo'
    },

    {
      id: 'atraco',
      name: 'Atraco'
    },

    {
      id: 'residencia',
      name: 'Robo residencia'
    },

    {
      id: 'vehiculo',
      name: 'Robo de vehiculo'
    },

    {
      id: 'paseo',
      name: 'Paseo millonario'
    },

    {
      id: 'otros',
      name: 'Otros'
    }
  ]);
});
