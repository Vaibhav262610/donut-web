import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Donut(props) {
  const { nodes, materials } = useGLTF("/donut.glb");
  const donutRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (donutRef.current) {
      // Define a range and map scroll to position
      const scrollRange = 900; // Total scroll range to map
      const startPosition = 3; // Initial X position
      const endPosition = -1; // Final X position

      // Interpolating the scrollY to move between startPosition and endPosition
      const mappedPosition =
        (scrollY / scrollRange) * (endPosition - startPosition) + startPosition;

      // Update the position of the donut based on sc roll
      donutRef.current.position.x = mappedPosition;

      donutRef.current.rotation.y += 0.01; // Rotate around the Y axis
    }
  });
  return (
    <group
      ref={donutRef}
      {...props}
      dispose={null}
      scale={(12, 12, 12)}
      position={(3, 0, 0)}
      rotation={[Math.PI / 3, 0, 0]}
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
