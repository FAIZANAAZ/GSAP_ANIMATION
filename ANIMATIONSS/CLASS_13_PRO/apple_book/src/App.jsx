import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./style.css"
import { Environment, OrbitControls ,ScrollControls } from '@react-three/drei'
import MacContainer from "./MacContainer"


function App() {
  return (
    <div className='w-full h-[100vh]  font-["Helvetica_Now_Display"] '>
   
      <div className='absolute flex flex-col top-40 left-[750px]  -translate-x-1/2 text-white'>
      <h3 className='text-7xl tracking-tighter font-[700] absolute bottom-[230px] right-[96px]'>
        MACBOOK  PRO 
      </h3>
      <h5 className='absolute  bottom-[150px] right-[950px] font-bold text-[20px]'>oh so pro!😎</h5>
      <p className='text-center w-3/4 ml-[20px] mb-[100px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laborum, non ducimus quis voluptatem dolorum voluptate ratione cumque nostrum totam laudantium vel quae excepturi aliquam optio fugiat fugit, perspiciatis delectus!</p>
      
      </div>
    <Canvas camera={{fov:12 , position:[0,-10,220]}}>
   
     <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]}/>
     {/* isy hmara laptop thik sy dikhyga full light me  */}
     {/* https://polyhaven.com/a/studio_small_09
     is web sy light ka link lay hen hm */}
<ScrollControls pages={3}>
<MacContainer/>
</ScrollControls>
{/* file ka name he */}


    </Canvas>
    </div>
  )
}

export default App
