let e;let t=1;let a,n;const i={form:document.querySelector("#search__form"),gallery:document.querySelector(".gallery"),searchInfo:document.querySelector("#search__info"),previousPages:document.querySelector(".pagination__previousPages"),firstPage:document.querySelector(".pagination__firstPage"),secondPage:document.querySelector(".pagination__secondPage"),thirdPage:document.querySelector(".pagination__thirdPage"),fourthPage:document.querySelector(".pagination__fourthPage"),fifthPage:document.querySelector(".pagination__fifthPage"),nextPages:document.querySelector(".pagination__nextPages")};function o(a){e=a.results.map((e=>`<li class="gallery__item">\n            <img class="film__poster" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="poster">\n            <h3 class="film__title">${e.original_title}</h3>\n            <p class="film__characteristics">${e.genre_ids.join(", ")} | ${e.release_date}</p>\n        </li>`)).join(""),i.gallery.insertAdjacentHTML("beforeend",e),t+=1}function r(){(async function(){return await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4273054ff6f056d7541ef873941254f6&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))})().then((e=>{const i={};for(gen of e.genres)i[gen.id]=gen.name;(async function(){return await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=4273054ff6f056d7541ef873941254f6&page=${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))})().then((e=>{let t;for(pop of(a=e,n=a.total_pages,console.log(a),a.results))for(let e=0;e<pop.genre_ids.length;e+=1)pop.genre_ids[e]=i[pop.genre_ids[e]],t=pop.release_date.slice(0,4),pop.release_date=t;o(a)})).catch((e=>console.log(e)))})).catch((e=>console.log(e)))}i.previousPages.addEventListener("click",(function(){})),i.secondPage.addEventListener("click",(function(){i.gallery.innerHTML="",r(),i.firstPage.classList.remove("is-active"),i.secondPage.classList.add("is-active")})),i.thirdPage.addEventListener("click",(function(){i.gallery.innerHTML="",r(),i.secondPage.classList.remove("is-active"),i.thirdPage.classList.add("is-active")})),i.fourthPage.addEventListener("click",(function(){i.gallery.innerHTML="",r(),i.thirdPage.classList.remove("is-active"),i.fourthPage.classList.add("is-active")})),i.fifthPage.addEventListener("click",(function(){i.gallery.innerHTML="",r(),i.fourthPage.classList.remove("is-active"),i.fifthPage.classList.add("is-active")})),r(),i.firstPage.textContent=t,i.firstPage.classList.add("is-active"),i.secondPage.textContent=t+1,i.thirdPage.textContent=t+2,i.fourthPage.textContent=t+3,i.fifthPage.textContent=t+4;
//# sourceMappingURL=index.e18e67bb.js.map
