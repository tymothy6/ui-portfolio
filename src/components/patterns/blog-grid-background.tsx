"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const GridPattern = dynamic(() => import("@/components/canvas/grid"), {
  ssr: false,
});

// Grid behind the blog header that fades out to fully transparent where the
// first card title begins. Place inside a positioned parent that also contains
// the cards, since the fade end is measured relative to that parent.
export function BlogGridBackground() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;

    const measure = () => {
      const title = parent.querySelector("[data-card-title]");
      // Keep the last height when a search leaves no cards to measure
      if (!title) return;
      const offset =
        title.getBoundingClientRect().top - parent.getBoundingClientRect().top;
      setHeight(Math.max(0, Math.round(offset)));
    };

    // Card titles move whenever the layout above or around them reflows
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(parent);
    const mutationObserver = new MutationObserver(measure);
    mutationObserver.observe(parent, { childList: true, subtree: true });

    measure();

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ height: height ?? 0 }}
      className="absolute inset-x-0 top-0 z-0 overflow-hidden pointer-events-none"
    >
      {height ? <GridPattern fade /> : null}
    </div>
  );
}
