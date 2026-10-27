import ProjectCard, { type Project } from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const PROJECTS: Project[] = [
  {
    folder: "pursuit/",
    title: "Pursuit",
    description:
      "Application and career pathway tracker built for the FNB App of the Year Hackathon 2026. Jobs, internships, learnerships, bursaries and university applications in one place.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/projects/pursuit.png",
    demoUrl: "https://pursuit-brown-ten.vercel.app/",
    codeUrl: "https://github.com/thatomakhusha/pursuit",
  },
  {
    folder: "bitbunker/",
    title: "BitBunker",
    description:
      "Retro arcade games hub with 15 planned games and per-game leaderboards. Java game logic, a Next.js frontend, and a Spring Boot and PostgreSQL backend I am learning as I build. In development.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/bitbunker.png",
    codeUrl: "https://github.com/thatomakhusha/bitbunker",
  },
  {
    folder: "ts-cakes/",
    title: "T's Cakes",
    description:
      "Client website for a bakery business, plus a private admin hub where the owner approves or rejects customer reviews, built with Supabase.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/projects/ts-cakes.png",
    demoUrl: "https://tscakes.co.za",
  },
  {
    folder: "golden-moments/",
    title: "Golden Moments",
    description:
      "Custom bakery website with a premium visual identity: tailored palette, typography and a responsive landing page built from reusable components.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/golden-moments.png",
    demoUrl: "https://golden-moments-gold.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-7 lg:px-9">
      <SectionHeader number="01" title="selected_projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.folder} {...project} />
        ))}
      </div>
    </section>
  );
}