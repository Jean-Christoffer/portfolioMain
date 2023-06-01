
import {Container} from '@mui/material'
import {motion} from 'framer-motion'
import { useState,useRef,useEffect } from 'react'
export default function Projects(){

    const  [width, setWidth] = useState(0)
    const carousel= useRef()

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

    const projectList =
 [
    {
     title:'Wave',
     excerpt:'This is my year one exam. to put together what we',
     type:'Project exam',
     img:'images/wave.png',
     id:1,
     git:'https://github.com/Noroff-FEU-Assignments/project-exam-1-Jean-Christoffer',
     web:'https://charming-mousse-954d3d.netlify.app/',
     tools:['images/css3.svg','images/html5.svg','images/wordpress.svg','images/javascript.svg']
    },

    {
        title:'Museum',
        excerpt:'whatever',
        type:'Project exam',
        img:'images/museum.png',
        id:2,
        git:'https://github.com/Jean-Christoffer/Museum',
        web:'https://spectacular-sorbet-d98fe8.netlify.app/index.html',
        tools:['images/css3.svg','images/html5.svg','images/javascript.svg']
    },


    {
        title:'Gamehub',
        excerpt:'asdasd',
        type:'Cross course assigment',
        img:'images/gamehub.png',
        id:3,
        git:'https://github.com/Jean-Christoffer/gamehubFinal',
        web:'https://gamehub-f-inal.vercel.app/',
        tools:['images/css3.svg','images/html5.svg','images/wordpress.svg','images/javascript.svg','images/three.svg']
    },
    {
        title:'Portfolio',
        excerpt:'asdasd',
        type:'Course assigment',
        img:'images/port.png',
        id:4,
        git:'https://github.com/Jean-Christoffer/portfolioMain',
        web:'https://portfolio-main-mauve.vercel.app/',
        tools:['images/react.svg','images/mui.svg','images/three.svg']
    },
    {
        title:'MovieBase',
        excerpt:'asdasd',
        type:'Personal',
        img:'images/movie.png',
        id:5,
        git:'https://github.com/Jean-Christoffer/Movie-base',
        web:'https://movie-base-mauve.vercel.app/',
        tools:['images/react.svg','images/mui.svg']
    },
]

    return(
        <>
            <Container
                sx={{
                    height:'100vh', 
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',

                 }}
             >

                        <motion.div className="carousel" ref={carousel} whileTap={{ cursor:'grabbing' }}>
                            <motion.div
                             drag='x'
                             dragConstraints={{ right:0,left: -width }}
                             className="inner-carousel">
                                {projectList.map(project=> 
                                <motion.div className="item" key={project.id}>
                                    <img src={project.img}/>
                                </motion.div>)}
                            </motion.div>
                        </motion.div>

             
            </Container>
        </>
    )
}