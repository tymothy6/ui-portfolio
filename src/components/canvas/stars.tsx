"use client"

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { useTheme } from "next-themes";

const Stars = (props: any) => {
  const ref = useRef<Mesh>();
  
    // Generate random points within a sphere using Math.random()
    const sphere = (count: number, radius: number) => {
        const points = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
          const r = radius * Math.cbrt(Math.random()); 
          const theta = Math.random() * 2 * Math.PI;
          const phi = Math.acos(2 * Math.random() - 1);
          const x = r * Math.sin(phi) * Math.cos(theta);
          const y = r * Math.sin(phi) * Math.sin(theta);
          const z = r * Math.cos(phi);
          points.set([x, y, z], i * 3);
        }
        return points;
      };
    
      const generatedSphere = sphere(2000, 1.4);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    }
  });

  const pointColor = useTheme().resolvedTheme === "dark" ? "#C2B3FF" : "#5a32b0";

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={generatedSphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={pointColor}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.75}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;