import { IconContext } from 'react-icons';
import Logo from '../assets/logo.png'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <img className='footer-logo' src={Logo} alt='logo' />
        <div className='social-links'>
          <IconContext.Provider value={{ size: 30 }}>
            <a href='https://github.com/aquaj0y'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/joy-s-wu'><FaLinkedin /></a>
            <a href='https://twitter.com/AquaJ0y'><FaTwitter /></a>
          </IconContext.Provider>
        </div>
      </div>
    </>
  )  
}

