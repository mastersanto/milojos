require.config({

  deps: [
    'start'
  ],

  paths: {
    jquery: "../components/zepto/zepto",
    underscore: "../components/underscore-amd/underscore",
    backbone: "../components/backbone-amd/backbone",
    marionette: "../components/backbone.marionette/lib/core/amd/backbone.marionette",
    'backbone.wreqr': '../components/backbone.wreqr/lib/amd/backbone.wreqr',
    'backbone.babysitter': '../components/backbone.babysitter/lib/amd/backbone.babysitter',
    'simply-deferred': '../components/simply-deferred/deferred'
  },

  shim: {
    jquery: {
      deps: ['simply-deferred'],
      exports: "$"
    }
  }
});
