/* eslint-disable react/no-unknown-property */
import {  useGLTF,Html } from '@react-three/drei'
export default function Computer(){
    const computer = useGLTF('models/laptop.gltf')
    return(
        <>
        <group scale={0.15} rotation={[0,Math.PI * 2,0] } position={[-0.07,0,0.8]}>
         <primitive object={computer.scene}>
            <Html
                transform
                wrapperClass='computer'
                distanceFactor={1.14}
                position={[0,1.56,-1.4]}
                rotation-x={-0.256}
            >
            <iframe src="https://port-folio1-sand.vercel.app/" />
            </Html>

         </primitive>
        </group>
          
        </>
    )
}