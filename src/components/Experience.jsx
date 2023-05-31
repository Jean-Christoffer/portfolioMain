/* eslint-disable react/no-unknown-property */

import Me from "./Me.jsx";
import Computer from "./Computer.jsx";
import { useRef } from "react";


export default function Experience(){

    const scaleRef = useRef()
    return(
        <>

             
                        <group position={[0, 0, 0]} ref={scaleRef}  >
                        
                            
                                <Me/>
                                <Computer/>  
            
                    

                                            
                        </group>
                
                

        </>
    )
}