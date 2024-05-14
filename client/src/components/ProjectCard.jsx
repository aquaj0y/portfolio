// import { NavLink } from "react-router-dom"


// export default function ProjectCard({ projectName='joy', projectCoverImg, tags, initialElevation = 2, hoverElevation = 11, description }) {
//     const [elevation, setElevation] = useState(initialElevation)

//     return (
//       <Grid className='project-item' item xs={12} md={6}>
//         <NavLink
//           to={`/projects/${projectName}`}
//           state={{ }} >
//           <Paper
//             sx={{ maxWidth: '45em', m: 'auto' }}
//             elevation={elevation}
//             onMouseOver={() => setElevation(hoverElevation)}
//             onMouseOut={()=> setElevation(initialElevation)}
//           >
//             <CardMedia
//               sx={{ height: 350, width: '100%' }}
//               image={projectCoverImg}
//             />
//             <CardContent sx={{ backgroundColor: '#e6b3b3' }}>
//               <Typography variant="h5" component="div" sx={{ paddingTop: 2 }}>
//                 {projectName}
//               </Typography>
//               <div className='tags-container'>
//                 {tags.map((tag) => <h3 className='tag'>{tag}</h3>) }
//               </div>
//               <Typography variant='body1'>{description}</Typography>
//             </CardContent>
//           </Paper>
//         </NavLink>
//       </Grid>
//     )
//   }
