import React from 'react'
import './Footer.css'
import { AiOutlineArrowRight } from 'react-icons/ai'


function Newsletter() {
  return (
    <div className="newsletter-container">
        <h2>Get in Touch!</h2>
        <div className="newsletter-input-container">
            <input type="text" name="email" id="email" />
            <button type="submit"><AiOutlineArrowRight/></button>
        </div>
        <p>Hello! My name is Jared Rairdon and I hope you are enjoying this application. I am a full-stack developer based out of Dallas, TX and would love to chat. Please reach out with your email above to get in touch with me! 👋</p>
    </div>
  )
}

export default Newsletter