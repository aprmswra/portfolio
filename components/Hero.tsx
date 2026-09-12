import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-3xl px-6 pt-16 pb-14 sm:px-8 sm:pt-24">
      <p className="fade-in-up mb-3 text-xs text-fg-dim">
        <span className="text-accent">$</span> whoami
      </p>
      <h1 className="fade-in-up mb-2 text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">
        {profile.name}
      </h1>
      <p className="fade-in-up mb-6 text-base text-accent sm:text-lg">{profile.title}</p>
      <p className="fade-in-up max-w-xl text-sm leading-relaxed text-fg-dim">
        {profile.summary}
      </p>
      <div className="fade-in-up mt-8 flex flex-wrap gap-3 text-xs">
        <a
          href={`mailto:${profile.email}`}
          className="tui-button border border-border px-3 py-1.5 text-fg-primary"
        >
          [email]
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="tui-button border border-border px-3 py-1.5 text-fg-primary"
        >
          [linkedin]
        </a>
        <a href="#experience" className="tui-button border border-border px-3 py-1.5 text-fg-primary">
          [view experience]
        </a>
      </div>
    </section>
  );
}
