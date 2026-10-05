import type { FC } from "react"
import type { Gif } from "../../Mocks/gifs.mock"

interface Props {
  gifs: Gif[]
}

export const GifsList: FC<Props> = ({ gifs }) => {
  return (
    <div className="row">
      {gifs.map((gif) => (
      <div className="col-12 col-md-4 col-lg-3">
        <div className="card" key={gif.id}>
          <img src={gif.url} className="card-img-top" alt={gif.title} />
          <div className="card-body">
            <p className="card-title m-0">{gif.title} </p>
            <p className="card-subtitle"> 
              {gif.width} x {gif.height}
              <small className="text-muted mx-1">
                (1.5mb)
              </small>
            </p>
          </div>
        </div>
      </div>
      ))}
  </div>
  )
}


