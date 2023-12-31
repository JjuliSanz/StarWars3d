/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/tantiveIV/tantiveIV.glb 
Author: Daniel (https://sketchfab.com/DanielAndersson)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/star-wars-cr-90-60e26a508ca84126b30f01461f60086e
Title: Star Wars: CR-90
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function TantiveIV(props) {
  const { nodes, materials } = useGLTF('./models/ep4/tantiveIV/tantiveIV.glb')
  const [modelLoaded, setModelLoaded] = useState(false);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={10}>
        <group position={[0, 1.469, 0.008]}>
          <mesh geometry={nodes.BackTube_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.BackTube_1.geometry} material={materials.ScratchedMetalDark} />
        </group>
        <group position={[0, -4.339, -0.843]}>
          <mesh geometry={nodes.DualTurboLaserLowerSection_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.DualTurboLaserLowerBase_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.DualTurboLaserLowerBase_1.geometry} material={materials.ScratchedMetalDark} />
          <mesh geometry={nodes.DualTurboLaserLower_0.geometry} material={materials.ScratchedMetalDark} position={[0, 0.074, -0.212]} rotation={[0.001, 0, 0]} />
        </group>
        <group position={[0, -4.339, 0.841]}>
          <mesh geometry={nodes.DualTurboLaserUpperSection_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.DualTurboLaserUpperBase_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.DualTurboLaserUpperBase_1.geometry} material={materials.ScratchedMetalDark} />
          <mesh geometry={nodes.DualTurboLaserUpper_0.geometry} material={materials.ScratchedMetalDark} position={[0, 0.076, 0.218]} />
        </group>
        <group scale={0.186}>
          <mesh geometry={nodes.Greebles1_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.Greebles1_1.geometry} material={materials.ScratchedMetalDark} />
        </group>
        <group position={[0, 1.469, 0.008]}>
          <mesh geometry={nodes.Greebles2_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.Greebles2_1.geometry} material={materials.ReflectiveGlass} />
          <mesh geometry={nodes.Greebles2_2.geometry} material={materials.ScratchedMetalDark} />
        </group>
        <group position={[0.605, 1.469, 0.008]}>
          <mesh geometry={nodes.MidEngines_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.MidEngines_1.geometry} material={materials.BlueEngineGlow} />
          <mesh geometry={nodes.MidEngines_2.geometry} material={materials.ScratchedMetalDark} />
        </group>
        <group scale={0.186}>
          <mesh geometry={nodes.MidSection_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.MidSection_1.geometry} material={materials.ScratchedMetalDark} />
        </group>
        <group position={[0, 1.469, 0.008]}>
          <mesh geometry={nodes.UpperLowerEngines_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.UpperLowerEngines_1.geometry} material={materials.BlueEngineGlow} />
          <mesh geometry={nodes.UpperLowerEngines_2.geometry} material={materials.ScratchedMetalDark} />
        </group>
        <group position={[0, 1.469, 0.008]}>
          <mesh geometry={nodes.Wings_0.geometry} material={materials.ScratchedMetal} />
          <mesh geometry={nodes.Wings_1.geometry} material={materials.ScratchedMetalRed} />
        </group>
        <mesh geometry={nodes.CentralSectionExtra_0.geometry} material={materials.ScratchedMetal} />
        <mesh geometry={nodes.Greebles3_0.geometry} material={materials.ScratchedMetal} />
        <mesh geometry={nodes.Greebles3_1.geometry} material={materials.ScratchedMetalDark} />
        <mesh geometry={nodes.Greebles4_0.geometry} material={materials.ScratchedMetal} position={[0, 3.712, 0]} scale={0.314} />
        <mesh geometry={nodes.Greebles5_0.geometry} material={materials.ScratchedMetal} position={[0, 1.929, 0.942]} />
        <mesh geometry={nodes.Hatch_0.geometry} material={materials.ScratchedMetal} position={[-0.349, -0.775, -0.427]} />
        <mesh geometry={nodes.Head_0.geometry} material={materials.ScratchedMetal} position={[0, 1.469, 0.008]} />
        <mesh geometry={nodes.HullPlates_0.geometry} material={materials.ScratchedMetalRed} />
        <mesh geometry={nodes.HullPlates_1.geometry} material={materials.ScratchedMetal} />
        <mesh geometry={nodes.HullPlates_2.geometry} material={materials.ScratchedMetalDark} />
        <mesh geometry={nodes.LifeCapsules_0.geometry} material={materials.ScratchedMetal} />
        <mesh geometry={nodes.LowerSensorArray_0.geometry} material={materials.ScratchedMetal} position={[0, 1.452, -1.088]} scale={[0.24, 0.24, 0.082]} />
        <mesh geometry={nodes.LowerWings_0.geometry} material={materials.ScratchedMetal} />
        <mesh geometry={nodes.LowerWingsHullPlates_0.geometry} material={materials.ScratchedMetal} />
        <mesh geometry={nodes.MainStructure_0.geometry} material={materials.ScratchedMetal} position={[0, 3.712, 0]} scale={0.314} />
        <mesh geometry={nodes.MidEnginesHolder_0.geometry} material={materials.ScratchedMetal} position={[0, 1.469, 0.008]} />
        <mesh geometry={nodes.MidEnginesHullPlates_0.geometry} material={materials.ScratchedMetal} position={[0.605, 1.469, 0.008]} />
        <mesh geometry={nodes.MidEnginesInnerSides_0.geometry} material={materials.ScratchedMetal} position={[0.61, 6.034, -0.929]} />
        <mesh geometry={nodes.SingleTurboLaserBackLeft_0.geometry} material={materials.ScratchedMetalDark} position={[0.935, -2.384, 0.7]} rotation={[0, 0.355, Math.PI / 2]} />
        <mesh geometry={nodes.SingleTurboLaserBackRight_0.geometry} material={materials.ScratchedMetalDark} position={[-0.94, -2.384, 0.7]} rotation={[0, -0.355, -Math.PI / 2]} />
        <mesh geometry={nodes.SingleTurboLaserFrontLeft_0.geometry} material={materials.ScratchedMetalDark} position={[0.935, -3.224, 0.7]} rotation={[0, 0.355, Math.PI / 2]} />
        <mesh geometry={nodes.SingleTurboLaserFrontRight_0.geometry} material={materials.ScratchedMetalDark} position={[-0.94, -3.221, 0.7]} rotation={[0, -0.355, -Math.PI / 2]} />
        <mesh geometry={nodes.SingleTurboLaserTurretBase_0.geometry} material={materials.ScratchedMetal} position={[0, 0, 0.077]} />
        <mesh geometry={nodes.SingleTurboLaserTurretHullPlates_0.geometry} material={materials.ScratchedMetal} position={[0, 0, 0.077]} />
        <mesh geometry={nodes.UpperLowerEngineHolders_0.geometry} material={materials.ScratchedMetal} scale={0.186} />
        <mesh geometry={nodes.UpperLowerEnginesHullPlates_0.geometry} material={materials.ScratchedMetal} />
        <mesh geometry={nodes.UpperLowerEnginesHullPlates_1.geometry} material={materials.ScratchedMetalRed} />
        <mesh geometry={nodes.UpperLowerEnginesInnerSides_0.geometry} material={materials.ScratchedMetal} position={[1.254, 6.034, 0]} />
        <mesh geometry={nodes.UpperSensorArray_0.geometry} material={materials.ScratchedMetalDark} position={[0, 1.083, 1.582]} scale={0.036} />
        <mesh geometry={nodes.UpperSensorArrayArms_0.geometry} material={materials.ScratchedMetalDark} position={[0, 1.396, 1.276]} scale={0.036} />
        <mesh geometry={nodes.UpperSensorArrayBase_0.geometry} material={materials.ScratchedMetal} />
        <mesh geometry={nodes.UpperSensorArrayMid_0.geometry} material={materials.ScratchedMetalDark} position={[0, 1.087, 1.572]} scale={0.063} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/ep4/tantiveIV/tantiveIV.glb')
