import authorization from "./js/authorization";
import { userRef } from "./js/authorization";
import { refsMyLib } from "./js/refsMyLib";
import modalMyLib from "./js/modalMyLib";
import { collection, getDocs } from "firebase/firestore";

let lastPage;
let page = 1;
let el = 20;
let currentPage;
let firstPage = 1;
let parsedWatchedList;
let currentDataAll = [];
let parsedQueueList;


refsMyLib.watchedBtn.addEventListener('click', getWatched);
refsMyLib.queueBtn.addEventListener('click', getQueue);
refsMyLib.prevButton.addEventListener("click", () => {
    updatePaginationPrev(currentPage - 1);
    setCurrentPage(currentDataAll, currentPage - 1);
});
refsMyLib.nextButton.addEventListener("click", () => {
    updatePaginationNext(currentPage + 1);
    setCurrentPage(currentDataAll, currentPage + 1);
});
refsMyLib.firstPage.addEventListener('click', downloadFirstPage);
refsMyLib.lastPage.addEventListener('click', downloadLastPage);


authorization()
.then(setTimeout(() => {
    getWatched()}, 1500)
)

function getWatched() {
    currentDataAll = [];
    allBtnIsHidden();
    refsMyLib.watchedBtn.classList.add("is-active");
    refsMyLib.queueBtn.classList.remove("is-active");
    refsMyLib.paginationNumbers.innerHTML = "";
    const watchedData = getDocs(collection(userRef, "watched"));

    watchedData
    .then (PromiseResult => {
        PromiseResult._snapshot.docChanges.forEach((movie) => {
            currentDataAll.push(movie.doc.data.value.mapValue.fields);
        })
        firstDownload();
    });

    //---------------------------------------------------
    // Реализация через localStorage:
    //---------------------------------------------------

    // const savedWatchedList = localStorage.getItem("watchedList");
    // parsedWatchedList = JSON.parse(savedWatchedList);

    // currentDataAll = parsedWatchedList;
    // firstDownload();
    //---------------------------------------------------

}

function getQueue() {
    currentDataAll = [];
    allBtnIsHidden();
    refsMyLib.watchedBtn.classList.remove("is-active");
    refsMyLib.queueBtn.classList.add("is-active");
    refsMyLib.paginationNumbers.innerHTML = "";
    const queueData = getDocs(collection(userRef, "queue"));

    queueData
    .then (PromiseResult => {
        PromiseResult._snapshot.docChanges.forEach((movie) => {
            currentDataAll.push(movie.doc.data.value.mapValue.fields);
        })
        firstDownload();
    });

    //---------------------------------------------------
    // Реализация через localStorage:
    //---------------------------------------------------

    // const savedQueueList = localStorage.getItem("queue");
    // parsedQueueList = JSON.parse(savedQueueList);

    // currentDataAll = parsedQueueList;
    //---------------------------------------------------
}

function firstDownload() {
    if (currentDataAll.length !== 0) {
        refsMyLib.pagination.classList.remove("is-hidden");

        lastPage = Math.ceil(currentDataAll.length / el);

        setCurrentPage(currentDataAll, 1);
        getPaginationNumbers();
        handleActivePageNumber();
        updateFirstLastPageBtn();
        addEventListenerAllBtn(currentDataAll);
    } else {
        refsMyLib.gallery.innerHTML="";
        refsMyLib.information.classList.remove("is-hidden");
    }
}

function appendPageNumber(index) {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("type", "button");
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);
    pageNumber.setAttribute("onclick", "window.location.href='./myLib.html#myLibGallery'");
    refsMyLib.paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumbers() {
    refsMyLib.paginationNumbers.innerHTML = "";
    refsMyLib.nextButton.classList.remove("is-hidden");
    refsMyLib.prevButton.classList.remove("is-hidden");

    if (lastPage > 5) {
        refsMyLib.lastPage.classList.remove("is-hidden");
        refsMyLib.dotsNext.classList.remove("is-hidden");

        for (let i = page; i <= 5; i += 1) {
            appendPageNumber(i);
        }
    } else {
        refsMyLib.lastPage.classList.add("is-hidden");
        refsMyLib.dotsNext.classList.add("is-hidden");
        refsMyLib.firstPage.classList.add("is-hidden");
        refsMyLib.dotsPrev.classList.add("is-hidden");

        for (let i = page; i <= lastPage; i += 1) {
            appendPageNumber(i);
        }
    }
}

function setCurrentPage (data, page) {
        refsMyLib.information.classList.add("is-hidden");

        currentPage = page;
        page -= 1;
        const start = el * page;
        const end = start + el;
        const currentData = data.slice(start, end);

        onMarkUpLib(currentData);
        handleActivePageNumber();
        buttonsStatus();
        modalMyLib(currentData);                       
}

function onMarkUpLib(data) {
    refsMyLib.gallery.innerHTML="";
    currentDataAll.forEach(movie => {
        movie.genres = [];
        if(movie.genre_ids.arrayValue) {
            movie.genre_ids.arrayValue.values.forEach(genres => {
            movie.genres.push(genres.stringValue);
        })}
    })
    const markup = data.map(card =>
        `<li class="gallery__item" movie-index = ${card.id.integerValue}>
            <img class="film__poster" src="${card.posterPath.stringValue}${card.poster_path.stringValue}" alt="poster">
            <h3 class="film__title">${card.original_title.stringValue.slice(0, 60)}</h3>
            <p class="film__characteristics">${card.genres.join(", ").slice(0, 35)} | ${card.release_date.stringValue}</p>
        </li>`
    )
    .join("");

    refsMyLib.gallery.insertAdjacentHTML('beforeend', markup);
}

function allBtnIsHidden() {
    refsMyLib.nextButton.classList.add("is-hidden");
    refsMyLib.prevButton.classList.add("is-hidden");
    refsMyLib.lastPage.classList.add("is-hidden");
    refsMyLib.dotsNext.classList.add("is-hidden");
    refsMyLib.firstPage.classList.add("is-hidden");
    refsMyLib.dotsPrev.classList.add("is-hidden");
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
        disableButton(refsMyLib.prevButton);
    } else {
        enableButton(refsMyLib.prevButton);
    }
    if (currentPage === lastPage) {
        disableButton(refsMyLib.nextButton);
    } else {
        enableButton(refsMyLib.nextButton);
    }
};

function handleActivePageNumber() {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("is-active");
        
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex === currentPage) {
          button.classList.add("is-active");
        }
      });
}

function addEventListenerAllBtn(data) {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex) {
          button.addEventListener("click", () => {
            setCurrentPage (data, pageIndex);
        });
        }
    });
}

function updateFirstLastPageBtn() {
    refsMyLib.firstPage.setAttribute("page-index", firstPage);
    refsMyLib.firstPage.setAttribute("aria-label", "Page " + firstPage);
    refsMyLib.firstPage.innerHTML = firstPage;

    refsMyLib.lastPage.setAttribute("page-index", lastPage);
    refsMyLib.lastPage.setAttribute("aria-label", "Page " + lastPage);
    refsMyLib.lastPage.innerHTML = lastPage;
}

function getPaginationNumbersNext(page) {
    refsMyLib.paginationNumbers.innerHTML = "";
    if (currentPage === 5 && lastPage === 6) {
        refsMyLib.dotsPrev.classList.remove("is-hidden");
        for (let i = page - 4; i < currentPage + 2; i += 1) {
            appendPageNumber(i);
          }    
    } 
    else if (currentPage === 5 && lastPage === 7) {
        refsMyLib.dotsPrev.classList.remove("is-hidden");
        for (let i = page - 3; i < currentPage + 3; i += 1) {
            appendPageNumber(i);
          }    
    } 
    else if (currentPage === 5 && lastPage === 8) {
        refsMyLib.dotsPrev.classList.remove("is-hidden");
        for (let i = page - 2; i < currentPage + 4; i += 1) {
            appendPageNumber(i);
          }    
    } 
    else if (currentPage === 5 && lastPage === 9) {
        refsMyLib.dotsPrev.classList.remove("is-hidden");
        for (let i = page - 1; i < currentPage + 4; i += 1) {
            appendPageNumber(i);
          }    
    } else if (currentPage === lastPage) {
        for (let i = page - 5; i < page; i += 1) {
            appendPageNumber(i + 1);
          }
    }
    else {
        for (let i = page; i < page + 5; i += 1) {
            appendPageNumber(i);
          }    
    }
}

function updatePaginationNext(page) {
    if (currentPage === 5 && refsMyLib.paginationNumbers.lastElementChild === document.querySelector('.pagination-number.is-active')) {
        refsMyLib.firstPage.classList.remove("is-hidden");
    }

    if (refsMyLib.paginationNumbers.lastElementChild === document.querySelector('.pagination-number.is-active') && page !== lastPage) {
        getPaginationNumbersNext(page);
        addEventListenerAllBtn(currentDataAll);
    }

    if (currentPage === lastPage - 1 && lastPage > 7) {
        getPaginationNumbersPrev(page);
        handleActivePageNumber();
        addEventListenerAllBtn(currentDataAll);
    }
    
    if (Number(refsMyLib.paginationNumbers.firstElementChild.getAttribute("page-index")) === 6) {
        refsMyLib.firstPage.classList.remove("is-hidden");
        refsMyLib.dotsPrev.classList.remove("is-hidden");
    }
    
    if (Number(refsMyLib.paginationNumbers.firstElementChild.getAttribute("page-index")) === lastPage - 5 && Number(refsMyLib.paginationNumbers.lastElementChild.getAttribute("page-index")) !== 5) {
        refsMyLib.dotsNext.classList.add("is-hidden");
    }

    if (Number(refsMyLib.paginationNumbers.firstElementChild.getAttribute("page-index")) === lastPage - 4) {
        refsMyLib.lastPage.classList.add("is-hidden");
        refsMyLib.dotsNext.classList.add("is-hidden");
    }
}

function getPaginationNumbersPrev(page) {
    refsMyLib.paginationNumbers.innerHTML = "";
    if (currentPage > 1 && currentPage < 6 && refsMyLib.paginationNumbers.firstElementChild === document.querySelector('.pagination-number.is-active')) {
        for (let i = 1; i < 6; i += 1) {
            appendPageNumber(i);
        }
        refsMyLib.dotsNext.classList.remove("is-hidden");
        refsMyLib.lastPage.classList.remove("is-hidden");

    } else {
        for (let i = page - 5; i < page; i += 1) {
            appendPageNumber(i + 1);
          }
    }    
}

function updatePaginationPrev(page) {
    if (refsMyLib.paginationNumbers.firstElementChild === document.querySelector('.pagination-number.is-active') && refsMyLib.paginationNumbers.firstElementChild.innerHTML !== "1") {
        getPaginationNumbersPrev(page);
        addEventListenerAllBtn(currentDataAll);
    }

    if (Number(refsMyLib.paginationNumbers.lastElementChild.getAttribute("page-index")) === lastPage - 5) {
        refsMyLib.dotsNext.classList.remove("is-hidden");
        refsMyLib.lastPage.classList.remove("is-hidden");
    }

    if (Number(refsMyLib.paginationNumbers.lastElementChild.getAttribute("page-index")) === 5) {
        refsMyLib.firstPage.classList.add("is-hidden");
        refsMyLib.dotsPrev.classList.add("is-hidden");
    }
}

function downloadFirstPage() {
    setCurrentPage(currentDataAll, 1); 
    getPaginationNumbers(currentPage);
    addEventListenerAllBtn(currentDataAll);
    handleActivePageNumber();

    refsMyLib.lastPage.classList.remove("is-hidden");
    refsMyLib.dotsNext.classList.remove("is-hidden");
    refsMyLib.firstPage.classList.add("is-hidden");
    refsMyLib.dotsPrev.classList.add("is-hidden");
}

function downloadLastPage() {
    setCurrentPage(currentDataAll, lastPage);
    getPaginationNumbersPrev(currentPage);
    addEventListenerAllBtn(currentDataAll);
    handleActivePageNumber();

    refsMyLib.dotsNext.classList.add("is-hidden");
    refsMyLib.dotsPrev.classList.remove("is-hidden");
    refsMyLib.firstPage.classList.remove("is-hidden");
    refsMyLib.lastPage.classList.add("is-hidden");
}

