import { useState } from 'react'
import {FiAlignJustify} from 'react-icons/fi'

import HeaderMenu from './HeaderMenu'
import switchOpenState from '../helpers/switchOpenState'



export default function Header() {
  const [isOpen, setOpen] = useState(false)
  
  

  return(
    <header className='main-header '>
      <button className='menu-button' onClick={()=> switchOpenState(isOpen, setOpen)}>
        <FiAlignJustify className='menu-icon' style={{color:'white'}}/>
      </button>      
      <HeaderMenu isOpen={isOpen} setOpen={setOpen}/>
    </header>
  )
}