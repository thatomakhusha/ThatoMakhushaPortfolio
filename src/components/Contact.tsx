import SectionHeader from "./SectionHeader";

const EMAIL = "thembamakhusha@outlook.com";
const GITHUB_URL = "https://github.com/thatomakhusha";
const CV_URL = "/documents/Thato_Makhusha_Curriculum_Vitae.pdf";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-7 lg:px-9 bg-size-[40px_40px] bg-[linear-gradient(#1e2d4520_2px,transparent_2px),linear-gradient(90deg,#1e2d4520_2px,transparent_2px)]">
      <SectionHeader number="05" title="contact" />

      <p className="max-w-2xl text-2xl md:text-[28px] leading-snug font-medium mb-8">
        Open to internships, graduate opportunities and freelance projects.
      </p>

      <div className="flex flex-wrap gap-4">
        <a href={`mailto:${EMAIL}`} className="btn-primary">
          email_me()
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost hover:bg-accent hover:text-bg"
        >
          github
        </a>
        <a
          href={CV_URL}
          download
          className="btn-ghost hover:bg-accent hover:text-bg"
        >
          download_cv.pdf
        </a>
      </div>
    </section>
  );
}