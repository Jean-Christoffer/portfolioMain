
import {Container} from '@mui/material'

import projectList from './data.jsx'
import Cards from './Cards.jsx'
import { Framer } from './Framer.jsx'
export default function Projects(){



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
            {projectList.map(project => {
                return <Framer key={project.id}>
                    <Cards details={project} />
                </Framer>
            })}
        </Container>
        </>
    )
}