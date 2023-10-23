"use client"

import * as React from "react"

interface ScrollContextType {
    scrollProgress: number;
    setScrollProgress: React.Dispatch<React.SetStateAction<number>>;
}

export const ScrollContext = React.createContext<ScrollContextType | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
    const [scrollProgress, setScrollProgress] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <ScrollContext.Provider value={{ scrollProgress, setScrollProgress }}>
            {children}
        </ScrollContext.Provider>
    )
}
