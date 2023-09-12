import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="navbar">
        <div className="container">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavigationBar;