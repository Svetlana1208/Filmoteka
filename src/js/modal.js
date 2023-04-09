import {refsMyLib} from "./varsMyLib";
import {refs} from "./vars";
import {key} from "./vars";
import fetchRequest from "./fetch";
import YouTubePlayer from 'youtube-player';


let trailer;
let trailerList;
let trailerLink;
let trailerIndex;
let trailerKey;

const modal = (data) => {
    document.querySelectorAll(".gallery__item").forEach((card) => {

        card.addEventListener("click", () => {
            const movieIndex = Number(card.getAttribute("movie-index"));

            data.forEach((movie) => {
                if (movie.id === movieIndex) {
                    
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

                                    <button class="movie__trailer" type="button" data-trailerModal-button>Trailer</button>
                                    <div class="backdrop is-hidden" data-trailerModal>
                                        <div class="trailerBox">
                                            <button class="trailerBox__closeBtn" type="button" data-trailerClose-button></button>
                                            <div id="player"></div>
                                        </div>
                                    </div>
                                </div>
                            </article>`;
                    
                            refs.movieCardBox.innerHTML = markupCard;
                            refs.modal.classList.remove("is-hidden");    
                            refsMyLib.movieCardBox.innerHTML = markupCard;
                            refsMyLib.modal.classList.remove("is-hidden");
        
                            downloadUrlTrailer();

                            document.body.classList.add("body-modal-open");
                            document.querySelector("[data-add-to-watched]").addEventListener('click', addToWatched);
                            document.querySelector("[data-add-to-queue]").addEventListener('click', addToQueue);
                            document.querySelector("[data-trailerModal-button]").addEventListener('click', onTrailer);
                            document.querySelector("[data-trailerClose-button]").addEventListener('click', () => {
                                document.querySelector("[data-trailerModal]").classList.add("is-hidden");
                            });
    
                    

                        function addToWatched() {
                            refs.modal.classList.add("is-hidden");
                            refsMyLib.modal.classList.add("is-hidden");
                            document.body.classList.remove("body-modal-open");

                            const oldList = JSON.parse(localStorage.getItem('watchedList')) || [];
                            if (oldList.some(oldList => oldList.id === movie.id)) {
                                return;
                            } else {
                                oldList.push(movie);
                                localStorage.setItem('watchedList', JSON.stringify(oldList)); 
                            }       
                        }
                        
                        function addToQueue() {
                            refs.modal.classList.add("is-hidden");
                            refsMyLib.modal.classList.add("is-hidden");
                            document.body.classList.remove("body-modal-open");

                            const oldList = JSON.parse(localStorage.getItem('queue')) || [];
                            if (oldList.some(oldList => oldList.id === movie.id)) {
                                return;
                            } else {
                                oldList.push(movie);
                                localStorage.setItem('queue', JSON.stringify(oldList));
                            }
                        }
                        
                        async function downloadUrlTrailer() {
                            let trailerObject;
                            url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${key}&language=en-US`;
                            try {
                                trailerObject = await fetchRequest(url);
                            } catch (error) {
                                console.error(error);
                            }
                            
                            trailerObject.results.find(trailer => {
                                if (trailer.name.includes('Official')) {
                                trailerKey = trailer.key;
                                return trailerKey;
                            }})      
                        }

                        function onTrailer() {
                            document.querySelector("[data-trailerModal]").classList.remove("is-hidden");

                            global.YouTubePlayer = YouTubePlayer;

                            let player1;
                    
                            player1 = YouTubePlayer('player', {
                                width: '780',
                                height: '530',
                                videoId: trailerKey
                            });
                        
                            player1.playVideo()
                        }
                }
            })
        });
    });
}

export default modal;