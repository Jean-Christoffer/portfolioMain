
import {Container,Box,Button} from '@mui/material'
import Contact from './Contact.jsx'
import projectList from './data.jsx'
import Cards from './Cards.jsx'
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
            justifyContent:'center',
            position:'relative',
            alignItems:'center',
            zIndex:10,

            p:2,
            overflow:'hidden'
         }}
        >
            <Box sx={{ ml:'auto' }}>
                <Button variant='outlined' onClick={handleScrollToContact}>
                    Contact
                </Button>
                    
            </Box>   

          
            {projectList.map(project => {
                return <Framer key={project.id}>
                    
                    <Cards details={project} />
                </Framer>
            })}
       
                <Framer>
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