"use client"

import * as React from "react"

import { roboto_mono } from "@/app/fonts"
import { Separator } from "@/components/ui/separator"

interface HomeProps {
    id: string;
}

export const AboutPage: React.FC<HomeProps> = ({ id }) => {
    return (
        <div id={id} className="grid grid-cols-2 py-16 my-16 mx-24 scroll-mt-16">
            <h2 className="text-4xl font-semibold text-foreground">About me</h2>
            <div className="flex-col">
                <p className="text-xl font-regular text-foreground leading-relaxed mb-6">I'm a scientist by training and graduated with a PhD in Molecular Genetics from the University of Toronto in 2022. My research leveraged functional genomics to study small molecule drugs for cancers.</p>
                <p className="text-xl font-regular text-foreground leading-relaxed mb-6">During my PhD, I developed knowledge translation skills and honed a keen eye for aesthetic design. Now, I apply my design skills and data fluency to make complex ideas easier to understand for others.</p>
                <p className="text-xl font-regular text-foreground leading-relaxed mb-6">I believe I can fulfill this goal by crafting digital experiences. Software has already changed our perception of what's possible. But the next generation of user experiences will enable the future and even let us envision what comes after it. Feeling inspired? Connect with me to start a project together.</p>
            </div>
        </div>
        
    )
}

export function ExperiencePage () {
    return(
        <div className="grid grid-cols-2 py-16 my-16 mx-24">
            <h2 className="text-3xl font-semibold text-foreground">Experience</h2>
            <div className="flex-col gap-3">
            <div className="flex-col gap-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">Freelance</h3>
                <h3 className="text-lg font-medium text-foreground leading-relaxed">User Experience Designer</h3>
                <p className="text-base font-regular text-foreground leading-relaxed">Toronto, ON</p>
                <span className={roboto_mono.className}>
                    <p className="text-base font-regular text-foreground leading-relaxed">May 2022 - Present</p>
                </span>
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex-col gap-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">Lunenfeld-Tanenbaum Research Institute</h3>
                <h3 className="text-lg font-medium text-foreground leading-relaxed">Senior Research Scientist</h3>
                <p className="text-base font-regular text-foreground leading-relaxed tracking-wide">Toronto, ON</p>
                <span className={roboto_mono.className}>
                    <p className="text-base font-regular text-foreground leading-relaxed tracking-wide">Jan 2016 - Oct 2022</p>
                </span>
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex-col gap-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">Goodman Cancer Research Centre</h3>
                <h3 className="text-lg font-medium text-foreground leading-relaxed">Research Scientist</h3>
                <p className="text-base font-regular text-foreground leading-relaxed tracking-wide">Montreal, QC</p>
                <span className={roboto_mono.className}>
                <p className="text-base font-regular text-foreground leading-relaxed tracking-wide">May 2014 - Jun 2015</p>
                </span>
            </div>
            </div>
        </div>
    )
}

export function SkillsPage () {
    return (
        <div className="grid grid-cols-2 py-16 my-16 mx-24">
            <h2 className="text-3xl font-semibold text-foreground">Skills</h2>
            <div className="flex-col gap-3">
            <div className="flex-col gap-2">
                <h3 className="text-lg font-medium text-foreground leading-relaxed">User Experience Design</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base font-regular text-foreground leading-relaxed tracking-wide">Figma, FigJam, ProtoPie, Sketch, Adobe Creative Suite</p>
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex-col gap-2">
                <h3 className="text-lg font-medium text-foreground leading-relaxed">User Experience Research</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base font-regular text-foreground leading-relaxed tracking-wide">Maze, Dovetail, Miro, Notion</p>
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex-col gap-2">
                <h3 className="text-lg font-medium text-foreground leading-relaxed">Information Design & Data Visualization</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base font-regular text-foreground leading-relaxed tracking-wide">Python, R, SQL, Tableau</p>
            </div>
            <Separator className="mt-4 mb-4" />
            <div className="flex-col gap-2">
                <h3 className="text-lg font-medium text-foreground leading-relaxed">Web & Mobile Development</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base font-regular text-foreground leading-relaxed tracking-wide">HTML, CSS, JavaScript, React, React Native, Swift, Next.js, Express, MongoDB</p>
            </div>
            </div>
        </div>
    )
}

export const ValuesPage: React.FC<HomeProps> = ({ id }) => {
    return (
        <div id={id} className="flex-col py-16 my-16 mx-24 scroll-mt-16">
            <h2 className="text-3xl font-semibold text-foreground mb-8">Values</h2>
            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            <div className="flex-col gap-2">
                <h3 className="text-xl font-semibold text-foreground leading-relaxed mb-2">🤗 Compassion</h3>
                <p className="text-gray-700 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
                Empathy is a powerful yet strikingly limited spotlight that brightens our connections with others. By definition, we must exclude many more people than we can include. That’s why I believe in training my compassion and tempering my empathy, feeling for my users rather than with them. In short, compassion is empathy <strong>plus</strong> action. I strive to be compassionate and open-minded in every interaction. Every day I succeed in doing so I forge a more forgiving and productive version of myself.
                </p>
                
            </div>
           
            <div className="flex-col gap-2 h-full">
                <h3 className="text-xl font-semibold text-foreground leading-relaxed mb-2">🎯 Purpose</h3>
                <p className="text-gray-700 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
                I approach my design work with the vision of crafting meaningful experiences grounded in user research. As designers, we have the ability to ensure that digital experiences are accessible, inclusive, and safe. My design philosophy is simple. Learn from and be obsessed with your user's motivations and frustrations. Tirelessly advocate for them during the design process. Finally, communicate your design decisions in every step of your solution.</p>
                
            </div>
            
            <div className="flex-col gap-2">
            <Separator className="mb-8" />
                <h3 className="text-xl font-semibold text-foreground leading-relaxed mb-2">🌎 Connection</h3>
                <p className="text-gray-700 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
                I believe in finding new ways to create genuine connections in a digital age. The solutions that I craft as a designer don’t exist in a vacuum and neither do my users. I aspire to build digital experiences that empower my users and give them the ability to transcend social, economic, and cultural barriers. My overarching goal is to apply my design skills to help the people I work for realize their dreams. That means stepping out of my comfort zone and taking on challenges in new problem spaces.</p>
            </div>
            
            <div className="flex-col gap-2">
            <Separator className="mb-8" />
                <h3 className="text-xl font-semibold text-foreground leading-relaxed mb-2">🌱 Growth</h3>
                <p className="text-gray-700 dark:text-gray-200 text-lg font-regular text-foreground leading-relaxed">
                When I’m working on a problem I'm 110% committed to finding a solution. Even so, maintaining my mental and physical health is very important to me. I am committed to well-rounded growth in all facets of my life. I'm very much a private person that cherishes time alone to recharge. My favourite hobbies that enable this include reading, language learning, and RPGs. Currently, I'm studying Korean and watching Spanish TV & movies. Physically, I like to push my limits with racket sports and weight training.</p>
            </div>
            </div>
        </div>
    )
}