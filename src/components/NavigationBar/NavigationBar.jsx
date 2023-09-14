import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

function NavigationBar() {
  return (
    <header className='header'>
      <h1 className="site-logo">Crypto Cruiser</h1>
      <nav className="navbar">
          <Link to="/" className='link'>Home</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/contact" className='link'>Contact</Link>
      </nav>
    </header>
  )
}

export default NavigationBar;