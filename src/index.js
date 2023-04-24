import authorization from "./js/authorization";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {key, auth} from "./js/vars";
import { refs } from "./js/refs";
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
let currentGenre;


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
refs.regModalOpenBtn.addEventListener('click', onOpenRegModal);
refs.searchByGenresBtn.addEventListener('click', showGenresList);

authorization()
.then(setTimeout(() => {
    getPopular()}, 1000)
)

function showGenresList() {
    refs.genresList.classList.toggle("show");
    refs.searchInfo.textContent = '';
    document.querySelector(".search__input").value = "";
    window.onclick = function (e) {
      if(!e.target.matches('.searchBox__genresBtn')) {
        if(refs.genresList.classList.contains('show')) {
            refs.genresList.classList.remove('show');
        }
      }  
    }
    addEventListenerAllGenres();
}

function addEventListenerAllGenres() {
    document.querySelectorAll(".searchBox__genresList p").forEach((genre) => {
        const chosenGenre = genre.textContent;
        genre.addEventListener('click', async () => {
           for (const genre in genresList) {
                if (genresList[genre] === chosenGenre) {
                    currentGenre = genre;
                    refs.searchInfo.innerHTML = chosenGenre;
                }
           }
           refs.gallery.innerHTML = "";

           url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${currentGenre}&with_watch_monetization_types=flatrate`
           await setCurrentPage(1);
           getPaginationNumbers();
           addEventListenerAllBtn();
           updateFirstLastPageBtn();
           handleActivePageNumber(); 
        })
    })
}

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
            <h3 class="film__title">${card.original_title.slice(0, 60)}</h3>
            <p class="film__characteristics">${card.genre_ids.join(", ").slice(0, 35)} | ${card.release_date}</p>
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
    refs.searchInfo.textContent = '';
    url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchQuery}`;
    
    await setCurrentPage(page);
    getPaginationNumbers();
    addEventListenerAllBtn();
    updateFirstLastPageBtn();
    handleActivePageNumber();
    refs.searchIcon.classList.remove("is-hidden");
    refs.searchSpinner.classList.add("is-hidden");
}


function onOpenRegModal() {
    refs.regModal.classList.remove("is-hidden");
    document.body.classList.add("body-modal-open");
    refs.regModalCloseBtn.addEventListener('click', onCloseRegModal);
    window.addEventListener('keydown', onEscKeyPressReg);
    refs.regModal.addEventListener('click', onBackdropClickReg);
    refs.regForm.addEventListener('submit', saveDataReg);
}

function onCloseRegModal() {
    refs.regModal.classList.add("is-hidden");    
    document.body.classList.remove("body-modal-open");
    currentTargeRegtReset();
}

function onEscKeyPressReg(e) {
    if (e.code === 'Escape') {
        onCloseRegModal();
    }
}

function onBackdropClickReg(e) {
    if (e.currentTarget === e.target) {
        onCloseRegModal();
    }
}

function currentTargeRegtReset() {
    refs.regInfo.innerHTML = "";
    refs.regEmail.value = "";
    refs.regPassword.value = "";
    refs.regConfirmPassword.value = "";
    refs.regEmail.classList.remove("error");
    refs.regPassword.classList.remove("error");
    refs.regConfirmPassword.classList.remove("error");
}

function saveDataReg(e) {
    e.preventDefault();

    const {elements: { email, password, confirmPassword }} = e.currentTarget;

    if (email.value === "") {
        refs.regEmail.classList.add("error");
        return refs.regInfo.innerHTML = "Please fill in all the fields!";
    }  

    if (password.value === "") {
        refs.regPassword.classList.add("error");
        return refs.regInfo.innerHTML = "Please fill in all the fields!";
    }

    if (password.value !== confirmPassword.value || confirmPassword.value === "") {
        refs.regPassword.classList.add("error");
        refs.regConfirmPassword.classList.add("error");
        return refs.regInfo.innerHTML = "Enter correct password";
    }

    if (password.value.length < 5) {
        return refs.regInfo.innerHTML = "Enter a stronger password"; 
    }

    user = {
        email: email.value,
        password: password.value,
    };

    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
        const user = userCredential.user;
        refs.regModal.classList.add("is-hidden"); 
        currentTargeRegtReset();   
  })
  .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-email") {
            refs.regEmail.classList.add("error");
            return refs.regInfo.innerHTML = "Enter correct email";
        } else if (errorCode === "auth/email-already-in-use") {
            refs.regEmail.classList.add("error");
            return refs.regInfo.innerHTML = "Such a user already exists";
        }
  });
}
