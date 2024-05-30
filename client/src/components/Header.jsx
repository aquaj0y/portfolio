import Logo from '../assets/logo.png'
import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  // const [position, setPosition] = useState(window.pageYOffset)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 20)
    }
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <header>
        <nav className={scroll ? 'sticky' : 'nav-container'}>
          <div className={scroll ? 'inner-nav' : 'inner-nav-home'}>
            <Link to='/'><img className={scroll ? "logo" : "logo-lg-home"} src={Logo} /></Link>
              <ul className='menu'>
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
            </div>
          </nav>
        </header>
        
        {/* <div className='header-container-simple'>
          <Link to='/'><img className="logo logo-lg" src={Logo} /></Link>
        </div> */}

    </>
  )

}

