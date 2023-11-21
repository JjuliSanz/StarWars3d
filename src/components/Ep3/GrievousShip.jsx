import { MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export function GrievousShip(props) {
  const { nodes, materials } = useGLTF('./models/ep3/invisibleHandShip/invisible_hand_ship.glb')
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

  // Crear un nuevo material MeshStandardMaterial
  const brightMaterial = new MeshStandardMaterial({
    map: materials.PDXmat_jorodoxShape.map, // Usar la textura original del modelo
    emissive: 0xffffff, // Color de la emisión (blanco)
    emissiveIntensity: 0.01, // Intensidad de la emisión (ajústalo según tu preferencia)
    metalness: 0, // Ajusta el metalness para dar un aspecto más metálico si es necesario
    roughness: 0, // Ajusta la rugosidad para controlar el brillo de la superficie
  });

  return (
    <group {...props} dispose={null}>
      {/* Aplicar el nuevo material MeshStandardMaterial al modelo */}
      <mesh geometry={nodes.Object_4.geometry} material={brightMaterial} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
}
