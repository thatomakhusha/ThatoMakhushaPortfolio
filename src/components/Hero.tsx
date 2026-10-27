"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CODE_TAG = "< open to opportunities />";

const TEXT1 = "Hi, I'm";
const TEXT2 = "Thato Makhusha.";

const portStack = [
    "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Java"
]

export default function Hero(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count >= TEXT1.length + TEXT2.length) return;

        const delay = count === TEXT1.length ? 160 : 60;
        const timer = setTimeout(() => setCount(count + 1), delay);

        return () => clearTimeout(timer);
    }, [count]);

    const line1 = TEXT1.slice(0, count);
    const line2 = TEXT2.slice(0, Math.max(0, count - TEXT1.length));
    
    return (
        <section
            id="hero"
            className="relative overflow-hidden flex flex-col gap-3 border-b border-border bg-size-[40px_40px] bg-[linear-gradient(#1e2d4520_2px,transparent_2px),linear-gradient(90deg,#1e2d4520_2px,transparent_2px)]"
        >
                <div className="self-start text-[14px] inline-block text-accent bg-accent/8 border border-border px-3.5 py-1.25 rounded-sm mb-6">
                    {CODE_TAG}
                </div>

                <h1 className="text-[5rem] font-medium leading-[1.2] min-h-[2.4em]">
                    <span>{line1}</span>
                    <br />
                    <span className="text-accent">{line2}</span>
                </h1>
                
                <p className="text-[17px] text-sub-text max-w-200 mb-8">
                    Software engineering student at Eduvos, building
                    full-stack web apps and working towards a career in
                    software engineering and cybersecurity.
                </p>
                <div className="flex gap-4">
                    <a href="/" download className="btn-primary self-start">
                        view_projects()
                    </a>
                    <a href="/" download className="btn-ghost self-start">
                        download_cv()
                    </a>
                </div>
                <div className="flex flex-wrap gap-2">
                    {portStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-[13px] text-muted bg-bg border border-border px-3 py-1 rounded-2xl mt-2"
                        >
                        {tech}
                        </span>
                    ))}
                </div>
                

            
        </section>
    );
}