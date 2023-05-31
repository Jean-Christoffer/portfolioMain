/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { Environment  } from "@react-three/drei";
import { Suspense } from "react";
import {  Html,Center  } from "@react-three/drei"
import Experience from "./Experience.jsx";

export default function Scene(){


    return(
        <>


       
   

                    <Environment preset="dawn"/>
                    <Suspense fallback={null}>
                        
                        <Center>
                            <Html
                                
                                position={[-0.45, 1.05, 0]}
                                >

                                <article>
                                    <h1>Hello!</h1>
                                    <p>I am a frontend developer</p>
                                    <p>Passionate about creating dynamic web experiences.</p>
                                </article>

                            </Html> 
                            <Experience/>
                        </Center>
                            
                    </Suspense>
              




   
        
        </>
    )
}