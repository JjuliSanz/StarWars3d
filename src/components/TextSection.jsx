import { Text } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";

export const TextSection = ({ title, subtitle, releaseDate, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <>
          <group rotation={[-0.9, 0, 0]}>
            <Text
              color="white"
              position={[0, 0, 0]}
              fontSize={0.5}
              lineHeight={1}
              font={"./fonts/SF-Distant-Galaxy-Outline-Italic.ttf"}
            >
              {title}
              <meshStandardMaterial
                color={"white"}
                onBeforeCompile={fadeOnBeforeCompileFlat}
              />
            </Text>
          </group>
        </>
      )}

      <Text
        color="white"
        position={[0, -0.3, 0]}
        fontSize={0.2}
        lineHeight={1}
        font={"./fonts/SF-Distant-Galaxy-Outline.ttf"}
      >
        {subtitle}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
      <Text
        color="white"
        position={[0, 0.2, 0]}
        fontSize={0.1}
        lineHeight={0.5}
        font={"./fonts/SF-Distant-Galaxy.ttf"}
      >
        {releaseDate}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
    </group>
  );
};
