 //Imports from node_modules
import { useState } from 'react'
import {FiAlignJustify} from 'react-icons/fi'

//Components
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import switchOpenState from '../helpers/switchOpenState'

//HOOKS
import useWindowWith from '../services/useWindowWith'



export default function Header() {
  const [isOpen, setOpen] = useState(useWindowWith < 768)

  return(
    <header className='main-header '>
      <Logo/>
      {(<button className='menu-button' onClick={() => switchOpenState(isOpen, setOpen)}>
        <FiAlignJustify className='menu-icon' style={{color:'white'}}/>
      </button>  
      )}
      <HeaderMenu isOpen={!isOpen} size={useWindowWith()}/>
    </header>
  )
}