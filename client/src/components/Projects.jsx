import { useState } from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../counter';
import { nomadAdvisorSlice } from '../redux/nomadAdvisorData';

// MUI
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardContent, Typography, Stack, Paper } from '@mui/material'

// REACT ICON Technologies
import { IconContext } from "react-icons";
import { IoLogoJavascript } from "react-icons/io5"; 
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiDjango } from "react-icons/si";

// Import Images
// import NomadAdvisorCover from '../assets/nomad-advisor-cover.png'
import TickItCover from '../assets/tick-it-1.png'
import WeatherAPICover from '../assets/weatherAPI-cover.png'
import NewFashionedCover from '../assets/new-fashioned-cover.png'
import StarWarUniverseCover from '../assets/star-war-universe-cover.png'
import TravelBugCover from '../assets/travel-bug-cover.png'
import { red } from '@mui/material/colors';


export default function Projects() {
  let navigate = useNavigate();
  const nomadAdvisorData = useSelector((state) => state.nomadAdvisorData)

  function ProjectCard({ projectName, projectCoverImg, tags, initialElevation = 2, hoverElevation = 11, description, demoLink, githubLink}) {
    const [elevation, setElevation] = useState(initialElevation)


    return (
      <Grid className='project-item' item xs={12} md={6}>
        <NavLink
          to={`/projects/${projectName}`}
          // Navlink state to pass down states, use useLocation to receive
          state={{projectName, projectCoverImg, tags, description, demoLink, githubLink}}
        >
          <Paper
            sx={{ maxWidth: '45em', m: 'auto' }}
            elevation={elevation}
            onMouseOver={() => setElevation(hoverElevation)}
            onMouseOut={()=> setElevation(initialElevation)}
          >
            <CardMedia
              sx={{
                height: 350,
                width: '100%'
              }}
              image={projectCoverImg}
            />
            <CardContent sx={{ backgroundColor: '#e6b3b3' }}>
              <Typography variant="h5" component="div" sx={{ paddingTop: 2 }}>
                {projectName}
              </Typography>
              <div className='tags-container'>
                {tags.map((tag) => <h3 className='tag'>{tag}</h3>) }
              </div>
              <Typography variant='body1'>{description}</Typography>
            </CardContent>
          </Paper>
        </NavLink>
      </Grid>
    )
  }

  return (
    <>
      {/* Technologies I use */}
      <Typography variant='h3' sx={{paddingTop: '1em', paddingBottom: '2em', textAlign: 'center' }}>Technologies I Use</Typography>
      <div className='technologies'>
        <Grid container spacing={5} direction="row"
        wrap='wrap'
        justifyContent="center"
        alignItems="center"
      >
        <IconContext.Provider value={{ size: 50 }}>
          <Grid item xs={4} sm={3} md={2.4} >
            <Stack direction='row' spacing={0} sx={{width: {xs: 50, sm: 200}}}>
              <IoLogoJavascript />
              <Typography variant= 'h6'>JavaScript</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={3} md={2.4} >
            <Stack direction='row' spacing={0} sx={{width: {xs: 50, sm: 200}}}>
              <FaReact />
              <Typography variant= 'h6'>React</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={3} md={2.4} >
            <Stack direction='row' spacing={0} sx={{width: {xs: 50, sm: 200}}}>
              <FaHtml5 />
              <Typography variant= 'h6'>HTML 5</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={3} md={2.4} >
            <Stack direction='row' spacing={0} sx={{width: {xs: 50, sm: 200}}}>
              <FaCss3Alt />
              <Typography variant= 'h6'>CSS</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={3} md={2.4} >
            <Stack direction='row' spacing={0} sx={{width: {xs: 50, sm: 200}}}>
              <FaNodeJs />
              <Typography variant= 'h6'>NodeJS</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={3} md={2.4} >
            <Stack direction='row' spacing={0} sx={{width: {xs: 50, sm: 200}}}>
              <SiMongodb />
              <Typography variant= 'h6'>MongoDB</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={3} md={2.4} >
            <Stack direction='row' spacing={0} sx={{width: {xs: 50, sm: 200}}}>
              <SiExpress />
              <Typography variant= 'h6'>ExpressJS</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={3} md={2.4} >
            <Stack direction='row' spacing={0} sx={{width: {xs: 50, sm: 200}}}>
              <FaFigma />
              <Typography variant= 'h6'>Figma</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={3} md={2.4} >
            <Stack direction='row' spacing={0} sx={{width: {xs: 50, sm: 200}}}>
              <SiMui />
              <Typography variant= 'h6'>Material UI</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={3} md={2.4} >
            <Stack direction='row' spacing={0} sx={{width: {xs: 50, sm: 200}}}>
              <SiDjango />
              <Typography variant= 'h6'>Django</Typography>
            </Stack>
          </Grid>


        </IconContext.Provider>
        </Grid>
      </div>

      {/* Projects */}
      <Typography variant='h3' sx={{ padding: '2em', textAlign: 'center' }}>Projects</Typography>
      <div className='projects-grid'>
        <Grid container spacing={10} maxWidth='lg'>
          
          {/* Nomad Advisor */}
          <ProjectCard 
            projectName= {nomadAdvisorData.projectName}
            projectCoverImg={nomadAdvisorData.projectCoverImg}
            tags={nomadAdvisorData.tags}
            elevation={2}
            hoverElevation={11}
            description={nomadAdvisorData.description}
            demoLink={nomadAdvisorData.demoLink}
            githubLink={nomadAdvisorData.githubLink}
          />

          <ProjectCard 
            projectName= 'Tick-it'
            projectCoverImg={TickItCover}
            tags={['CSS', 'React', 'Django']}
            elevation={2}
            hoverElevation={11}
            description = 'Upcoming concerts, sports event and venues in metropolitans cities'
          />

          {/* Weather API */}
          <ProjectCard 
            projectName= 'Weather API'
            projectCoverImg={WeatherAPICover}
            tags={['HTML', 'CSS', 'JavaScript']}
            elevation={2}
            hoverElevation={11}
            description = 'Get instant weather forecasts for any city with a simple, intuitive interface.'
          />

          {/* New Fashioned */}
          <ProjectCard 
            projectName= 'New Fashioned'
            projectCoverImg={NewFashionedCover}
            tags={['CSS', 'React', 'API', 'SwiperJS']}
            elevation={2}
            hoverElevation={11}
            description = 'Discover alcoholic and non-alcoholic cocktail recipes, powered by an external API'
          />

          {/* Starwars */}
          <ProjectCard 
            projectName= 'Star War Universe'
            projectCoverImg={StarWarUniverseCover}
            tags={['React', 'API']}
            elevation={2}
            hoverElevation={11}
            description = 'interactive front-end application utilizes the Star Wars API to deliver detailed information on planets, starships, and more'
          />

          {/* Travel Bug */}
          <ProjectCard 
            projectName='Travel Bug'
            projectCoverImg={TravelBugCover}
            tags={['React', 'MongoDB', 'ExpressJS', 'NodeJS']}
            elevation={2}
            hoverElevation={11}
            description='An itinerary app where you can plan and organize trips, create trip lists, and include activities'
            githubLink={'https://github.com/AbeGue02/travel-bug'}
          />

        </Grid>
      </div>
    </>
  )
}