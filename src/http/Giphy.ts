import axios from 'axios';


export const giphyApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/v1/gifs`,
  params: {
    'offset': 0,
    'lang': 'es',
    'bundle': 'messaging_non_clips',
    'api_key': import.meta.env.VITE_GIPHY_API_KEY,
  }
})