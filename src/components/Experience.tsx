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
    period: "Oct – Nov 2026",
    title: "Cisco Cybersecurity Training Programme, Digititan Holdings",
    description:
      "Introduction to Cybersecurity (completed), Endpoint Security, Cyber Threat Management, Cybersecurity Essentials, Network Defense (in progress).",
  },
  {
    period: "23–25 Oct 2026",
    title: "FNB App of the Year Hackathon 2026",
    description:
      "Took part as a solo team (Mai Solutions) in the Education challenge on access to higher education, building and submitting Pursuit with a live deployment, presentation deck and demo video.",
  },
  {
    period: "Jul 2026 – present",
    title: "FNB App Academy",
    description:
      "Completed a two-week Python development programme covering programming fundamentals and problem-solving.",
  },
  {
    period: "25–29 May 2026",
    title: "AI Skills Acceleration Programme, CAPACITI",
    description:
      "Completed an intensive one-week programme with practical exposure to AI tools and industry applications.",
  },
  {
    period: "2024 – present",
    title: "Private Mathematics & CAT Tutor, Self-Employed",
    description:
      "Tutor IEB and DBE learners in Mathematics and CAT with personalised learning plans, and prepare them for examinations, assessments and practical tasks.",
  },
  {
    period: "May 2025 – Feb 2026",
    title: "High School Mathematics Tutor, Tutors SA (Pty) Ltd",
    description:
      "Tutored a Grade 10 (IEB) student in Mathematics, improving understanding of core concepts and exam readiness.",
  },
  {
    period: "Nov 2025 – Jan 2026",
    title: "Part-Time CAT Content Creator, Wingu Academy",
    description:
      "Developed curriculum-aligned lesson plans, study guides, worksheets and quizzes for Grade 12 learners.",
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