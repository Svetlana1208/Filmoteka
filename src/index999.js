const key = '4273054ff6f056d7541ef873941254f6';
let page = 1;
const genresList = {};
let currentPage;
let firstPage;
let lastPage;
let searchQuery;
let data;
let url;
let u;
let posterPath;

const refs = {
    gallery: document.querySelector('.gallery'),
    paginationNumbers: document.querySelector('.pagination__current'),
    nextButton: document.getElementById("next-button"),
    prevButton: document.getElementById("prev-button"),
    firstPage: document.querySelector(".pagination__firstPage"),
    dotsPrev: document.querySelector(".pagination__dotsPrev"),
    lastPage: document.querySelector(".pagination__lastPage"),
    dotsNext: document.querySelector(".pagination__dotsNext"),
    form: document.querySelector(".search__form"),
}

refs.prevButton.addEventListener("click", () => {
    updatePaginationPrev(currentPage - 1);
    setCurrentPage(currentPage - 1);
});

refs.nextButton.addEventListener("click", () => {
    updatePaginationNext(currentPage + 1);
    setCurrentPage(currentPage + 1);
});

refs.firstPage.addEventListener('click', downloadFirstPage);

refs.lastPage.addEventListener('click', downloadLastPage);

refs.form.addEventListener('submit', onSearch);


getPopular();
    
async function getPopular() {
    url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`;
    await fetchRequestGenres();

    u = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;

    await setCurrentPage(1); 
    
    getPaginationNumbers();
    addEventListenerAllBtn();
    updateFirstLastPageBtn();
    handleActivePageNumber();
}

async function fetchRequestGenres() {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
    const dataGenres = await response.json();
    makeGenresList(dataGenres);
}

function makeGenresList(dataGenres) {
    for (const genre of dataGenres.genres) {
        genresList[genre.id] = genre.name;
    }
}

async function fetchRequest(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function updateDescription (data) {
    let releaseYear;
    for (const movie of data.results) {

        if (movie.poster_path === null) {
            movie.posterPath = 'https://upload.wikimedia.org/wikipedia/commons/a/a1';
            movie.poster_path = '/Out_Of_Poster.jpg';
        } else 
        movie.posterPath = 'https://image.tmdb.org/t/p/w500';

        if (movie.genre_ids) {
            for (let i = 0; i < movie.genre_ids.length; i+=1) {
                movie.genre_ids[i] = genresList[movie.genre_ids[i]];
            }
        }
        
        if (movie.release_date) {
            releaseYear = movie.release_date.slice(0, 4);
            movie.release_date = releaseYear;
        }

    }
}

function onMarkUp(data) {
    refs.gallery.innerHTML="";
    const markup = data.results.map(card =>
        `<li class="gallery__item">
            <img class="film__poster" src="${card.posterPath}${card.poster_path}" alt="poster">
            <h3 class="film__title">${card.original_title}</h3>
            <p class="film__characteristics">${card.genre_ids.join(", ")} | ${card.release_date}</p>
        </li>`)
        .join("");

        refs.gallery.insertAdjacentHTML('beforeend', markup);
}

async function setCurrentPage(page) {
    currentPage = page;
    url = `${u}&page=${page}`;

    data = await fetchRequest(url);

    updateDescription(data);
    onMarkUp(data);
    buttonsStatus();
    handleActivePageNumber();
}

function appendPageNumber(index) {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);
    refs.paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumbers() {
        refs.paginationNumbers.innerHTML = "";
        refs.firstPage.classList.add("is-hidden");
        refs.dotsPrev.classList.add("is-hidden");
    
        if (data.total_pages >= 5) {
            for (let i = page; i <= 5; i += 1) {
                appendPageNumber(i);
            }
    
        } else {
            for (let i = page; i <= data.total_pages; i += 1) {
                appendPageNumber(i);
            }
        }
}

function handleActivePageNumber() {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("is-active");
        
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
          button.classList.add("is-active");
        }
      });
}

function disableButton(button) {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

function enableButton(button) {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

function buttonsStatus() {
    if (currentPage === 1) {
        disableButton(refs.prevButton);
    } else {
        enableButton(refs.prevButton);
    }

    if (currentPage === lastPage) {
        disableButton(refs.nextButton);
    } else {
        enableButton(refs.nextButton);
    }
};

function addEventListenerAllBtn() {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex) {
          button.addEventListener("click", () => {
            setCurrentPage(pageIndex);
        });
        }
    });
}

function getPaginationNumbersNext(page) {
    refs.paginationNumbers.innerHTML = "";
    for (let i = page; i < page + 5; i += 1) {
        appendPageNumber(i);
      }
}

function updatePaginationNext(page) {
    if (refs.paginationNumbers.lastElementChild === document.querySelector('.pagination-number.is-active') && Number(refs.paginationNumbers.lastElementChild.getAttribute("page-index")) !== lastPage) {
        getPaginationNumbersNext(page);
        addEventListenerAllBtn();
    }

    if (Number(refs.paginationNumbers.firstElementChild.getAttribute("page-index")) === 6) {
        refs.firstPage.classList.remove("is-hidden");
        refs.dotsPrev.classList.remove("is-hidden");
    }
    
    if (Number(refs.paginationNumbers.firstElementChild.getAttribute("page-index")) === lastPage - 5) {
        refs.dotsNext.classList.add("is-hidden");
    }

    if (Number(refs.paginationNumbers.firstElementChild.getAttribute("page-index")) === lastPage - 4) {
        refs.lastPage.classList.add("is-hidden");
        refs.dotsNext.classList.add("is-hidden");
    }
}

function getPaginationNumbersPrev(page) {
    refs.paginationNumbers.innerHTML = "";
    for (let i = page - 5; i < page; i += 1) {
        appendPageNumber(i + 1);
      }
}

function updatePaginationPrev(page) {
    if (refs.paginationNumbers.firstElementChild === document.querySelector('.pagination-number.is-active') && refs.paginationNumbers.firstElementChild.innerHTML !== "1") {
        getPaginationNumbersPrev(page);
        addEventListenerAllBtn();
    }

    if (Number(refs.paginationNumbers.lastElementChild.getAttribute("page-index")) === lastPage - 5) {
        refs.dotsNext.classList.remove("is-hidden");
        refs.lastPage.classList.remove("is-hidden");
    }

    if (Number(refs.paginationNumbers.lastElementChild.getAttribute("page-index")) === 5) {
        refs.firstPage.classList.add("is-hidden");
        refs.dotsPrev.classList.add("is-hidden");
    }
}

function updateFirstLastPageBtn() {
    firstPage = 1;
    refs.firstPage.setAttribute("page-index", firstPage);
    refs.firstPage.setAttribute("aria-label", "Page " + firstPage);
    refs.firstPage.innerHTML = firstPage;

    lastPage = data.total_pages;
    refs.lastPage.setAttribute("page-index", lastPage);
    refs.lastPage.setAttribute("aria-label", "Page " + lastPage);
    refs.lastPage.innerHTML = lastPage;
}

function downloadFirstPage() {
    setCurrentPage(1); 
    getPaginationNumbers();
    addEventListenerAllBtn();

    refs.lastPage.classList.remove("is-hidden");
    refs.dotsNext.classList.remove("is-hidden");
}


function downloadLastPage() {
    setCurrentPage(lastPage);
    getPaginationNumbersPrev(currentPage);
    addEventListenerAllBtn();

    refs.dotsNext.classList.add("is-hidden");
    refs.dotsPrev.classList.remove("is-hidden");
    refs.firstPage.classList.remove("is-hidden");
    refs.lastPage.classList.add("is-hidden");
}

async function onSearch(e) {
    e.preventDefault();
    refs.gallery.innerHTML = "";
    form = e.currentTarget;
    searchQuery = form.elements.searchQuery.value;
    page = 1;
    u = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchQuery}`;
    
    await setCurrentPage(page);

    getPaginationNumbers();
    addEventListenerAllBtn();
    updateFirstLastPageBtn();
    handleActivePageNumber();
}

