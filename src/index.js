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
    lastPage: document.querySelector(".pagination__lastPage"),
}


window.addEventListener("load", firstDownload());
    
function firstDownload() {    
    getPaginationNumbers(page);

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
          button.addEventListener("click", () => {
            setCurrentPage(pageIndex);
          });
        }
      });

    fetchRequestGenres()
    .then(dataGenres => makeGenresList(dataGenres))
    .then(setCurrentPage(1));
    


    refs.prevButton.addEventListener("click", () => {
        updatePaginationPrev(currentPage - 1);
        setCurrentPage(currentPage - 1);
    });

    refs.nextButton.addEventListener("click", () => {
        updatePaginationNext(currentPage + 1);
        setCurrentPage(currentPage + 1);
    });



    // refs.lastPage.innerHTML = data.total_pages;
    // lastPage = Number(refs.lastPage.getAttribute("page-index"));
    // // console.log(lastPage);
    // refs.lastPage.addEventListener('click', setCurrentPage(lastPage));



}

async function fetchRequestGenres() {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
    const dataGenres = await response.json();
    console.log(2);
    return dataGenres;

}

function makeGenresList(dataGenres) {
    for (genre of dataGenres.genres) {
        genresList[genre.id] = genre.name;
    }
    console.log(3);

}

async function fetchRequestPopular(page) {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=${page}`);
    const data = await response.json();
    console.log(5);

    return data;
}

function updateDescription (data) {
    let releaseYear;

    console.log(6);

    for (pop of data.results) {
        for (let i = 0; i < pop.genre_ids.length; i+=1) {
            pop.genre_ids[i] = genresList[pop.genre_ids[i]];

            releaseYear = pop.release_date.slice(0, 4);
            pop.release_date = releaseYear;
        }
    }
}

function onMarkUp(data) {
    markup = data.results.map(card =>
        `<li class="gallery__item">
            <img class="film__poster" src="https://image.tmdb.org/t/p/w500${card.poster_path}" alt="poster">
            <h3 class="film__title">${card.original_title}</h3>
            <p class="film__characteristics">${card.genre_ids.join(", ")} | ${card.release_date}</p>
        </li>`)
        .join("");

        refs.gallery.insertAdjacentHTML('beforeend', markup);
        console.log(7);

}

async function setCurrentPage(page) {
    console.log("set")
    currentPage = page;
    handleActivePageNumber();

    const data = await fetchRequestPopular(page);
    updateDescription(data);
    refs.gallery.innerHTML="";
    onMarkUp(data);
    buttonsStatus(data);

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
    for (let i = page; i <= 5; i += 1) {
        appendPageNumber(i);
    }
    console.log(1);
}

function handleActivePageNumber() {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("is-active");
        
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
          button.classList.add("is-active");
        }
      });
    
      console.log(4);

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

function buttonsStatus(data) {
    if (currentPage === 1) {
        disableButton(refs.prevButton);
    } else {
        enableButton(refs.prevButton);
    }

    if (data.total_pages === currentPage) {
        disableButton(refs.nextButton);
    } else {
        enableButton(refs.nextButton);
    }
};

function updatePaginationNext(page) {
    if (refs.paginationNumbers.lastElementChild === document.querySelector('.pagination-number.is-active')) {
        refs.paginationNumbers.innerHTML = "";
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
}
    
function updatePaginationPrev(page) {
    if (refs.paginationNumbers.firstElementChild === document.querySelector('.pagination-number.is-active') && refs.paginationNumbers.firstElementChild.innerHTML !== "1") {
        refs.paginationNumbers.innerHTML = "";
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
}

function qqq(data) {
}