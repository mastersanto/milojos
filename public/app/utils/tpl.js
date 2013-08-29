define(function(){
  var templatesURL = 'public/app/views/';

  return function(template) {
    var url = templatesURL + template;
    return window['JST'][url];
  };
});
