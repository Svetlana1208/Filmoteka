// import API from "./js/fetch";

let form;
// let searchQuery;
let markup;
// let totalPages;
const key = '4273054ff6f056d7541ef873941254f6';
let url;
let genres;

let paramsPages = {
    page: 0,
    perPage: 20
};

const refs = {
    form: document.querySelector('#search__form'),
    gallery: document.querySelector('.gallery'),
    searchInfo: document.querySelector('#search__info'),
    btnLoadMore: document.querySelector('.load-more'),
}

// refs.form.addEventListener('submit', onSearch);
// refs.btnLoadMore.addEventListener('click', searchNext);




fetchRequestGenres().then(resp => {
    const genresList = {};
    
    for (gen of resp.genres) {
        genresList[gen.id] = gen.name;
    }

    fetchRequestPopular().then(result => {
        let releaseYear;

        for (pop of result.results) {
            for (let i = 0; i < pop.genre_ids.length; i+=1) {
                pop.genre_ids[i] = genresList[pop.genre_ids[i]];

                releaseYear = pop.release_date.slice(0, 4);
                pop.release_date = releaseYear;
            }
        };

        onMarkUp(result)})
    .catch((error) => console.log(error));
})
.catch((error) => console.log(error));


function fetchRequestGenres() {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function fetchRequestPopular() {
//    url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
   
   return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function onSearch(e) {
    e.preventDefault();
    refs.gallery.innerHTML = "";
    refs.btnLoadMore.classList.add('is-hidden');
    form = e.currentTarget;
    searchQuery = form.elements.searchQuery.value;
    paramsPages.page = 1;

    API.fetchRequest(searchQuery)
        .then(result => {
            if(result.total === 0) {
                refs.btnLoadMore.classList.add('is-hidden');
                refs.searchInfo.textContent = "Search result not successful. Enter the correct movie name and";
            }
            else {
                onMarkUp(result);
            };
        })
}

function onMarkUp(result) {
    markup = result.results.map(card =>
        `<li class="gallery__item">
                <div class="film__box">
                    <picture class="film__poster">
                        <img src="https://image.tmdb.org/t/p/w300${card.poster_path}" alt="poster" width="280" height="402">
                    </picture>
                </div>
                <h3 class="film__title">${card.original_title}</h3>
                <p class="film__characteristics">${card.genre_ids.join(", ")} | ${card.release_date}</p>
        </li>`)
        .join("");

        refs.gallery.insertAdjacentHTML('beforeend', markup);
        refs.btnLoadMore.classList.remove('is-hidden');

        paramsPages.page += 1;
}

{/* <img src="https://image.tmdb.org/t/p/w280${card.poster_path}" alt="poster"> */}


// function searchNext() {
//     API.fetchRequest(searchQuery)
//     .then(result => {
//         totalPages = result.totalHits / paramsPages.perPage + 1;
//         if(paramsPages.page > totalPages) {
//             refs.btnLoadMore.classList.add('is-hidden');
//         }             
        
//         onMarkUp(result)}
//     );
// }