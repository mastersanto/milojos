define([
  'underscore',
  'backbone',
  'collections/markersCollection'
  ],
  function(
    _,
    Backbone,
    MarkersCollection) {

  return Backbone.View.extend({

    events: {
      'click #reportsBtn':'viewReports',
      'click #reportBtn':'addReport',
      'click .report-btn' : 'addIssueClick'
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

      this.$('.mainAction').removeClass('active');
      button.addClass('active');
      this.$('.submenu').addClass('hidden');
      submenu.removeClass('hidden');
    },

    addIssueClick: function(e) {
      e.preventDefault();
      var type = $(e.currentTarget).attr('data-type');
      Backbone.history.navigate('#issue/report/' + type , {trigger: true});
    }
  });
});
