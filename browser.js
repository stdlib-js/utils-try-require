// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).tryRequire=r()}(this,(function(){"use strict";var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var j,g="function"==typeof Symbol?Symbol.toStringTag:"";j=b()?function(t){var r,e,n,o,i;if(null==t)return d.call(t);e=t[g],i=g,r=null!=(o=t)&&v.call(o,i);try{t[g]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[g]=e:delete t[g],n}:function(t){return d.call(t)};var _=j,m=Boolean.prototype.toString;var w=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function O(t){return y(t)||h(t)}function S(){return new Function("return this;")()}p(O,"isPrimitive",y),p(O,"isObject",h);var E="object"==typeof self?self:null,P="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof A?A:null;var B=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(P)return P;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),q=B.document&&B.document.childNodes,x=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C,R=/^\s*function\s*([^(]*)/i;p(k,"REGEXP",R),C=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};var V=C;function F(t){return null!==t&&"object"==typeof t}var G=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(F);function L(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=R.exec(n.toString()))return r[1]}return F(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(F,"isObjectLikeArray",G);var M="function"==typeof t||"object"==typeof x||"function"==typeof q?function(t){return L(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?L(t).toLowerCase():r};var N,D,I=Object.getPrototypeOf;D=Object.getPrototypeOf,N="function"===M(D)?I:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===_(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=N;function U(t){return null==t?null:(t=Object(t),J(t))}return function(t){try{return function(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(t)}catch(t){return function(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===_(t))return!0;t=U(t)}return!1}(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}}));
//# sourceMappingURL=browser.js.map
