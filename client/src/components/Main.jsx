import {Routes, Route} from 'react-router-dom'

import Projects from './Projects'
import Web3 from './Web3'
import CV from './CV'
import Contact from './Contact'
import Home from './Home'
import ProjectDetails from './ProjectDetails'

export default function Main() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/web3' element={<Web3 />}></Route>
        <Route path='/cv' element={<CV />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/projects/:name' element={<ProjectDetails />} />
      </Routes>
    </>
  )  
}
