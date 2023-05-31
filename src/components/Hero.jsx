
import { Canvas } from "@react-three/fiber";
import Scene from './Scene.jsx';
import { Loader } from "@react-three/drei"
export default function Hero(){
    return(
        <>
            <div className='section-wrapper'>
                <Canvas
                    camera={{ position:[0,1,4],fov:27}}
        
                    shadows
                    dpr={[1, 2]}
                    style={{ touchAction : 'none' }}
                    >
          
                        <Scene/>

                    </Canvas>
                    <Loader/>
            </div>
        </>
    )
}





