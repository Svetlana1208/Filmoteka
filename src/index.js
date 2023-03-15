// import API from "./js/fetch";

let form;
// let searchQuery;
let markup;
const key = '4273054ff6f056d7541ef873941254f6';
let url;
let genres;
let page = 1;
const perPage = 20;
let dataPopular;
let pagesCount;

const refs = {
    form: document.querySelector('#search__form'),
    gallery: document.querySelector('.gallery'),
    searchInfo: document.querySelector('#search__info'),
    previousPages: document.querySelector('.pagination__previousPages'),
    firstPage: document.querySelector('.pagination__firstPage'),
    secondPage: document.querySelector('.pagination__secondPage'),
    thirdPage: document.querySelector('.pagination__thirdPage'),
    fourthPage: document.querySelector('.pagination__fourthPage'),
    fifthPage: document.querySelector('.pagination__fifthPage'),
    nextPages: document.querySelector('.pagination__nextPages'),
}

// refs.form.addEventListener('submit', onSearch);
// refs.btnLoadMore.addEventListener('click', searchNext);
refs.previousPages.addEventListener('click', updatePagination);
refs.secondPage.addEventListener('click', downloadSecondPage);
refs.thirdPage.addEventListener('click', downloadThirdPage);
refs.fourthPage.addEventListener('click', downloadFourthPage);
refs.fifthPage.addEventListener('click', downloadFifthPage);


firstDownload();





async function fetchRequestGenres() {
    return await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

async function fetchRequestPopular() {  
   return await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=${page}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = response.json();
      return data;
    }
  )  
}

function displayPagination() {
    refs.firstPage.textContent = page;
    refs.firstPage.classList.add('is-active');
    refs.secondPage.textContent = page + 1;
    refs.thirdPage.textContent = page + 2;
    refs.fourthPage.textContent = page + 3;
    refs.fifthPage.textContent = page + 4;
}





function firstDownload() {
    downloadPage();
    displayPagination();
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
            <img class="film__poster" src="https://image.tmdb.org/t/p/w500${card.poster_path}" alt="poster">
            <h3 class="film__title">${card.original_title}</h3>
            <p class="film__characteristics">${card.genre_ids.join(", ")} | ${card.release_date}</p>
        </li>`)
        .join("");

        refs.gallery.insertAdjacentHTML('beforeend', markup);

        page += 1;
}




function downloadPage() {
    fetchRequestGenres().then(resp => {
    const genresList = {};
    
    for (gen of resp.genres) {
        genresList[gen.id] = gen.name;
    }

    fetchRequestPopular().then(result => {
        dataPopular = result;
        pagesCount = dataPopular.total_pages;
        console.log(dataPopular);
        let releaseYear;

        for (pop of dataPopular.results) {
            for (let i = 0; i < pop.genre_ids.length; i+=1) {
                pop.genre_ids[i] = genresList[pop.genre_ids[i]];

                releaseYear = pop.release_date.slice(0, 4);
                pop.release_date = releaseYear;
            }
        };

        onMarkUp(dataPopular);
    })
    .catch((error) => console.log(error));
})
.catch((error) => console.log(error));
}






function updatePagination() {
}



function downloadSecondPage() {
    refs.gallery.innerHTML="";
    downloadPage();
    refs.firstPage.classList.remove('is-active');
    refs.secondPage.classList.add('is-active');
}

function downloadThirdPage() {
    refs.gallery.innerHTML="";
    downloadPage();
    refs.secondPage.classList.remove('is-active');
    refs.thirdPage.classList.add('is-active');
}

function downloadFourthPage() {
    refs.gallery.innerHTML="";
    downloadPage();
    refs.thirdPage.classList.remove('is-active');
    refs.fourthPage.classList.add('is-active');
}

function downloadFifthPage() {
    refs.gallery.innerHTML="";
    downloadPage();
    refs.fourthPage.classList.remove('is-active');
    refs.fifthPage.classList.add('is-active');
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