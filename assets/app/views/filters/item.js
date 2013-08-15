define([
  'marionette',

  'utils/tpl'

], function(Marionette, tpl) {

  return Marionette.ItemView.extend({
    template: tpl('filters/templates/item.html'),
    tagname: 'li'
  });

});
