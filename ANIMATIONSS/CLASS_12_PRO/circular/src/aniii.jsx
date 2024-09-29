import React from 'react'
import {  useTexture } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from "three";

// AGR KOI esi chiz jo hmny use ki he but import nhi ki to wo web page sy sb gaib krdygi
function Aniii() {
    let tex =useTexture("./PORFOLIO.jpg")
    let cyll =useRef(null)
    useFrame((state,delta)=>{
        cyll.current.rotation.y +=delta
    })
  return (

   < group rotation={[0,1.6,0.5]}>
    <mesh ref={cyll}>
      {/* mesh ak object he jiski properties hen circle squre jo shap hm bnaty hen isky ander hoty hen wo 
  OR MESH KO 2 CHIZEN CHIYE HOTI HEN ak (boxGeometry)ak(material) */}
    <cylinderGeometry args={[1,1,1,10,10,true]}/>
    <meshStandardMaterial map={tex}  transparent side={THREE.DoubleSide}/>
    </mesh>
    </group>
  )
}

export default Aniii