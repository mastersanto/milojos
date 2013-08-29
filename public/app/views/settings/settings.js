define([
  'marionette',

  'utils/tpl'

], function(
  Marionette,

  tpl

  ) {

  return Marionette.ItemView.extend({
    template: tpl('settings/templates/menu.html')
  });

});
