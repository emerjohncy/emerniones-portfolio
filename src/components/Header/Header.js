import React from 'react'
import "./header.css"
import Logo from './Logo'
import NavItem from './NavItem'
import Hamburger from './Hamburger'

export default function Header({isClicked, setIsClicked}) {
  return (
    <div className='header'>
      <div className='div-logo'>
        <Logo />
      </div>
      <div className='div-nav'>
        <NavItem />
      </div>
      <div className='div-hamburger'>
        <Hamburger isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
    </div>
  )
}
