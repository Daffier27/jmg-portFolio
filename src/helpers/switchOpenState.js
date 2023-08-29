export default function switchOpenState (isOpen, setOpen) {
  if(isOpen === 'close'){
    setOpen('open') 
  }else {
    setOpen('close')
  }
}