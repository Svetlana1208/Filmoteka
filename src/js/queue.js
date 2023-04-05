import { movie } from "./modal";

const addToQueue = () => {
    const oldList = JSON.parse(localStorage.getItem('queue')) || [];
    oldList.push(movie);
    localStorage.setItem('queue', JSON.stringify(oldList));
}

export default addToQueue;