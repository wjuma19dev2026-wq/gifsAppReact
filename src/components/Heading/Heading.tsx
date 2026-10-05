import PropTypes from 'prop-types';


export const Heading = (props: { titulo: string, contenido: string }) => {
  return (
    <div>
      <h1 className="text-uppercase m-0">{props.titulo}</h1>
      <p className="text-muted lead">{props.contenido}</p>
    </div>
  )
}


Heading.propTypes = {
  titulo: PropTypes.string.isRequired,
  contenido: PropTypes.string.isRequired
}