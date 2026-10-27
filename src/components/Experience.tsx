import SectionHeader from "./SectionHeader";

type ExperienceItem = {
  period: string;
  title: string;
  description: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2026 – present",
    title: "Freelance Web Developer",
    description:
      "Custom websites for small businesses, including a review-approval hub built on Supabase.",
  },
  {
    period: "2026 – present",
    title: "Cisco Cybersecurity Training, Digititan Holdings",
    description:
      "Introduction to Cybersecurity (completed), Endpoint Security, Cyber Threat Management, Cybersecurity Essentials, Network Defense.",
  },
  {
    period: "2026",
    title: "FNB App Academy and App of the Year Hackathon",
    description:
      "Python development programme, then built Pursuit for the 2026 hackathon.",
  },
  {
    period: "2024 – present",
    title: "Mathematics and CAT Tutor",
    description:
      "Private and agency tutoring for IEB and DBE learners, plus CAT content creation for Wingu Academy.",
  },
  {
    period: "2025 – 2027",
    title: "BSc Information Technology (Software Engineering), Eduvos Pretoria",
    description:
      "Java, database systems (Oracle SQL, MongoDB, Neo4j), networking and security.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-7 lg:px-9">
      <SectionHeader number="03" title="experience_and_training" />

      <div className="flex flex-col">
        {EXPERIENCE.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 gap-1 py-5 border-t border-border last:border-b md:grid-cols-[200px_1fr] md:gap-6"
          >
            <p className="text-[13px] text-muted">{item.period}</p>
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-1.5 text-sub-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}