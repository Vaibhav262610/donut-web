import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Donut(props) {
  const { nodes, materials } = useGLTF("/donut.glb");
  const donutRef = useRef();

  useFrame(() => {
    if (donutRef.current) {
      donutRef.current.rotation.y += 0.002; // Rotate around the Y axis
    }
  });
  return (
    <group
      ref={donutRef}
      {...props}
      dispose={null}
      scale={(12, 12, 12)}
      position={(5, 0, 0)}
      rotation={[Math.PI / 4, 0, 0]}
    >
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.donut}
        position={[0, 0.037, 0]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.icing}
        position={[0, 0.037, 0]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.sprinkles_bake}
        position={[0.076, 0.082, 0.009]}
        rotation={[1.448, 0.073, 3.007]}
        scale={0.141}
      />
    </group>
  );
}

useGLTF.preload("/donut.glb");
