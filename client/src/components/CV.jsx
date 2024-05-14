import JoyResume from '../assets/Joy_Wu_Resume.pdf'


export default function CV() {
  return (
    <div className='cv-container'>
      <iframe className='cv-iframe' src={JoyResume} />
    </div>
  )
}