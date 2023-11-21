/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/ep6/emperor/emperor.glb 
Author: Mind Mulch for The Masses (https://sketchfab.com/mindmulchforthemasses)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/emperor-palpatine-darth-sidious-c00a201b49ac46cc8a95c828b76865ba
Title: Emperor Palpatine / Darth Sidious
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Emperor(props) {
  const { nodes, materials } = useGLTF('./models/ep6/emperor/emperor.glb')
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModelLoaded(true);
    }, 70000);

    // Limpiar el temporizador si el componente se desmonta antes de que se cargue el modelo
    return () => clearTimeout(timeoutId);
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  if (!modelLoaded) {
    return null; // O puedes devolver un indicador de carga aquí
  }
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[-12.676, 3.426, 8.938]} rotation={[0, -0.471, 0]} scale={55.127}>
          <primitive object={nodes['node_mixamorigHips_-2674_3_rootJoint']} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.Darth_Sidious_D} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.Darth_Sidious_D_0} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/ep6/emperor/emperor.glb')
