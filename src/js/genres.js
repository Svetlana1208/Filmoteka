import {key} from "./vars";
const genresList = {};

const fetchRequestGenres = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
    const dataGenres = await response.json();
    makeGenresList(dataGenres);

    return genresList;
}

function makeGenresList(dataGenres) {
    for (const genre of dataGenres.genres) {
        genresList[genre.id] = genre.name;
    }
}
export default fetchRequestGenres;

export {genresList};