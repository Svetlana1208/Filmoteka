!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}};var n={},i=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new A(n||[]);return o._invoke=function(t,e,r){var n=f;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw o;return j()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=P(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?h:d,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};c(b,o,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(S([])));L&&L!==r&&n.call(L,o)&&(b=L);var w=y.prototype=v.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function S(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=y,c(w,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new E(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(n);try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}var o,a,s,c="4273054ff6f056d7541ef873941254f6",u={},l={gallery:document.querySelector(".gallery"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext")};function f(){return d.apply(this,arguments)}function d(){return(d=t(e)(t(n).mark((function e(){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g();case 3:t.sent,x(1).then((function(t){E(1),N(),w(t),T(t),j(),P()})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return(h=t(e)(t(n).mark((function e(){var r,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(c,"&language=en-US"));case 2:return r=t.sent,t.next=5,r.json();case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return(v=t(e)(t(n).mark((function e(){var r,i,o,a,s,c;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p();case 3:for(r=t.sent,console.log(r),i=!0,o=!1,a=void 0,t.prev=6,s=r.genres[Symbol.iterator]();!(i=(c=s.next()).done);i=!0)genre=c.value,u[genre.id]=genre.name;t.next=14;break;case 10:t.prev=10,t.t0=t.catch(6),o=!0,a=t.t0;case 14:t.prev=14,t.prev=15,i||null==s.return||s.return();case 17:if(t.prev=17,!o){t.next=20;break}throw a;case 20:return t.finish(17);case 21:return t.finish(14);case 22:return t.abrupt("return",u);case 25:t.prev=25,t.t1=t.catch(0),console.log(t.t1.message);case 28:case"end":return t.stop()}}),e,null,[[0,25],[6,10,14,22],[15,,17,21]])})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=t(e)(t(n).mark((function e(r){var i,o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c,"&page=").concat(r));case 2:return i=t.sent,t.next=5,i.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function b(t){var e;console.log(t);var r=!0,n=!1,i=void 0;try{for(var o,a=t.results[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)if(pop=o.value,pop.genre_ids)for(var s=0;s<pop.genre_ids.length;s+=1)pop.genre_ids[s]=u[pop.genre_ids[s]],e=pop.release_date.slice(0,4),pop.release_date=e}catch(t){n=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}}function x(t){return L.apply(this,arguments)}function L(){return(L=t(e)(t(n).mark((function e(r){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r,t.prev=1,t.next=4,m(r);case 4:return b(s=t.sent),t.abrupt("return",s);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:case"end":return t.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function w(t){console.log(t),l.gallery.innerHTML="",markup=t.results.map((function(t){return'<li class="gallery__item">\n            <img class="film__poster" src="https://image.tmdb.org/t/p/w500'.concat(t.poster_path,'" alt="poster">\n            <h3 class="film__title">').concat(t.original_title,'</h3>\n            <p class="film__characteristics">').concat(t.genre_ids.join(", ")," | ").concat(t.release_date,"</p>\n        </li>")})).join(""),l.gallery.insertAdjacentHTML("beforeend",markup)}function _(t){var e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),l.paginationNumbers.appendChild(e)}function E(t){l.paginationNumbers.innerHTML="",l.firstPage.classList.add("is-hidden"),l.dotsPrev.classList.add("is-hidden");for(var e=t;e<=5;e+=1)_(e)}function P(){document.querySelectorAll(".pagination-number").forEach((function(t){t.classList.remove("is-active"),Number(t.getAttribute("page-index"))==o&&t.classList.add("is-active")}))}function N(){document.querySelectorAll(".pagination-number").forEach((function(t){var e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",(function(){x(e)}))}))}function k(t){l.paginationNumbers.innerHTML="";for(var e=t-5;e<t;e+=1)_(e+1)}function A(t){t.classList.add("disabled"),t.setAttribute("disabled",!0)}function S(t){t.classList.remove("disabled"),t.removeAttribute("disabled")}function j(){1===o?A(l.prevButton):S(l.prevButton),o===a?A(l.nextButton):S(l.nextButton)}function T(t){firstPage=1,l.firstPage.setAttribute("page-index",firstPage),l.firstPage.setAttribute("aria-label","Page "+firstPage),l.firstPage.innerHTML=firstPage,a=t.total_pages-1,l.lastPage.setAttribute("page-index",a),l.lastPage.setAttribute("aria-label","Page "+a),l.lastPage.innerHTML=a}l.prevButton.addEventListener("click",(function(){!function(t){l.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==l.paginationNumbers.firstElementChild.innerHTML&&(k(t),document.querySelectorAll(".pagination-number").forEach((function(t){var e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",(function(){x(e)}))})));Number(l.paginationNumbers.lastElementChild.getAttribute("page-index"))===a-5&&(l.dotsNext.classList.remove("is-hidden"),l.lastPage.classList.remove("is-hidden"));5===Number(l.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(l.firstPage.classList.add("is-hidden"),l.dotsPrev.classList.add("is-hidden"))}(o-1),x(o-1)})),l.nextButton.addEventListener("click",(function(){!function(t){l.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&Number(l.paginationNumbers.lastElementChild.getAttribute("page-index"))!==a&&(!function(t){l.paginationNumbers.innerHTML="";for(var e=t;e<t+5;e+=1)_(e)}(t),document.querySelectorAll(".pagination-number").forEach((function(t){var e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",(function(){x(e)}))})));6===Number(l.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(l.firstPage.classList.remove("is-hidden"),l.dotsPrev.classList.remove("is-hidden"));Number(l.paginationNumbers.firstElementChild.getAttribute("page-index"))===a-5&&l.dotsNext.classList.add("is-hidden");Number(l.paginationNumbers.firstElementChild.getAttribute("page-index"))===a-4&&(l.lastPage.classList.add("is-hidden"),l.dotsNext.classList.add("is-hidden"))}(o+1),x(o+1)})),l.firstPage.addEventListener("click",(function(){f(),l.lastPage.classList.remove("is-hidden"),l.dotsNext.classList.remove("is-hidden")})),l.lastPage.addEventListener("click",(function(){x(a),l.dotsNext.classList.add("is-hidden"),l.dotsPrev.classList.remove("is-hidden"),l.firstPage.classList.remove("is-hidden"),k(o),document.querySelectorAll(".pagination-number").forEach((function(t){var e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",(function(){x(e)}))})),l.lastPage.classList.add("is-hidden")})),window.addEventListener("load",f())}();
//# sourceMappingURL=index.59496fd0.js.map