function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r.register("lO6kD",(function(t,o){e(t.exports,"refsMyLib",(function(){return n}));const n={watchedBtn:document.querySelector("[data-watched-button]"),queueBtn:document.querySelector("[data-queue-button]"),gallery:document.querySelector(".myLibGallery"),information:document.querySelector(".information"),movieCardBox:document.querySelector(".movieCard__box"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext")}})),r.register("bTcpz",(function(t,o){e(t.exports,"movie",(function(){return s})),e(t.exports,"default",(function(){return u}));var n=r("lO6kD"),a=r("hWKZL"),i=r("9IiBV"),c=r("edpgF");let s,l;var u=e=>{document.querySelectorAll(".gallery__item").forEach((t=>{t.addEventListener("click",(()=>{l=Number(t.getAttribute("movie-index")),e.forEach((e=>{if(e.id===l){s=e;const t=`<article class="movie">\n                            <div>\n                                <img class="movie__poster" src="${s.posterPath}${s.poster_path}" alt="poster">\n                            </div>\n                            <div class="movie__box">\n                                <h3 class="movie__title">${s.original_title}</h3>\n                                <ul>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Vote / Votes</p>\n                                        <div class="vote__average">${s.vote_average}</div><span>&nbsp / &nbsp</span>\n                                        <div class="vote__count">${s.vote_count}</div>\n                                    </li>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Popularity</p>\n                                        <p class="movie__characteristicValue">${s.popularity}</p>\n                                    </li>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Original Title</p>\n                                        <p class="movie__characteristicValue">${s.original_title}</p>\n                                    </li>\n                                    <li class="movie__characteristic">\n                                        <p class="movie__characteristicKey">Genre</p>\n                                        <p class="movie__characteristicValue">${s.genre_ids.join(", ")}</p>    \n                                    </li>\n                                </ul>    \n                                <p class="movie__about">About</p>\n                                <p class="movie__description">${s.overview}</p>\n                                <div class="movie__btnBox">\n                                    <button class="movie__btn is-active" type="button" data-add-to-watched>add to Watched</button>\n                                    <button class="movie__btn" type="button" data-add-to-queue>add to queue</button>\n                                </div>\n                            </div>\n                        </article>`;a.refs.movieCardBox.innerHTML=t,a.refs.modal.classList.remove("is-hidden"),n.refsMyLib.movieCardBox.innerHTML=t,n.refsMyLib.modal.classList.remove("is-hidden"),document.body.classList.add("body-modal-open"),document.querySelector("[data-add-to-watched]").addEventListener("click",(0,i.default)()),document.querySelector("[data-add-to-queue]").addEventListener("click",(0,c.default)())}}))}))}))}})),r.register("hWKZL",(function(t,o){e(t.exports,"refs",(function(){return n})),e(t.exports,"key",(function(){return r}));const n={gallery:document.querySelector(".gallery"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext"),form:document.querySelector(".search__form"),searchIcon:document.querySelector(".search__icon"),searchSpinner:document.querySelector(".spinner"),searchInfo:document.querySelector(".search__info"),movieCardBox:document.querySelector(".movieCard__box"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]")},r="4273054ff6f056d7541ef873941254f6"})),r.register("9IiBV",(function(t,o){e(t.exports,"default",(function(){return a}));var n=r("bTcpz");var a=()=>{const e=JSON.parse(localStorage.getItem("watchedList"))||[];e.push(n.movie),localStorage.setItem("watchedList",JSON.stringify(e))}})),r.register("edpgF",(function(t,o){e(t.exports,"default",(function(){return a}));var n=r("bTcpz");var a=()=>{const e=JSON.parse(localStorage.getItem("queue"))||[];e.push(n.movie),localStorage.setItem("queue",JSON.stringify(e))}}));
//# sourceMappingURL=myLib.70940acd.js.map