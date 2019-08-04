import React, { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

const useDarkMode = (bool) => {

    const [ darkMode, setDarkMode ] = useLocalStorage( `${bool}` , { isOn : `${bool}` } )

    return [darkMode, setDarkMode]
    
}

export default useDarkMode