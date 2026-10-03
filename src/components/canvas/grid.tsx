"use client";

import * as React from "react";
import { useTheme } from "next-themes";

type RGB = [number, number, number];

type Palette = {
  background: RGB;
  line: RGB;
  cover: RGB;
  // Strength of the lines drawn over the cover, so the grid shows at rest
  restLineOpacity: number;
};

// Page background with grid lines, under a darker cover drawn at each cell's
// opacity; lines are drawn again faintly on top of the cover
const PALETTES: Record<"light" | "dark", Palette> = {
  light: {
    background: [255, 255, 255],
    line: [209, 213, 219],
    cover: [241, 241, 241],
    restLineOpacity: 0.5,
  },
  dark: {
    background: [15, 23, 42],
    line: [51, 65, 85],
    cover: [2, 6, 22],
    restLineOpacity: 0.5,
  },
};

// Cell size as a fraction of canvas height (0.5 world units seen by the old
// 75° perspective camera at z = 5)
const CELL_SIZE_RATIO = 0.0652;
const MAX_DPR = 1.5;

const REVEALED_OPACITY = 0.1;
const TWINKLE_INTERVAL_MS = 120;
const TWINKLE_DURATION_MS = 2400;
// Fades are slow, so 30fps is smooth enough and halves redraw cost
const TWINKLE_FRAME_MS = 1000 / 30;
// Skip redrawing a cell when its opacity changed by less than this
const OPACITY_EPSILON = 1 / 100;
// Roughly one new twinkle per tick for every 400 cells
const TWINKLES_PER_CELL = 1 / 400;

type Twinkle = { cell: number; start: number; depth: number };

const rgb = ([r, g, b]: RGB) => `rgb(${r}, ${g}, ${b})`;

const GridPattern = () => {
  const { resolvedTheme } = useTheme();
  const palette = PALETTES[resolvedTheme === "dark" ? "dark" : "light"];

  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!container || !canvas || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Cell boundaries in device pixels, snapped so cells tile without seams
    let xs: number[] = [];
    let ys: number[] = [];
    let cols = 0;
    let rows = 0;
    let lineWidth = 1;
    // Base cover opacity per cell: 1 is covered, REVEALED_OPACITY after hover
    let baseOpacity = new Float32Array(0);
    // Opacity each cell was last drawn with, to skip invisible redraws
    let drawnOpacity = new Float32Array(0);
    let twinkles = new Map<number, Twinkle>();

    let hoveredCell = -1;
    let isVisible = true;
    let frame = 0;
    let lastFrameTime = 0;
    let twinkleTimer: ReturnType<typeof setInterval> | undefined;

    const backgroundStyle = rgb(palette.background);
    const lineStyle = rgb(palette.line);
    const coverStyle = rgb(palette.cover);

    // With allEdges false, only the top and left edges are drawn, so each
    // boundary is drawn once across neighbouring cells
    const drawLines = (
      x: number,
      y: number,
      w: number,
      h: number,
      allEdges: boolean,
    ) => {
      ctx.fillRect(x, y, w, lineWidth);
      ctx.fillRect(x, y, lineWidth, h);
      if (allEdges) {
        ctx.fillRect(x, y + h - lineWidth, w, lineWidth);
        ctx.fillRect(x + w - lineWidth, y, lineWidth, h);
      }
    };

    const drawCell = (cell: number, opacity: number, force = false) => {
      if (!force && Math.abs(opacity - drawnOpacity[cell]) < OPACITY_EPSILON) {
        return;
      }
      drawnOpacity[cell] = opacity;

      const col = cell % cols;
      const row = Math.floor(cell / cols);
      const x = xs[col];
      const y = ys[row];
      const w = xs[col + 1] - x;
      const h = ys[row + 1] - y;

      ctx.globalAlpha = 1;
      ctx.fillStyle = backgroundStyle;
      ctx.fillRect(x, y, w, h);

      // Full frame under the cover, visible where the cell is revealed
      ctx.fillStyle = lineStyle;
      drawLines(x, y, w, h, true);

      ctx.globalAlpha = opacity;
      ctx.fillStyle = coverStyle;
      ctx.fillRect(x, y, w, h);

      ctx.globalAlpha = palette.restLineOpacity;
      ctx.fillStyle = lineStyle;
      drawLines(x, y, w, h, false);
    };

    const twinkleOpacity = (cell: number, now: number) => {
      const twinkle = twinkles.get(cell);
      if (!twinkle) return baseOpacity[cell];
      const progress = (now - twinkle.start) / TWINKLE_DURATION_MS;
      // Ease open and closed again along a half sine wave
      return (
        baseOpacity[cell] * (1 - twinkle.depth * Math.sin(Math.PI * progress))
      );
    };

    const drawAll = () => {
      const now = performance.now();
      for (let cell = 0; cell < cols * rows; cell++) {
        drawCell(cell, twinkleOpacity(cell, now), true);
      }
    };

    const tick = (now: number) => {
      frame = 0;
      if (now - lastFrameTime < TWINKLE_FRAME_MS) {
        frame = requestAnimationFrame(tick);
        return;
      }
      lastFrameTime = now;
      twinkles.forEach((twinkle, cell) => {
        if (now - twinkle.start >= TWINKLE_DURATION_MS) {
          twinkles.delete(cell);
          drawCell(cell, baseOpacity[cell]);
        } else {
          drawCell(cell, twinkleOpacity(cell, now));
        }
      });
      if (twinkles.size > 0 && isVisible) {
        frame = requestAnimationFrame(tick);
      }
    };

    const requestTick = () => {
      if (!frame && isVisible) frame = requestAnimationFrame(tick);
    };

    const startTwinkles = () => {
      const cellCount = cols * rows;
      const count = Math.max(1, Math.round(cellCount * TWINKLES_PER_CELL));
      const now = performance.now();
      for (let i = 0; i < count; i++) {
        const cell = Math.floor(Math.random() * cellCount);
        // Only twinkle cells that are still covered and not already animating
        if (baseOpacity[cell] === 1 && !twinkles.has(cell)) {
          twinkles.set(cell, {
            cell,
            start: now,
            depth: 0.4 + Math.random() * 0.5,
          });
        }
      }
      requestTick();
    };

    const updateTwinkleTimer = () => {
      clearInterval(twinkleTimer);
      twinkleTimer = undefined;
      if (!reducedMotion && isVisible && !document.hidden) {
        twinkleTimer = setInterval(startTwinkles, TWINKLE_INTERVAL_MS);
      }
    };

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // A grid line runs through the centre; one extra cell of overscan per side
      const cell = Math.max(height * CELL_SIZE_RATIO, 24);
      const half = (size: number) => Math.ceil(size / 2 / cell) + 1;
      const boundaries = (size: number) => {
        const n = half(size);
        return Array.from({ length: n * 2 + 1 }, (_, k) =>
          Math.round((size / 2 + (k - n) * cell) * dpr),
        );
      };
      xs = boundaries(width);
      ys = boundaries(height);
      cols = xs.length - 1;
      rows = ys.length - 1;
      lineWidth = Math.max(1, Math.round(dpr * 0.75));

      baseOpacity = new Float32Array(cols * rows).fill(1);
      drawnOpacity = new Float32Array(cols * rows).fill(1);
      twinkles = new Map();
      hoveredCell = -1;
      drawAll();
    };

    const cellAt = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const scale = canvas.width / rect.width;
      const x = (clientX - rect.left) * scale;
      const y = (clientY - rect.top) * scale;
      if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return -1;
      const col = xs.findIndex((bx, i) => x >= bx && x < xs[i + 1]);
      const row = ys.findIndex((by, i) => y >= by && y < ys[i + 1]);
      return col < 0 || row < 0 ? -1 : row * cols + col;
    };

    // Listen on window so the trail also follows the pointer under the hero text
    const handlePointerMove = (event: PointerEvent) => {
      if (!isVisible) return;
      const cell = cellAt(event.clientX, event.clientY);
      if (cell === hoveredCell) return;
      // Like the original, a cell is revealed as the pointer leaves it
      if (hoveredCell >= 0) {
        baseOpacity[hoveredCell] = REVEALED_OPACITY;
        twinkles.delete(hoveredCell);
        drawCell(hoveredCell, REVEALED_OPACITY);
      }
      hoveredCell = cell;
    };

    const handleVisibilityChange = () => {
      updateTwinkleTimer();
      if (!document.hidden) requestTick();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      updateTwinkleTimer();
      if (isVisible) requestTick();
    });
    intersectionObserver.observe(container);

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    resize();
    updateTwinkleTimer();

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(twinkleTimer);
      cancelAnimationFrame(frame);
    };
  }, [palette]);

  const isDarkTheme = resolvedTheme === "dark";

  return (
    <div ref={containerRef} className="w-full h-auto absolute inset-0">
      <div
        style={{
          background: `
            linear-gradient(to bottom, transparent, transparent 60%, ${isDarkTheme ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 1.0)"} 100%),
            radial-gradient(circle at center, transparent, ${isDarkTheme ? "rgba(15, 23, 42, 0.9)" : "rgba(255, 255, 255, 1.0)"} 100%)
            `,
        }}
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none backdrop-blur-[0.4px]"
      />
      <canvas
        ref={canvasRef}
        aria-hidden
        className="absolute top-0 left-0 w-full h-full z-0"
      />
    </div>
  );
};

export default React.memo(GridPattern);
