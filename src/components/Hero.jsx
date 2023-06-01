
import { Canvas } from "@react-three/fiber";
import Scene from './Scene.jsx';
import { Loader } from "@react-three/drei"
import { Box } from "@mui/material";
export default function Hero(){
    return(
        <>
        <Box sx={{ 
            height:'100vh'
         }}>
                <Canvas
                    camera={{ position:[0,1,4],fov:27}}
        
                    shadows
                    dpr={[1, 2]}
            
                    >
          
                        <Scene/>

                </Canvas>
                <Loader/>
      
        </Box>
        </>
    )
}





