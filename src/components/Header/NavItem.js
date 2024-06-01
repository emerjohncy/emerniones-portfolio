import React from 'react'
import "./nav-item.css"

export default function NavItem({isClicked, setIsClicked}) {
    const navItems = [
        "HOME",
        "ABOUT",
        "PROJECTS",
        "EXPERIENCE",
        "CONTACT"
    ]

    function ToLowerCase(string){
        return string.toLowerCase();
    }

    function HandleNavLinkClick(){
        {setIsClicked(false)};
    }

    return (
    <>
        {navItems.map((item, index) => (
            <div className='div-menu-item' onClick={HandleNavLinkClick} key={index}>
                <a className={`${isClicked ? "menu-items-active" : "menu-items"}`} href={`#${ToLowerCase(item)}`}>{item}</a>
            </div>
        ))}
    </>
  )
}
