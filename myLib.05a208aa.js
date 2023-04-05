const e={watchedBtn:document.querySelector("[data-watched-button]"),queueBtn:document.querySelector("[data-queue-button]"),gallery:document.querySelector(".myLibGallery"),information:document.querySelector(".information"),movieCardBox:document.querySelector(".movieCard__box"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext")},t={gallery:document.querySelector(".gallery"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext"),form:document.querySelector(".search__form"),searchIcon:document.querySelector(".search__icon"),searchSpinner:document.querySelector(".spinner"),searchInfo:document.querySelector(".search__info"),movieCardBox:document.querySelector(".movieCard__box"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]")};var i=i=>{document.querySelectorAll(".gallery__item").forEach((s=>{s.addEventListener("click",(()=>{const a=Number(s.getAttribute("movie-index"));i.forEach((i=>{if(i.id===a){const s=i,a=`<article class="movie">\n                            <div>\n                                <img class="movie__poster" src="${s.posterPath}${s.poster_path}" alt="poster">\n                            </div>\n                            <div class="movie__box">\n                                <h3 class="movie__title">${s.original_title}</h3>\n                                <ul>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Vote / Votes</p>\n                                        <div class="vote__average">${s.vote_average}</div><span>&nbsp / &nbsp</span>\n                                        <div class="vote__count">${s.vote_count}</div>\n                                    </li>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Popularity</p>\n                                        <p class="movie__characteristicValue">${s.popularity}</p>\n                                    </li>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Original Title</p>\n                                        <p class="movie__characteristicValue">${s.original_title}</p>\n                                    </li>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Genre</p>\n                                        <p class="movie__characteristicValue">${s.genre_ids.join(", ")}</p>    \n                                    </li>\n                                </ul>    \n                                <p class="movie__about">About</p>\n                                <p class="movie__description">${s.overview}</p>\n                                <div class="movie__btnBox">\n                                    <button class="movie__btn is-active" type="button" data-add-to-watched>add to Watched</button>\n                                    <button class="movie__btn" type="button" data-add-to-queue>add to queue</button>\n                                </div>\n                            </div>\n                        </article>`;t.movieCardBox.innerHTML=a,t.modal.classList.remove("is-hidden"),e.movieCardBox.innerHTML=a,e.modal.classList.remove("is-hidden"),document.body.classList.add("body-modal-open"),document.querySelector("[data-add-to-watched]").addEventListener("click",(function(){const e=JSON.parse(localStorage.getItem("watchedList"))||[];e.push(s),localStorage.setItem("watchedList",JSON.stringify(e))})),document.querySelector("[data-add-to-queue]").addEventListener("click",(function(){const e=JSON.parse(localStorage.getItem("queue"))||[];e.push(s),localStorage.setItem("queue",JSON.stringify(e))}))}}))}))}))};let s,a,n,d,o;function r(){e.watchedBtn.classList.add("is-active"),e.queueBtn.classList.remove("is-active"),e.nextButton.classList.add("is-hidden"),e.prevButton.classList.add("is-hidden"),e.lastPage.classList.add("is-hidden"),e.dotsNext.classList.add("is-hidden"),e.firstPage.classList.add("is-hidden"),e.dotsPrev.classList.add("is-hidden"),e.paginationNumbers.innerHTML="";const t=localStorage.getItem("watchedList");n=JSON.parse(t),d=n,c()}function c(){null!==d?(s=Math.ceil(d.length/20),m(d,1),u(),p(),e.firstPage.setAttribute("page-index",1),e.firstPage.setAttribute("aria-label","Page 1"),e.firstPage.innerHTML=1,e.lastPage.setAttribute("page-index",s),e.lastPage.setAttribute("aria-label","Page "+s),e.lastPage.innerHTML=s,h(d)):(e.gallery.innerHTML="",e.information.classList.remove("is-hidden"))}function l(t){const i=document.createElement("button");i.className="pagination-number",i.innerHTML=t,i.setAttribute("type","button"),i.setAttribute("page-index",t),i.setAttribute("aria-label","Page "+t),i.setAttribute("onclick","window.location.href='./myLib.html#myLibGallery'"),e.paginationNumbers.appendChild(i)}function u(){if(e.paginationNumbers.innerHTML="",e.nextButton.classList.remove("is-hidden"),e.prevButton.classList.remove("is-hidden"),s>5){e.lastPage.classList.remove("is-hidden"),e.dotsNext.classList.remove("is-hidden");for(let e=1;e<=5;e+=1)l(e)}else{e.lastPage.classList.add("is-hidden"),e.dotsNext.classList.add("is-hidden"),e.firstPage.classList.add("is-hidden"),e.dotsPrev.classList.add("is-hidden");for(let e=1;e<=s;e+=1)l(e)}}function m(t,n){e.information.classList.add("is-hidden"),a=n;const d=20*(n-=1),o=d+20,r=t.slice(d,o);!function(t){e.gallery.innerHTML="";const i=t.map((e=>`<li class="gallery__item" movie-index = ${e.id}>\n            <img class="film__poster" src="${e.posterPath}${e.poster_path}" alt="poster">\n            <h3 class="film__title">${e.original_title}</h3>\n            <p class="film__characteristics">${e.genre_ids.join(", ")} | ${e.release_date}</p>\n        </li>`)).join("");e.gallery.insertAdjacentHTML("beforeend",i)}(r),p(),function(){1===a?g(e.prevButton):v(e.prevButton);a===s?g(e.nextButton):v(e.nextButton)}(),i(r)}function g(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function v(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function p(){document.querySelectorAll(".pagination-number").forEach((e=>{e.classList.remove("is-active");Number(e.getAttribute("page-index"))===a&&e.classList.add("is-active")}))}function h(e){document.querySelectorAll(".pagination-number").forEach((t=>{const i=Number(t.getAttribute("page-index"));i&&t.addEventListener("click",(()=>{m(e,i)}))}))}function b(t){if(e.paginationNumbers.innerHTML="",a>1&&a<6&&e.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")){for(let e=1;e<6;e+=1)l(e);e.dotsNext.classList.remove("is-hidden"),e.lastPage.classList.remove("is-hidden")}else for(let e=t-5;e<t;e+=1)l(e+1)}e.watchedBtn.addEventListener("click",r),e.queueBtn.addEventListener("click",(function(){e.watchedBtn.classList.remove("is-active"),e.queueBtn.classList.add("is-active"),e.nextButton.classList.add("is-hidden"),e.prevButton.classList.add("is-hidden"),e.lastPage.classList.add("is-hidden"),e.dotsNext.classList.add("is-hidden"),e.firstPage.classList.add("is-hidden"),e.dotsPrev.classList.add("is-hidden"),e.paginationNumbers.innerHTML="";const t=localStorage.getItem("queue");o=JSON.parse(t),d=o,c()})),e.closeModalBtn.addEventListener("click",(()=>{e.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),e.modal.addEventListener("click",(()=>{e.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),e.prevButton.addEventListener("click",(()=>{!function(t){e.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==e.paginationNumbers.firstElementChild.innerHTML&&(b(t),h(d));Number(e.paginationNumbers.lastElementChild.getAttribute("page-index"))===s-5&&(e.dotsNext.classList.remove("is-hidden"),e.lastPage.classList.remove("is-hidden"));5===Number(e.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(e.firstPage.classList.add("is-hidden"),e.dotsPrev.classList.add("is-hidden"))}(a-1),m(d,a-1)})),e.nextButton.addEventListener("click",(()=>{!function(t){5===a&&e.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&e.firstPage.classList.remove("is-hidden");e.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&t!==s&&(!function(t){if(e.paginationNumbers.innerHTML="",5===a&&6===s){e.dotsPrev.classList.remove("is-hidden");for(let e=t-4;e<a+2;e+=1)l(e)}else if(5===a&&7===s){e.dotsPrev.classList.remove("is-hidden");for(let e=t-3;e<a+3;e+=1)l(e)}else if(5===a&&8===s){e.dotsPrev.classList.remove("is-hidden");for(let e=t-2;e<a+4;e+=1)l(e)}else if(5===a&&9===s){e.dotsPrev.classList.remove("is-hidden");for(let e=t-1;e<a+4;e+=1)l(e)}else if(a===s)for(let e=t-5;e<t;e+=1)l(e+1);else for(let e=t;e<t+5;e+=1)l(e)}(t),h(d));a===s-1&&s>7&&(b(t),p(),h(d));6===Number(e.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(e.firstPage.classList.remove("is-hidden"),e.dotsPrev.classList.remove("is-hidden"));Number(e.paginationNumbers.firstElementChild.getAttribute("page-index"))===s-5&&5!==Number(e.paginationNumbers.lastElementChild.getAttribute("page-index"))&&e.dotsNext.classList.add("is-hidden");Number(e.paginationNumbers.firstElementChild.getAttribute("page-index"))===s-4&&(e.lastPage.classList.add("is-hidden"),e.dotsNext.classList.add("is-hidden"))}(a+1),m(d,a+1)})),e.firstPage.addEventListener("click",(function(){m(d,1),u(),h(d),p(),e.lastPage.classList.remove("is-hidden"),e.dotsNext.classList.remove("is-hidden"),e.firstPage.classList.add("is-hidden"),e.dotsPrev.classList.add("is-hidden")})),e.lastPage.addEventListener("click",(function(){m(d,s),b(a),h(d),p(),e.dotsNext.classList.add("is-hidden"),e.dotsPrev.classList.remove("is-hidden"),e.firstPage.classList.remove("is-hidden"),e.lastPage.classList.add("is-hidden")})),r();
//# sourceMappingURL=myLib.05a208aa.js.map