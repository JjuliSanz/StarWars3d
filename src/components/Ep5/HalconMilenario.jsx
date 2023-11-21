/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/halconMilenario/halcon-milenario.glb 
Author: jack22331 (https://sketchfab.com/jack22331)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/star-wars-halcon-milenario-a22cb15c4cdc4663ac1c4473a172495c
Title: Star-wars-halcon-milenario
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function HalconMilenario(props) {
  const { nodes, materials } = useGLTF('./models/ep5/halconMilenario/halcon-milenario.glb')
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModelLoaded(true);
    }, 60000);

    // Limpiar el temporizador si el componente se desmonta antes de que se cargue el modelo
    return () => clearTimeout(timeoutId);
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  if (!modelLoaded) {
    return null; // O puedes devolver un indicador de carga aquí
  }
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.CP_Front} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Cockpit2} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Cockpit3} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Dish01} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Dish02} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.DrivBack} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Engine01} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Engine02} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.M_Inside} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.MandbEnd} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.PodSide1} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.SidePort} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.SideRear} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.SideRear1} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Turret_L} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.DishSide} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.EscPod_L} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.EscPod_U} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.FalcPlan} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.FalcUndr} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.FalcUndr} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.FrontColor} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Hatch} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Turret_U} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Vent01} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.Charcoal_1} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/ep5/halconMilenario/halcon-milenario.glb')
