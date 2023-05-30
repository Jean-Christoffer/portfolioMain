/* eslint-disable react/no-unknown-property */
import { useThree   } from "@react-three/fiber";
import Me from "./Me.jsx";
import Computer from "./Computer.jsx";
import Code from "./Code.jsx";
import Room from "./Room.jsx";
import { useRef } from "react";
import { ContactShadows,OrbitControls  } from "@react-three/drei";
export default function Experience(){
    const viewport = useThree((state) => state.viewport);
    const scaleRef = useRef()
    return(
        <>
        
                <group position={[0, 0, 0]} ref={scaleRef}  scale={[viewport.width]}>
                        <Room/>
                        <Me/>
                        <Computer/>  
                        <Code/>
               

                    <ContactShadows opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />
                </group>
        
       
         
          
        <OrbitControls enableZoom  />
        </>
    )
}