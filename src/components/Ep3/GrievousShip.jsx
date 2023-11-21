import { MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export function GrievousShip(props) {
  const { nodes, materials } = useGLTF('./models/ep3/invisibleHandShip/invisible_hand_ship.glb')
  const [modelLoaded, setModelLoaded] = useState(false);
  
  const brightMaterial = new MeshStandardMaterial({
    map: materials.PDXmat_jorodoxShape.map, 
    emissive: 0xffffff, 
    emissiveIntensity: 0.01, 
    metalness: 0, 
    roughness: 0, 
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={brightMaterial} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
}
