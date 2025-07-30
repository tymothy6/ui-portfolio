import * as React from "react";

import { Metadata } from "next";

import { ResumeHero } from "@/components/patterns/landing-hero";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

// import styles from "@/components/modules/landing.module.css";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <main>
      <div>
        <ResumeHero />
      </div>
      <div className="w-full border-t-[1px]" />
      <div className="flex flex-col gap-8 md:px-8 pt-24 pb-36 mx-8 md:mx-24 lg:mx-48 xl:mx-64">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Resume</h2>
          <Separator />
          <div
            className="rounded-lg max-w-4xl relative overflow-hidden mt-4"
            style={{ paddingBottom: "120.41%" }}
          >
            <iframe
              src="https://drive.google.com/file/d/1HErta3g2FdQd1n_iawh94JtHQOSHH5-K/view?usp=sharing"
              width="100%"
              height="100%"
              allow="autoplay"
              className="absolute top-0 w-full h-full"
            ></iframe>
            <div>
              <a href="https://drive.google.com/uc?export=download&id=1HErta3g2FdQd1n_iawh94JtHQOSHH5-K">
                <Button
                  variant="outline"
                  size="default"
                  className="text-foreground dark:text-muted-foreground absolute top-4 left-4"
                >
                  Download
                  <DownloadIcon className="h-[0.9rem] w-[0.9rem] ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
