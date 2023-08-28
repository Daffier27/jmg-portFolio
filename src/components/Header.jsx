import {FiAlignJustify} from 'react-icons/fi'
export default function Header() {
  return(
  <header className="main-header ">
    <button className='menu-button'>
     <FiAlignJustify className='menu-icon' style={{color:'white'}}/>
    </button>
        <nav className="header-menu">
                <a href="#">Proyectos</a>
                <a href="#">Sobre Mí</a>
                <a href="#">Habilidades</a>
                <a href="#">Contacto</a>
        </nav>
    </header>
)
}