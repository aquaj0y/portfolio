import Logo from '../assets/logo.png'

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <img className='footer-logo' src={Logo} alt='logo' />
        <div className='social-links'>
          <a href='https://github.com/aquaj0y'>Github</a>
          <a href='https://www.linkedin.com/in/joy-s-wu'>LinkedIn</a>
          <a href='https://twitter.com/AquaJ0y'>Twitter</a>
        </div>
      </div>
    </>
  )  
}

