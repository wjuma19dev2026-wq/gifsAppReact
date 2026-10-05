import type { FC } from "react"

interface Props {
  previewTerms: string[],
  onHandlerPreviewTerms: (term: string) => void 
}


export const RecentSearchingt: FC<Props> = ({ previewTerms, onHandlerPreviewTerms }) => {


  return (
    <div className="busquedas-prev mt-3">
      <h2>Busquedas Recientes</h2>

      <ul className="list-group">

        {
          previewTerms.map((term) => (
          <li key={term}>
            <a onClick={() => onHandlerPreviewTerms(term)} className="text-decoration-none" href="#">
              <span className="badge bg-primary">{term}</span>
            </a>
          </li>
          ))
        }
       
      </ul>
    </div>
  )
}

 