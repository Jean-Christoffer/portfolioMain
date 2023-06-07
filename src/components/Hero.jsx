
import { Canvas } from "@react-three/fiber";
import Scene from './Scene.jsx';
import { Loader } from "@react-three/drei"
import { Suspense } from "react";
export default function Hero(){
    //   camera={ { fov: 55, near: 0.1, far: 2000, position: [ -3, 1.5, 5 ]} }
    return(
        <>
        <div className="canvas-wrapper">
                <Canvas
                    camera={{ position:[0,1,4],fov:27}}
        
       
                    dpr={[1, 2]}
            
                    >
                    <Suspense fallback={null}>
                        <Scene/>
                    </Suspense>   

                </Canvas>
                <Loader/>
      
        </div>
        </>
    )
}





