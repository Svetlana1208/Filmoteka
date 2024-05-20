!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("ebCjK",(function(n,r){t(n.exports,"watchedMovies",(function(){return f})),t(n.exports,"userRef",(function(){return d})),t(n.exports,"queueMovies",(function(){return v})),t(n.exports,"default",(function(){return g}));var i=a("bpxeT"),o=a("2TvXO"),s=a("7basD"),u=a("hhpkh"),c=a("4Nugj");a("gQOBw");var l=a("k0X64");a("6m2hf");var h,f,d,v,p,y=a("221Dt"),m=(p=e(i)(e(o).mark((function t(){var n,r,i,a,p,m,g,k;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(){(0,l.z)((0,l.o)())},r=function(){c.refs.authModal.classList.remove("is-hidden"),document.body.classList.add("body-modal-open"),c.refs.authModalCloseBtn.addEventListener("click",i),window.addEventListener("keydown",a),c.refs.authModal.addEventListener("click",p),c.refs.authForm.addEventListener("submit",g)},i=function(){c.refs.authModal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open"),m()},a=function(e){"Escape"===e.code&&i()},p=function(e){e.currentTarget===e.target&&i()},m=function(){c.refs.authInfo.innerHTML="",c.refs.authEmail.value="",c.refs.authPassword.value="",c.refs.authEmail.classList.remove("error"),c.refs.authPassword.classList.remove("error")},g=function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.password;t.confirmPassword,h={email:n.value,password:r.value},(0,l.a8)(s.auth,h.email,h.password).then((function(e){var t=e.user.email.split("@")[0];c.refs.userLogin.innerHTML="".concat(t),c.refs.user.classList.remove("is-hidden"),c.refs.authorization.classList.add("is-hidden"),c.refs.navigation.classList.remove("is-hidden"),c.refs.userSignOut.addEventListener("click",k),i()})).catch((function(e){var t=e.code;return"auth/user-not-found"===t?(c.refs.authEmail.classList.add("error"),c.refs.authInfo.innerHTML="Such user was not found"):"auth/wrong-password"===t?(c.refs.authPassword.classList.add("error"),c.refs.authInfo.innerHTML="Enter correct password"):"auth/missing-password"===t?(c.refs.authPassword.classList.add("error"),c.refs.authInfo.innerHTML="Enter password"):void 0}))},k=function(){(0,l.z)((0,l.o)()),c.refs.authorization.classList.remove("is-hidden"),c.refs.navigation.classList.add("is-hidden"),c.refs.user.classList.add("is-hidden")},"my library"===document.querySelector(".header__link--current").textContent?(0,l.w)(s.auth,(function(e){if(e){var t=e.email.split("@")[0];u.refsMyLib.userLogin.innerHTML="".concat(t),u.refsMyLib.userSignOut.addEventListener("click",n);var r=(0,y.collection)(s.db,"users"),i=c.refs.userLogin.textContent;d=(0,y.doc)(r,"".concat(i)),f=(0,y.collection)(d,"watched"),v=(0,y.collection)(d,"queue")}})):(0,l.w)(s.auth,(function(e){if(c.refs.authModalOpenBtn.addEventListener("click",r),e){var t=e.email.split("@")[0];c.refs.userLogin.innerHTML="".concat(t),c.refs.userSignOut.addEventListener("click",k),c.refs.authorization.classList.add("is-hidden"),c.refs.navigation.classList.remove("is-hidden"),c.refs.user.classList.remove("is-hidden");var n=(0,y.collection)(s.db,"users"),i=c.refs.userLogin.textContent;d=(0,y.doc)(n,"".concat(i)),f=(0,y.collection)(d,"watched"),v=(0,y.collection)(d,"queue")}}));case 9:case"end":return e.stop()}}),t)}))),function(){return p.apply(this,arguments)}),g=m})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),o=new C(r||[]);return a._invoke=function(e,t,n){var r=h;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw a;return D()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=I(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?v:f,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",p={};function y(){}function m(){}function g(){}var k={};u(k,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(A([])));b&&b!==n&&r.call(b,a)&&(k=b);var x=g.prototype=y.prototype=Object.create(k);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(h).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:D}}function D(){return{value:t,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},E(_.prototype),u(_.prototype,o,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new _(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("7basD",(function(e,n){t(e.exports,"key",(function(){return s})),t(e.exports,"auth",(function(){return c})),t(e.exports,"db",(function(){return l})),a("fkNhc");var r=a("MjY8E");a("gQOBw");var i=a("k0X64");a("6m2hf");var o=a("221Dt"),s="4273054ff6f056d7541ef873941254f6",u=(0,r.initializeApp)({apiKey:"AIzaSyCds-laluoBicOUU9XaI5Zyn2hZba3I6P4",authDomain:"filmoteka-a678a.firebaseapp.com",projectId:"filmoteka-a678a",storageBucket:"filmoteka-a678a.appspot.com",messagingSenderId:"767994332645",appId:"1:767994332645:web:7a3961a3c7878fcc12db0c"}),c=(0,i.o)(u),l=(0,o.getFirestore)(u)})),a.register("fkNhc",(function(e,n){t(e.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),t(e.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
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
(0,a("MjY8E").registerVersion)("firebase","9.19.1","app")})),a.register("MjY8E",(function(n,r){t(n.exports,"_registerComponent",(function(){return T})),t(n.exports,"_getProvider",(function(){return S})),t(n.exports,"_removeServiceInstance",(function(){return C})),t(n.exports,"SDK_VERSION",(function(){return O})),t(n.exports,"initializeApp",(function(){return R})),t(n.exports,"getApp",(function(){return L})),t(n.exports,"registerVersion",(function(){return P}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),h=a("6ExWU"),f=a("kZfxc"),d=a("2xDiJ"),v=a("ajgRO"),p=(d=a("2xDiJ"),function(){"use strict";function t(n){e(o)(this,t),this.container=n}return e(s)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}());var y,m,g="@firebase/app",k="0.9.7",w=new(0,f.Logger)("@firebase/app"),b="[DEFAULT]",x=(y={},e(u)(y,g,"fire-core"),e(u)(y,"@firebase/app-compat","fire-core-compat"),e(u)(y,"@firebase/analytics","fire-analytics"),e(u)(y,"@firebase/analytics-compat","fire-analytics-compat"),e(u)(y,"@firebase/app-check","fire-app-check"),e(u)(y,"@firebase/app-check-compat","fire-app-check-compat"),e(u)(y,"@firebase/auth","fire-auth"),e(u)(y,"@firebase/auth-compat","fire-auth-compat"),e(u)(y,"@firebase/database","fire-rtdb"),e(u)(y,"@firebase/database-compat","fire-rtdb-compat"),e(u)(y,"@firebase/functions","fire-fn"),e(u)(y,"@firebase/functions-compat","fire-fn-compat"),e(u)(y,"@firebase/installations","fire-iid"),e(u)(y,"@firebase/installations-compat","fire-iid-compat"),e(u)(y,"@firebase/messaging","fire-fcm"),e(u)(y,"@firebase/messaging-compat","fire-fcm-compat"),e(u)(y,"@firebase/performance","fire-perf"),e(u)(y,"@firebase/performance-compat","fire-perf-compat"),e(u)(y,"@firebase/remote-config","fire-rc"),e(u)(y,"@firebase/remote-config-compat","fire-rc-compat"),e(u)(y,"@firebase/storage","fire-gcs"),e(u)(y,"@firebase/storage-compat","fire-gcs-compat"),e(u)(y,"@firebase/firestore","fire-fst"),e(u)(y,"@firebase/firestore-compat","fire-fst-compat"),e(u)(y,"fire-js","fire-js"),e(u)(y,"firebase","fire-js-all"),y),E=new Map,_=new Map;function I(e,t){try{e.container.addComponent(t)}catch(n){w.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function T(e){var t=e.name;if(_.has(t))return w.debug("There were multiple attempts to register component ".concat(t,".")),!1;_.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=E.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){I(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function S(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;S(e,t).clearInstance(n)}
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
var A=(m={},e(u)(m,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(u)(m,"bad-app-name","Illegal App name: '{$appName}"),e(u)(m,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(u)(m,"app-deleted","Firebase App named '{$appName}' already deleted"),e(u)(m,"no-options","Need to provide options, when not being deployed to hosting via source."),e(u)(m,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(u)(m,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(u)(m,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(u)(m,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(u)(m,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(u)(m,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),m),D=new(0,d.ErrorFactory)("app","Firebase",A),N=function(){"use strict";function t(n,r,i){var a=this;e(o)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,h.Component)("app",(function(){return a}),"PUBLIC"))}return e(s)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}]),t}(),O="9.19.1";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:b,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw D.create("bad-app-name",{appName:String(a)});if(n||(n=(0,d.getDefaultAppConfig)()),!n)throw D.create("no-options");var o=E.get(a);if(o){if((0,d.deepEqual)(n,o.options)&&(0,d.deepEqual)(i,o.config))return o;throw D.create("duplicate-app",{appName:a})}var s=new(0,h.ComponentContainer)(a),u=!0,c=!1,l=void 0;try{for(var f,v=_.values()[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var p=f.value;s.addComponent(p)}}catch(e){c=!0,l=e}finally{try{u||null==v.return||v.return()}finally{if(c)throw l}}var y=new N(n,i,s);return E.set(a,y),y}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=E.get(e);if(!t&&e===b)return R();if(!t)throw D.create("no-app",{appName:e});return t}function P(e,t,n){var r,i=null!==(r=x[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void w.warn(s.join(" "))}T(new(0,h.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var M="firebase-heartbeat-store",F=null;function U(){return F||(F=(0,v.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(M)}}).catch((function(e){throw D.create("idb-open",{originalErrorMessage:e.message})}))),F}function V(e){return j.apply(this,arguments)}function j(){return(j=e(i)(e(l).mark((function t(n){var r,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return r=e.sent,e.abrupt("return",r.transaction(M).objectStore(M).get(z(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?w.warn(e.t0.message):(i=D.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),w.warn(i.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function B(e,t){return q.apply(this,arguments)}function q(){return(q=e(i)(e(l).mark((function t(n,r){var i,a,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return i=e.sent,a=i.transaction(M,"readwrite"),o=a.objectStore(M),e.next=8,o.put(r,z(n));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?w.warn(e.t0.message):(s=D.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),w.warn(s.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function z(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var K=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Q(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(s)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r,i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=H(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r,i,a,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=H(),i=G(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function H(){return(new Date).toISOString().substring(0,10)}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),X(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),X(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var W,Q=function(){"use strict";function t(n){e(o)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(s)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(i)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,d.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,V(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(i)(e(l).mark((function r(){var i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",B(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(i)(e(l).mark((function r(){var i,a;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",B(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(c)(a.heartbeats).concat(e(c)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function X(e){return(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */W="",T(new(0,h.Component)("platform-logger",(function(e){return new p(e)}),"PRIVATE")),T(new(0,h.Component)("heartbeat",(function(e){return new K(e)}),"PRIVATE")),P(g,k,W),P(g,k,"esm2017"),P("fire-js","")})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=s(a("kMC0W")),r=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("6ExWU",(function(n,r){t(n.exports,"Component",(function(){return f})),t(n.exports,"ComponentContainer",(function(){return p}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),h=a("2xDiJ"),f=function(){"use strict";function t(n,r,i){e(o)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(s)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),d="[DEFAULT]",v=function(){"use strict";function t(n,r){e(o)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(s)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,h.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:d})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(u)(a.value,2),c=s[0],l=s[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,h=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var f=e(u)(l.value,2),d=f[0],v=f[1],p=this.normalizeInstanceIdentifier(d);i===p&&v.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===d?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.component?this.component.multipleInstances?e:d:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();var p=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this.providers=new Map}return e(s)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new v(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}()})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=s(a("8slrw")),r=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("2xDiJ",(function(r,i){t(r.exports,"base64urlEncodeWithoutPadding",(function(){return m})),t(r.exports,"base64Decode",(function(){return g})),t(r.exports,"getDefaultEmulatorHost",(function(){return b})),t(r.exports,"getDefaultEmulatorHostnameAndPort",(function(){return x})),t(r.exports,"getDefaultAppConfig",(function(){return E})),t(r.exports,"getExperimentalSetting",(function(){return _})),t(r.exports,"Deferred",(function(){return I})),t(r.exports,"createMockUserToken",(function(){return T})),t(r.exports,"getUA",(function(){return S})),t(r.exports,"isMobileCordova",(function(){return C})),t(r.exports,"isBrowserExtension",(function(){return A})),t(r.exports,"isReactNative",(function(){return D})),t(r.exports,"isIE",(function(){return N})),t(r.exports,"isSafari",(function(){return O})),t(r.exports,"isIndexedDBAvailable",(function(){return R})),t(r.exports,"validateIndexedDBOpenable",(function(){return L})),t(r.exports,"FirebaseError",(function(){return P})),t(r.exports,"ErrorFactory",(function(){return M})),t(r.exports,"isEmpty",(function(){return V})),t(r.exports,"deepEqual",(function(){return j})),t(r.exports,"querystring",(function(){return q})),t(r.exports,"querystringDecode",(function(){return z})),t(r.exports,"extractQuerystring",(function(){return K})),t(r.exports,"createSubscribe",(function(){return H})),t(r.exports,"getModularInstance",(function(){return Q}));var o=a("ds8z5"),s=a("8MBJY"),u=a("a2hTj"),c=a("eYQtU"),l=a("1t1Wn"),h=(a("8nrFW"),a("4c7YB")),f=a("2MbLg"),d=a("6qd2L"),v=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(v(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new y;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},y=function(t){"use strict";e(c)(r,t);var n=e(f)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return r}(e(h)(Error)),m=function(e){return function(e){var t=v(e);return p.encodeByteArray(t,!0)}(e).replace(/\./g,"")},g=function(e){try{return p.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
var k=function(){
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
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},w=function(){try{return k()||function(){if(void 0!==d&&void 0!==d.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&g(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},b=function(e){var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},x=function(e){var t=b(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},E=function(){var e;return null===(e=w())||void 0===e?void 0:e.config},_=function(e){var t;return null===(t=w())||void 0===t?void 0:t["_".concat(e)]},I=function(){"use strict";function t(){var n=this;e(s)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(u)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
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
function T(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[m(JSON.stringify({alg:"none",type:"JWT"})),m(JSON.stringify(a)),""].join(".")}
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
 */function S(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function C(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function A(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function D(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function N(){var e=S();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!function(){var e,t=null===(e=w())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function R(){try{return"object"==typeof indexedDB}catch(e){return!1}}function L(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
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
var P=function(t){"use strict";e(c)(r,t);var n=e(f)(r);function r(t,i,a){var u;return e(s)(this,r),(u=n.call(this,i)).code=t,u.customData=a,u.name="FirebaseError",Object.setPrototypeOf(e(o)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(o)(u),M.prototype.create),u}return r}(e(h)(Error)),M=function(){"use strict";function t(n,r,i){e(s)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(u)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?F(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new P(a,u,i);return c}}]),t}();function F(e,t){return e.replace(U,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var U=/\{\$([^}]+)}/g;
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
 */function V(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(B(l)&&B(h)){if(!j(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,d=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){var m=p.value;if(!n.includes(m))return!1}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}return!0}function B(e){return null!==e&&"object"==typeof e}
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
function q(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(l)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function z(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(l)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function K(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function H(e,t){var n=new G(e,t);return n.subscribe.bind(n)}var G=function(){"use strict";function t(n,r){var i=this;e(s)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(u)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=W),void 0===r.error&&(r.error=W),void 0===r.complete&&(r.complete=W);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function W(){}
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
function Q(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(a("ge8co")),r=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return n.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||l||s(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("kZfxc",(function(n,r){t(n.exports,"LogLevel",(function(){return i})),t(n.exports,"Logger",(function(){return m})),t(n.exports,"setLogLevel",(function(){return g})),t(n.exports,"setUserLogHandler",(function(){return k}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),h=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var f,d={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},v=i.INFO,p=(f={},e(c)(f,i.DEBUG,"log"),e(c)(f,i.VERBOSE,"log"),e(c)(f,i.INFO,"info"),e(c)(f,i.WARN,"warn"),e(c)(f,i.ERROR,"error"),f),y=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=p[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(l)(i)))}},m=function(){"use strict";function t(n){e(s)(this,t),this.name=n,this._logLevel=v,this._logHandler=y,this._userLogHandler=null,h.push(this)}return e(u)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?d[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(e(l)(n))),this._logHandler.apply(this,[this,i.DEBUG].concat(e(l)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(e(l)(n))),this._logHandler.apply(this,[this,i.VERBOSE].concat(e(l)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(e(l)(n))),this._logHandler.apply(this,[this,i.INFO].concat(e(l)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(e(l)(n))),this._logHandler.apply(this,[this,i.WARN].concat(e(l)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(e(l)(n))),this._logHandler.apply(this,[this,i.ERROR].concat(e(l)(n)))}}]),t}();function g(e){h.forEach((function(t){t.setLogLevel(e)}))}function k(e,t){var n=!0,r=!1,a=void 0;try{for(var o,s=h[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,c=null;t&&t.level&&(c=d[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}})),a.register("ajgRO",(function(n,r){t(n.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var h=["get","getKey","getAll","getAllKeys","count"],f=["put","add","delete","clear"],d=new Map;function v(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(d.get(n))return d.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,o=f.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||h.includes(r))){var c,l=(c=e(i)(e(u).mark((function t(n){var i,c,l,h,f,d,v=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=v.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=v[l];return f=this.transaction(n,o?"readwrite":"readonly"),d=f.store,a&&(d=d.index(c.shift())),t.next=7,Promise.all([(h=d)[r].apply(h,e(s)(c)),o&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return c.apply(this,arguments)});return d.set(n,l),l}}}(0,c.r)((function(t){return e(o)({},t,{get:function(e,n,r){return v(e,n)||t.get(e,n,r)},has:function(e,n){return!!v(e,n)||t.has(e,n)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("kKOTz",(function(n,r){t(n.exports,"w",(function(){return m})),t(n.exports,"r",(function(){return v}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,h=new WeakMap,f=new WeakMap;var d={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){d=e(d)}function p(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(g(this),n),m(u.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return m(t.apply(g(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,u=(o=t).call.apply(o,[g(this),n].concat(e(s)(i)));return l.set(u,n.sort?n.sort():[n]),m(u)}}function y(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,d):e);var t}function m(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(m(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),f.set(n,t),n;var t,n;if(h.has(e))return h.get(e);var r=y(e);return r!==e&&(h.set(e,r),f.set(r,e)),r}var g=function(e){return f.get(e)}})),a.register("gQOBw",(function(e,n){t(e.exports,"createUserWithEmailAndPassword",(function(){return a("k0X64").a7})),t(e.exports,"getAuth",(function(){return a("k0X64").o})),t(e.exports,"signOut",(function(){return a("k0X64").z})),t(e.exports,"signInWithEmailAndPassword",(function(){return a("k0X64").a8})),t(e.exports,"onAuthStateChanged",(function(){return a("k0X64").w})),a("eMcUM")})),a.register("eMcUM",(function(e,n){t(e.exports,"createUserWithEmailAndPassword",(function(){return a("k0X64").a7})),t(e.exports,"getAuth",(function(){return a("k0X64").o})),t(e.exports,"onAuthStateChanged",(function(){return a("k0X64").w})),t(e.exports,"signInWithEmailAndPassword",(function(){return a("k0X64").a8})),t(e.exports,"signOut",(function(){return a("k0X64").z})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("k0X64")})),a.register("k0X64",(function(n,r){t(n.exports,"a7",(function(){return Ft})),t(n.exports,"a8",(function(){return Vt})),t(n.exports,"w",(function(){return qt})),t(n.exports,"z",(function(){return zt})),t(n.exports,"o",(function(){return Mr}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),h=a("fVNic"),f=a("eYQtU"),d=a("1t1Wn"),v=a("8nrFW"),p=a("2MbLg"),y=a("2TvXO"),m=a("2xDiJ"),g=a("MjY8E"),k=a("kZfxc"),w=a("4tSb9"),b=a("6ExWU");function x(){return e(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var E=x,_=new(0,m.ErrorFactory)("auth","Firebase",x()),I=new(0,k.Logger)("@firebase/auth");function T(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;I.logLevel<=k.LogLevel.ERROR&&(a=I).error.apply(a,["Auth (".concat(g.SDK_VERSION,"): ").concat(t)].concat(e(v)(r)))}
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
 */function S(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw D.apply(void 0,[t].concat(e(v)(r)))}function C(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return D.apply(void 0,[t].concat(e(v)(r)))}function A(t,n,r){var i=Object.assign(Object.assign({},E()),e(c)({},n,r));return new(0,m.ErrorFactory)("auth","Firebase",i).create(n,{appName:t.name})}function D(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(v)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(v)(u)))}return(a=_).create.apply(a,[t].concat(e(v)(r)))}function N(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw D.apply(void 0,[n].concat(e(v)(i)))}function O(e){var t="INTERNAL ASSERTION FAILED: "+e;throw T(t),new Error(t)}function R(e,t){e||O(t)}
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
 */var L=new Map;function P(e){R(e instanceof Function,"Expected a class definition");var t=L.get(e);return t?(R(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,L.set(e,t),t)}
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
 */function M(e,t){var n=(0,g._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,m.deepEqual)(i,null!=t?t:{}))return r;S(r,"already-initialized")}return n.initialize({options:t})}
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
function F(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function U(){return"http:"===V()||"https:"===V()}function V(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
var j=function(){"use strict";function t(n,r){e(s)(this,t),this.shortDelay=n,this.longDelay=r,R(r>n,"Short delay should be less than long delay!"),this.isMobile=(0,m.isMobileCordova)()||(0,m.isReactNative)()}return e(u)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(U()||(0,m.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
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
 */function B(e,t){R(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var q,z=function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void O("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void O("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void O("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),K=(q={},e(c)(q,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(c)(q,"MISSING_CUSTOM_TOKEN","internal-error"),e(c)(q,"INVALID_IDENTIFIER","invalid-email"),e(c)(q,"MISSING_CONTINUE_URI","internal-error"),e(c)(q,"INVALID_PASSWORD","wrong-password"),e(c)(q,"MISSING_PASSWORD","missing-password"),e(c)(q,"EMAIL_EXISTS","email-already-in-use"),e(c)(q,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(c)(q,"INVALID_IDP_RESPONSE","invalid-credential"),e(c)(q,"INVALID_PENDING_TOKEN","invalid-credential"),e(c)(q,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(c)(q,"MISSING_REQ_TYPE","internal-error"),e(c)(q,"EMAIL_NOT_FOUND","user-not-found"),e(c)(q,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(c)(q,"EXPIRED_OOB_CODE","expired-action-code"),e(c)(q,"INVALID_OOB_CODE","invalid-action-code"),e(c)(q,"MISSING_OOB_CODE","internal-error"),e(c)(q,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(c)(q,"INVALID_ID_TOKEN","invalid-user-token"),e(c)(q,"TOKEN_EXPIRED","user-token-expired"),e(c)(q,"USER_NOT_FOUND","user-token-expired"),e(c)(q,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(c)(q,"INVALID_CODE","invalid-verification-code"),e(c)(q,"INVALID_SESSION_INFO","invalid-verification-id"),e(c)(q,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(c)(q,"MISSING_SESSION_INFO","missing-verification-id"),e(c)(q,"SESSION_EXPIRED","code-expired"),e(c)(q,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(c)(q,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(c)(q,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(c)(q,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(c)(q,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(c)(q,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(c)(q,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(c)(q,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(c)(q,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(c)(q,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(c)(q,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),q),H=new j(3e4,6e4);function G(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function W(e,t,n,r){return Q.apply(this,arguments)}function Q(){return Q=e(o)(e(y).mark((function t(n,r,i,a){var s,u=arguments;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},t.abrupt("return",X(n,s,e(o)(e(y).mark((function t(){var o,s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=(0,m.querystring)(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",z.fetch()(Z(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Q.apply(this,arguments)}function X(e,t,n){return Y.apply(this,arguments)}function Y(){return(Y=e(o)(e(y).mark((function t(n,r,i){var a,o,s,u,c,l,h,f,v;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},K),r),t.prev=2,o=new ee(n),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw te(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=e(d)(c.split(" : "),2),h=l[0],f=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){t.next=23;break}throw te(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==h){t.next=27;break}throw te(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==h){t.next=29;break}throw te(n,"user-disabled",u);case 29:if(v=a[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!f){t.next=34;break}throw A(n,v,f);case 34:S(n,v);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof m.FirebaseError)){t.next=41;break}throw t.t0;case 41:S(n,"network-request-failed",{message:String(t.t0)});case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function J(e,t,n,r){return $.apply(this,arguments)}function $(){return $=e(o)(e(y).mark((function t(n,r,i,a){var o,s,u=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,W(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&S(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),$.apply(this,arguments)}function Z(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?B(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var ee=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(C(n.auth,"network-request-failed"))}),H.get())}))}return e(u)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function te(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=C(e,t,r);return i.customData._tokenResponse=n,i}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=
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
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ie(e,t){return ae.apply(this,arguments)}function ae(){return(ae=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function oe(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function se(){return se=e(o)(e(y).mark((function t(n){var r,i,a,o,s,u,c=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,m.getModularInstance)(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,N((o=ce(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:oe(ue(o.auth_time)),issuedAtTime:oe(ue(o.iat)),expirationTime:oe(ue(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),se.apply(this,arguments)}function ue(e){return 1e3*Number(e)}function ce(t){var n=e(d)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return T("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,m.base64Decode)(i);return o?JSON.parse(o):(T("Failed to decode base64 JWT payload"),null)}catch(e){return T("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function le(e,t){return he.apply(this,arguments)}function he(){return he=
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
e(o)(e(y).mark((function t(n,r){var i=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof m.FirebaseError&&fe(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),he.apply(this,arguments)}function fe(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var de=function(){"use strict";function t(n){e(s)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(u)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(o)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),ve=function(){"use strict";function t(n,r){e(s)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(u)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=oe(this.lastLoginAt),this.creationTime=oe(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function pe(e){return ye.apply(this,arguments)}function ye(){return(ye=
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
e(o)(e(y).mark((function t(n){var r,i,a,o,s,u,c,l,h,f,d;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,le(n,ie(i,{idToken:a}));case 7:N(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?ke(s.providerUserInfo):[],c=ge(n.providerData,u),l=n.isAnonymous,h=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!l&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ve(s.createdAt,s.lastLoginAt),isAnonymous:f},Object.assign(n,d);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function me(){return(me=e(o)(e(y).mark((function t(n){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,m.getModularInstance)(n),e.next=3,pe(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ge(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(v)(r).concat(e(v)(n))}function ke(e){return e.map((function(e){var t=e.providerId,n=(0,w.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function we(e,t){return be.apply(this,arguments)}function be(){return(be=
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
e(o)(e(y).mark((function t(n,r){var i;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(n,{},e(o)(e(y).mark((function t(){var i,a,o,s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=Z(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",z.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var xe=function(){"use strict";function t(){e(s)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(u)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){N(e.idToken,"internal-error"),N(void 0!==e.idToken,"internal-error"),N(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,N(n=ce(t),"internal-error"),N(void 0!==n.exp,"internal-error"),N(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){var a,o,s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we(t,n);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return O("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(N("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(N("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(N("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
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
 */function Ee(e,t){N("string"==typeof e||void 0===e,"internal-error",{appName:t})}var _e=function(){"use strict";function t(n){e(s)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=(0,w.__rest)(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new de(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(v)(o.providerData):[],this.metadata=new ve(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(u)(t,[{key:"getIdToken",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(N(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return se.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return me.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){var n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(y).mark((function i(){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,pe(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,le(t,ne(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,w=n.emailVerified,b=n.isAnonymous,x=n.providerData,E=n.stsTokenManager;N(k&&E,e,"internal-error");var _=xe.fromJSON(this.name,E);N("string"==typeof k,e,"internal-error"),Ee(h,e.name),Ee(f,e.name),N("boolean"==typeof w,e,"internal-error"),N("boolean"==typeof b,e,"internal-error"),Ee(d,e.name),Ee(v,e.name),Ee(p,e.name),Ee(y,e.name),Ee(m,e.name),Ee(g,e.name);var I=new t({uid:k,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:g});return x&&Array.isArray(x)&&(I.providerData=x.map((function(e){return Object.assign({},e)}))),y&&(I._redirectEventId=y),I}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(o)(e(y).mark((function a(){var o,s;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new xe).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,pe(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Ie=function(){"use strict";function t(){e(s)(this,t),this.type="NONE",this.storage={}}return e(u)(t,[{key:"_isAvailable",value:function(){return e(o)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */Ie.type="NONE";var Te=Ie;
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
 */function Se(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ce=function(){"use strict";function t(n,r,i){e(s)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Se(this.userKey,o.apiKey,u),this.fullPersistenceKey=Se("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(u)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?_e._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(o)(e(y).mark((function a(){var s,u,c,l,h,f,d,v,p,m,g,k,w;return e(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new t(P(Te),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var t=e(o)(e(y).mark((function t(n){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||P(Te),c=Se(i,n.config.apiKey,n.name),l=null,h=!0,f=!1,d=void 0,a.prev=9,v=r[Symbol.iterator]();case 11:if(h=(p=v.next()).done){a.next=29;break}return m=p.value,a.prev=13,a.next=16,m._get(c);case 16:if(!(g=a.sent)){a.next=22;break}return k=_e._fromJSON(n,g),m!==u&&(l=k),u=m,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:h=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),f=!0,d=a.t1;case 35:a.prev=35,a.prev=36,h||null==v.return||v.return();case 38:if(a.prev=38,!f){a.next=41;break}throw d;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(w=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&w.length){a.next=46;break}return a.abrupt("return",new t(u,n,i));case 46:if(u=w[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var t=e(o)(e(y).mark((function t(n){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(u,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function Ae(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Re(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(De(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pe(t))return"Blackberry";if(Me(t))return"Webos";if(Ne(t))return"Safari";if((t.includes("chrome/")||Oe(t))&&!t.includes("edge/"))return"Chrome";if(Le(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/firefox\//i.test(e)}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/crios\//i.test(e)}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/iemobile/i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/android/i.test(e)}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/blackberry/i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/webos/i.test(e)}function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ue(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return Fe(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ve(){return(0,m.isIE)()&&10===document.documentMode}function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return Fe(e)||Le(e)||Me(e)||Pe(e)||/windows phone/i.test(e)||Re(e)}
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
function Be(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ae((0,m.getUA)());break;case"Worker":t="".concat(Ae((0,m.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(g.SDK_VERSION,"/").concat(r)}
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
 */var qe=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.queue=[]}return e(u)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a,o,s,u,c,l,h,f,d,v,p,m;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,o=!1,s=void 0,e.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){e.next=15;break}return l=c.value,e.next=11,l(t);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,s=e.t0;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),h=!0,f=!1,d=void 0,e.prev=35,v=i[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){m=p.value;try{m()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),f=!0,d=e.t2;case 43:e.prev=43,e.prev=44,h||null==v.return||v.return();case 46:if(e.prev=46,!f){e.next=49;break}throw d;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),ze=function(){"use strict";function t(n,r,i){e(s)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new He(this),this.idTokenSubscription=new He(this),this.beforeStateQueue=new qe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(u)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=P(n));var r=this;return this._initializationPromise=this.queue(e(o)(e(y).mark((function i(){var a,o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Ce.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a,o,s,u,c,l;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:l=e.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return N(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?(0,m.getModularInstance)(t):null)&&N(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(y).mark((function i(){return e(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&N(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(P(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,m.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return N(i=t&&P(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Ce.create(n,[P(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a;return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(o)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Be(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r,i,a;return e(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(c)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
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
 */function Ke(e){return(0,m.getModularInstance)(e)}var He=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.auth=n,this.observer=null,this.addObserver=(0,m.createSubscribe)((function(e){return r.observer=e}))}return e(u)(t,[{key:"next",get:function(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function Ge(t,n,r){var i=Ke(t);N(i._canInitEmulator,i,"emulator-config-failed"),N(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=We(n),s=function(t){var n=We(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Qe(i.substr(o.length+1))}}var s=e(d)(i.split(":"),2);return{host:s[0],port:Qe(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function We(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Qe(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Xe=function(){"use strict";function t(n,r){e(s)(this,t),this.providerId=n,this.signInMethod=r}return e(u)(t,[{key:"toJSON",value:function(){return O("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return O("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return O("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return O("not implemented")}}]),t}();function Ye(e,t){return Je.apply(this,arguments)}function Je(){return(Je=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $e(e,t){return Ze.apply(this,arguments)}function Ze(){return(Ze=
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
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithPassword",G(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function et(e,t){return tt.apply(this,arguments)}function tt(){return(tt=
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
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithEmailLink",G(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function nt(e,t){return rt.apply(this,arguments)}function rt(){return(rt=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithEmailLink",G(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var it=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(t,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(s)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=u,o}return e(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",$e(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",et(t,{email:n._email,oobCode:n._password}));case 5:S(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Ye(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",nt(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:S(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Xe);function at(e,t){return ot.apply(this,arguments)}function ot(){return(ot=
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
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithIdp",G(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var st=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return at(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,at(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,at(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,m.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):S("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=(0,w.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Xe);function ut(e,t){return ct.apply(this,arguments)}function ct(){return(ct=
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
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n,"POST","/v1/accounts:sendVerificationCode",G(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function lt(){return(lt=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithPhoneNumber",G(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ht(){return(ht=e(o)(e(y).mark((function t(n,r){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(n,"POST","/v1/accounts:signInWithPhoneNumber",G(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw te(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var ft=e(c)({},"USER_NOT_FOUND","user-not-found");function dt(){return(dt=e(o)(e(y).mark((function t(n,r){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",J(n,"POST","/v1/accounts:signInWithPhoneNumber",G(n,i),ft));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var vt=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return lt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ht.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return dt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Xe);
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
 */var pt=function(){"use strict";function t(n){var r,i,a,o,u,c;e(s)(this,t);var l=(0,m.querystringDecode)((0,m.extractQuerystring)(n)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);N(h&&f&&d,"argument-error"),this.apiKey=h,this.operation=d,this.code=f,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(u)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=(0,m.querystringDecode)((0,m.extractQuerystring)(e)).link,n=t?(0,m.querystringDecode)((0,m.extractQuerystring)(t)).deep_link_id:null,r=(0,m.querystringDecode)((0,m.extractQuerystring)(e)).deep_link_id;return(r?(0,m.querystringDecode)((0,m.extractQuerystring)(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
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
var yt=function(){"use strict";function t(){e(s)(this,t),this.providerId=t.PROVIDER_ID}return e(u)(t,null,[{key:"credential",value:function(e,t){return it._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=pt.parseLink(t);return N(n,"argument-error"),it._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();yt.PROVIDER_ID="password",yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var mt=function(){"use strict";function t(n){e(s)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(u)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),gt=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(v)(this.scopes)}}]),r}(mt),kt=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(){return e(s)(this,r),n.call(this,"facebook.com")}return e(u)(r,null,[{key:"credential",value:function(e){return st._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(gt);
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
 */kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",kt.PROVIDER_ID="facebook.com";
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
var wt=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(){var t;return e(s)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(u)(r,null,[{key:"credential",value:function(e,t){return st._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(gt);wt.GOOGLE_SIGN_IN_METHOD="google.com",wt.PROVIDER_ID="google.com";
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
var bt=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(){return e(s)(this,r),n.call(this,"github.com")}return e(u)(r,null,[{key:"credential",value:function(e){return st._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(gt);bt.GITHUB_SIGN_IN_METHOD="github.com",bt.PROVIDER_ID="github.com";
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
var xt=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(){return e(s)(this,r),n.call(this,"twitter.com")}return e(u)(r,null,[{key:"credential",value:function(e,t){return st._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(gt);function Et(e,t){return _t.apply(this,arguments)}function _t(){return(_t=
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
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signUp",G(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */xt.TWITTER_SIGN_IN_METHOD="twitter.com",xt.PROVIDER_ID="twitter.com";var It=function(){"use strict";function t(n){e(s)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(u)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(o)(e(y).mark((function o(){var s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e._fromIdTokenResponse(n,i,a);case 2:return s=e.sent,u=Tt(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:r}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return e(o)(e(y).mark((function a(){var o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Tt(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function Tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var St=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(t,a,o,u){var c,l;return e(s)(this,r),(c=n.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(e(i)(c),r.prototype),c.customData={appName:t.name,tenantId:null!==(l=t.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return e(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(m.FirebaseError);function Ct(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw St._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function At(e,t){return Dt.apply(this,arguments)}function Dt(){return Dt=e(o)(e(y).mark((function t(n,r){var i,a,o=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=le,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",It._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),Dt.apply(this,arguments)}function Nt(e,t){return Ot.apply(this,arguments)}function Ot(){return Ot=
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
e(o)(e(y).mark((function t(n,r){var i,a,o,s,u,c,l=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,le(n,Ct(a,o,r,n),i);case 6:return N((s=e.sent).idToken,a,"internal-error"),N(u=ce(s.idToken),a,"internal-error"),c=u.sub,N(n.uid===c,a,"user-mismatch"),e.abrupt("return",It._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&S(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),Ot.apply(this,arguments)}function Rt(e,t){return Lt.apply(this,arguments)}function Lt(){return Lt=
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
e(o)(e(y).mark((function t(n,r){var i,a,o,s,u=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,Ct(n,a,r);case 4:return o=e.sent,e.next=7,It._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),Lt.apply(this,arguments)}function Pt(e,t){return Mt.apply(this,arguments)}function Mt(){return(Mt=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Rt(Ke(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ft(e,t,n){return Ut.apply(this,arguments)}function Ut(){return(Ut=e(o)(e(y).mark((function t(n,r,i){var a,o,s;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Ke(n),e.next=3,Et(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,It._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vt(e,t,n){return Pt((0,m.getModularInstance)(e),yt.credential(t,n))}function jt(e,t,n,r){return(0,m.getModularInstance)(e).onIdTokenChanged(t,n,r)}function Bt(e,t,n){return(0,m.getModularInstance)(e).beforeAuthStateChanged(t,n)}function qt(e,t,n,r){return(0,m.getModularInstance)(e).onAuthStateChanged(t,n,r)}function zt(e){return(0,m.getModularInstance)(e).signOut()}
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
function Kt(e,t){return W(e,"POST","/v2/accounts/mfaEnrollment:start",G(e,t))}function Ht(e,t){return W(e,"POST","/v2/accounts/mfaEnrollment:finalize",G(e,t))}new WeakMap;var Gt="__sak",Wt=function(){"use strict";function t(n,r){e(s)(this,t),this.storageRetriever=n,this.type=r}return e(u)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Gt,"1"),this.storage.removeItem(Gt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var Qt=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(){var t,i;return e(s)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Ne(i=(0,m.getUA)())||Fe(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=je(),t._shouldAllowMigration=!0,t}return e(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Ve()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,a=this;return e(o)(e(y).mark((function o(){return e(y).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(l)(e(h)(r.prototype),"_set",i).call(a,t,n);case 2:a.localCache[t]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(o)(e(y).mark((function a(){var o;return e(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(h)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(o)(e(y).mark((function a(){return e(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(h)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(Wt);Qt.type="LOCAL";var Xt=Qt,Yt=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(){return e(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Wt);
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
 */Yt.type="SESSION";var Jt=Yt;
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
 */function $t(t){return Promise.all(t.map((n=e(o)(e(y).mark((function t(n){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
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
 */var Zt=function(){"use strict";function t(n){e(s)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(u)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a,s,u,c,l,h,f;return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=t).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=n.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),h=Array.from(l).map(function(){var t=e(o)(e(y).mark((function t(n){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,$t(h);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
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
function en(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Zt.receivers=[];var tn=function(){"use strict";function t(n){e(s)(this,t),this.target=n,this.handlers=new Set}return e(u)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(o)(e(y).mark((function a(){var o,s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=en("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
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
 */function nn(){return window}
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
function rn(){return void 0!==nn().WorkerGlobalScope&&"function"==typeof nn().importScripts}function an(){return on.apply(this,arguments)}function on(){return(on=e(o)(e(y).mark((function t(){var n;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var sn="firebaseLocalStorageDb",un="firebaseLocalStorage",cn="fbase_key",ln=function(){"use strict";function t(n){e(s)(this,t),this.request=n}return e(u)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function hn(e,t){return e.transaction([un],t?"readwrite":"readonly").objectStore(un)}function fn(){var e=indexedDB.deleteDatabase(sn);return new ln(e).toPromise()}function dn(){var t=indexedDB.open(sn,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(un,{keyPath:cn})}catch(e){r(e)}})),t.addEventListener("success",e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(un)){e.next=12;break}return i.close(),e.next=5,fn();case 5:return e.t0=n,e.next=8,dn();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function vn(e,t,n){return pn.apply(this,arguments)}function pn(){return(pn=e(o)(e(y).mark((function t(n,r,i){var a,o;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=hn(n,!0).put((a={},e(c)(a,cn,r),e(c)(a,"value",i),a)),t.abrupt("return",new ln(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function yn(e,t){return mn.apply(this,arguments)}function mn(){return(mn=e(o)(e(y).mark((function t(n,r){var i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=hn(n,!1).get(r),e.next=3,new ln(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gn(e,t){var n=hn(e,!0).delete(t);return new ln(n).toPromise()}var kn=function(){"use strict";function t(){e(s)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(u)(t,[{key:"_openDb",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,dn();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",rn()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=Zt._getInstance(rn()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(o)(e(y).mark((function n(r,i){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r,i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,an();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new tn(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(o)(e(y).mark((function t(){var n;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,dn();case 5:return n=e.sent,e.next=8,vn(n,Gt,"1");case 8:return e.next=10,gn(n,Gt);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){return e(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(o)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return vn(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return yn(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return gn(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r,i,a,o,s,u,c,l,h,f,d,v,p,m,g,k,w;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=hn(e,!1).getAll();return new ln(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)h=l.value,f=h.fbase_key,d=h.value,a.add(f),JSON.stringify(t.localCache[f])!==JSON.stringify(d)&&(t.notifyListeners(f,d),i.push(f));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,p=!1,m=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=g.next()).done);v=!0)w=k.value,t.localCache[w]&&!a.has(w)&&(t.notifyListeners(w,null),i.push(w));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),p=!0,m=e.t1;case 35:e.prev=35,e.prev=36,v||null==g.return||g.return();case 38:if(e.prev=38,!p){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();kn.type="LOCAL";var wn=kn;
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
 */function bn(e,t){return W(e,"POST","/v2/accounts/mfaSignIn:start",G(e,t))}function xn(e,t){return W(e,"POST","/v2/accounts/mfaSignIn:finalize",G(e,t))}function En(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=C("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function _n(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
_n("rcb"),new j(3e4,6e4);var In="recaptcha";
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
 */function Tn(e,t,n){return Sn.apply(this,arguments)}function Sn(){return(Sn=e(o)(e(y).mark((function t(n,r,i){var a,o,s,u,c,l,h,f;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,N("string"==typeof o,n,"argument-error"),N(i.type===In,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return N("enroll"===u.type,n,"internal-error"),e.next=15,Kt(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return N("signin"===u.type,n,"internal-error"),N(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,bn(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ut(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var Cn=function(){"use strict";function t(n){e(s)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Ke(n)}return e(u)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Tn(this.auth,e,(0,m.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return vt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?vt._fromTokenResponse(n,r):null}}]),t}();
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
function An(e,t){return t?P(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Cn.PROVIDER_ID="phone",Cn.PHONE_SIGN_IN_METHOD="phone";var Dn=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(u)(r,[{key:"_getIdTokenResponse",value:function(e){return at(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return at(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return at(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Xe);function Nn(e){return Rt(e.auth,new Dn(e),e.bypassAuthState)}function On(e){var t=e.auth,n=e.user;return N(n,t,"internal-error"),Nt(n,new Dn(e),e.bypassAuthState)}function Rn(e){return Ln.apply(this,arguments)}function Ln(){return(Ln=e(o)(e(y).mark((function t(n){var r,i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,N(i=n.user,r,"internal-error"),e.abrupt("return",At(i,new Dn(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Pn=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(s)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(u)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(o)(e(y).mark((function t(r,i){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a,o,s,u,c,l;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(c)(l);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nn;case"linkViaPopup":case"linkViaRedirect":return Rn;case"reauthViaPopup":case"reauthViaRedirect":return On;default:S(this.auth,"internal-error")}}},{key:"resolve",value:function(e){R(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){R(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Mn=new j(2e3,1e4);
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
 */var Fn=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(t,a,o,u,c){var l;return e(s)(this,r),(l=n.call(this,t,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(i)(l),l}return e(u)(r,[{key:"executeNotNull",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return N(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(1===t.filter.length,"Popup operations only handle one event"),r=en(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(C(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(C(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(C(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Mn.get())};t()}}]),r}(Pn);Fn.currentPopupAction=null;
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
var Un=new Map,Vn=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(u)(r,[{key:"execute",value:function(){var t=this,n=this;return e(o)(e(y).mark((function i(){var a,o;return e(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Un.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,jn(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(l)(e(h)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Un.set(n.auth._key(),a);case 21:return n.bypassAuthState||Un.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,a=function(){return e(l)(e(h)(r.prototype),"onAuthEvent",n)};return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(o)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(Pn);function jn(e,t){return Bn.apply(this,arguments)}function Bn(){return(Bn=e(o)(e(y).mark((function t(n,r){var i,a,o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Kn(r),a=zn(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qn(e,t){Un.set(e._key(),t)}function zn(e){return P(e._redirectPersistence)}function Kn(e){return Se("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Hn(e,t){return Gn.apply(this,arguments)}function Gn(){return Gn=e(o)(e(y).mark((function t(n,r){var i,a,o,s,u,c=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=Ke(n),o=An(a,r),s=new Vn(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),Gn.apply(this,arguments)}
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
var Wn=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(u)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xn(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Xn(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(C(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Qn(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Qn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Xn(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Yn(e){return Jn.apply(this,arguments)}function Jn(){return Jn=
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
e(o)(e(y).mark((function t(n){var r,i=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",W(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),Jn.apply(this,arguments)}
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
 */var $n=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zn=/^https?/;function er(){return(er=e(o)(e(y).mark((function t(n){var r,i,a,o,s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Yn(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!tr(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:S(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function tr(e){var t=F(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Zn.test(r))return!1;if($n.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */var nr=new j(3e4,6e4);function rr(){var t=nn().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(v)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var ir=null;function ar(e){return ir=ir||function(e){return new Promise((function(t,n){var r,i,a;function o(){rr(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){rr(),n(C(e,"network-request-failed"))},timeout:nr.get()})}if(null===(i=null===(r=nn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=nn().gapi)||void 0===a?void 0:a.load)){var s=_n("iframefcb");return nn()[s]=function(){gapi.load?o():n(C(e,"network-request-failed"))},En("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw ir=null,e}))}(e),ir}
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
 */var or=new j(5e3,15e3),sr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ur=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cr(e){var t=e.config;N(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?B(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:g.SDK_VERSION},i=ur.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat((0,m.querystring)(r).slice(1))}function lr(e){return hr.apply(this,arguments)}function hr(){return hr=e(o)(e(y).mark((function t(n){var r,i;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ar(n);case 2:return r=t.sent,N(i=nn().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:cr(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sr,dontclear:!0},(function(t){return new Promise((r=e(o)(e(y).mark((function r(i,a){var o,s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){nn().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=C(n,"network-request-failed"),s=nn().setTimeout((function(){a(o)}),or.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),hr.apply(this,arguments)}
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
 */var fr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dr="_blank",vr="http://localhost",pr=function(){"use strict";function t(n){e(s)(this,t),this.window=n,this.associatedEvent=null}return e(u)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function yr(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},fr),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,m.getUA)().toLowerCase();r&&(u=Oe(l)?dr:r),De(l)&&(n=n||vr,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(d)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(Ue(l)&&"_self"!==u)return mr(n||"",u),new pr(null);var f=window.open(n||"",u,h);N(f,t,"popup-blocked");try{f.focus()}catch(e){}return new pr(f)}function mr(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var gr="__/auth/handler",kr="emulator/auth/handler";function wr(t,n,r,i,a,o){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:g.SDK_VERSION,eventId:a};if(n instanceof mt){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",(0,m.isEmpty)(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(o||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var v=e(d)(h.value,2),p=v[0],y=v[1];s[p]=y}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof gt){var k=n.getScopes().filter((function(e){return""!==e}));k.length>0&&(s.scopes=k.join(","))}t.tenantId&&(s.tid=t.tenantId);var w,b,x=s,E=!0,_=!1,I=void 0;try{for(var T,S=Object.keys(x)[Symbol.iterator]();!(E=(T=S.next()).done);E=!0){var C=T.value;void 0===x[C]&&delete x[C]}}catch(e){_=!0,I=e}finally{try{E||null==S.return||S.return()}finally{if(_)throw I}}return"".concat((w=t,b=w.config,b.emulator?B(b,kr):"https://".concat(b.authDomain,"/").concat(gr)),"?").concat((0,m.querystring)(x).slice(1))}
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
var br="webStorageSupport",xr=function(){"use strict";function t(){e(s)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jt,this._completeRedirectFn=Hn,this._overrideRedirectResult=qn}return e(u)(t,[{key:"_openPopup",value:function(t,n,r,i){var a=this;return e(o)(e(y).mark((function o(){var s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=wr(t,n,r,F(),i),e.abrupt("return",yr(t,u,en()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var a=this;return e(o)(e(y).mark((function o(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return o=wr(t,n,r,F(),i),nn().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(R(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,lr(t);case 2:return i=e.sent,a=new Wn(t),i.register("authEvent",(function(e){return N(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(br,{type:br},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),S(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return er.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return je()||Ne()||Fe()}}]),t}(),Er=xr,_r=function(){"use strict";function t(n){e(s)(this,t),this.factorId=n}return e(u)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return O("unexpected MultiFactorSessionType")}}}]),t}(),Ir=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return W(e,"POST","/v2/accounts/mfaEnrollment:finalize",G(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return W(e,"POST","/v2/accounts/mfaSignIn:finalize",G(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(_r);(function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"assertion",value:function(e){return Ir._fromCredential(e)}}]),t}()).FACTOR_ID="phone",(function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"assertionForEnrollment",value:function(e,t){return Tr._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Tr._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(t){return e(o)(e(y).mark((function n(){var r,i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(void 0!==(r=t).auth,"internal-error"),e.next=4,n=r.auth,a={idToken:r.credential,totpEnrollmentInfo:{}},W(n,"POST","/v2/accounts/mfaEnrollment:start",G(n,a));case 4:return i=e.sent,e.abrupt("return",Sr._fromStartTotpMfaEnrollmentResponse(i,r.auth));case 6:case"end":return e.stop()}var n,a}),n)})))()}}]),t}()).FACTOR_ID="totp";var Tr=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(t,i,a){var o;return e(s)(this,r),(o=n.call(this,"totp")).otp=t,o.enrollmentId=i,o.secret=a,o}return e(u)(r,[{key:"_finalizeEnroll",value:function(t,n,r){var i=this;return e(o)(e(y).mark((function a(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(void 0!==i.secret,t,"argument-error"),e.abrupt("return",Ht(t,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return e.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(void 0!==r.enrollmentId&&void 0!==r.otp,t,"argument-error"),a={verificationCode:r.otp},e.abrupt("return",xn(t,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return e.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(_r),Sr=function(){"use strict";function t(n,r,i,a,o,u,c){e(s)(this,t),this.sessionInfo=u,this.auth=c,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return e(u)(t,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(Cr(e)||Cr(t))&&(r=!0),r&&(Cr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Cr(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}}]),t}();function Cr(e){return void 0===e||0===(null==e?void 0:e.length)}var Ar="@firebase/auth",Dr="0.22.0",Nr=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.internalListeners=new Map}return e(u)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
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
var Or,Rr=(0,m.getExperimentalSetting)("authIdTokenMaxAge")||300,Lr=null,Pr=function(t){return n=e(o)(e(y).mark((function n(r){var i,a,o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Rr)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,Lr!==o){e.next=12;break}return e.abrupt("return");case 12:return Lr=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function Mr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getApp)(),t=(0,g._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var n=M(e,{popupRedirectResolver:Er,persistence:[wn,Xt,Jt]}),r=(0,m.getExperimentalSetting)("authTokenSyncURL");if(r){var i=Pr(r);Bt(n,i,(function(){return i(n.currentUser)})),jt(n,(function(e){return i(e)}))}var a=(0,m.getDefaultEmulatorHost)("auth");return a&&Ge(n,"http://".concat(a)),n}Or="Browser",(0,g._registerComponent)(new(0,b.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){N(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),N(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Or,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Be(Or)},i=new ze(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(P);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,g._registerComponent)(new(0,b.Component)("auth-internal",(function(e){var t=Ke(e.getProvider("auth").getImmediate());return new Nr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,g.registerVersion)(Ar,Dr,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Or)),(0,g.registerVersion)(Ar,Dr,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=a("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a.register("4tSb9",(function(e,n){t(e.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),a.register("6m2hf",(function(e,n){t(e.exports,"getDocs",(function(){return a("221Dt").getDocs})),t(e.exports,"collection",(function(){return a("221Dt").collection})),t(e.exports,"doc",(function(){return a("221Dt").doc})),t(e.exports,"getFirestore",(function(){return a("221Dt").getFirestore})),t(e.exports,"setDoc",(function(){return a("221Dt").setDoc})),a("221Dt")})),a.register("221Dt",(function(n,r){t(n.exports,"collection",(function(){return Zo})),t(n.exports,"doc",(function(){return es})),t(n.exports,"getFirestore",(function(){return rs})),t(n.exports,"getDocs",(function(){return Us})),t(n.exports,"setDoc",(function(){return Vs}));var i=a("bpxeT"),o=a("8MBJY"),s=a("ge8co"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),h=a("eYQtU"),f=a("jmhxu"),d=a("1t1Wn"),v=a("8nrFW"),p=(a("l5bVx"),a("4c7YB")),y=a("2MbLg"),m=a("2TvXO"),g=a("MjY8E"),k=a("6ExWU"),w=a("kZfxc"),b=a("2xDiJ"),x=a("6RwJk"),E=(a("6qd2L"),"@firebase/firestore"),_=function(){"use strict";function t(n){e(o)(this,t),this.uid=n}return e(u)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();_.UNAUTHENTICATED=new _(null),_.GOOGLE_CREDENTIALS=new _("google-credentials-uid"),_.FIRST_PARTY=new _("first-party-uid"),_.MOCK_USER=new _("mock-user");
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
var I="9.19.0",T=new(0,w.Logger)("@firebase/firestore");
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
 */function S(){return T.logLevel}function C(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.DEBUG){var a,o=r.map(N);(a=T).debug.apply(a,["Firestore (".concat(I,"): ").concat(t)].concat(e(v)(o)))}}function A(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.ERROR){var a,o=r.map(N);(a=T).error.apply(a,["Firestore (".concat(I,"): ").concat(t)].concat(e(v)(o)))}}function D(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.WARN){var a,o=r.map(N);(a=T).warn.apply(a,["Firestore (".concat(I,"): ").concat(t)].concat(e(v)(o)))}}function N(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(I,") INTERNAL ASSERTION FAILED: ")+e;throw A(t),new Error(t)}function R(e,t){e||O()}function L(e,t){return e}
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
 */var P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},M=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(f)(a)}return r}(b.FirebaseError),F=function t(){"use strict";var n=this;e(o)(this,t),this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))},U=function t(n,r){"use strict";e(o)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},V=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(_.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),j=function(){"use strict";function t(n){e(o)(this,t),this.token=n,this.changeListener=null}return e(u)(t,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),t}(),B=function(){"use strict";function t(n){e(o)(this,t),this.t=n,this.currentUser=_.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return e(u)(t,[{key:"start",value:function(t,n){var r=this,a=this.i,o=function(e){return r.i!==a?(a=r.i,n(e)):Promise.resolve()},s=new F;this.o=function(){var e=r;r.i++,r.currentUser=r.u(),s.resolve(),s=new F,t.enqueueRetryable((function(){return o(e.currentUser)}))};var u=function(){var n=s,a=r;t.enqueueRetryable(e(i)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.promise;case 2:return e.next=4,o(a.currentUser);case 4:case"end":return e.stop()}}),t)}))))},c=function(e){C("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),u()};this.t.onInit((function(e){return c(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?c(e):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new F)}}),0),u()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(R("string"==typeof n.accessToken),new U(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return R(null===e||"string"==typeof e),new _(e)}}]),t}(),q=function(){"use strict";function t(n,r,i){e(o)(this,t),this.h=n,this.l=r,this.m=i,this.type="FirstParty",this.user=_.FIRST_PARTY,this.g=new Map}return e(u)(t,[{key:"p",value:function(){return this.m?this.m():null}},{key:"headers",get:function(){this.g.set("X-Goog-AuthUser",this.h);var e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}]),t}(),z=function(){"use strict";function t(n,r,i){e(o)(this,t),this.h=n,this.l=r,this.m=i}return e(u)(t,[{key:"getToken",value:function(){return Promise.resolve(new q(this.h,this.l,this.m))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(_.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),K=function t(n){"use strict";e(o)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},H=function(){"use strict";function t(n){e(o)(this,t),this.I=n,this.forceRefresh=!1,this.appCheck=null,this.T=null}return e(u)(t,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&C("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.T;return n.T=e.token,C("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){C("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.I.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.I.getImmediate({optional:!0});e?r(e):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(R("string"==typeof t.token),e.T=t.token,new K(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),t}();
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
function G(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */var W=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,null,[{key:"A",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=G(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),t}();function Q(e,t){return e<t?-1:e>t?1:0}function X(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
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
var Y=function(){"use strict";function t(n,r){if(e(o)(this,t),this.seconds=n,this.nanoseconds=r,r<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}return e(u)(t,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return t.fromMillis(Date.now())}},{key:"fromDate",value:function(e){return t.fromMillis(e.getTime())}},{key:"fromMillis",value:function(e){var n=Math.floor(e/1e3);return new t(n,Math.floor(1e6*(e-1e3*n)))}}]),t}(),J=function(){"use strict";function t(n){e(o)(this,t),this.timestamp=n}return e(u)(t,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(e){return new t(e)}},{key:"min",value:function(){return new t(new Y(0,0))}},{key:"max",value:function(){return new t(new Y(253402300799,999999999))}}]),t}(),$=function(){"use strict";function t(n,r,i){e(o)(this,t),void 0===r?r=0:r>n.length&&O(),void 0===i?i=n.length-r:i>n.length-r&&O(),this.segments=n,this.offset=r,this.len=i}return e(u)(t,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(e){return 0===t.comparator(this,e)}},{key:"child",value:function(e){var n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach((function(e){n.push(e)})):n.push(e),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),t}(),Z=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h,f=c.value;if(f.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,"Invalid segment (".concat(f,"). Paths must not contain // in them."));(h=a).push.apply(h,e(v)(f.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}($),ee=/^[_a-zA-Z][_a-zA-Z0-9]*$/,te=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return ee.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new M(P.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}($),ne=function(){"use strict";function t(n){e(o)(this,t),this.path=n}return e(u)(t,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===Z.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(e){return new t(Z.fromString(e))}},{key:"fromName",value:function(e){return new t(Z.fromString(e).popFirst(5))}},{key:"empty",value:function(){return new t(Z.emptyPath())}},{key:"comparator",value:function(e,t){return Z.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(e){return new t(new Z(e.slice()))}}]),t}(),re=function t(n,r,i,a){"use strict";e(o)(this,t),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
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
 */re.UNKNOWN_ID=-1;function ie(e,t){var n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=J.fromTimestamp(1e9===r?new Y(n+1,0):new Y(n,r));return new oe(i,ne.empty(),t)}function ae(e){return new oe(e.readTime,e.key,-1)}var oe=function(){"use strict";function t(n,r,i){e(o)(this,t),this.readTime=n,this.documentKey=r,this.largestBatchId=i}return e(u)(t,null,[{key:"min",value:function(){return new t(J.min(),ne.empty(),-1)}},{key:"max",value:function(){return new t(J.max(),ne.empty(),-1)}}]),t}();function se(e,t){var n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=ne.comparator(e.documentKey,t.documentKey))?n:Q(e.largestBatchId,t.largestBatchId)}
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
 */var ue="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ce=function(){"use strict";function t(){e(o)(this,t),this.onCommittedListeners=[]}return e(u)(t,[{key:"addOnCommittedListener",value:function(e){this.onCommittedListeners.push(e)}},{key:"raiseOnCommittedEvent",value:function(){this.onCommittedListeners.forEach((function(e){return e()}))}}]),t}();function le(e){return he.apply(this,arguments)}function he(){return(he=
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
e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.code===P.FAILED_PRECONDITION&&n.message===ue){e.next=2;break}throw n;case 2:C("LocalStore","Unexpectedly lost primary lease");case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var fe=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n((function(e){r.isDone=!0,r.result=e,r.nextCallback&&r.nextCallback(e)}),(function(e){r.isDone=!0,r.error=e,r.catchCallback&&r.catchCallback(e)}))}return e(u)(t,[{key:"catch",value:function(e){return this.next(void 0,e)}},{key:"next",value:function(e,n){var r=this;return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t((function(t,i){var a=r;r.nextCallback=function(n){a.wrapSuccess(e,n).next(t,i)},r.catchCallback=function(e){a.wrapFailure(n,e).next(t,i)}}))}},{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.next(t,n)}))}},{key:"wrapUserFunction",value:function(e){try{var n=e();return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}}},{key:"wrapSuccess",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.resolve(n)}},{key:"wrapFailure",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.reject(n)}}],[{key:"resolve",value:function(e){return new t((function(t,n){t(e)}))}},{key:"reject",value:function(e){return new t((function(t,n){n(e)}))}},{key:"waitFor",value:function(e){return new t((function(t,n){var r=0,i=0,a=!1;e.forEach((function(e){++r,e.next((function(){++i,a&&i===r&&t()}),(function(e){return n(e)}))})),a=!0,i===r&&t()}))}},{key:"or",value:function(e){var n=t.resolve(!1),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=r.value;n=n.next((function(e){return e?t.resolve(e):i()}))},u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}},{key:"forEach",value:function(e,t){var n=this,r=[];return e.forEach((function(e,i){r.push(t.call(n,e,i))})),this.waitFor(r)}},{key:"mapArray",value:function(e,n){return new t((function(t,r){for(var i=function(i){var u=i;n(e[u]).next((function(e){o[u]=e,++s===a&&t(o)}),(function(e){return r(e)}))},a=e.length,o=new Array(a),s=0,u=0;u<a;u++)i(u)}))}},{key:"doWhile",value:function(e,n){return new t((function(t,r){var i=function(){!0===e()?n().next((function(){i()}),r):t()};i()}))}}]),t}();
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
 */function de(e){return"IndexedDbTransactionError"===e.name}var ve=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.previousValue=n,r&&(r.sequenceNumberHandler=function(e){return i.ot(e)},this.ut=function(e){return r.writeSequenceNumber(e)})}return e(u)(t,[{key:"ot",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this.ut&&this.ut(e),e}}]),t}();function pe(e){return null==e}function ye(e){return 0===e&&1/e==-1/0}function me(e){return"number"==typeof e&&Number.isInteger(e)&&!ye(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */ve.ct=-1;var ge=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ke=(e(v)(ge).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),we=ke;
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
 */e(v)(we).concat(["indexConfiguration","indexState","indexEntries"]);
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
function be(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xe(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ee(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */var _e=function(){"use strict";function t(n,r){e(o)(this,t),this.comparator=n,this.root=r||Te.EMPTY}return e(u)(t,[{key:"insert",value:function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Te.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new Ie(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new Ie(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new Ie(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new Ie(this.root,e,this.comparator,!0)}}]),t}(),Ie=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.isReverse=a,this.nodeStack=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,r&&a&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(0===s){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return e(u)(t,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),t}(),Te=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=s?s:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(u)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw O();if(this.right.isRed())throw O();var e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}]),t}();Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1,Te.EMPTY=new(function(){"use strict";function t(){e(o)(this,t),this.size=0}return e(u)(t,[{key:"key",get:function(){throw O()}},{key:"value",get:function(){throw O()}},{key:"color",get:function(){throw O()}},{key:"left",get:function(){throw O()}},{key:"right",get:function(){throw O()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Te(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
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
var Se=function(){"use strict";function t(n){e(o)(this,t),this.comparator=n,this.data=new _e(this.comparator)}return e(u)(t,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new Ce(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new Ce(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.data.getIterator(),r=e.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(e){var n=new t(this.comparator);return n.data=e,n}}]),t}(),Ce=function(){"use strict";function t(n){e(o)(this,t),this.iter=n}return e(u)(t,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),t}();
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
var Ae=function(){"use strict";function t(n){e(o)(this,t),this.fields=n,n.sort(te.comparator)}return e(u)(t,[{key:"unionWith",value:function(e){var n=new Se(te.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,h=void 0;try{for(var f,d=e[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var v=f.value;n=n.add(v)}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}return new t(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return X(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new t([])}}]),t}(),De=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(){var t;return e(o)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",e(f)(t)}return r}(e(p)(Error));
/**
 * @license
 * Copyright 2023 Google LLC
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
 */var Ne=Symbol.iterator,Oe=function(){"use strict";function t(n){e(o)(this,t),this.binaryString=n}return e(u)(t,[{key:Ne,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return Q(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new De("Invalid base64 string: "+e):e}}(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();
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
 */Oe.EMPTY_BYTE_STRING=new Oe("");var Re=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Le(e){if(R(!!e),"string"==typeof e){var t=0,n=Re.exec(e);if(R(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Pe(e.seconds),nanos:Pe(e.nanos)}}function Pe(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Me(e){return"string"==typeof e?Oe.fromBase64String(e):Oe.fromUint8Array(e)}
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
 */function Fe(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ue(e){var t=e.mapValue.fields.__previous_value__;return Fe(t)?Ue(t):t}function Ve(e){var t=Le(e.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}
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
 */var je=function t(n,r,i,a,s,u,c,l){"use strict";e(o)(this,t),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=s,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.useFetchStreams=l},Be=function(){"use strict";function t(n,r){e(o)(this,t),this.projectId=n,this.database=r||"(default)"}return e(u)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}(),qe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ze(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Fe(e)?4:nt(e)?9007199254740991:10:O()}function Ke(e,t){if(e===t)return!0;var n,r=ze(e);if(r!==ze(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ve(e).isEqual(Ve(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=Le(e.timestampValue),r=Le(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,Me(e.bytesValue).isEqual(Me(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Pe(e.geoPointValue.latitude)===Pe(t.geoPointValue.latitude)&&Pe(e.geoPointValue.longitude)===Pe(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Pe(e.integerValue)===Pe(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=Pe(e.doubleValue),r=Pe(t.doubleValue);return n===r?ye(n)===ye(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return X(e.arrayValue.values||[],t.arrayValue.values||[],Ke);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(be(n)!==be(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ke(n[i],r[i])))return!1;return!0}(e,t);default:return O()}}function He(e,t){return void 0!==(e.values||[]).find((function(e){return Ke(e,t)}))}function Ge(e,t){if(e===t)return 0;var n,r,i,a,o=ze(e),s=ze(t);if(o!==s)return Q(o,s);switch(o){case 0:case 9007199254740991:return 0;case 1:return Q(e.booleanValue,t.booleanValue);case 2:return r=t,i=Pe((n=e).integerValue||n.doubleValue),a=Pe(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return We(e.timestampValue,t.timestampValue);case 4:return We(Ve(e),Ve(t));case 5:return Q(e.stringValue,t.stringValue);case 6:return function(e,t){var n=Me(e),r=Me(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=Q(n[i],r[i]);if(0!==a)return a}return Q(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=Q(Pe(e.latitude),Pe(t.latitude));return 0!==n?n:Q(Pe(e.longitude),Pe(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=Ge(n[i],r[i]);if(a)return a}return Q(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===qe.mapValue&&t===qe.mapValue)return 0;if(e===qe.mapValue)return 1;if(t===qe.mapValue)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var s=Q(r[o],a[o]);if(0!==s)return s;var u=Ge(n[r[o]],i[a[o]]);if(0!==u)return u}return Q(r.length,a.length)}(e.mapValue,t.mapValue);default:throw O()}}function We(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Q(e,t);var n=Le(e),r=Le(t),i=Q(n.seconds,r.seconds);return 0!==i?i:Q(n.nanos,r.nanos)}function Qe(e){return Xe(e)}function Xe(e){var t,n,r,i;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(r=e.timestampValue,i=Le(r),"time(".concat(i.seconds,",").concat(i.nanos,")")):"stringValue"in e?e.stringValue:"bytesValue"in e?Me(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ne.fromName(n).toString()):"geoPointValue"in e?"geo(".concat((t=e.geoPointValue).latitude,",").concat(t.longitude,")"):"arrayValue"in e?function(e){var t="[",n=!0,r=!0,i=!1,a=void 0;try{for(var o,s=(e.values||[])[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n?n=!1:t+=",",t+=Xe(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t+"]"}(e.arrayValue):"mapValue"in e?function(e){var t=Object.keys(e.fields||{}).sort(),n="{",r=!0,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r?r=!1:n+=",",n+="".concat(c,":").concat(Xe(e.fields[c]))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return n+"}"}(e.mapValue):O()}function Ye(e){return!!e&&"integerValue"in e}function Je(e){return!!e&&"arrayValue"in e}function $e(e){return!!e&&"nullValue"in e}function Ze(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function et(e){return!!e&&"mapValue"in e}function tt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return xe(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=tt(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=tt(e.arrayValue.values[r]);return n}return Object.assign({},e)}function nt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
var rt=function(){"use strict";function t(n){e(o)(this,t),this.value=n}return e(u)(t,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!et(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tt(t)}},{key:"setAll",value:function(e){var t=this,n=te.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=tt(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());et(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return Ke(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];et(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){xe(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new t(tt(this.value))}}],[{key:"empty",value:function(){return new t({mapValue:{}})}}]),t}();function it(e){var t=[];return xe(e.fields,(function(e,n){var r=new te([e]);if(et(n)){var i=it(n.mapValue).fields,a=!0,o=!1,s=void 0;if(0===i.length)t.push(r);else try{for(var u,c=i[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.push(r.child(l))}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}else t.push(r)})),new Ae(t)
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
 */}var at=function(){"use strict";function t(n,r,i,a,s,u,c){e(o)(this,t),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.createTime=s,this.data=u,this.documentState=c}return e(u)(t,[{key:"convertToFoundDocument",value:function(e,t){return!this.createTime.isEqual(J.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=J.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}},{key:"mutableCopy",value:function(){return new t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(e){return new t(e,0,J.min(),J.min(),J.min(),rt.empty(),0)}},{key:"newFoundDocument",value:function(e,n,r,i){return new t(e,1,n,J.min(),r,i,0)}},{key:"newNoDocument",value:function(e,n){return new t(e,2,n,J.min(),J.min(),rt.empty(),0)}},{key:"newUnknownDocument",value:function(e,n){return new t(e,3,n,J.min(),J.min(),rt.empty(),2)}}]),t}(),ot=function t(n,r){"use strict";e(o)(this,t),this.position=n,this.inclusive=r};
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
 */function st(e,t,n){for(var r=0,i=0;i<e.position.length;i++){var a=t[i],o=e.position[i];if(r=a.field.isKeyField()?ne.comparator(ne.fromName(o.referenceValue),n.key):Ge(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function ut(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(var n=0;n<e.position.length;n++)if(!Ke(e.position[n],t.position[n]))return!1;return!0}
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
 */var ct=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";e(o)(this,t),this.field=n,this.dir=r};function lt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */var ht=function t(){"use strict";e(o)(this,t)},ft=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this)).field=t,s.op=i,s.value=a,e(f)(s)}return e(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ge(t,this.value)):null!==t&&ze(this.value)===ze(t)&&this.matchesComparison(Ge(t,this.value))}},{key:"matchesComparison",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return O()}}},{key:"isInequality",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}},{key:"getFlattenedFilters",value:function(){return[this]}},{key:"getFilters",value:function(){return[this]}},{key:"getFirstInequalityField",value:function(){return this.isInequality()?this.field:null}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new wt(e,t,n):"array-contains"===t?new _t(e,n):"in"===t?new It(e,n):"not-in"===t?new Tt(e,n):"array-contains-any"===t?new St(e,n):new r(e,t,n)}},{key:"createKeyFieldInFilter",value:function(e,t,n){return"in"===t?new bt(e,n):new xt(e,n)}}]),r}(ht),dt=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).filters=t,a.op=i,a.ht=null,e(f)(a)}return e(u)(r,[{key:"matches",value:function(e){return vt(this)?void 0===this.filters.find((function(t){return!t.matches(e)})):void 0!==this.filters.find((function(t){return t.matches(e)}))}},{key:"getFlattenedFilters",value:function(){return null!==this.ht||(this.ht=this.filters.reduce((function(e,t){return e.concat(t.getFlattenedFilters())}),[])),this.ht}},{key:"getFilters",value:function(){return Object.assign([],this.filters)}},{key:"getFirstInequalityField",value:function(){var e=this.lt((function(e){return e.isInequality()}));return null!==e?e.field:null}},{key:"lt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.getFlattenedFilters()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e(o))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}}],[{key:"create",value:function(e,t){return new r(e,t)}}]),r}(ht);function vt(e){return"and"===e.op}function pt(e){return yt(e)&&vt(e)}function yt(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value instanceof dt)return!1}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!0}function mt(e){if(e instanceof ft)return e.field.canonicalString()+e.op.toString()+Qe(e.value);if(pt(e))return e.filters.map((function(e){return mt(e)})).join(",");var t=e.filters.map((function(e){return mt(e)})).join(",");return"".concat(e.op,"(").concat(t,")")}function gt(e,t){return e instanceof ft?(n=e,(r=t)instanceof ft&&n.op===r.op&&n.field.isEqual(r.field)&&Ke(n.value,r.value)):e instanceof dt?function(e,t){return t instanceof dt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((function(e,n,r){return e&&gt(n,t.filters[r])}),!0)}(e,t):void O();var n,r}function kt(e){return e instanceof ft?"".concat((t=e).field.canonicalString()," ").concat(t.op," ").concat(Qe(t.value)):e instanceof dt?function(e){return e.op.toString()+" {"+e.getFilters().map(kt).join(" ,")+"}"}(e):"Filter";var t}var wt=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this,t,i,a)).key=ne.fromName(a.referenceValue),e(f)(s)}return e(u)(r,[{key:"matches",value:function(e){var t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}]),r}(ft),bt=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this,t,"in",i)).keys=Et("in",i),e(f)(a)}return e(u)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(ft),xt=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this,t,"not-in",i)).keys=Et("not-in",i),e(f)(a)}return e(u)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(ft);function Et(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return ne.fromName(e.referenceValue)}))}var _t=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"array-contains",i)}return e(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return Je(t)&&He(t.arrayValue,this.value)}}]),r}(ft),It=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"in",i)}return e(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&He(this.value.arrayValue,t)}}]),r}(ft),Tt=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"not-in",i)}return e(u)(r,[{key:"matches",value:function(e){if(He(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!He(this.value.arrayValue,t)}}]),r}(ft),St=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"array-contains-any",i)}return e(u)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!Je(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return He(t.value.arrayValue,e)}))}}]),r}(ft),Ct=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;e(o)(this,t),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=s,this.startAt=u,this.endAt=c,this.ft=null};function At(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new Ct(e,t,n,r,i,a,o)}function Dt(e){var t=L(e);if(null===t.ft){var n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((function(e){return mt(e)})).join(","),n+="|ob:",n+=t.orderBy.map((function(e){return(t=e).field.canonicalString()+t.dir;var t})).join(","),pe(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Qe(e)})).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Qe(e)})).join(",")),t.ft=n}return t.ft}function Nt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(var n=0;n<e.orderBy.length;n++)if(!lt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(var r=0;r<e.filters.length;r++)if(!gt(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ut(e.startAt,t.startAt)&&ut(e.endAt,t.endAt)}function Ot(e){return ne.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
var Rt=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;e(o)(this,t),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=s,this.limitType=u,this.startAt=c,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt};function Lt(e,t,n,r,i,a,o,s){return new Rt(e,t,n,r,i,a,o,s)}function Pt(e){return new Rt(e)}function Mt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ft(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ut(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value.getFirstInequalityField();if(null!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function Vt(e){return null!==e.collectionGroup}function jt(e){var t=L(e);if(null===t.dt){t.dt=[];var n=Ut(t),r=Ft(t);if(null!==n&&null===r)n.isKeyField()||t.dt.push(new ct(n)),t.dt.push(new ct(te.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.dt.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var h=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ct(te.keyField(),h))}}}return t.dt}function Bt(e){var t=L(e);if(!t.wt)if("F"===t.limitType)t.wt=At(t.path,t.collectionGroup,jt(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=jt(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c="desc"===u.dir?"asc":"desc";n.push(new ct(u.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var l=t.endAt?new ot(t.endAt.position,t.endAt.inclusive):null,h=t.startAt?new ot(t.startAt.position,t.startAt.inclusive):null;t.wt=At(t.path,t.collectionGroup,n,t.filters,t.limit,l,h)}return t.wt}function qt(e,t,n){return new Rt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function zt(e,t){return Nt(Bt(e),Bt(t))&&e.limitType===t.limitType}function Kt(e){return"".concat(Dt(Bt(e)),"|lt:").concat(e.limitType)}function Ht(e){return"Query(target=".concat((t=Bt(e),n=t.path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map((function(e){return kt(e)})).join(", "),"]")),pe(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map((function(e){return"".concat((t=e).field.canonicalString()," (").concat(t.dir,")");var t})).join(", "),"]")),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Qe(e)})).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Qe(e)})).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")");var t,n}function Gt(e,t){return t.isFoundDocument()&&(i=e,o=(a=t).key.path,null!==i.collectionGroup?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):ne.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o))&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=jt(e)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.filters[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){if(!a.value.matches(t))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){var r=st(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,jt(n),r)||n.endAt&&!function(e,t,n){var r=st(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,jt(n),r)));var n,r,i,a,o}function Wt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Qt(e){return function(t,n){var r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=jt(e)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=Xt(c,t,n);if(0!==l)return l;r=r||c.field.isKeyField()}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return 0}}function Xt(e,t,n){var r,i,a,o,s=e.field.isKeyField()?ne.comparator(t.key,n.key):(r=e.field,i=n,a=t.data.field(r),o=i.data.field(r),null!==a&&null!==o?Ge(a,o):O());switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return O()}}
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
 */var Yt=function(){"use strict";function t(n,r){e(o)(this,t),this.mapKeyFn=n,this.equalsFn=r,this.inner={},this.innerSize=0}return e(u)(t,[{key:"get",value:function(t){var n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(d)(s.value,2),l=c[0],h=c[1];if(this.equalsFn(l,t))return h}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}}},{key:"has",value:function(e){return void 0!==this.get(e)}},{key:"set",value:function(e,t){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}},{key:"delete",value:function(e){var t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}},{key:"forEach",value:function(t){xe(this.inner,(function(n,r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(d)(s.value,2),l=c[0],h=c[1];t(l,h)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}))}},{key:"isEmpty",value:function(){return Ee(this.inner)}},{key:"size",value:function(){return this.innerSize}}]),t}(),Jt=new _e(ne.comparator);
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
 */function $t(){return Jt}var Zt=new _e(ne.comparator);function en(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Zt,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.insert(c.key,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}function tn(e){var t=Zt;return e.forEach((function(e,n){return t=t.insert(e,n.overlayedDocument)})),t}function nn(){return an()}function rn(){return an()}function an(){return new Yt((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)}))}var on=new _e(ne.comparator),sn=new Se(ne.comparator);function un(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=sn,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.add(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var cn=new Se(Q);function ln(){return cn}
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
 */function hn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ye(t)?"-0":t}}function fn(e){return{integerValue:""+e}}function dn(e,t){return me(t)?fn(t):hn(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */var vn=function t(){"use strict";e(o)(this,t),this._=void 0};function pn(e,t,n){return e instanceof gn?(i=t,a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:(r=n).seconds,nanos:r.nanoseconds}}}},i&&(a.fields.__previous_value__=i),{mapValue:a}):e instanceof kn?wn(e,t):e instanceof bn?xn(e,t):function(e,t){var n=mn(e,t),r=_n(n)+_n(e._t);return Ye(n)&&Ye(e._t)?fn(r):hn(e.serializer,r)}(e,t);var r,i,a}function yn(e,t,n){return e instanceof kn?wn(e,t):e instanceof bn?xn(e,t):n}function mn(e,t){var n,r;return e instanceof En?Ye(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}var gn=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return r}(vn),kn=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).elements=t,e(f)(i)}return r}(vn);function wn(e,t){var n=In(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n.some((function(e){return Ke(e,r)}))||n.push(r)},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var bn=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).elements=t,e(f)(i)}return r}(vn);function xn(e,t){var n=In(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n=n.filter((function(e){return!Ke(e,r)}))},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var En=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).serializer=t,a._t=i,e(f)(a)}return r}(vn);function _n(e){return Pe(e.integerValue||e.doubleValue)}function In(e){return Je(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */var Tn=function t(n,r){"use strict";e(o)(this,t),this.version=n,this.transformResults=r},Sn=function(){"use strict";function t(n,r){e(o)(this,t),this.updateTime=n,this.exists=r}return e(u)(t,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new t}},{key:"exists",value:function(e){return new t(void 0,e)}},{key:"updateTime",value:function(e){return new t(e)}}]),t}();function Cn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var An=function t(){"use strict";e(o)(this,t)};function Dn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new qn(e.key,Sn.none()):new Pn(e.key,e.data,Sn.none());var n=e.data,r=rt.empty(),i=new Se(te.comparator),a=!0,o=!1,s=void 0;try{for(var u,c=t.fields[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;if(!i.has(l)){var h=n.field(l);null===h&&l.length>1&&(l=l.popLast(),h=n.field(l)),null===h?r.delete(l):r.set(l,h),i=i.add(l)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new Mn(e.key,r,new Ae(i.toArray()),Sn.none())}function Nn(e,t,n){var r,i,a,o,s;e instanceof Pn?(i=t,a=n,o=(r=e).value.clone(),s=Un(r.fieldTransforms,i,a.transformResults),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()):e instanceof Mn?function(e,t,n){if(Cn(e.precondition,t)){var r=Un(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Fn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}else t.convertToUnknownDocument(n.version)}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function On(e,t,n,r){return e instanceof Pn?function(e,t,n,r){if(!Cn(e.precondition,t))return n;var i=e.value.clone(),a=Vn(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Mn?function(e,t,n,r){if(!Cn(e.precondition,t))return n;var i=Vn(e.fieldTransforms,r,t),a=t.data;return a.setAll(Fn(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((function(e){return e.field})))}(e,t,n,r):(i=t,a=n,Cn(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function Rn(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.fieldTransforms[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=t.data.field(u.field),l=mn(u.transform,c||null);null!=l&&(null===n&&(n=rt.empty()),n.set(u.field,l))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n||null}function Ln(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&X(n,r,(function(e,t){return function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof kn&&r instanceof kn||n instanceof bn&&r instanceof bn?X(n.elements,r.elements,Ke):n instanceof En&&r instanceof En?Ke(n._t,r._t):n instanceof gn&&r instanceof gn);var n,r}(e,t)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var Pn=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i,a){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return e(o)(this,r),(s=n.call(this)).key=t,s.value=i,s.precondition=a,s.fieldTransforms=u,s.type=0,e(f)(s)}return e(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(An),Mn=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i,a,s){var u,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return e(o)(this,r),(u=n.call(this)).key=t,u.data=i,u.fieldMask=a,u.precondition=s,u.fieldTransforms=c,u.type=1,e(f)(u)}return e(u)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(An);function Fn(e){var t=new Map;return e.fieldMask.fields.forEach((function(n){if(!n.isEmpty()){var r=e.data.field(n);t.set(n,r)}})),t}function Un(e,t,n){var r=new Map;R(e.length===n.length);for(var i=0;i<n.length;i++){var a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,yn(o,s,n[i]))}return r}function Vn(e,t,n){var r=new Map,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.transform,h=n.data.field(c.field);r.set(c.field,pn(l,h,t))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var jn,Bn,qn=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=2,a.fieldTransforms=[],e(f)(a)}return e(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(An),zn=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=3,a.fieldTransforms=[],e(f)(a)}return e(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(An),Kn=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.batchId=n,this.localWriteTime=r,this.baseMutations=i,this.mutations=a}return e(u)(t,[{key:"applyToRemoteDocument",value:function(e,t){for(var n=t.mutationResults,r=0;r<this.mutations.length;r++){var i=this.mutations[r];i.key.isEqual(e.key)&&Nn(i,e,n[r])}}},{key:"applyToLocalView",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=this.baseMutations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.key.isEqual(e.key)&&(t=On(s,e,t,this.localWriteTime))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var h,f=this.mutations[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;d.key.isEqual(e.key)&&(t=On(d,e,t,this.localWriteTime))}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}return t}},{key:"applyToLocalDocumentSet",value:function(e,t){var n=this,r=rn();return this.mutations.forEach((function(i){var a=e.get(i.key),o=a.overlayedDocument,s=n.applyToLocalView(o,a.mutatedFields),u=Dn(o,s=t.has(i.key)?null:s);null!==u&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())})),r}},{key:"keys",value:function(){return this.mutations.reduce((function(e,t){return e.add(t.key)}),un())}},{key:"isEqual",value:function(e){return this.batchId===e.batchId&&X(this.mutations,e.mutations,(function(e,t){return Ln(e,t)}))&&X(this.baseMutations,e.baseMutations,(function(e,t){return Ln(e,t)}))}}]),t}(),Hn=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.batch=n,this.commitVersion=r,this.mutationResults=i,this.docVersions=a}return e(u)(t,null,[{key:"from",value:function(e,n,r){R(e.mutations.length===r.length);for(var i=on,a=e.mutations,o=0;o<a.length;o++)i=i.insert(a[o].key,r[o].version);return new t(e,n,r,i)}}]),t}(),Gn=function(){"use strict";function t(n,r){e(o)(this,t),this.largestBatchId=n,this.mutation=r}return e(u)(t,[{key:"getKey",value:function(){return this.mutation.key}},{key:"isEqual",value:function(e){return null!==e&&this.mutation===e.mutation}},{key:"toString",value:function(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}]),t}(),Wn=function t(n){"use strict";e(o)(this,t),this.count=n};function Qn(e){switch(e){default:return O();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Xn(e){if(void 0===e)return A("GRPC error has no .code"),P.UNKNOWN;switch(e){case jn.OK:return P.OK;case jn.CANCELLED:return P.CANCELLED;case jn.UNKNOWN:return P.UNKNOWN;case jn.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case jn.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case jn.INTERNAL:return P.INTERNAL;case jn.UNAVAILABLE:return P.UNAVAILABLE;case jn.UNAUTHENTICATED:return P.UNAUTHENTICATED;case jn.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case jn.NOT_FOUND:return P.NOT_FOUND;case jn.ALREADY_EXISTS:return P.ALREADY_EXISTS;case jn.PERMISSION_DENIED:return P.PERMISSION_DENIED;case jn.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case jn.ABORTED:return P.ABORTED;case jn.OUT_OF_RANGE:return P.OUT_OF_RANGE;case jn.UNIMPLEMENTED:return P.UNIMPLEMENTED;case jn.DATA_LOSS:return P.DATA_LOSS;default:return O()}}(Bn=jn||(jn={}))[Bn.OK=0]="OK",Bn[Bn.CANCELLED=1]="CANCELLED",Bn[Bn.UNKNOWN=2]="UNKNOWN",Bn[Bn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bn[Bn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bn[Bn.NOT_FOUND=5]="NOT_FOUND",Bn[Bn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bn[Bn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bn[Bn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bn[Bn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bn[Bn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bn[Bn.ABORTED=10]="ABORTED",Bn[Bn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bn[Bn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bn[Bn.INTERNAL=13]="INTERNAL",Bn[Bn.UNAVAILABLE=14]="UNAVAILABLE",Bn[Bn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
var Yn=function(){"use strict";function t(){e(o)(this,t),this.onExistenceFilterMismatchCallbacks=new Map}return e(u)(t,[{key:"onExistenceFilterMismatch",value:function(e){var t=this,n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),function(){return t.onExistenceFilterMismatchCallbacks.delete(n)}}},{key:"notifyOnExistenceFilterMismatch",value:function(e){this.onExistenceFilterMismatchCallbacks.forEach((function(t){return t(e)}))}}],[{key:"instance",get:function(){return Jn}},{key:"getOrCreateInstance",value:function(){return null===Jn&&(Jn=new t),Jn}}]),t}(),Jn=null,$n=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.snapshotVersion=n,this.targetChanges=r,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=s}return e(u)(t,null,[{key:"createSynthesizedRemoteEventForCurrentChange",value:function(e,n,r){var i=new Map;return i.set(e,Zn.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new t(J.min(),i,ln(),$t(),un())}}]),t}(),Zn=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.resumeToken=n,this.current=r,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=s}return e(u)(t,null,[{key:"createSynthesizedTargetChangeForCurrentChange",value:function(e,n,r){return new t(r,n,un(),un(),un())}}]),t}(),er=function t(n,r,i,a){"use strict";e(o)(this,t),this.It=n,this.removedTargetIds=r,this.key=i,this.Tt=a},tr=function t(n,r){"use strict";e(o)(this,t),this.targetId=n,this.Et=r},nr=function t(n,r){"use strict";var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Oe.EMPTY_BYTE_STRING,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e(o)(this,t),this.state=n,this.targetIds=r,this.resumeToken=i,this.cause=a},rr=function(){"use strict";function t(){e(o)(this,t),this.At=0,this.Rt=or(),this.vt=Oe.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}return e(u)(t,[{key:"current",get:function(){return this.bt}},{key:"resumeToken",get:function(){return this.vt}},{key:"Vt",get:function(){return 0!==this.At}},{key:"St",get:function(){return this.Pt}},{key:"Dt",value:function(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}},{key:"Ct",value:function(){var e=un(),t=un(),n=un();return this.Rt.forEach((function(r,i){switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:O()}})),new Zn(this.vt,this.bt,e,t,n)}},{key:"xt",value:function(){this.Pt=!1,this.Rt=or()}},{key:"Nt",value:function(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}},{key:"kt",value:function(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}},{key:"Ot",value:function(){this.At+=1}},{key:"$t",value:function(){this.At-=1}},{key:"Mt",value:function(){this.Pt=!0,this.bt=!0}}]),t}(),ir=function(){"use strict";function t(n){e(o)(this,t),this.Ft=n,this.Bt=new Map,this.Lt=$t(),this.qt=ar(),this.Ut=new Se(Q)}return e(u)(t,[{key:"Kt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.It[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;e.Tt&&e.Tt.isFoundDocument()?this.Gt(o,e.Tt):this.Qt(o,e.key,e.Tt)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}var s=!0,u=!1,c=void 0;try{for(var l,h=e.removedTargetIds[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;this.Qt(f,e.key,e.Tt)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"zt",value:function(e){var t=this;this.forEachTarget(e,(function(n){var r=t.jt(n);switch(e.state){case 0:t.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||t.removeTarget(n);break;case 3:t.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:t.Wt(n)&&(t.Ht(n),r.Dt(e.resumeToken));break;default:O()}}))}},{key:"forEachTarget",value:function(e,t){var n=this;e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((function(e,r){n.Wt(r)&&t(r)}))}},{key:"Jt",value:function(e){var t,n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){var a=i.target;if(Ot(a))if(0===r){var o=new ne(a.path);this.Qt(n,o,at.newNoDocument(o,J.min()))}else R(1===r);else{var s=this.Zt(n);s!==r&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=Yn.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:s,existenceFilterCount:e.Et.count}))}}}},{key:"Xt",value:function(e){var t=this,n=new Map;this.Bt.forEach((function(r,i){var a=t.Yt(i);if(a){if(r.current&&Ot(a.target)){var o=new ne(a.target.path);null!==t.Lt.get(o)||t.te(i,o)||t.Qt(i,o,at.newNoDocument(o,e))}r.St&&(n.set(i,r.Ct()),r.xt())}}));var r=un();this.qt.forEach((function(e,n){var i=t,a=!0;n.forEachWhile((function(e){var t=i.Yt(e);return!t||2===t.purpose||(a=!1,!1)})),a&&(r=r.add(e))})),this.Lt.forEach((function(t,n){return n.setReadTime(e)}));var i=new $n(e,n,this.Ut,this.Lt,r);return this.Lt=$t(),this.qt=ar(),this.Ut=new Se(Q),i}},{key:"Gt",value:function(e,t){if(this.Wt(e)){var n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}}},{key:"Qt",value:function(e,t,n){if(this.Wt(e)){var r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}}},{key:"removeTarget",value:function(e){this.Bt.delete(e)}},{key:"Zt",value:function(e){var t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}},{key:"Ot",value:function(e){this.jt(e).Ot()}},{key:"jt",value:function(e){var t=this.Bt.get(e);return t||(t=new rr,this.Bt.set(e,t)),t}},{key:"ee",value:function(e){var t=this.qt.get(e);return t||(t=new Se(Q),this.qt=this.qt.insert(e,t)),t}},{key:"Wt",value:function(e){var t=null!==this.Yt(e);return t||C("WatchChangeAggregator","Detected inactive target",e),t}},{key:"Yt",value:function(e){var t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}},{key:"Ht",value:function(e){var t=this;this.Bt.set(e,new rr),this.Ft.getRemoteKeysForTarget(e).forEach((function(n){t.Qt(e,n,null)}))}},{key:"te",value:function(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}]),t}();function ar(){return new _e(ne.comparator)}function or(){return new _e(ne.comparator)}
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
 */var sr={asc:"ASCENDING",desc:"DESCENDING"},ur={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cr={and:"AND",or:"OR"},lr=function t(n,r){"use strict";e(o)(this,t),this.databaseId=n,this.useProto3Json=r};function hr(e,t){return e.useProto3Json?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function fr(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function dr(e,t){return hr(e,t.toTimestamp())}function vr(e){return R(!!e),J.fromTimestamp((t=Le(e),new Y(t.seconds,t.nanos)));var t}function pr(e,t){return(n=e,new Z(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function yr(e){var t=Z.fromString(e);return R(Lr(t)),t}function mr(e,t){return pr(e.databaseId,t.path)}function gr(e,t){var n=yr(t);if(n.get(1)!==e.databaseId.projectId)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ne(xr(n))}function kr(e,t){return pr(e.databaseId,t)}function wr(e){var t=yr(e);return 4===t.length?Z.emptyPath():xr(t)}function br(e){return new Z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function xr(e){return R(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Er(e,t,n){return{name:mr(e,t),fields:n.value.mapValue.fields}}function _r(e,t){var n,r,i;if(t instanceof Pn)n={update:Er(e,t.key,t.value)};else if(t instanceof qn)n={delete:mr(e,t.key)};else if(t instanceof Mn)n={update:Er(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof zn))return O();n={verify:mr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof gn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof kn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof bn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof En)return{fieldPath:t.field.canonicalString(),increment:n._t};throw O()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:dr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:O()}(e,t.precondition)),n}function Ir(e,t){return{documents:[kr(e,t.path)]}}function Tr(e,t){var n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=kr(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=kr(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);var i=function(e){if(0!==e.length)return Rr(dt.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);var a=function(e){if(0!==e.length)return e.map((function(e){return{field:Nr((t=e).field),direction:Ar(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);var o,s,u,c=(o=e,s=t.limit,o.useProto3Json||pe(s)?s:{value:s});return null!==c&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Sr(e){var t=wr(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){R(1===r);var a=n.from[0];a.allDescendants?i=a.collectionId:t=t.child(a.collectionId)}var o,s,u=[];n.where&&(o=n.where,u=(s=Cr(o))instanceof dt&&pt(s)?s.getFilters():[s]);var c=[];n.orderBy&&(c=n.orderBy.map((function(e){return new ct(Or((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));var l=null;n.limit&&(l=function(e){var t;return pe(t="object"==typeof e?e.value:e)?null:t}(n.limit));var h=null;n.startAt&&(h=function(e){var t=!!e.before,n=e.values||[];return new ot(n,t)}(n.startAt));var f=null;return n.endAt&&(f=function(e){var t=!e.before,n=e.values||[];return new ot(n,t)}(n.endAt)),Lt(t,i,c,u,l,"F",h,f)}function Cr(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":var t=Or(e.unaryFilter.field);return ft.create(t,"==",{doubleValue:NaN});case"IS_NULL":var n=Or(e.unaryFilter.field);return ft.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var r=Or(e.unaryFilter.field);return ft.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var i=Or(e.unaryFilter.field);return ft.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(e):void 0!==e.fieldFilter?(n=e,ft.create(Or(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,dt.create(t.compositeFilter.filters.map((function(e){return Cr(e)})),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return O()}}(t.compositeFilter.op))):O();var t,n}function Ar(e){return sr[e]}function Dr(e){return ur[e]}function Nr(e){return{fieldPath:e.canonicalString()}}function Or(e){return te.fromServerFormat(e.fieldPath)}function Rr(e){return e instanceof ft?function(e){if("=="===e.op){if(Ze(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NAN"}};if($e(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ze(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NOT_NAN"}};if($e(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(e.field),op:Dr(e.op),value:e.value}}}(e):e instanceof dt?(r=(t=e).getFilters().map((function(e){return Rr(e)})),1===r.length?r[0]:{compositeFilter:{op:(n=t.op,cr[n]),filters:r}}):O();var t,n,r}function Lr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */var Pr=function(){"use strict";function t(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:J.min(),u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:J.min(),c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:Oe.EMPTY_BYTE_STRING;e(o)(this,t),this.target=n,this.targetId=r,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c}return e(u)(t,[{key:"withSequenceNumber",value:function(e){return new t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}},{key:"withResumeToken",value:function(e,n){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}},{key:"withLastLimboFreeSnapshotVersion",value:function(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}]),t}(),Mr=function t(n){"use strict";e(o)(this,t),this.se=n};
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
 */function Fr(e){var t=Sr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?qt(t,t.limit,"L"):t}
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
 */var Ur=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,[{key:"oe",value:function(e,t){this.ue(e,t),t.ce()}},{key:"ue",value:function(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Pe(e.integerValue));else if("doubleValue"in e){var n=Pe(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),ye(n)?t.he(0):t.he(n))}else if("timestampValue"in e){var r=e.timestampValue;this.ae(t,20),"string"==typeof r?t.le(r):(t.le("".concat(r.seconds||"")),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(Me(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.ae(t,45),t.he(i.latitude||0),t.he(i.longitude||0)}else"mapValue"in e?nt(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):O()}},{key:"fe",value:function(e,t){this.ae(t,25),this.ye(e,t)}},{key:"ye",value:function(e,t){t.le(e)}},{key:"me",value:function(e,t){var n=e.fields||{};this.ae(t,55);var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.fe(u,t),this.ue(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"ge",value:function(e,t){var n=e.values||[];this.ae(t,50);var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.ue(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"_e",value:function(e,t){var n=this;this.ae(t,37),ne.fromName(e).path.forEach((function(e){n.ae(t,60),n.ye(e,t)}))}},{key:"ae",value:function(e,t){e.he(t)}},{key:"de",value:function(e){e.he(2)}}]),t}();Ur.pe=new Ur;
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
var Vr=function(){"use strict";function t(){e(o)(this,t),this.He=new jr}return e(u)(t,[{key:"addToCollectionParentIndex",value:function(e,t){return this.He.add(t),fe.resolve()}},{key:"getCollectionParents",value:function(e,t){return fe.resolve(this.He.getEntries(t))}},{key:"addFieldIndex",value:function(e,t){return fe.resolve()}},{key:"deleteFieldIndex",value:function(e,t){return fe.resolve()}},{key:"getDocumentsMatchingTarget",value:function(e,t){return fe.resolve(null)}},{key:"getIndexType",value:function(e,t){return fe.resolve(0)}},{key:"getFieldIndexes",value:function(e,t){return fe.resolve([])}},{key:"getNextCollectionGroupToUpdate",value:function(e){return fe.resolve(null)}},{key:"getMinOffset",value:function(e,t){return fe.resolve(oe.min())}},{key:"getMinOffsetFromCollectionGroup",value:function(e,t){return fe.resolve(oe.min())}},{key:"updateCollectionGroup",value:function(e,t,n){return fe.resolve()}},{key:"updateIndexEntries",value:function(e,t){return fe.resolve()}}]),t}(),jr=function(){"use strict";function t(){e(o)(this,t),this.index={}}return e(u)(t,[{key:"add",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Se(Z.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}},{key:"has",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}},{key:"getEntries",value:function(e){return(this.index[e]||new Se(Z.comparator)).toArray()}}]),t}();new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
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
var Br=function(){"use strict";function t(n,r,i){e(o)(this,t),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return e(u)(t,null,[{key:"withCacheSize",value:function(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),t}();
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
 */Br.DEFAULT_COLLECTION_PERCENTILE=10,Br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Br.DEFAULT=new Br(41943040,Br.DEFAULT_COLLECTION_PERCENTILE,Br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Br.DISABLED=new Br(-1,0,0);
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
var qr=function(){"use strict";function t(n){e(o)(this,t),this.Rn=n}return e(u)(t,[{key:"next",value:function(){return this.Rn+=2,this.Rn}}],[{key:"vn",value:function(){return new t(0)}},{key:"bn",value:function(){return new t(-1)}}]),t}();
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
var zr=function(){"use strict";function t(){e(o)(this,t),this.changes=new Yt((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)})),this.changesApplied=!1}return e(u)(t,[{key:"addEntry",value:function(e){this.assertNotApplied(),this.changes.set(e.key,e)}},{key:"removeEntry",value:function(e,t){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(t))}},{key:"getEntry",value:function(e,t){this.assertNotApplied();var n=this.changes.get(t);return void 0!==n?fe.resolve(n):this.getFromCache(e,t)}},{key:"getEntries",value:function(e,t){return this.getAllFromCache(e,t)}},{key:"apply",value:function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}},{key:"assertNotApplied",value:function(){}}]),t}();
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
var Kr=function t(n,r){"use strict";e(o)(this,t),this.overlayedDocument=n,this.mutatedFields=r},Hr=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.remoteDocumentCache=n,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=a}return e(u)(t,[{key:"getDocument",value:function(e,t){var n=this,r=null;return this.documentOverlayCache.getOverlay(e,t).next((function(i){return r=i,n.remoteDocumentCache.getEntry(e,t)})).next((function(e){return null!==r&&On(r.mutation,e,Ae.empty(),Y.now()),e}))}},{key:"getDocuments",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.getLocalViewOfDocuments(e,t,un()).next((function(){return t}))}))}},{key:"getLocalViewOfDocuments",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:un(),r=this,i=nn();return this.populateOverlays(e,i,t).next((function(){return r.computeViews(e,t,i,n).next((function(e){var t=en();return e.forEach((function(e,n){t=t.insert(e,n.overlayedDocument)})),t}))}))}},{key:"getOverlayedDocuments",value:function(e,t){var n=this,r=nn();return this.populateOverlays(e,r,t).next((function(){return n.computeViews(e,t,r,un())}))}},{key:"populateOverlays",value:function(e,t,n){var r=[];return n.forEach((function(e){t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((function(e){e.forEach((function(e,n){t.set(e,n)}))}))}},{key:"computeViews",value:function(e,t,n,r){var i=$t(),a=an(),o=an();return t.forEach((function(e,t){var o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Mn)?i=i.insert(t.key,t):void 0!==o?(a.set(t.key,o.mutation.getFieldMask()),On(o.mutation,t,o.mutation.getFieldMask(),Y.now())):a.set(t.key,Ae.empty())})),this.recalculateAndSaveOverlays(e,i).next((function(e){return e.forEach((function(e,t){return a.set(e,t)})),t.forEach((function(e,t){var n;return o.set(e,new Kr(t,null!==(n=a.get(e))&&void 0!==n?n:null))})),o}))}},{key:"recalculateAndSaveOverlays",value:function(e,t){var n=this,r=an(),i=new _e((function(e,t){return e-t})),a=un();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((function(e){var n=!0,a=!1,o=void 0;try{for(var s,u=function(e,n){var a=n.value;a.keys().forEach((function(e){var n=t.get(e);if(null!==n){var o=r.get(e)||Ae.empty();o=a.applyToLocalView(n,o),r.set(e,o);var s=(i.get(a.batchId)||un()).add(e);i=i.insert(a.batchId,s)}}))},c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)u(0,s)}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}})).next((function(){for(var o=[],s=i.getReverseIterator();s.hasNext();){var u=s.getNext(),c=u.key,l=u.value,h=rn();l.forEach((function(e){if(!a.has(e)){var n=Dn(t.get(e),r.get(e));null!==n&&h.set(e,n),a=a.add(e)}})),o.push(n.documentOverlayCache.saveOverlays(e,c,h))}return fe.waitFor(o)})).next((function(){return r}))}},{key:"recalculateAndSaveOverlaysForDocumentKeys",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.recalculateAndSaveOverlays(e,t)}))}},{key:"getDocumentsMatchingQuery",value:function(e,t,n){return r=t,ne.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Vt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}},{key:"getNextDocuments",value:function(e,t,n,r){var i=this;return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((function(a){var o=i,s=r-a.size>0?i.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):fe.resolve(nn()),u=-1,c=a;return s.next((function(t){return fe.forEach(t,(function(t,n){return u<n.largestBatchId&&(u=n.largestBatchId),a.get(t)?fe.resolve():o.remoteDocumentCache.getEntry(e,t).next((function(e){c=c.insert(t,e)}))})).next((function(){return o.populateOverlays(e,t,a)})).next((function(){return o.computeViews(e,c,t,un())})).next((function(e){return{batchId:u,changes:tn(e)}}))}))}))}},{key:"getDocumentsMatchingDocumentQuery",value:function(e,t){return this.getDocument(e,new ne(t)).next((function(e){var t=en();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}},{key:"getDocumentsMatchingCollectionGroupQuery",value:function(e,t,n){var r=this,i=t.collectionGroup,a=en();return this.indexManager.getCollectionParents(e,i).next((function(o){return fe.forEach(o,(function(o){var s,u,c=(s=t,u=o.child(i),new Rt(u,null,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt));return r.getDocumentsMatchingCollectionQuery(e,c,n).next((function(e){e.forEach((function(e,t){a=a.insert(e,t)}))}))})).next((function(){return a}))}))}},{key:"getDocumentsMatchingCollectionQuery",value:function(e,t,n){var r,i=this;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((function(a){return r=a,i.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)})).next((function(e){r.forEach((function(t,n){var r=n.getKey();null===e.get(r)&&(e=e.insert(r,at.newInvalidDocument(r)))}));var n=en();return e.forEach((function(e,i){var a=r.get(e);void 0!==a&&On(a.mutation,i,Ae.empty(),Y.now()),Gt(t,i)&&(n=n.insert(e,i))})),n}))}}]),t}(),Gr=function(){"use strict";function t(n){e(o)(this,t),this.serializer=n,this.Zn=new Map,this.Xn=new Map}return e(u)(t,[{key:"getBundleMetadata",value:function(e,t){return fe.resolve(this.Zn.get(t))}},{key:"saveBundleMetadata",value:function(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:vr(n.createTime)}),fe.resolve()}},{key:"getNamedQuery",value:function(e,t){return fe.resolve(this.Xn.get(t))}},{key:"saveNamedQuery",value:function(e,t){return this.Xn.set(t.name,{name:(n=t).name,query:Fr(n.bundledQuery),readTime:vr(n.readTime)}),fe.resolve();var n}}]),t}(),Wr=function(){"use strict";function t(){e(o)(this,t),this.overlays=new _e(ne.comparator),this.ts=new Map}return e(u)(t,[{key:"getOverlay",value:function(e,t){return fe.resolve(this.overlays.get(t))}},{key:"getOverlays",value:function(e,t){var n=this,r=nn();return fe.forEach(t,(function(t){return n.getOverlay(e,t).next((function(e){null!==e&&r.set(t,e)}))})).next((function(){return r}))}},{key:"saveOverlays",value:function(e,t,n){var r=this;return n.forEach((function(n,i){r.re(e,t,i)})),fe.resolve()}},{key:"removeOverlaysForBatchId",value:function(e,t,n){var r=this,i=this.ts.get(n);return void 0!==i&&(i.forEach((function(e){return r.overlays=r.overlays.remove(e)})),this.ts.delete(n)),fe.resolve()}},{key:"getOverlaysForCollection",value:function(e,t,n){for(var r=nn(),i=t.length+1,a=new ne(t.child("")),o=this.overlays.getIteratorFrom(a);o.hasNext();){var s=o.getNext().value,u=s.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&s.largestBatchId>n&&r.set(s.getKey(),s)}return fe.resolve(r)}},{key:"getOverlaysForCollectionGroup",value:function(e,t,n,r){for(var i=new _e((function(e,t){return e-t})),a=this.overlays.getIterator();a.hasNext();){var o=a.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){var s=i.get(o.largestBatchId);null===s&&(s=nn(),i=i.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}for(var u=nn(),c=i.getIterator();c.hasNext()&&(c.getNext().value.forEach((function(e,t){return u.set(e,t)})),!(u.size()>=r)););return fe.resolve(u)}},{key:"re",value:function(e,t,n){var r=this.overlays.get(n.key);if(null!==r){var i=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new Gn(t,n));var a=this.ts.get(t);void 0===a&&(a=un(),this.ts.set(t,a)),this.ts.set(t,a.add(n.key))}}]),t}(),Qr=function(){"use strict";function t(){e(o)(this,t),this.es=new Se(Xr.ns),this.ss=new Se(Xr.rs)}return e(u)(t,[{key:"isEmpty",value:function(){return this.es.isEmpty()}},{key:"addReference",value:function(e,t){var n=new Xr(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}},{key:"os",value:function(e,t){var n=this;e.forEach((function(e){return n.addReference(e,t)}))}},{key:"removeReference",value:function(e,t){this.us(new Xr(e,t))}},{key:"cs",value:function(e,t){var n=this;e.forEach((function(e){return n.removeReference(e,t)}))}},{key:"hs",value:function(e){var t=this,n=new ne(new Z([])),r=new Xr(n,e),i=new Xr(n,e+1),a=[];return this.ss.forEachInRange([r,i],(function(e){t.us(e),a.push(e.key)})),a}},{key:"ls",value:function(){var e=this;this.es.forEach((function(t){return e.us(t)}))}},{key:"us",value:function(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}},{key:"fs",value:function(e){var t=new ne(new Z([])),n=new Xr(t,e),r=new Xr(t,e+1),i=un();return this.ss.forEachInRange([n,r],(function(e){i=i.add(e.key)})),i}},{key:"containsKey",value:function(e){var t=new Xr(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}]),t}(),Xr=function(){"use strict";function t(n,r){e(o)(this,t),this.key=n,this.ds=r}return e(u)(t,null,[{key:"ns",value:function(e,t){return ne.comparator(e.key,t.key)||Q(e.ds,t.ds)}},{key:"rs",value:function(e,t){return Q(e.ds,t.ds)||ne.comparator(e.key,t.key)}}]),t}(),Yr=function(){"use strict";function t(n,r){e(o)(this,t),this.indexManager=n,this.referenceDelegate=r,this.mutationQueue=[],this.ws=1,this._s=new Se(Xr.ns)}return e(u)(t,[{key:"checkEmpty",value:function(e){return fe.resolve(0===this.mutationQueue.length)}},{key:"addMutationBatch",value:function(e,t,n,r){var i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];var a=new Kn(i,t,n,r);this.mutationQueue.push(a);var o=!0,s=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;this._s=this._s.add(new Xr(h.key,i)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast())}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return fe.resolve(a)}},{key:"lookupMutationBatch",value:function(e,t){return fe.resolve(this.gs(t))}},{key:"getNextMutationBatchAfterBatchId",value:function(e,t){var n=t+1,r=this.ys(n),i=r<0?0:r;return fe.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}},{key:"getHighestUnacknowledgedBatchId",value:function(){return fe.resolve(0===this.mutationQueue.length?-1:this.ws-1)}},{key:"getAllMutationBatches",value:function(e){return fe.resolve(this.mutationQueue.slice())}},{key:"getAllMutationBatchesAffectingDocumentKey",value:function(e,t){var n=this,r=new Xr(t,0),i=new Xr(t,Number.POSITIVE_INFINITY),a=[];return this._s.forEachInRange([r,i],(function(e){var t=n.gs(e.ds);a.push(t)})),fe.resolve(a)}},{key:"getAllMutationBatchesAffectingDocumentKeys",value:function(e,t){var n=this,r=new Se(Q);return t.forEach((function(e){var t=new Xr(e,0),i=new Xr(e,Number.POSITIVE_INFINITY);n._s.forEachInRange([t,i],(function(e){r=r.add(e.ds)}))})),fe.resolve(this.ps(r))}},{key:"getAllMutationBatchesAffectingQuery",value:function(e,t){var n=t.path,r=n.length+1,i=n;ne.isDocumentKey(i)||(i=i.child(""));var a=new Xr(new ne(i),0),o=new Se(Q);return this._s.forEachWhile((function(e){var t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ds)),!0)}),a),fe.resolve(this.ps(o))}},{key:"ps",value:function(e){var t=this,n=[];return e.forEach((function(e){var r=t.gs(e);null!==r&&n.push(r)})),n}},{key:"removeMutationBatch",value:function(e,t){var n=this;R(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();var r=this._s;return fe.forEach(t.mutations,(function(i){var a=new Xr(i.key,t.batchId);return r=r.delete(a),n.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((function(){n._s=r}))}},{key:"En",value:function(e){}},{key:"containsKey",value:function(e,t){var n=new Xr(t,0),r=this._s.firstAfterOrEqual(n);return fe.resolve(t.isEqual(r&&r.key))}},{key:"performConsistencyCheck",value:function(e){return this.mutationQueue.length,fe.resolve()}},{key:"Is",value:function(e,t){return this.ys(e)}},{key:"ys",value:function(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}},{key:"gs",value:function(e){var t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}]),t}(),Jr=function(){"use strict";function t(n){e(o)(this,t),this.Ts=n,this.docs=new _e(ne.comparator),this.size=0}return e(u)(t,[{key:"setIndexManager",value:function(e){this.indexManager=e}},{key:"addEntry",value:function(e,t){var n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}},{key:"removeEntry",value:function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}},{key:"getEntry",value:function(e,t){var n=this.docs.get(t);return fe.resolve(n?n.document.mutableCopy():at.newInvalidDocument(t))}},{key:"getEntries",value:function(e,t){var n=this,r=$t();return t.forEach((function(e){var t=n.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():at.newInvalidDocument(e))})),fe.resolve(r)}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){for(var i=$t(),a=t.path,o=new ne(a.child("")),s=this.docs.getIteratorFrom(o);s.hasNext();){var u=s.getNext(),c=u.key,l=u.value.document;if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||se(ae(l),n)<=0||(r.has(l.key)||Gt(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return fe.resolve(i)}},{key:"getAllFromCollectionGroup",value:function(e,t,n,r){O()}},{key:"Es",value:function(e,t){return fe.forEach(this.docs,(function(e){return t(e)}))}},{key:"newChangeBuffer",value:function(e){return new $r(this)}},{key:"getSize",value:function(e){return fe.resolve(this.size)}}]),t}(),$r=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).Jn=t,e(f)(i)}return e(u)(r,[{key:"applyChanges",value:function(e){var t=this,n=[];return this.changes.forEach((function(r,i){i.isValidDocument()?n.push(t.Jn.addEntry(e,i)):t.Jn.removeEntry(r)})),fe.waitFor(n)}},{key:"getFromCache",value:function(e,t){return this.Jn.getEntry(e,t)}},{key:"getAllFromCache",value:function(e,t){return this.Jn.getEntries(e,t)}}]),r}(zr),Zr=function(){"use strict";function t(n){e(o)(this,t),this.persistence=n,this.As=new Yt((function(e){return Dt(e)}),Nt),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Qr,this.targetCount=0,this.bs=qr.vn()}return e(u)(t,[{key:"forEachTarget",value:function(e,t){return this.As.forEach((function(e,n){return t(n)})),fe.resolve()}},{key:"getLastRemoteSnapshotVersion",value:function(e){return fe.resolve(this.lastRemoteSnapshotVersion)}},{key:"getHighestSequenceNumber",value:function(e){return fe.resolve(this.Rs)}},{key:"allocateTargetId",value:function(e){return this.highestTargetId=this.bs.next(),fe.resolve(this.highestTargetId)}},{key:"setTargetsMetadata",value:function(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),fe.resolve()}},{key:"Sn",value:function(e){this.As.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.bs=new qr(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}},{key:"addTargetData",value:function(e,t){return this.Sn(t),this.targetCount+=1,fe.resolve()}},{key:"updateTargetData",value:function(e,t){return this.Sn(t),fe.resolve()}},{key:"removeTargetData",value:function(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,fe.resolve()}},{key:"removeTargets",value:function(e,t,n){var r=this,i=0,a=[];return this.As.forEach((function(o,s){s.sequenceNumber<=t&&null===n.get(s.targetId)&&(r.As.delete(o),a.push(r.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),fe.waitFor(a).next((function(){return i}))}},{key:"getTargetCount",value:function(e){return fe.resolve(this.targetCount)}},{key:"getTargetData",value:function(e,t){var n=this.As.get(t)||null;return fe.resolve(n)}},{key:"addMatchingKeys",value:function(e,t,n){return this.vs.os(t,n),fe.resolve()}},{key:"removeMatchingKeys",value:function(e,t,n){this.vs.cs(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((function(t){i.push(r.markPotentiallyOrphaned(e,t))})),fe.waitFor(i)}},{key:"removeMatchingKeysForTargetId",value:function(e,t){return this.vs.hs(t),fe.resolve()}},{key:"getMatchingKeysForTargetId",value:function(e,t){var n=this.vs.fs(t);return fe.resolve(n)}},{key:"containsKey",value:function(e,t){return fe.resolve(this.vs.containsKey(t))}}]),t}(),ei=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.Ps={},this.overlays={},this.Vs=new ve(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=n(this),this.Ds=new Zr(this),this.indexManager=new Vr,this.remoteDocumentCache=new Jr((function(e){return i.referenceDelegate.Cs(e)})),this.serializer=new Mr(r),this.xs=new Gr(this.serializer)}return e(u)(t,[{key:"start",value:function(){return Promise.resolve()}},{key:"shutdown",value:function(){return this.Ss=!1,Promise.resolve()}},{key:"started",get:function(){return this.Ss}},{key:"setDatabaseDeletedListener",value:function(){}},{key:"setNetworkEnabled",value:function(){}},{key:"getIndexManager",value:function(e){return this.indexManager}},{key:"getDocumentOverlayCache",value:function(e){var t=this.overlays[e.toKey()];return t||(t=new Wr,this.overlays[e.toKey()]=t),t}},{key:"getMutationQueue",value:function(e,t){var n=this.Ps[e.toKey()];return n||(n=new Yr(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}},{key:"getTargetCache",value:function(){return this.Ds}},{key:"getRemoteDocumentCache",value:function(){return this.remoteDocumentCache}},{key:"getBundleCache",value:function(){return this.xs}},{key:"runTransaction",value:function(e,t,n){var r=this;C("MemoryPersistence","Starting transaction:",e);var i=new ti(this.Vs.next());return this.referenceDelegate.Ns(),n(i).next((function(e){return r.referenceDelegate.ks(i).next((function(){return e}))})).toPromise().then((function(e){return i.raiseOnCommittedEvent(),e}))}},{key:"Os",value:function(e,t){return fe.or(Object.values(this.Ps).map((function(n){return function(){return n.containsKey(e,t)}})))}}]),t}(),ti=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).currentSequenceNumber=t,e(f)(i)}return r}(ce),ni=function(){"use strict";function t(n){e(o)(this,t),this.persistence=n,this.$s=new Qr,this.Ms=null}return e(u)(t,[{key:"Bs",get:function(){if(this.Ms)return this.Ms;throw O()}},{key:"addReference",value:function(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),fe.resolve()}},{key:"removeReference",value:function(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),fe.resolve()}},{key:"markPotentiallyOrphaned",value:function(e,t){return this.Bs.add(t.toString()),fe.resolve()}},{key:"removeTarget",value:function(e,t){var n=this;this.$s.hs(t.targetId).forEach((function(e){return n.Bs.add(e.toString())}));var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((function(e){var t=n;e.forEach((function(e){return t.Bs.add(e.toString())}))})).next((function(){return r.removeTargetData(e,t)}))}},{key:"Ns",value:function(){this.Ms=new Set}},{key:"ks",value:function(e){var t=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fe.forEach(this.Bs,(function(r){var i=ne.fromPath(r);return t.Ls(e,i).next((function(e){e||n.removeEntry(i,J.min())}))})).next((function(){return t.Ms=null,n.apply(e)}))}},{key:"updateLimboDocument",value:function(e,t){var n=this;return this.Ls(e,t).next((function(e){e?n.Bs.delete(t.toString()):n.Bs.add(t.toString())}))}},{key:"Cs",value:function(e){return 0}},{key:"Ls",value:function(e,t){var n=this;return fe.or([function(){return fe.resolve(n.$s.containsKey(t))},function(){return n.persistence.getTargetCache().containsKey(e,t)},function(){return n.persistence.Os(e,t)}])}}],[{key:"Fs",value:function(e){return new t(e)}}]),t}();
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
var ri=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.targetId=n,this.fromCache=r,this.Vi=i,this.Si=a}return e(u)(t,null,[{key:"Di",value:function(e,n){var r=un(),i=un(),a=!0,o=!1,s=void 0;try{for(var u,c=n.docChanges[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:i=i.add(l.doc.key)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new t(e,n.fromCache,r,i)}}]),t}(),ii=function(){"use strict";function t(){e(o)(this,t),this.Ci=!1}return e(u)(t,[{key:"initialize",value:function(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){var i=this;return this.Ni(e,t).next((function(a){return a||i.ki(e,t,r,n)})).next((function(n){return n||i.Oi(e,t)}))}},{key:"Ni",value:function(t,n){var r=this;if(Mt(n))return fe.resolve(null);var i=Bt(n);return this.indexManager.getIndexType(t,i).next((function(a){return 0===a?null:(null!==n.limit&&1===a&&(n=qt(n,null,"F"),i=Bt(n)),r.indexManager.getDocumentsMatchingTarget(t,i).next((function(a){var o=r,s=un.apply(void 0,e(v)(a));return r.xi.getDocuments(t,s).next((function(e){return o.indexManager.getMinOffset(t,i).next((function(r){var i=o.$i(n,e);return o.Mi(n,i,s,r.readTime)?o.Ni(t,qt(n,null,"F")):o.Fi(t,i,n,r)}))}))})))}))}},{key:"ki",value:function(e,t,n,r){var i=this;return Mt(t)||r.isEqual(J.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((function(a){var o=i.$i(t,a);return i.Mi(t,o,n,r)?i.Oi(e,t):(S()<=w.LogLevel.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ht(t)),i.Fi(e,o,t,ie(r,-1)))}))}},{key:"$i",value:function(e,t){var n=new Se(Qt(e));return t.forEach((function(t,r){Gt(e,r)&&(n=n.add(r))})),n}},{key:"Mi",value:function(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;var i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}},{key:"Oi",value:function(e,t){return S()<=w.LogLevel.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Ht(t)),this.xi.getDocumentsMatchingQuery(e,t,oe.min())}},{key:"Fi",value:function(e,t,n,r){return this.xi.getDocumentsMatchingQuery(e,n,r).next((function(e){return t.forEach((function(t){e=e.insert(t.key,t)})),e}))}}]),t}(),ai=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.persistence=n,this.Bi=r,this.serializer=a,this.Li=new _e(Q),this.qi=new Yt((function(e){return Dt(e)}),Nt),this.Ui=new Map,this.Ki=n.getRemoteDocumentCache(),this.Ds=n.getTargetCache(),this.xs=n.getBundleCache(),this.Gi(i)}return e(u)(t,[{key:"Gi",value:function(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hr(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}},{key:"collectGarbage",value:function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return e.collect(n,t.Li)}))}}]),t}();
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
 */function oi(e,t,n,r){return new ai(e,t,n,r)}function si(e,t){return ui.apply(this,arguments)}function ui(){return(ui=e(i)(e(m).mark((function t(n,r){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=L(n),e.next=3,i.persistence.runTransaction("Handle user change","readonly",(function(e){var t;return i.mutationQueue.getAllMutationBatches(e).next((function(n){return t=n,i.Gi(r),i.mutationQueue.getAllMutationBatches(e)})).next((function(n){var r=[],a=[],o=un(),s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;r.push(f.batchId);var d=!0,v=!1,p=void 0;try{for(var y,m=f.mutations[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var g=y.value;o=o.add(g.key)}}catch(e){v=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(v)throw p}}}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var k=!0,w=!1,b=void 0;try{for(var x,E=n[Symbol.iterator]();!(k=(x=E.next()).done);k=!0){var _=x.value;a.push(_.batchId);var I=!0,T=!1,S=void 0;try{for(var C,A=_.mutations[Symbol.iterator]();!(I=(C=A.next()).done);I=!0){var D=C.value;o=o.add(D.key)}}catch(e){T=!0,S=e}finally{try{I||null==A.return||A.return()}finally{if(T)throw S}}}}catch(e){w=!0,b=e}finally{try{k||null==E.return||E.return()}finally{if(w)throw b}}return i.localDocuments.getDocuments(e,o).next((function(e){return{Qi:e,removedBatchIds:r,addedBatchIds:a}}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ci(e,t){var n=L(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(e){var r,i,a,o,s,u,c,l=t.batch.keys(),h=n.Ki.newChangeBuffer({trackRemovals:!0});return(r=n,i=e,a=t,o=h,s=a.batch,u=s.keys(),c=fe.resolve(),u.forEach((function(e){c=c.next((function(){return o.getEntry(i,e)})).next((function(t){var n=a.docVersions.get(e);R(null!==n),t.version.compareTo(n)<0&&(s.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),o.addEntry(t)))}))})),c.next((function(){return r.mutationQueue.removeMutationBatch(i,s)}))).next((function(){return h.apply(e)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){for(var t=un(),n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))})).next((function(){return n.localDocuments.getDocuments(e,l)}))}))}function li(e){var t=L(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(function(e){return t.Ds.getLastRemoteSnapshotVersion(e)}))}function hi(e,t){var n=L(e),r=t.snapshotVersion,i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(function(e){var a=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;var o=[];t.targetChanges.forEach((function(a,s){var u=i.get(s);if(u){o.push(n.Ds.removeMatchingKeys(e,a.removedDocuments,s).next((function(){return n.Ds.addMatchingKeys(e,a.addedDocuments,s)})));var c,l,h,f=u.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(s)?f=f.withResumeToken(Oe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):a.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(a.resumeToken,r)),i=i.insert(s,f),l=f,h=a,(0===(c=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.Ds.updateTargetData(e,f))}}));var s=$t(),u=un();if(t.documentUpdates.forEach((function(r){t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(fi(e,a,t.documentUpdates).next((function(e){s=e.zi,u=e.ji}))),!r.isEqual(J.min())){var c=n.Ds.getLastRemoteSnapshotVersion(e).next((function(t){return n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,r)}));o.push(c)}return fe.waitFor(o).next((function(){return a.apply(e)})).next((function(){return n.localDocuments.getLocalViewOfDocuments(e,s,u)})).next((function(){return s}))})).then((function(e){return n.Li=i,e}))}function fi(e,t,n){var r=un(),i=un();return n.forEach((function(e){return r=r.add(e)})),t.getEntries(e,r).next((function(e){var r=$t();return n.forEach((function(n,a){var o=e.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(J.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||0===a.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):C("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",a.version)})),{zi:r,ji:i}}))}function di(e,t){var n=L(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(function(e){return void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)}))}function vi(e,t){var n=L(e);return n.persistence.runTransaction("Allocate target","readwrite",(function(e){var r;return n.Ds.getTargetData(e,t).next((function(i){return i?(r=i,fe.resolve(r)):n.Ds.allocateTargetId(e).next((function(i){return r=new Pr(t,i,0,e.currentSequenceNumber),n.Ds.addTargetData(e,r).next((function(){return r}))}))}))})).then((function(e){var r=n.Li.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}function pi(e,t,n){return yi.apply(this,arguments)}function yi(){return(yi=e(i)(e(m).mark((function t(n,r,i){var a,o,s;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=L(n),o=a.Li.get(r),s=i?"readwrite":"readwrite-primary",e.prev=1,e.t0=i,e.t0){e.next=6;break}return e.next=6,a.persistence.runTransaction("Release target",s,(function(e){return a.persistence.referenceDelegate.removeTarget(e,o)}));case 6:e.next=13;break;case 8:if(e.prev=8,e.t1=e.catch(1),de(e.t1)){e.next=12;break}throw e.t1;case 12:C("LocalStore","Failed to update sequence numbers for target ".concat(r,": ").concat(e.t1));case 13:a.Li=a.Li.remove(r),a.qi.delete(o.target);case 14:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function mi(e,t,n){var r=L(e),i=J.min(),a=un();return r.persistence.runTransaction("Execute query","readonly",(function(e){return(o=r,s=e,u=Bt(t),c=L(o),l=c.qi.get(u),void 0!==l?fe.resolve(c.Li.get(l)):c.Ds.getTargetData(s,u)).next((function(t){if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(e,t.targetId).next((function(e){a=e}))})).next((function(){return r.Bi.getDocumentsMatchingQuery(e,t,n?i:J.min(),n?a:un())})).next((function(e){return gi(r,Wt(t),e),{documents:e,Wi:a}}));var o,s,u,c,l}))}function gi(e,t,n){var r=e.Ui.get(t)||J.min();n.forEach((function(e,t){t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ui.set(t,r)}var ki=function(){"use strict";function t(){e(o)(this,t),this.activeTargetIds=ln()}return e(u)(t,[{key:"tr",value:function(e){this.activeTargetIds=this.activeTargetIds.add(e)}},{key:"er",value:function(e){this.activeTargetIds=this.activeTargetIds.delete(e)}},{key:"Xi",value:function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}]),t}(),wi=function(){"use strict";function t(){e(o)(this,t),this.Br=new ki,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return e(u)(t,[{key:"addPendingMutation",value:function(e){}},{key:"updateMutationState",value:function(e,t,n){}},{key:"addLocalQueryTarget",value:function(e){return this.Br.tr(e),this.Lr[e]||"not-current"}},{key:"updateQueryState",value:function(e,t,n){this.Lr[e]=t}},{key:"removeLocalQueryTarget",value:function(e){this.Br.er(e)}},{key:"isLocalQueryTarget",value:function(e){return this.Br.activeTargetIds.has(e)}},{key:"clearQueryState",value:function(e){delete this.Lr[e]}},{key:"getAllActiveQueryTargets",value:function(){return this.Br.activeTargetIds}},{key:"isActiveQueryTarget",value:function(e){return this.Br.activeTargetIds.has(e)}},{key:"start",value:function(){return this.Br=new ki,Promise.resolve()}},{key:"handleUserChange",value:function(e,t,n){}},{key:"setOnlineState",value:function(e){}},{key:"shutdown",value:function(){}},{key:"writeSequenceNumber",value:function(e){}},{key:"notifyBundleLoaded",value:function(e){}}]),t}(),bi=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,[{key:"qr",value:function(e){}},{key:"shutdown",value:function(){}}]),t}(),xi=function(){"use strict";function t(){var n=this;e(o)(this,t),this.Ur=function(){return n.Kr()},this.Gr=function(){return n.Qr()},this.zr=[],this.jr()}return e(u)(t,[{key:"qr",value:function(e){this.zr.push(e)}},{key:"shutdown",value:function(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}},{key:"jr",value:function(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}},{key:"Kr",value:function(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.zr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(0)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"Qr",value:function(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.zr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(1)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}],[{key:"D",value:function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}]),t}(),Ei=null;function _i(){return null===Ei?Ei=268435456+Math.round(2147483648*Math.random()):Ei++,"0x"+Ei.toString(16)
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
 */}var Ii={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Ti=function(){"use strict";function t(n){e(o)(this,t),this.Wr=n.Wr,this.Hr=n.Hr}return e(u)(t,[{key:"Jr",value:function(e){this.Yr=e}},{key:"Zr",value:function(e){this.Xr=e}},{key:"onMessage",value:function(e){this.eo=e}},{key:"close",value:function(){this.Hr()}},{key:"send",value:function(e){this.Wr(e)}},{key:"no",value:function(){this.Yr()}},{key:"so",value:function(e){this.Xr(e)}},{key:"io",value:function(e){this.eo(e)}}]),t}(),Si="WebChannelConnection",Ci=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,t)).forceLongPolling=t.forceLongPolling,i.autoDetectLongPolling=t.autoDetectLongPolling,i.useFetchStreams=t.useFetchStreams,e(f)(i)}return e(u)(r,[{key:"lo",value:function(e,t,n,r){var i=_i();return new Promise((function(a,o){var s=new(0,x.XhrIo);s.setWithCredentials(!0),s.listenOnce(x.EventType.COMPLETE,(function(){try{switch(s.getLastErrorCode()){case x.ErrorCode.NO_ERROR:var t=s.getResponseJson();C(Si,"XHR for RPC '".concat(e,"' ").concat(i," received:"),JSON.stringify(t)),a(t);break;case x.ErrorCode.TIMEOUT:C(Si,"RPC '".concat(e,"' ").concat(i," timed out")),o(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case x.ErrorCode.HTTP_ERROR:var n=s.getStatus();if(C(Si,"RPC '".concat(e,"' ").concat(i," failed with status:"),n,"response text:",s.getResponseText()),n>0){var r=s.getResponseJson();Array.isArray(r)&&(r=r[0]);var u=null==r?void 0:r.error;if(u&&u.status&&u.message){var c=(l=u.status,h=l.toLowerCase().replace(/_/g,"-"),Object.values(P).indexOf(h)>=0?h:P.UNKNOWN);o(new M(c,u.message))}else o(new M(P.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new M(P.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{C(Si,"RPC '".concat(e,"' ").concat(i," completed."))}var l,h}));var u=JSON.stringify(r);C(Si,"RPC '".concat(e,"' ").concat(i," sending request:"),r),s.send(t,"POST",u,n,15)}))}},{key:"wo",value:function(e,t,n){var r=_i(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,x.createWebChannelTransport)(),o=(0,x.getStatEventTarget)(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new(0,x.FetchXmlHttpFactory)({})),this.ho(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;var u=i.join("");C(Si,"Creating RPC '".concat(e,"' stream ").concat(r,": ").concat(u),s);var c=a.createWebChannel(u,s),l=!1,h=!1,f=new Ti({Wr:function(t){h?C(Si,"Not sending because RPC '".concat(e,"' stream ").concat(r," is closed:"),t):(l||(C(Si,"Opening RPC '".concat(e,"' stream ").concat(r," transport.")),c.open(),l=!0),C(Si,"RPC '".concat(e,"' stream ").concat(r," sending:"),t),c.send(t))},Hr:function(){return c.close()}}),d=function(e,t,n){e.listen(t,(function(e){try{n(e)}catch(e){setTimeout((function(){throw e}),0)}}))};return d(c,x.WebChannel.EventType.OPEN,(function(){h||C(Si,"RPC '".concat(e,"' stream ").concat(r," transport opened."))})),d(c,x.WebChannel.EventType.CLOSE,(function(){h||(h=!0,C(Si,"RPC '".concat(e,"' stream ").concat(r," transport closed")),f.so())})),d(c,x.WebChannel.EventType.ERROR,(function(t){h||(h=!0,D(Si,"RPC '".concat(e,"' stream ").concat(r," transport errored:"),t),f.so(new M(P.UNAVAILABLE,"The operation could not be completed")))})),d(c,x.WebChannel.EventType.MESSAGE,(function(t){var n;if(!h){var i=t.data[0];R(!!i);var a=i,o=a.error||(null===(n=a[0])||void 0===n?void 0:n.error);if(o){C(Si,"RPC '".concat(e,"' stream ").concat(r," received error:"),o);var s=o.status,u=function(e){var t=jn[e];if(void 0!==t)return Xn(t)}(s),l=o.message;void 0===u&&(u=P.INTERNAL,l="Unknown error status: "+s+" with message "+o.message),h=!0,f.so(new M(u,l)),c.close()}else C(Si,"RPC '".concat(e,"' stream ").concat(r," received:"),i),f.io(i)}})),d(o,x.Event.STAT_EVENT,(function(t){t.stat===x.Stat.PROXY?C(Si,"RPC '".concat(e,"' stream ").concat(r," detected buffering proxy")):t.stat===x.Stat.NOPROXY&&C(Si,"RPC '".concat(e,"' stream ").concat(r," detected no buffering proxy"))})),setTimeout((function(){f.no()}),0),f}}]),r}(function(){"use strict";function t(n){e(o)(this,t),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.ro=r+"://"+n.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return e(u)(t,[{key:"uo",get:function(){return!1}},{key:"co",value:function(e,t,n,r,i){var a=_i(),o=this.ao(e,t);C("RestConnection","Sending RPC '".concat(e,"' ").concat(a,":"),o,n);var s={};return this.ho(s,r,i),this.lo(e,o,s,n).then((function(t){return C("RestConnection","Received RPC '".concat(e,"' ").concat(a,": "),t),t}),(function(t){throw D("RestConnection","RPC '".concat(e,"' ").concat(a," failed with error: "),t,"url: ",o,"request:",n),t}))}},{key:"fo",value:function(e,t,n,r,i,a){return this.co(e,t,n,r,i)}},{key:"ho",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+I,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"ao",value:function(e,t){var n=Ii[e];return"".concat(this.ro,"/v1/").concat(t,":").concat(n)}}]),t}());
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
 */function Ai(){return"undefined"!=typeof document?document:null}
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
 */function Di(e){return new lr(e,!0)}
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
 */var Ni=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;e(o)(this,t),this.Ws=n,this.timerId=r,this._o=i,this.mo=a,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}return e(u)(t,[{key:"reset",value:function(){this.po=0}},{key:"Eo",value:function(){this.po=this.yo}},{key:"Ao",value:function(e){var t=this;this.cancel();var n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.po," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(function(){return t.To=Date.now(),e()})),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}},{key:"vo",value:function(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}},{key:"cancel",value:function(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}},{key:"Ro",value:function(){return(Math.random()-.5)*this.po}}]),t}(),Oi=function(){"use strict";function t(n,r,i,a,s,u,c,l){e(o)(this,t),this.Ws=n,this.bo=i,this.Po=a,this.connection=s,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Ni(n,r)}return e(u)(t,[{key:"xo",value:function(){return 1===this.state||5===this.state||this.No()}},{key:"No",value:function(){return 2===this.state||3===this.state}},{key:"start",value:function(){4!==this.state?this.auth():this.ko()}},{key:"stop",value:function(){var t=this;return e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.xo(),!e.t0){e.next=4;break}return e.next=4,t.close(0);case 4:case"end":return e.stop()}}),n)})))()}},{key:"Oo",value:function(){this.state=0,this.Co.reset()}},{key:"$o",value:function(){var e=this;this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(function(){return e.Mo()})))}},{key:"Fo",value:function(e){this.Bo(),this.stream.send(e)}},{key:"Mo",value:function(){var t=this;return e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.No()){e.next=2;break}return e.abrupt("return",t.close(0));case 2:case"end":return e.stop()}}),n)})))()}},{key:"Bo",value:function(){this.So&&(this.So.cancel(),this.So=null)}},{key:"Lo",value:function(){this.Do&&(this.Do.cancel(),this.Do=null)}},{key:"close",value:function(t,n){var r=this;return e(i)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.Bo(),r.Lo(),r.Co.cancel(),r.Vo++,4!==t?r.Co.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(A(n.toString()),A("Using maximum backoff delay to prevent overloading the backend."),r.Co.Eo()):n&&n.code===P.UNAUTHENTICATED&&3!==r.state&&(r.authCredentialsProvider.invalidateToken(),r.appCheckCredentialsProvider.invalidateToken()),null!==r.stream&&(r.qo(),r.stream.close(),r.stream=null),r.state=t,e.next=9,r.listener.Zr(n);case 9:case"end":return e.stop()}}),i)})))()}},{key:"qo",value:function(){}},{key:"auth",value:function(){var t=this;this.state=1;var n=this.Uo(this.Vo),r=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((function(n){var i=e(d)(n,2),a=i[0],o=i[1];t.Vo===r&&t.Ko(a,o)}),(function(e){var r=t;n((function(){var t=new M(P.UNKNOWN,"Fetching auth token failed: "+e.message);return r.Go(t)}))}))}},{key:"Ko",value:function(e,t){var n=this,r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((function(){var e=n;r((function(){return e.state=2,e.Do=e.Ws.enqueueAfterDelay(e.Po,1e4,(function(){return e.No()&&(e.state=3),Promise.resolve()})),e.listener.Jr()}))})),this.stream.Zr((function(e){var t=n;r((function(){return t.Go(e)}))})),this.stream.onMessage((function(e){var t=n;r((function(){return t.onMessage(e)}))}))}},{key:"ko",value:function(){var t=this;this.state=5,this.Co.Ao(e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state=0,t.start();case 1:case"end":return e.stop()}}),n)}))))}},{key:"Go",value:function(e){return C("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}},{key:"Uo",value:function(e){var t=this;return function(n){var r=t;t.Ws.enqueueAndForget((function(){return r.Vo===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}}}]),t}(),Ri=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i,a,s,u,c){var l;return e(o)(this,r),(l=n.call(this,t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,s,c)).serializer=u,e(f)(l)}return e(u)(r,[{key:"Qo",value:function(e,t){return this.connection.wo("Listen",e,t)}},{key:"onMessage",value:function(e){this.Co.reset();var t=function(e,t){var n,r;if("targetChange"in t){t.targetChange;var i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:O(),a=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(R(void 0===t||"string"==typeof t),Oe.fromBase64String(t||"")):(R(void 0===t||t instanceof Uint8Array),Oe.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,u=s&&function(e){var t=void 0===e.code?P.UNKNOWN:Xn(e.code);return new M(t,e.message||"")}(s);n=new nr(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;var c=t.documentChange;c.document,c.document.name,c.document.updateTime;var l=gr(e,c.document.name),h=vr(c.document.updateTime),f=c.document.createTime?vr(c.document.createTime):J.min(),d=new rt({mapValue:{fields:c.document.fields}}),v=at.newFoundDocument(l,h,f,d),p=c.targetIds||[],y=c.removedTargetIds||[];n=new er(p,y,v.key,v)}else if("documentDelete"in t){t.documentDelete;var m=t.documentDelete;m.document;var g=gr(e,m.document),k=m.readTime?vr(m.readTime):J.min(),w=at.newNoDocument(g,k),b=m.removedTargetIds||[];n=new er([],b,w.key,w)}else if("documentRemove"in t){t.documentRemove;var x=t.documentRemove;x.document;var E=gr(e,x.document),_=x.removedTargetIds||[];n=new er([],_,E,null)}else{if(!("filter"in t))return O();t.filter;var I=t.filter;I.targetId;var T=I.count||0,S=new Wn(T),C=I.targetId;n=new tr(C,S)}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return J.min();var t=e.targetChange;return t.targetIds&&t.targetIds.length?J.min():t.readTime?vr(t.readTime):J.min()}(e);return this.listener.zo(t,n)}},{key:"jo",value:function(e){var t,n,r,i,a={};a.database=br(this.serializer),a.addTarget=(t=this.serializer,i=(n=e).target,(r=Ot(i)?{documents:Ir(t,i)}:{query:Tr(t,i)}).targetId=n.targetId,n.resumeToken.approximateByteSize()>0?r.resumeToken=fr(t,n.resumeToken):n.snapshotVersion.compareTo(J.min())>0&&(r.readTime=hr(t,n.snapshotVersion.toTimestamp())),r);var o=function(e,t){var n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);o&&(a.labels=o),this.Fo(a)}},{key:"Wo",value:function(e){var t={};t.database=br(this.serializer),t.removeTarget=e,this.Fo(t)}}]),r}(Oi),Li=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i,a,s,u,c){var l;return e(o)(this,r),(l=n.call(this,t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,s,c)).serializer=u,l.Ho=!1,e(f)(l)}return e(u)(r,[{key:"Jo",get:function(){return this.Ho}},{key:"start",value:function(){this.Ho=!1,this.lastStreamToken=void 0,e(c)(e(l)(r.prototype),"start",this).call(this)}},{key:"qo",value:function(){this.Ho&&this.Yo([])}},{key:"Qo",value:function(e,t){return this.connection.wo("Write",e,t)}},{key:"onMessage",value:function(e){if(R(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();var t=(r=e.writeResults,i=e.commitTime,r&&r.length>0?(R(void 0!==i),r.map((function(e){return n=i,(r=(t=e).updateTime?vr(t.updateTime):vr(n)).isEqual(J.min())&&(r=vr(n)),new Tn(r,t.transformResults||[]);var t,n,r}))):[]),n=vr(e.commitTime);return this.listener.Zo(n,t)}var r,i;return R(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}},{key:"tu",value:function(){var e={};e.database=br(this.serializer),this.Fo(e)}},{key:"Yo",value:function(e){var t=this,n={streamToken:this.lastStreamToken,writes:e.map((function(e){return _r(t.serializer,e)}))};this.Fo(n)}}]),r}(Oi),Pi=function(t){"use strict";e(h)(r,(function t(){e(o)(this,t)}));var n=e(y)(r);function r(t,i,a,s){var u;return e(o)(this,r),(u=n.call(this)).authCredentials=t,u.appCheckCredentials=i,u.connection=a,u.serializer=s,u.eu=!1,e(f)(u)}return e(u)(r,[{key:"nu",value:function(){if(this.eu)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"co",value:function(t,n,r){var i=this;return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=e(d)(a,2),s=o[0],u=o[1];return i.connection.co(t,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new M(P.UNKNOWN,e.toString())}))}},{key:"fo",value:function(t,n,r,i){var a=this;return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=e(d)(o,2),u=s[0],c=s[1];return a.connection.fo(t,n,r,u,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new M(P.UNKNOWN,e.toString())}))}},{key:"terminate",value:function(){this.eu=!0}}]),r}();
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
 */var Mi=function(){"use strict";function t(n,r){e(o)(this,t),this.asyncQueue=n,this.onlineStateHandler=r,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}return e(u)(t,[{key:"ou",value:function(){var e=this;0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(function(){return e.iu=null,e.cu("Backend didn't respond within 10 seconds."),e.uu("Offline"),Promise.resolve()})))}},{key:"au",value:function(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.uu("Offline")))}},{key:"set",value:function(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}},{key:"uu",value:function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}},{key:"cu",value:function(e){var t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.ru?(A(t),this.ru=!1):C("OnlineStateTracker",t)}},{key:"hu",value:function(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}]),t}(),Fi=function t(n,r,a,s,u){"use strict";var c=this;e(o)(this,t),this.localStore=n,this.datastore=r,this.asyncQueue=a,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=u,this._u.qr((function(t){var n=c;a.enqueueAndForget(e(i)(e(m).mark((function t(){return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=Qi(n),!t.t0){t.next=5;break}return C("RemoteStore","Restarting streams for network reachability change."),t.next=5,function(){var t=e(i)(e(m).mark((function t(n){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=L(n)).du.add(4),e.next=4,ji(r);case 4:return r.mu.set("Unknown"),r.du.delete(4),e.next=8,Ui(r);case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(n);case 5:case"end":return t.stop()}}),t)}))))})),this.mu=new Mi(a,s)};
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
 */function Ui(e){return Vi.apply(this,arguments)}function Vi(){return(Vi=e(i)(e(m).mark((function t(n){var r,i,a,o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,i=!1,a=void 0,!Qi(n)){e.next=25;break}e.prev=2,o=n.wu[Symbol.iterator]();case 4:if(r=(s=o.next()).done){e.next=11;break}return u=s.value,e.next=8,u(!0);case 8:r=!0,e.next=4;break;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==o.return||o.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),t,null,[[2,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function ji(e){return Bi.apply(this,arguments)}function Bi(){return(Bi=e(i)(e(m).mark((function t(n){var r,i,a,o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,a=void 0,e.prev=1,o=n.wu[Symbol.iterator]();case 3:if(r=(s=o.next()).done){e.next=10;break}return u=s.value,e.next=7,u(!1);case 7:r=!0,e.next=3;break;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i=!0,a=e.t0;case 16:e.prev=16,e.prev=17,r||null==o.return||o.return();case 19:if(e.prev=19,!i){e.next=22;break}throw a;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}}),t,null,[[1,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function qi(e,t){var n=L(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Wi(n)?Gi(n):Ea(n).No()&&Ki(n,t))}function zi(e,t){var n=L(e),r=Ea(n);n.fu.delete(t),r.No()&&Hi(n,t),0===n.fu.size&&(r.No()?r.$o():Qi(n)&&n.mu.set("Unknown"))}function Ki(e,t){e.gu.Ot(t.targetId),Ea(e).jo(t)}function Hi(e,t){e.gu.Ot(t),Ea(e).Wo(t)}function Gi(e){e.gu=new ir({getRemoteKeysForTarget:function(t){return e.remoteSyncer.getRemoteKeysForTarget(t)},ne:function(t){return e.fu.get(t)||null}}),Ea(e).start(),e.mu.ou()}function Wi(e){return Qi(e)&&!Ea(e).xo()&&e.fu.size>0}function Qi(e){return 0===L(e).du.size}function Xi(e){e.gu=void 0}function Yi(e){return Ji.apply(this,arguments)}function Ji(){return(Ji=e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.fu.forEach((function(e,t){Ki(n,e)}));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $i(e,t){return Zi.apply(this,arguments)}function Zi(){return(Zi=e(i)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Xi(n),Wi(n)?(n.mu.au(r),Gi(n)):n.mu.set("Unknown");case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ea(e,t,n){return ta.apply(this,arguments)}function ta(){return ta=e(i)(e(m).mark((function t(n,r,a){var o;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.mu.set("Online"),!(r instanceof nr&&2===r.state&&r.cause)){t.next=13;break}return t.prev=1,t.next=4,function(){var t=e(i)(e(m).mark((function t(n,r){var i,a,o,s,u,c,l;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.cause,a=!0,o=!1,s=void 0,e.prev=2,u=r.targetIds[Symbol.iterator]();case 4:if(a=(c=u.next()).done){e.next=15;break}if(l=c.value,e.t0=n.fu.has(l),!e.t0){e.next=12;break}return e.next=10,n.remoteSyncer.rejectListen(l,i);case 10:n.fu.delete(l),n.gu.removeTarget(l);case 12:a=!0,e.next=4;break;case 15:e.next=21;break;case 17:e.prev=17,e.t1=e.catch(2),o=!0,s=e.t1;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}}),t,null,[[2,17,21,29],[22,,24,28]])})));return function(e,n){return t.apply(this,arguments)}}()(n,r);case 4:t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(1),C("RemoteStore","Failed to remove targets %s: %s ",r.targetIds.join(","),t.t0),t.next=11,na(n,t.t0);case 11:case 22:t.next=29;break;case 13:if(r instanceof er?n.gu.Kt(r):r instanceof tr?n.gu.Jt(r):n.gu.zt(r),a.isEqual(J.min())){t.next=29;break}return t.prev=14,t.next=17,li(n.localStore);case 17:if(o=t.sent,t.t1=a.compareTo(o)>=0,!t.t1){t.next=22;break}return t.next=22,function(e,t){var n=e.gu.Xt(t);return n.targetChanges.forEach((function(n,r){if(n.resumeToken.approximateByteSize()>0){var i=e.fu.get(r);i&&e.fu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((function(t){var n=e.fu.get(t);if(n){e.fu.set(t,n.withResumeToken(Oe.EMPTY_BYTE_STRING,n.snapshotVersion)),Hi(e,t);var r=new Pr(n.target,t,1,n.sequenceNumber);Ki(e,r)}})),e.remoteSyncer.applyRemoteEvent(n)}(n,a);case 24:return t.prev=24,t.t2=t.catch(14),C("RemoteStore","Failed to raise snapshot:",t.t2),t.next=29,na(n,t.t2);case 29:case"end":return t.stop()}}),t,null,[[1,6],[14,24]])}))),ta.apply(this,arguments)}function na(e,t,n){return ra.apply(this,arguments)}function ra(){return(ra=e(i)(e(m).mark((function t(n,r,a){return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(de(r)){t.next=2;break}throw r;case 2:return n.du.add(1),t.next=5,ji(n);case 5:n.mu.set("Offline"),a||(a=function(){return li(n.localStore)}),n.asyncQueue.enqueueRetryable(e(i)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("RemoteStore","Retrying IndexedDB access"),e.next=3,a();case 3:return n.du.delete(1),e.next=6,Ui(n);case 6:case"end":return e.stop()}}),t)}))));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ia(e,t){return t().catch((function(n){return na(e,n,t)}))}function aa(e){return oa.apply(this,arguments)}function oa(){return(oa=e(i)(e(m).mark((function t(n){var r,i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=L(n),i=_a(r),a=r.lu.length>0?r.lu[r.lu.length-1].batchId:-1;case 2:if(!sa(r)){e.next=19;break}return e.prev=3,e.next=6,di(r.localStore,a);case 6:if(null!==(o=e.sent)){e.next=10;break}return 0===r.lu.length&&i.$o(),e.abrupt("break",19);case 10:a=o.batchId,ua(r,o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),e.next=17,na(r,e.t0);case 17:e.next=2;break;case 19:ca(r)&&la(r);case 20:case"end":return e.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}function sa(e){return Qi(e)&&e.lu.length<10}function ua(e,t){e.lu.push(t);var n=_a(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function ca(e){return Qi(e)&&!_a(e).xo()&&e.lu.length>0}function la(e){_a(e).start()}function ha(e){return fa.apply(this,arguments)}function fa(){return(fa=e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_a(n).tu();case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function da(e){return va.apply(this,arguments)}function va(){return(va=e(i)(e(m).mark((function t(n){var r,i,a,o,s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=_a(n),i=!0,a=!1,o=void 0,e.prev=2,s=n.lu[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)c=u.value,r.Yo(c.mutations);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,o=e.t0;case 10:e.prev=10,e.prev=11,i||null==s.return||s.return();case 13:if(e.prev=13,!a){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:case"end":return e.stop()}}),t,null,[[2,6,10,18],[11,,13,17]])})))).apply(this,arguments)}function pa(e,t,n){return ya.apply(this,arguments)}function ya(){return(ya=e(i)(e(m).mark((function t(n,r,i){var a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.lu.shift(),o=Hn.from(a,r,i),e.next=3,ia(n,(function(){return n.remoteSyncer.applySuccessfulWrite(o)}));case 3:return e.next=5,aa(n);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ma(e,t){return ga.apply(this,arguments)}function ga(){return ga=e(i)(e(m).mark((function t(n,r){return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r&&_a(n).Jo,!t.t0){t.next=4;break}return t.next=4,function(){var t=e(i)(e(m).mark((function t(n,r){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Qn(a=r.code)||a===P.ABORTED){e.next=7;break}return i=n.lu.shift(),_a(n).Oo(),e.next=5,ia(n,(function(){return n.remoteSyncer.rejectFailedWrite(i.batchId,r)}));case 5:return e.next=7,aa(n);case 7:case 8:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()(n,r);case 4:ca(n)&&la(n);case 5:case"end":return t.stop()}}),t)}))),ga.apply(this,arguments)}function ka(e,t){return wa.apply(this,arguments)}function wa(){return(wa=e(i)(e(m).mark((function t(n,r){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=L(n)).asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials"),a=Qi(i),i.du.add(3),e.next=6,ji(i);case 6:return a&&i.mu.set("Unknown"),e.next=9,i.remoteSyncer.handleCredentialChange(r);case 9:return i.du.delete(3),e.next=12,Ui(i);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ba(e,t){return xa.apply(this,arguments)}function xa(){return(xa=e(i)(e(m).mark((function t(n,r){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=L(n),!r){e.next=7;break}return i.du.delete(2),e.next=5,Ui(i);case 5:e.next=13;break;case 7:if(e.t0=r,e.t0){e.next=13;break}return i.du.add(2),e.next=12,ji(i);case 12:i.mu.set("Unknown");case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ea(t){return t.yu||(t.yu=(r=t.datastore,a=t.asyncQueue,o={Jr:Yi.bind(null,t),Zr:$i.bind(null,t),zo:ea.bind(null,t)},(s=L(r)).nu(),new Ri(a,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)),t.wu.push((n=e(i)(e(m).mark((function n(r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}t.yu.Oo(),Wi(t)?Gi(t):t.mu.set("Unknown"),e.next=7;break;case 4:return e.next=6,t.yu.stop();case 6:Xi(t);case 7:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),t.yu;var n,r,a,o,s}function _a(t){return t.pu||(t.pu=(r=t.datastore,a=t.asyncQueue,o={Jr:ha.bind(null,t),Zr:ma.bind(null,t),Xo:da.bind(null,t),Zo:pa.bind(null,t)},(s=L(r)).nu(),new Li(a,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)),t.wu.push((n=e(i)(e(m).mark((function n(r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return t.pu.Oo(),e.next=4,aa(t);case 4:e.next=9;break;case 6:return e.next=8,t.pu.stop();case 8:t.lu.length>0&&(C("RemoteStore","Stopping write stream with ".concat(t.lu.length," pending writes")),t.lu=[]);case 9:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),t.pu
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
 */;var n,r,a,o,s}var Ia=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=s,this.deferred=new F,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return e(u)(t,[{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(e,n,r,i,a){var o=new t(e,n,Date.now()+r,i,a);return o.start(r),o}}]),t}();function Ta(e,t){if(A("AsyncQueue","".concat(t,": ").concat(e)),de(e))return new M(P.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
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
 */var Sa=function(){"use strict";function t(n){e(o)(this,t),this.comparator=n?function(e,t){return n(e,t)||ne.comparator(e.key,t.key)}:function(e,t){return ne.comparator(e.key,t.key)},this.keyedMap=en(),this.sortedSet=new _e(this.comparator)}return e(u)(t,[{key:"has",value:function(e){return null!=this.keyedMap.get(e)}},{key:"get",value:function(e){return this.keyedMap.get(e)}},{key:"first",value:function(){return this.sortedSet.minKey()}},{key:"last",value:function(){return this.sortedSet.maxKey()}},{key:"isEmpty",value:function(){return this.sortedSet.isEmpty()}},{key:"indexOf",value:function(e){var t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}},{key:"size",get:function(){return this.sortedSet.size}},{key:"forEach",value:function(e){this.sortedSet.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"add",value:function(e){var t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}},{key:"delete",value:function(e){var t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}},{key:"copy",value:function(e,n){var r=new t;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}],[{key:"emptySet",value:function(e){return new t(e.comparator)}}]),t}(),Ca=function(){"use strict";function t(){e(o)(this,t),this.Iu=new _e(ne.comparator)}return e(u)(t,[{key:"track",value:function(e){var t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):O():this.Iu=this.Iu.insert(t,e)}},{key:"Tu",value:function(){var e=[];return this.Iu.inorderTraversal((function(t,n){e.push(n)})),e}}]),t}(),Aa=function(){"use strict";function t(n,r,i,a,s,u,c,l,h){e(o)(this,t),this.query=n,this.docs=r,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=s,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}return e(u)(t,[{key:"hasPendingWrites",get:function(){return!this.mutatedKeys.isEmpty()}},{key:"isEqual",value:function(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;var t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}],[{key:"fromInitialDocuments",value:function(e,n,r,i,a){var o=[];return n.forEach((function(e){o.push({type:0,doc:e})})),new t(e,n,Sa.emptySet(n),o,r,i,!0,!1,a)}}]),t}(),Da=function t(){"use strict";e(o)(this,t),this.Eu=void 0,this.listeners=[]},Na=function t(){"use strict";e(o)(this,t),this.queries=new Yt((function(e){return Kt(e)}),zt),this.onlineState="Unknown",this.Au=new Set};
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
 */function Oa(e,t){return Ra.apply(this,arguments)}function Ra(){return(Ra=e(i)(e(m).mark((function t(n,r){var i,a,o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=L(n),a=r.query,o=!1,(s=i.queries.get(a))||(o=!0,s=new Da),!o){e.next=13;break}return e.prev=3,e.next=6,i.onListen(a);case 6:s.Eu=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),u=Ta(e.t0,"Initialization of query '".concat(Ht(r.query),"' failed")),e.abrupt("return",void r.onError(u));case 13:i.queries.set(a,s),s.listeners.push(r),r.Ru(i.onlineState),s.Eu&&r.vu(s.Eu)&&Ua(i);case 14:case"end":return e.stop()}}),t,null,[[3,9]])})))).apply(this,arguments)}function La(e,t){return Pa.apply(this,arguments)}function Pa(){return(Pa=e(i)(e(m).mark((function t(n,r){var i,a,o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=L(n),a=r.query,o=!1,(s=i.queries.get(a))&&(u=s.listeners.indexOf(r))>=0&&(s.listeners.splice(u,1),o=0===s.listeners.length),!o){e.next=6;break}return e.abrupt("return",(i.queries.delete(a),i.onUnlisten(a)));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ma(e,t){var n=L(e),r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.query,h=n.queries.get(l);if(h){var f=!0,d=!1,v=void 0;try{for(var p,y=h.listeners[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){p.value.vu(c)&&(r=!0)}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}h.Eu=c}}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}r&&Ua(n)}function Fa(e,t,n){var r=L(e),i=r.queries.get(t),a=!0,o=!1,s=void 0;if(i)try{for(var u,c=i.listeners[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){u.value.onError(n)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}r.queries.delete(t)}function Ua(e){e.Au.forEach((function(e){e.next()}))}var Va=function(){"use strict";function t(n,r,i){e(o)(this,t),this.query=n,this.bu=r,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}return e(u)(t,[{key:"vu",value:function(e){if(!this.options.includeMetadataChanges){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.docChanges[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;3!==s.type&&t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}e=new Aa(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}var u=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),u=!0):this.Du(e,this.onlineState)&&(this.Cu(e),u=!0),this.Vu=e,u}},{key:"onError",value:function(e){this.bu.error(e)}},{key:"Ru",value:function(e){this.onlineState=e;var t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}},{key:"Du",value:function(e,t){if(!e.fromCache)return!0;var n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}},{key:"Su",value:function(e){if(e.docChanges.length>0)return!0;var t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}},{key:"Cu",value:function(e){e=Aa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}]),t}();
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
var ja=function t(n){"use strict";e(o)(this,t),this.key=n},Ba=function t(n){"use strict";e(o)(this,t),this.key=n},qa=function(){"use strict";function t(n,r){e(o)(this,t),this.query=n,this.Lu=r,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=un(),this.mutatedKeys=un(),this.Ku=Qt(n),this.Gu=new Sa(this.Ku)}return e(u)(t,[{key:"Qu",get:function(){return this.Lu}},{key:"zu",value:function(e,t){var n=this,r=t?t.ju:new Ca,i=t?t.Gu:this.Gu,a=t?t.mutatedKeys:this.mutatedKeys,o=i,s=!1,u="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((function(e,t){var l=i.get(e),h=Gt(n.query,t)?t:null,f=!!l&&n.mutatedKeys.has(l.key),d=!!h&&(h.hasLocalMutations||n.mutatedKeys.has(h.key)&&h.hasCommittedMutations),v=!1;l&&h?l.data.isEqual(h.data)?f!==d&&(r.track({type:3,doc:h}),v=!0):n.Wu(l,h)||(r.track({type:2,doc:h}),v=!0,(u&&n.Ku(h,u)>0||c&&n.Ku(h,c)<0)&&(s=!0)):!l&&h?(r.track({type:0,doc:h}),v=!0):l&&!h&&(r.track({type:1,doc:l}),v=!0,(u||c)&&(s=!0)),v&&(h?(o=o.add(h),a=d?a.add(e):a.delete(e)):(o=o.delete(e),a=a.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){var l="F"===this.query.limitType?o.last():o.first();o=o.delete(l.key),a=a.delete(l.key),r.track({type:1,doc:l})}return{Gu:o,ju:r,Mi:s,mutatedKeys:a}}},{key:"Wu",value:function(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}},{key:"applyChanges",value:function(e,t,n){var r=this,i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;var a=e.ju.Tu();a.sort((function(e,t){return n=e.type,i=t.type,(a=function(e){switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}})(n)-a(i)||r.Ku(e.doc,t.doc);var n,i,a})),this.Hu(n);var o=t?this.Ju():[],s=0===this.Uu.size&&this.current?1:0,u=s!==this.qu;return this.qu=s,0!==a.length||u?{snapshot:new Aa(this.query,e.Gu,i,a,e.mutatedKeys,0===s,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}},{key:"Ru",value:function(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Ca,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}},{key:"Zu",value:function(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}},{key:"Hu",value:function(e){var t=this;e&&(e.addedDocuments.forEach((function(e){return t.Lu=t.Lu.add(e)})),e.modifiedDocuments.forEach((function(e){})),e.removedDocuments.forEach((function(e){return t.Lu=t.Lu.delete(e)})),this.current=e.current)}},{key:"Ju",value:function(){var e=this;if(!this.current)return[];var t=this.Uu;this.Uu=un(),this.Gu.forEach((function(t){e.Zu(t.key)&&(e.Uu=e.Uu.add(t.key))}));var n=[];return t.forEach((function(t){e.Uu.has(t)||n.push(new Ba(t))})),this.Uu.forEach((function(e){t.has(e)||n.push(new ja(e))})),n}},{key:"Xu",value:function(e){this.Lu=e.Wi,this.Uu=un();var t=this.zu(e.documents);return this.applyChanges(t,!0)}},{key:"tc",value:function(){return Aa.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}]),t}(),za=function t(n,r,i){"use strict";e(o)(this,t),this.query=n,this.targetId=r,this.view=i},Ka=function t(n){"use strict";e(o)(this,t),this.key=n,this.ec=!1},Ha=function(){"use strict";function t(n,r,i,a,s,u){e(o)(this,t),this.localStore=n,this.remoteStore=r,this.eventManager=i,this.sharedClientState=a,this.currentUser=s,this.maxConcurrentLimboResolutions=u,this.nc={},this.sc=new Yt((function(e){return Kt(e)}),zt),this.ic=new Map,this.rc=new Set,this.oc=new _e(ne.comparator),this.uc=new Map,this.cc=new Qr,this.ac={},this.hc=new Map,this.lc=qr.bn(),this.onlineState="Unknown",this.fc=void 0}return e(u)(t,[{key:"isPrimaryClient",get:function(){return!0===this.fc}}]),t}();function Ga(e,t){return Wa.apply(this,arguments)}function Wa(){return(Wa=e(i)(e(m).mark((function t(n,r){var i,a,o,s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=xo(n),!(s=i.sc.get(r))){e.next=7;break}a=s.targetId,i.sharedClientState.addLocalQueryTarget(a),o=s.view.tc(),e.next=16;break;case 7:return e.next=9,vi(i.localStore,Bt(r));case 9:return u=e.sent,i.isPrimaryClient&&qi(i.remoteStore,u),c=i.sharedClientState.addLocalQueryTarget(u.targetId),a=u.targetId,e.next=15,Qa(i,r,a,"current"===c,u.resumeToken);case 15:o=e.sent;case 16:return e.abrupt("return",o);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qa(e,t,n,r,i){return Xa.apply(this,arguments)}function Xa(){return Xa=e(i)(e(m).mark((function t(n,r,a,o,s){var u,c,l,h,f,d;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.dc=function(t,r,a){return(o=e(i)(e(m).mark((function t(n,r,i,a){var o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.view.zu(i),e.t0=o.Mi,!e.t0){e.next=6;break}return e.next=5,mi(n.localStore,r.query,!1).then((function(e){var t=e.documents;return r.view.zu(t,o)}));case 5:o=e.sent;case 6:return s=a&&a.targetChanges.get(r.targetId),u=r.view.applyChanges(o,n.isPrimaryClient,s),e.abrupt("return",(vo(n,r.targetId,u.Yu),u.snapshot));case 8:case"end":return e.stop()}}),t)}))),function(e,t,n,r){return o.apply(this,arguments)})(n,t,r,a);var o},t.next=3,mi(n.localStore,r,!0);case 3:return u=t.sent,c=new qa(r,u.Wi),l=c.zu(u.documents),h=Zn.createSynthesizedTargetChangeForCurrentChange(a,o&&"Offline"!==n.onlineState,s),f=c.applyChanges(l,n.isPrimaryClient,h),vo(n,a,f.Yu),d=new za(r,a,c),t.abrupt("return",(n.sc.set(r,d),n.ic.has(a)?n.ic.get(a).push(r):n.ic.set(a,[r]),f.snapshot));case 11:case"end":return t.stop()}}),t)}))),Xa.apply(this,arguments)}function Ya(e,t){return Ja.apply(this,arguments)}function Ja(){return(Ja=e(i)(e(m).mark((function t(n,r){var i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=L(n),a=i.sc.get(r),!((o=i.ic.get(a.targetId)).length>1)){e.next=3;break}return e.abrupt("return",(i.ic.set(a.targetId,o.filter((function(e){return!zt(e,r)}))),void i.sc.delete(r)));case 3:if(!i.isPrimaryClient){e.next=11;break}if(i.sharedClientState.removeLocalQueryTarget(a.targetId),e.t0=i.sharedClientState.isActiveQueryTarget(a.targetId),e.t0){e.next=9;break}return e.next=9,pi(i.localStore,a.targetId,!1).then((function(){i.sharedClientState.clearQueryState(a.targetId),zi(i.remoteStore,a.targetId),ho(i,a.targetId)})).catch(le);case 9:e.next=14;break;case 11:return ho(i,a.targetId),e.next=14,pi(i.localStore,a.targetId,!0);case 14:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $a(e,t,n){return Za.apply(this,arguments)}function Za(){return(Za=e(i)(e(m).mark((function t(n,r,i){var a,o,s;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Eo(n),e.prev=1,e.next=4,function(e,t){var n,r,i=L(e),a=Y.now(),o=t.reduce((function(e,t){return e.add(t.key)}),un());return i.persistence.runTransaction("Locally write mutations","readwrite",(function(e){var s=$t(),u=un();return i.Ki.getEntries(e,o).next((function(e){(s=e).forEach((function(e,t){t.isValidDocument()||(u=u.add(e))}))})).next((function(){return i.localDocuments.getOverlayedDocuments(e,s)})).next((function(r){n=r;var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value,d=Rn(f,n.get(f.key).overlayedDocument);null!=d&&o.push(new Mn(f.key,d,it(d.value.mapValue),Sn.exists(!0)))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return i.mutationQueue.addMutationBatch(e,a,o,t)})).next((function(t){r=t;var a=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,a)}))})).then((function(){return{batchId:r.batchId,changes:tn(n)}}))}(a.localStore,r);case 4:return o=e.sent,a.sharedClientState.addPendingMutation(o.batchId),t=a,u=o.batchId,c=i,l=void 0,(l=t.ac[t.currentUser.toKey()])||(l=new _e(Q)),l=l.insert(u,c),t.ac[t.currentUser.toKey()]=l,e.next=9,mo(a,o.changes);case 9:return e.next=11,aa(a.remoteStore);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),s=Ta(e.t0,"Failed to persist write"),i.reject(s);case 17:case"end":return e.stop()}var t,u,c,l}),t,null,[[1,13]])})))).apply(this,arguments)}function eo(e,t){return to.apply(this,arguments)}function to(){return(to=e(i)(e(m).mark((function t(n,r){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=L(n),e.prev=1,e.next=4,hi(i.localStore,r);case 4:return a=e.sent,r.targetChanges.forEach((function(e,t){var n=i.uc.get(t);n&&(R(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.ec=!0:e.modifiedDocuments.size>0?R(n.ec):e.removedDocuments.size>0&&(R(n.ec),n.ec=!1))})),e.next=8,mo(i,a,r);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,le(e.t0);case 14:case"end":return e.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function no(e,t,n){var r=L(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){var i=[];r.sc.forEach((function(e,n){var r=n.view.Ru(t);r.snapshot&&i.push(r.snapshot)})),function(e,t){var n=L(e);n.onlineState=t;var r=!1;n.queries.forEach((function(e,n){var i=!0,a=!1,o=void 0;try{for(var s,u=n.listeners[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){s.value.Ru(t)&&(r=!0)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}})),r&&Ua(n)}(r.eventManager,t),i.length&&r.nc.zo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function ro(e,t,n){return io.apply(this,arguments)}function io(){return(io=e(i)(e(m).mark((function t(n,r,i){var a,o,s,u,c,l;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=L(n)).sharedClientState.updateQueryState(r,"rejected",i),o=a.uc.get(r),!(s=o&&o.key)){e.next=14;break}return u=(u=new _e(ne.comparator)).insert(s,at.newNoDocument(s,J.min())),c=un().add(s),l=new $n(J.min(),new Map,new Se(Q),u,c),e.next=9,eo(a,l);case 9:a.oc=a.oc.remove(s),a.uc.delete(r),yo(a),e.next=16;break;case 14:return e.next=16,pi(a.localStore,r,!1).then((function(){return ho(a,r,i)})).catch(le);case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ao(e,t){return oo.apply(this,arguments)}function oo(){return(oo=e(i)(e(m).mark((function t(n,r){var i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=L(n),a=r.batch.batchId,e.prev=1,e.next=4,ci(i.localStore,r);case 4:return o=e.sent,lo(i,a,null),co(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),e.next=10,mo(i,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,le(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function so(e,t,n){return uo.apply(this,arguments)}function uo(){return(uo=e(i)(e(m).mark((function t(n,r,i){var a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L(n),e.prev=1,e.next=4,function(e,t){var n=L(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(e){var r;return n.mutationQueue.lookupMutationBatch(e,t).next((function(t){return R(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)})).next((function(){return n.localDocuments.getDocuments(e,r)}))}))}(a.localStore,r);case 4:return o=e.sent,lo(a,r,i),co(a,r),a.sharedClientState.updateMutationState(r,"rejected",i),e.next=10,mo(a,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,le(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function co(e,t){(e.hc.get(t)||[]).forEach((function(e){e.resolve()})),e.hc.delete(t)}function lo(e,t,n){var r=L(e),i=r.ac[r.currentUser.toKey()];if(i){var a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function ho(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.sharedClientState.removeLocalQueryTarget(t);var r=!0,i=!1,a=void 0;try{for(var o,s=e.ic.get(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;e.sc.delete(u),n&&e.nc.wc(u,n)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((function(t){e.cc.containsKey(t)||fo(e,t)}))}function fo(e,t){e.rc.delete(t.path.canonicalString());var n=e.oc.get(t);null!==n&&(zi(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),yo(e))}function vo(e,t,n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;u instanceof ja?(e.cc.addReference(u.key,t),po(e,u)):u instanceof Ba?(C("SyncEngine","Document no longer in limbo: "+u.key),e.cc.removeReference(u.key,t),e.cc.containsKey(u.key)||fo(e,u.key)):O()}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}function po(e,t){var n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(C("SyncEngine","New document in limbo: "+n),e.rc.add(r),yo(e))}function yo(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){var t=e.rc.values().next().value;e.rc.delete(t);var n=new ne(Z.fromString(t)),r=e.lc.next();e.uc.set(r,new Ka(n)),e.oc=e.oc.insert(n,r),qi(e.remoteStore,new Pr(Bt(Pt(n.path)),r,2,ve.ct))}}function mo(e,t,n){return go.apply(this,arguments)}function go(){return go=e(i)(e(m).mark((function t(n,r,a){var o,s,u,c;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=L(n),s=[],u=[],c=[],t.t0=o.sc.isEmpty(),t.t0){t.next=9;break}return o.sc.forEach((function(e,t){c.push(o.dc(t,r,a).then((function(e){if((e||a)&&o.isPrimaryClient&&o.sharedClientState.updateQueryState(t.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);var n=ri.Di(t.targetId,e);u.push(n)}})))})),t.next=6,Promise.all(c);case 6:return o.nc.zo(s),t.next=9,function(){var t=e(i)(e(m).mark((function t(n,r){var i,a,o,s,u,c,l,h,f,d,v;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=L(n),e.prev=1,e.next=4,i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(e){return fe.forEach(r,(function(t){return fe.forEach(t.Vi,(function(n){return i.persistence.referenceDelegate.addReference(e,t.targetId,n)})).next((function(){return fe.forEach(t.Si,(function(n){return i.persistence.referenceDelegate.removeReference(e,t.targetId,n)}))}))}))}));case 4:e.next=11;break;case 6:if(e.prev=6,e.t0=e.catch(1),de(e.t0)){e.next=10;break}throw e.t0;case 10:C("LocalStore","Failed to update sequence numbers: "+e.t0);case 11:for(a=!0,o=!1,s=void 0,e.prev=12,u=r[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)l=c.value,h=l.targetId,l.fromCache||(f=i.Li.get(h),d=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(d),i.Li=i.Li.insert(h,v));e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),o=!0,s=e.t1;case 20:e.prev=20,e.prev=21,a||null==u.return||u.return();case 23:if(e.prev=23,!o){e.next=26;break}throw s;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),t,null,[[1,6],[12,16,20,28],[21,,23,27]])})));return function(e,n){return t.apply(this,arguments)}}()(o.localStore,u);case 9:case"end":return t.stop()}}),t)}))),go.apply(this,arguments)}function ko(e,t){return wo.apply(this,arguments)}function wo(){return(wo=e(i)(e(m).mark((function t(n,r){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=L(n)).currentUser.isEqual(r)){e.next=11;break}return C("SyncEngine","User change. New user:",r.toKey()),e.next=5,si(i.localStore,r);case 5:return a=e.sent,i.currentUser=r,(t=i).hc.forEach((function(e){e.forEach((function(e){e.reject(new M(P.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.hc.clear(),i.sharedClientState.handleUserChange(r,a.removedBatchIds,a.addedBatchIds),e.next=11,mo(i,a.Qi);case 11:case"end":return e.stop()}var t}),t)})))).apply(this,arguments)}function bo(e,t){var n=L(e),r=n.uc.get(t);if(r&&r.ec)return un().add(r.key);var i=un(),a=n.ic.get(t);if(!a)return i;var o=!0,s=!1,u=void 0;try{for(var c,l=a[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value,f=n.sc.get(h);i=i.unionWith(f.view.Qu)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}function xo(e){var t=L(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=eo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=bo.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ro.bind(null,t),t.nc.zo=Ma.bind(null,t.eventManager),t.nc.wc=Fa.bind(null,t.eventManager),t}function Eo(e){var t=L(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ao.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=so.bind(null,t),t}var _o=function(){"use strict";function t(){e(o)(this,t),this.synchronizeTabs=!1}return e(u)(t,[{key:"initialize",value:function(t){var n=this;return e(i)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.serializer=Di(t.databaseInfo.databaseId),n.sharedClientState=n.createSharedClientState(t),n.persistence=n.createPersistence(t),e.next=5,n.persistence.start();case 5:n.localStore=n.createLocalStore(t),n.gcScheduler=n.createGarbageCollectionScheduler(t,n.localStore),n.indexBackfillerScheduler=n.createIndexBackfillerScheduler(t,n.localStore);case 8:case"end":return e.stop()}}),r)})))()}},{key:"createGarbageCollectionScheduler",value:function(e,t){return null}},{key:"createIndexBackfillerScheduler",value:function(e,t){return null}},{key:"createLocalStore",value:function(e){return oi(this.persistence,new ii,e.initialUser,this.serializer)}},{key:"createPersistence",value:function(e){return new ei(ni.Fs,this.serializer)}},{key:"createSharedClientState",value:function(e){return new wi}},{key:"terminate",value:function(){var t=this;return e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.gcScheduler&&t.gcScheduler.stop(),e.next=3,t.sharedClientState.shutdown();case 3:return e.next=5,t.persistence.shutdown();case 5:case"end":return e.stop()}}),n)})))()}}]),t}(),Io=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,[{key:"initialize",value:function(t,n){var r=this;return e(i)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r.localStore,e.t0){e.next=12;break}return r.localStore=t.localStore,r.sharedClientState=t.sharedClientState,r.datastore=r.createDatastore(n),r.remoteStore=r.createRemoteStore(n),r.eventManager=r.createEventManager(n),r.syncEngine=r.createSyncEngine(n,!t.synchronizeTabs),r.sharedClientState.onlineStateHandler=function(e){return no(r.syncEngine,e,1)},r.remoteStore.remoteSyncer.handleCredentialChange=ko.bind(null,r.syncEngine),e.next=12,ba(r.remoteStore,r.syncEngine.isPrimaryClient);case 12:case"end":return e.stop()}}),i)})))()}},{key:"createEventManager",value:function(e){return new Na}},{key:"createDatastore",value:function(e){var t,n,r,i=Di(e.databaseInfo.databaseId),a=(t=e.databaseInfo,new Ci(t));return n=e.authCredentials,r=e.appCheckCredentials,new Pi(n,r,a,i)}},{key:"createRemoteStore",value:function(e){var t,n,r,i,a,o=this;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=function(e){return no(o.syncEngine,e,0)},a=xi.D()?new xi:new bi,new Fi(t,n,r,i,a)}},{key:"createSyncEngine",value:function(e,t){return n=this.localStore,r=this.remoteStore,i=this.eventManager,a=this.sharedClientState,o=e.initialUser,s=e.maxConcurrentLimboResolutions,u=t,c=new Ha(n,r,i,a,o,s),u&&(c.fc=!0),c;var n,r,i,a,o,s,u,c}},{key:"terminate",value:function(){return(t=e(i)(e(m).mark((function t(n){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=L(n),C("RemoteStore","RemoteStore shutting down."),r.du.add(5),e.next=5,ji(r);case 5:r._u.shutdown(),r.mu.set("Unknown");case 7:case"end":return e.stop()}}),t)}))),function(e){return t.apply(this,arguments)})(this.remoteStore);var t}}]),t}();
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
var To=function(){"use strict";function t(n){e(o)(this,t),this.observer=n,this.muted=!1}return e(u)(t,[{key:"next",value:function(e){this.observer.next&&this.gc(this.observer.next,e)}},{key:"error",value:function(e){this.observer.error?this.gc(this.observer.error,e):A("Uncaught Error in snapshot listener:",e.toString())}},{key:"yc",value:function(){this.muted=!0}},{key:"gc",value:function(e,t){var n=this;this.muted||setTimeout((function(){n.muted||e(t)}),0)}}]),t}(),So=function(){"use strict";function t(n,r,a,s){var u=this;e(o)(this,t);var c,l=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=a,this.databaseInfo=s,this.user=_.UNAUTHENTICATED,this.clientId=W.A(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(a,(c=e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("FirestoreClient","Received user=",n.uid),e.next=3,l.authCredentialListener(n);case 3:l.user=n;case 4:case"end":return e.stop()}}),t)}))),function(e){return c.apply(this,arguments)})),this.appCheckCredentials.start(a,(function(e){return C("FirestoreClient","Received new app check token=",e),u.appCheckCredentialListener(e,u.user)}))}return e(u)(t,[{key:"getConfiguration",value:function(){var t=this;return e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{asyncQueue:t.asyncQueue,databaseInfo:t.databaseInfo,clientId:t.clientId,authCredentials:t.authCredentials,appCheckCredentials:t.appCheckCredentials,initialUser:t.user,maxConcurrentLimboResolutions:100});case 1:case"end":return e.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var t=new F,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(e(i)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=n._onlineComponents,!e.t0){e.next=5;break}return e.next=5,n._onlineComponents.terminate();case 5:if(e.t1=n._offlineComponents,!e.t1){e.next=9;break}return e.next=9,n._offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),t.resolve(),e.next=18;break;case 14:e.prev=14,e.t2=e.catch(0),i=Ta(e.t2,"Failed to shutdown persistence"),t.reject(i);case 18:case"end":return e.stop()}}),r,null,[[0,14]])})))),t.promise}}]),t}();
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
 */function Co(e,t){return Ao.apply(this,arguments)}function Ao(){return Ao=e(i)(e(m).mark((function t(n,r){var a,o;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider"),t.next=3,n.getConfiguration();case 3:return a=t.sent,t.next=6,r.initialize(a);case 6:o=a.initialUser,n.setCredentialChangeListener(function(){var t=e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=o.isEqual(n),e.t0){e.next=5;break}return e.next=4,si(r.localStore,n);case 4:o=n;case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.persistence.setDatabaseDeletedListener((function(){return n.terminate()})),n._offlineComponents=r;case 8:case"end":return t.stop()}}),t)}))),Ao.apply(this,arguments)}function Do(e,t){return No.apply(this,arguments)}function No(){return(No=e(i)(e(m).mark((function t(n,r){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),e.next=3,Ro(n);case 3:return i=e.sent,C("FirestoreClient","Initializing OnlineComponentProvider"),e.next=7,n.getConfiguration();case 7:return a=e.sent,e.next=10,r.initialize(i,a);case 10:n.setCredentialChangeListener((function(e){return ka(r.remoteStore,e)})),n.setAppCheckTokenChangeListener((function(e,t){return ka(r.remoteStore,t)})),n._onlineComponents=r;case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Oo(e){return"FirebaseError"===e.name?e.code===P.FAILED_PRECONDITION||e.code===P.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}function Ro(e){return Lo.apply(this,arguments)}function Lo(){return(Lo=e(i)(e(m).mark((function t(n){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n._offlineComponents){e.next=21;break}if(!n._uninitializedComponentsProvider){e.next=18;break}return C("FirestoreClient","Using user provided OfflineComponentProvider"),e.prev=3,e.next=6,Co(n,n._uninitializedComponentsProvider._offline);case 6:e.next=16;break;case 8:if(e.prev=8,e.t0=e.catch(3),Oo(r=e.t0)){e.next=13;break}throw r;case 13:return D("Error using user provided cache. Falling back to memory cache: "+r),e.next=16,Co(n,new _o);case 16:e.next=21;break;case 18:return C("FirestoreClient","Using default OfflineComponentProvider"),e.next=21,Co(n,new _o);case 21:return e.abrupt("return",n._offlineComponents);case 22:case"end":return e.stop()}}),t,null,[[3,8]])})))).apply(this,arguments)}function Po(e){return Mo.apply(this,arguments)}function Mo(){return(Mo=e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n._onlineComponents,e.t0){e.next=11;break}if(!n._uninitializedComponentsProvider){e.next=8;break}return C("FirestoreClient","Using user provided OnlineComponentProvider"),e.next=6,Do(n,n._uninitializedComponentsProvider._online);case 6:e.next=11;break;case 8:return C("FirestoreClient","Using default OnlineComponentProvider"),e.next=11,Do(n,new Io);case 11:return e.abrupt("return",(e.t0,n._onlineComponents));case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fo(e){return Po(e).then((function(e){return e.syncEngine}))}function Uo(e){return Vo.apply(this,arguments)}function Vo(){return(Vo=e(i)(e(m).mark((function t(n){var r,i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Po(n);case 2:return r=e.sent,i=r.eventManager,e.abrupt("return",(i.onListen=Ga.bind(null,r.syncEngine),i.onUnlisten=Ya.bind(null,r.syncEngine),i));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function jo(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=new F;return t.asyncQueue.enqueueAndForget(e(i)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=function(e,t,n,r,i){var a=new To({next:function(n){t.enqueueAndForget((function(){return La(e,o)})),n.fromCache&&"server"===r.source?i.reject(new M(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:function(e){return i.reject(e)}}),o=new Va(n,a,{includeMetadataChanges:!0,xu:!0});return Oa(e,o)},e.next=3,Uo(t);case 3:return e.t1=e.sent,e.t2=t.asyncQueue,e.t3=n,e.t4=r,e.t5=a,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3,e.t4,e.t5));case 9:case"end":return e.stop()}}),i)})))),a.promise}
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
var Bo=new Map;
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
 */function qo(e,t,n){if(!n)throw new M(P.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function zo(e){if(!ne.isDocumentKey(e))throw new M(P.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function Ko(e){if(ne.isDocumentKey(e))throw new M(P.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function Ho(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":O()}function Go(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=Ho(e);throw new M(P.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
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
var Wo=function(){"use strict";function t(n){var r;if(e(o)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.cache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new M(P.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling)}return e(u)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),Qo=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wo({}),this._settingsFrozen=!1}return e(u)(t,[{key:"app",get:function(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wo(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new V;switch(e.type){case"firstParty":return new z(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=Bo.get(e))&&(C("ComponentProvider","Removing Datastore"),Bo.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();
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
 */function Xo(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=Go(e,Qo))._getSettings();if("firestore.googleapis.com"!==a.host&&a.host!==t&&D("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},a),{host:"".concat(t,":").concat(n),ssl:!1})),i.mockUserToken){var o,s;if("string"==typeof i.mockUserToken)o=i.mockUserToken,s=_.MOCK_USER;else{o=(0,b.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new _(u)}e._authCredentials=new j(new U(o,s))}}
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
 */var Yo=function(){"use strict";function t(n,r,i){e(o)(this,t),this.converter=r,this._key=i,this.type="document",this.firestore=n}return e(u)(t,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new $o(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(e){return new t(this.firestore,e,this._key)}}]),t}(),Jo=function(){"use strict";function t(n,r,i){e(o)(this,t),this.converter=r,this._query=i,this.type="query",this.firestore=n}return e(u)(t,[{key:"withConverter",value:function(e){return new t(this.firestore,e,this._query)}}]),t}(),$o=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this,t,i,Pt(a)))._path=a,s.type="collection",e(f)(s)}return e(u)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new Yo(this.firestore,null,new ne(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(Jo);function Zo(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=(0,b.getModularInstance)(t),qo("collection","path",n),t instanceof Qo){var o,s=(o=Z).fromString.apply(o,[n].concat(e(v)(i)));return Ko(s),new $o(t,null,s)}var u;if(!(t instanceof Yo||t instanceof $o))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=Z).fromString.apply(u,[n].concat(e(v)(i))));return Ko(c),new $o(t.firestore,null,c)}function es(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=(0,b.getModularInstance)(t),1===arguments.length&&(n=W.A()),qo("doc","path",n),t instanceof Qo){var o,s=(o=Z).fromString.apply(o,[n].concat(e(v)(i)));return zo(s),new Yo(t,null,new ne(s))}var u;if(!(t instanceof Yo||t instanceof $o))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=Z).fromString.apply(u,[n].concat(e(v)(i))));return zo(c),new Yo(t.firestore,t instanceof $o?t.converter:null,new ne(c))}
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
var ts=function(){"use strict";function t(){var n=this;e(o)(this,t),this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Ni(this,"async_queue_retry"),this.qc=function(){var e=Ai();e&&C("AsyncQueue","Visibility state changed to "+e.visibilityState),n.Co.vo()};var r=Ai();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.qc)}return e(u)(t,[{key:"isShuttingDown",get:function(){return this.Oc}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this.Uc(),this.Kc(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;var t=Ai();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}},{key:"enqueue",value:function(e){var t=this;if(this.Uc(),this.Oc)return new Promise((function(){}));var n=new F;return this.Kc((function(){return t.Oc&&t.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.kc.push(e),t.Gc()}))}},{key:"Gc",value:function(){var t=this;return e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.kc.length){e.next=14;break}return e.prev=1,e.next=4,t.kc[0]();case 4:t.kc.shift(),t.Co.reset(),e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(1),de(e.t0)){e.next=12;break}throw e.t0;case 12:C("AsyncQueue","Operation failed with retryable error: "+e.t0);case 13:t.kc.length>0&&t.Co.Ao((function(){return t.Gc()}));case 14:case"end":return e.stop()}}),n,null,[[1,8]])})))()}},{key:"Kc",value:function(e){var t=this,n=this.Nc.then((function(){return t.Fc=!0,e().catch((function(e){var n,r;throw t.Mc=e,t.Fc=!1,A("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.Fc=!1,e}))}));return this.Nc=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);var i=Ia.createAndSchedule(this,e,t,n,(function(e){return r.Qc(e)}));return this.$c.push(i),i}},{key:"Uc",value:function(){this.Mc&&O()}},{key:"verifyOperationInProgress",value:function(){}},{key:"zc",value:function(){var t=this;return e(i)(e(m).mark((function n(){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:return r=t.Nc,e.next=4,r;case 4:if(r!==t.Nc){e.next=1;break}case 5:case"end":return e.stop()}}),n)})))()}},{key:"jc",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.$c[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"Wc",value:function(e){var t=this;return this.zc().then((function(){t.$c.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,o=t.$c[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.skipDelay(),"all"!==e&&s.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t.zc()}))}},{key:"Hc",value:function(e){this.Lc.push(e)}},{key:"Qc",value:function(e){var t=this.$c.indexOf(e);this.$c.splice(t,1)}}]),t}();var ns=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i,a,s){var u;return e(o)(this,r),(u=n.call(this,t,i,a,s)).type="firestore",u._queue=new ts,u._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]",e(f)(u)}return e(u)(r,[{key:"_terminate",value:function(){return this._firestoreClient||as(this),this._firestoreClient.terminate()}}]),r}(Qo);
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
 */function rs(t,n){var r="object"==typeof t?t:(0,g.getApp)(),i="string"==typeof t?t:n||"(default)",a=(0,g._getProvider)(r,"firestore").getImmediate({identifier:i});if(!a._initialized){var o=(0,b.getDefaultEmulatorHostnameAndPort)("firestore");o&&Xo.apply(void 0,[a].concat(e(v)(o)))}return a}function is(e){return e._firestoreClient||as(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function as(e){var t,n,r,i,a,o,s,u=e._freezeSettings(),c=(i=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new je(i,a,o,(s=u).host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));e._firestoreClient=new So(e._authCredentials,e._appCheckCredentials,e._queue,c),(null===(n=u.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=u.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:u.cache.kind,_offline:u.cache._offlineComponentProvider,_online:u.cache._onlineComponentProvider})}
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
var os=function(){"use strict";function t(n){e(o)(this,t),this._byteString=n}return e(u)(t,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(e){try{return new t(Oe.fromBase64String(e))}catch(e){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(e){return new t(Oe.fromUint8Array(e))}}]),t}(),ss=function(){"use strict";function t(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e(o)(this,t);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(r)}return e(u)(t,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),t}();
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
var us=function t(n){"use strict";e(o)(this,t),this._methodName=n},cs=function(){"use strict";function t(n,r){if(e(o)(this,t),!isFinite(n)||n<-90||n>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return e(u)(t,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}]),t}(),ls=/^__.*__$/,hs=function(){"use strict";function t(n,r,i){e(o)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(u)(t,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new Mn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pn(e,this.data,t,this.fieldTransforms)}}]),t}();
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
 */function fs(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}var ds=function(){"use strict";function t(n,r,i,a,s,u){e(o)(this,t),this.settings=n,this.databaseId=r,this.serializer=i,this.ignoreUndefinedProperties=a,void 0===s&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=u||[]}return e(u)(t,[{key:"path",get:function(){return this.settings.path}},{key:"Yc",get:function(){return this.settings.Yc}},{key:"Zc",value:function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"Xc",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.ea(e),r}},{key:"na",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.Jc(),r}},{key:"sa",value:function(e){return this.Zc({path:void 0,ta:!0})}},{key:"ia",value:function(e){return _s(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"Jc",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.ea(this.path.get(e))}},{key:"ea",value:function(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(fs(this.Yc)&&ls.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}]),t}(),vs=function(){"use strict";function t(n,r,i){e(o)(this,t),this.databaseId=n,this.ignoreUndefinedProperties=r,this.serializer=i||Di(n)}return e(u)(t,[{key:"ua",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new ds({Yc:e,methodName:t,oa:n,path:te.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}]),t}();function ps(e){var t=e._freezeSettings(),n=Di(e._databaseId);return new vs(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ys(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.ua(a.merge||a.mergeFields?2:0,t,n,i);ws("Data must be an object, but it was:",o,r);var s,u,c=gs(r,o);if(a.merge)s=new Ae(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],h=!0,f=!1,d=void 0;try{for(var v,p=a.mergeFields[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){var y=v.value,m=bs(t,y,n);if(!o.contains(m))throw new M(P.INVALID_ARGUMENT,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));Is(l,m)||l.push(m)}}catch(e){f=!0,d=e}finally{try{h||null==p.return||p.return()}finally{if(f)throw d}}s=new Ae(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new hs(new rt(c),s,u)}function ms(e,t){if(ks(e=(0,b.getModularInstance)(e)))return ws("Unsupported field value:",t,e),gs(e,t);if(e instanceof us)return function(e,t){if(!fs(t.Yc))throw t.ia("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.ia("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=ms(s.value,t.sa(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,b.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return dn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=Y.fromDate(e);return{timestampValue:hr(t.serializer,n)}}if(e instanceof Y){var r=new Y(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:hr(t.serializer,r)}}if(e instanceof cs)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof os)return{bytesValue:fr(t.serializer,e._byteString)};if(e instanceof Yo){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.ia("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:pr(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia("Unsupported field value: ".concat(Ho(e)))}(e,t)}function gs(e,t){var n={};return Ee(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xe(e,(function(e,r){var i=ms(r,t.Xc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function ks(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Y||e instanceof cs||e instanceof os||e instanceof Yo||e instanceof us)}function ws(e,t,n){if(!ks(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=Ho(n);throw"an object"===r?t.ia(e+" a custom object"):t.ia(e+" "+r)}var i}function bs(e,t,n){if((t=(0,b.getModularInstance)(t))instanceof ss)return t._internalPath;if("string"==typeof t)return Es(e,t);throw _s("Field path arguments must be of type string or ",e,!1,void 0,n)}var xs=new RegExp("[~\\*/\\[\\]]");function Es(t,n,r){if(n.search(xs)>=0)throw _s("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),t,!1,void 0,r);try{return e(s)(ss,e(v)(n.split(".")))._internalPath}catch(e){throw _s("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),t,!1,void 0,r)}}function _s(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new M(P.INVALID_ARGUMENT,s+e+u)}function Is(e,t){return e.some((function(e){return e.isEqual(t)}))}
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
 */var Ts=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this._firestore=n,this._userDataWriter=r,this._key=i,this._document=a,this._converter=s}return e(u)(t,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new Yo(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var e=new Ss(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(e){if(this._document){var t=this._document.data.field(Cs("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}]),t}(),Ss=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(u)(r,[{key:"data",value:function(){return e(c)(e(l)(r.prototype),"data",this).call(this)}}]),r}(Ts);function Cs(e,t){return"string"==typeof t?Es(e,t):t instanceof ss?t._internalPath:t._delegate._internalPath}
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
 */function As(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new M(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Ds=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,[{key:"convertValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(ze(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Me(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}},{key:"convertObject",value:function(e,t){var n=this,r={};return xe(e.fields,(function(e,i){r[e]=n.convertValue(i,t)})),r}},{key:"convertGeoPoint",value:function(e){return new cs(Pe(e.latitude),Pe(e.longitude))}},{key:"convertArray",value:function(e,t){var n=this;return(e.values||[]).map((function(e){return n.convertValue(e,t)}))}},{key:"convertServerTimestamp",value:function(e,t){switch(t){case"previous":var n=Ue(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ve(e));default:return null}}},{key:"convertTimestamp",value:function(e){var t=Le(e);return new Y(t.seconds,t.nanos)}},{key:"convertDocumentKey",value:function(e,t){var n=Z.fromString(e);R(Lr(n));var r=new Be(n.get(1),n.get(3)),i=new ne(n.popFirst(5));return r.isEqual(t)||A("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}]),t}();
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
 */function Ns(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}
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
var Os=function(){"use strict";function t(n,r){e(o)(this,t),this.hasPendingWrites=n,this.fromCache=r}return e(u)(t,[{key:"isEqual",value:function(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}]),t}(),Rs=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t,i,a,s,u,c){var l;return e(o)(this,r),(l=n.call(this,t,i,a,s,c))._firestore=t,l._firestoreImpl=t,l.metadata=u,e(f)(l)}return e(u)(r,[{key:"exists",value:function(){return e(c)(e(l)(r.prototype),"exists",this).call(this)}},{key:"data",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){var t=new Ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){var n=this._document.data.field(Cs("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}]),r}(Ts),Ls=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(u)(r,[{key:"data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(c)(e(l)(r.prototype),"data",this).call(this,t)}}]),r}(Rs),Ps=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this._firestore=n,this._userDataWriter=r,this._snapshot=a,this.metadata=new Os(a.hasPendingWrites,a.fromCache),this.query=i}return e(u)(t,[{key:"docs",get:function(){var e=[];return this.forEach((function(t){return e.push(t)})),e}},{key:"size",get:function(){return this._snapshot.docs.size}},{key:"empty",get:function(){return 0===this.size}},{key:"forEach",value:function(e,t){var n=this;this._snapshot.docs.forEach((function(r){e.call(t,new Ls(n._firestore,n._userDataWriter,r.key,r,new Os(n._snapshot.mutatedKeys.has(r.key),n._snapshot.fromCache),n.query.converter))}))}},{key:"docChanges",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){var n=0;return e._snapshot.docChanges.map((function(t){var r=new Ls(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Os(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:r,oldIndex:-1,newIndex:n++}}))}var r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((function(e){return t||3!==e.type})).map((function(t){var n=new Ls(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Os(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,a=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(a=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:Ms(t.type),doc:n,oldIndex:i,newIndex:a}}))}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}]),t}();function Ms(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}var Fs=function(t){"use strict";e(h)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).firestore=t,e(f)(i)}return e(u)(r,[{key:"convertBytes",value:function(e){return new os(e)}},{key:"convertReference",value:function(e){var t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yo(this.firestore,null,t)}}]),r}(Ds);function Us(e){e=Go(e,Jo);var t=Go(e.firestore,ns),n=is(t),r=new Fs(t);return As(e._query),jo(n,e._query).then((function(n){return new Ps(t,r,e,n)}))}function Vs(e,t,n){e=Go(e,Yo);var r=Go(e.firestore,ns),i=Ns(e.converter,t,n);return js(r,[ys(ps(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Sn.none())])}function js(t,n){return r=is(t),a=n,o=new F,r.asyncQueue.enqueueAndForget(e(i)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=$a,e.next=3,Fo(r);case 3:return e.t1=e.sent,e.t2=a,e.t3=o,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),t)})))),o.promise;var r,a,o}!function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=g.SDK_VERSION,I=t,(0,g._registerComponent)(new(0,k.Component)("firestore",(function(e,t){var r=t.instanceIdentifier,i=t.options,a=e.getProvider("app").getImmediate(),o=new ns(new B(e.getProvider("auth-internal")),new H(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Be(e.options.projectId,t)}(a,r),a);return i=Object.assign({useFetchStreams:n},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),(0,g.registerVersion)(E,"3.10.0",e),(0,g.registerVersion)(E,"3.10.0","esm2017")}()})),a.register("6RwJk",(function(r,i){t(r.exports,"createWebChannelTransport",(function(){return lr})),t(r.exports,"getStatEventTarget",(function(){return hr})),t(r.exports,"ErrorCode",(function(){return fr})),t(r.exports,"EventType",(function(){return dr})),t(r.exports,"Event",(function(){return vr})),t(r.exports,"Stat",(function(){return pr})),t(r.exports,"FetchXmlHttpFactory",(function(){return yr})),t(r.exports,"WebChannel",(function(){return mr})),t(r.exports,"XhrIo",(function(){return gr}));var o,s=a("8MBJY"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),h=a("eYQtU"),f=a("1t1Wn"),d=a("l5bVx"),v=a("2MbLg"),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},y={},m=m||{},g=p||self;function k(){}function w(t){var n=void 0===t?"undefined":e(d)(t);return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function b(t){var n=void 0===t?"undefined":e(d)(t);return"object"==n&&null!=t||"function"==n}var x="closure_uid_"+(1e9*Math.random()>>>0),E=0;function _(e,t,n){return e.call.apply(e.bind,arguments)}function I(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function T(e,t,n){return(T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:I).apply(null,arguments)}function S(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function C(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function A(){this.s=this.s,this.o=this.o}A.prototype.s=!1,A.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,x)&&e[x]||(e[x]=++E))},A.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var D=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function N(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(w(r)){var i=e.length||0,a=r.length||0;e.length=i+a;for(var o=0;o<a;o++)e[i+o]=r[o]}else e.push(r)}}function R(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{g.addEventListener("test",k,t),g.removeEventListener("test",k,t)}catch(e){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}var M=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function F(e,t){return e<t?-1:e>t?1:0}function U(){var e=g.navigator;return e&&(e=e.userAgent)?e:""}function V(e){return-1!=U().indexOf(e)}function j(e){return j[" "](e),e}j[" "]=k;var B,q,z=V("Opera"),K=V("Trident")||V("MSIE"),H=V("Edge"),G=H||K,W=V("Gecko")&&!(-1!=U().toLowerCase().indexOf("webkit")&&!V("Edge"))&&!(V("Trident")||V("MSIE"))&&!V("Edge"),Q=-1!=U().toLowerCase().indexOf("webkit")&&!V("Edge");function X(){var e=g.document;return e?e.documentMode:void 0}e:{var Y="",J=(q=U(),W?/rv:([^\);]+)(\)|;)/.exec(q):H?/Edge\/([\d\.]+)/.exec(q):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(q):Q?/WebKit\/(\S+)/.exec(q):z?/(?:Version)[ \/]?(\S+)/.exec(q):void 0);if(J&&(Y=J?J[1]:""),K){var $=X();if(null!=$&&$>parseFloat(Y)){B=String($);break e}}B=Y}var Z,ee={};function te(){return function(e){var t=ee;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=M(String(B)).split("."),n=M("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var a=t[i]||"",o=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;e=F(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||F(0==a[2].length,0==o[2].length)||F(a[2],o[2]),a=a[3],o=o[3]}while(0==e)}return 0<=e}))}if(g.document&&K){var ne=X();Z=ne||(parseInt(B,10)||void 0)}else Z=void 0;var re=Z;function ie(e,t){if(R.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(W){e:{try{j(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ae[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.X.h.call(this)}}C(ie,R);var ae={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),se=0;function ue(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++se,this.ba=this.ea=!1}function ce(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function le(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function he(e){var t={};for(var n in e)t[n]=e[n];return t}var fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<fe.length;a++)n=fe[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ve(e){this.src=e,this.g={},this.h=0}function pe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=D(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(ce(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ye(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.ba&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}ve.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var o=ye(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new ue(t,this.src,a,!!r,i)).ea=n,e.push(t)),t};var me="closure_lm_"+(1e6*Math.random()|0),ge={};function ke(e,t,n,r,i){if(r&&r.once)return be(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)ke(e,t[a],n,r,i);return null}return n=Ce(n),e&&e[oe]?e.N(t,n,b(r)?!!r.capture:!!r,i):we(e,t,n,!1,r,i)}function we(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var o=b(i)?!!i.capture:!!i,s=Te(e);if(s||(e[me]=s=new ve(e)),(n=s.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Ie;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function be(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)be(e,t[a],n,r,i);return null}return n=Ce(n),e&&e[oe]?e.O(t,n,b(r)?!!r.capture:!!r,i):we(e,t,n,!0,r,i)}function xe(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)xe(e,t[a],n,r,i);else r=b(r)?!!r.capture:!!r,n=Ce(n),e&&e[oe]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ye(a=e.g[t],n,r,i))&&(ce(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=Te(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ye(t,n,r,i)),(n=-1<e?t[e]:null)&&Ee(n))}function Ee(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[oe])pe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Te(t))?(pe(n,e),0==n.h&&(n.src=null,t[me]=null)):ce(e)}}}function _e(e){return e in ge?ge[e]:ge[e]="on"+e}function Ie(e,t){if(e.ba)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Ee(e),e=n.call(r,t)}return e}function Te(e){return(e=e[me])instanceof ve?e:null}var Se="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ce(e){return"function"==typeof e?e:(e[Se]||(e[Se]=function(t){return e.handleEvent(t)}),e[Se])}function Ae(){A.call(this),this.i=new ve(this),this.P=this,this.I=null}function De(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new R(t,e);else if(t instanceof R)t.target=t.target||e;else{var i=t;de(t=new R(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=Ne(o,r,!0,t)&&i}if(i=Ne(o=t.g=e,r,!0,t)&&i,i=Ne(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=Ne(o=t.g=n[a],r,!1,t)&&i}function Ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.ba&&o.capture==n){var s=o.listener,u=o.ha||o.src;o.ea&&pe(e.i,o),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}C(Ae,A),Ae.prototype[oe]=!0,Ae.prototype.removeEventListener=function(e,t,n,r){xe(this,e,t,n,r)},Ae.prototype.M=function(){if(Ae.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ce(n[r]);delete t.g[e],t.h--}}this.I=null},Ae.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ae.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Oe=g.JSON.stringify;function Re(){var e=Be,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Le,Pe=function(){"use strict";function t(){e(s)(this,t),this.h=this.g=null}return e(u)(t,[{key:"add",value:function(e,t){var n=Me.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),t}(),Me=new(function(){"use strict";function t(n,r){e(s)(this,t),this.i=n,this.j=r,this.h=0,this.g=null}return e(u)(t,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),t}())((function(){return new Fe}),(function(e){return e.reset()})),Fe=function(){"use strict";function t(){e(s)(this,t),this.next=this.g=this.h=null}return e(u)(t,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),t}();function Ue(e){g.setTimeout((function(){throw e}),0)}function Ve(e,t){Le||function(){var e=g.Promise.resolve(void 0);Le=function(){e.then(qe)}}(),je||(Le(),je=!0),Be.add(e,t)}var je=!1,Be=new Pe;function qe(){for(var e;e=Re();){try{e.h.call(e.g)}catch(e){Ue(e)}var t=Me;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}je=!1}function ze(e,t){Ae.call(this),this.h=e||1,this.g=t||g,this.j=T(this.lb,this),this.l=Date.now()}function Ke(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function He(e,t,n){if("function"==typeof e)n&&(e=T(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=T(e.handleEvent,e)}return 2147483647<Number(t)?-1:g.setTimeout(e,t||0)}function Ge(e){e.g=He((function(){e.g=null,e.i&&(e.i=!1,Ge(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}C(ze,Ae),(o=ze.prototype).ca=!1,o.R=null,o.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),De(this,"tick"),this.ca&&(Ke(this),this.start()))}},o.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},o.M=function(){ze.X.M.call(this),Ke(this),delete this.g};var We=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(t,i){var a;return e(s)(this,r),(a=n.call(this)).m=t,a.j=i,a.h=null,a.i=!1,a.g=null,a}return e(u)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:Ge(this)}},{key:"M",value:function(){e(c)(e(l)(r.prototype),"M",this).call(this),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(A);function Qe(e){A.call(this),this.h=e,this.g={}}C(Qe,A);var Xe=[];function Ye(e,t,n,r){Array.isArray(n)||(n&&(Xe[0]=n.toString()),n=Xe);for(var i=0;i<n.length;i++){var a=ke(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function Je(e){le(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ee(e)}),e),e.g={}}function $e(){this.g=!0}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return Oe(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Qe.prototype.M=function(){Qe.X.M.call(this),Je(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$e.prototype.Aa=function(){this.g=!1},$e.prototype.info=function(){};var et={},tt=null;function nt(){return tt=tt||new Ae}function rt(e){R.call(this,et.Pa,e)}function it(e){var t=nt();De(t,new rt(t))}function at(e,t){R.call(this,et.STAT_EVENT,e),this.stat=t}function ot(e){var t=nt();De(t,new at(t,e))}function st(e,t){R.call(this,et.Qa,e),this.size=t}function ut(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return g.setTimeout((function(){e()}),t)}et.Pa="serverreachability",C(rt,R),et.STAT_EVENT="statevent",C(at,R),et.Qa="timingevent",C(st,R);var ct={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},lt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ht(){}function ft(e){return e.h||(e.h=e.i())}function dt(){}ht.prototype.h=null;var vt,pt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yt(){R.call(this,"d")}function mt(){R.call(this,"c")}function gt(){}function kt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Qe(this),this.O=bt,e=G?125:void 0,this.T=new ze(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}C(yt,R),C(mt,R),C(gt,ht),gt.prototype.g=function(){return new XMLHttpRequest},gt.prototype.i=function(){return{}},vt=new gt;var bt=45e3,xt={},Et={};function _t(e,t,n){e.K=1,e.v=zt(Ut(t)),e.s=n,e.P=!0,It(e,null)}function It(e,t){e.F=Date.now(),At(e),e.A=Ut(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),nn(n.i,"t",r),e.C=0,n=e.l.H,e.h=new wt,e.g=rr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new We(T(e.La,e,e.g),e.N)),Ye(e.S,e.g,"readystatechange",e.ib),t=e.H?he(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),it(),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var o="",s=a.split("&"),u=0;u<s.length;u++){var c=s[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function Tt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function St(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=Ct(e,n))==Et){4==t&&(e.o=4,ot(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==xt){e.o=4,ot(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Lt(e,r)}Tt(e)&&r!=Et&&r!=xt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ot(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xn(t),t.K=!0,ot(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Rt(e),Ot(e))}function Ct(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Et:(n=Number(t.substring(n,r)),isNaN(n)?xt:(r+=1)+n>t.length?Et:(t=t.substr(r,n),e.C=r+n,t))}function At(e){e.V=Date.now()+e.O,Dt(e,e.O)}function Dt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(T(e.gb,e),t)}function Nt(e){e.B&&(g.clearTimeout(e.B),e.B=null)}function Ot(e){0==e.l.G||e.I||$n(e.l,e)}function Rt(e){Nt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ke(e.T),Je(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||ln(n.h,e)))if(!e.J&&ln(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Jn(n),Bn(n)}Qn(n),ot(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(T(n.cb,n),6e3));if(1>=cn(n.h)&&n.ja){try{n.ja()}catch(a){}n.ja=void 0}}else er(n,11)}else if((e.J||n.g==e)&&Jn(n),!P(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.T=a[0],a=a[1],2==n.G)if("c"==a[0]){n.I=a[1],n.ka=a[2];var o=a[3];null!=o&&(n.ma=o,n.j.info("VER="+n.ma));var s=a[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.h;h.g||-1==l.indexOf("spdy")&&-1==l.indexOf("quic")&&-1==l.indexOf("h2")||(h.j=h.l,h.g=new Set,h.h&&(hn(h,h.h),h.h=null))}if(r.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.za=f,qt(r.F,r.D,f))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var d=e;if((r=n).sa=nr(r,r.H?r.ka:null,r.V),d.J){fn(r.h,d);var v=d,p=r.J;p&&v.setTimeout(p),v.B&&(Nt(v),At(v)),r.g=d}else Wn(r);0<n.i.length&&zn(n)}else"stop"!=a[0]&&"close"!=a[0]||er(n,7);else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?er(n,7):jn(n):"noop"!=a[0]&&n.l&&n.l.wa(a),n.A=0)}it()}catch(a){}}function Pt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(w(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(w(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(var r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(w(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}(o=kt.prototype).setTimeout=function(e){this.O=e},o.ib=function(e){e=e.target;var t=this.L;t&&3==Ln(e)?t.l():this.La(e)},o.La=function(e){try{if(e==this.g)e:{var t=Ln(this.g),n=this.g.Ea();this.g.aa();if(!(3>t)&&(3!=t||G||this.g&&(this.h.h||this.g.fa()||Pn(this.g)))){this.I||4!=t||7==n||it(),Nt(this);var r=this.g.aa();this.Y=r;t:if(Tt(this)){var i=Pn(this.g);e="";var a=i.length,o=4==Ln(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Rt(this),Ot(this);var s="";break t}this.h.i=new g.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(i[n],{stream:o&&n==a-1});i.splice(0,a),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==r,function(e,t,n,r,i,a,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o}))}(this.j,this.u,this.A,this.m,this.U,t,r),this.i){if(this.Z&&!this.J){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(u)){var l=u;break t}}l=null}if(!(r=l)){this.i=!1,this.o=3,ot(12),Rt(this),Ot(this);break e}Ze(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,r)}this.P?(St(this,t,s),G&&this.i&&3==t&&(Ye(this.S,this.T,"tick",this.hb),this.T.start())):(Ze(this.j,this.m,s,null),Lt(this,s)),4==t&&Rt(this),this.i&&!this.I&&(4==t?$n(this.l,this):(this.i=!1,At(this)))}else 400==r&&0<s.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Rt(this),Ot(this)}}}catch(t){}},o.hb=function(){if(this.g){var e=Ln(this.g),t=this.g.fa();this.C<t.length&&(Nt(this),St(this,e,t),this.i&&4!=e&&At(this))}},o.cancel=function(){this.I=!0,Rt(this)},o.gb=function(){this.B=null;var e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(it(),ot(17)),Rt(this),this.o=2,Ot(this)):Dt(this,this.V-e)};var Mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ft){this.h=void 0!==t?t:e.h,Vt(this,e.j),this.s=e.s,this.g=e.g,jt(this,e.m),this.l=e.l,t=e.i;var n=new $t;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bt(this,n),this.o=e.o}else e&&(n=String(e).match(Mt))?(this.h=!!t,Vt(this,n[1]||"",!0),this.s=Kt(n[2]||""),this.g=Kt(n[3]||"",!0),jt(this,n[4]),this.l=Kt(n[5]||"",!0),Bt(this,n[6]||"",!0),this.o=Kt(n[7]||"")):(this.h=!!t,this.i=new $t(null,this.h))}function Ut(e){return new Ft(e)}function Vt(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function jt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bt(e,t,n){t instanceof $t?(e.i=t,function(e,t){t&&!e.j&&(Zt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(en(this,t),nn(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Ht(t,Yt)),e.i=new $t(t,e.h))}function qt(e,t,n){e.i.set(t,n)}function zt(e){return qt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ht(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Gt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Gt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ht(t,Wt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ht(t,Wt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ht(n,"/"==n.charAt(0)?Xt:Qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ht(n,Jt)),e.join("")};var Wt=/[#\/\?@]/g,Qt=/[#\?:]/g,Xt=/[#\?]/g,Yt=/[#\?@]/g,Jt=/#/g;function $t(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Zt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function en(e,t){Zt(e),t=rn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tn(e,t){return Zt(e),t=rn(e,t),e.g.has(t)}function nn(e,t,n){en(e,t),0<n.length&&(e.i=null,e.g.set(rn(e,t),N(n)),e.h+=n.length)}function rn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(o=$t.prototype).add=function(e,t){Zt(this),this.i=null,e=rn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},o.forEach=function(e,t){Zt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},o.oa=function(){Zt(this);for(var e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},o.W=function(e){Zt(this);var t=[];if("string"==typeof e)tn(this,e)&&(t=t.concat(this.g.get(rn(this,e))));else{e=Array.from(this.g.values());for(var n=0;n<e.length;n++)t=t.concat(e[n])}return t},o.set=function(e,t){return Zt(this),this.i=null,tn(this,e=rn(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},o.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},o.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=Array.from(this.g.keys()),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var an=function t(n,r){"use strict";e(s)(this,t),this.h=n,this.g=r};function on(e){this.l=e||sn,g.PerformanceNavigationTiming?e=0<(e=g.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(g.g&&g.g.Ga&&g.g.Ga()&&g.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sn=10;function un(e){return!!e.h||!!e.g&&e.g.size>=e.j}function cn(e){return e.h?1:e.g?e.g.size:0}function ln(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function hn(e,t){e.g?e.g.add(t):e.h=t}function fn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function dn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,o=e.g.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t=t.concat(s.D)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}return N(e.i)}function vn(){}function pn(){this.g=new vn}function yn(e,t,n){var r=n||"";try{Pt(e,(function(e,n){var i=e;b(e)&&(i=Oe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function mn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function gn(e){this.l=e.ac||null,this.j=e.jb||!1}function kn(e,t){Ae.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=wn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}on.prototype.cancel=function(){if(this.i=dn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}},vn.prototype.stringify=function(e){return g.JSON.stringify(e,void 0)},vn.prototype.parse=function(e){return g.JSON.parse(e,void 0)},C(gn,ht),gn.prototype.g=function(){return new kn(this.l,this.j)},gn.prototype.i=function(e){return function(){return e}}({}),C(kn,Ae);var wn=0;function bn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function xn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,En(e)}function En(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(o=kn.prototype).open=function(e,t){if(this.readyState!=wn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,En(this)},o.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||g).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},o.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((function(){})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=wn},o.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==g.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},o.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xn(this):En(this),3==this.readyState&&bn(this)}},o.Va=function(e){this.g&&(this.response=this.responseText=e,xn(this))},o.Ua=function(e){this.g&&(this.response=e,xn(this))},o.ga=function(){this.g&&xn(this)},o.setRequestHeader=function(e,t){this.v.append(e,t)},o.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},o.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var _n=g.JSON.parse;function In(e){Ae.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tn,this.K=this.L=!1}C(In,Ae);var Tn="",Sn=/^https?$/i,Cn=["POST","PUT"];function An(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Dn(e),On(e)}function Dn(e){e.D||(e.D=!0,De(e,"complete"),De(e,"error"))}function Nn(e){if(e.h&&void 0!==m&&(!e.C[1]||4!=Ln(e)||2!=e.aa()))if(e.v&&4==Ln(e))He(e.Ha,0,e);else if(De(e,"readystatechange"),4==Ln(e)){e.h=!1;try{var t,n=e.aa();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.H).match(Mt)[1]||null;if(!a&&g.self&&g.self.location){var o=g.self.location.protocol;a=o.substr(0,o.length-1)}i=!Sn.test(a?a.toLowerCase():"")}t=i}if(t)De(e,"complete"),De(e,"success");else{e.m=6;try{var s=2<Ln(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.aa()+"]",Dn(e)}}finally{On(e)}}}function On(e,t){if(e.g){Rn(e);var n=e.g,r=e.C[0]?k:null;e.g=null,e.C=null,t||De(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Rn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(g.clearTimeout(e.A),e.A=null)}function Ln(e){return e.g?e.g.readyState:0}function Pn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Tn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Mn(e){var t="";return le(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Fn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Mn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):qt(e,t,n))}function Un(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Vn(e){this.Ca=0,this.i=[],this.j=new $e,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Un("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Un("baseRetryDelayMs",5e3,e),this.bb=Un("retryDelaySeedMs",1e4,e),this.$a=Un("forwardChannelMaxRetries",2,e),this.ta=Un("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new on(e&&e.concurrentRequestLimit),this.Fa=new pn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function jn(e){if(qn(e),3==e.G){var t=e.U++,n=Ut(e.F);qt(n,"SID",e.I),qt(n,"RID",t),qt(n,"TYPE","terminate"),Hn(e,n),(t=new kt(e,e.j,t,void 0)).K=2,t.v=zt(Ut(n)),n=!1,g.navigator&&g.navigator.sendBeacon&&(n=g.navigator.sendBeacon(t.v.toString(),"")),!n&&g.Image&&((new Image).src=t.v,n=!0),n||(t.g=rr(t.l,null),t.g.da(t.v)),t.F=Date.now(),At(t)}tr(e)}function Bn(e){e.g&&(Xn(e),e.g.cancel(),e.g=null)}function qn(e){Bn(e),e.u&&(g.clearTimeout(e.u),e.u=null),Jn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&g.clearTimeout(e.m),e.m=null)}function zn(e){un(e.h)||e.m||(e.m=!0,Ve(e.Ja,e),e.C=0)}function Kn(e,t){var n;n=t?t.m:e.U++;var r=Ut(e.F);qt(r,"SID",e.I),qt(r,"RID",n),qt(r,"AID",e.T),Hn(e,r),e.o&&e.s&&Fn(r,e.o,e.s),n=new kt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Gn(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),hn(e.h,n),_t(n,r,t)}function Hn(e,t){e.ia&&le(e.ia,(function(e,n){qt(t,n,e)})),e.l&&Pt({},(function(e,n){qt(t,n,e)}))}function Gn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?T(e.l.Ra,e.l,e):null;e:for(var i=e.i,a=-1;;){var o=["count="+n];-1==a?0<n?(a=i[0].h,o.push("ofs="+a)):a=0:o.push("ofs="+a);for(var s=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),s=!1;else try{yn(l,o,"req"+c+"_")}catch(e){r&&r(l)}}if(s){r=o.join("&");break e}}return e=e.i.splice(0,n),t.D=e,r}function Wn(e){e.g||e.u||(e.Z=1,Ve(e.Ia,e),e.A=0)}function Qn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(T(e.Ia,e),Zn(e,e.A)),e.A++,!0)}function Xn(e){null!=e.B&&(g.clearTimeout(e.B),e.B=null)}function Yn(e){e.g=new kt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Ut(e.sa);qt(t,"RID","rpc"),qt(t,"SID",e.I),qt(t,"CI",e.L?"0":"1"),qt(t,"AID",e.T),qt(t,"TYPE","xmlhttp"),Hn(e,t),e.o&&e.s&&Fn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=zt(Ut(t)),n.s=null,n.P=!0,It(n,e)}function Jn(e){null!=e.v&&(g.clearTimeout(e.v),e.v=null)}function $n(e,t){var n=null;if(e.g==t){Jn(e),Xn(e),e.g=null;var r=2}else{if(!ln(e.h,t))return;n=t.D,fn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;De(r=nt(),new st(r,n)),zn(e)}else Wn(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(cn(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=ut(T(e.Ja,e,t),Zn(e,e.C)),e.C++,0)))}(e,t)||2==r&&Qn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:er(e,5);break;case 4:er(e,10);break;case 3:er(e,6);break;default:er(e,2)}}function Zn(e,t){var n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function er(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=T(e.kb,e);n||(n=new Ft("//www.google.com/images/cleardot.gif"),g.location&&"http"==g.location.protocol||Vt(n,"https"),zt(n)),function(e,t){var n=new $e;if(g.Image){var r=new Image;r.onload=S(mn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=S(mn,n,r,"TestLoadImage: error",!1,t),r.onabort=S(mn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=S(mn,n,r,"TestLoadImage: timeout",!1,t),g.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else ot(2);e.G=0,e.l&&e.l.va(t),tr(e),qn(e)}function tr(e){if(e.G=0,e.la=[],e.l){var t=dn(e.h);0==t.length&&0==e.i.length||(O(e.la,t),O(e.la,e.i),e.h.i.length=0,N(e.i),e.i.length=0),e.l.ua()}}function nr(e,t,n){var r=n instanceof Ft?Ut(n):new Ft(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),jt(r,r.m);else{var i=g.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var a=new Ft(null,void 0);r&&Vt(a,r),t&&(a.g=t),i&&jt(a,i),n&&(a.l=n),r=a}return n=e.D,t=e.za,n&&t&&qt(r,n,t),qt(r,"VER",e.ma),Hn(e,r),r}function rr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new In(new gn({jb:!0})):new In(e.ra)).Ka(e.H),t}function ir(){}function ar(){if(K&&!(10<=Number(re)))throw Error("Environmental error: no available transport.")}function or(e,t){Ae.call(this),this.g=new Vn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!P(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new cr(this)}function sr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ur(){mt.call(this),this.status=1}function cr(e){this.g=e}(o=In.prototype).Ka=function(e){this.L=e},o.da=function(t,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);n=n?n.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vt.g(),this.C=this.u?ft(this.u):ft(vt),this.g.onreadystatechange=T(this.Ha,this);try{this.F=!0,this.g.open(n,String(t),!0),this.F=!1}catch(e){return void An(this,e)}if(t=r||"",r=new Map(this.headers),i){var a=!0,o=!1,s=void 0;if(Object.getPrototypeOf(i)===Object.prototype)for(var u in i)r.set(u,i[u]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));try{for(var c,l=i.keys()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;r.set(h,i.get(h))}}catch(e){o=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}}}i=Array.from(r.keys()).find((function(e){return"content-type"==e.toLowerCase()})),u=g.FormData&&t instanceof g.FormData,!(0<=D(Cn,n))||i||u||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");var d=!0,v=!1,p=void 0;try{for(var y,m=r[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var k=e(f)(y.value,2),w=k[0],b=k[1];this.g.setRequestHeader(w,b)}}catch(e){v=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(v)throw p}}this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rn(this),0<this.B&&((this.K=function(e){return K&&te()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=T(this.qa,this)):this.A=He(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(e){An(this,e)}},o.qa=function(){void 0!==m&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))},o.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,De(this,"complete"),De(this,"abort"),On(this))},o.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),On(this,!0)),In.X.M.call(this)},o.Ha=function(){this.s||(this.F||this.v||this.l?Nn(this):this.fb())},o.fb=function(){Nn(this)},o.aa=function(){try{return 2<Ln(this)?this.g.status:-1}catch(e){return-1}},o.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},o.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),_n(t)}},o.Ea=function(){return this.m},o.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(o=Vn.prototype).ma=8,o.G=1,o.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;var t=new kt(this,this.j,e,void 0),n=this.s;if(this.S&&(n?de(n=he(n),this.S):n=this.S),null!==this.o||this.N||(t.H=n,n=null),this.O)e:{for(var r=0,i=0;i<this.i.length;i++){var a=this.i[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.i.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=Gn(this,t,r),qt(i=Ut(this.F),"RID",e),qt(i,"CVER",22),this.D&&qt(i,"X-HTTP-Session-Id",this.D),Hn(this,i),n&&(this.N?r="headers="+encodeURIComponent(String(Mn(n)))+"&"+r:this.o&&Fn(i,this.o,n)),hn(this.h,t),this.Ya&&qt(i,"TYPE","init"),this.O?(qt(i,"$req",r),qt(i,"SID","null"),t.Z=!0,_t(t,i,null)):_t(t,i,r),this.G=2}}else 3==this.G&&(e?Kn(this,e):0==this.i.length||un(this.h)||Kn(this))},o.Ia=function(){if(this.u=null,Yn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(T(this.eb,this),e)}},o.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ot(10),Bn(this),Yn(this))},o.cb=function(){null!=this.v&&(this.v=null,Bn(this),Qn(this),ot(19))},o.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))},(o=ir.prototype).xa=function(){},o.wa=function(){},o.va=function(){},o.ua=function(){},o.Ra=function(){},ar.prototype.g=function(e,t){return new or(e,t)},C(or,Ae),or.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ot(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=nr(e,null,e.V),zn(e)},or.prototype.close=function(){jn(this.g)},or.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Oe(e),e=n);t.i.push(new an(t.ab++,e)),3==t.G&&zn(t)},or.prototype.M=function(){this.g.l=null,delete this.j,jn(this.g),delete this.g,or.X.M.call(this)},C(sr,yt),C(ur,mt),C(cr,ir),cr.prototype.xa=function(){De(this.g,"a")},cr.prototype.wa=function(e){De(this.g,new sr(e))},cr.prototype.va=function(e){De(this.g,new ur)},cr.prototype.ua=function(){De(this.g,"b")},ar.prototype.createWebChannel=ar.prototype.g,or.prototype.send=or.prototype.u,or.prototype.open=or.prototype.m,or.prototype.close=or.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,lt.COMPLETE="complete",dt.EventType=pt,pt.OPEN="a",pt.CLOSE="b",pt.ERROR="c",pt.MESSAGE="d",Ae.prototype.listen=Ae.prototype.N,In.prototype.listenOnce=In.prototype.O,In.prototype.getLastError=In.prototype.Oa,In.prototype.getLastErrorCode=In.prototype.Ea,In.prototype.getStatus=In.prototype.aa,In.prototype.getResponseJson=In.prototype.Sa,In.prototype.getResponseText=In.prototype.fa,In.prototype.send=In.prototype.da,In.prototype.setWithCredentials=In.prototype.Ka;var lr=y.createWebChannelTransport=function(){return new ar},hr=y.getStatEventTarget=function(){return nt()},fr=y.ErrorCode=ct,dr=y.EventType=lt,vr=y.Event=et,pr=y.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},yr=y.FetchXmlHttpFactory=gn,mr=y.WebChannel=dt,gr=y.XhrIo=In})),a.register("hhpkh",(function(e,n){t(e.exports,"refsMyLib",(function(){return r}));var r={userLogin:document.querySelector(".user__login"),userSignOut:document.querySelector(".user__signOut"),watchedBtn:document.querySelector("[data-watched-button]"),queueBtn:document.querySelector("[data-queue-button]"),gallery:document.querySelector(".myLibGallery"),information:document.querySelector(".information"),movieCardBox:document.querySelector(".movieCard__box"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),pagination:document.querySelector(".pagination"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext")}})),a.register("4Nugj",(function(e,n){t(e.exports,"refs",(function(){return r}));var r={currentPage:document.querySelector(".header__link.header__link--current"),user:document.querySelector(".user"),userLogin:document.querySelector(".user__login"),userSignOut:document.querySelector(".user__signOut"),gallery:document.querySelector(".gallery"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext"),form:document.querySelector(".search__form"),searchIcon:document.querySelector(".search__icon"),searchSpinner:document.querySelector(".spinner"),searchInfo:document.querySelector(".search__info"),searchByGenresBtn:document.querySelector(".searchBox__genresBtn"),genresList:document.getElementById("genresList"),movieCardBox:document.querySelector(".movieCard__box"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),authorization:document.querySelector("[data-authorization]"),navigation:document.querySelector(".header__list"),regModalOpenBtn:document.querySelector("[data-regModal-open]"),regModal:document.querySelector("[data-regModal"),regModalCloseBtn:document.querySelector("[data-regModal-close]"),regForm:document.querySelector("[data-reg-form]"),regEmail:document.querySelector("[data-reg-email]"),regPassword:document.querySelector("[data-reg-password]"),regConfirmPassword:document.querySelector("[data-reg-confirmPassword]"),regInfo:document.querySelector("[data-reg-info]"),authModalOpenBtn:document.querySelector("[data-authModal-open]"),authModal:document.querySelector("[data-authModal"),authModalCloseBtn:document.querySelector("[data-authModal-close]"),authForm:document.querySelector("[data-auth-form]"),authEmail:document.querySelector("[data-auth-email]"),authPassword:document.querySelector("[data-auth-password]"),authInfo:document.querySelector("[data-auth-info]")}})),a.register("5g02X",(function(n,r){t(n.exports,"default",(function(){return c}));var i,o=a("bpxeT"),s=a("2TvXO"),u=(i=e(o)(e(s).mark((function t(n){var r,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,10]])}))),function(e){return i.apply(this,arguments)}),c=u})),a.register("ePWgG",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0});var n,r=s(a("5GQhH")),i=s(a("lQ5Uz")),o=s(a("8yV8M"));function s(e){return e&&e.__esModule?e:{default:e}}e.exports.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,r.default)();if(n||(n=(0,o.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var u=new Promise((function(r){"object"==typeof e&&e.playVideo instanceof Function?r(e):n.then((function(n){var i=new n.Player(e,t);return s.on("ready",(function(){r(i)})),null}))})),c=i.default.promisifyPlayer(u,a);return c.on=s.on,c.off=s.off,c},e.exports=e.exports.default})),a.register("5GQhH",(function(e,t){"use strict";var n;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/n=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,i=t[e];if(i)for(r=i.length;r--;)i[r].handler(n)},e},e.exports=n})),a.register("lQ5Uz",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0});var n=s(a("dfbYt")),r=s(a("aZo47")),i=s(a("9GjEV")),o=s(a("93qhd"));function s(e){return e&&e.__esModule?e:{default:e}}var u=(0,n.default)("youtube-player"),c={proxyEvents:function(e){var t={},n=!0,r=!1,a=void 0;try{for(var o,s=function(n,r){var i=r.value,a="on"+i.slice(0,1).toUpperCase()+i.slice(1);t[a]=function(t){u('event "%s"',a,t),e.trigger(i,t)}},c=i.default[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)s(0,o)}catch(e){r=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},i=!0,a=!1,s=void 0;try{for(var u,c=function(i,a){var o=a.value;t&&r.default[o]?n[o]=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.then((function(e){var t=r.default[o],i=e.getPlayerState(),a=e[o].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&!t.acceptableStates.includes(i)?new Promise((function(n){var r=function(){var i,a=e.getPlayerState();"number"==typeof t.timeout&&(i=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&t.acceptableStates.includes(a)&&(e.removeEventListener("onStateChange",r),clearTimeout(i),n())};e.addEventListener("onStateChange",r)})).then((function(){return a})):a}))}:n[o]=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.then((function(e){return e[o].apply(e,n)}))}},l=o.default[Symbol.iterator]();!(i=(u=l.next()).done);i=!0)c(l,u)}catch(e){a=!0,s=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw s}}return n}};e.exports.default=c,e.exports=e.exports.default})),a.register("dfbYt",(function(e,t){var n,r=a("6qd2L");e.exports.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(i=r))})),t.splice(i,0,n)},e.exports.save=function(t){try{t?e.exports.storage.setItem("debug",t):e.exports.storage.removeItem("debug")}catch(e){}},e.exports.load=function(){var t;try{t=e.exports.storage.getItem("debug")}catch(e){}!t&&void 0!==r&&"env"in r&&(t=void 0);return t},e.exports.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},e.exports.storage=function(){try{return localStorage}catch(e){}}(),e.exports.destroy=(n=!1,function(){n||(n=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),e.exports.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports.log=console.debug||console.log||function(){},e.exports=a("35oNV")(e.exports),e.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}})),a.register("35oNV",(function(t,n){var r=a("8nrFW");t.exports=function(t){function n(e){var t,r,a,o=null;function s(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];if(s.enabled){var a=s,o=Number(new Date),u=o-(t||o);a.diff=u,a.prev=t,a.curr=o,t=o,r[0]=n.coerce(r[0]),"string"!=typeof r[0]&&r.unshift("%O");var c=0;r[0]=r[0].replace(/%([a-zA-Z%])/g,(function(e,t){if("%%"===e)return"%";c++;var i=n.formatters[t];if("function"==typeof i){var o=r[c];e=i.call(a,o),r.splice(c,1),c--}return e})),n.formatArgs.call(a,r);var l=a.log||n.log;l.apply(a,r)}}return s.namespace=e,s.useColors=n.useColors(),s.color=n.selectColor(e),s.extend=i,s.destroy=n.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:function(){return null!==o?o:(r!==n.namespaces&&(r=n.namespaces,a=n.enabled(e)),a)},set:function(e){o=e}}),"function"==typeof n.init&&n.init(s),s}function i(e,t){var r=n(this.namespace+(void 0===t?":":t)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return n.debug=n,n.default=n,n.coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){var t=e(r)(n.names.map(o)).concat(e(r)(n.skips.map(o).map((function(e){return"-"+e})))).join(",");return n.enable(""),t},n.enable=function(e){var t;n.save(e),n.namespaces=e,n.names=[],n.skips=[];var r=("string"==typeof e?e:"").split(/[\s,]+/),i=r.length;for(t=0;t<i;t++)r[t]&&("-"===(e=r[t].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.slice(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){if("*"===e[e.length-1])return!0;var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=a("eGZ9Z"),n.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(t).forEach((function(e){n[e]=t[e]})),n.names=[],n.skips=[],n.formatters={},n.selectColor=function(e){for(var t=0,r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return n.colors[Math.abs(t)%n.colors.length]},n.enable(n.load()),n}})),a.register("eGZ9Z",(function(t,n){var r=a("l5bVx"),i=1e3,o=6e4,s=36e5,u=864e5,c=6048e5,l=315576e5;function h(e,t,n,r){var i=t>=1.5*n;return Math.round(e/n)+" "+r+(i?"s":"")}t.exports=function(t,n){n=n||{};var a,f,d=void 0===t?"undefined":e(r)(t);if("string"===d&&t.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*l;case"weeks":case"week":case"w":return n*c;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*s;case"minutes":case"minute":case"mins":case"min":case"m":return n*o;case"seconds":case"second":case"secs":case"sec":case"s":return n*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}(t);if("number"===d&&isFinite(t))return n.long?(a=t,(f=Math.abs(a))>=u?h(a,f,u,"day"):f>=s?h(a,f,s,"hour"):f>=o?h(a,f,o,"minute"):f>=i?h(a,f,i,"second"):a+" ms"):function(e){var t=Math.abs(e);return t>=u?Math.round(e/u)+"d":t>=s?Math.round(e/s)+"h":t>=o?Math.round(e/o)+"m":t>=i?Math.round(e/i)+"s":e+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}})),a.register("aZo47",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0});var n,r=a("buyto"),i=(n=r)&&n.__esModule?n:{default:n};e.exports.default={pauseVideo:{acceptableStates:[i.default.ENDED,i.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[i.default.ENDED,i.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[i.default.ENDED,i.default.PLAYING,i.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=e.exports.default})),a.register("buyto",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=e.exports.default})),a.register("9GjEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=e.exports.default})),a.register("93qhd",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe","getSphericalProperties","setSphericalProperties"],e.exports=e.exports.default})),a.register("8yV8M",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0});var n,r=a("c5j32"),i=(n=r)&&n.__esModule?n:{default:n};e.exports.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,i.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=e.exports.default})),a.register("c5j32",(function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,i){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof t&&(i=t,t={}),t=t||{},i=i||function(){},o.type=t.type||"text/javascript",o.charset=t.charset||"utf8",o.async=!("async"in t)||!!t.async,o.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(o,t.attrs),t.text&&(o.text=""+t.text),("onload"in o?n:r)(o,i),o.onload||n(o,i),a.appendChild(o)}}))}();
//# sourceMappingURL=myLib.70e39efe.js.map
