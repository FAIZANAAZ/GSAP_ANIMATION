import {Canvas} from "@react-three/fiber"
import { OrbitControls} from "@react-three/drei";

import "./style.css"
import React from 'react'
import Aniii from "./aniii";
import { Bloom } from '@react-three/postprocessing'
import  { EffectComposer } from '@react-three/postprocessing'

function App() {

  return ( <Canvas camera={{fov:35}}>

<OrbitControls />
<ambientLight />
<Aniii/>
<EffectComposer>
<Bloom
mipmapBlur
    intensity={3} // The bloom intensity.
    luminanceThreshold={1} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]

  />
 
</EffectComposer>

  </Canvas>
   
  )
}

export default App