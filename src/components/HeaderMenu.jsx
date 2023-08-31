import PropTypes from 'prop-types'
export default function HeaderMenu ({ isOpen, size }) {
  if(isOpen && size <= 768){
    return null
  }
  const items = [ 'Proyectos', 'Sobre mí', 'Habilidades', 'Contacto']

  return(
    <nav className='header-menu'>
      {items.map((item, index ) => <a key={index + item} className='menu-item' href='#'>{item}</a>)}
    </nav>
  )
}

HeaderMenu.propTypes = {
  isOpen: PropTypes.bool,
  size: PropTypes.number
}