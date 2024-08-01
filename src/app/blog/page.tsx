import * as React from "react";
import { Suspense } from "react";

import { Metadata, Viewport } from "next";

import { BlogHero } from "@/components/patterns/landing-hero";
import { BlogPostGrid } from "@/components/patterns/blog-grid";

import styles from "@/components/modules/landing.module.css";

export const metadata: Metadata = {
  title: "Design Blog",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#5b47d8" },
    { media: "(prefers-color-scheme: dark)", color: "#654ff0" },
  ],
};

export default function Blog() {
  return (
    <div className={styles.grid}>
      <div className={styles.gradient}>
        <BlogHero />
        <div className="md:mx-24 mb-36">
          <Suspense fallback={<div>Loading...</div>}>
            <BlogPostGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
