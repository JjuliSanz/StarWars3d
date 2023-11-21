/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/clone/clone.glb 
Author: Greg McKechnie (https://sketchfab.com/mckechniegreg6)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-phase-ii-clone-trooper-dc-15s-rigged-7db6b438deba4cf3ac947e336cb88554
Title: **OLD** Phase II Clone Trooper + DC-15s (Rigged)
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function Clone(props) {
  const { nodes, materials } = useGLTF("./models/ep2/clone/clone.glb");
  const [modelLoaded, setModelLoaded] = useState(false);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.019}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_86.geometry}
              material={materials.clone_armour}
              skeleton={nodes.Object_86.skeleton}
            />
          </group>
          <mesh
            geometry={nodes["dc-15s_dc-15s_0"].geometry}
            material={materials["dc-15s"]}
            position={[-33.497, 84.94, -9.669]}
            rotation={[-0.244, -0.173, -0.218]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/ep2/clone/clone.glb");
