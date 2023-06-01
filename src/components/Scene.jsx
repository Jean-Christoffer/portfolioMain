/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { Environment  } from "@react-three/drei";
import { Suspense } from "react";
import {  Html,Center  } from "@react-three/drei"
import Experience from "./Experience.jsx";
import {Box, Typography} from '@mui/material'






export default function Scene(){


    return(
        <>

        <Environment preset="dawn"/>
            <Suspense fallback={null}>
                        
                <Center>
                    <Html
                                
                    position={[-0.45, 1.05, 0]}
                    >

                        <Box
                        component='article'
                        sx=
                        {{ 
                        pl:{ xs:3,md:0 },
                        width:{xs:'300px',md:'400px'},
                        lineHeight:{md:'200%', xs:'150%'},
          
                        }}
                        >
                        <Typography 
                        component='h1'
                        sx={{ 
                        fontSize:{md:'2.5rem', xs:'2rem'},
                        fontFamily: 'Oswald, sans-serif',
                        fontWeight:'700',
                        pb:0
                        }}

                        >Hello!</Typography>
                        <Typography 
                        component='p'
                        sx={{ 
                        fontSize:{md:'1.2rem', xs:'1rem'},
                        fontFamily: 'Source Sans Pro, sans-serif',
                        pb:0
                        }}
                        >I am a frontend developer</Typography>
                        <Typography 
                        component='p'
                        sx={{ 
                        fontSize:{md:'1.2rem', xs:'1rem'},
                        fontFamily: 'Source Sans Pro, sans-serif',
                        pb:0
                        }}
                        >Passionate about creating dynamic web experiences.</Typography>
                        </Box>

                    </Html> 
                    <Experience/>
                </Center>
                            
            </Suspense>





   
        
        </>
    )
}