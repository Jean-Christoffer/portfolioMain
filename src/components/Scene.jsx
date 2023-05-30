/* eslint-disable react/no-unknown-property */
import { Environment  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {  useProgress,Html  } from "@react-three/drei"
import Experience from "./Experience.jsx";

export default function Scene(){
    const { progress} = useProgress()

    return(
        <>
        <Canvas
            
            camera={{ position:[0,1,5],fov:30,near: 0.01, far: 2000 }}
            style={{ background: "gray" }}
            shadows
            dpr={[1, 2]}
            
        >
            <Environment preset="dawn"/>
            <Suspense fallback={<Html style={{ fontSize:'3rem',color:'black' }} center>{progress} % loaded</Html>}>
            <Experience/>
  
                       
            </Suspense>
  

        </Canvas>
        
        
        </>
    )
}