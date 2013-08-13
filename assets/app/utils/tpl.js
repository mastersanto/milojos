define(function(){
  var templatesURL = 'assets/app/views/';

  return function(template) {
    var url = templatesURL + template;
    return window['JST'][url];
  };
});
