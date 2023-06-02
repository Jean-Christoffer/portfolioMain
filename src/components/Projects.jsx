
import {Container} from '@mui/material'
import {motion} from 'framer-motion'
import { useState,useRef,useEffect } from 'react'
import projectList from './data.jsx'
export default function Projects(){

    const  [width, setWidth] = useState(0)
    const carousel= useRef()

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

    

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