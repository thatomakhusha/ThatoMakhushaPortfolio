import SectionHeader from "./SectionHeader";

const skills = [
    {category: "// build", items: "Next.js, React, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3, Java (developing), Spring Boot (beginner)"},
    {category: "// data", items: "Supabase, PostgreSQL (beginner), MongoDB (beginner), REST API design (beginner), JUnit (beginner)"},
    {category: "// security & tools", items: "Cybersecurity fundamentals (Cisco, in progress), Git and GitHub, Vercel, VS Code, Microsoft Office"}
]

export default function Skills(){

    return (
        <section id="skills">
            <SectionHeader number="02" title="skills" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {skills.map((skill) => (
                    <div className="pt-4 border-t border-border" key={skill.category}>
                        <p className="text-muted text-sm mb-2">
                            {skill.category}
                        </p>
                        <p>
                            {skill.items}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}