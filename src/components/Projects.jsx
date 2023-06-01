import Cards from "./Cards"
import {Container,Box,Typography} from '@mui/material'

export default function Projects(){
    const projectList =
 [
    {
     title:'Wave',
     excerpt:'',
     type:'',
     img:'images/wave1.jpg',
     id:1
    },

    {
        title:'Museum',
        excerpt:'',
        type:'',
        img:'images/museum.jpg',
        id:2
    },

    {
        title:'Gamehub',
        excerpt:'',
        type:'',
        img:'images/gamehub.jpg',
        id:3
    },
]

    return(
        <>
            <Container>
                <Typography component='p' variant="body">Projects</Typography>
                <Box>
                    {projectList.map(project=> <Cards key={project.id} details={project} />)}
                </Box>
            </Container>
        </>
    )
}