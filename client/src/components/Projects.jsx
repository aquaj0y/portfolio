import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
import NomadAdvisorCover from '../assets/nomad-advisor-cover.png'
import TickItCover from '../assets/tick-it-1.png'
import WeatherAPICover from '../assets/weatherAPI-cover.png'
import NewFashionedCover from '../assets/new-fashioned-cover.png'
import StarWarUniverseCover from '../assets/star-war-universe-cover.png'
import TravelBugCover from '../assets/travel-bug-cover.png'


export default function Projects() {
  let navigate = useNavigate();

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
          <Grid className='project-item' item xs={12} md={6}>
            <Link to={`/projects/nomad-advisor`} >
              <Paper sx={{ maxWidth: '45em', m: 'auto' }} elevation={2}>
                <CardMedia
                  sx={{height: 350, width: '100%'}}
                  image={NomadAdvisorCover}
                />
                <CardContent  sx={{backgroundColor: '#e6b3b3'}}>
                  <Typography  variant="h5" component="div" sx={{paddingTop: 2}}>
                  Nomad Advisor
                  </Typography>
                  <div className='tags-container'>
                    <h3 className='tag'>React</h3>
                    <h3 className='tag'>Material UI</h3>
                    <h3 className='tag'>Django</h3>
                  </div>
                  <Typography variant='body1'>For travelers and digital nomads in discovering new cities and sharing their experiences. </Typography>
                </CardContent>
              </Paper>
            </Link>
          </Grid>
        
          {/* Tick-it */}
          <Grid className='project-item' item xs={12} md={6}>
            <Link to='/projects/tick-it' >
              <Paper sx={{ maxWidth: '45em', m: 'auto' }} elevation={2}>
                <CardMedia
                  sx={{height: 350, width: '100%'}}
                  image={TickItCover}
                />
                <CardContent  sx={{backgroundColor: '#e6b3b3'}}>
                  <Typography  variant="h5" component="div" sx={{paddingTop: 2}}>
                  Tick-it
                  </Typography>
                  <div className='tags-container'>
                    <h3 className='tag'>CSS</h3>
                    <h3 className='tag'>React</h3>
                    <h3 className='tag'>Django</h3>
                  </div>
                  <Typography variant='body1'>Upcoming concerts, sports event and venues in metropolitans cities</Typography>
                </CardContent>
              </Paper>
            </Link>
          </Grid>

          {/* Weather API */}
          <Grid className='project-item' item xs={12} md={6}>
            <Paper sx={{ maxWidth: '45em', m: 'auto' }} elevation={2}>
              <CardMedia
                sx={{height: 350, width: '100%'}}
                image={WeatherAPICover}
              />
              <CardContent  sx={{backgroundColor: '#e6b3b3'}}>
                <Typography  variant="h5" component="div" sx={{paddingTop: 2}}>
                Weather API
                </Typography>
                <div className='tags-container'>
                  <h3 className='tag'>HTML5</h3>
                  <h3 className='tag'>CSS</h3>
                  <h3 className='tag'>JavaScript</h3>
                </div>
                <Typography variant='body1'>Get instant weather forecasts for any city with a simple, intuitive interface.</Typography>
              </CardContent>
            </Paper>
          </Grid>

          {/* New Fashioned */}
          <Grid className='project-item' item xs={12} md={6}>
            <Paper sx={{ maxWidth: '45em', m: 'auto' }} elevation={2}>
              <CardMedia
                sx={{height: 350, width: '100%'}}
                image={NewFashionedCover}
              />
              <CardContent  sx={{backgroundColor: '#e6b3b3'}}>
                <Typography  variant="h5" component="div" sx={{paddingTop: 2}}>
                New Fashioned
                </Typography>
                <div className='tags-container'>
                  <h3 className='tag'>CSS</h3>
                  <h3 className='tag'>React</h3>
                  <h3 className='tag'>API</h3>
                  <h3 className='tag'>SwiperJS</h3>
                </div>
                <Typography variant='body1'>Discover alcoholic and non-alcoholic cocktail recipes, powered by an external API</Typography>
              </CardContent>
            </Paper>
          </Grid>

          {/* Starwars */}
          <Grid className='project-item' item xs={12} md={6}>
            <Paper sx={{ maxWidth: '45em', m: 'auto' }} elevation={2}>
              <CardMedia
                sx={{height: 350, width: '100%'}}
                image={StarWarUniverseCover}
              />
              <CardContent  sx={{backgroundColor: '#e6b3b3'}}>
                <Typography  variant="h5" component="div" sx={{paddingTop: 2}}>
                Star War Universe
                </Typography>
                <div className='tags-container'>
                  <h3 className='tag'>React</h3>
                  <h3 className='tag'>API</h3>
                </div>
                <Typography variant='body1'> interactive front-end application utilizes the Star Wars API to deliver detailed information on planets, starships, and more</Typography>
              </CardContent>
            </Paper>
          </Grid>

          {/* Travel Bug */}
          <Grid className='project-item' item xs={12} md={6}>
            <Paper sx={{ maxWidth: '45em', m: 'auto' }} elevation={2}>
              <CardMedia
                sx={{height: 350, width: '100%'}}
                image={TravelBugCover}
              />
              <CardContent  sx={{backgroundColor: '#e6b3b3'}}>
                <Typography  variant="h5" component="div" sx={{paddingTop: 2}}>
                Travel Bug
                </Typography>
                <div className='tags-container'>
                  <h3 className='tag'>React</h3>
                  <h3 className='tag'>MongoDB</h3>
                  <h3 className='tag'>ExpressJS</h3>
                  <h3 className='tag'>NodeJS</h3>
                </div>
                <Typography variant='body1'>An itinerary app where you can plan and organize trips, create trip lists, and include activities</Typography>
              </CardContent>
            </Paper>
          </Grid>

        </Grid>
      </div>
    </>
  )
}