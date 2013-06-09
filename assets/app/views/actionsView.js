define([
  'underscore',
  'backbone',
  'collections/markersCollection'],
  function(
    _,
    Backbone,
    MarkersCollection) {

  return Backbone.View.extend({

    events: {
        'click #reportsBtn':'viewReports',
        'click #reportBtn':'addReport'
    },

    el: '#actions',

    initialize: function(){
    },

    viewReports: function (e) {
      var button = $(e.currentTarget),
          submenu = button.next('.submenu');

      this.$('.mainAction').removeClass('active');
      button.addClass('active');
      this.$('.submenu').addClass('hidden');
      submenu.removeClass('hidden');
    },

    addReport: function (e) {
      var button = $(e.currentTarget),
          submenu = button.next('.submenu');

      $('.mainAction').removeClass('active');
      button.addClass('active');
      $('.submenu').hide();
      submenu.show();
    }

  });
});
