import { useEffect, useState } from 'react'
import {FiAlignJustify} from 'react-icons/fi'

import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import switchOpenState from '../helpers/switchOpenState'

import {mobileWidth} from '../helpers/constants'



export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isOpen, setOpen] = useState(mobileWidth(windowWidth))
  
  useEffect(() =>{
    const handleRisize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleRisize)

    return () => {
      window.removeEventListener('resize', handleRisize);
    }
  },[])
  

  return(
    <header className='main-header '>
      <Logo/>
      {(<button className='menu-button' onClick={() => switchOpenState(isOpen, setOpen)}>
        <FiAlignJustify className='menu-icon' style={{color:'white'}}/>
      </button>  
      )}
      
      <HeaderMenu isOpen={isOpen} size={windowWidth}/>
      
    </header>
  )
}