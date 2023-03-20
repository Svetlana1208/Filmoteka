const e={};let t;const n={gallery:document.querySelector(".gallery"),paginationNumbers:document.querySelector(".pagination__current"),nextButton:document.getElementById("next-button"),prevButton:document.getElementById("prev-button")};async function i(i){t=i,document.querySelectorAll(".pagination-number").forEach((e=>{e.classList.remove("is-active"),Number(e.getAttribute("page-index"))==t&&e.classList.add("is-active")}));const a=await async function(e){const t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=4273054ff6f056d7541ef873941254f6&page=${e}`);return await t.json()}(i);!function(t){let n;for(pop of t.results)for(let t=0;t<pop.genre_ids.length;t+=1)pop.genre_ids[t]=e[pop.genre_ids[t]],n=pop.release_date.slice(0,4),pop.release_date=n}(a),n.gallery.innerHTML="",function(e){markup=e.results.map((e=>`<li class="gallery__item">\n            <img class="film__poster" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="poster">\n            <h3 class="film__title">${e.original_title}</h3>\n            <p class="film__characteristics">${e.genre_ids.join(", ")} | ${e.release_date}</p>\n        </li>`)).join(""),n.gallery.insertAdjacentHTML("beforeend",markup)}(a),function(e){1===t?r(n.prevButton):o(n.prevButton);e.total_pages===t?r(n.nextButton):o(n.nextButton)}(a)}function a(e){const t=document.createElement("button");t.className="pagination-number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),n.paginationNumbers.appendChild(t)}function r(e){e.classList.add("disabled"),e.setAttribute("disabled",!0)}function o(e){e.classList.remove("disabled"),e.removeAttribute("disabled")}window.addEventListener("load",(function(){for(let e=0;e<5;e+=1)a(e+1)}(),async function(){const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4273054ff6f056d7541ef873941254f6&language=en-US");return await e.json()}().then((t=>function(t){for(genre of t.genres)e[genre.id]=genre.name}(t))).then(i(1)),n.prevButton.addEventListener("click",(()=>{var e;e=t-1,n.paginationNumbers.firstElementChild===document.querySelector(".pagination-number.is-active")&&"1"!==n.paginationNumbers.firstElementChild.innerHTML&&(n.paginationNumbers.innerHTML="",function(e){n.paginationNumbers.innerHTML="";for(let t=e-5;t<e;t+=1)a(t+1)}(e),document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{i(t)}))}))),i(t-1)})),n.nextButton.addEventListener("click",(()=>{var e;e=t+1,n.paginationNumbers.lastElementChild===document.querySelector(".pagination-number.is-active")&&(n.paginationNumbers.innerHTML="",function(e){n.paginationNumbers.innerHTML="";for(let t=e;t<e+5;t+=1)a(t)}(e),document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{i(t)}))}))),i(t+1)})),void document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{i(t)}))}))));
//# sourceMappingURL=index.e5fb266c.js.map
