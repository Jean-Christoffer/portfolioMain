import Cards from "./Cards"
import {Container,Box} from '@mui/material'

export default function Projects(){
    const projectList =
 [
    {
     title:'Wave',
     excerpt:'This is my year one exam. to put together what we',
     type:'Project exam',
     img:'images/wave1.jpg',
     id:1,
     git:'https://github.com/Noroff-FEU-Assignments/project-exam-1-Jean-Christoffer',
     web:'https://charming-mousse-954d3d.netlify.app/',
     tools:['images/css3.svg','images/html5.svg','images/wordpress.svg','images/javascript.svg']
    },

    {
        title:'Museum',
        excerpt:'whatever',
        type:'Project exam',
        img:'images/museum.jpg',
        id:2,
        git:'https://github.com/Jean-Christoffer/Museum',
        web:'https://spectacular-sorbet-d98fe8.netlify.app/index.html',
        tools:['images/css3.svg','images/html5.svg','images/javascript.svg']
    },


    {
        title:'Gamehub',
        excerpt:'asdasd',
        type:'Cross course assigment',
        img:'images/gamehub.jpg',
        id:3,
        git:'https://github.com/Jean-Christoffer/gamehubFinal',
        web:'https://gamehub-f-inal.vercel.app/',
        tools:['images/css3.svg','images/html5.svg','images/wordpress.svg','images/javascript.svg','images/three.svg']
    },
    {
        title:'Portfolio',
        excerpt:'asdasd',
        type:'Course assigment',
        img:'images/port.jpg',
        id:3,
        git:'https://github.com/Jean-Christoffer/portfolioMain',
        web:'https://portfolio-main-mauve.vercel.app/',
        tools:['images/react.svg','images/mui.svg','images/three.svg']
    },
    {
        title:'MovieBase',
        excerpt:'asdasd',
        type:'Personal',
        img:'images/movie.jpg',
        id:3,
        git:'https://github.com/Jean-Christoffer/Movie-base',
        web:'https://movie-base-mauve.vercel.app/',
        tools:['images/react.svg','images/mui.svg']
    },
]

    return(
        <>
            <Container
            sx={{ 
                display:'flex',
                flexDirection:'column',

             }}
             >
                <Box sx={{ 
                    display:'flex', 
                    gap:2,
                    flexWrap:'wrap',
                    justifyContent:'center',
                    mt:5
                    
           
                     }}>
                    {projectList.map(project=> <Cards key={project.id} details={project} />)}
                </Box>
            </Container>
        </>
    )
}