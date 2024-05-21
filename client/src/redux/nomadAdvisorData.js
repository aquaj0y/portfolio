import { createSlice } from "@reduxjs/toolkit";

// Import Images
import NomadAdvisorCover from '../assets/nomad-advisor-cover.png'

export const nomadAdvisorSlice = createSlice({
  name: 'nomadAdvisorData',
  initialState: {
    projectName: 'Nomad Advisor',
    projectCoverImg: NomadAdvisorCover,
    tags: ['React', 'Django', 'MUI'],
    description: 'For travelers and digital nomads in discovering new cities and sharing their experiences',
    demoLink: '',
    githubLink: 'https://github.com/aquaj0y/nomad_advisor'
  },
  reducers:{}
})

export default nomadAdvisorSlice.reducer;