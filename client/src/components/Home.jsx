import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

import ProfilePic from '../assets/profile-pic.jpeg'

import Projects from './Projects'


export default function Home() {
  return (
    <>
      <div className='hero'>
        <div className='about-details'>
          <h2 className='hi-my-name'>Hi, my name is</h2>
          <h1>Joy Wu</h1>
          <h2>Full Stack Developer</h2>
          <Button
            id='email-btn'
            variant="contained"
            sx={{backgroundColor: 'white', color: 'black'}}
          ><Link to='/contact'>Email</Link></Button>

          <p className='bio'>I am a creative full stack software engineer with a passion for problem solving. My experience in web3, music and film allow me to work across disciplines and bring unique cultural value to the team. I want to bring my expertise in cross-disciplinary collaboration, innovative problem-solving, and technical versatility to tackle challenges in web development, focusing on creating responsive, accessible, and visually engaging websites.  I aspire to contribute to projects that bridge the gap between technology and the arts, creating more intuitive and engaging digital experiences for users worldwide.
          
          When I'm not coding, I would be traveling, making music, and trying out different food.
          </p>
        </div>
        <img className='profile-pic' src={ProfilePic} alt='profile-pic'></img>
        
      </div>
      <Projects />
    </>
  )
}