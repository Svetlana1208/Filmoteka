import { movie } from "./modal";

const addToWatched = () => {
    const oldList = JSON.parse(localStorage.getItem('watchedList')) || [];
    oldList.push(movie);
    localStorage.setItem('watchedList', JSON.stringify(oldList));
}

export default addToWatched;