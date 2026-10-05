export const Heading = ({titulo, contenido}) => {
  return (
    <div>
      <h1 className="text-uppercase m-0">{titulo}</h1>
      <p className="text-muted lead">{contenido}</p>
    </div>
  )
}


