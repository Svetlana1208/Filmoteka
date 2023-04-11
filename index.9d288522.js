!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),i.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return s.apply(null,arguments)};var r,n=(r=i("gD1JV"))&&r.__esModule?r:{default:r};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,t,r){return(s=a()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),i.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),i.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=a(i("ds8z5")),n=a(i("l5bVx"));function a(e){return e&&e.__esModule?e:{default:e}}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=i("fVNic"))&&r.__esModule?r:{default:r}}));var a,s=i("bpxeT"),o=i("2TvXO"),u=i("7basD"),c=(i("7basD"),s=i("bpxeT"),o=i("2TvXO"),u=i("7basD"),{}),l=(a=e(s)(e(o).mark((function t(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(u.key,"&language=en-US"));case 2:return r=e.sent,e.next=5,r.json();case 5:return f(e.sent),e.abrupt("return",c);case 8:case"end":return e.stop()}}),t)}))),function(){return a.apply(this,arguments)});function f(e){var t=!0,r=!1,n=void 0;try{for(var i,a=e.genres[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value;c[s.id]=s.name}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}var d=l,h=i("5g02X"),p=i("5xtVg"),v=(s=i("bpxeT"),{});Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var m={};function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,r){t&&g(e.prototype,t);r&&g(e,r);return e};var y=i("hKHmD"),k=i("8nrFW"),b=(o=i("2TvXO"),s=i("bpxeT"),{});Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e,t){return w.default(e)||_.default(e,t)||x.default(e,t)||I.default()};var w=T(i("8slrw")),_=T(i("7AJDX")),I=T(i("ifqQW")),x=T(i("auk6i"));function T(e){return e&&e.__esModule?e:{default:e}}k=i("8nrFW"),o=i("2TvXO");var E=i("ds8z5"),S={};Object.defineProperty(S,"__esModule",{value:!0}),S.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P.default(e,t)};var O,P=(O=i("gD1JV"))&&O.__esModule?O:{default:O};k=i("8nrFW");var R={};Object.defineProperty(R,"__esModule",{value:!0}),R.default=function(e){return M(e)};var C=D(i("ge8co")),A=D(i("cZGw3")),N=D(i("fVNic")),L=D(i("gD1JV"));function D(e){return e&&e.__esModule?e:{default:e}}function M(e){var t="function"==typeof Map?new Map:void 0;return M=function(e){if(null===e||!A.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return C.default(e,arguments,N.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),L.default(r,e)},M(e)}var U={};Object.defineProperty(U,"__esModule",{value:!0}),U.default=function(e){var t=j.default();return function(){var r,n=F.default(e);if(t){var i=F.default(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return V.default(this,r)}};var j=H(i("aTHs7")),F=H(i("fVNic")),V=H(i("jmhxu"));function H(e){return e&&e.__esModule?e:{default:e}}var B=i("6qd2L"),z=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},W={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],s=i+1<e.length,o=s?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|o>>4,d=(15&o)<<2|c>>6,h=63&c;u||(h=64,s||(d=64)),n.push(r[l],r[f],r[d],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(z(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{var o=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],s=i<e.length?r[e.charAt(i)]:0,o=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==s||null==o||null==u)throw new q;var c=a<<2|s>>4;if(n.push(c),64!==o){var l=s<<4&240|o>>2;if(n.push(l),64!==u){var f=o<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},q=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(){var t;return e(v)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return n}(e(R)(Error)),K=function(e){return function(e){var t=z(e);return W.encodeByteArray(t,!0)}(e).replace(/\./g,"")},G=function(e){try{return W.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var J=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},X=function(){try{return J()||function(){if(void 0!==B&&void 0!==B.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&G(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},$=function(e){var t,r;return null===(r=null===(t=X())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},Y=function(){var e;return null===(e=X())||void 0===e?void 0:e.config},Q=function(e){var t;return null===(t=X())||void 0===t?void 0:t["_".concat(e)]},Z=function(){"use strict";function t(){var r=this;e(v)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(m)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ee(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function te(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var re=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(t,i,a){var s;return e(v)(this,n),(s=r.call(this,i)).code=t,s.customData=a,s.name="FirebaseError",Object.setPrototypeOf(e(E)(s),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(E)(s),ne.prototype.create),s}return n}(e(R)(Error)),ne=function(){"use strict";function t(r,n,i){e(v)(this,t),this.service=r,this.serviceName=n,this.errors=i}return e(m)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),s=this.errors[e],o=s?ie(s,i):"Error",u="".concat(this.serviceName,": ").concat(o," (").concat(a,")."),c=new re(a,u,i);return c}}]),t}();function ie(e,t){return e.replace(ae,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var ae=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function oe(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,s=void 0;try{for(var o,u=r[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(ue(l)&&ue(f)){if(!oe(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}var d=!0,h=!1,p=void 0;try{for(var v,m=n[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){h=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(h)throw p}}return!0}function ue(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=function(t,n){var i=e(b)(n.value,2),a=i[0],s=i[1];Array.isArray(s)?s.forEach((function(e){r.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(a)+"="+encodeURIComponent(s))},u=Object.entries(t)[Symbol.iterator]();!(n=(s=u.next()).done);n=!0)o(0,s)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r.length?"&"+r.join("&"):""}function le(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=e(b)(t.split("="),2),i=n[0],a=n[1];r[decodeURIComponent(i)]=decodeURIComponent(a)}})),r}function fe(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de=function(){"use strict";function t(r,n){var i=this;e(v)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return e(m)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var o=a.value;if(o in e&&"function"==typeof e[o])return!0}}catch(e){n=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=he),void 0===n.error&&(n.error=he),void 0===n.complete&&(n.complete=he);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function he(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pe(e){return e&&e._delegate?e._delegate:e}var ve=function(){"use strict";function t(r,n,i){e(v)(this,t),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(m)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),me="[DEFAULT]",ge=function(){"use strict";function t(r,n){e(v)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(m)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new Z;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var a,s=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var o=e(b)(a.value,2),u=o[0],c=o[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(k)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(k)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),s=!0,o=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var f=e(b)(c.value,2),d=f[0],h=f[1],p=this.normalizeInstanceIdentifier(d);i===p&&h.resolve(a)}}catch(e){o=!0,u=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var s,o=r[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var u=s.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===me?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;return this.component?this.component.multipleInstances?e:me:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,ke,be=function(){"use strict";function t(r){e(v)(this,t),this.name=r,this.providers=new Map}return e(m)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new ge(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),we=(y=i("hKHmD"),k=i("8nrFW"),[]);(ke=ye||(ye={}))[ke.DEBUG=0]="DEBUG",ke[ke.VERBOSE=1]="VERBOSE",ke[ke.INFO=2]="INFO",ke[ke.WARN=3]="WARN",ke[ke.ERROR=4]="ERROR",ke[ke.SILENT=5]="SILENT";var _e,Ie={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},xe=ye.INFO,Te=(_e={},e(y)(_e,ye.DEBUG,"log"),e(y)(_e,ye.VERBOSE,"log"),e(y)(_e,ye.INFO,"info"),e(y)(_e,ye.WARN,"warn"),e(y)(_e,ye.ERROR,"error"),_e),Ee=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var s;if(!(r<t.logLevel)){var o=(new Date).toISOString(),u=Te[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(s=console)[u].apply(s,["[".concat(o,"]  ").concat(t.name,":")].concat(e(k)(i)))}},Se=function(){"use strict";function t(r){e(v)(this,t),this.name=r,this._logLevel=xe,this._logHandler=Ee,this._userLogHandler=null,we.push(this)}return e(m)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ye))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Ie[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ye.DEBUG].concat(e(k)(r))),this._logHandler.apply(this,[this,ye.DEBUG].concat(e(k)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ye.VERBOSE].concat(e(k)(r))),this._logHandler.apply(this,[this,ye.VERBOSE].concat(e(k)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ye.INFO].concat(e(k)(r))),this._logHandler.apply(this,[this,ye.INFO].concat(e(k)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ye.WARN].concat(e(k)(r))),this._logHandler.apply(this,[this,ye.WARN].concat(e(k)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ye.ERROR].concat(e(k)(r))),this._logHandler.apply(this,[this,ye.ERROR].concat(e(k)(r)))}}]),t}();s=i("bpxeT");var Oe={};Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Pe.default(e,t,r[t])}))}return e};var Pe=function(e){return e&&e.__esModule?e:{default:e}}(i("hKHmD"));var Re,Ce;k=i("8nrFW"),o=i("2TvXO"),k=i("8nrFW");var Ae=new WeakMap,Ne=new WeakMap,Le=new WeakMap,De=new WeakMap,Me=new WeakMap;var Ue={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Ne.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Le.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ve(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function je(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ce||(Ce=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(He(this),r),Ve(Ae.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return Ve(t.apply(He(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var s,o=(s=t).call.apply(s,[He(this),r].concat(e(k)(i)));return Le.set(o,r.sort?r.sort():[r]),Ve(o)}}function Fe(e){return"function"==typeof e?je(e):(e instanceof IDBTransaction&&function(e){if(!Ne.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ne.set(e,t)}}(e),t=e,(Re||(Re=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Ue):e);var t}function Ve(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Ve(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Ae.set(e,t)})).catch((function(){})),Me.set(r,t),r;var t,r;if(De.has(e))return De.get(e);var n=Fe(e);return n!==e&&(De.set(e,n),Me.set(n,e)),n}var He=function(e){return Me.get(e)};function Be(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,s=r.terminated,o=indexedDB.open(e,t),u=Ve(o);return i&&o.addEventListener("upgradeneeded",(function(e){i(Ve(o.result),e.oldVersion,e.newVersion,Ve(o.transaction))})),n&&o.addEventListener("blocked",(function(){return n()})),u.then((function(e){s&&e.addEventListener("close",(function(){return s()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var ze=["get","getKey","getAll","getAllKeys","count"],We=["put","add","delete","clear"],qe=new Map;function Ke(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(qe.get(r))return qe.get(r);var n=r.replace(/FromIndex$/,""),i=r!==n,a=We.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(a||ze.includes(n))){var u=function(){var t=e(s)(e(o).mark((function t(r){var s,u,c,l,f,d,h=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(s=h.length,u=new Array(s>1?s-1:0),c=1;c<s;c++)u[c-1]=h[c];return f=this.transaction(r,a?"readwrite":"readonly"),d=f.store,i&&(d=d.index(u.shift())),t.next=7,Promise.all([(l=d)[n].apply(l,e(k)(u)),a&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();return qe.set(r,u),u}}}Ue=function(t){return e(Oe)({},t,{get:function(e,r,n){return Ke(e,r)||t.get(e,r,n)},has:function(e,r){return!!Ke(e,r)||t.has(e,r)}})}(Ue);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ge=function(){"use strict";function t(r){e(v)(this,t),this.container=r}return e(m)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Je,Xe,$e="@firebase/app",Ye="0.9.7",Qe=new Se("@firebase/app"),Ze="[DEFAULT]",et=(Je={},e(y)(Je,$e,"fire-core"),e(y)(Je,"@firebase/app-compat","fire-core-compat"),e(y)(Je,"@firebase/analytics","fire-analytics"),e(y)(Je,"@firebase/analytics-compat","fire-analytics-compat"),e(y)(Je,"@firebase/app-check","fire-app-check"),e(y)(Je,"@firebase/app-check-compat","fire-app-check-compat"),e(y)(Je,"@firebase/auth","fire-auth"),e(y)(Je,"@firebase/auth-compat","fire-auth-compat"),e(y)(Je,"@firebase/database","fire-rtdb"),e(y)(Je,"@firebase/database-compat","fire-rtdb-compat"),e(y)(Je,"@firebase/functions","fire-fn"),e(y)(Je,"@firebase/functions-compat","fire-fn-compat"),e(y)(Je,"@firebase/installations","fire-iid"),e(y)(Je,"@firebase/installations-compat","fire-iid-compat"),e(y)(Je,"@firebase/messaging","fire-fcm"),e(y)(Je,"@firebase/messaging-compat","fire-fcm-compat"),e(y)(Je,"@firebase/performance","fire-perf"),e(y)(Je,"@firebase/performance-compat","fire-perf-compat"),e(y)(Je,"@firebase/remote-config","fire-rc"),e(y)(Je,"@firebase/remote-config-compat","fire-rc-compat"),e(y)(Je,"@firebase/storage","fire-gcs"),e(y)(Je,"@firebase/storage-compat","fire-gcs-compat"),e(y)(Je,"@firebase/firestore","fire-fst"),e(y)(Je,"@firebase/firestore-compat","fire-fst-compat"),e(y)(Je,"fire-js","fire-js"),e(y)(Je,"firebase","fire-js-all"),Je),tt=new Map,rt=new Map;function nt(e,t){try{e.container.addComponent(t)}catch(r){Qe.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function it(e){var t=e.name;if(rt.has(t))return Qe.debug("There were multiple attempts to register component ".concat(t,".")),!1;rt.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,s=tt.values()[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){nt(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return!0}function at(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var st=(Xe={},e(y)(Xe,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(y)(Xe,"bad-app-name","Illegal App name: '{$appName}"),e(y)(Xe,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(y)(Xe,"app-deleted","Firebase App named '{$appName}' already deleted"),e(y)(Xe,"no-options","Need to provide options, when not being deployed to hosting via source."),e(y)(Xe,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(y)(Xe,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(y)(Xe,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(y)(Xe,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(y)(Xe,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(y)(Xe,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Xe),ot=new ne("app","Firebase",st),ut=function(){"use strict";function t(r,n,i){var a=this;e(v)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ve("app",(function(){return a}),"PUBLIC"))}return e(m)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw ot.create("app-deleted",{appName:this._name})}}]),t}(),ct="9.19.1";function lt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;if("object"!=typeof t){var n=t;t={name:n}}var i=Object.assign({name:Ze,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw ot.create("bad-app-name",{appName:String(a)});if(r||(r=Y()),!r)throw ot.create("no-options");var s=tt.get(a);if(s){if(oe(r,s.options)&&oe(i,s.config))return s;throw ot.create("duplicate-app",{appName:a})}var o=new be(a),u=!0,c=!1,l=void 0;try{for(var f,d=rt.values()[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=f.value;o.addComponent(h)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var p=new ut(r,i,o);return tt.set(a,p),p}function ft(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=tt.get(e);if(!t&&e===Ze)return lt();if(!t)throw ot.create("no-app",{appName:e});return t}function dt(e,t,r){var n,i=null!==(n=et[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){var o=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&o.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&s&&o.push("and"),s&&o.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Qe.warn(o.join(" "))}it(new ve("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ht="firebase-heartbeat-store",pt=null;function vt(){return pt||(pt=Be("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(ht)}}).catch((function(e){throw ot.create("idb-open",{originalErrorMessage:e.message})}))),pt}function mt(e){return gt.apply(this,arguments)}function gt(){return(gt=e(s)(e(o).mark((function t(r){var n,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,vt();case 3:return n=e.sent,e.abrupt("return",n.transaction(ht).objectStore(ht).get(bt(r)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof re?Qe.warn(e.t0.message):(i=ot.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Qe.warn(i.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function yt(e,t){return kt.apply(this,arguments)}function kt(){return(kt=e(s)(e(o).mark((function t(r,n){var i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,vt();case 3:return i=e.sent,a=i.transaction(ht,"readwrite"),s=a.objectStore(ht),e.next=8,s.put(n,bt(r));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof re?Qe.warn(e.t0.message):(u=ot.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Qe.warn(u.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function bt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt=function(){"use strict";function t(r){var n=this;e(v)(this,t),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Tt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(m)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=_t(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n,i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=_t(),i=It(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,s=i.unsentEntries,u=K(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(s.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=s,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function _t(){return(new Date).toISOString().substring(0,10)}function It(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,s=void 0;try{for(var o,u=function(e,i){var a=i.value,s=r.find((function(e){return e.agent===a.agent}));if(s){if(s.dates.push(a.date),Et(r)>t)return s.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),Et(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(o=c.next()).done);i=!0){var l=u(c,o);if("break"===l)break}}catch(e){a=!0,s=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw s}}return{heartbeatsToSend:r,unsentEntries:n}}var xt,Tt=function(){"use strict";function t(r){e(v)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(m)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(s)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,mt(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return a=e.sent,e.abrupt("return",yt(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i,a;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return a=n.sent,n.abrupt("return",yt(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(k)(a.heartbeats).concat(e(k)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function Et(e){return K(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt="",it(new ve("platform-logger",(function(e){return new Ge(e)}),"PRIVATE")),it(new ve("heartbeat",(function(e){return new wt(e)}),"PRIVATE")),dt($e,Ye,xt),dt($e,Ye,"esm2017"),dt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
dt("firebase","9.19.1","app");E=i("ds8z5"),s=i("bpxeT"),y=i("hKHmD");var St={};Object.defineProperty(St,"__esModule",{value:!0}),St.default=function(e,t,r){return Pt(e,t,r)};var Ot=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Pt(e,t,r){return(Pt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=Ot.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var Rt=i("fVNic");k=i("8nrFW"),o=i("2TvXO");function Ct(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function At(){return e(y)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Nt=At,Lt=new ne("auth","Firebase",At()),Dt=new Se("@firebase/auth");function Mt(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;Dt.logLevel<=ye.ERROR&&(a=Dt).error.apply(a,["Auth (".concat(ct,"): ").concat(t)].concat(e(k)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw Vt.apply(void 0,[t].concat(e(k)(n)))}function jt(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return Vt.apply(void 0,[t].concat(e(k)(n)))}function Ft(t,r,n){var i=Object.assign(Object.assign({},Nt()),e(y)({},r,n));return new ne("auth","Firebase",i).create(r,{appName:t.name})}function Vt(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;if("string"!=typeof t){var s,o=n[0],u=e(k)(n.slice(1));return u[0]&&(u[0].appName=t.name),(s=t._errorFactory).create.apply(s,[o].concat(e(k)(u)))}return(a=Lt).create.apply(a,[t].concat(e(k)(n)))}function Ht(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!t)throw Vt.apply(void 0,[r].concat(e(k)(i)))}function Bt(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Mt(t),new Error(t)}function zt(e,t){e||Bt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt=new Map;function qt(e){zt(e instanceof Function,"Expected a class definition");var t=Wt.get(e);return t?(zt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wt.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){var r=at(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(oe(r.getOptions(),null!=t?t:{}))return n;Ut(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Jt(){return"http:"===Xt()||"https:"===Xt()}function Xt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Jt()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yt=function(){"use strict";function t(r,n){e(v)(this,t),this.shortDelay=r,this.longDelay=n,zt(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(m)(t,[{key:"get",value:function(){return $t()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){zt(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zt,er=function(){"use strict";function t(){e(v)(this,t)}return e(m)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),tr=(Zt={},e(y)(Zt,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(y)(Zt,"MISSING_CUSTOM_TOKEN","internal-error"),e(y)(Zt,"INVALID_IDENTIFIER","invalid-email"),e(y)(Zt,"MISSING_CONTINUE_URI","internal-error"),e(y)(Zt,"INVALID_PASSWORD","wrong-password"),e(y)(Zt,"MISSING_PASSWORD","missing-password"),e(y)(Zt,"EMAIL_EXISTS","email-already-in-use"),e(y)(Zt,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(y)(Zt,"INVALID_IDP_RESPONSE","invalid-credential"),e(y)(Zt,"INVALID_PENDING_TOKEN","invalid-credential"),e(y)(Zt,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(y)(Zt,"MISSING_REQ_TYPE","internal-error"),e(y)(Zt,"EMAIL_NOT_FOUND","user-not-found"),e(y)(Zt,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(y)(Zt,"EXPIRED_OOB_CODE","expired-action-code"),e(y)(Zt,"INVALID_OOB_CODE","invalid-action-code"),e(y)(Zt,"MISSING_OOB_CODE","internal-error"),e(y)(Zt,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(y)(Zt,"INVALID_ID_TOKEN","invalid-user-token"),e(y)(Zt,"TOKEN_EXPIRED","user-token-expired"),e(y)(Zt,"USER_NOT_FOUND","user-token-expired"),e(y)(Zt,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(y)(Zt,"INVALID_CODE","invalid-verification-code"),e(y)(Zt,"INVALID_SESSION_INFO","invalid-verification-id"),e(y)(Zt,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(y)(Zt,"MISSING_SESSION_INFO","missing-verification-id"),e(y)(Zt,"SESSION_EXPIRED","code-expired"),e(y)(Zt,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(y)(Zt,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(y)(Zt,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(y)(Zt,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(y)(Zt,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(y)(Zt,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(y)(Zt,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(y)(Zt,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(y)(Zt,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(y)(Zt,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(y)(Zt,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Zt),rr=new Yt(3e4,6e4);function nr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function ir(e,t,r,n){return ar.apply(this,arguments)}function ar(){return ar=e(s)(e(o).mark((function t(r,n,i,a){var u,c=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",sr(r,u,e(s)(e(o).mark((function t(){var s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},u={},a&&("GET"===n?u=a:s={body:JSON.stringify(a)}),c=ce(Object.assign({key:r.config.apiKey},u)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",er.fetch()(lr(r,r.config.apiHost,i,c),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},s)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),ar.apply(this,arguments)}function sr(e,t,r){return or.apply(this,arguments)}function or(){return(or=e(s)(e(o).mark((function t(r,n,i){var a,s,u,c,l,f,d,h,p;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,a=Object.assign(Object.assign({},tr),n),t.prev=2,s=new fr(r),t.next=6,Promise.race([i(),s.promise]);case 6:return u=t.sent,s.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw dr(r,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,f=e(b)(l.split(" : "),2),d=f[0],h=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){t.next=23;break}throw dr(r,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){t.next=27;break}throw dr(r,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){t.next=29;break}throw dr(r,"user-disabled",c);case 29:if(p=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!h){t.next=34;break}throw Ft(r,p,h);case 34:Ut(r,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof re)){t.next=41;break}throw t.t0;case 41:Ut(r,"network-request-failed",{message:String(t.t0)});case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function ur(e,t,r,n){return cr.apply(this,arguments)}function cr(){return cr=e(s)(e(o).mark((function t(r,n,i,a){var s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,ir(r,n,i,a,s);case 3:return"mfaPendingCredential"in(u=e.sent)&&Ut(r,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),cr.apply(this,arguments)}function lr(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?Qt(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var fr=function(){"use strict";function t(r){var n=this;e(v)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(jt(r.auth,"network-request-failed"))}),rr.get())}))}return e(m)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function dr(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=jt(e,t,n);return i.customData._tokenResponse=r,i}function hr(e,t){return pr.apply(this,arguments)}function pr(){return(pr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ir(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vr(e,t){return mr.apply(this,arguments)}function mr(){return(mr=e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ir(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(){return yr=e(s)(e(o).mark((function t(r){var n,i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],i=pe(r),e.next=4,i.getIdToken(n);case 4:return a=e.sent,Ht((s=br(a))&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"),u="object"==typeof s.firebase?s.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:s,token:a,authTime:gr(kr(s.auth_time)),issuedAtTime:gr(kr(s.iat)),expirationTime:gr(kr(s.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),yr.apply(this,arguments)}function kr(e){return 1e3*Number(e)}function br(t){var r=e(b)(t.split("."),3),n=r[0],i=r[1],a=r[2];if(void 0===n||void 0===i||void 0===a)return Mt("JWT malformed, contained fewer than 3 sections"),null;try{var s=G(i);return s?JSON.parse(s):(Mt("Failed to decode base64 JWT payload"),null)}catch(e){return Mt("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function wr(e,t){return _r.apply(this,arguments)}function _r(){return _r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r,n){var i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof re&&Ir(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),_r.apply(this,arguments)}function Ir(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr=function(){"use strict";function t(r){e(v)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(m)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(s)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(s)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}}]),t}(),Tr=function(){"use strict";function t(r,n){e(v)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(m)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e){return Sr.apply(this,arguments)}function Sr(){return(Sr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r){var n,i,a,s,u,c,l,f,d,h,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return a=e.sent,e.next=7,wr(r,vr(i,{idToken:a}));case 7:Ht(null==(s=e.sent)?void 0:s.users.length,i,"internal-error"),u=s.users[0],r._notifyReloadListener(u),c=(null===(n=u.providerUserInfo)||void 0===n?void 0:n.length)?Rr(u.providerUserInfo):[],l=Pr(r.providerData,c),f=r.isAnonymous,d=!(r.email&&u.passwordHash||(null==l?void 0:l.length)),h=!!f&&d,p={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new Tr(u.createdAt,u.lastLoginAt),isAnonymous:h},Object.assign(r,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Or(){return(Or=e(s)(e(o).mark((function t(r){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=pe(r),e.next=3,Er(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Pr(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e(k)(n).concat(e(k)(r))}function Rr(e){return e.map((function(e){var t=e.providerId,r=Ct(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function Cr(e,t){return Ar.apply(this,arguments)}function Ar(){return(Ar=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r,n){var i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,sr(r,{},e(s)(e(o).mark((function t(){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ce({grant_type:"refresh_token",refresh_token:n}).slice(1),a=r.config,s=a.tokenApiHost,u=a.apiKey,c=lr(r,s,"/v1/token","key=".concat(u)),e.next=5,r._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",er.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nr=function(){"use strict";function t(){e(v)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(m)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Ht(e.idToken,"internal-error"),Ht(void 0!==e.idToken,"internal-error"),Ht(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Ht(r=br(t),"internal-error"),Ht(void 0!==r.exp,"internal-error"),Ht(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(s)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ht(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(s)(e(o).mark((function i(){var a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Cr(t,r);case 2:a=e.sent,s=a.accessToken,u=a.refreshToken,c=a.expiresIn,n.updateTokensAndExpiration(s,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return Bt("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,s=new t;return n&&(Ht("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Ht("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),a&&(Ht("number"==typeof a,"internal-error",{appName:e}),s.expirationTime=a),s}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(e,t){Ht("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Dr=function(){"use strict";function t(r){e(v)(this,t);var n=r.uid,i=r.auth,a=r.stsTokenManager,s=Ct(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?e(k)(s.providerData):[],this.metadata=new Tr(s.createdAt||void 0,s.lastLoginAt||void 0)}return e(m)(t,[{key:"getIdToken",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wr(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(Ht(i=e.sent,r.auth,"internal-error"),r.accessToken===i){e.next=9;break}return r.accessToken=i,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return yr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Or.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Ht(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){var r=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}},{key:"_onReload",value:function(e){Ht(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(s)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),a=!0),!r){e.next=5;break}return e.next=5,Er(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,wr(t,hr(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,i,a,s,o,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,d=null!==(i=r.email)&&void 0!==i?i:void 0,h=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,p=null!==(s=r.photoURL)&&void 0!==s?s:void 0,v=null!==(o=r.tenantId)&&void 0!==o?o:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,k=r.uid,b=r.emailVerified,w=r.isAnonymous,_=r.providerData,I=r.stsTokenManager;Ht(k&&I,e,"internal-error");var x=Nr.fromJSON(this.name,I);Ht("string"==typeof k,e,"internal-error"),Lr(f,e.name),Lr(d,e.name),Ht("boolean"==typeof b,e,"internal-error"),Ht("boolean"==typeof w,e,"internal-error"),Lr(h,e.name),Lr(p,e.name),Lr(v,e.name),Lr(m,e.name),Lr(g,e.name),Lr(y,e.name);var T=new t({uid:k,auth:e,email:d,emailVerified:b,displayName:f,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:v,stsTokenManager:x,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map((function(e){return Object.assign({},e)}))),m&&(T._redirectEventId=m),T}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)(e(o).mark((function a(){var s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new Nr).updateFromServerResponse(n),u=new t({uid:n.localId,auth:r,stsTokenManager:s,isAnonymous:i}),e.next=5,Er(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Mr=function(){"use strict";function t(){e(v)(this,t),this.type="NONE",this.storage={}}return e(m)(t,[{key:"_isAvailable",value:function(){return e(s)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(s)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mr.type="NONE";var Ur=Mr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var Fr=function(){"use strict";function t(r,n,i){e(v)(this,t),this.persistence=r,this.auth=n,this.userKey=i;var a=this.auth,s=a.config,o=a.name;this.fullUserKey=jr(this.userKey,s.apiKey,o),this.fullPersistenceKey=jr("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(m)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?Dr._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return i=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!i){e.next=10;break}return e.abrupt("return",r.setCurrentUser(i));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(s)(e(o).mark((function a(){var u,c,l,f,d,h,p,v,m,g,y,k,b;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new t(qt(Ur),r,i));case 2:return a.next=4,Promise.all(n.map(function(){var t=e(s)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=a.sent.filter((function(e){return e})),c=u[0]||qt(Ur),l=jr(i,r.config.apiKey,r.name),f=null,d=!0,h=!1,p=void 0,a.prev=9,v=n[Symbol.iterator]();case 11:if(d=(m=v.next()).done){a.next=29;break}return g=m.value,a.prev=13,a.next=16,g._get(l);case 16:if(!(y=a.sent)){a.next=22;break}return k=Dr._fromJSON(r,y),g!==c&&(f=k),c=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:d=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),h=!0,p=a.t1;case 35:a.prev=35,a.prev=36,d||null==v.return||v.return();case 38:if(a.prev=38,!h){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(b=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&b.length){a.next=46;break}return a.abrupt("return",new t(c,r,i));case 46:if(c=b[0],!f){a.next=50;break}return a.next=50,c._set(l,f.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var t=e(s)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===c){e.next=8;break}return e.prev=1,e.next=4,r._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(c,r,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Hr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Kr(t))return"Blackberry";if(Gr(t))return"Webos";if(Br(t))return"Safari";if((t.includes("chrome/")||zr(t))&&!t.includes("edge/"))return"Chrome";if(qr(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function Hr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/firefox\//i.test(e)}function Br(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/crios\//i.test(e)}function Wr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/iemobile/i.test(e)}function qr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/android/i.test(e)}function Kr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/blackberry/i.test(e)}function Gr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/webos/i.test(e)}function Jr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Xr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return Jr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function $r(){return((e=ee()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Yr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee();return Jr(e)||qr(e)||Gr(e)||Kr(e)||/windows phone/i.test(e)||Wr(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Vr(ee());break;case"Worker":t="".concat(Vr(ee()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(ct,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zr=function(){"use strict";function t(r){e(v)(this,t),this.auth=r,this.queue=[]}return e(m)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i,a,s,u,c,l,f,d,h,p,v,m,g;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,s=!1,u=void 0,e.prev=5,c=r.queue[Symbol.iterator]();case 7:if(a=(l=c.next()).done){e.next=15;break}return f=l.value,e.next=11,f(t);case 11:f.onAbort&&i.push(f.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),s=!0,u=e.t0;case 21:e.prev=21,e.prev=22,a||null==c.return||c.return();case 24:if(e.prev=24,!s){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),d=!0,h=!1,p=void 0,e.prev=35,v=i[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){g=m.value;try{g()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),h=!0,p=e.t2;case 43:e.prev=43,e.prev=44,d||null==v.return||v.return();case 46:if(e.prev=46,!h){e.next=49;break}throw p;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),n,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),en=function(){"use strict";function t(r,n,i){e(v)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rn(this),this.idTokenSubscription=new rn(this),this.beforeStateQueue=new Zr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return e(m)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=qt(r));var n=this;return this._initializationPromise=this.queue(e(s)(e(o).mark((function i(){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Fr.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(s=n.currentUser)||void 0===s?void 0:s.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i,a,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,s=a,u=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==s?void 0:s._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:f=e.sent,c&&c!==l||!(null==f?void 0:f.user)||(s=f.user,u=!0);case 15:if(s){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(s._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(s);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),s=a,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!s){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(s));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return Ht(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==s._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(s));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(s));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Er(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 9:return e.abrupt("return",r.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(s)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?pe(t):null)&&Ht(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(s)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&Ht(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",n.queue(e(s)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(s)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(qt(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ne("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(s)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return Ht(i=t&&qt(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,Fr.create(r,[qt(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i,a;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(s)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(a=r.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(s)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ht(s,this,"internal-error"),s.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh(),r.currentUser=t,!t){e.next=8;break}return e.next=6,r.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,r.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Ht(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qr(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n,i,a;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e(y)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=r.sent)&&(i["X-Firebase-Client"]=a),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e){return pe(e)}var rn=function(){"use strict";function t(r){var n,i,a=this;e(v)(this,t),this.auth=r,this.observer=null,this.addObserver=(i=new de((function(e){return a.observer=e}),n)).subscribe.bind(i)}return e(m)(t,[{key:"next",get:function(){return Ht(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function nn(t,r,n){var i=tn(t);Ht(i._canInitEmulator,i,"emulator-config-failed"),Ht(/^https?:\/\//.test(r),i,"invalid-emulator-scheme");var a=!!(null==n?void 0:n.disableWarnings),s=an(r),o=function(t){var r=an(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(r.length));if(!n)return{host:"",port:null};var i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var s=a[1];return{host:s,port:sn(i.substr(s.length+1))}}var o=e(b)(i.split(":"),2);return{host:o[0],port:sn(o[1])}}(r),u=o.host,c=o.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(s,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function an(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function sn(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var on=function(){"use strict";function t(r,n){e(v)(this,t),this.providerId=r,this.signInMethod=n}return e(m)(t,[{key:"toJSON",value:function(){return Bt("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Bt("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Bt("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Bt("not implemented")}}]),t}();function un(e,t){return cn.apply(this,arguments)}function cn(){return(cn=e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ir(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ln(e,t){return fn.apply(this,arguments)}function fn(){return(fn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ur(r,"POST","/v1/accounts:signInWithPassword",nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function dn(e,t){return hn.apply(this,arguments)}function hn(){return(hn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ur(r,"POST","/v1/accounts:signInWithEmailLink",nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function pn(e,t){return vn.apply(this,arguments)}function vn(){return(vn=e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ur(r,"POST","/v1/accounts:signInWithEmailLink",nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(t,i,a){var s,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(v)(this,n),(s=r.call(this,"password",a))._email=t,s._password=i,s._tenantId=o,s}return e(m)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",ln(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",dn(t,{email:r._email,oobCode:r._password}));case 5:Ut(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(s)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",un(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",pn(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:Ut(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(on);function gn(e,t){return yn.apply(this,arguments)}function yn(){return(yn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ur(r,"POST","/v1/accounts:signInWithIdp",nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(){var t;return e(v)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(m)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return gn(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,gn(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,gn(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ce(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ut("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=Ct(t,["providerId","signInMethod"]);if(!r||!i)return null;var s=new n(r,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}}]),n}(on);function bn(e,t){return wn.apply(this,arguments)}function wn(){return(wn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ir(r,"POST","/v1/accounts:sendVerificationCode",nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _n(){return(_n=e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ur(r,"POST","/v1/accounts:signInWithPhoneNumber",nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function In(){return(In=e(s)(e(o).mark((function t(r,n){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ur(r,"POST","/v1/accounts:signInWithPhoneNumber",nr(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw dr(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var xn=e(y)({},"USER_NOT_FOUND","user-not-found");function Tn(){return(Tn=e(s)(e(o).mark((function t(r,n){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",ur(r,"POST","/v1/accounts:signInWithPhoneNumber",nr(r,i),xn));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(t){var i;return e(v)(this,n),(i=r.call(this,"phone","phone")).params=t,i}return e(m)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return _n.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return In.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Tn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(on);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn=function(){"use strict";function t(r){var n,i,a,s,o,u;e(v)(this,t);var c=le(fe(r)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);Ht(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(m)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=le(fe(e)).link,r=t?le(fe(t)).deep_link_id:null,n=le(fe(e)).deep_link_id;return(n?le(fe(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var On=function(){"use strict";function t(){e(v)(this,t),this.providerId=t.PROVIDER_ID}return e(m)(t,null,[{key:"credential",value:function(e,t){return mn._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=Sn.parseLink(t);return Ht(r,"argument-error"),mn._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();On.PROVIDER_ID="password",On.EMAIL_PASSWORD_SIGN_IN_METHOD="password",On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pn=function(){"use strict";function t(r){e(v)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(m)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Rn=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(){var t;return e(v)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(m)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(k)(this.scopes)}}]),n}(Pn),Cn=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(){return e(v)(this,n),r.call(this,"facebook.com")}return e(m)(n,null,[{key:"credential",value:function(e){return kn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Rn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Cn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var An=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(){var t;return e(v)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(m)(n,null,[{key:"credential",value:function(e,t){return kn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Rn);An.GOOGLE_SIGN_IN_METHOD="google.com",An.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nn=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(){return e(v)(this,n),r.call(this,"github.com")}return e(m)(n,null,[{key:"credential",value:function(e){return kn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Rn);Nn.GITHUB_SIGN_IN_METHOD="github.com",Nn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ln=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(){return e(v)(this,n),r.call(this,"twitter.com")}return e(m)(n,null,[{key:"credential",value:function(e,t){return kn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Rn);function Dn(e,t){return Mn.apply(this,arguments)}function Mn(){return(Mn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ur(r,"POST","/v1/accounts:signUp",nr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.TWITTER_SIGN_IN_METHOD="twitter.com",Ln.PROVIDER_ID="twitter.com";var Un=function(){"use strict";function t(r){e(v)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(m)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(s)(e(o).mark((function s(){var u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Dr._fromIdTokenResponse(r,i,a);case 2:return u=e.sent,c=jn(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:n}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),s)})))()}},{key:"_forOperation",value:function(r,n,i){return e(s)(e(o).mark((function a(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(i,!0);case 2:return s=jn(i),e.abrupt("return",new t({user:r,providerId:s,_tokenResponse:i,operationType:n}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function jn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fn=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(t,i,a,s){var o,u;return e(v)(this,n),(o=r.call(this,i.code,i.message)).operationType=a,o.user=s,Object.setPrototypeOf(e(E)(o),n.prototype),o.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},o}return e(m)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(re);function Vn(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw Fn._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e,t){return Bn.apply(this,arguments)}function Bn(){return Bn=e(s)(e(o).mark((function t(r,n){var i,a,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.length>2&&void 0!==s[2]&&s[2],e.t0=wr,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Un._forOperation(r,"link",a));case 14:case"end":return e.stop()}}),t)}))),Bn.apply(this,arguments)}function zn(e,t){return Wn.apply(this,arguments)}function Wn(){return Wn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r,n){var i,a,s,u,c,l,f=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=r.auth,s="reauthenticate",e.prev=3,e.next=6,wr(r,Vn(a,s,n,r),i);case 6:return Ht((u=e.sent).idToken,a,"internal-error"),Ht(c=br(u.idToken),a,"internal-error"),l=c.sub,Ht(r.uid===l,a,"user-mismatch"),e.abrupt("return",Un._forOperation(r,s,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&Ut(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),Wn.apply(this,arguments)}function qn(e,t){return Kn.apply(this,arguments)}function Kn(){return Kn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r,n){var i,a,s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,Vn(r,a,n);case 4:return s=e.sent,e.next=7,Un._fromIdTokenResponse(r,a,s);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),Kn.apply(this,arguments)}function Gn(e,t,r){return Jn.apply(this,arguments)}function Jn(){return(Jn=e(s)(e(o).mark((function t(r,n,i){var a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=tn(r),e.next=3,Dn(a,{returnSecureToken:!0,email:n,password:i});case 3:return s=e.sent,e.next=6,Un._fromIdTokenResponse(a,"signIn",s);case 6:return u=e.sent,e.next=9,a._updateCurrentUser(u.user);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xn(e,t,r,n){return pe(e).onIdTokenChanged(t,r,n)}function $n(e,t,r){return pe(e).beforeAuthStateChanged(t,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yn(e,t){return ir(e,"POST","/v2/accounts/mfaEnrollment:start",nr(e,t))}function Qn(e,t){return ir(e,"POST","/v2/accounts/mfaEnrollment:finalize",nr(e,t))}new WeakMap;var Zn="__sak",ei=function(){"use strict";function t(r,n){e(v)(this,t),this.storageRetriever=r,this.type=n}return e(m)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Zn,"1"),this.storage.removeItem(Zn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(){var t,i;return e(v)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Br(i=ee())||Jr(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Yr(),t._shouldAllowMigration=!0,t}return e(m)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value,o=this.storage.getItem(s),u=this.localCache[s];o!==u&&e(s,u,o)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},s=this.storage.getItem(n);$r()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var o=this;this.forAllChangedKeys((function(e,t,r){o.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var s,o=Array.from(r)[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){(0,s.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var i=this,a=this;return e(s)(e(o).mark((function s(){return e(o).wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e(St)(e(Rt)(n.prototype),"_set",i).call(a,t,r);case 2:a.localCache[t]=JSON.stringify(r);case 3:case"end":return s.stop()}}),s)})))()}},{key:"_get",value:function(t){var r=this,i=this;return e(s)(e(o).mark((function a(){var s;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(St)(e(Rt)(n.prototype),"_get",r).call(i,t);case 2:return s=a.sent,i.localCache[t]=JSON.stringify(s),a.abrupt("return",s);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var r=this,i=this;return e(s)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(St)(e(Rt)(n.prototype),"_remove",r).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(ei);ti.type="LOCAL";var ri=ti,ni=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(){return e(v)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(m)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(ei);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni.type="SESSION";var ii=ni;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){return Promise.all(t.map(function(){var t=e(s)(e(o).mark((function t(r){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var si=function(){"use strict";function t(r){e(v)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(m)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i,a,u,c,l,f,d,h;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=t).data,u=a.eventId,c=a.eventType,l=a.data,null==(f=r.handlersMap[c])?void 0:f.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),d=Array.from(f).map(function(){var t=e(s)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,ai(d);case 9:h=n.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:h});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si.receivers=[];var ui=function(){"use strict";function t(r){e(v)(this,t),this.target=r,this.handlers=new Set}return e(m)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(s)(e(o).mark((function a(){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var o=oi("",20);s.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);c={messageChannel:s,onMessage:function(t){var r=t;if(r.data.eventId===o)switch(r.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(r.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),s.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:o,data:r},[s.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function li(){return void 0!==ci().WorkerGlobalScope&&"function"==typeof ci().importScripts}function fi(){return di.apply(this,arguments)}function di(){return(di=e(s)(e(o).mark((function t(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hi="firebaseLocalStorageDb",pi="firebaseLocalStorage",vi="fbase_key",mi=function(){"use strict";function t(r){e(v)(this,t),this.request=r}return e(m)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function gi(e,t){return e.transaction([pi],t?"readwrite":"readonly").objectStore(pi)}function yi(){var e=indexedDB.deleteDatabase(hi);return new mi(e).toPromise()}function ki(){var t=indexedDB.open(hi,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(pi,{keyPath:vi})}catch(e){n(e)}})),t.addEventListener("success",e(s)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(pi)){e.next=12;break}return i.close(),e.next=5,yi();case 5:return e.t0=r,e.next=8,ki();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(i);case 13:case"end":return e.stop()}}),n)}))))}))}function bi(e,t,r){return wi.apply(this,arguments)}function wi(){return(wi=e(s)(e(o).mark((function t(r,n,i){var a,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=gi(r,!0).put((a={},e(y)(a,vi,n),e(y)(a,"value",i),a)),t.abrupt("return",new mi(s).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _i(e,t){return Ii.apply(this,arguments)}function Ii(){return(Ii=e(s)(e(o).mark((function t(r,n){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=gi(r,!1).get(n),e.next=3,new mi(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function xi(e,t){var r=gi(e,!0).delete(t);return new mi(r).toPromise()}var Ti=function(){"use strict";function t(){e(v)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(m)(t,[{key:"_openDb",value:function(){var t=this;return e(s)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,ki();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(s)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",li()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(s)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=si._getInstance(li()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(s)(e(o).mark((function r(n,i){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(s)(e(o).mark((function t(r,n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fi();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new ui(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(s)(e(o).mark((function t(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,ki();case 5:return r=e.sent,e.next=8,bi(r,Zn,"1");case 8:return e.next=10,xi(r,Zn);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(s)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(e(s)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return bi(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return _i(e,t)}));case 2:return i=e.sent,r.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(s)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(s)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return xi(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n,i,a,s,u,c,l,f,d,h,p,v,m,g,y,k,b;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=gi(e,!1).getAll();return new mi(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,s=!0,u=!1,c=void 0,e.prev=10,l=n[Symbol.iterator]();!(s=(f=l.next()).done);s=!0)d=f.value,h=d.fbase_key,p=d.value,a.add(h),JSON.stringify(t.localCache[h])!==JSON.stringify(p)&&(t.notifyListeners(h,p),i.push(h));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,s||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,g=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=y.next()).done);v=!0)b=k.value,t.localCache[b]&&!a.has(b)&&(t.notifyListeners(b,null),i.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!m){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var s,o=Array.from(r)[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){(0,s.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(s)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Ti.type="LOCAL";var Ei=Ti;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e,t){return ir(e,"POST","/v2/accounts/mfaSignIn:start",nr(e,t))}function Oi(e,t){return ir(e,"POST","/v2/accounts/mfaSignIn:finalize",nr(e,t))}function Pi(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=jt("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function Ri(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ri("rcb"),new Yt(3e4,6e4);var Ci="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e,t,r){return Ni.apply(this,arguments)}function Ni(){return(Ni=e(s)(e(o).mark((function t(r,n,i){var a,s,u,c,l,f,d,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(s=e.sent,e.prev=4,Ht("string"==typeof s,r,"argument-error"),Ht(i.type===Ci,r,"argument-error"),!("session"in(u="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return Ht("enroll"===c.type,r,"internal-error"),e.next=15,Yn(r,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:s}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return Ht("signin"===c.type,r,"internal-error"),Ht(f=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Si(r,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:s}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,bn(r,{phoneNumber:u.phoneNumber,recaptchaToken:s});case 30:return h=e.sent.sessionInfo,e.abrupt("return",h);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Li=function(){"use strict";function t(r){e(v)(this,t),this.providerId=t.PROVIDER_ID,this.auth=tn(r)}return e(m)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Ai(this.auth,e,pe(t))}}],[{key:"credential",value:function(e,t){return En._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?En._fromTokenResponse(r,n):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Di(e,t){return t?qt(t):(Ht(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Li.PROVIDER_ID="phone",Li.PHONE_SIGN_IN_METHOD="phone";var Mi=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(t){var i;return e(v)(this,n),(i=r.call(this,"custom","custom")).params=t,i}return e(m)(n,[{key:"_getIdTokenResponse",value:function(e){return gn(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return gn(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return gn(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(on);function Ui(e){return qn(e.auth,new Mi(e),e.bypassAuthState)}function ji(e){var t=e.auth,r=e.user;return Ht(r,t,"internal-error"),zn(r,new Mi(e),e.bypassAuthState)}function Fi(e){return Vi.apply(this,arguments)}function Vi(){return(Vi=e(s)(e(o).mark((function t(r){var n,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,Ht(i=r.user,n,"internal-error"),e.abrupt("return",Hn(i,new Mi(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hi=function(){"use strict";function t(r,n,i,a){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(v)(this,t),this.auth=r,this.resolver=i,this.user=a,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(m)(t,[{key:"execute",value:function(){var t=this;return new Promise(function(){var r=e(s)(e(o).mark((function r(n,i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),r,null,[[1,10]])})));return function(e,t){return r.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i,a,s,u,c,l,f;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,s=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return r.reject(c),e.abrupt("return");case 4:return f={auth:r.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:s||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(l)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ui;case"linkViaPopup":case"linkViaRedirect":return Fi;case"reauthViaPopup":case"reauthViaRedirect":return ji;default:Ut(this.auth,"internal-error")}}},{key:"resolve",value:function(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Bi=new Yt(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zi=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(t,i,a,s,o){var u;return e(v)(this,n),(u=r.call(this,t,i,s,o)).provider=a,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(E)(u),u}return e(m)(n,[{key:"executeNotNull",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return Ht(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(s)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return zt(1===t.filter.length,"Popup operations only handle one event"),n=oi(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(jt(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(jt(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(jt(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Bi.get())};t()}}]),n}(Hi);zi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wi=new Map,qi=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(t,i){var a,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(v)(this,n),(a=r.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s)).eventId=null,a}return e(m)(n,[{key:"execute",value:function(){var t=this,r=this;return e(s)(e(o).mark((function i(){var a,s;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Wi.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Ki(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(St)(e(Rt)(n.prototype),"execute",t).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:s=i.t0,a=function(){return Promise.resolve(s)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Wi.set(r.auth._key(),a);case 21:return r.bypassAuthState||Wi.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var r=this,i=this,a=function(){return e(St)(e(Rt)(n.prototype),"onAuthEvent",r)};return e(s)(e(o).mark((function r(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(n=e.sent)){e.next=16;break}return i.user=n,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){return e(s)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),n}(Hi);function Ki(e,t){return Gi.apply(this,arguments)}function Gi(){return(Gi=e(s)(e(o).mark((function t(r,n){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=$i(n),a=Xi(r),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,s="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ji(e,t){Wi.set(e._key(),t)}function Xi(e){return qt(e._redirectPersistence)}function $i(e){return jr("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e,t){return Qi.apply(this,arguments)}function Qi(){return Qi=e(s)(e(o).mark((function t(r,n){var i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=tn(r),s=Di(a,n),u=new qi(a,s,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),Qi.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zi=function(){"use strict";function t(r){e(v)(this,t),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(m)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ta(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!ta(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(jt(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ea(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(ea(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function ea(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function ta(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function ra(e){return na.apply(this,arguments)}function na(){return na=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(o).mark((function t(r){var n,i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",ir(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),t)}))),na.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ia=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aa=/^https?/;function sa(){return(sa=e(s)(e(o).mark((function t(r){var n,i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ra(r);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,s=void 0,e.prev=6,u=n[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!oa(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,s=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Ut(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function oa(e){var t=Gt(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!aa.test(n))return!1;if(ia.test(e))return i===e;var s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ua=new Yt(3e4,6e4);function ca(){var t=ci().___jsl,r=!0,n=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,s=Object.keys(t.H)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var o=a.value;if(t.H[o].r=t.H[o].r||[],t.H[o].L=t.H[o].L||[],t.H[o].r=e(k)(t.H[o].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}}var la=null;function fa(e){return la=la||function(e){return new Promise((function(t,r){var n,i,a;function s(){ca(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){ca(),r(jt(e,"network-request-failed"))},timeout:ua.get()})}if(null===(i=null===(n=ci().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=ci().gapi)||void 0===a?void 0:a.load)){var o=Ri("iframefcb");return ci()[o]=function(){gapi.load?s():r(jt(e,"network-request-failed"))},Pi("https://apis.google.com/js/api.js?onload=".concat(o)).catch((function(e){return r(e)}))}s()}})).catch((function(e){throw la=null,e}))}(e),la}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var da=new Yt(5e3,15e3),ha={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function va(e){var t=e.config;Ht(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?Qt(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:ct},i=pa.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat(ce(n).slice(1))}function ma(e){return ga.apply(this,arguments)}function ga(){return ga=e(s)(e(o).mark((function t(r){var n,i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fa(r);case 2:return n=t.sent,Ht(i=ci().gapi,r,"internal-error"),t.abrupt("return",n.open({where:document.body,url:va(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ha,dontclear:!0},(function(t){return new Promise(function(){var n=e(s)(e(o).mark((function n(i,a){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){ci().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:s=jt(r,"network-request-failed"),u=ci().setTimeout((function(){a(s)}),da.get()),t.ping(c).then(c,(function(){a(s)}));case 7:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())})));case 6:case"end":return t.stop()}}),t)}))),ga.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ya={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ka="_blank",ba="http://localhost",wa=function(){"use strict";function t(r){e(v)(this,t),this.window=r,this.associatedEvent=null}return e(m)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function _a(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,s=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},ya),{width:i.toString(),height:a.toString(),top:s,left:o}),l=ee().toLowerCase();n&&(u=zr(l)?ka:n),Hr(l)&&(r=r||ba,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,r){var n=e(b)(r,2),i=n[0],a=n[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(Xr(l)&&"_self"!==u)return Ia(r||"",u),new wa(null);var d=window.open(r||"",u,f);Ht(d,t,"popup-blocked");try{d.focus()}catch(e){}return new wa(d)}function Ia(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xa="__/auth/handler",Ta="emulator/auth/handler";function Ea(t,r,n,i,a,s){Ht(t.config.authDomain,t,"auth-domain-config-required"),Ht(t.config.apiKey,t,"invalid-api-key");var o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ct,eventId:a};if(r instanceof Pn){r.setDefaultLanguage(t.languageCode),o.providerId=r.providerId||"",se(r.getCustomParameters())||(o.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(s||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=e(b)(f.value,2),p=h[0],v=h[1];o[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(r instanceof Rn){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);var g,y,k=o,w=!0,_=!1,I=void 0;try{for(var x,T=Object.keys(k)[Symbol.iterator]();!(w=(x=T.next()).done);w=!0){var E=x.value;void 0===k[E]&&delete k[E]}}catch(e){_=!0,I=e}finally{try{w||null==T.return||T.return()}finally{if(_)throw I}}return"".concat((g=t,y=g.config,y.emulator?Qt(y,Ta):"https://".concat(y.authDomain,"/").concat(xa)),"?").concat(ce(k).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Sa="webStorageSupport",Oa=function(){"use strict";function t(){e(v)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ii,this._completeRedirectFn=Yi,this._overrideRedirectResult=Ji}return e(m)(t,[{key:"_openPopup",value:function(t,r,n,i){var a=this;return e(s)(e(o).mark((function s(){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return zt(null===(u=a.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=Ea(t,r,n,Gt(),i),e.abrupt("return",_a(t,c,oi()));case 4:case"end":return e.stop()}}),s)})))()}},{key:"_openRedirect",value:function(t,r,n,i){var a=this;return e(s)(e(o).mark((function s(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return s=Ea(t,r,n,Gt(),i),ci().location.href=s,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var s}),s)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(zt(a,"If manager is not set, promise should be"),a)}var s=this.initAndGetManager(e);return this.eventManagers[r]={promise:s},s.catch((function(){delete t.eventManagers[r]})),s}},{key:"initAndGetManager",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ma(t);case 2:return i=e.sent,a=new Zi(t),i.register("authEvent",(function(e){return Ht(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[t._key()]={manager:a},r.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Sa,{type:Sa},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),Ut(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return sa.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Yr()||Br()||Jr()}}]),t}(),Pa=Oa,Ra=function(){"use strict";function t(r){e(v)(this,t),this.factorId=r}return e(m)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Bt("unexpected MultiFactorSessionType")}}}]),t}(),Ca=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(t){var i;return e(v)(this,n),(i=r.call(this,"phone")).credential=t,i}return e(m)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return ir(e,"POST","/v2/accounts/mfaEnrollment:finalize",nr(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return ir(e,"POST","/v2/accounts/mfaSignIn:finalize",nr(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(Ra);(function(){"use strict";function t(){e(v)(this,t)}return e(m)(t,null,[{key:"assertion",value:function(e){return Ca._fromCredential(e)}}]),t}()).FACTOR_ID="phone",(function(){"use strict";function t(){e(v)(this,t)}return e(m)(t,null,[{key:"assertionForEnrollment",value:function(e,t){return Aa._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Aa._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(t){return e(s)(e(o).mark((function r(){var n,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ht(void 0!==(n=t).auth,"internal-error"),e.next=4,r=n.auth,a={idToken:n.credential,totpEnrollmentInfo:{}},ir(r,"POST","/v2/accounts/mfaEnrollment:start",nr(r,a));case 4:return i=e.sent,e.abrupt("return",Na._fromStartTotpMfaEnrollmentResponse(i,n.auth));case 6:case"end":return e.stop()}var r,a}),r)})))()}}]),t}()).FACTOR_ID="totp";var Aa=function(t){"use strict";e(S)(n,t);var r=e(U)(n);function n(t,i,a){var s;return e(v)(this,n),(s=r.call(this,"totp")).otp=t,s.enrollmentId=i,s.secret=a,s}return e(m)(n,[{key:"_finalizeEnroll",value:function(t,r,n){var i=this;return e(s)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ht(void 0!==i.secret,t,"argument-error"),e.abrupt("return",Qn(t,{idToken:r,displayName:n,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return e.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(t,r){var n=this;return e(s)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ht(void 0!==n.enrollmentId&&void 0!==n.otp,t,"argument-error"),a={verificationCode:n.otp},e.abrupt("return",Oi(t,{mfaPendingCredential:r,mfaEnrollmentId:n.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return e.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new n(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new n(t,e)}}]),n}(Ra),Na=function(){"use strict";function t(r,n,i,a,s,o,u){e(v)(this,t),this.sessionInfo=o,this.auth=u,this.secretKey=r,this.hashingAlgorithm=n,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=s}return e(m)(t,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var r,n=!1;return(La(e)||La(t))&&(n=!0),n&&(La(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),La(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(e,r){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,r)}}]),t}();function La(e){return void 0===e||0===(null==e?void 0:e.length)}var Da="@firebase/auth",Ma="0.22.0",Ua=function(){"use strict";function t(r){e(v)(this,t),this.auth=r,this.internalListeners=new Map}return e(m)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(s)(e(o).mark((function n(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Ht(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ja,Fa=Q("authIdTokenMaxAge")||300,Va=null,Ha=function(t){return function(){var r=e(s)(e(o).mark((function r(n){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n,!e.t0){e.next=5;break}return e.next=4,n.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Fa)){e.next=9;break}return e.abrupt("return");case 9:if(s=null==i?void 0:i.token,Va!==s){e.next=12;break}return e.abrupt("return");case 12:return Va=s,e.next=15,fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer ".concat(s)}:{}});case 15:case"end":return e.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()};ja="Browser",it(new ve("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,s=a.apiKey,o=a.authDomain;return function(e,t){Ht(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),Ht(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});var n={apiKey:s,authDomain:o,clientPlatform:ja,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qr(ja)},i=new en(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(qt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),it(new ve("auth-internal",(function(e){var t=tn(e.getProvider("auth").getImmediate());return new Ua(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),dt(Da,Ma,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ja)),dt(Da,Ma,"esm2017");var Ba,za,Wa,qa,Ka,Ga,Ja,Xa,$a=1,Ya=lt({apiKey:"AIzaSyCds-laluoBicOUU9XaI5Zyn2hZba3I6P4",authDomain:"filmoteka-a678a.firebaseapp.com",projectId:"filmoteka-a678a",storageBucket:"filmoteka-a678a.appspot.com",messagingSenderId:"767994332645",appId:"1:767994332645:web:7a3961a3c7878fcc12db0c"}),Qa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft(),t=at(e,"auth");if(t.isInitialized())return t.getImmediate();var r=Kt(e,{popupRedirectResolver:Pa,persistence:[Ei,ri,ii]}),n=Q("authTokenSyncURL");if(n){var i=Ha(n);$n(r,i,(function(){return i(r.currentUser)})),Xn(r,(function(e){return i(e)}))}var a=$("auth");return a&&nn(r,"http://".concat(a)),r}(Ya);function Za(){return es.apply(this,arguments)}function es(){return(es=e(s)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:return Ka="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u.key),e.next=5,ns(1);case 5:ss(),fs(),hs(),os();case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ts(e){var t,r=!0,n=!1,i=void 0;try{for(var a,s=e.results[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var o=a.value;if(null===o.poster_path?(o.posterPath="https://upload.wikimedia.org/wikipedia/commons/a/a1",o.poster_path="/Out_Of_Poster.jpg"):o.posterPath="https://image.tmdb.org/t/p/w500",o.genre_ids)for(var u=0;u<o.genre_ids.length;u+=1)o.genre_ids[u]=c[o.genre_ids[u]];else o.genre_ids=["absent"];o.release_date&&(t=o.release_date.slice(0,4),o.release_date=t)}}catch(e){n=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}}function rs(e){u.refs.gallery.innerHTML="";var t=e.map((function(e){return'<li class="gallery__item" movie-index = '.concat(e.id,'>\n            <img class="film__poster" src="').concat(e.posterPath).concat(e.poster_path,'" alt="poster">\n            <h3 class="film__title">').concat(e.original_title.slice(0,60),'</h3>\n            <p class="film__characteristics">').concat(e.genre_ids.join(", ").slice(0,35)," | ").concat(e.release_date,"</p>\n        </li>")})).join("");u.refs.gallery.insertAdjacentHTML("beforeend",t)}function ns(e){return is.apply(this,arguments)}function is(){return(is=e(s)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ba=r,Ga="".concat(Ka,"&page=").concat(r),e.prev=2,e.next=5,(0,h.default)(Ga);case 5:0!==(qa=e.sent).total_results?(za=qa.total_pages,ts(qa),rs(qa.results),ls(),os(),(0,p.default)(qa.results)):(u.refs.searchInfo.textContent="Search result not successful. Enter the correct movie name.",Za()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}function as(e){var t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("type","button"),t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),t.setAttribute("onclick","window.location.href='./index.html#gallery'"),u.refs.paginationNumbers.appendChild(t)}function ss(){if(u.refs.paginationNumbers.innerHTML="",u.refs.nextButton.classList.remove("is-hidden"),u.refs.prevButton.classList.remove("is-hidden"),qa.total_pages>5){u.refs.lastPage.classList.remove("is-hidden"),u.refs.dotsNext.classList.remove("is-hidden");for(var e=$a;e<=5;e+=1)as(e)}else{u.refs.lastPage.classList.add("is-hidden"),u.refs.dotsNext.classList.add("is-hidden"),u.refs.firstPage.classList.add("is-hidden"),u.refs.dotsPrev.classList.add("is-hidden");for(var t=$a;t<=qa.total_pages;t+=1)as(t)}}function os(){document.querySelectorAll(".pagination-number").forEach((function(e){e.classList.remove("is-active"),Number(e.getAttribute("page-index"))===Ba&&e.classList.add("is-active")}))}function us(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function cs(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function ls(){1===Ba?us(u.refs.prevButton):cs(u.refs.prevButton),Ba===za?us(u.refs.nextButton):cs(u.refs.nextButton)}function fs(){document.querySelectorAll(".pagination-number").forEach((function(e){var t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(function(){ns(t)}))}))}function ds(e){if(u.refs.paginationNumbers.innerHTML="",Ba>1&&Ba<6&&u.refs.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")){for(var t=1;t<6;t+=1)as(t);u.refs.dotsNext.classList.remove("is-hidden"),u.refs.lastPage.classList.remove("is-hidden")}else for(var r=e-5;r<e;r+=1)as(r+1)}function hs(){u.refs.firstPage.setAttribute("page-index",1),u.refs.firstPage.setAttribute("aria-label","Page 1"),u.refs.firstPage.innerHTML=1,u.refs.lastPage.setAttribute("page-index",za),u.refs.lastPage.setAttribute("aria-label","Page "+za),u.refs.lastPage.innerHTML=za}function ps(){return(ps=e(s)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),u.refs.searchIcon.classList.add("is-hidden"),u.refs.searchSpinner.classList.remove("is-hidden"),u.refs.gallery.innerHTML="",Ja=r.currentTarget,Wa=Ja.elements.searchQuery.value,$a=1,u.refs.searchInfo.textContent="",Ka="https://api.themoviedb.org/3/search/movie?api_key=".concat(u.key,"&query=").concat(Wa),e.next=11,ns($a);case 11:ss(),fs(),hs(),os(),u.refs.searchIcon.classList.remove("is-hidden"),u.refs.searchSpinner.classList.add("is-hidden");case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vs(){u.refs.regModal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open"),u.refs.regInfo.innerHTML="",u.refs.regLogin.value="",u.refs.regEmail.value="",u.refs.regPassword.value="",u.refs.regConfirmPassword.value="",u.refs.regLogin.classList.remove("error"),u.refs.regEmail.classList.remove("error"),u.refs.regPassword.classList.remove("error"),u.refs.regConfirmPassword.classList.remove("error")}function ms(e){"Escape"===e.code&&vs()}function gs(e){e.currentTarget===e.target&&vs()}function ys(e){e.preventDefault();var t=e.currentTarget.elements,r=t.login,n=t.email,i=t.password,a=t.confirmPassword;return""===r.value?(u.refs.regLogin.classList.add("error"),u.refs.regInfo.innerHTML="Please fill in all the fields!"):""===n.value?(u.refs.regEmail.classList.add("error"),u.refs.regInfo.innerHTML="Please fill in all the fields!"):""===i.value?(u.refs.regPassword.classList.add("error"),u.refs.regInfo.innerHTML="Please fill in all the fields!"):i.value!==a.value||""===a.value?(u.refs.regPassword.classList.add("error"),u.refs.regConfirmPassword.classList.add("error"),u.refs.regInfo.innerHTML="Enter correct password"):(Xa={login:r.value,email:n.value,password:i.value},Gn(Qa,Xa.email,Xa.password).then((function(e){console.log(e);var t=e.user;console.log(t)})).catch((function(e){e.code,e.message})),e.currentTarget.reset(),u.refs.regLogin.classList.remove("error"),u.refs.regEmail.classList.remove("error"),u.refs.regPassword.classList.remove("error"),u.refs.regConfirmPassword.classList.remove("error"),u.refs.regInfo.innerHTML="",void u.refs.regModal.classList.add("is-hidden"))}console.log(Ya),console.log(Qa),u.refs.prevButton.addEventListener("click",(function(){!function(e){u.refs.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==u.refs.paginationNumbers.firstElementChild.innerHTML&&(ds(e),fs());Number(u.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))===za-5&&(u.refs.dotsNext.classList.remove("is-hidden"),u.refs.lastPage.classList.remove("is-hidden"));5===Number(u.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(u.refs.firstPage.classList.add("is-hidden"),u.refs.dotsPrev.classList.add("is-hidden"))}(Ba-1),ns(Ba-1)})),u.refs.nextButton.addEventListener("click",(function(){!function(e){u.refs.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&Number(u.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))!==za&&(!function(e){if(u.refs.paginationNumbers.innerHTML="",5===Ba&&6===za){u.refs.dotsPrev.classList.remove("is-hidden");for(var t=e-4;t<Ba+2;t+=1)as(t)}else if(5===Ba&&7===za){u.refs.dotsPrev.classList.remove("is-hidden");for(var r=e-3;r<Ba+3;r+=1)as(r)}else if(5===Ba&&8===za){u.refs.dotsPrev.classList.remove("is-hidden");for(var n=e-2;n<Ba+4;n+=1)as(n)}else if(5===Ba&&9===za){u.refs.dotsPrev.classList.remove("is-hidden");for(var i=e-1;i<Ba+4;i+=1)as(i)}else for(var a=e;a<e+5;a+=1)as(a)}(e),fs());Ba===za-1&&(ds(e),os(),fs(currentDataAll));6===Number(u.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(u.refs.firstPage.classList.remove("is-hidden"),u.refs.dotsPrev.classList.remove("is-hidden"));Number(u.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))===za-5&&u.refs.dotsNext.classList.add("is-hidden");Number(u.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))===za-4&&(u.refs.lastPage.classList.add("is-hidden"),u.refs.dotsNext.classList.add("is-hidden"))}(Ba+1),ns(Ba+1)})),u.refs.firstPage.addEventListener("click",(function(){ns(1),ss(),fs(),u.refs.lastPage.classList.remove("is-hidden"),u.refs.dotsNext.classList.remove("is-hidden"),u.refs.firstPage.classList.add("is-hidden"),u.refs.dotsPrev.classList.add("is-hidden")})),u.refs.lastPage.addEventListener("click",(function(){ns(za),ds(Ba),fs(),u.refs.dotsNext.classList.add("is-hidden"),u.refs.dotsPrev.classList.remove("is-hidden"),u.refs.firstPage.classList.remove("is-hidden"),u.refs.lastPage.classList.add("is-hidden")})),u.refs.form.addEventListener("submit",(function(e){return ps.apply(this,arguments)})),u.refs.regModalOpenBtn.addEventListener("click",(function(){u.refs.regModal.classList.remove("is-hidden"),document.body.classList.add("body-modal-open"),u.refs.regModalCloseBtn.addEventListener("click",vs),window.addEventListener("keydown",ms),u.refs.regModal.addEventListener("click",gs),u.refs.regForm.addEventListener("submit",ys)})),Za()}();
//# sourceMappingURL=index.9d288522.js.map
