import React from 'react'
import "./header.css"
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='div-logo'>
        <img className='logo' src={logo}/>
      </div>
      <div className='menu'>
        <div className='menu-items'>
          Home
        </div>
        <div className='menu-items'>
          About
        </div>
        <div className='menu-items'>
          Projects
        </div>
        <div className='menu-items'>
          Experience
        </div>
        <div className='menu-items'>
          Contact
        </div>
      </div>
    </div>
  )
}
