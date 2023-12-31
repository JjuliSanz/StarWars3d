/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/ep9/rey/rey_lightsaber.glb 
Author: Filip Włodarczyk (https://sketchfab.com/mobilos.26)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/reys-lightsaber-ep-9-1b81aa71f93944bdb2ac0de52a048bf1
Title: Rey's Lightsaber | EP. 9
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function ReyLightsaber(props) {
  const { nodes, materials } = useGLTF("./models/ep9/rey/rey_lightsaber.glb");
  const [modelLoaded, setModelLoaded] = useState(false);

  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.055, 1.211, 1.155]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 8.198, -0.055]}
            rotation={[-Math.PI / 2, 0, -1.571]}
          >
            <mesh
              geometry={nodes["hilt_top_lp_Material_#0_0"].geometry}
              material={materials.Material_0}
              position={[-0.688, 0, -0.32]}
              rotation={[0, 0, Math.PI / 2]}
            />
          </group>
          <mesh
            geometry={nodes["switch_lp_Material_#0_0"].geometry}
            material={materials.Material_0}
            position={[0, 4.901, -0.055]}
            rotation={[-Math.PI / 2, 0, Math.PI / 3]}
          />
          <mesh
            geometry={nodes["hilt_lp_01_-_Default_0"].geometry}
            material={materials["01_-_Default"]}
            position={[0, 0, -0.055]}
            rotation={[-Math.PI / 2, 0, -0.098]}
          />
          <mesh
            geometry={nodes["bandage_lp_Material_#1_0"].geometry}
            material={materials.Material_1}
            position={[0, -0.063, -0.055]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/ep9/rey/rey_lightsaber.glb");
