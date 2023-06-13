import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Models = () => {
  const MountainsMesh = useGLTF("/mountains/scene.gltf");

  return (
    <mesh rotation={[0, 1.83 * Math.PI, 0]}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[10, 30, 0]}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={MountainsMesh.scene}
        scale={0.5}
        position={[-15, -4, 0]}
        rotation={[0, Math.PI, 0]}
      />
    </mesh>
  );
};

const Mountains = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, -40, 0], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%", minHeight: "75vh"}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotateSpeed={0.05}
        />
        <Models />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Mountains;
