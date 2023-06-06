/* eslint-disable react/no-unknown-property */
import { useFBX, useGLTF,useAnimations } from '@react-three/drei'
import {useRef,useLayoutEffect,useEffect} from 'react'
export default function Me(props) {
  const me = useRef()
  const { nodes, materials } = useGLTF('models/643501b7aa10d7b4efdae4d3.glb')

  const {animations:sittingIdle} = useFBX('animations/SittingIdle.fbx')
  sittingIdle[0].name = 'sitting'
  
  const {actions} = useAnimations(sittingIdle,me)


  useLayoutEffect(() => {

      actions['sitting'].reset().play();
  

  }, [actions]);



  useEffect(() => {
    me.current.traverse((child) => {
      child.frustumCulled = false;
    });
  }, []);

  return (
    <group ref={me} {...props} dispose={null}  position={[0,0,0]} rotation={[0, Math.PI * 2,0]}  rotation-x={- Math.PI / 2}  >

        <primitive object={nodes.Hips}  />
        <skinnedMesh  geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
        <skinnedMesh  geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
        <skinnedMesh  geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
        <skinnedMesh  geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
        <skinnedMesh  geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
        <skinnedMesh  geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
        <skinnedMesh  name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
        <skinnedMesh  name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
        <skinnedMesh  name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
        <skinnedMesh  name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />

    </group>
  )
}

useGLTF.preload('models/643501b7aa10d7b4efdae4d3.glb')
