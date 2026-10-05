import { useState, type ChangeEvent, type KeyboardEvent, useEffect } from 'react'

interface Props {
  placeholder: string,
  onHandlerAddPreviewTerm: (term: string) => void
}

export const Searchbar = ( { placeholder = 'buscar', onHandlerAddPreviewTerm } : Props ) => {

  const [query, setQuery] = useState('')

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onHandlerAddPreviewTerm(query)
    }, 700)

    return () => {
      clearTimeout(timeOutId)
    }
  }, [query, onHandlerAddPreviewTerm]) 

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const writingText = event.target.value
    setQuery(writingText)
  }

  const onHandlerKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter' && query.trim().length > 0) {
      onHandlerAddPreviewTerm(query)
    }
  }



  return (
    <div className="input-group w-50 mx-auto d-flex justify-content-center">
      
      <input 
        onChange={onInputChange}
        value={query}
        type="text" 
        className="form-control w-25 mx-auto d-inline" 
        placeholder={placeholder} 
        onKeyDown={onHandlerKeyPress}
      />

      <button 
        className="btn btn-primary"
        onClick={() => onHandlerAddPreviewTerm(query)}
      >Buscar</button>

    </div>
  )
  
}

