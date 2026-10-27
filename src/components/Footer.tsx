const GITHUB_URL = "https://github.com/thatomakhusha";

export default function Footer() {

  return (
    <footer className="flex flex-col items-center gap-2.5 border-t border-border px-5 py-5 text-center text-sm md:flex-row md:justify-between md:px-8 md:text-left">
      <p className="text-muted">
        ©2026 Thato Makhusha · built with Next.js, TypeScript & Tailwind
      </p>

      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted hover:text-accent"
      >
        GitHub
      </a>
    </footer>
  );
}