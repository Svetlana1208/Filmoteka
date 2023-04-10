import {refsMyLib} from "./varsMyLib";
import {refs} from "./vars";
import {key} from "./vars";
import fetchRequest from "./fetch";
import YouTubePlayer from 'youtube-player';


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
                        refsMyLib.movieCardBox.innerHTML = markupCard;

                        onOpenModal();

                        function onOpenModal() {
                            refs.modal.classList.remove("is-hidden");    
                            refsMyLib.modal.classList.remove("is-hidden");
                            document.body.classList.add("body-modal-open");
                            document.querySelector("[data-add-to-watched]").addEventListener('click', addToWatched);
                            document.querySelector("[data-add-to-queue]").addEventListener('click', addToQueue);
                            document.querySelector("[data-trailerModal-button]").addEventListener('click', onTrailer);
                            window.addEventListener('keydown', onEscKeyPress);
                            refs.closeModalBtn.addEventListener('click', onCloseModal);
                            refsMyLib.closeModalBtn.addEventListener('click', onCloseModal);                            
                            refs.modal.addEventListener('click', onBackdropClick);
                            
                            downloadUrlTrailer();
                        }

                        function onCloseModal() {
                            refs.modal.classList.add("is-hidden");    
                            refsMyLib.modal.classList.add("is-hidden");
                            document.body.classList.remove("body-modal-open");
                        }

                        function onEscKeyPress(e) {
                            if (e.code === 'Escape') {
                                onCloseModal();
                            }
                        }

                        function onBackdropClick(e) {
                            if (e.currentTarget === e.target) {
                                onCloseModal();
                            }
                        }

                        function addToWatched() {
                            onCloseModal();

                            const oldList = JSON.parse(localStorage.getItem('watchedList')) || [];
                            if (oldList.some(oldList => oldList.id === movie.id)) {
                                return;
                            } else {
                                oldList.push(movie);
                                localStorage.setItem('watchedList', JSON.stringify(oldList)); 
                            }       
                        }
                        
                        function addToQueue() {
                            onCloseModal();

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
                            const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${key}&language=en-US`;
                            try {
                                trailerObject = await fetchRequest(url);
                            } catch (error) {
                                console.error(error);
                            }
                            
                            trailerObject.results.find(trailer => {
                                if (trailer.name.includes('Official')) {
                                trailerKey = trailer.key;
                                return trailerKey} else {
                                trailerKey = trailerObject.results[0].key;
                                }
                            }) 
                        }

                        function onTrailer() {
                            document.querySelector("[data-trailerModal]").classList.remove("is-hidden");


                            let player;
                    
                            player = YouTubePlayer('player', {
                                width: '100%',
                                videoId: trailerKey,
                                host: 'https://www.youtube.com',
                            });
                        
                            player.playVideo();

                            function stopVideo() {
                                player.stopVideo();
                              }

                              document.querySelector("[data-trailerClose-button]").addEventListener('click', () => {
                                stopVideo();
                                document.querySelector("[data-trailerModal]").classList.add("is-hidden");
                            });

                        }
                }
            })
        });
    });
}

export default modal;