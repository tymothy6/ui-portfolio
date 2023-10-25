"use client"

import * as React from "react"

import { Separator } from "@/components/ui/separator"

interface HomeProps {
    id: string;
}

export const AboutPage: React.FC<HomeProps> = ({ id }) => {
    return (
        <div id={id} className="flex flex-col gap-8 md:grid md:grid-cols-2 px-8 py-16 my-16 mx-4 md:mx-24 scroll-mt-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">About me</h2>
            <div className="flex flex-col gap-6 lg:gap-8 lg:mr-8">
                <p className="text-xl font-regular text-foreground leading-relaxed tracking-wide">I&apos;m a scientist by training and graduated with a PhD in Molecular Genetics from the University of Toronto in 2022. My research experience has bolstered my curiosity and instilled a logical way of wondering and knowing that I leverage each day.</p>
                <p className="text-xl font-regular text-foreground leading-relaxed tracking-wide">During my PhD, I developed knowledge translation skills and honed a keen eye for aesthetic design. Now, I work to apply my design skills and data fluency to make complex ideas easier to understand for others.</p>
                <p className="text-xl font-regular text-foreground leading-relaxed tracking-wide">I believe I can fulfill this goal by crafting digital experiences. Software has already changed our perception of what&apos;s possible. But the next generation of user experiences will enable the future and even let us envision what comes after it.</p>
                <p className="text-xl font-regular text-foreground leading-relaxed tracking-wide">Feeling inspired? Connect with me to start a project together.</p>
            </div>
        </div>
        
    )
}

export function ExperiencePage () {
    return(
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 px-8 py-16 my-16 mx-4 md:mx-16 lg:mx-24">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Experience</h2>
            <div className="flex flex-col gap-3 lg:px-8">
            <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="text-lg font-medium text-foreground">Freelance</h3>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">User Experience Designer</h3>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Toronto, ON</p>
                <p className="text-base font-mono font-regular text-foreground">May 2022 - Present</p>
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="text-lg font-medium text-foreground">Lunenfeld-Tanenbaum Research Institute</h3>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Senior Research Scientist</h3>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Toronto, ON</p>
                <p className="text-base font-mono font-regular text-foreground">Jan 2016 - Oct 2022</p>
                
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="text-lg font-medium text-foreground leading-relaxed">Goodman Cancer Research Centre</h3>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Research Scientist</h3>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Montreal, QC</p>
                <p className="text-base font-mono font-regular text-foreground">May 2014 - Jun 2015</p>
                
            </div>
            </div>
        </div>
    )
}

export function SkillsPage () {
    return (
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 px-8 py-16 my-16 mx-4 md:mx-16 lg:mx-24">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Skills</h2>
            <div className="flex flex-col gap-3 lg:px-8">
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground leading-relaxed">User Experience Design</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base font-medium text-foreground leading-relaxed">Figma, FigJam, ProtoPie, Sketch, Adobe Creative Suite</p>
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground leading-relaxed">User Experience Research</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base font-medium text-foreground leading-relaxed">Maze, Dovetail, Miro, Notion</p>
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground leading-relaxed">Information Design & Data Visualization</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base font-medium text-foreground leading-relaxed">Python, R, SQL, Excel, Tableau</p>
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground leading-relaxed">Web & Mobile Development</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base font-medium text-foreground leading-relaxed">HTML, CSS, JavaScript, React, React Native, Swift, Next.js, Express, MongoDB</p>
            </div>
            </div>
        </div>
    )
}

export const ValuesPage: React.FC<HomeProps> = ({ id }) => {
    return (
        
        <div id={id} className="flex-col px-8 py-16 my-16 mx-4 md:mx-16 lg:mx-24 scroll-mt-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">Values</h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-16 gap-y-8">
            <div className="flex flex-col gap-2 mb-8">
                <h3 className="text-2xl font-semibold text-foreground leading-loose mb-2">🤗 Compassion</h3>
                <Separator className="mb-2 block lg:hidden" />
                <p className="text-gray-800 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
                Empathy is a powerful yet strikingly limited spotlight that brightens our connections with others. By definition, we must exclude many more people than we can include. That’s why I train my compassion and temper my empathy, feeling for my users rather than with them. <strong className="font-semibold"><span className="underline decoration-4 decoration-primary underline-offset-2">Compassion is empathy <em>and</em> action</span></strong>. I strive to be compassionate and open-minded in every interaction. Every day I succeed in doing so I forge a more forgiving and productive version of myself.
                </p>
                
            </div>
           
            <div className="flex flex-col gap-2 mb-8">
            
                <h3 className="text-2xl font-semibold text-foreground leading-loose mb-2">🎯 Purpose</h3>
                <Separator className="mb-2 block lg:hidden" />
                <p className="text-gray-800 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
                I approach my design work with the vision of crafting meaningful experiences grounded in user research. As designers, we have the privilege of ensuring that digital experiences are accessible, inclusive, and safe. <strong className="font-semibold"><span className="underline decoration-primary decoration-4 underline-offset-4">I believe in strong ideas that are loosely held.</span></strong> My design philosophy reflects this premise. Learn from your user&apos;s motivations and frustrations. Tirelessly advocate for them during the design process. Communicate your design decisions using appropriate methods in every step of your solution.</p>
                
            </div>
            
            <div className="flex flex-col gap-2 mb-8">
            
                <h3 className="text-2xl font-semibold text-foreground leading-loose mb-2">🌎 Connection</h3>
                <Separator className="mb-2 block lg:hidden" />
                <p className="text-gray-800 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
                I believe in finding new ways to create genuine connections in a digital age. <strong className="font-semibold"><span className="underline decoration-primary decoration-4 underline-offset-4">The solutions that I craft as a designer don’t exist in a vacuum and neither do my users.</span></strong> I aspire to build digital experiences that empower my users and give them the ability to transcend social, economic, and cultural barriers. My lifelong goal is to apply my design skills to help the people I work for realize their dreams. That means stepping out of my comfort zone and taking on challenges in new problem spaces.</p>
            </div>
            
            <div className="flex flex-col gap-2 mb-8">
            
                <h3 className="text-2xl font-semibold text-foreground leading-loose mb-2">🌱 Growth</h3>
                <Separator className="mb-2 block lg:hidden" />
                <p className="text-gray-800 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
                When I’m working on a problem I&apos;m 110% committed to finding a solution. Even so, maintaining my mental and physical health is very important to me. <strong className="font-semibold"><span className="underline decoration-primary decoration-4 underline-offset-4">I&apos;m committed to well-rounded growth in all facets of my life.</span></strong> Above all, I&apos;m a private person that cherishes time alone to recharge. My favourite hobbies that enable this include reading, language learning, and classic RPGs. Currently, I&apos;m studying Korean and Spanish through TV & movies. Physically, I try to push my limits with weight training and racket sports.</p>
            </div>
            </div>
        </div>
    )
}