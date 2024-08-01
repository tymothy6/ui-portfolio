import * as React from "react";

import { Metadata } from "next";

import { PasswordHero } from "@/components/patterns/landing-hero";

export const metadata: Metadata = {
  title: "Protected page",
};

export default function Password() {
  return (
    <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-900 dark:animate-gradient-xy">
      <PasswordHero />
    </div>
  );
}
