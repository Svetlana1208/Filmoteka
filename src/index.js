import {refs} from "./js/vars";
import {key} from "./js/vars";
import {genresList} from "./js/genres";
import fetchRequestGenres from "./js/genres";
import fetchRequest from "./js/fetch";
import modal from "./js/modal";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



let page = 1;
let currentPage;
const firstPage = 1;
let lastPage;
let searchQuery;
let data;
let url;
let fullUrl;
let form;
let user;
const firebaseConfig = {
    apiKey: "AIzaSyCds-laluoBicOUU9XaI5Zyn2hZba3I6P4",
    authDomain: "filmoteka-a678a.firebaseapp.com",
    projectId: "filmoteka-a678a",
    storageBucket: "filmoteka-a678a.appspot.com",
    messagingSenderId: "767994332645",
    appId: "1:767994332645:web:7a3961a3c7878fcc12db0c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(app);
console.log(auth);

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
    refs.regInfo.innerHTML = "";
    refs.regLogin.value = "";
    refs.regEmail.value = "";
    refs.regPassword.value = "";
    refs.regConfirmPassword.value = "";
    refs.regLogin.classList.remove("error");
    refs.regEmail.classList.remove("error");
    refs.regPassword.classList.remove("error");
    refs.regConfirmPassword.classList.remove("error");
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

function saveDataReg(e) {
    e.preventDefault();

    const {elements: { login, email, password, confirmPassword }} = e.currentTarget;

    if (login.value === "") {
        refs.regLogin.classList.add("error");
        return refs.regInfo.innerHTML = "Please fill in all the fields!";
    }

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

    user = {
        login: login.value,
        email: email.value,
        password: password.value,
    };

    createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    console.log(userCredential);
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    // const oldList = JSON.parse(localStorage.getItem('users')) || [];

    // if (oldList.some(oldList => oldList.email === user.email)) {
    //     refs.regEmail.classList.add("error");
    //     return refs.regInfo.innerHTML = "Such a user already exists";}
    // else if (oldList.some(oldList => oldList.login === user.login)) {
    //     refs.regLogin.classList.add("error");
    //     return refs.regInfo.innerHTML = "This login is already in use";}
    // else {
    //     oldList.push(user);
    //     localStorage.setItem('users', JSON.stringify(oldList));
    // }

    e.currentTarget.reset();
    refs.regLogin.classList.remove("error");
    refs.regEmail.classList.remove("error");
    refs.regPassword.classList.remove("error");
    refs.regConfirmPassword.classList.remove("error");
    refs.regInfo.innerHTML = "";
    refs.regModal.classList.add("is-hidden");
}

