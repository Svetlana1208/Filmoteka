!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var s={};function a(e,t,r,n,i,s,a){try{var o=e[s](a),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var s=e.apply(t,r);function o(e){a(s,n,i,o,c,"next",e)}function c(e){a(s,n,i,o,c,"throw",e)}o(void 0)}))}};var o={},c=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),a=new A(n||[]);return s._invoke=function(e,t,r){var n=f;return function(i,s){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw s;return j()}for(r.method=i,r.arg=s;;){var a=r.delegate;if(a){var o=P(a,r);if(o){if(o===v)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(e,r,a),s}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};c(b,s,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(T([])));x&&x!==r&&n.call(x,s)&&(b=x);var w=y.prototype=g.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(i,s,a,o){var c=l(e[i],e,s);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,o)}),(function(e){r("throw",e,a,o)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,o)}))}o(c.arg)}var i;this._invoke=function(e,n){function s(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(s,s):s()}}function P(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var s=i.arg;return s?s.done?(r[e.resultName]=s.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function T(e){if(e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:t,done:!0}}return m.prototype=y,c(w,"constructor",y),c(y,"constructor",m),m.displayName=c(y,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,o,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},_(E.prototype),c(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,i,s){void 0===s&&(s=Promise);var a=new E(u(t,r,n,i),s);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(w),c(w,o,"Generator"),c(w,s,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return o.type="throw",o.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],o=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=e,a.arg=t,s?(this.method="next",this.next=s.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(o);try{regeneratorRuntime=c}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var u,l=i("7basD"),f=(i("7basD"),l=i("7basD"),{}),d=(u=e(s)(e(o).mark((function t(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(l.key,"&language=en-US"));case 2:return r=e.sent,e.next=5,r.json();case 5:return h(e.sent),e.abrupt("return",f);case 8:case"end":return e.stop()}}),t)}))),function(){return u.apply(this,arguments)});function h(e){var t=!0,r=!1,n=void 0;try{for(var i,s=e.genres[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var a=i.value;f[a.id]=a.name}}catch(e){r=!0,n=e}finally{try{t||null==s.return||s.return()}finally{if(r)throw n}}}var p,v,g,m,y,b,L,x=d,w=function(){var t=e(s)(e(o).mark((function t(r){var n,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r);case 3:return n=e.sent,e.next=6,n.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),_=w,E=i("5xtVg"),P=(i("5xtVg"),E=i("5xtVg"),1);function N(){return k.apply(this,arguments)}function k(){return(k=e(s)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return y="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(l.key),e.next=5,j(1);case 5:C(),G(),F(),M();case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function A(e){var t,r=!0,n=!1,i=void 0;try{for(var s,a=e.results[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){var o=s.value;if(null===o.poster_path?(o.posterPath="https://upload.wikimedia.org/wikipedia/commons/a/a1",o.poster_path="/Out_Of_Poster.jpg"):o.posterPath="https://image.tmdb.org/t/p/w500",o.genre_ids)for(var c=0;c<o.genre_ids.length;c+=1)o.genre_ids[c]=f[o.genre_ids[c]];else o.genre_ids=["absent"];o.release_date&&(t=o.release_date.slice(0,4),o.release_date=t)}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}}function T(e){l.refs.gallery.innerHTML="";var t=e.map((function(e){return'<li class="gallery__item" movie-index = '.concat(e.id,'>\n            <img class="film__poster" src="').concat(e.posterPath).concat(e.poster_path,'" alt="poster">\n            <h3 class="film__title">').concat(e.original_title,'</h3>\n            <p class="film__characteristics">').concat(e.genre_ids.join(", ")," | ").concat(e.release_date,"</p>\n        </li>")})).join("");l.refs.gallery.insertAdjacentHTML("beforeend",t)}function j(e){return O.apply(this,arguments)}function O(){return(O=e(s)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p=r,b="".concat(y,"&page=").concat(r),e.prev=2,e.next=5,_(b);case 5:0!==(m=e.sent).total_results?(v=m.total_pages,A(m),T(m.results),q(),M(),(0,E.default)(m.results)):(l.refs.searchInfo.textContent="Search result not successful. Enter the correct movie name.",N()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}function S(e){var t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("type","button"),t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),t.setAttribute("onclick","window.location.href='./index.html#gallery'"),l.refs.paginationNumbers.appendChild(t)}function C(){if(l.refs.paginationNumbers.innerHTML="",l.refs.nextButton.classList.remove("is-hidden"),l.refs.prevButton.classList.remove("is-hidden"),m.total_pages>5){l.refs.lastPage.classList.remove("is-hidden"),l.refs.dotsNext.classList.remove("is-hidden");for(var e=P;e<=5;e+=1)S(e)}else{l.refs.lastPage.classList.add("is-hidden"),l.refs.dotsNext.classList.add("is-hidden"),l.refs.firstPage.classList.add("is-hidden"),l.refs.dotsPrev.classList.add("is-hidden");for(var t=P;t<=m.total_pages;t+=1)S(t)}}function M(){document.querySelectorAll(".pagination-number").forEach((function(e){e.classList.remove("is-active"),Number(e.getAttribute("page-index"))===p&&e.classList.add("is-active")}))}function H(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function B(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function q(){1===p?H(l.refs.prevButton):B(l.refs.prevButton),p===v?H(l.refs.nextButton):B(l.refs.nextButton)}function G(){document.querySelectorAll(".pagination-number").forEach((function(e){var t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(function(){j(t)}))}))}function D(e){if(l.refs.paginationNumbers.innerHTML="",p>1&&p<6&&l.refs.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")){for(var t=1;t<6;t+=1)S(t);l.refs.dotsNext.classList.remove("is-hidden"),l.refs.lastPage.classList.remove("is-hidden")}else for(var r=e-5;r<e;r+=1)S(r+1)}function F(){l.refs.firstPage.setAttribute("page-index",1),l.refs.firstPage.setAttribute("aria-label","Page 1"),l.refs.firstPage.innerHTML=1,l.refs.lastPage.setAttribute("page-index",v),l.refs.lastPage.setAttribute("aria-label","Page "+v),l.refs.lastPage.innerHTML=v}function I(){return(I=e(s)(e(o).mark((function t(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),l.refs.searchIcon.classList.add("is-hidden"),l.refs.searchSpinner.classList.remove("is-hidden"),l.refs.gallery.innerHTML="",L=r.currentTarget,g=L.elements.searchQuery.value,P=1,l.refs.searchInfo.textContent="",y="https://api.themoviedb.org/3/search/movie?api_key=".concat(l.key,"&query=").concat(g),e.next=11,j(P);case 11:C(),G(),F(),M(),l.refs.searchIcon.classList.remove("is-hidden"),l.refs.searchSpinner.classList.add("is-hidden");case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}l.refs.prevButton.addEventListener("click",(function(){!function(e){l.refs.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==l.refs.paginationNumbers.firstElementChild.innerHTML&&(D(e),G());Number(l.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))===v-5&&(l.refs.dotsNext.classList.remove("is-hidden"),l.refs.lastPage.classList.remove("is-hidden"));5===Number(l.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(l.refs.firstPage.classList.add("is-hidden"),l.refs.dotsPrev.classList.add("is-hidden"))}(p-1),j(p-1)})),l.refs.nextButton.addEventListener("click",(function(){!function(e){l.refs.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&Number(l.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))!==v&&(!function(e){if(l.refs.paginationNumbers.innerHTML="",5===p&&6===v){l.refs.dotsPrev.classList.remove("is-hidden");for(var t=e-4;t<p+2;t+=1)S(t)}else if(5===p&&7===v){l.refs.dotsPrev.classList.remove("is-hidden");for(var r=e-3;r<p+3;r+=1)S(r)}else if(5===p&&8===v){l.refs.dotsPrev.classList.remove("is-hidden");for(var n=e-2;n<p+4;n+=1)S(n)}else if(5===p&&9===v){l.refs.dotsPrev.classList.remove("is-hidden");for(var i=e-1;i<p+4;i+=1)S(i)}else for(var s=e;s<e+5;s+=1)S(s)}(e),G());p===v-1&&(D(e),M(),G(currentDataAll));6===Number(l.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(l.refs.firstPage.classList.remove("is-hidden"),l.refs.dotsPrev.classList.remove("is-hidden"));Number(l.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))===v-5&&l.refs.dotsNext.classList.add("is-hidden");Number(l.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))===v-4&&(l.refs.lastPage.classList.add("is-hidden"),l.refs.dotsNext.classList.add("is-hidden"))}(p+1),j(p+1)})),l.refs.firstPage.addEventListener("click",(function(){j(1),C(),G(),l.refs.lastPage.classList.remove("is-hidden"),l.refs.dotsNext.classList.remove("is-hidden"),l.refs.firstPage.classList.add("is-hidden"),l.refs.dotsPrev.classList.add("is-hidden")})),l.refs.lastPage.addEventListener("click",(function(){j(v),D(p),G(),l.refs.dotsNext.classList.add("is-hidden"),l.refs.dotsPrev.classList.remove("is-hidden"),l.refs.firstPage.classList.remove("is-hidden"),l.refs.lastPage.classList.add("is-hidden")})),l.refs.form.addEventListener("submit",(function(e){return I.apply(this,arguments)})),l.refs.closeModalBtn.addEventListener("click",(function(){l.refs.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),l.refs.modal.addEventListener("click",(function(){l.refs.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),N()}();
//# sourceMappingURL=index.6f80b325.js.map
