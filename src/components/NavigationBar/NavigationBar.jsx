import React, {useContext} from 'react';
import { CryptoContext } from '../../contexts/CryptoContext';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import SignIn from '../SignIn/SignIn';
import SignOut from '../SignOut/SignOut';


function NavigationBar() {
  const { auth, user } = useContext(CryptoContext);

  return (
    <header className='header'>
      <h1 className="site-logo">Crypto Cruiser</h1>
      <nav className="navbar">
          <Link to="/crypto-cruiser" className='link'>Home</Link>
          <Link to="/crypto-cruiser/about" className='link'>About</Link>
          <Link to="/crypto-cruiser/account" className='link'>Account</Link>
          {/* {user ? <SignOut/>:<SignIn/>} */}
      </nav>
    </header>
  )
}

export default NavigationBar;