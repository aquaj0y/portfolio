import Logo from '../assets/logo.png'
import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  const [position, setPosition] = useState(window.pageYOffset)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset
      // console.log(moving)
      if (moving > 50) {
        setShowNav(true)
      }
      else {
        setShowNav(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
      return(() => {
          window.removeEventListener("scroll", handleScroll);
      })
  }, [])

  return (
    <>
      {showNav ?
        <div className='header-container'>
          <nav className='nav-container'>
            <Link to='/'><img className="logo" src={Logo} /></Link>
            <ul className='navbar'>
              <li>
                <Link to="/projects" className='nav-link'>Projects</Link>
              </li>
              <li>
                <Link to="/web3" className='nav-link'>Web3</Link>
              </li>
              <li>
                <Link to="/cv" className='nav-link'>CV</Link>
              </li>
              <li>
                <Link to="/contact" className='nav-link'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        :
        <div className='header-container-simple'>
          <Link to='/'><img className="logo logo-lg" src={Logo} /></Link>
        </div>
      }
    </>
  )

}

