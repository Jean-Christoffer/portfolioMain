/* eslint-disable react/no-unknown-property */
import {  useGLTF } from '@react-three/drei'
export default function Computer(){
    const computer = useGLTF('models/laptop.gltf')
    return(
        <>
        <group scale={0.15} rotation={[0,1.55,0] } position={[0.2,-0.29,1]}>
         <primitive object={computer.scene} />
        </group>
          
        </>
    )
}