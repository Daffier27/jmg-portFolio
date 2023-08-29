import PropTypes from 'prop-types'
export default function HeaderMenu ({ isOpen }) {
  if(!isOpen){
    return null
  }
  

  return(
    <nav className='header-menu'>
      <a className='menu-item' href="#">Proyectos</a>
      <a className='menu-item' href="#">Sobre Mí</a>
      <a className='menu-item' href="#">Habilidades</a>
      <a className='menu-item' href="#">Contacto</a>
    </nav>
  )
}

HeaderMenu.protoTypes = {
  isOpen: PropTypes.bool
}