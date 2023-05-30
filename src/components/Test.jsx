/* eslint-disable react/no-unknown-property */
import  { useState,useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function ModelComponent() {
   const loader = new GLTFLoader()
   const [model, setModel] = useState()
   useEffect(()=>{
    loader.load('models/643501b7aa10d7b4efdae4d3.glb', function(gltf) {
        let gltfModel = gltf.scene
        gltfModel.traverse(function(obj) { obj.frustumCulled = false; });
        setModel(gltfModel)
    });
   },[])

   return model ? <primitive object={model} dispose={null} /> : null
}