import React, { useState , useEffect} from 'react';
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode( false )

  console.log('darkMode :' , darkMode)

  useEffect(() =>{
    if(darkMode === true){
        document.querySelector('body').classList.add('dark-mode')
    }else if (darkMode === false){
        document.querySelector('body').classList.remove('dark-mode')
    }
}, [darkMode] )

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
