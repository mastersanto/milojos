define([
  'marionette',

  'utils/tpl'

], function(Marionette, tpl) {

  return Marionette.ItemView.extend({
    template: tpl('categories/templates/item.html'),
    tagName: 'li',

    events: {
      'touchstart .category-item': 'onCategoryTouch'
    },

    onCategoryTouch: function(evt) {
      evt.preventDefault();
    }
  });

});
