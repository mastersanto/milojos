define([
  'marionette',

  'utils/tpl'

], function(Marionette, tpl) {

  return Marionette.ItemView.extend({
    template: tpl('map/templates/map.html')
  });

});
