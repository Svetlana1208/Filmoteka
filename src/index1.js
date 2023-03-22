const key = '4273054ff6f056d7541ef873941254f6';
const genresList = {};
let currentPage;
let page = 1;
let lastPage;

const refs = {
    gallery: document.querySelector('.gallery'),
    paginationNumbers: document.querySelector('.pagination__current'),
    nextButton: document.getElementById("next-button"),
    prevButton: document.getElementById("prev-button"),
    firstPage: document.querySelector(".pagination__firstPage"),
    dotsPrev: document.querySelector(".pagination__dotsPrev"),
    lastPage: document.querySelector(".pagination__lastPage"),
    dotsNext: document.querySelector(".pagination__dotsNext"),
}

refs.prevButton.addEventListener("click", () => {
    updatePaginationPrev(currentPage - 1);
    setCurrentPage(currentPage - 1);
});

refs.nextButton.addEventListener("click", () => {
    updatePaginationNext(currentPage + 1);
    setCurrentPage(currentPage + 1);
});

refs.firstPage.addEventListener('click', () => {
    firstDownload();
    refs.lastPage.classList.remove("is-hidden");
    refs.dotsNext.classList.remove("is-hidden");
})

refs.lastPage.addEventListener('click', downloadLastPage);


window.addEventListener("load", firstDownload());
    
function firstDownload() {
    fetchRequestGenres()
    .then(dataGenres => {
        makeGenresList(dataGenres);
        getPaginationNumbers(page);
        addEventListenerAllBtns();
        setCurrentPage(1);
    })
}

async function fetchRequestGenres() {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
    const dataGenres = await response.json();
    return dataGenres;
}

async function makeGenresList() {
    try {
        const dataGenresConst = await fetchRequestGenres();
        for (genre of dataGenresConst.genres) {
            genresList[genre.id] = genre.name;
        }
        
    } catch (error) {console.log(error.message);}
}

async function fetchRequestPopular(page) {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=${page}`);
    const data = await response.json();
    return data;
}

function updateDescription (data) {
    let releaseYear;
    for (pop of data.results) {
        if (pop.genre_ids) {
        for (let i = 0; i < pop.genre_ids.length; i+=1) {
            pop.genre_ids[i] = genresList[pop.genre_ids[i]];

            releaseYear = pop.release_date.slice(0, 4);
            pop.release_date = releaseYear;
        }
    }
    }
}

function onMarkUp(data) {
    refs.gallery.innerHTML="";
    markup = data.results.map(card =>
        `<li class="gallery__item">
            <img class="film__poster" src="https://image.tmdb.org/t/p/w500${card.poster_path}" alt="poster">
            <h3 class="film__title">${card.original_title}</h3>
            <p class="film__characteristics">${card.genre_ids.join(", ")} | ${card.release_date}</p>
        </li>`)
        .join("");

        refs.gallery.insertAdjacentHTML('beforeend', markup);
}

async function setCurrentPage(page) {
    currentPage = page;

    try {
        const data = await fetchRequestPopular(page);
        updateDescription(data);
        onMarkUp(data);
        updateFirstLastPage(data);
        buttonsStatus();
        handleActivePageNumber();
        console.log(data);
        return data;
    } catch (error) {console.log(error.message);}
}

function appendPageNumber(index) {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);
    refs.paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumbers(page) {
    refs.paginationNumbers.innerHTML = "";
    refs.firstPage.classList.add("is-hidden");
    refs.dotsPrev.classList.add("is-hidden");

    for (let i = page; i <= 5; i += 1) {
        appendPageNumber(i);
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

function addEventListenerAllBtns() {
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

function getPaginationNumbersPrev(page) {
    refs.paginationNumbers.innerHTML = "";
    for (let i = page - 5; i < page; i += 1) {
        appendPageNumber(i + 1);
      }
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

function updatePaginationNext(page) {
    if (refs.paginationNumbers.lastElementChild === document.querySelector('.pagination-number.is-active') && Number(refs.paginationNumbers.lastElementChild.getAttribute("page-index")) !== lastPage) {
        getPaginationNumbersNext(page);

        document.querySelectorAll(".pagination-number").forEach((button) => {
            const pageIndex = Number(button.getAttribute("page-index"));
            if (pageIndex) {
              button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
              });
            }
          });    
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
    
function updatePaginationPrev(page) {
    if (refs.paginationNumbers.firstElementChild === document.querySelector('.pagination-number.is-active') && refs.paginationNumbers.firstElementChild.innerHTML !== "1") {
        getPaginationNumbersPrev(page);

        document.querySelectorAll(".pagination-number").forEach((button) => {
            const pageIndex = Number(button.getAttribute("page-index"));
            if (pageIndex) {
              button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
              });
            }
        });    
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

function updateFirstLastPage(data) {
    firstPage = 1;
    refs.firstPage.setAttribute("page-index", firstPage);
    refs.firstPage.setAttribute("aria-label", "Page " + firstPage);
    refs.firstPage.innerHTML = firstPage;

    lastPage = data.total_pages - 1;
    refs.lastPage.setAttribute("page-index", lastPage);
    refs.lastPage.setAttribute("aria-label", "Page " + lastPage);
    refs.lastPage.innerHTML = lastPage;
}

function downloadLastPage() {
    setCurrentPage(lastPage);
    refs.dotsNext.classList.add("is-hidden");
    refs.dotsPrev.classList.remove("is-hidden");
    refs.firstPage.classList.remove("is-hidden");
    getPaginationNumbersPrev(currentPage);

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex) {
          button.addEventListener("click", () => {
            setCurrentPage(pageIndex);
          });
        }
    });    

    refs.lastPage.classList.add("is-hidden");
}