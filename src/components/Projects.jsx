
import {Container,Box,Button,Typography} from '@mui/material'
import Contact from './Contact.jsx'
import projectList from './data.jsx'

import { Framer } from './Framer.jsx'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
export default function Projects(){

    const contactRef = useRef()

    const handleScrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      };
    
    return(
        <>

            <Container
            sx={{
                maxWidth:'1500px', 
                display:'flex',
                flexDirection:'column',
                position:'relative',
                alignItems:'center',
                zIndex:10,
                p:2,

            }}
            >
                <Box sx={{ ml:'auto' }}>
                    <Button variant='outlined' onClick={handleScrollToContact}
                    sx={{ 
                        color:'white',
                        border:'1px solid white',


                    
                    }}>
                        Contact
                    </Button>
                        
                </Box>   

            <Framer>
            <Box component='ul'>
                {projectList.map(project => <li key={project.id}><Link to={`/details/${project.id}`}>
                <Typography
                 component='h2'
                 variant='h1'
                 sx={{ 
                    fontSize:{xs:'4rem', md:'6rem'},
                    mb:1
                  }}
                 >{project.title}</Typography>
                </Link>
                </li>)}
            </Box>

                <Box ref={contactRef}
                    sx={{
                    minHeight:'100vh',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center' }}>
                    <Contact/>
                        
                </Box>

            </Framer>
            </Container>
   
        </>
    )
}