/* eslint-disable react/no-unknown-property */
import {  useGLTF } from '@react-three/drei'
export default function Computer(){
    const computer = useGLTF('models/laptop.gltf')
    return(
        <>
        <group scale={0.18} rotation-y={Math.PI } position={[0,-0.36,0.6]}>
         <primitive object={computer.scene} />
        </group>
          
        </>
    )
}