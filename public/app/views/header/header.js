define([
  'marionette',

  'utils/tpl'

], function(
  Marionette,

  tpl

  ) {

  return Marionette.ItemView.extend({
    template: tpl('header/templates/header.html'),
    events: {
      'touchstart #filters-btn' : 'toogleFilters',
      'touchstart #settings-btn' : 'toogleSettings'
    },
    toogleFilters: function() {
      $('#wrapper').toggleClass('to-right');
      $('#filters-wrapper').toggleClass('hide');
    },
    toogleSettings: function() {
      $('#wrapper').toggleClass('to-left');
      $('#settings-wrapper').toggleClass('hide');
    },
	  onRender: function(){
	  	// el
	  }
  });

});
