import React from 'react'
import "./logo.css"
import logo from '../../assets/logo.png'

export default function Logo() {
  return (
    <a href='#home'>
      <img className='logo' src={logo} />
    </a>
  )
}
