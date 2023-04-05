import {refsMyLib} from "./varsMyLib";
import {refs} from "./vars";

const modal = (data) => {
    document.querySelectorAll(".gallery__item").forEach((card) => {

        card.addEventListener("click", () => {
            const movieIndex = Number(card.getAttribute("movie-index"));

            data.forEach((item) => {
                if (item.id === movieIndex) {
                    const movie = item;
                    const markupCard = 
                        `<article class="movie">
                            <div>
                                <img class="movie__poster" src="${movie.posterPath}${movie.poster_path}" alt="poster">
                            </div>
                            <div class="movie__box">
                                <h3 class="movie__title">${movie.original_title}</h3>
                                <ul>
                                    <li class="movie__characteristic">
                                        <p class="movie__characteristicKey">Vote / Votes</p>
                                        <div class="vote__average">${movie.vote_average}</div><span>&nbsp / &nbsp</span>
                                        <div class="vote__count">${movie.vote_count}</div>
                                    </li>
                                    <li class="movie__characteristic">
                                        <p class="movie__characteristicKey">Popularity</p>
                                        <p class="movie__characteristicValue">${movie.popularity}</p>
                                    </li>
                                    <li class="movie__characteristic">
                                        <p class="movie__characteristicKey">Original Title</p>
                                        <p class="movie__characteristicValue">${movie.original_title}</p>
                                    </li>
                                    <li class="movie__characteristic">
                                        <p class="movie__characteristicKey">Genre</p>
                                        <p class="movie__characteristicValue">${movie.genre_ids.join(", ")}</p>    
                                    </li>
                                </ul>    
                                <p class="movie__about">About</p>
                                <p class="movie__description">${movie.overview}</p>
                                <div class="movie__btnBox">
                                    <button class="movie__btn is-active" type="button" data-add-to-watched>add to Watched</button>
                                    <button class="movie__btn" type="button" data-add-to-queue>add to queue</button>
                                </div>
                            </div>
                        </article>`;
                
                        refs.movieCardBox.innerHTML = markupCard;
                        refs.modal.classList.remove("is-hidden");    
                        refsMyLib.movieCardBox.innerHTML = markupCard;
                        refsMyLib.modal.classList.remove("is-hidden");
    
                        document.body.classList.add("body-modal-open");
                        document.querySelector("[data-add-to-watched]").addEventListener('click', addToWatched);
                        document.querySelector("[data-add-to-queue]").addEventListener('click', addToQueue);

                        function addToWatched() {
                            const oldList = JSON.parse(localStorage.getItem('watchedList')) || [];
                            if (oldList.some(oldList => oldList.id === movie.id)) {
                                return;
                            } else {
                                oldList.push(movie);
                                localStorage.setItem('watchedList', JSON.stringify(oldList)); 
                            }       
                        }
                        
                        function addToQueue() {
                            const oldList = JSON.parse(localStorage.getItem('queue')) || [];
                            if (oldList.some(oldList => oldList.id === movie.id)) {
                                return;
                            } else {
                                oldList.push(movie);
                                localStorage.setItem('queue', JSON.stringify(oldList));
                            }
                        }    
                }
            })
        });
    });
}

export default modal;