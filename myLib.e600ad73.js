!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,i){s[e]=i},e.parcelRequired7c6=t);var r,n,a,d,o,l=t("kYN5b"),f=t("5xtVg");function c(){l.refsMyLib.watchedBtn.classList.add("is-active"),l.refsMyLib.queueBtn.classList.remove("is-active"),l.refsMyLib.nextButton.classList.add("is-hidden"),l.refsMyLib.prevButton.classList.add("is-hidden"),l.refsMyLib.lastPage.classList.add("is-hidden"),l.refsMyLib.dotsNext.classList.add("is-hidden"),l.refsMyLib.firstPage.classList.add("is-hidden"),l.refsMyLib.dotsPrev.classList.add("is-hidden"),l.refsMyLib.paginationNumbers.innerHTML="";var e=localStorage.getItem("watchedList");a=JSON.parse(e),d=a,L()}function L(){null!==d?(r=Math.ceil(d.length/20),y(d,1),u(),g(),l.refsMyLib.firstPage.setAttribute("page-index",1),l.refsMyLib.firstPage.setAttribute("aria-label","Page 1"),l.refsMyLib.firstPage.innerHTML=1,l.refsMyLib.lastPage.setAttribute("page-index",r),l.refsMyLib.lastPage.setAttribute("aria-label","Page "+r),l.refsMyLib.lastPage.innerHTML=r,v(d)):(l.refsMyLib.gallery.innerHTML="",l.refsMyLib.information.classList.remove("is-hidden"))}function b(e){var i=document.createElement("button");i.className="pagination-number",i.innerHTML=e,i.setAttribute("type","button"),i.setAttribute("page-index",e),i.setAttribute("aria-label","Page "+e),i.setAttribute("onclick","window.location.href='./myLib.html#myLibGallery'"),l.refsMyLib.paginationNumbers.appendChild(i)}function u(){if(l.refsMyLib.paginationNumbers.innerHTML="",l.refsMyLib.nextButton.classList.remove("is-hidden"),l.refsMyLib.prevButton.classList.remove("is-hidden"),r>5){l.refsMyLib.lastPage.classList.remove("is-hidden"),l.refsMyLib.dotsNext.classList.remove("is-hidden");for(var e=1;e<=5;e+=1)b(e)}else{l.refsMyLib.lastPage.classList.add("is-hidden"),l.refsMyLib.dotsNext.classList.add("is-hidden"),l.refsMyLib.firstPage.classList.add("is-hidden"),l.refsMyLib.dotsPrev.classList.add("is-hidden");for(var i=1;i<=r;i+=1)b(i)}}function y(e,i){l.refsMyLib.information.classList.add("is-hidden"),n=i;var s=20*(i-=1),t=s+20,a=e.slice(s,t);!function(e){l.refsMyLib.gallery.innerHTML="";var i=e.map((function(e){return'<li class="gallery__item" movie-index = '.concat(e.id,'>\n            <img class="film__poster" src="').concat(e.posterPath).concat(e.poster_path,'" alt="poster">\n            <h3 class="film__title">').concat(e.original_title,'</h3>\n            <p class="film__characteristics">').concat(e.genre_ids.join(", ")," | ").concat(e.release_date,"</p>\n        </li>")})).join("");l.refsMyLib.gallery.insertAdjacentHTML("beforeend",i)}(a),g(),function(){1===n?M(l.refsMyLib.prevButton):m(l.refsMyLib.prevButton);n===r?M(l.refsMyLib.nextButton):m(l.refsMyLib.nextButton)}(),(0,f.default)(a)}function M(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function m(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function g(){document.querySelectorAll(".pagination-number").forEach((function(e){e.classList.remove("is-active"),Number(e.getAttribute("page-index"))===n&&e.classList.add("is-active")}))}function v(e){document.querySelectorAll(".pagination-number").forEach((function(i){var s=Number(i.getAttribute("page-index"));s&&i.addEventListener("click",(function(){y(e,s)}))}))}function h(e){if(l.refsMyLib.paginationNumbers.innerHTML="",n>1&&n<6&&l.refsMyLib.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")){for(var i=1;i<6;i+=1)b(i);l.refsMyLib.dotsNext.classList.remove("is-hidden"),l.refsMyLib.lastPage.classList.remove("is-hidden")}else for(var s=e-5;s<e;s+=1)b(s+1)}l.refsMyLib.watchedBtn.addEventListener("click",c),l.refsMyLib.queueBtn.addEventListener("click",(function(){l.refsMyLib.watchedBtn.classList.remove("is-active"),l.refsMyLib.queueBtn.classList.add("is-active"),l.refsMyLib.nextButton.classList.add("is-hidden"),l.refsMyLib.prevButton.classList.add("is-hidden"),l.refsMyLib.lastPage.classList.add("is-hidden"),l.refsMyLib.dotsNext.classList.add("is-hidden"),l.refsMyLib.firstPage.classList.add("is-hidden"),l.refsMyLib.dotsPrev.classList.add("is-hidden"),l.refsMyLib.paginationNumbers.innerHTML="";var e=localStorage.getItem("queue");o=JSON.parse(e),d=o,L()})),l.refsMyLib.closeModalBtn.addEventListener("click",(function(){l.refsMyLib.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),l.refsMyLib.modal.addEventListener("click",(function(){l.refsMyLib.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),l.refsMyLib.prevButton.addEventListener("click",(function(){!function(e){l.refsMyLib.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==l.refsMyLib.paginationNumbers.firstElementChild.innerHTML&&(h(e),v(d));Number(l.refsMyLib.paginationNumbers.lastElementChild.getAttribute("page-index"))===r-5&&(l.refsMyLib.dotsNext.classList.remove("is-hidden"),l.refsMyLib.lastPage.classList.remove("is-hidden"));5===Number(l.refsMyLib.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(l.refsMyLib.firstPage.classList.add("is-hidden"),l.refsMyLib.dotsPrev.classList.add("is-hidden"))}(n-1),y(d,n-1)})),l.refsMyLib.nextButton.addEventListener("click",(function(){!function(e){5===n&&l.refsMyLib.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&l.refsMyLib.firstPage.classList.remove("is-hidden");l.refsMyLib.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&e!==r&&(!function(e){if(l.refsMyLib.paginationNumbers.innerHTML="",5===n&&6===r){l.refsMyLib.dotsPrev.classList.remove("is-hidden");for(var i=e-4;i<n+2;i+=1)b(i)}else if(5===n&&7===r){l.refsMyLib.dotsPrev.classList.remove("is-hidden");for(var s=e-3;s<n+3;s+=1)b(s)}else if(5===n&&8===r){l.refsMyLib.dotsPrev.classList.remove("is-hidden");for(var t=e-2;t<n+4;t+=1)b(t)}else if(5===n&&9===r){l.refsMyLib.dotsPrev.classList.remove("is-hidden");for(var a=e-1;a<n+4;a+=1)b(a)}else if(n===r)for(var d=e-5;d<e;d+=1)b(d+1);else for(var o=e;o<e+5;o+=1)b(o)}(e),v(d));n===r-1&&r>7&&(h(e),g(),v(d));6===Number(l.refsMyLib.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(l.refsMyLib.firstPage.classList.remove("is-hidden"),l.refsMyLib.dotsPrev.classList.remove("is-hidden"));Number(l.refsMyLib.paginationNumbers.firstElementChild.getAttribute("page-index"))===r-5&&5!==Number(l.refsMyLib.paginationNumbers.lastElementChild.getAttribute("page-index"))&&l.refsMyLib.dotsNext.classList.add("is-hidden");Number(l.refsMyLib.paginationNumbers.firstElementChild.getAttribute("page-index"))===r-4&&(l.refsMyLib.lastPage.classList.add("is-hidden"),l.refsMyLib.dotsNext.classList.add("is-hidden"))}(n+1),y(d,n+1)})),l.refsMyLib.firstPage.addEventListener("click",(function(){y(d,1),u(),v(d),g(),l.refsMyLib.lastPage.classList.remove("is-hidden"),l.refsMyLib.dotsNext.classList.remove("is-hidden"),l.refsMyLib.firstPage.classList.add("is-hidden"),l.refsMyLib.dotsPrev.classList.add("is-hidden")})),l.refsMyLib.lastPage.addEventListener("click",(function(){y(d,r),h(n),v(d),g(),l.refsMyLib.dotsNext.classList.add("is-hidden"),l.refsMyLib.dotsPrev.classList.remove("is-hidden"),l.refsMyLib.firstPage.classList.remove("is-hidden"),l.refsMyLib.lastPage.classList.add("is-hidden")})),c()}();
//# sourceMappingURL=myLib.e600ad73.js.map
