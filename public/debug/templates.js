this["JST"] = this["JST"] || {};

this["JST"]["public/app/views/categories/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="' +
((__t = ( id )) == null ? '' : __t) +
'" class="category-item ' +
((__t = ( id )) == null ? '' : __t) +
'-btn"><span class="icon-' +
((__t = ( id )) == null ? '' : __t) +
'"></span>' +
((__t = ( name )) == null ? '' : __t) +
'</a>\n';

}
return __p
};

this["JST"]["public/app/views/categories/templates/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="report-menu">\n  <li><a href="#" class="btn green">Reportar</a>\n    <ul class="categories-menu"></ul>\n  </li>\n</ul>\n';

}
return __p
};

this["JST"]["public/app/views/filters/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#">' +
((__t = ( name )) == null ? '' : __t) +
'</a>\n';

}
return __p
};

this["JST"]["public/app/views/filters/templates/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>Filter by</h3>\n<ul id="filters-list" class="menu"></ul>\n';

}
return __p
};

this["JST"]["public/app/views/header/templates/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button id="filters-btn">Filters</button>\n<input type="search" name="search" id="search-input" placeholder="search">\n<button id="settings-btn">Settings</button>\n';

}
return __p
};

this["JST"]["public/app/views/map/templates/map.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n';

}
return __p
};

this["JST"]["public/app/views/settings/templates/menu.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>Settings</h3>\n<ul id="settings-list" class="menu">\n  <li><a href="#">Mi perfil</a></li>\n  <li><a href="#">Mis reportes</a></li>\n  <li><a href="#">Mis Angeles Guardianes</a></li>\n  <li><a href="#">FAQ</a></li>\n  <li><a href="#">About</a></li>\n  <li><a href="#">Log out</a></li>\n</ul>\n';

}
return __p
};