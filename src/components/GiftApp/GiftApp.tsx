import { Fragment } from "react/jsx-runtime";
import { Heading } from "../Heading/Heading";
import { Searchbar } from "../Searchbar/Searchbar";
import { GifsList } from "../GifsList/GifsList";
import { RecentSearchingt } from "../RecentSearching/RecentSearchingt";
// import { useState } from "react";
// import { GetGiphyByQuery } from "../../http/GetGiphy";
// import { type Giphy } from '../../http/GetGiphy'
import { useGifs } from "../../hooks/useGifs";

const GiftApp = () => {

  const { gifs, handlerAddPreviewTerms, handlerPreviewTerms, previewTerms } = useGifs()

  return (
    <Fragment> 

      <header className="text-center mt-5">

        <Heading 
          titulo="buscardor de gif"
          contenido="descubre y comparte el gift perfecto"
        />


        <Searchbar 
          placeholder="buscar un gif" 
          onHandlerAddPreviewTerm={handlerAddPreviewTerms}
        />

        <RecentSearchingt 
          previewTerms={previewTerms} 
          onHandlerPreviewTerms={handlerPreviewTerms} />
          
      </header>

      <main className="container mt-5">
        <GifsList gifs={gifs} />
      </main>
      
    </Fragment>
  ) 
};

export default GiftApp;
