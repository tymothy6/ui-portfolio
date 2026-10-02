"use client";

import { useTheme } from "next-themes";
import React, { useRef, useState, useMemo } from "react";
import {
  Canvas,
  useFrame,
  useThree,
  extend,
  invalidate,
} from "@react-three/fiber";
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
  opacity?: number;
  cellSize?: number;
  changeFrequency?: number;
  maxOpacity?: number;
};

const Square: React.FC<SquareProps> = React.memo(
  ({
    position,
    opacity = 0.1,
    cellSize = 0.5,
    changeFrequency = 0.99,
    maxOpacity,
  }) => {
    const meshRef = useRef<Mesh>(null!);
    const frameCounter = useRef(0);
    const [isHovered, setIsHovered] = useState(false);
    const { resolvedTheme } = useTheme();

    const gridColor =
      useTheme().resolvedTheme === "dark" ? "#0f172a" : "#ffffff";
    const derivedMaxOpacity = useMemo(
      () =>
        maxOpacity !== undefined
          ? maxOpacity
          : resolvedTheme === "dark"
            ? 1.0
            : 0.1,
      [maxOpacity, resolvedTheme],
    );

    // Optimize frame updates - only update every 30 frames (~500ms) instead of every 10
    useFrame(() => {
      frameCounter.current += 1;

      if (meshRef.current && frameCounter.current % 30 === 0 && !isHovered) {
        const material = meshRef.current.material as MeshBasicMaterial;
        if (Math.random() > changeFrequency) {
          material.opacity = Math.min(derivedMaxOpacity, Math.random());
          material.needsUpdate = true;
        }
      }
    });

    const handlePointerOver = React.useCallback(() => {
      setIsHovered(true);
      if (meshRef.current) {
        const material = meshRef.current.material as MeshBasicMaterial;
        material.opacity = 1.0;
        material.needsUpdate = true;
        invalidate();
      }
    }, []);

    const handlePointerOut = React.useCallback(() => {
      setIsHovered(false);
      if (meshRef.current) {
        const material = meshRef.current.material as MeshBasicMaterial;
        material.opacity = opacity;
        material.needsUpdate = true;
        invalidate();
      }
    }, [opacity]);

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
  },
);

Square.displayName = "Square";

const SPACING = 0.5;

// Sizes the grid to the camera's visible area so it fills the canvas at any
// aspect ratio, with one extra cell on each side so no edge shows
function Grid({ lineColor }: { lineColor: string }) {
  const viewport = useThree((state) => state.viewport);
  const cols = Math.ceil(viewport.width / SPACING) + 2;
  const rows = Math.ceil(viewport.height / SPACING) + 2;
  const halfWidth = (cols * SPACING) / 2;
  const halfHeight = (rows * SPACING) / 2;

  const gridSquares = useMemo(() => {
    const squares = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        squares.push(
          <Square
            key={`${i}-${j}`}
            position={[
              -halfWidth + (i + 0.5) * SPACING,
              -halfHeight + (j + 0.5) * SPACING,
              0,
            ]}
            cellSize={SPACING}
          />,
        );
      }
    }
    return squares;
  }, [cols, rows, halfWidth, halfHeight]);

  const gridLines = useMemo(() => {
    const lines = [];

    for (let i = 0; i <= cols; i++) {
      const x = -halfWidth + i * SPACING;
      lines.push(
        <Line
          key={`vline-${i}`}
          points={[
            new Vector3(x, -halfHeight, 0),
            new Vector3(x, halfHeight, 0),
          ]}
          color={lineColor}
          lineWidth={0.5}
        />,
      );
    }

    for (let j = 0; j <= rows; j++) {
      const y = -halfHeight + j * SPACING;
      lines.push(
        <Line
          key={`hline-${j}`}
          points={[new Vector3(-halfWidth, y, 0), new Vector3(halfWidth, y, 0)]}
          color={lineColor}
          lineWidth={0.5}
        />,
      );
    }

    return lines;
  }, [cols, rows, halfWidth, halfHeight, lineColor]);

  return (
    <>
      {gridSquares}
      {gridLines}
    </>
  );
}

const GridPattern = () => {
  const lineColor = useTheme().resolvedTheme === "dark" ? "#475569" : "#9ca3af";
  const isDarkTheme = useTheme().resolvedTheme === "dark";

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
        dpr={[1, 2]} // Limit device pixel ratio for performance
        performance={{ min: 0.5 }} // Lower performance threshold
      >
        <Grid lineColor={lineColor} />
      </Canvas>
    </div>
  );
};

export default React.memo(GridPattern);
