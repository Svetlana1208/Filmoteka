var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return s[e]=r,i.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,s){t[e]=s},e.parcelRequired7c6=i);var r=i("hWKZL");i("hWKZL"),r=i("hWKZL");const a={};var n=async()=>{const e=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${r.key}&language=en-US`);return function(e){for(const s of e.genres)a[s.id]=s.name}(await e.json()),a};var d=async e=>{try{const s=await fetch(e);return await s.json()}catch(e){console.error(e)}},o=i("bTcpz");i("bTcpz"),o=i("bTcpz");let l,c=1;let f,u,m,g,h,p;async function b(){await n(),g=`https://api.themoviedb.org/3/trending/movie/day?api_key=${r.key}`,await v(1),P(),x(),A(),y()}async function v(e){l=e,h=`${g}&page=${e}`;try{m=await d(h),0!==m.total_results?(f=m.total_pages,function(e){let s;for(const t of e.results){if(null===t.poster_path?(t.posterPath="https://upload.wikimedia.org/wikipedia/commons/a/a1",t.poster_path="/Out_Of_Poster.jpg"):t.posterPath="https://image.tmdb.org/t/p/w500",t.genre_ids)for(let e=0;e<t.genre_ids.length;e+=1)t.genre_ids[e]=a[t.genre_ids[e]];else t.genre_ids=["absent"];t.release_date&&(s=t.release_date.slice(0,4),t.release_date=s)}}(m),function(e){r.refs.gallery.innerHTML="";const s=e.map((e=>`<li class="gallery__item" movie-index = ${e.id}>\n            <img class="film__poster" src="${e.posterPath}${e.poster_path}" alt="poster">\n            <h3 class="film__title">${e.original_title}</h3>\n            <p class="film__characteristics">${e.genre_ids.join(", ")} | ${e.release_date}</p>\n        </li>`)).join("");r.refs.gallery.insertAdjacentHTML("beforeend",s)}(m.results),function(){1===l?N(r.refs.prevButton):_(r.refs.prevButton);l===f?N(r.refs.nextButton):_(r.refs.nextButton)}(),y(),(0,o.default)(m.results)):(r.refs.searchInfo.textContent="Search result not successful. Enter the correct movie name.",b())}catch(e){console.error(e)}}function L(e){const s=document.createElement("button");s.className="pagination-number",s.innerHTML=e,s.setAttribute("type","button"),s.setAttribute("page-index",e),s.setAttribute("aria-label","Page "+e),s.setAttribute("onclick","window.location.href='./index.html#gallery'"),r.refs.paginationNumbers.appendChild(s)}function P(){if(r.refs.paginationNumbers.innerHTML="",r.refs.nextButton.classList.remove("is-hidden"),r.refs.prevButton.classList.remove("is-hidden"),m.total_pages>5){r.refs.lastPage.classList.remove("is-hidden"),r.refs.dotsNext.classList.remove("is-hidden");for(let e=c;e<=5;e+=1)L(e)}else{r.refs.lastPage.classList.add("is-hidden"),r.refs.dotsNext.classList.add("is-hidden"),r.refs.firstPage.classList.add("is-hidden"),r.refs.dotsPrev.classList.add("is-hidden");for(let e=c;e<=m.total_pages;e+=1)L(e)}}function y(){document.querySelectorAll(".pagination-number").forEach((e=>{e.classList.remove("is-active");Number(e.getAttribute("page-index"))===l&&e.classList.add("is-active")}))}function N(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function _(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}function x(){document.querySelectorAll(".pagination-number").forEach((e=>{const s=Number(e.getAttribute("page-index"));s&&e.addEventListener("click",(()=>{v(s)}))}))}function E(e){if(r.refs.paginationNumbers.innerHTML="",l>1&&l<6&&r.refs.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")){for(let e=1;e<6;e+=1)L(e);r.refs.dotsNext.classList.remove("is-hidden"),r.refs.lastPage.classList.remove("is-hidden")}else for(let s=e-5;s<e;s+=1)L(s+1)}function A(){r.refs.firstPage.setAttribute("page-index",1),r.refs.firstPage.setAttribute("aria-label","Page 1"),r.refs.firstPage.innerHTML=1,r.refs.lastPage.setAttribute("page-index",f),r.refs.lastPage.setAttribute("aria-label","Page "+f),r.refs.lastPage.innerHTML=f}r.refs.prevButton.addEventListener("click",(()=>{!function(e){r.refs.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==r.refs.paginationNumbers.firstElementChild.innerHTML&&(E(e),x());Number(r.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))===f-5&&(r.refs.dotsNext.classList.remove("is-hidden"),r.refs.lastPage.classList.remove("is-hidden"));5===Number(r.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(r.refs.firstPage.classList.add("is-hidden"),r.refs.dotsPrev.classList.add("is-hidden"))}(l-1),v(l-1)})),r.refs.nextButton.addEventListener("click",(()=>{!function(e){r.refs.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&Number(r.refs.paginationNumbers.lastElementChild.getAttribute("page-index"))!==f&&(!function(e){if(r.refs.paginationNumbers.innerHTML="",5===l&&6===f){r.refs.dotsPrev.classList.remove("is-hidden");for(let s=e-4;s<l+2;s+=1)L(s)}else if(5===l&&7===f){r.refs.dotsPrev.classList.remove("is-hidden");for(let s=e-3;s<l+3;s+=1)L(s)}else if(5===l&&8===f){r.refs.dotsPrev.classList.remove("is-hidden");for(let s=e-2;s<l+4;s+=1)L(s)}else if(5===l&&9===f){r.refs.dotsPrev.classList.remove("is-hidden");for(let s=e-1;s<l+4;s+=1)L(s)}else for(let s=e;s<e+5;s+=1)L(s)}(e),x());l===f-1&&(E(e),y(),x(currentDataAll));6===Number(r.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(r.refs.firstPage.classList.remove("is-hidden"),r.refs.dotsPrev.classList.remove("is-hidden"));Number(r.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))===f-5&&r.refs.dotsNext.classList.add("is-hidden");Number(r.refs.paginationNumbers.firstElementChild.getAttribute("page-index"))===f-4&&(r.refs.lastPage.classList.add("is-hidden"),r.refs.dotsNext.classList.add("is-hidden"))}(l+1),v(l+1)})),r.refs.firstPage.addEventListener("click",(function(){v(1),P(),x(),r.refs.lastPage.classList.remove("is-hidden"),r.refs.dotsNext.classList.remove("is-hidden"),r.refs.firstPage.classList.add("is-hidden"),r.refs.dotsPrev.classList.add("is-hidden")})),r.refs.lastPage.addEventListener("click",(function(){v(f),E(l),x(),r.refs.dotsNext.classList.add("is-hidden"),r.refs.dotsPrev.classList.remove("is-hidden"),r.refs.firstPage.classList.remove("is-hidden"),r.refs.lastPage.classList.add("is-hidden")})),r.refs.form.addEventListener("submit",(async function(e){e.preventDefault(),r.refs.searchIcon.classList.add("is-hidden"),r.refs.searchSpinner.classList.remove("is-hidden"),r.refs.gallery.innerHTML="",p=e.currentTarget,u=p.elements.searchQuery.value,c=1,r.refs.searchInfo.textContent="",g=`https://api.themoviedb.org/3/search/movie?api_key=${r.key}&query=${u}`,await v(c),P(),x(),A(),y(),r.refs.searchIcon.classList.remove("is-hidden"),r.refs.searchSpinner.classList.add("is-hidden")})),r.refs.closeModalBtn.addEventListener("click",(()=>{r.refs.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),r.refs.modal.addEventListener("click",(()=>{r.refs.modal.classList.add("is-hidden"),document.body.classList.remove("body-modal-open")})),b();
//# sourceMappingURL=index.d2f49d8a.js.map
