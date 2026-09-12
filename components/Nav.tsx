"use client";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4 text-xs sm:px-8">
        <a href="#top" className="text-accent">
          arbi@portfolio<span className="text-fg-dim">:~$</span>
        </a>
        <ul className="hidden gap-5 sm:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-fg-dim transition-colors hover:text-accent">
                ./{l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
