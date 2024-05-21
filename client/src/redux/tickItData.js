import { createSlice } from "@reduxjs/toolkit";

// Import Images
import TickItCover from '../assets/nomad-advisor-cover.png'

export const tickItSlice = createSlice({
  name: 'tickItData',
  initialState: {
    projectName: 'Tick-it',
    projectCoverImg: NomadAdvisorCover,
    tags: ['CSS', 'React', 'Django'],
    description: 'Upcoming concerts, sports event and venues in metropolitans cities',
    demoLink: '',
    githubLink: 'https://github.com/aquaj0y/Tick-iT-FrontEnd'
  },
  reducers:{}
})

export default nomadAdvisorSlice.reducer;