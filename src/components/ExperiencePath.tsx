import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Text } from '@react-three/drei';
import * as THREE from 'three';

function CurvedPath() {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2, -2, 0),
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(1, 2, 0),
      new THREE.Vector3(2, 2, 0),
    ]);
  
    const points = curve.getPoints(50); // Points for the path
    const lineRef = useRef<THREE.Line<THREE.BufferGeometry, THREE.LineDashedMaterial>>(null);
  
    useFrame(({ clock }) => {
      if (lineRef.current) {
        const dashedMaterial = lineRef.current.material as THREE.LineDashedMaterial;
        dashedMaterial.dashOffset = -clock.getElapsedTime() * 0.5;
      }
    });
  
    // Positions for text based on curve points
    const textPositions = [
      curve.getPointAt(0.1), // Research Wing Head
      curve.getPointAt(0.3), // Technical Content Curator
      curve.getPointAt(0.5), // Cybersecurity Intern
      curve.getPointAt(0.7), // Chief Technical Officer
    //   curve.getPointAt(0.9), // for adding new position
    ];
  
    return (
      <>
        <Line
          ref={lineRef}
          points={points}
          color="#4F46E5"
          lineWidth={3}
          dashed
          dashScale={0.5}
        />
        {textPositions.map((pos, index) => (
          <Text
            key={index}
            position={[pos.x, pos.y, pos.z + 0.1]} // Slightly offset in the Z-axis
            fontSize={0.3}
            color="#4F46E5"
            anchorX="center"
            anchorY="middle"
          >
            {["Research Wing Head", "Technical Content Curator", "Cybersecurity Intern", "Chief Technical Officer"][index]}
          </Text>
        ))}
      </>
    );
  }
  

export default function ExperiencePath() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <CurvedPath />
      </Canvas>
    </div>
  );
}