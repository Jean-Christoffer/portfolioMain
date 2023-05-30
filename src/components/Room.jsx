/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei'
import {useRef,useLayoutEffect} from 'react'
export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/room3.glb')

  useLayoutEffect(() => {
    group.current.traverse((child) => {
      child.frustumCulled = false;
    });
  }, []);

  return (
    <group {...props} dispose={null} ref={group} scale={0.2} position={[1,-1,1]}>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.003']} position={[-4.511, 3.791, 0]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.metal} position={[-3.508, 1.864, 3.131]} />
      <group position={[-5.095, 4.472, 3.548]} rotation={[0, 0.286, 0]}>
        <mesh geometry={nodes.Cube016_1.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube016_2.geometry} material={materials['red light.001']} />
        <mesh geometry={nodes.Cube016_3.geometry} material={materials['Mouse pad']} />
        <mesh geometry={nodes.Cube016_4.geometry} material={materials['green.001']} />
      </group>
      <mesh geometry={nodes.Cube006.geometry} material={materials.drawers} position={[-5.044, 1.049, -4.227]} />
      <group position={[-3.99, 4.177, 1.407]}>
        <mesh geometry={nodes.Cube099_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube099_2.geometry} material={materials.wall} />
        <mesh geometry={nodes.Cube099_3.geometry} material={materials['window_glass.001']} />
        <mesh geometry={nodes.Cube099_4.geometry} material={materials['Material.001']} />
      </group>
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.003']} position={[-5.861, 7.691, 0.054]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials.black} position={[-5.819, 7.993, 3.771]} />
      <group position={[-5.744, 8.162, 3.905]}>
        <mesh geometry={nodes.Cube182.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube182_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube182_2.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-5.744, 8.162, 3.773]}>
        <mesh geometry={nodes.Cube183.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube183_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Cube183_2.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-5.744, 8.162, 3.642]}>
        <mesh geometry={nodes.Cube184.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube184_1.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Cube184_2.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-5.744, 8.162, 3.509]}>
        <mesh geometry={nodes.Cube185.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube185_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube185_2.geometry} material={materials['Material.011']} />
      </group>
      <group position={[-5.738, 8.162, 3.271]} rotation={[0.305, 0, 0]}>
        <mesh geometry={nodes.Cube186.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube186_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Cube186_2.geometry} material={materials['Material.011']} />
      </group>
      <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.009']} position={[-5.827, 8.067, -3.206]} />
      <mesh geometry={nodes.Icosphere.geometry} material={materials['window_glass.001']} position={[-5.807, 8.638, -3.206]} />
      <mesh geometry={nodes.Cube019.geometry} material={materials.drawers} position={[-5.044, 1.049, 4.088]} />
      <mesh geometry={nodes.Cube099.geometry} material={materials['Material.004']} position={[-6.252, 3.6, 0.102]} />
    </group>
  )
}

useGLTF.preload('models/room3.glb')
