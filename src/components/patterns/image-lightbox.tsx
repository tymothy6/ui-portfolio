"use client";

import * as React from "react";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";

export type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ImageLightboxProps = {
  image: LightboxImage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// Image stays set while closing so it remains visible during the exit animation
export function ImageLightbox({
  image,
  open,
  onOpenChange,
}: ImageLightboxProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          onClick={(event) => {
            // Close when clicking the backdrop around the image
            if (event.target === event.currentTarget) {
              onOpenChange(false);
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 focus:outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <DialogTitle className="sr-only">
            {image?.alt || "Image preview"}
          </DialogTitle>
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="100vw"
              className="max-h-full w-auto h-auto max-w-full object-contain md:rounded-lg"
            />
          )}
          <DialogClose className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
