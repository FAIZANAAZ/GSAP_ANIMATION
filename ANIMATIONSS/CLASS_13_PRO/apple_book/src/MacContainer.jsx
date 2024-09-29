import {  useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import *  as THREE from 'three'


function MacContainer() {
    let model =useGLTF("./mac.glb")
   let tex= useTexture("./PORFOLIO.jpg")
    let meshes ={}
    model.scene.traverse((child) => {
      
       meshes[child.name] = child;
        } )
        meshes.screen.rotation.x=THREE.MathUtils.degToRad(180)
        meshes.matte.material.map=tex;
        meshes.matte.material.emissiveIntensity=0;
        meshes.matte.material.metalness=1
        meshes.matte.material.roughness=1


        let scroll = useScroll()

        useFrame((state,delta)=>{
            meshes.screen.rotation.x=THREE.MathUtils.degToRad(180-scroll.offset*90)
        })

  return (
   
    <group position={[0,-10,20]}>
<primitive object={model.scene}/>
</group>
 
  )
}

export default MacContainer
