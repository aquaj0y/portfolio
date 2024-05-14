import {useLocation} from 'react-router-dom'

// MUI
import Button from '@mui/material/Button';

export default function ProjectDetails() {
  const location = useLocation()
  console.log(location)
  console.log(location.state)
  
  const projectData = location.state

  const travelBugData = {
    gitHubLink: 'https://github.com/AbeGue02/travel-bug',
    demoLink: '',
    imgClassName: 'mobile'
  }

  return (
    <div className='project-details-container'>
      {/* Screenshots */}
      <div className='screenshots-container'> 
        <img src={projectData.projectCoverImg} />
      </div>
      <div className='project-title-container'> 
        <h2 className='project-title'>{projectData.projectName}</h2>
        <Button className='project-details-btn' variant='outlined'>Demo</Button>
        <Button className='project-details-btn' variant='outlined'>Code</Button>
      </div>

      <p>{projectData.description}</p>
      <div className='project-details-tags'>
        {projectData.tags.map((tag) => <h3 className='tag'>{tag}</h3>)}
      </div>
    </div>
  )
}