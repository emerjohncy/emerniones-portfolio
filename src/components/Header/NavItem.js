import React from 'react'
import "./nav-item.css"

export default function NavItem({isClicked}) {
    const navItems = [
        "HOME",
        "ABOUT",
        "PROJECTS",
        "EXPERIENCE",
        "CONTACT"
    ]

    return (
    <>
        {navItems.map((item, index) => (
            <div key={index} className={`${isClicked ? "menu-items-active" : "menu-items"}`}>{item}</div>
        ))}
        
    </>
  )
}
