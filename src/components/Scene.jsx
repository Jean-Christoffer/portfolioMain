/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Me from "./Me.jsx";
import { Suspense } from "react";
import {  useProgress,Html  } from "@react-three/drei"
export default function Scene(){
    const { progress} = useProgress()
    return(
        <>
        <Canvas
            shadows
            camera={{ position:[3,2,5],fov:30 }}
        >

            <color attach='background' args={['#ececec']}/>
            <Suspense fallback={<Html style={{ fontSize:'3rem',color:'black' }} center>{progress} % loaded</Html>}>
                <group position-y={-1}>
                    <Me/>
                </group>
            </Suspense>
               
            <OrbitControls />
            <ambientLight intensity={1}/>
            
        </Canvas>
        
        
        </>
    )
}