!function(){var e,t,i,a,s,n={watchedBtn:document.querySelector("[data-watched-button]"),queueBtn:document.querySelector("[data-queue-button]"),gallery:document.querySelector(".myLibGallery"),information:document.querySelector(".information"),movieCardBox:document.querySelector(".movieCard__box"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext")},o={gallery:document.querySelector(".gallery"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext"),form:document.querySelector(".search__form"),searchIcon:document.querySelector(".search__icon"),searchSpinner:document.querySelector(".spinner"),searchInfo:document.querySelector(".search__info"),movieCardBox:document.querySelector(".movieCard__box"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]")},d=function(e){document.querySelectorAll(".gallery__item").forEach((function(t){t.addEventListener("click",(function(){var i=Number(t.getAttribute("movie-index"));e.forEach((function(e){if(e.id===i){var t=e,a='<article class="movie">\n                            <div>\n                                <img class="movie__poster" src="'.concat(t.posterPath).concat(t.poster_path,'" alt="poster">\n                            </div>\n                            <div class="movie__box">\n                                <h3 class="movie__title">').concat(t.original_title,'</h3>\n                                <ul>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Vote / Votes</p>\n                                        <div class="vote__average">').concat(t.vote_average,'</div><span>&nbsp / &nbsp</span>\n                                        <div class="vote__count">').concat(t.vote_count,'</div>\n                                    </li>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Popularity</p>\n                                        <p class="movie__characteristicValue">').concat(t.popularity,'</p>\n                                    </li>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Original Title</p>\n                                        <p class="movie__characteristicValue">').concat(t.original_title,'</p>\n                                    </li>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Genre</p>\n                                        <p class="movie__characteristicValue">').concat(t.genre_ids.join(", "),'</p>    \n                                    </li>\n                                </ul>    \n                                <p class="movie__about">About</p>\n                                <p class="movie__description">').concat(t.overview,'</p>\n                                <div class="movie__btnBox">\n                                    <button class="movie__btn is-active" type="button" data-add-to-watched>add to Watched</button>\n                                    <button class="movie__btn" type="button" data-add-to-queue>add to queue</button>\n                                </div>\n                            </div>\n                        </article>');o.movieCardBox.innerHTML=a,o.modal.classList.remove("is-hidden"),n.movieCardBox.innerHTML=a,n.modal.classList.remove("is-hidden"),document.body.classList.add("body-modal-open"),document.querySelector("[data-add-to-watched]").addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("watchedList"))||[];if(e.some((function(e){return e.id===t.id})))return;e.push(t),localStorage.setItem("watchedList",JSON.stringify(e))})),document.querySelector("[data-add-to-queue]").addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("queue"))||[];if(e.some((function(e){return e.id===t.id})))return;e.push(t),localStorage.setItem("queue",JSON.stringify(e))}))}}))}))}))};function r(){n.watchedBtn.classList.add("is-active"),n.queueBtn.classList.remove("is-active"),n.nextButton.classList.add("is-hidden"),n.prevButton.classList.add("is-hidden"),n.lastPage.classList.add("is-hidden"),n.dotsNext.classList.add("is-hidden"),n.firstPage.classList.add("is-hidden"),n.dotsPrev.classList.add("is-hidden"),n.paginationNumbers.innerHTML="";var e=localStorage.getItem("watchedList");i=JSON.parse(e),a=i,c()}function c(){null!==a?(e=Math.ceil(a.length/20),m(a,1),u(),p(),n.firstPage.setAttribute("page-index",1),n.firstPage.setAttribute("aria-label","Page 1"),n.firstPage.innerHTML=1,n.lastPage.setAttribute("page-index",e),n.lastPage.setAttribute("aria-label","Page "+e),n.lastPage.innerHTML=e,h(a)):(n.gallery.innerHTML="",n.information.classList.remove("is-hidden"))}function l(e){var t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("type","button"),t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),t.setAttribute("onclick","window.location.href='./myLib.html#myLibGallery'"),n.paginationNumbers.appendChild(t)}function u(){if(n.paginationNumbers.innerHTML="",n.nextButton.classList.remove("is-hidden"),n.prevButton.classList.remove("is-hidden"),e>5){n.lastPage.classList.remove("is-hidden"),n.dotsNext.classList.remove("is-hidden");for(var t=1;t<=5;t+=1)l(t)}else{n.lastPage.classList.add("is-hidden"),n.dotsNext.classList.add("is-hidden"),n.firstPage.classList.add("is-hidden"),n.dotsPrev.classList.add("is-hidden");for(var i=1;i<=e;i+=1)l(i)}}function m(i,a){n.information.classList.add("is-hidden"),t=a;var s=20*(a-=1),o=s+20,r=i.slice(s,o);!function(e){n.gallery.innerHTML="";var t=e.map((function(e){return'<li class="gallery__item" movie-index = '.concat(e.id,'>\n            <img class="film__poster" src="').concat(e.posterPath).concat(e.poster_path,'" alt="poster">\n            <h3 class="film__title">').concat(e.original_title,'</h3>\n            <p class="film__characteristics">').concat(e.genre_ids.join(", ")," | ").concat(e.release_date,"</p>\n        </li>")})).join("");n.gallery.insertAdjacentHTML("beforeend",t)}(r),p(),function(){1===t?v(n.prevButton):g(n.prevButton);t===e?v(n.nextButton):g(n.nextButton)}(),d(r)}function v(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function g(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function p(){document.querySelectorAll(".pagination-number").forEach((function(e){e.classList.remove("is-active"),Number(e.getAttribute("page-index"))===t&&e.classList.add("is-active")}))}function h(e){document.querySelectorAll(".pagination-number").forEach((function(t){var i=Number(t.getAttribute("page-index"));i&&t.addEventListener("click",(function(){m(e,i)}))}))}function f(e){if(n.paginationNumbers.innerHTML="",t>1&&t<6&&n.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")){for(var i=1;i<6;i+=1)l(i);n.dotsNext.classList.remove("is-hidden"),n.lastPage.classList.remove("is-hidden")}else for(var a=e-5;a<e;a+=1)l(a+1)}n.watchedBtn.addEventListener("click",r),n.queueBtn.addEventListener("click",(function(){n.watchedBtn.classList.remove("is-active"),n.queueBtn.classList.add("is-active"),n.nextButton.classList.add("is-hidden"),n.prevButton.classList.add("is-hidden"),n.lastPage.classList.add("is-hidden"),n.dotsNext.classList.add("is-hidden"),n.firstPage.classList.add("is-hidden"),n.dotsPrev.classList.add("is-hidden"),n.paginationNumbers.innerHTML="";var e=localStorage.getItem("queue");s=JSON.parse(e),a=s,c()})),n.closeModalBtn.addEventListener("click",(function(){n.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),n.modal.addEventListener("click",(function(){n.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),n.prevButton.addEventListener("click",(function(){!function(t){n.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==n.paginationNumbers.firstElementChild.innerHTML&&(f(t),h(a));Number(n.paginationNumbers.lastElementChild.getAttribute("page-index"))===e-5&&(n.dotsNext.classList.remove("is-hidden"),n.lastPage.classList.remove("is-hidden"));5===Number(n.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(n.firstPage.classList.add("is-hidden"),n.dotsPrev.classList.add("is-hidden"))}(t-1),m(a,t-1)})),n.nextButton.addEventListener("click",(function(){!function(i){5===t&&n.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&n.firstPage.classList.remove("is-hidden");n.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&i!==e&&(!function(i){if(n.paginationNumbers.innerHTML="",5===t&&6===e){n.dotsPrev.classList.remove("is-hidden");for(var a=i-4;a<t+2;a+=1)l(a)}else if(5===t&&7===e){n.dotsPrev.classList.remove("is-hidden");for(var s=i-3;s<t+3;s+=1)l(s)}else if(5===t&&8===e){n.dotsPrev.classList.remove("is-hidden");for(var o=i-2;o<t+4;o+=1)l(o)}else if(5===t&&9===e){n.dotsPrev.classList.remove("is-hidden");for(var d=i-1;d<t+4;d+=1)l(d)}else if(t===e)for(var r=i-5;r<i;r+=1)l(r+1);else for(var c=i;c<i+5;c+=1)l(c)}(i),h(a));t===e-1&&e>7&&(f(i),p(),h(a));6===Number(n.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(n.firstPage.classList.remove("is-hidden"),n.dotsPrev.classList.remove("is-hidden"));Number(n.paginationNumbers.firstElementChild.getAttribute("page-index"))===e-5&&5!==Number(n.paginationNumbers.lastElementChild.getAttribute("page-index"))&&n.dotsNext.classList.add("is-hidden");Number(n.paginationNumbers.firstElementChild.getAttribute("page-index"))===e-4&&(n.lastPage.classList.add("is-hidden"),n.dotsNext.classList.add("is-hidden"))}(t+1),m(a,t+1)})),n.firstPage.addEventListener("click",(function(){m(a,1),u(),h(a),p(),n.lastPage.classList.remove("is-hidden"),n.dotsNext.classList.remove("is-hidden"),n.firstPage.classList.add("is-hidden"),n.dotsPrev.classList.add("is-hidden")})),n.lastPage.addEventListener("click",(function(){m(a,e),f(t),h(a),p(),n.dotsNext.classList.add("is-hidden"),n.dotsPrev.classList.remove("is-hidden"),n.firstPage.classList.remove("is-hidden"),n.lastPage.classList.add("is-hidden")})),r()}();
//# sourceMappingURL=myLib.6d24e3a3.js.map
