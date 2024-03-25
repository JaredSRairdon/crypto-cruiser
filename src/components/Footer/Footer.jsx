import React from 'react'
import './Footer.css'
import Newsletter from './Newsletter'
import { Link } from 'react-router-dom'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiIndeed } from 'react-icons/si'

function Footer() {
  return (
    <footer className="footer-content">
      <div className="footer-top">
        <Newsletter/>
        <div className="footer-link-container">
          <div className="footer-link-column">
            <h3>Links</h3>
            <ul>
              <li><Link to="/" className='link'>Home</Link></li>
              <li><Link to="about" className='link'>About</Link></li>
              {/* <li><Link to="account" className='link'>Account</Link></li> */}
            </ul>
          </div>
          <div className="footer-link-column">
            <h3>Projects</h3>
            <ul>
              <li><a href="https://jaredsrairdon.github.io/brick-click/">Brick Click</a></li>
              <li><a href="https://jaredsrairdon.github.io/emoji-tac-toe/">Emoji-Tac-Toe!</a></li>
            </ul>
          </div>
          <div className="footer-link-column">
            <h3>Socials</h3>
            <ul>
              <li><a href="">LinkedIn</a></li>
              <li><a href="">Indeed</a></li>
              <li><a href="">My Portfolio!</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <h1>Crypto Cruiser</h1>
        <div className="privacy-policy">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
        <div className="social-icons">
          <AiFillGithub className='social-icon'/>
          <AiFillLinkedin className='social-icon'/>
          <SiIndeed className='social-icon'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer