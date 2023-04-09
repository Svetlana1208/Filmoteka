import {refs} from "./js/vars";
import {key} from "./js/vars";
import {genresList} from "./js/genres";
import fetchRequestGenres from "./js/genres";
import fetchRequest from "./js/fetch";
import modal from "./js/modal";


let page = 1;
let currentPage;
const firstPage = 1;
let lastPage;
let searchQuery;
let data;
let url;
let fullUrl;
let form;


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

refs.closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.add("is-hidden");
    document.body.classList.remove("body-modal-open");
})

// refs.modal.addEventListener('click', () => {
//     refs.modal.classList.add("is-hidden");
//     document.body.classList.remove("body-modal-open");
// })



getPopular();
    
async function getPopular() {
    await fetchRequestGenres();

    url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;

    await setCurrentPage(1); 

    getPaginationNumbers();
    addEventListenerAllBtn();
    updateFirstLastPageBtn();
    handleActivePageNumber();
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
        } else movie.genre_ids = ["absent"];
        
        if (movie.release_date) {
            releaseYear = movie.release_date.slice(0, 4);
            movie.release_date = releaseYear;
        }
    }
}

function onMarkUp(data) {
    refs.gallery.innerHTML="";

    const markup = data.map(card =>
        `<li class="gallery__item" movie-index = ${card.id}>
            <img class="film__poster" src="${card.posterPath}${card.poster_path}" alt="poster">
            <h3 class="film__title">${card.original_title}</h3>
            <p class="film__characteristics">${card.genre_ids.join(", ")} | ${card.release_date}</p>
        </li>`)
        .join("");

        refs.gallery.insertAdjacentHTML('beforeend', markup);
}

async function setCurrentPage(page) {
    currentPage = page;
    fullUrl = `${url}&page=${page}`;

    try {
        data = await fetchRequest(fullUrl);

    if (data.total_results !== 0) {
        lastPage = data.total_pages;

        updateDescription(data);
        onMarkUp(data.results);
        buttonsStatus();
        handleActivePageNumber();
        modal(data.results);
    }
    else {
        refs.searchInfo.textContent = "Search result not successful. Enter the correct movie name.";
        getPopular();
    }
    } catch (error) {
        console.error(error);
      }
}

function appendPageNumber(index) {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("type", "button");
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);
    pageNumber.setAttribute("onclick", "window.location.href='./index.html#gallery'");
    refs.paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumbers() {
        refs.paginationNumbers.innerHTML = "";
        refs.nextButton.classList.remove("is-hidden");
        refs.prevButton.classList.remove("is-hidden");

        if (data.total_pages > 5) {
            refs.lastPage.classList.remove("is-hidden");
            refs.dotsNext.classList.remove("is-hidden");

            for (let i = page; i <= 5; i += 1) {
                appendPageNumber(i);
            }
    
        } else {
            refs.lastPage.classList.add("is-hidden");
            refs.dotsNext.classList.add("is-hidden");
            refs.firstPage.classList.add("is-hidden");
            refs.dotsPrev.classList.add("is-hidden");

            for (let i = page; i <= data.total_pages; i += 1) {
                appendPageNumber(i);
            }
        }
}

function handleActivePageNumber() {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("is-active");
        
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex === currentPage) {
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
    // for (let i = page; i < page + 5; i += 1) {
    //     appendPageNumber(i);
    //   }

      if (currentPage === 5 && lastPage === 6) {
        refs.dotsPrev.classList.remove("is-hidden");
        for (let i = page - 4; i < currentPage + 2; i += 1) {
            appendPageNumber(i);
          }    
    } 
    else if (currentPage === 5 && lastPage === 7) {
        refs.dotsPrev.classList.remove("is-hidden");
        for (let i = page - 3; i < currentPage + 3; i += 1) {
            appendPageNumber(i);
          }    
    } 
    else if (currentPage === 5 && lastPage === 8) {
        refs.dotsPrev.classList.remove("is-hidden");
        for (let i = page - 2; i < currentPage + 4; i += 1) {
            appendPageNumber(i);
          }    
    } 
    else if (currentPage === 5 && lastPage === 9) {
        refs.dotsPrev.classList.remove("is-hidden");
        for (let i = page - 1; i < currentPage + 4; i += 1) {
            appendPageNumber(i);
          }    
    } 
    else {
        for (let i = page; i < page + 5; i += 1) {
            appendPageNumber(i);
          }    
    }
}

function updatePaginationNext(page) {
    if (refs.paginationNumbers.lastElementChild === document.querySelector('.pagination-number.is-active') && Number(refs.paginationNumbers.lastElementChild.getAttribute("page-index")) !== lastPage) {
        getPaginationNumbersNext(page);
        addEventListenerAllBtn();
    }

    if (currentPage === lastPage - 1) {
        getPaginationNumbersPrev(page);
        handleActivePageNumber();
        addEventListenerAllBtn(currentDataAll);
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
    // for (let i = page - 5; i < page; i += 1) {
    //     appendPageNumber(i + 1);
    //   }
    if (currentPage > 1 && currentPage < 6 && refs.paginationNumbers.firstElementChild === document.querySelector('.pagination-number.is-active')) {
        for (let i = 1; i < 6; i += 1) {
            appendPageNumber(i);
        }
        refs.dotsNext.classList.remove("is-hidden");
        refs.lastPage.classList.remove("is-hidden");

    } else {
        for (let i = page - 5; i < page; i += 1) {
            appendPageNumber(i + 1);
          }
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
    refs.firstPage.setAttribute("page-index", firstPage);
    refs.firstPage.setAttribute("aria-label", "Page " + firstPage);
    refs.firstPage.innerHTML = firstPage;

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
    refs.firstPage.classList.add("is-hidden");
    refs.dotsPrev.classList.add("is-hidden");
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
    refs.searchIcon.classList.add("is-hidden");
    refs.searchSpinner.classList.remove("is-hidden");
    refs.gallery.innerHTML = "";
    form = e.currentTarget;
    searchQuery = form.elements.searchQuery.value;
    page = 1;
    refs.searchInfo.textContent ='';
    url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchQuery}`;
    
    await setCurrentPage(page);
    getPaginationNumbers();
    addEventListenerAllBtn();
    updateFirstLastPageBtn();
    handleActivePageNumber();
    refs.searchIcon.classList.remove("is-hidden");
    refs.searchSpinner.classList.add("is-hidden");
}

