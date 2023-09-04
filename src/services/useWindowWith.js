import { useState, useEffect } from "react"

export default function useWindowWith () {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() =>{
    const handleRisize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleRisize)

    return () => {
      window.removeEventListener('resize', handleRisize);
    }
  },[])

  return windowWidth
}