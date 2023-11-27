import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

function ThemeProvider({ children }) {
    const { theme } = useContext(ThemeContext)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])

    if(isMounted) {
      return (
        <div className={theme}>
          { children }
        </div>
      )
    }

}

export default ThemeProvider
