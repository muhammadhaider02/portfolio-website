import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const robot = useGLTF("./robot_ai/scene.glb");

  return (
    <mesh>
      {/* Brighter, more even lighting */}
      <ambientLight intensity={3} />
      <directionalLight position={[5, 10, 5]} intensity={3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.25}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight intensity={2} />

      {/* Responsive scaling & positioning */}
      <primitive
        object={robot.scene}
        scale={isMobile ? 2.5 : 3.4}
        position={isMobile ? [0, -1.5, 0] : [-0.05, -1.9, 0]}
        rotation={isMobile ? [0, 0, 0] : [0, Math.PI / 8, 0]}
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
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{
        position: isMobile ? [0, 1.8, 8] : [0, 2, 10],
        fov: isMobile ? 45 : 40,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={!isMobile} // Disable rotation on mobile
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
