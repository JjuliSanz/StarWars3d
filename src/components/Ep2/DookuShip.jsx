/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/models/dookuShip/dookus_solar_saier.glb 
Author: turbopurr (https://sketchfab.com/turbopurr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dookus-solar-saier-d572f763ba5c4a70a88aa9c680bd549b
Title: Dooku's Solar Saier
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function DookuShip(props) {
  const { nodes, materials } = useGLTF(
    "./models/ep2/dookuShip/dookus_solar_saier.glb"
  );
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
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.199}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[6.569, -6.872, -5.363]}
            rotation={[-0.231, 0.064, -0.553]}
            scale={[0.558, 0.68, 0.68]}
          >
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Foam_Panels_Pyramid_Plane_Damage}
            />
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[6.342, -7.228, -5.264]}
            rotation={[2.911, -0.064, -2.589]}
            scale={0.422}
          >
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Multicoated_glass}
            />
          </group>
          <group
            position={[5.683, -7.723, -4.935]}
            rotation={[-0.231, 0.064, 1.018]}
            scale={[-0.059, 0.023, 0.059]}
          >
            <mesh
              geometry={nodes.Object_20.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["Material.001"]}
            position={[3.068, -12.358, -3.841]}
            rotation={[1.443, 1.015, 1.449]}
            scale={2.62}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.Multicoated_glass}
            position={[5.907, -7.909, -5.075]}
            rotation={[2.911, -0.064, -2.589]}
            scale={0.294}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials["Material.005"]}
            position={[6.706, -7.32, -5.074]}
            rotation={[2.911, -0.064, -2.589]}
            scale={[0.144, 0.209, 0.144]}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials["Material.001"]}
            position={[6.569, -6.872, -5.363]}
            rotation={[-0.231, 0.064, -0.553]}
            scale={[0.558, 0.68, 0.68]}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials["Material.001"]}
            position={[6.569, -6.872, -5.363]}
            rotation={[-0.231, 0.064, -0.553]}
            scale={[0.558, 0.68, 0.68]}
          />
          <mesh
            geometry={nodes.Object_23.geometry}
            material={materials["Material.004"]}
            position={[4.362, -10.331, -4.404]}
            rotation={[2.911, -0.064, -1.018]}
            scale={0.52}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/ep2/dookuShip/dookus_solar_saier.glb");
