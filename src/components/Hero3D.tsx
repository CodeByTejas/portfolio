import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#4338ca"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute right-0 top-0 h-[600px] w-1/2">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 1, 1]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}