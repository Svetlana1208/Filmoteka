!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in s)return s[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var i,a=n("bpxeT"),o=n("2TvXO"),d=n("ebCjK"),c=n("gQOBw"),l=n("7basD"),u=n("4Nugj"),f=(a=n("bpxeT"),o=n("2TvXO"),l=n("7basD"),{}),v=(i=e(a)(e(o).mark((function t(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(l.key,"&language=en-US"));case 2:return s=e.sent,e.next=5,s.json();case 5:return p(e.sent),e.abrupt("return",f);case 8:case"end":return e.stop()}}),t)}))),function(){return i.apply(this,arguments)});function p(e){var t=!0,s=!1,r=void 0;try{for(var n,i=e.genres[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var a=n.value;f[a.id]=a.name}}catch(e){s=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(s)throw r}}}var m,g,h,b,L,_,y,x,w=v,P=n("5g02X"),E=(a=n("bpxeT"),o=n("2TvXO"),u=n("4Nugj"),l=n("7basD"),P=n("5g02X"),n("ePWgG")),k=n("6m2hf"),N=(d=n("ebCjK"),function(t){document.querySelectorAll(".gallery__item").forEach((function(s){s.addEventListener("click",(function(){var r=Number(s.getAttribute("movie-index"));t.forEach((function(t){if(t.id===r){var s='<article class="movie">\n                                <div>\n                                    <img class="movie__poster" src="'.concat(t.posterPath).concat(t.poster_path,'" alt="poster">\n                                </div>\n                                <div class="movie__box">\n                                    <h3 class="movie__title">').concat(t.original_title,'</h3>\n                                    <ul>\n                                        <li class="movie__characteristic">\n                                            <p class="movie__characteristicKey">Vote / Votes</p>\n                                            <div class="vote__average">').concat(t.vote_average,'</div><span>&nbsp / &nbsp</span>\n                                            <div class="vote__count">').concat(t.vote_count,'</div>\n                                        </li>\n                                        <li class="movie__characteristic">\n                                            <p class="movie__characteristicKey">Popularity</p>\n                                            <p class="movie__characteristicValue">').concat(t.popularity,'</p>\n                                        </li>\n                                        <li class="movie__characteristic">\n                                            <p class="movie__characteristicKey">Original Title</p>\n                                            <p class="movie__characteristicValue">').concat(t.original_title,'</p>\n                                        </li>\n                                        <li class="movie__characteristic">\n                                            <p class="movie__characteristicKey">Genre</p>\n                                            <p class="movie__characteristicValue">').concat(t.genre_ids.join(", "),'</p>    \n                                        </li>\n                                    </ul>    \n                                    <p class="movie__about">About</p>\n                                    <p class="movie__description">').concat(t.overview,'</p>\n                                    <div class="movie__btnBox">\n                                        <button class="movie__btn" type="button" data-add-to-watched>add to Watched</button>\n                                        <button class="movie__btn" type="button" data-add-to-queue>add to queue</button>\n                                    </div>\n\n                                    <button class="movie__trailer" type="button" data-trailerModal-button>Trailer</button>\n                                    <div class="backdrop is-hidden" data-trailerModal>\n                                        <div class="trailerBox">\n                                            <button class="trailerBox__closeBtn" type="button" data-trailerClose-button></button>\n                                            <div id="player"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </article>');function n(){u.refs.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")}function i(e){"Escape"===e.code&&n()}function c(e){e.currentTarget===e.target&&n()}function f(){(0,k.setDoc)((0,k.doc)(d.watchedMovies,"".concat(t.id)),t),n()}function v(){(0,k.setDoc)((0,k.doc)(d.queueMovies,"".concat(t.id)),t),n()}function p(){return(p=e(a)(e(o).mark((function s(){var r,n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t.id,"/videos?api_key=").concat(l.key,"&language=en-US"),e.prev=2,e.next=5,(0,P.default)(n);case 5:r=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:r.results.find((function(e){if(e.name.includes("Official"))return m=e.key;m=r.results[0].key}));case 12:case"end":return e.stop()}}),s,null,[[2,8]])})))).apply(this,arguments)}function g(){var t;document.querySelector("[data-trailerModal]").classList.remove("is-hidden"),(t=e(E)("player",{width:"100%",videoId:m,host:"https://www.youtube.com"})).playVideo(),document.querySelector("[data-trailerClose-button]").addEventListener("click",(function(){t.stopVideo(),document.querySelector("[data-trailerModal]").classList.add("is-hidden")}))}u.refs.movieCardBox.innerHTML=s,function(){u.refs.modal.classList.remove("is-hidden"),document.body.classList.add("body-modal-open"),document.querySelector("[data-trailerModal-button]").addEventListener("click",g),window.addEventListener("keydown",i),u.refs.closeModalBtn.addEventListener("click",n),u.refs.modal.addEventListener("click",c),""===u.refs.userLogin.textContent?(document.querySelector("[data-add-to-watched]").classList.add("disabledBtn"),document.querySelector("[data-add-to-queue]").classList.add("disabledBtn")):(document.querySelector("[data-add-to-watched]").addEventListener("click",f),document.querySelector("[data-add-to-queue]").addEventListener("click",v));!function(){p.apply(this,arguments)}()}()}}))}))}))}),M=1;function T(){return A.apply(this,arguments)}function A(){return(A=e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return _="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(l.key),e.next=5,S(1);case 5:I(),K(),X(),O();case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function C(e){var t,s=!0,r=!1,n=void 0;try{for(var i,a=e.results[Symbol.iterator]();!(s=(i=a.next()).done);s=!0){var o=i.value;if(null===o.poster_path?(o.posterPath="https://upload.wikimedia.org/wikipedia/commons/a/a1",o.poster_path="/Out_Of_Poster.jpg"):o.posterPath="https://image.tmdb.org/t/p/w500",o.genre_ids)for(var d=0;d<o.genre_ids.length;d+=1)o.genre_ids[d]=f[o.genre_ids[d]];else o.genre_ids=["absent"];o.release_date&&(t=o.release_date.slice(0,4),o.release_date=t)}}catch(e){r=!0,n=e}finally{try{s||null==a.return||a.return()}finally{if(r)throw n}}}function q(e){u.refs.gallery.innerHTML="";var t=e.map((function(e){return'<li class="gallery__item" movie-index = '.concat(e.id,'>\n            <img class="film__poster" src="').concat(e.posterPath).concat(e.poster_path,'" alt="poster">\n            <h3 class="film__title">').concat(e.original_title.slice(0,60),'</h3>\n            <p class="film__characteristics">').concat(e.genre_ids.join(", ").slice(0,35)," | ").concat(e.release_date,"</p>\n        </li>")})).join("");u.refs.gallery.insertAdjacentHTML("beforeend",t)}function S(e){return B.apply(this,arguments)}function B(){return(B=e(a)(e(o).mark((function t(s){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g=s,y="".concat(_,"&page=").concat(s),e.prev=2,e.next=5,(0,P.default)(y);case 5:0!==(L=e.sent).total_results?(h=L.total_pages,C(L),q(L.results),V(),O(),N(L.results)):(u.refs.searchInfo.textContent="Search result not successful. Enter the correct movie name.",T()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}function H(e){var t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("type","button"),t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),t.setAttribute("onclick","window.location.href='./index.html#gallery'"),u.refs.paginationNumbers.appendChild(t)}function I(){if(u.refs.paginationNumbers.innerHTML="",u.refs.nextButton.classList.remove("is-hidden"),u.refs.prevButton.classList.remove("is-hidden"),L.total_pages>5){u.refs.lastPage.classList.remove("is-hidden"),u.refs.dotsNext.classList.remove("is-hidden");for(var e=M;e<=5;e+=1)H(e)}else{u.refs.lastPage.classList.add("is-hidden"),u.refs.dotsNext.classList.add("is-hidden"),u.refs.firstPage.classList.add("is-hidden"),u.refs.dotsPrev.classList.add("is-hidden");for(var t=M;t<=L.total_pages;t+=1)H(t)}}function O(){document.querySelectorAll(".pagination-number").forEach((function(e){e.classList.remove("is-active"),Number(e.getAttribute("page-index"))===g&&e.classList.add("is-active")}))}function j(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function D(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function V(){1===g?j(u.refs.prevButton):D(u.refs.prevButton),g===h?j(u.refs.nextButton):D(u.refs.nextButton)}function K(){document.querySelectorAll(".pagination-number").forEach((function(e){var t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(function(){S(t)}))}))}function U(e){if(u.refs.paginationNumbers.innerHTML="",g>1&&g<6&&u.refs.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")){for(var t=1;t<6;t+=1)H(t);u.refs.dotsNext.classList.remove("is-hidden"),u.refs.lastPage.classList.remove("is-hidden")}else for(var s=e-5;s<e;s+=1)H(s+1)}function X(){u.refs.firstPage.setAttribute("page-index",1),u.refs.firstPage.setAttribute("aria-label","Page 1"),u.refs.firstPage.innerHTML=1,u.refs.lastPage.setAttribute("page-index",h),u.refs.lastPage.setAttribute("aria-label","Page "+h),u.refs.lastPage.innerHTML=h}function W(){return(W=e(a)(e(o).mark((function t(s){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),u.refs.searchIcon.classList.add("is-hidden"),u.refs.searchSpinner.classList.remove("is-hidden"),u.refs.gallery.innerHTML="",x=s.currentTarget,b=x.elements.searchQuery.value,M=1,u.refs.searchInfo.textContent="",_="https://api.themoviedb.org/3/search/movie?api_key=".concat(l.key,"&query=").concat(b),e.next=11,S(M);case 11:I(),K(),X(),O(),u.refs.searchIcon.classList.remove("is-hidden"),u.refs.searchSpinner.classList.add("is-hidden");case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function F(){u.refs.regModal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open"),R()}function G(e){"Escape"===e.code&&F()}function Q(e){e.currentTarget===e.target&&F()}function R(){u.refs.regInfo.innerHTML="",u.refs.regEmail.value="",u.refs.regPassword.value="",u.refs.regConfirmPassword.value="",u.refs.regEmail.classList.remove("error"),u.refs.regPassword.classList.remove("error"),u.refs.regConfirmPassword.classList.remove("error")}function z(e){e.preventDefault();var t=e.currentTarget.elements,s=t.email,r=t.password,n=t.confirmPassword;return""===s.value?(u.refs.regEmail.classList.add("error"),u.refs.regInfo.innerHTML="Please fill in all the fields!"):""===r.value?(u.refs.regPassword.classList.add("error"),u.refs.regInfo.innerHTML="Please fill in all the fields!"):r.value!==n.value||""===n.value?(u.refs.regPassword.classList.add("error"),u.refs.regConfirmPassword.classList.add("error"),u.refs.regInfo.innerHTML="Enter correct password"):r.value.length<5?u.refs.regInfo.innerHTML="Enter a stronger password":(user={email:s.value,password:r.value},void(0,c.createUserWithEmailAndPassword)(l.auth,user.email,user.password).then((function(e){e.user;u.refs.regModal.classList.add("is-hidden"),R()})).catch((function(e){var t=e.code;return"auth/invalid-email"===t?(u.refs.regEmail.classList.add("error"),u.refs.regInfo.innerHTML="Enter correct email"):"auth/email-already-in-use"===t?(u.refs.regEmail.classList.add("error"),u.refs.regInfo.innerHTML="Such a user already exists"):void 0})))}u.refs.prevButton.addEventListener("click",(function(){!function(e){u.refs.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==u.refs.paginationNumbers.firstElementChild.innerHTML&&(U(e),K());Number(u.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))===h-5&&(u.refs.dotsNext.classList.remove("is-hidden"),u.refs.lastPage.classList.remove("is-hidden"));5===Number(u.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(u.refs.firstPage.classList.add("is-hidden"),u.refs.dotsPrev.classList.add("is-hidden"))}(g-1),S(g-1)})),u.refs.nextButton.addEventListener("click",(function(){!function(e){u.refs.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&Number(u.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))!==h&&(!function(e){if(u.refs.paginationNumbers.innerHTML="",5===g&&6===h){u.refs.dotsPrev.classList.remove("is-hidden");for(var t=e-4;t<g+2;t+=1)H(t)}else if(5===g&&7===h){u.refs.dotsPrev.classList.remove("is-hidden");for(var s=e-3;s<g+3;s+=1)H(s)}else if(5===g&&8===h){u.refs.dotsPrev.classList.remove("is-hidden");for(var r=e-2;r<g+4;r+=1)H(r)}else if(5===g&&9===h){u.refs.dotsPrev.classList.remove("is-hidden");for(var n=e-1;n<g+4;n+=1)H(n)}else for(var i=e;i<e+5;i+=1)H(i)}(e),K());g===h-1&&(U(e),O(),K(currentDataAll));6===Number(u.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(u.refs.firstPage.classList.remove("is-hidden"),u.refs.dotsPrev.classList.remove("is-hidden"));Number(u.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))===h-5&&u.refs.dotsNext.classList.add("is-hidden");Number(u.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))===h-4&&(u.refs.lastPage.classList.add("is-hidden"),u.refs.dotsNext.classList.add("is-hidden"))}(g+1),S(g+1)})),u.refs.firstPage.addEventListener("click",(function(){S(1),I(),K(),u.refs.lastPage.classList.remove("is-hidden"),u.refs.dotsNext.classList.remove("is-hidden"),u.refs.firstPage.classList.add("is-hidden"),u.refs.dotsPrev.classList.add("is-hidden")})),u.refs.lastPage.addEventListener("click",(function(){S(h),U(g),K(),u.refs.dotsNext.classList.add("is-hidden"),u.refs.dotsPrev.classList.remove("is-hidden"),u.refs.firstPage.classList.remove("is-hidden"),u.refs.lastPage.classList.add("is-hidden")})),u.refs.form.addEventListener("submit",(function(e){return W.apply(this,arguments)})),u.refs.regModalOpenBtn.addEventListener("click",(function(){u.refs.regModal.classList.remove("is-hidden"),document.body.classList.add("body-modal-open"),u.refs.regModalCloseBtn.addEventListener("click",F),window.addEventListener("keydown",G),u.refs.regModal.addEventListener("click",Q),u.refs.regForm.addEventListener("submit",z)})),(0,d.default)().then(setTimeout((function(){T()}),1e3))}();
//# sourceMappingURL=index.9f72f575.js.map