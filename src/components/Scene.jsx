/* eslint-disable react/no-unknown-property */
import { OrbitControls,Sky,Environment,ContactShadows,Stars,Center  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Me from "./Me.jsx";
import { Suspense } from "react";
import {  useProgress,Html  } from "@react-three/drei"
import Computer from "./Computer.jsx";
import Test from './Test.jsx'
export default function Scene(){
    const { progress} = useProgress()
    return(
        <>
        <Canvas
            
            camera={{ position:[0,1,5],fov:30,near: 0.01, far: 2000 }}
            

        >
            <Center>
            
            <Suspense fallback={<Html style={{ fontSize:'3rem',color:'black' }} center>{progress} % loaded</Html>}>
                <group position-y={-1}>
                <ContactShadows opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />
                    <Me/>
                </group>
       
            <Stars radius={100} depth={50} count={5000} factor={9} saturation={1} fade speed={1} />
            <Sky />
            <Environment  preset="forest"/>
            <OrbitControls enableZoom  />
            <Computer/>
            </Suspense>
            </Center>
        </Canvas>
        
        
        </>
    )
}