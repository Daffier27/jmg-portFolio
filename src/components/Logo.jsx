import {FcPrevious, FcNext} from 'react-icons/fc'
export default function Logo () {
return(
  <div className='logo'>
    <FcPrevious/>
    <span style={{'vertical-align': '0.3rem'}} >JMG</span>
    <FcNext/>
  </div>
)
}