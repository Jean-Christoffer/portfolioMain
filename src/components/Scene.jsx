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
                            <Experience/>
                        </Center>
                            
                    </Suspense>
    




   
        
        </>
    )
}