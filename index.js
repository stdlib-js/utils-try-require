// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).tryRequire=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,e,r.get),p&&c&&c.call(t,e,r.set),t};var a=r;function y(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var j,_="function"==typeof Symbol?Symbol.toStringTag:"";j=b()?function(t){var e,r,n,o,u;if(null==t)return d.call(t);r=t[_],u=_,e=null!=(o=t)&&v.call(o,u);try{t[_]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[_]=r:delete t[_],n}:function(t){return d.call(t)};var g=j,w=Boolean.prototype.toString;var m=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(m?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function O(t){return p(t)||h(t)}function S(){return new Function("return this;")()}y(O,"isPrimitive",p),y(O,"isObject",h);var E="object"==typeof self?self:null,A="object"==typeof window?window:null,P="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof P?P:null;var B=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),x=B.document&&B.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C,F=/^\s*function\s*([^(]*)/i;y(k,"REGEXP",F),C=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};var G=C;function L(t){return null!==t&&"object"==typeof t}var q=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!G(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(L);function M(t){var e,r,n,o;if(("Object"===(r=g(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=F.exec(n.toString()))return e[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}y(L,"isObjectLikeArray",q);var N="function"==typeof t||"object"==typeof V||"function"==typeof x?function(t){return M(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?M(t).toLowerCase():e};var R,I,J=Object.getPrototypeOf;I=Object.getPrototypeOf,R="function"===N(I)?J:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var U=R;function X(t){return null==t?null:(t=Object(t),U(t))}return function(t){try{return require(t)}catch(t){return function(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===g(t))return!0;t=X(t)}return!1}(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}}));
//# sourceMappingURL=index.js.map
