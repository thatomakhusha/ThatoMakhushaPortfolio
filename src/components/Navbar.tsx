"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#projects", label: "projects" },
  { href: "/#skills", label: "skills" },
  { href: "/#experience", label: "experience" },
  { href: "/#education", label: "education" },
  { href: "/#contact", label: "contact" },
];

const CV_URL = "/documents/Thato_Makhusha_Curriculum_Vitae.pdf";

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative inline-block overflow-hidden font-mono text-[15px] tracking-[0.1rem] text-muted"
    >
      <span className="block transition-transform duration-250 group-hover:-translate-y-full group-focus-visible:-translate-y-full">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-full left-0 block text-accent transition-transform duration-250 group-hover:-translate-y-full group-focus-visible:-translate-y-full"
      >
        {label}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav aria-label="Main" className="sticky top-0 z-50 border-b border-border bg-bg">
      <div className="flex items-center justify-between h-20 px-6 md:px-7 lg:px-9">
        <Link href="/" className="text-accent text-[14.5px] font-mono">
          TM.dev
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}

          <a
            href={CV_URL}
            download
            className="btn-ghost text-[15px] px-3.5 py-2 hover:bg-accent hover:text-bg"
          >
            download_cv.pdf
          </a>
        </div>

        {/* hamburger (mobile only) */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1.25 p-1"
        >
          <span className="block h-0.5 w-6 bg-accent" />
          <span className="block h-0.5 w-6 bg-accent" />
          <span className="block h-0.5 w-6 bg-accent" />
        </button>
      </div>

      {/* mobile overlay */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#0f0f0f] transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-6 right-8 text-accent"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-4xl uppercase tracking-widest text-muted hover:text-accent"
          >
            {link.label}
          </Link>
        ))}

        <a
          href={CV_URL}
          download
          onClick={() => setOpen(false)}
          className="text-4xl uppercase tracking-widest text-muted hover:text-accent"
        >
          cv.pdf
        </a>
      </div>
    </nav>
  );
}