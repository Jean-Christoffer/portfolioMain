/* eslint-disable react/no-unknown-property */
import { Environment  } from "@react-three/drei";
import { Suspense } from "react";
import {  useProgress,Html,Center  } from "@react-three/drei"
import Experience from "./Experience.jsx";

export default function Scene(){
    const { progress} = useProgress()

    return(
        <>


       
   

                    <Environment preset="dawn"/>
                    <Suspense fallback={<Html style={{ fontSize:'3rem',color:'black' }} center>{progress} % loaded</Html>}>
                        
                        <Center>
                            <Html
                                
                                position={[-0.45, 1.05, 0]}
                                >
                                <article>
                                    <h1>Hello!</h1>
                                    <p>I'm a Frontend Developer</p>
                                    <p>Passionate about creating dynamic web-experiences</p>
                                </article>
                            </Html> 
                            <Experience/>
                        </Center>
                            
                    </Suspense>
    




   
        
        </>
    )
}