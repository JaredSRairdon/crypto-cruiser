import React, {useContext} from 'react';
import { CryptoContext } from '../CryptoContext';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import SignIn from './SignIn';
import SignOut from './SignOut';


function NavigationBar() {
  const { auth, user } = useContext(CryptoContext);

  return (
    <header className='header'>
      <h1 className="site-logo">Crypto Cruiser</h1>
      <nav className="navbar">
          <Link to="/" className='link'>Home</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/account" className='link'>Account</Link>
          {user ? <SignOut/>:<SignIn/>}
      </nav>
    </header>
  )
}

export default NavigationBar;