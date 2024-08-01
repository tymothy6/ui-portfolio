"use client";

import { useTheme } from "next-themes";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, extend, invalidate } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import { Line } from "@react-three/drei";
import {
  PlaneGeometry,
  BufferGeometry,
  BufferAttribute,
  LineSegments,
  MeshBasicMaterial,
} from "three";
extend({
  PlaneGeometry,
  BufferGeometry,
  BufferAttribute,
  LineSegments,
  MeshBasicMaterial,
});

type SquareProps = {
  position: [number, number, number];
  opacity?: number; // initial opacity
  cellSize?: number; // size of each cell
  changeFrequency?: number; // probability of changing opacity per frame
  maxOpacity?: number;
  i: number;
  j: number;
  gridSize: number;
  activeAnimation: { i: number; j: number } | null;
  setActiveAnimation: React.Dispatch<
    React.SetStateAction<{ i: number; j: number } | null>
  >;
};

const Square: React.FC<SquareProps> = ({
  position,
  opacity = 0.1,
  cellSize = 0.5,
  changeFrequency = 0.99,
  maxOpacity,
  activeAnimation,
  setActiveAnimation,
  i,
  j,
}) => {
  const meshRef = useRef<Mesh>() as React.MutableRefObject<Mesh>;
  const frameCounter = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme } = useTheme();

  const gridColor = useTheme().resolvedTheme === "dark" ? "#0f172a" : "#ffffff";
  const derivedMaxOpacity =
    maxOpacity !== undefined
      ? maxOpacity
      : resolvedTheme === "dark"
        ? 1.0
        : 0.1;

  useFrame(() => {
    frameCounter.current += 1;

    if (meshRef.current) {
      const material = meshRef.current.material as MeshBasicMaterial;

      if (frameCounter.current % 10 === 0 && !isHovered) {
        if (Math.random() > changeFrequency) {
          material.opacity = Math.min(derivedMaxOpacity, Math.random());
        }
      }
    }
  });

  const handlePointerOver = () => {
    setIsHovered(true);
    if (meshRef.current) {
      const material = meshRef.current.material as MeshBasicMaterial;
      material.opacity = 1.0; // set opacity on hover
      material.needsUpdate = true;
      invalidate(); // manually trigger a render
    }
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    if (meshRef.current) {
      const material = meshRef.current.material as MeshBasicMaterial;
      material.opacity = opacity; // reset opacity on hover out
      material.needsUpdate = true;
      invalidate(); //manually trigger a render
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <planeGeometry attach="geometry" args={[cellSize, cellSize]} />
      <meshBasicMaterial attach="material" color={gridColor} transparent />
    </mesh>
  );
};

const GridPattern = () => {
  const [gridSize, setGridSize] = useState(48);
  const [activeAnimation, setActiveAnimation] = useState<{
    i: number;
    j: number;
  } | null>(null);
  const spacing = 0.5;
  const gridHalfSize = (gridSize / 2) * spacing;
  const halfSpacing = spacing / 2;
  const lineColor = useTheme().resolvedTheme === "dark" ? "#475569" : "#9ca3af";
  const isDarkTheme = useTheme().resolvedTheme === "dark";

  useEffect(() => {
    function handleResize() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setGridSize(24);
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setGridSize(32);
      } else if (window.matchMedia("(max-width: 1920px)").matches) {
        setGridSize(48);
      } else {
        setGridSize(24);
      }
      invalidate(); // manually trigger a render after resizing the screen and grid size is adjusted
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full h-auto absolute inset-0 ${isDarkTheme ? "opacity-100" : "opacity-50"}`}
    >
      <div
        style={{
          background: `
            linear-gradient(to bottom, transparent, transparent 60%, ${isDarkTheme ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 1.0)"} 100%),
            radial-gradient(circle at center, transparent, ${isDarkTheme ? "rgba(15, 23, 42, 0.9)" : "rgba(255, 255, 255, 1.0)"} 100%)
            `,
        }}
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none backdrop-blur-[0.4px]"
      />
      <Canvas
        frameloop="demand"
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        {[...Array(gridSize)].map((_, i) =>
          [...Array(gridSize)].map((_, j) => (
            <Square
              key={`${i}-${j}`}
              position={[
                (i - gridSize / 2) * spacing,
                (j - gridSize / 2) * spacing,
                0,
              ]}
              i={i}
              j={j}
              gridSize={gridSize}
              activeAnimation={activeAnimation}
              setActiveAnimation={setActiveAnimation}
            />
          )),
        )}
        {[...Array(gridSize + 1)].map((_, i) => (
          <Line
            key={`vline-${i}`}
            points={[
              new Vector3(
                (i - gridSize / 2) * spacing - halfSpacing,
                -gridHalfSize,
                0,
              ),
              new Vector3(
                (i - gridSize / 2) * spacing - halfSpacing,
                gridHalfSize,
                0,
              ),
            ]}
            color={lineColor}
            lineWidth={0.5}
          />
        ))}
        {[...Array(gridSize + 1)].map((_, i) => (
          <Line
            key={`hline-${i}`}
            points={[
              new Vector3(
                -gridHalfSize,
                (i - gridSize / 2) * spacing - halfSpacing,
                0,
              ),
              new Vector3(
                gridHalfSize,
                (i - gridSize / 2) * spacing - halfSpacing,
                0,
              ),
            ]}
            color={lineColor}
            lineWidth={0.5}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default GridPattern;
