define([
  'marionette',

  'utils/tpl'

], function(Marionette, tpl) {

  return Marionette.CompositeView.extend({
    template: tpl('categories/templates/list.html')
  });

});
