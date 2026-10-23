"use client";

import * as React from "react";
import Image from "next/image";
import {
  ImageLightbox,
  type LightboxImage,
} from "@/components/patterns/image-lightbox";

type FigureProps = LightboxImage & {
  // Optional caption, written as the element's children in MDX
  children?: React.ReactNode;
};

// An inline content image that opens a larger view when clicked
export function Figure({ src, alt, width, height, children }: FigureProps) {
  const [open, setOpen] = React.useState(false);
  const image = { src, alt, width, height };

  return (
    <figure className="w-full md:max-w-4xl mx-auto mb-8">
      <button
        type="button"
        aria-label={alt ? `View larger: ${alt}` : "View larger image"}
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in md:rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          className="md:rounded-lg"
        />
      </button>
      {children && (
        <figcaption className="text-sm font-medium text-center mt-4 mx-6">
          {children}
        </figcaption>
      )}
      <ImageLightbox image={image} open={open} onOpenChange={setOpen} />
    </figure>
  );
}
