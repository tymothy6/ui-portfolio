import { PageHeader } from "@/components/page-header"
import { Hero } from "@/components/landing-hero"
import { Projects } from "@/components/project-cards"
import { AboutPage, ExperiencePage, SkillsPage, ValuesPage } from "@/components/page-list"
import { ContactPage } from "@/components/contact-page"
import { PageFooter } from "@/components/page-footer"

export default function Home() {
  return (
    <div className="dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
      <PageHeader />
      <Hero />
      <Projects />
      <AboutPage />
      <img
          src="https://images.unsplash.com/photo-1620359536552-e165a11d34c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3502&q=80"
          alt="Aerial view of Vancouver, Canada at dusk, looking north towards downtown and the North Shore mountains"
          className="block object-cover w-full lg:h-[60vh]"
      />
      <ExperiencePage />
      <SkillsPage />
      <ValuesPage />
      <ContactPage />
      <PageFooter />
    </div>
  )
}
