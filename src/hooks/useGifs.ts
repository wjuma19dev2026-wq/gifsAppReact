import { useRef, useState } from "react"
import { GetGiphyByQuery } from "../http/GetGiphy"

import type { Gif } from "../Mocks/gifs.mock"

// const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {

  /* Saving Gifs in Cache */
  const gifsCache = useRef<Record<string, Gif[]>>({})


  const [gifs, setGifs] = useState<Gif[]>([])
  const [previewTerms, setPreviewsTerms] = useState<string[]>([''])
 

  const handlerPreviewTerms = async (term: string) => {

    if(gifsCache.current[term]) {
      setGifs(gifsCache.current[term])
      return
    }

    const newGifs = await GetGiphyByQuery(term)
    setGifs(newGifs)
  }

  const handlerAddPreviewTerms = async (term: string) => {
    if(term.trim().length === 0) return
    if(previewTerms.includes(term)) return
    setPreviewsTerms([term.toLowerCase(), ...previewTerms])

    const newGifs = await GetGiphyByQuery(term)
    setGifs(newGifs)

    gifsCache.current[term] = newGifs;
  }


  return {
    // values
    gifs,  
    previewTerms,


    // Methods
    handlerPreviewTerms,
    handlerAddPreviewTerms
  }

}