"use strict"
define("navbar/app",["exports","ember-resolver","ember-load-initializers","navbar/config/environment","single-spa-ember"],(function(t,e,n,r,o){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()
return function(){var n,r=p(t)
if(e){var o=p(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return c(this,n)}}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{value:!0}),t.unmount=t.mount=t.bootstrap=t.default=void 0
var y=function(t){(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)})(o,Ember.Application)
var n=f(o)
function o(){var t
u(this,o)
for(var i=arguments.length,a=new Array(i),f=0;f<i;f++)a[f]=arguments[f]
return s(l(t=n.call.apply(n,[this].concat(a))),"modulePrefix",r.default.modulePrefix),s(l(t),"podModulePrefix",r.default.podModulePrefix),s(l(t),"Resolver",e.default),t}return o}()
t.default=y,(0,n.default)(y,r.default.modulePrefix)
var b=(0,o.default)({App:y,appName:"navbar",createOpts:{rootElement:"#navbar"}}),d=b.bootstrap
t.bootstrap=d
var m=b.mount
t.mount=m
var v=b.unmount
t.unmount=v})),define("navbar/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.default}})})),define("navbar/helpers/app-version",["exports","navbar/config/environment","ember-cli-app-version/utils/regexp"],(function(t,e,n){function r(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e.default.APP.version,i=r.versionOnly||r.hideSha,u=r.shaOnly||r.hideVersion,a=null
return i&&(r.showExtended&&(a=o.match(n.versionExtendedRegExp)),a||(a=o.match(n.versionRegExp))),u&&(a=o.match(n.shaRegExp)),a?a[0]:o}Object.defineProperty(t,"__esModule",{value:!0}),t.appVersion=r,t.default=void 0
var o=Ember.Helper.helper(r)
t.default=o})),define("navbar/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","navbar/config/environment"],(function(t,e,n){var r,o
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version)
var i={name:"App Version",initialize:(0,e.default)(r,o)}
t.default=i})),define("navbar/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var t=arguments[1]||arguments[0]
t.register("container-debug-adapter:main",e.default),t.inject("container-debug-adapter:main","namespace","application:main")}}
t.default=n})),define("navbar/initializers/export-application-global",["exports","navbar/config/environment"],(function(t,e){function n(){var t=arguments[1]||arguments[0]
if(!1!==e.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=e.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(e.default.modulePrefix),n[r]||(n[r]=t,t.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(t,"__esModule",{value:!0}),t.initialize=n,t.default=void 0
var r={name:"export-application-global",initialize:n}
t.default=r})),define("navbar/router",["exports","navbar/config/environment"],(function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()
return function(){var n,r=f(t)
if(e){var o=f(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var l=function(t){(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)})(u,Ember.Router)
var n=i(u)
function u(){var t
r(this,u)
for(var o=arguments.length,i=new Array(o),f=0;f<o;f++)i[f]=arguments[f]
return c(a(t=n.call.apply(n,[this].concat(i))),"location",e.default.locationType),c(a(t),"rootURL",e.default.rootURL),t}return u}()
t.default=l,l.map((function(){this.route("people"),this.route("planets")}))})),define("navbar/routes/application",["exports"],(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()
return function(){var n,r=u(t)
if(e){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}(t):n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=function(t){(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)})(i,Ember.Route)
var e=o(i)
function i(){return n(this,i),e.apply(this,arguments)}return i}()
t.default=a})),define("navbar/routes/index",["exports"],(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()
return function(){var n,r=u(t)
if(e){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}(t):n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=function(t){(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)})(i,Ember.Route)
var e=o(i)
function i(){return n(this,i),e.apply(this,arguments)}return i}()
t.default=a})),define("navbar/routes/people",["exports"],(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()
return function(){var n,r=u(t)
if(e){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}(t):n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=function(t){(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)})(i,Ember.Route)
var e=o(i)
function i(){return n(this,i),e.apply(this,arguments)}return i}()
t.default=a})),define("navbar/routes/planets",["exports"],(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()
return function(){var n,r=u(t)
if(e){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}(t):n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=function(t){(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)})(i,Ember.Route)
var e=o(i)
function i(){return n(this,i),e.apply(this,arguments)}return i}()
t.default=a})),define("navbar/templates/application",["exports"],(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var e=Ember.HTMLBars.template({id:"UIivdp5M",block:'{"symbols":[],"statements":[[2," "],[10,"div"],[14,1,"nav-wrapper"],[14,0,"h-16 flex items-center justify-between px-6 bg-burnt-ember text-white"],[12],[2,"\\n      "],[10,"div"],[14,0,"flex items-center justify-between"],[12],[2,"\\n        "],[10,"span"],[14,0,"px-6 font-bold"],[12],[2,"Ember Micro-Frontends"],[13],[2,"\\n        "],[8,"link-to",[[24,0,"p-6"]],[["@route"],["index"]],[["default"],[{"statements":[[2,"Home"]],"parameters":[]}]]],[2," \\n        "],[8,"link-to",[[24,0,"p-6"]],[["@route"],["people"]],[["default"],[{"statements":[[2,"People"]],"parameters":[]}]]],[2," \\n        "],[8,"link-to",[[24,0,"p-6"]],[["@route"],["planets"]],[["default"],[{"statements":[[2,"Planets"]],"parameters":[]}]]],[2," \\n      "],[13],[2,"\\n      "],[10,"div"],[14,0,"flex items-center justify-between"],[12],[2,"\\n        "],[10,"a"],[14,6,"https://github.com/ember-micro-frontends"],[14,0,"externalLink"],[12],[2,"\\n          Github project\\n        "],[13],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,"\\n"]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"navbar/templates/application.hbs"}})
t.default=e})),define("navbar/templates/index",["exports"],(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var e=Ember.HTMLBars.template({id:"QomC8tZ+",block:'{"symbols":[],"statements":[],"hasEval":false,"upvars":[]}',meta:{moduleName:"navbar/templates/index.hbs"}})
t.default=e})),define("navbar/templates/loading",["exports"],(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var e=Ember.HTMLBars.template({id:"2qFhaoNh",block:'{"symbols":[],"statements":[[10,"h1"],[12],[2,"Loading..."],[13],[2,"\\n"]],"hasEval":false,"upvars":[]}',meta:{moduleName:"navbar/templates/loading.hbs"}})
t.default=e})),define("navbar/config/environment",[],(function(){var t={default:{modulePrefix:"navbar",environment:"production",rootURL:"/",locationType:"history",EmberENV:{FEATURES:{},EXTEND_PROTOTYPES:{Date:!1,String:!1},_APPLICATION_TEMPLATE_WRAPPER:!1,_DEFAULT_ASYNC_OBSERVERS:!0,_JQUERY_INTEGRATION:!1,_TEMPLATE_ONLY_GLIMMER_COMPONENTS:!0},APP:{name:"navbar",version:"0.0.0+5e541d10"},exportApplicationGlobal:!1}}
return Object.defineProperty(t,"__esModule",{value:!0}),t}))
