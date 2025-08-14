import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const robot = useGLTF("./robot_ai/scene.glb");

  return (
    <mesh>
      {/* Brighter, more even lighting */}
      <ambientLight intensity={2} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.25}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight intensity={1.5} />

      {/* Bigger and moved down */}
      <primitive
        object={robot.scene}
        scale={3.4} // Much larger
        position={[-0.05, -1.9, 0]} // Lowered in view
        rotation={[0, Math.PI / 4, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    !isMobile && (
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 2, 10], fov: 40 }} // Pulled back for bigger model
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 2.5}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    )
  );
};

export default ComputersCanvas;
