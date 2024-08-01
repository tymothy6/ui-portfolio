import { Asset, AssetLink } from "contentful";

// Our simplified version of an image asset
// We don't need all the data that Contentful gives us
export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// A function to transform a Contentful image asset into our own ContentImage object
// Each image that gets uploaded has a description that we can use for the alt text
export function parseContentfulContentImage(
  asset?: Asset<undefined, string> | { sys: AssetLink },
): ContentImage | null {
  if (!asset) {
    return null;
  }

  if (!("fields" in asset)) {
    return null;
  }

  // replace relative protocol for Next Image component
  let src = asset.fields.file?.url || "";
  if (src.startsWith("//")) {
    src = "https:" + src;
  }

  return {
    src: src,
    alt: asset.fields.description || "",
    width: asset.fields.file?.details.image?.width || 0,
    height: asset.fields.file?.details.image?.height || 0,
  };
}
