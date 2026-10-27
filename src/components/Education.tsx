import SectionHeader from "./SectionHeader";

type EducationItem = {
  period: string;
  title: string;
  details: string[];
};

const EDUCATION: EducationItem[] = [
  {
    period: "2025 – 2027 (expected)",
    title: "BSc Information Technology (Software Engineering), Eduvos Pretoria",
    details: [
      "Academic Top Achiever, Year 1 Block 1",
      "Relevant modules: Database Systems (Oracle SQL, MongoDB, Neo4j), Java",
    ],
  },
  {
    period: "2022",
    title: "IEB National Senior Certificate, Curro Serengeti",
    details: [
      "Achievements: Academic Full Colours, Athletics Full Colours, Rugby Half Colours",
      "CAT (Computer Applications Technology) Olympiad: Bronze Certificate | Physics Olympiad: Participation Certificate",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-7 lg:px-9">
      <SectionHeader number="04" title="education" />

      <div className="flex flex-col">
        {EDUCATION.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 gap-1 py-5 border-t border-border last:border-b md:grid-cols-[200px_1fr] md:gap-6"
          >
            <p className="text-[13px] text-muted">{item.period}</p>
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <div className="mt-1.5 flex flex-col gap-1 text-sub-text">
                {item.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}