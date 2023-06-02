/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { Environment  } from "@react-three/drei";
import { Suspense } from "react";
import {  Center  } from "@react-three/drei"
import Experience from "./Experience.jsx";







export default function Scene(){


    return(
        <>

        <Environment preset="dawn"/>
            <Suspense fallback={null}>
                        
                <Center>
                   
                    <Experience/>
                </Center>
                            
            </Suspense>





   
        
        </>
    )
}