import Section from "./Section";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Contact">
      <p className="mb-6 max-w-lg text-sm leading-relaxed text-fg-dim">
        Open to data engineering and ML engineering roles. Reach out via email or LinkedIn.
      </p>
      <div className="flex flex-col gap-2 text-sm">
        <a href={`mailto:${profile.email}`} className="w-fit text-fg-primary hover:text-accent">
          <span className="text-accent-dim">email:</span> {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-fg-primary hover:text-accent"
        >
          <span className="text-accent-dim">linkedin:</span> {profile.linkedin.replace("https://", "")}
        </a>
        <span className="text-fg-primary">
          <span className="text-accent-dim">phone:</span> {profile.phone}
        </span>
      </div>
      <p className="mt-12 text-xs text-fg-dim">
        &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js, deployed on Vercel.
      </p>
    </Section>
  );
}
