define([
  'marionette',

  'utils/tpl',

  'views/filters/item'

], function(Marionette, tpl, Filter) {

  return Marionette.CompositeView.extend({
    template: tpl('filters/templates/list.html'),
    itemViewContainer: '#filters-list',
    itemView: Filter

  });
});
