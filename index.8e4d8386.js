const e={};let t,i,n;const a={gallery:document.querySelector(".gallery"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button"),firstPage:document.querySelector(".pagination__firstPage"),dotsPrev:document.querySelector(".pagination__dotsPrev"),lastPage:document.querySelector(".pagination__lastPage"),dotsNext:document.querySelector(".pagination__dotsNext")};function s(){(async function(){const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4273054ff6f056d7541ef873941254f6&language=en-US");return await e.json()})().then((t=>{!function(t){for(const i of t.genres)e[i.id]=i.name}(t),function(e){a.paginationNumbers.innerHTML="",a.firstPage.classList.add("is-hidden"),a.dotsPrev.classList.add("is-hidden");for(let t=e;t<=5;t+=1)d(t)}(1),document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{r(t)}))})),r(1)}))}function r(s){t=s,async function(e){const t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=4273054ff6f056d7541ef873941254f6&page=${e}`);return await t.json()}(s).then((s=>(function(t){let i;for(const n of t.results)if(n.genre_ids)for(let t=0;t<n.genre_ids.length;t+=1)n.genre_ids[t]=e[n.genre_ids[t]],i=n.release_date.slice(0,4),n.release_date=i}(s),function(e){a.gallery.innerHTML="";const t=e.results.map((e=>`<li class="gallery__item">\n            <img class="film__poster" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="poster">\n            <h3 class="film__title">${e.original_title}</h3>\n            <p class="film__characteristics">${e.genre_ids.join(", ")} | ${e.release_date}</p>\n        </li>`)).join("");a.gallery.insertAdjacentHTML("beforeend",t)}(s),function(e){i=1,a.firstPage.setAttribute("page-index",1),a.firstPage.setAttribute("aria-label","Page 1"),a.firstPage.innerHTML=1,n=e.total_pages-1,a.lastPage.setAttribute("page-index",n),a.lastPage.setAttribute("aria-label","Page "+n),a.lastPage.innerHTML=n}(s),function(){1===t?l(a.prevButton):c(a.prevButton);t===n?l(a.nextButton):c(a.nextButton)}(),document.querySelectorAll(".pagination-number").forEach((e=>{e.classList.remove("is-active"),Number(e.getAttribute("page-index"))==t&&e.classList.add("is-active")})),s)))}function d(e){const t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),a.paginationNumbers.appendChild(t)}function o(e){a.paginationNumbers.innerHTML="";for(let t=e-5;t<e;t+=1)d(t+1)}function l(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function c(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}a.prevButton.addEventListener("click",(()=>{!function(e){a.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==a.paginationNumbers.firstElementChild.innerHTML&&(o(e),document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{r(t)}))})));Number(a.paginationNumbers.lastElementChild.getAttribute("page-index"))===n-5&&(a.dotsNext.classList.remove("is-hidden"),a.lastPage.classList.remove("is-hidden"));5===Number(a.paginationNumbers.lastElementChild.getAttribute("page-index"))&&(a.firstPage.classList.add("is-hidden"),a.dotsPrev.classList.add("is-hidden"))}(t-1),r(t-1)})),a.nextButton.addEventListener("click",(()=>{!function(e){a.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&Number(a.paginationNumbers.lastElementChild.getAttribute("page-index"))!==n&&(!function(e){a.paginationNumbers.innerHTML="";for(let t=e;t<e+5;t+=1)d(t)}(e),document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{r(t)}))})));6===Number(a.paginationNumbers.firstElementChild.getAttribute("page-index"))&&(a.firstPage.classList.remove("is-hidden"),a.dotsPrev.classList.remove("is-hidden"));Number(a.paginationNumbers.firstElementChild.getAttribute("page-index"))===n-5&&a.dotsNext.classList.add("is-hidden");Number(a.paginationNumbers.firstElementChild.getAttribute("page-index"))===n-4&&(a.lastPage.classList.add("is-hidden"),a.dotsNext.classList.add("is-hidden"))}(t+1),r(t+1)})),a.firstPage.addEventListener("click",(()=>{s(),a.lastPage.classList.remove("is-hidden"),a.dotsNext.classList.remove("is-hidden")})),a.lastPage.addEventListener("click",(function(){r(n),a.dotsNext.classList.add("is-hidden"),a.dotsPrev.classList.remove("is-hidden"),a.firstPage.classList.remove("is-hidden"),o(t),document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{r(t)}))})),a.lastPage.classList.add("is-hidden")})),window.addEventListener("load",s());
//# sourceMappingURL=index.8e4d8386.js.map