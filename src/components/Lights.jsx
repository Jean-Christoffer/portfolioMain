/* eslint-disable react/no-unknown-property */
import { useFrame   } from "@react-three/fiber";
import { useRef,useState,useEffect } from "react";
import { easing } from "maath";

export default function Lights(){
    const lightRef = useRef()
    const lightRef2 = useRef()
    const lightRef3 = useRef()



    const [colors,setColors] = useState(['red','blue','yellow','orange','cyan','teal','honeydew','salmon','magenta'])

    useEffect(()=>{
      const intervalId = setInterval(()=>{
        setColors(prevColors => {
          let shuffled = prevColors.sort(() => 0.5 - Math.random())
          prevColors = shuffled
          return prevColors
        })
      },3000)
      return () =>{clearInterval(intervalId)}
      
    },[])

    useFrame((state,delta) =>{
        const { x, y } = state.pointer;
        const viewportWidth = state.viewport.width;
        const viewportHeight = state.viewport.height;
  
        easing.dampC(lightRef.current.color, colors[1],5.0, delta)
        easing.dampC(lightRef2.current.color, colors[0],4.0, delta)
        easing.dampC(lightRef3.current.color, colors[0],3.0, delta)
  
          easing.damp3(
            lightRef.current.position,
            [
             ((x / 4.5) * viewportWidth) / 4,
              ((y / 4.5) * viewportHeight) / 4,
              1
            ],
            0.6,
            delta
          );
          easing.damp3(
            lightRef2.current.position,
            [
             ((x / 2) * viewportWidth) / 4,
              ((y / 2) * viewportHeight) / 4,
              1
            ],
            0.6,
            delta
          );
          easing.damp3(
            lightRef3.current.position,
            [
             ((x / 2) * viewportWidth) / 4,
              ((y / 2) * viewportHeight) / 4,
              1
            ],
            0.6,
            delta
          );
          
         
  
      })
      return(
        <>
        <directionalLight ref={lightRef} color="blue" intensity={4}  />
        <directionalLight ref={lightRef2} color="red" intensity={1.6}  />
        <directionalLight ref={lightRef3} color="yellow" intensity={1.3} />
        </>

      )
}