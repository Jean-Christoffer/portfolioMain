/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { Environment  } from "@react-three/drei";
import {  Center  } from "@react-three/drei"
import Me from "./Me.jsx";
import Computer from "./Computer.jsx";







export default function Scene(){


    return(
        <>

        <Environment preset="dawn"/>

                        
                <Center>
                   
                    <Me/>
                    <Computer/>
                </Center>





   
        
        </>
    )
}