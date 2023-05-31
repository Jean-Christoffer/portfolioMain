import Navigation from './Navigation.jsx'
import { Canvas } from "@react-three/fiber";
import Scene from './Scene.jsx';
export default function Hero(){
    return(
        <>
        <div className="hero-section">
            <Navigation/>

            <div className='hero-container'>
                <div className='wrapper-left'>
                    <article>
                        <h1 className='hero-title'>JEAN</h1>
                        <hr/>
                        <p>Pasionate about creating dynamic webpages and brining ideas to life</p>
                    </article>

              
                    
                </div>
                <div className='wrapper-right'>
                    <Canvas
                    camera={{ position:[0,1,4],fov:27}}
        
                    shadows
                    dpr={[1, 2]}
                    style={{ touchAction : 'none' }}
                    >
          
                        <Scene/>
                    </Canvas>
                </div>
            </div>
         </div>
        </>
    )
}