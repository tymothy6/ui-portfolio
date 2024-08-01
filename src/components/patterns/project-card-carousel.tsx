"use client";

import * as React from "react";

import styles from "@/components/modules/project-card.module.css";

import { Project } from "@/lib/projects";
import { ProjectCard } from "@/components/patterns/project-card";

import { CaretRightIcon } from "@radix-ui/react-icons";

export function ProjectCardCarousel({
  projects,
  recommended,
  noHover,
}: {
  projects: Project[];
  recommended?: boolean;
  noHover?: boolean;
}) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [overlayHeight, setOverlayHeight] = React.useState("auto"); // project card height needs to be set dynamically

  const handleScroll = () => {
    const carousel = carouselRef.current;
    const overlay = overlayRef.current;

    if (carousel && overlay) {
      const firstCard = carousel.children[0] as HTMLDivElement;
      if (firstCard) {
        const scrollPercentage =
          carousel.scrollLeft / firstCard.clientWidth / 0.005;
        const opacity = 1 - Math.min(scrollPercentage, 1);
        overlay.style.opacity = opacity.toString();
      }
    }
  };

  React.useEffect(() => {
    const currentCard = cardRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setOverlayHeight(`${entry.contentRect.height}px`);
      }
    });

    if (cardRef.current) {
      resizeObserver.observe(cardRef.current);
    }

    return () => {
      if (currentCard) {
        resizeObserver.unobserve(currentCard);
      }
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      onScroll={handleScroll}
      className={`flex flex-row relative py-4 overflow-x-auto md:grid md:grid-cols-2 md:gap-4 gap-0 ${styles.horizontalScroll}`}
    >
      {(recommended ? projects.slice(0, 4) : projects).map((project, index) => (
        <div className="flex-shrink-0 w-[85vw] md:w-full" key={project.slug}>
          <ProjectCard
            ref={index === 0 ? cardRef : null}
            data={project}
            isFirstChild={index === 0}
            noTilt={true}
          />
        </div>
      ))}
    </div>
  );
}
