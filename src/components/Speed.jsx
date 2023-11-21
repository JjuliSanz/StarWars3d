import { Instance, Instances } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { MathUtils } from "three";
import { AdditiveBlending } from "three";
import { DoubleSide } from "three";

const INITIAL_INSTANCES = 1000;
const MAX_INSTANCES = 1000;
const MAX_SPEED = 30;

const SpeedShape = ({ speed }) => {
  const ref = useRef();

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.position.z += speed * delta;
      if (ref.current.position.z > 5) {
        ref.current.position.z = -5;
      }
    }
  });

  return (
    <Instance
      ref={ref}
      color="white"
      position={[
        MathUtils.randFloatSpread(2),
        MathUtils.randFloatSpread(2),
        -5,
      ]}
      rotation-y={Math.PI / 2}
    />
  );
};

export const Speed = () => {
  const [instances, setInstances] = useState(INITIAL_INSTANCES);

  useFrame(() => {
    if (instances < MAX_INSTANCES) {
      setInstances(instances + 1);
    }
  });

  return (
    <group>
      <Instances>
        <planeGeometry args={[1, 0.004]} />
        <meshBasicMaterial
          side={DoubleSide}
          blending={AdditiveBlending}
          opacity={0.1}
          transparent
        />
        {Array(instances)
          .fill()
          .map((_, key) => (
            <SpeedShape key={key} speed={MathUtils.randFloat(1, MAX_SPEED)} />
          ))}
      </Instances>
    </group>
  );
};
