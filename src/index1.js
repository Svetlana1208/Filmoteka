const key = '4273054ff6f056d7541ef873941254f6';
const genresList = {};

const refs = {
    gallery: document.querySelector('.gallery'),
    pag: document.querySelector('.pagination'),
    ulEl: document.querySelector('.pagination__current'),
    prevRange: document.querySelector('.pagination__previousPage'),
    nextRange: document.querySelector('.pagination__nextPage'),
    nextButton: document.getElementById("next-button"),
    prevButton: document.getElementById("prev-button"),
}


firstDownload(1);

async function fetchRequestGenres() {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
    const dataGenres = await response.json();
    return dataGenres;
}

function makeGenresList(dataGenres) {
    for (genre of dataGenres.genres) {
        genresList[genre.id] = genre.name;
    }
}

async function fetchRequestPopular(page) {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=${page}`);
    const data = await response.json();
    return data;
}

function updateDescription (data) {
    let releaseYear;

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
}

async function firstDownload(currentPage) {
    const dataGenres = await fetchRequestGenres();
    makeGenresList(dataGenres);

    const data = await fetchRequestPopular(1);
    
        updateDescription(data);
        onMarkUp(data);
        console.log(data);

        pagination(data);
        buttonsStatus();

    refs.prevRange.addEventListener('click', downloadPreviousPage);
    refs.nextRange.addEventListener('click', downloadNextPage);


    function pagination() {
        for (let i = 0; i < 5; i += 1) {
            const liEl = displayPaginationBtn(i + 1);
            refs.ulEl.appendChild(liEl);
        }
    }
    
    function displayPaginationBtn(page) {
        const liEl = document.createElement("li");
        liEl.classList.add('pagination__item');
        liEl.innerText = page;
    
        if (currentPage == page) liEl.classList.add('pagination__item--active');
    
        liEl.addEventListener('click', () => {
          currentPage = page;
          fetchRequestPopular(page)
          .then(data => {
            updateDescription(data);
            refs.gallery.innerHTML="";
            onMarkUp(data);
            buttonsStatus();
        });
    
          let currentItemLi = document.querySelector('li.pagination__item--active');
          currentItemLi.classList.remove('pagination__item--active');
    
          liEl.classList.add('pagination__item--active');
        })

        return liEl;
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

        if (data.total_pages === currentPage) {
            disableButton(refs.nextButton);
        } else {
            enableButton(refs.nextButton);
        }
    };


    function downloadPreviousPage() {

        page = currentPage - 1;
        currentPage = page;

        // pagination();
        // test();

        // updatePaginationPrevious();

        fetchRequestPopular(page)
            .then(data => {
            updateDescription(data);
            refs.gallery.innerHTML="";
            onMarkUp(data);
            buttonsStatus();
        });

        displayActiveBtnPrev();
    } 

    function displayActiveBtnPrev() {
        let currentItemLi = document.querySelector('li.pagination__item--active');
        currentItemLi.setAttribute("active", true);

        if (!refs.ulEl.firstElementChild.hasAttribute("active")) {
            let previousItemLi = currentItemLi.previousSibling;
            currentItemLi.classList.remove('pagination__item--active');
            previousItemLi.classList.add('pagination__item--active');
            previousItemLi.setAttribute("active", true);
        } 
    } 

    function updatePaginationPrevious() {
        if (refs.ulEl.firstChild.hasAttribute("active") && !refs.prevButton.hasAttribute("disabled")) {
            refs.ulEl.firstChild.innerText = currentPage;
            refs.ulEl.firstChild.nextSibling.innerText = currentPage + 1;
            refs.ulEl.firstChild.nextSibling.nextSibling.innerText = currentPage + 2;
            refs.ulEl.firstChild.nextSibling.nextSibling.nextSibling.innerText = currentPage + 3;
            refs.ulEl.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.innerText = currentPage + 4;
        }
    }





    function downloadNextPage() {
        refs.ulEl.innerHTML = "";

        page = currentPage + 1;
        currentPage = page;
        // console.log(page);
        // console.log(currentPage);

        pagination();

        // test();

        // updatePaginationNext();

        fetchRequestPopular(page)
            .then(data => {
            updateDescription(data);
            refs.gallery.innerHTML="";
            onMarkUp(data);
            buttonsStatus();
            });

            // displayActiveBtnNext();

    
        
    }

    function displayActiveBtnNext() {
        let currentItemLi = document.querySelector('li.pagination__item--active');
        currentItemLi.setAttribute("active", true);

        if (!refs.ulEl.lastElementChild.hasAttribute("active")) {
          let nextItemLi = currentItemLi.nextSibling;
          currentItemLi.classList.remove('pagination__item--active');
          currentItemLi.removeAttribute("active");
          nextItemLi.classList.add('pagination__item--active');
          nextItemLi.setAttribute("active", true);
        }  
    }
    
    function updatePaginationNext() {
        if (refs.ulEl.lastElementChild.hasAttribute("active") && currentPage !== data.total_pages) {
            refs.ulEl.lastElementChild.innerText = currentPage;
            refs.ulEl.lastElementChild.previousSibling.innerText = currentPage - 1;
            refs.ulEl.lastElementChild.previousSibling.previousSibling.innerText = currentPage - 2;
            refs.ulEl.lastElementChild.previousSibling.previousSibling.previousSibling.innerText = currentPage - 3;
            refs.ulEl.lastElementChild.previousSibling.previousSibling.previousSibling.previousSibling.innerText = currentPage - 4;
        }
    }

    function test() {
        const aaa = document.querySelector('li.pagination__item--active');
        aaa.innerText = currentPage;
        // if (aaa.previousElementSibling) {
        //     aaa.previousElementSibling.innerText = currentPage - 1;
        // }
        // if (aaa.previousElementSibling.previousSibling) {aaa.previousElementSibling.previousSibling.innerText = currentPage - 2};
        // if (aaa.previousElementSibling.previousSibling.previousSibling) {aaa.previousElementSibling.previousSibling.previousSibling.innerText = currentPage - 3;}
        // if (aaa.previousElementSibling.previousSibling.previousSibling.previousSibling) {aaa.previousElementSibling.previousSibling.previousSibling.previousSibling.innerText = currentPage - 4};
        if (aaa.nextElementSibling) {
            aaa.nextElementSibling.innerText = currentPage + 1;
        }
        // if (aaa.nextElementSibling.nextSibling) {aaa.nextElementSibling.nextSibling.innerText = currentPage + 2};
        // if (aaa.nextElementSibling.nextSibling.nextSibling) {aaa.nextElementSibling.nextSibling.nextSibling.innerText = currentPage + 3};
        // if (aaa.nextElementSibling.nextSibling.nextSibling.nextSibling) {aaa.nextElementSibling.nextSibling.nextSibling.nextSibling.innerText = currentPage + 4};
}
}
