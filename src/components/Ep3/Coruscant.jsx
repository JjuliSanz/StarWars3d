/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/coruscant/coruscant.glb 
Author: Mateusz Woliński (https://sketchfab.com/jeandiz)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/coruscant-802db255f49e4e1e8d398213ecc371ae
Title: Coruscant
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Coruscant(props) {
  const { nodes, materials } = useGLTF('./models/ep3/coruscant/coruscant.glb')
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModelLoaded(true);
    }, 20000);

    // Limpiar el temporizador si el componente se desmonta antes de que se cargue el modelo
    return () => clearTimeout(timeoutId);
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  if (!modelLoaded) {
    return null; // O puedes devolver un indicador de carga aquí
  }
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.planet_planet_0.geometry} material={materials.planet} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.clouds_clouds_0.geometry} material={materials.clouds} rotation={[-Math.PI / 2, 0, 0]} scale={101.143} />
    </group>
  )
}

useGLTF.preload('./models/ep3/coruscant/coruscant.glb')
