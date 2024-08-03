import { fetchAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/patterns/project-card";

import styles from "@/components/modules/landing.module.css";

interface HomeProps {
  id: string;
}

export async function ProjectGrid({ id }: HomeProps) {
  const projects = await fetchAllProjects();

  return (
    <div
      id={id}
      className="flex flex-col justify-center items-start my-16 mx-0 md:mx-24 lg:mx-36 scroll-mt-32"
    >
      <div className="flex flex-row items-center gap-2 mb-8 mx-8">
        <p className="text-base md:text-lg font-semibold text-foreground font-monaSans">
          Featured Work
        </p>
        <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-400 font-monaSans">
          · 2022 - Now
        </p>
      </div>
      <div className="flex flex-col w-full md:grid md:grid-cols-6 md:gap-x-8 gap-y-8">
        {projects.map((project) => {
          return (
            <div key={project.slug} className="h-max col-span-3">
              <ProjectCard data={project} isFirstChild={true} noTilt={false} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
