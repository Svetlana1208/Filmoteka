import axios from 'axios';
import { paramsPages } from "../index";

let url;

async function fetchRequest(searchQuery) {
    const key = '4273054ff6f056d7541ef873941254f6';
    url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
    // url = `https://pixabay.com/api/?key=${key}&q=${searchQuery}&fields=webformatURL,largeImageURL,tags,likes,views,comments,downloads`;
    try {
        const response = await axios.get(`${url}`, {params: {
            page: paramsPages.page,
            per_page: paramsPages.perPage,
        }});
        return response.data;
      } catch (error) {
        console.error(error);
      }
}

export default {fetchRequest};