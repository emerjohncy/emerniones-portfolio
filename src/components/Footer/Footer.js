import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='div-footer-row'>
            <div className='div-footer-column'>
                <a className='footer-nav-item' href='#home'>HOME</a>
                <a className='footer-nav-item' href='#about'>ABOUT</a>
                <a className='footer-nav-item' href='#projects'>PROJECTS</a>
                <a className='footer-nav-item' href='#journey'>JOURNEY</a>
                <a className='footer-nav-item' href='#contact'>CONTACT</a>
            </div>
            <div className='div-footer-right'>
                <div className='div-footer-column'>
                    <a className='footer-social' href='https://www.linkedin.com/in/emer-john-niones/' target='_blank'>LINKEDIN</a>
                    <a className='footer-social' href='https://github.com/emerjohncy' target='_blank'>GITHUB</a>
                    <a className='footer-social' href='https://www.facebook.com/emerjohnjohn/' target='_blank'>FACEBOOK</a>
                    <a className='footer-social' href='https://www.instagram.com/emerjohnjohn/' target='_blank'>INSTAGRAM</a>
                    <br></br>
                    <a className='footer-social' href='mailto:nionesemerjohn@gmail.com' target='_blank'>NIONESEMERJOHN@GMAIL.COM</a>
                </div>
                <div className='div-footer-column'>
                    <p className='footer-info'>FEEL FREE TO REACH OUT TO ME &#128522; </p>
                    <p className='footer-info'>I AM BASED IN BATAAN BUT I <br></br> OFTEN VISIT MAKATI AND TAGUIG</p>
                </div>
            </div>
        </div>
        <div className='div-footer-row'>
            <span className='footer-copyright'>COPYRIGHT &#169; 2024 EMER JOHN NIONES. ALL RIGHTS RESERVED</span>
            <a className='footer-source-code' href='https://github.com/emerjohncy/emerniones-portfolio' target='_blank'>SOURCE CODE</a>
        </div>
    </div>
  )
}
