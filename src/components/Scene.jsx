/* eslint-disable react/no-unknown-property */
import { OrbitControls,ContactShadows,Environment  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Me from "./Me.jsx";
import { Suspense } from "react";
import {  useProgress,Html  } from "@react-three/drei"
import Computer from "./Computer.jsx";
import Code from "./Code.jsx";
import Room from "./Room.jsx";
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

                <group position={[0, 0, 0]}>
                        <Room/>
                        <Me/>
                        <Computer/>  
                        <Code/>
               

                    <ContactShadows opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />
                </group>
        
       
         
          
                <OrbitControls enableZoom  />
  
                       
            </Suspense>
  

        </Canvas>
        
        
        </>
    )
}