define([
  'marionette',

  'utils/tpl',

  'views/categories/item'

], function(Marionette, tpl, Category) {

  return Marionette.CompositeView.extend({
    template: tpl('categories/templates/list.html'),
    itemViewContainer: '.categories-menu',
    itemView: Category

  });

});
