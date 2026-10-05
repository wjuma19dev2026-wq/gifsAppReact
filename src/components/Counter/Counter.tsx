import { useState } from "react"


export const Counter = () => {
  
  const [counter, setCounter] = useState(0)
  
  return (
    <div className="container">
      <div className="mt-5">
        <button 
          type="button" 
          className="btn btn-light btn-lg">
            -
        </button>
        <h1 className="d-inline mx-5">{counter}</h1>  
        <button 
          type="button" 
          className="btn btn-light btn-lg">
            +
        </button>
      </div>
    </div>
  )
}

