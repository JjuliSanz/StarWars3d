/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/deathStar/deathStar.glb 
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/death-star-star-wars-3d5f01485e9e4e8b9d995d7764341afe
Title: Death Star - Star Wars
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function DeathStar(props) {
  const { nodes, materials } = useGLTF('./models/ep4/deathStar/deathStar.glb')
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModelLoaded(true);
    }, 50000);

    // Limpiar el temporizador si el componente se desmonta antes de que se cargue el modelo
    return () => clearTimeout(timeoutId);
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  if (!modelLoaded) {
    return null; // O puedes devolver un indicador de carga aquí
  }
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.DeathStar001_1_0.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.DeathStar_misa001_2_0.geometry} material={materials.material_1} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./models/ep4/deathStar/deathStar.glb')
