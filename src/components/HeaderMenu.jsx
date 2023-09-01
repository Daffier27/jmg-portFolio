import PropTypes from 'prop-types'
export default function HeaderMenu ({ isOpen, size }) {
  if(isOpen && size <= 768){
    return 
  }
  const items = [ 'Proyectos', 'Sobre mí', 'Habilidades', 'Contacto']

  return(
    <nav className='header-menu'>
      {items.map((item, index ) => <a key={index + item} className='menu-item' href='#'><span>{item}</span></a>)}
    </nav>
  )
}

HeaderMenu.propTypes = {
  isOpen: PropTypes.bool,
  size: PropTypes.number
}