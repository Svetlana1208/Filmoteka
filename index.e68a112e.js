!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)}))}};var r={},i=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(t,e,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return j()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=N(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",g={};function v(){}function m(){}function y(){}var b={};c(b,o,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(k([])));x&&x!==n&&r.call(x,o)&&(b=x);var w=y.prototype=v.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function N(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,N(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=y,c(w,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new E(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(r);try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}var o,a,s="4273054ff6f056d7541ef873941254f6",c={},u={gallery:document.querySelector(".gallery"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext")};function l(){(function(){return d.apply(this,arguments)})().then((function(t){!function(t){var e=!0,n=!1,r=void 0;try{for(var i,o=t.genres[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;c[a.id]=a.name}}catch(t){n=!0,r=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}}(t),function(t){u.paginationNumbers.innerHTML="",u.firstPage.classList.add("is-hidden"),u.dotsPrev.classList.add("is-hidden");for(var e=t;e<=5;e+=1)p(e)}(1),document.querySelectorAll(".pagination-number").forEach((function(t){var e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",(function(){h(e)}))})),h(1)}))}function d(){return(d=t(e)(t(r).mark((function e(){var n,i;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(s,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.json();case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=t(e)(t(r).mark((function e(n){var i,o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s,"&page=").concat(n));case 2:return i=t.sent,t.next=5,i.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function h(t){o=t,function(t){return f.apply(this,arguments)}(t).then((function(t){return function(t){var e,n=!0,r=!1,i=void 0;try{for(var o,a=t.results[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s.genre_ids)for(var u=0;u<s.genre_ids.length;u+=1)s.genre_ids[u]=c[s.genre_ids[u]],e=s.release_date.slice(0,4),s.release_date=e}}catch(t){r=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}(t),function(t){u.gallery.innerHTML="";var e=t.results.map((function(t){return'<li class="gallery__item">\n            <img class="film__poster" src="https://image.tmdb.org/t/p/w500'.concat(t.poster_path,'" alt="poster">\n            <h3 class="film__title">').concat(t.original_title,'</h3>\n            <p class="film__characteristics">').concat(t.genre_ids.join(", ")," | ").concat(t.release_date,"</p>\n        </li>")})).join("");u.gallery.insertAdjacentHTML("beforeend",e)}(t),function(t){1,u.firstPage.setAttribute("page-index",1),u.firstPage.setAttribute("aria-label","Page 1"),u.firstPage.innerHTML=1,a=t.total_pages-1,u.lastPage.setAttribute("page-index",a),u.lastPage.setAttribute("aria-label","Page "+a),u.lastPage.innerHTML=a}(t),function(){1===o?v(u.prevButton):m(u.prevButton);o===a?v(u.nextButton):m(u.nextButton)}(),document.querySelectorAll(".pagination-number").forEach((function(t){t.classList.remove("is-active"),Number(t.getAttribute("page-index"))==o&&t.classList.add("is-active")})),t}))}function p(t){var e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),u.paginationNumbers.appendChild(e)}function g(t){u.paginationNumbers.innerHTML="";for(var e=t-5;e<t;e+=1)p(e+1)}function v(t){t.classList.add("disabled"),t.setAttribute("disabled",!0)}function m(t){t.classList.remove("disabled"),t.removeAttribute("disabled")}u.prevButton.addEventListener("click",(function(){!function(t){u.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==u.paginationNumbers.firstElementChild.innerHTML&&(g(t),document.querySelectorAll(".pagination-number").forEach((function(t){var e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",(function(){h(e)}))})));Number(u.paginationNumbers.lastElementChild.getAttribute("page-index"))===a-5&&(u.dotsNext.classList.remove("is-hidden"),u.lastPage.classList.remove("is-hidden"));5===Number(u.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(u.firstPage.classList.add("is-hidden"),u.dotsPrev.classList.add("is-hidden"))}(o-1),h(o-1)})),u.nextButton.addEventListener("click",(function(){!function(t){u.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&Number(u.paginationNumbers.lastElementChild.getAttribute("page-index"))!==a&&(!function(t){u.paginationNumbers.innerHTML="";for(var e=t;e<t+5;e+=1)p(e)}(t),document.querySelectorAll(".pagination-number").forEach((function(t){var e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",(function(){h(e)}))})));6===Number(u.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(u.firstPage.classList.remove("is-hidden"),u.dotsPrev.classList.remove("is-hidden"));Number(u.paginationNumbers.firstElementChild.getAttribute("page-index"))===a-5&&u.dotsNext.classList.add("is-hidden");Number(u.paginationNumbers.firstElementChild.getAttribute("page-index"))===a-4&&(u.lastPage.classList.add("is-hidden"),u.dotsNext.classList.add("is-hidden"))}(o+1),h(o+1)})),u.firstPage.addEventListener("click",(function(){l(),u.lastPage.classList.remove("is-hidden"),u.dotsNext.classList.remove("is-hidden")})),u.lastPage.addEventListener("click",(function(){h(a),u.dotsNext.classList.add("is-hidden"),u.dotsPrev.classList.remove("is-hidden"),u.firstPage.classList.remove("is-hidden"),g(o),document.querySelectorAll(".pagination-number").forEach((function(t){var e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",(function(){h(e)}))})),u.lastPage.classList.add("is-hidden")})),window.addEventListener("load",l())}();
//# sourceMappingURL=index.e68a112e.js.map