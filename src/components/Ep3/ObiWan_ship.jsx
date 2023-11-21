/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/obiShip/obiWan_ship.glb 
Author: DrEgguin (https://sketchfab.com/DrEgguin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/eta-2-actis-class-light-interceptor-178f0e05ba64420485e7319c6a9ee6c6
Title: Eta-2 Actis-class Light Interceptor
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function ObiShip(props) {
  const { nodes, materials } = useGLTF('./models/ep3/obiShip/obiWan_ship.glb')
  const [modelLoaded, setModelLoaded] = useState(false);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Eta2_Body} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Eta2_Interior} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Eta2_Wings} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Eta2_transBlack} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/ep3/obiShip/obiWan_ship.glb')
