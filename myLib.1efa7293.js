!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequired7c6=a),a.register("kYN5b",(function(t,r){e(t.exports,"refsMyLib",(function(){return n}));var n={watchedBtn:document.querySelector("[data-watched-button]"),queueBtn:document.querySelector("[data-queue-button]"),gallery:document.querySelector(".myLibGallery"),information:document.querySelector(".information"),movieCardBox:document.querySelector(".movieCard__box"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext")}})),a.register("5xtVg",(function(r,n){e(r.exports,"default",(function(){return f}));var o,i=a("bpxeT"),s=a("2TvXO"),c=a("kYN5b"),u=a("7basD"),l=(u=a("7basD"),a("5g02X")),d=a("ePWgG"),f=function(e){document.querySelectorAll(".gallery__item").forEach((function(r){r.addEventListener("click",(function(){var n=Number(r.getAttribute("movie-index"));e.forEach((function(e){if(e.id===n){var r='<article class="movie">\n                                <div>\n                                    <img class="movie__poster" src="'.concat(e.posterPath).concat(e.poster_path,'" alt="poster">\n                                </div>\n                                <div class="movie__box">\n                                    <h3 class="movie__title">').concat(e.original_title,'</h3>\n                                    <ul>\n                                        <li class="movie__characteristic">\n                                            <p class="movie__characteristicKey">Vote / Votes</p>\n                                            <div class="vote__average">').concat(e.vote_average,'</div><span>&nbsp / &nbsp</span>\n                                            <div class="vote__count">').concat(e.vote_count,'</div>\n                                        </li>\n                                        <li class="movie__characteristic">\n                                            <p class="movie__characteristicKey">Popularity</p>\n                                            <p class="movie__characteristicValue">').concat(e.popularity,'</p>\n                                        </li>\n                                        <li class="movie__characteristic">\n                                            <p class="movie__characteristicKey">Original Title</p>\n                                            <p class="movie__characteristicValue">').concat(e.original_title,'</p>\n                                        </li>\n                                        <li class="movie__characteristic">\n                                            <p class="movie__characteristicKey">Genre</p>\n                                            <p class="movie__characteristicValue">').concat(e.genre_ids.join(", "),'</p>    \n                                        </li>\n                                    </ul>    \n                                    <p class="movie__about">About</p>\n                                    <p class="movie__description">').concat(e.overview,'</p>\n                                    <div class="movie__btnBox">\n                                        <button class="movie__btn is-active" type="button" data-add-to-watched>add to Watched</button>\n                                        <button class="movie__btn" type="button" data-add-to-queue>add to queue</button>\n                                    </div>\n\n                                    <button class="movie__trailer" type="button" data-trailerModal-button>Trailer</button>\n                                    <div class="backdrop is-hidden" data-trailerModal>\n                                        <div class="trailerBox">\n                                            <button class="trailerBox__closeBtn" type="button" data-trailerClose-button></button>\n                                            <div id="player"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </article>');function a(){u.refs.modal.classList.add("is-hidden"),c.refsMyLib.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")}function f(e){"Escape"===e.code&&a()}function p(e){e.currentTarget===e.target&&a()}function h(){a();var t=JSON.parse(localStorage.getItem("watchedList"))||[];t.some((function(t){return t.id===e.id}))||(t.push(e),localStorage.setItem("watchedList",JSON.stringify(t)))}function y(){a();var t=JSON.parse(localStorage.getItem("queue"))||[];t.some((function(t){return t.id===e.id}))||(t.push(e),localStorage.setItem("queue",JSON.stringify(t)))}function v(){return(v=t(i)(t(s).mark((function r(){var n,a;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.themoviedb.org/3/movie/".concat(e.id,"/videos?api_key=").concat(u.key,"&language=en-US"),t.prev=2,t.next=5,(0,l.default)(a);case 5:n=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.error(t.t0);case 11:n.results.find((function(e){if(e.name.includes("Official"))return o=e.key;o=n.results[0].key}));case 12:case"end":return t.stop()}}),r,null,[[2,8]])})))).apply(this,arguments)}function m(){var e;document.querySelector("[data-trailerModal]").classList.remove("is-hidden"),(e=t(d)("player",{width:"100%",videoId:o,host:"https://www.youtube.com"})).playVideo(),document.querySelector("[data-trailerClose-button]").addEventListener("click",(function(){e.stopVideo(),document.querySelector("[data-trailerModal]").classList.add("is-hidden")}))}u.refs.movieCardBox.innerHTML=r,c.refsMyLib.movieCardBox.innerHTML=r,u.refs.modal.classList.remove("is-hidden"),c.refsMyLib.modal.classList.remove("is-hidden"),document.body.classList.add("body-modal-open"),document.querySelector("[data-add-to-watched]").addEventListener("click",h),document.querySelector("[data-add-to-queue]").addEventListener("click",y),document.querySelector("[data-trailerModal-button]").addEventListener("click",m),window.addEventListener("keydown",f),u.refs.closeModalBtn.addEventListener("click",a),c.refsMyLib.closeModalBtn.addEventListener("click",a),u.refs.modal.addEventListener("click",p),function(){v.apply(this,arguments)}()}}))}))}))}})),a.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,c,"next",e)}function c(e){r(i,o,a,s,c,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(e,t,r){var n=d;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return M()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=E(i,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",y={};function v(){}function m(){}function g(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,C=w&&w(w(k([])));C&&C!==r&&n.call(C,a)&&(b=C);var x=g.prototype=v.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function F(e,t){function r(o,a,i,s){var c=l(e[o],e,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function k(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:M}}function M(){return{value:t,done:!0}}return m.prototype=g,c(x,"constructor",g),c(g,"constructor",m),m.displayName=c(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(F.prototype),c(F.prototype,i,(function(){return this})),e.AsyncIterator=F,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new F(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(x),c(x,s,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:k(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("7basD",(function(t,r){e(t.exports,"refs",(function(){return n})),e(t.exports,"key",(function(){return o}));var n={gallery:document.querySelector(".gallery"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext"),form:document.querySelector(".search__form"),searchIcon:document.querySelector(".search__icon"),searchSpinner:document.querySelector(".spinner"),searchInfo:document.querySelector(".search__info"),movieCardBox:document.querySelector(".movieCard__box"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]")},o="4273054ff6f056d7541ef873941254f6"})),a.register("5g02X",(function(r,n){e(r.exports,"default",(function(){return u}));var o,i=a("bpxeT"),s=a("2TvXO"),c=(o=t(i)(t(s).mark((function e(r){var n,o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r);case 3:return n=e.sent,e.next=6,n.json();case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(e){return o.apply(this,arguments)}),u=c})),a.register("ePWgG",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0});var r,n=s(a("5GQhH")),o=s(a("lQ5Uz")),i=s(a("8yV8M"));function s(e){return e&&e.__esModule?e:{default:e}}e.exports.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,n.default)();if(r||(r=(0,i.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=o.default.proxyEvents(s);var c=new Promise((function(n){"object"==typeof e&&e.playVideo instanceof Function?n(e):r.then((function(r){var o=new r.Player(e,t);return s.on("ready",(function(){n(o)})),null}))})),u=o.default.promisifyPlayer(c,a);return u.on=s.on,u.off=s.off,u},e.exports=e.exports.default})),a.register("5GQhH",(function(e,t){"use strict";var r;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/r=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,o=t[e];if(o)for(n=o.length;n--;)o[n].handler(r)},e},e.exports=r})),a.register("lQ5Uz",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0});var r=s(a("dfbYt")),n=s(a("aZo47")),o=s(a("9GjEV")),i=s(a("93qhd"));function s(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.default)("youtube-player"),u={proxyEvents:function(e){var t={},r=!0,n=!1,a=void 0;try{for(var i,s=function(r,n){var o=n.value,a="on"+o.slice(0,1).toUpperCase()+o.slice(1);t[a]=function(t){c('event "%s"',a,t),e.trigger(o,t)}},u=o.default[Symbol.iterator]();!(r=(i=u.next()).done);r=!0)s(0,i)}catch(e){n=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(n)throw a}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},o=!0,a=!1,s=void 0;try{for(var c,u=function(o,a){var i=a.value;t&&n.default[i]?r[i]=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){var t=n.default[i],o=e.getPlayerState(),a=e[i].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&!t.acceptableStates.includes(o)?new Promise((function(r){var n=function(){var o,a=e.getPlayerState();"number"==typeof t.timeout&&(o=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&t.acceptableStates.includes(a)&&(e.removeEventListener("onStateChange",n),clearTimeout(o),r())};e.addEventListener("onStateChange",n)})).then((function(){return a})):a}))}:r[i]=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.then((function(e){return e[i].apply(e,r)}))}},l=i.default[Symbol.iterator]();!(o=(c=l.next()).done);o=!0)u(l,c)}catch(e){a=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw s}}return r}};e.exports.default=u,e.exports=e.exports.default})),a.register("dfbYt",(function(e,t){var r,n=a("6qd2L");e.exports.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(n++,"%c"===e&&(o=n))})),t.splice(o,0,r)},e.exports.save=function(t){try{t?e.exports.storage.setItem("debug",t):e.exports.storage.removeItem("debug")}catch(e){}},e.exports.load=function(){var t;try{t=e.exports.storage.getItem("debug")}catch(e){}!t&&void 0!==n&&"env"in n&&(t=void 0);return t},e.exports.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},e.exports.storage=function(){try{return localStorage}catch(e){}}(),e.exports.destroy=(r=!1,function(){r||(r=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),e.exports.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports.log=console.debug||console.log||function(){},e.exports=a("35oNV")(e.exports),e.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}})),a.register("6qd2L",(function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}})),a.register("35oNV",(function(e,r){var n=a("8nrFW");e.exports=function(e){function r(e){var t,n,a,i=null;function s(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];if(s.enabled){var a=s,i=Number(new Date),c=i-(t||i);a.diff=c,a.prev=t,a.curr=i,t=i,n[0]=r.coerce(n[0]),"string"!=typeof n[0]&&n.unshift("%O");var u=0;n[0]=n[0].replace(/%([a-zA-Z%])/g,(function(e,t){if("%%"===e)return"%";u++;var o=r.formatters[t];if("function"==typeof o){var i=n[u];e=o.call(a,i),n.splice(u,1),u--}return e})),r.formatArgs.call(a,n);var l=a.log||r.log;l.apply(a,n)}}return s.namespace=e,s.useColors=r.useColors(),s.color=r.selectColor(e),s.extend=o,s.destroy=r.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:function(){return null!==i?i:(n!==r.namespaces&&(n=r.namespaces,a=r.enabled(e)),a)},set:function(e){i=e}}),"function"==typeof r.init&&r.init(s),s}function o(e,t){var n=r(this.namespace+(void 0===t?":":t)+e);return n.log=this.log,n}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){var e=t(n)(r.names.map(i)).concat(t(n)(r.skips.map(i).map((function(e){return"-"+e})))).join(",");return r.enable(""),e},r.enable=function(e){var t;r.save(e),r.namespaces=e,r.names=[],r.skips=[];var n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(t=0;t<o;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.slice(1)+"$")):r.names.push(new RegExp("^"+e+"$")))},r.enabled=function(e){if("*"===e[e.length-1])return!0;var t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=a("eGZ9Z"),r.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((function(t){r[t]=e[t]})),r.names=[],r.skips=[],r.formatters={},r.selectColor=function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]},r.enable(r.load()),r}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||i.default(e)||o.default()};var r=s(a("kMC0W")),n=s(a("7AJDX")),o=s(a("8CtQK")),i=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("eGZ9Z",(function(e,r){var n=a("l5bVx"),o=1e3,i=6e4,s=36e5,c=864e5,u=6048e5,l=315576e5;function d(e,t,r,n){var o=t>=1.5*r;return Math.round(e/r)+" "+n+(o?"s":"")}e.exports=function(e,r){r=r||{};var a,f,p=void 0===e?"undefined":t(n)(e);if("string"===p&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return r*l;case"weeks":case"week":case"w":return r*u;case"days":case"day":case"d":return r*c;case"hours":case"hour":case"hrs":case"hr":case"h":return r*s;case"minutes":case"minute":case"mins":case"min":case"m":return r*i;case"seconds":case"second":case"secs":case"sec":case"s":return r*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}(e);if("number"===p&&isFinite(e))return r.long?(a=e,(f=Math.abs(a))>=c?d(a,f,c,"day"):f>=s?d(a,f,s,"hour"):f>=i?d(a,f,i,"minute"):f>=o?d(a,f,o,"second"):a+" ms"):function(e){var t=Math.abs(e);return t>=c?Math.round(e/c)+"d":t>=s?Math.round(e/s)+"h":t>=i?Math.round(e/i)+"m":t>=o?Math.round(e/o)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("aZo47",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0});var r,n=a("buyto"),o=(r=n)&&r.__esModule?r:{default:r};e.exports.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=e.exports.default})),a.register("buyto",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=e.exports.default})),a.register("9GjEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=e.exports.default})),a.register("93qhd",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe","getSphericalProperties","setSphericalProperties"],e.exports=e.exports.default})),a.register("8yV8M",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0});var r,n=a("c5j32"),o=(r=n)&&r.__esModule?r:{default:r};e.exports.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,o.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=e.exports.default})),a.register("c5j32",(function(e,t){function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?r:n)(i,o),i.onload||r(i,o),a.appendChild(i)}}))}();
//# sourceMappingURL=myLib.1efa7293.js.map
