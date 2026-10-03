"use client";

import * as React from "react";

import { Separator } from "@/components/ui/separator";

interface HomeProps {
  id: string;
}

export const AboutPage: React.FC<HomeProps> = ({ id }) => {
  return (
    <div
      id={id}
      className="flex flex-col gap-8 md:grid md:grid-cols-2 px-8 py-8 my-8 mx-4 md:mx-24 lg:ml-48 lg:mr-36 xl:mr-48 scroll-mt-16 z-[2]"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
        About me
      </h2>
      <div className="flex flex-col gap-6 lg:gap-8 lg:mr-8">
        <p className="text-lg md:text-xl font-regular text-foreground leading-relaxed tracking-wide">
          I&apos;m a scientist by training. I earned my PhD in Molecular
          Genetics from the University of Toronto in 2022, where I learned to
          approach problems with curiosity and rigour.
        </p>
        <p className="text-lg md:text-xl font-regular text-foreground leading-relaxed tracking-wide">
          My PhD is also where I discovered design. Sharing my research with
          people outside my field showed me how much clarity depends on good
          design. Now I combine design and data skills to make complex ideas
          accessible.
        </p>
        <p className="text-lg md:text-xl font-regular text-foreground leading-relaxed tracking-wide">
          Research taught me that the hardest part of any problem is asking the
          right question. It&apos;s easier than ever to build software, but
          knowing what to build is still hard. As a designer, my job is to keep
          teams focused on the problems that matter to people, not just the ones
          that are easy to solve.
        </p>
        <p className="text-lg md:text-xl font-regular text-foreground leading-relaxed tracking-wide">
          Feeling inspired? Connect with me to start a project together.
        </p>
      </div>
    </div>
  );
};

export function ExperiencePage() {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 px-8 py-8 my-8 mx-4 md:mx-24 lg:mx-48 z-[2]">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
        Experience
      </h2>
      <div className="flex flex-col gap-3 lg:px-8">
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="text-lg font-medium text-foreground">
            AOT Technologies
          </h3>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            User Experience Designer
          </h3>
          <p className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-200">
            Victoria, BC (Remote)
          </p>
          <p className="text-sm md:text-base lg:text-lg font-mono font-regular text-accent-foreground">
            Oct 2025 - Present
          </p>
        </div>
        <Separator className="mt-4 mb-4" />
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="text-lg font-medium text-foreground">
            BC Public Service
          </h3>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            User Experience Designer
          </h3>
          <p className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-200">
            Vancouver, BC
          </p>
          <p className="text-sm md:text-base lg:text-lg font-mono font-regular text-accent-foreground">
            Jul 2024 - Jul 2025
          </p>
        </div>
        <Separator className="mt-4 mb-4" />
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="text-lg font-medium text-foreground">Freelance</h3>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            User Experience Designer
          </h3>
          <p className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-200">
            Toronto, ON
          </p>
          <p className="text-sm md:text-base lg:text-lg font-mono font-regular text-accent-foreground">
            May 2022 - Dec 2023
          </p>
        </div>
        <Separator className="mt-4 mb-4" />
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="text-lg font-medium text-foreground">
            Lunenfeld-Tanenbaum Research Institute
          </h3>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Senior Research Scientist
          </h3>
          <p className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-200">
            Toronto, ON
          </p>
          <p className="text-sm md:text-base lg:text-lg font-mono font-regular text-accent-foreground">
            Jan 2016 - Oct 2022
          </p>
        </div>
        <Separator className="mt-4 mb-4" />
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="text-lg font-medium text-foreground leading-relaxed">
            Goodman Cancer Research Centre
          </h3>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Research Scientist
          </h3>
          <p className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-200">
            Montreal, QC
          </p>
          <p className="text-sm md:text-base lg:text-lg font-mono font-regular text-accent-foreground">
            May 2014 - Jun 2015
          </p>
        </div>
      </div>
    </div>
  );
}

export function SkillsPage() {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 px-8 py-8 my-8 mx-4 md:mx-24 lg:mx-48 z-[2]">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
        Skills
      </h2>
      <div className="flex flex-col gap-3 lg:px-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground leading-relaxed">
            User Experience Design
          </h3>
          <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg font-medium text-foreground leading-relaxed">
            Figma, FigJam, ProtoPie, Sketch, Adobe Creative Suite
          </p>
        </div>
        <Separator className="mt-4 mb-4" />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground leading-relaxed">
            User Experience Research
          </h3>
          <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg font-medium text-foreground leading-relaxed">
            Maze, Dovetail, Miro, Notion
          </p>
        </div>
        <Separator className="mt-4 mb-4" />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground leading-relaxed">
            Information Design & Data Visualization
          </h3>
          <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg font-medium text-foreground leading-relaxed">
            Python, R, SQL, Excel, Tableau
          </p>
        </div>
        <Separator className="mt-4 mb-4" />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground leading-relaxed">
            Web & Mobile Development
          </h3>
          <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg font-medium text-foreground leading-relaxed">
            HTML, CSS, JavaScript, React, React Native, Swift, Next.js, Express,
            MongoDB
          </p>
        </div>
        <Separator className="mt-4 mb-4" />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-foreground leading-relaxed">
            AI Tooling
          </h3>
          <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg font-medium text-foreground leading-relaxed">
            Claude, Claude Code, Cursor, ChatGPT, Figma Make, Model Context
            Protocol (MCP)
          </p>
        </div>
      </div>
    </div>
  );
}

export const ValuesPage: React.FC<HomeProps> = ({ id }) => {
  return (
    <div
      id={id}
      className="flex-col px-8 py-8 my-8 mx-4 md:mx-16 lg:mx-24 xl:mx-36 scroll-mt-16 z-[2]"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
        Values
      </h2>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 gap-y-8">
        <div className="flex flex-col gap-2 mb-8">
          <h3 className="text-2xl font-semibold text-foreground leading-loose mb-2">
            🤗 Compassion
          </h3>
          <Separator className="mb-2 block lg:hidden" />
          <p className="text-gray-800 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
            Empathy is a spotlight: it lights up the people in front of us but
            leaves everyone else in the dark. That&apos;s why I practise
            compassion over empathy, feeling <em>for</em> my users rather than{" "}
            <em>with</em> them.{" "}
            <strong className="font-semibold">
              <span className="underline decoration-4 decoration-primary underline-offset-2">
                Compassion is a mindful balance of humility, empathy, and action
              </span>
            </strong>
            . I try to bring it to every interaction, and each time I do, I
            become a more forgiving and productive version of myself.
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <h3 className="text-2xl font-semibold text-foreground leading-loose mb-2">
            🎯 Purpose
          </h3>
          <Separator className="mb-2 block lg:hidden" />
          <p className="text-gray-800 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
            I ground my design work in user research. As designers, we have the
            privilege of making digital experiences accessible, inclusive, and
            safe.{" "}
            <strong className="font-semibold">
              <span className="underline decoration-primary decoration-4 underline-offset-4">
                I believe in strong ideas, loosely held.
              </span>
            </strong>{" "}
            In practice, that means learning from users&apos; motivations and
            frustrations, advocating for them throughout the design process, and
            documenting my decisions so I can explain them at every step.
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <h3 className="text-2xl font-semibold text-foreground leading-loose mb-2">
            🌎 Connection
          </h3>
          <Separator className="mb-2 block lg:hidden" />
          <p className="text-gray-800 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
            I believe in finding new ways to create genuine connections in a
            digital age.{" "}
            <strong className="font-semibold">
              <span className="underline decoration-primary decoration-4 underline-offset-4">
                The solutions that I craft as a designer don&apos;t exist in a
                vacuum and neither do my users.
              </span>
            </strong>{" "}
            I aspire to build digital experiences that help people overcome
            social, economic, and cultural barriers. Doing that means stepping
            out of my comfort zone and taking on challenges in new problem
            spaces.
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <h3 className="text-2xl font-semibold text-foreground leading-loose mb-2">
            🌱 Growth
          </h3>
          <Separator className="mb-2 block lg:hidden" />
          <p className="text-gray-800 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
            When I&apos;m working on a problem, I&apos;m 100% committed to
            finding a balanced solution. Even so, my mental and physical health
            come first.{" "}
            <strong className="font-semibold">
              <span className="underline decoration-primary decoration-4 underline-offset-4">
                I&apos;m committed to authentic and well-rounded growth in all
                facets of my life.
              </span>
            </strong>{" "}
            I&apos;m a private person who recharges with time alone, usually
            reading, learning languages, or playing board games. Lately,
            I&apos;ve been dabbling in tabletop game design. To clear my mind
            and push my limits, I lift weights and play racket sports.
          </p>
        </div>
      </div>
    </div>
  );
};
