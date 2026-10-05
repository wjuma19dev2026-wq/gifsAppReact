import type { GiphyResponse } from '../interfaces/giphy-response.interface';
import type { Gif } from '../Mocks/gifs.mock';
import { giphyApi } from './Giphy';

export const GetGiphyByQuery = (query: string): Promise<Gif[]> => {

  return giphyApi.get<GiphyResponse>('/search', {
    params: {
      'q': query,
      'limit': 10,
    }
  })
    .then(response => {
      return response.data.data.map(gif => {



        const newGif: Gif = { 
          id: gif.id,
          title: gif.title,
          url: gif.images.original.url,
          height: Number(gif.images.original.height),
          width: Number(gif.images.original.width)
        }

        return newGif
      })
    })
}