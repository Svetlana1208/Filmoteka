var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,i){s[e]=i},e.parcelRequired7c6=t);var r=t("lO6kD"),n=t("bTcpz");let a,d,l,o,L;function f(){r.refsMyLib.watchedBtn.classList.add("is-active"),r.refsMyLib.queueBtn.classList.remove("is-active"),r.refsMyLib.nextButton.classList.add("is-hidden"),r.refsMyLib.prevButton.classList.add("is-hidden"),r.refsMyLib.lastPage.classList.add("is-hidden"),r.refsMyLib.dotsNext.classList.add("is-hidden"),r.refsMyLib.firstPage.classList.add("is-hidden"),r.refsMyLib.dotsPrev.classList.add("is-hidden"),r.refsMyLib.paginationNumbers.innerHTML="";const e=localStorage.getItem("watchedList");l=JSON.parse(e),o=l,b()}function b(){null!==o?(a=Math.ceil(o.length/20),y(o,1),u(),g(),r.refsMyLib.firstPage.setAttribute("page-index",1),r.refsMyLib.firstPage.setAttribute("aria-label","Page 1"),r.refsMyLib.firstPage.innerHTML=1,r.refsMyLib.lastPage.setAttribute("page-index",a),r.refsMyLib.lastPage.setAttribute("aria-label","Page "+a),r.refsMyLib.lastPage.innerHTML=a,h(o)):(r.refsMyLib.gallery.innerHTML="",r.refsMyLib.information.classList.remove("is-hidden"))}function c(e){const i=document.createElement("button");i.className="pagination-number",i.innerHTML=e,i.setAttribute("type","button"),i.setAttribute("page-index",e),i.setAttribute("aria-label","Page "+e),i.setAttribute("onclick","window.location.href='./myLib.html#myLibGallery'"),r.refsMyLib.paginationNumbers.appendChild(i)}function u(){if(r.refsMyLib.paginationNumbers.innerHTML="",r.refsMyLib.nextButton.classList.remove("is-hidden"),r.refsMyLib.prevButton.classList.remove("is-hidden"),a>5){r.refsMyLib.lastPage.classList.remove("is-hidden"),r.refsMyLib.dotsNext.classList.remove("is-hidden");for(let e=1;e<=5;e+=1)c(e)}else{r.refsMyLib.lastPage.classList.add("is-hidden"),r.refsMyLib.dotsNext.classList.add("is-hidden"),r.refsMyLib.firstPage.classList.add("is-hidden"),r.refsMyLib.dotsPrev.classList.add("is-hidden");for(let e=1;e<=a;e+=1)c(e)}}function y(e,i){r.refsMyLib.information.classList.add("is-hidden"),d=i;const s=20*(i-=1),t=s+20,l=e.slice(s,t);!function(e){r.refsMyLib.gallery.innerHTML="";const i=e.map((e=>`<li class="gallery__item" movie-index = ${e.id}>\n            <img class="film__poster" src="${e.posterPath}${e.poster_path}" alt="poster">\n            <h3 class="film__title">${e.original_title}</h3>\n            <p class="film__characteristics">${e.genre_ids.join(", ")} | ${e.release_date}</p>\n        </li>`)).join("");r.refsMyLib.gallery.insertAdjacentHTML("beforeend",i)}(l),g(),function(){1===d?M(r.refsMyLib.prevButton):m(r.refsMyLib.prevButton);d===a?M(r.refsMyLib.nextButton):m(r.refsMyLib.nextButton)}(),(0,n.default)(l)}function M(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function m(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function g(){document.querySelectorAll(".pagination-number").forEach((e=>{e.classList.remove("is-active");Number(e.getAttribute("page-index"))===d&&e.classList.add("is-active")}))}function h(e){document.querySelectorAll(".pagination-number").forEach((i=>{const s=Number(i.getAttribute("page-index"));s&&i.addEventListener("click",(()=>{y(e,s)}))}))}function v(e){if(r.refsMyLib.paginationNumbers.innerHTML="",d>1&&d<6&&r.refsMyLib.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")){for(let e=1;e<6;e+=1)c(e);r.refsMyLib.dotsNext.classList.remove("is-hidden"),r.refsMyLib.lastPage.classList.remove("is-hidden")}else for(let i=e-5;i<e;i+=1)c(i+1)}r.refsMyLib.watchedBtn.addEventListener("click",f),r.refsMyLib.queueBtn.addEventListener("click",(function(){r.refsMyLib.watchedBtn.classList.remove("is-active"),r.refsMyLib.queueBtn.classList.add("is-active"),r.refsMyLib.nextButton.classList.add("is-hidden"),r.refsMyLib.prevButton.classList.add("is-hidden"),r.refsMyLib.lastPage.classList.add("is-hidden"),r.refsMyLib.dotsNext.classList.add("is-hidden"),r.refsMyLib.firstPage.classList.add("is-hidden"),r.refsMyLib.dotsPrev.classList.add("is-hidden"),r.refsMyLib.paginationNumbers.innerHTML="";const e=localStorage.getItem("queue");L=JSON.parse(e),o=L,b()})),r.refsMyLib.closeModalBtn.addEventListener("click",(()=>{r.refsMyLib.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),r.refsMyLib.modal.addEventListener("click",(()=>{r.refsMyLib.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),r.refsMyLib.prevButton.addEventListener("click",(()=>{!function(e){r.refsMyLib.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==r.refsMyLib.paginationNumbers.firstElementChild.innerHTML&&(v(e),h(o));Number(r.refsMyLib.paginationNumbers.lastElementChild.getAttribute("page-index"))===a-5&&(r.refsMyLib.dotsNext.classList.remove("is-hidden"),r.refsMyLib.lastPage.classList.remove("is-hidden"));5===Number(r.refsMyLib.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(r.refsMyLib.firstPage.classList.add("is-hidden"),r.refsMyLib.dotsPrev.classList.add("is-hidden"))}(d-1),y(o,d-1)})),r.refsMyLib.nextButton.addEventListener("click",(()=>{!function(e){5===d&&r.refsMyLib.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&r.refsMyLib.firstPage.classList.remove("is-hidden");r.refsMyLib.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&e!==a&&(!function(e){if(r.refsMyLib.paginationNumbers.innerHTML="",5===d&&6===a){r.refsMyLib.dotsPrev.classList.remove("is-hidden");for(let i=e-4;i<d+2;i+=1)c(i)}else if(5===d&&7===a){r.refsMyLib.dotsPrev.classList.remove("is-hidden");for(let i=e-3;i<d+3;i+=1)c(i)}else if(5===d&&8===a){r.refsMyLib.dotsPrev.classList.remove("is-hidden");for(let i=e-2;i<d+4;i+=1)c(i)}else if(5===d&&9===a){r.refsMyLib.dotsPrev.classList.remove("is-hidden");for(let i=e-1;i<d+4;i+=1)c(i)}else if(d===a)for(let i=e-5;i<e;i+=1)c(i+1);else for(let i=e;i<e+5;i+=1)c(i)}(e),h(o));d===a-1&&a>7&&(v(e),g(),h(o));6===Number(r.refsMyLib.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(r.refsMyLib.firstPage.classList.remove("is-hidden"),r.refsMyLib.dotsPrev.classList.remove("is-hidden"));Number(r.refsMyLib.paginationNumbers.firstElementChild.getAttribute("page-index"))===a-5&&5!==Number(r.refsMyLib.paginationNumbers.lastElementChild.getAttribute("page-index"))&&r.refsMyLib.dotsNext.classList.add("is-hidden");Number(r.refsMyLib.paginationNumbers.firstElementChild.getAttribute("page-index"))===a-4&&(r.refsMyLib.lastPage.classList.add("is-hidden"),r.refsMyLib.dotsNext.classList.add("is-hidden"))}(d+1),y(o,d+1)})),r.refsMyLib.firstPage.addEventListener("click",(function(){y(o,1),u(),h(o),g(),r.refsMyLib.lastPage.classList.remove("is-hidden"),r.refsMyLib.dotsNext.classList.remove("is-hidden"),r.refsMyLib.firstPage.classList.add("is-hidden"),r.refsMyLib.dotsPrev.classList.add("is-hidden")})),r.refsMyLib.lastPage.addEventListener("click",(function(){y(o,a),v(d),h(o),g(),r.refsMyLib.dotsNext.classList.add("is-hidden"),r.refsMyLib.dotsPrev.classList.remove("is-hidden"),r.refsMyLib.firstPage.classList.remove("is-hidden"),r.refsMyLib.lastPage.classList.add("is-hidden")})),f();
//# sourceMappingURL=myLib.eb9ba995.js.map
