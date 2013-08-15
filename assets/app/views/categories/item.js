define([
  'marionette',

  'utils/tpl'

], function(Marionette, tpl) {

  return Marionette.ItemView.extend({
    template: tpl('categories/templates/item.html'),
    tagName: 'li'
  });

});
