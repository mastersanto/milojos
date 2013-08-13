define([
  'marionette',

  'utils/tpl'

], function(Marionette, tpl) {

  return Marionette.CompositeView.extend({
    template: tpl('filters/templates/list.html')
  });

});
