import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" index="02" title="Projects">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 border border-border bg-bg-panel p-4 transition-colors hover:border-accent-dim"
          >
            <div className="flex items-center justify-between text-[0.65rem] text-fg-dim">
              <span className="border border-border px-1.5 py-0.5 text-accent">{p.tag}</span>
              <span>{p.period}</span>
            </div>
            <h3 className="text-sm font-bold text-fg-primary">{p.name}</h3>
            <p className="text-xs leading-relaxed text-fg-dim">{p.description}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {p.stack.map((s) => (
                <span key={s} className="border border-border px-1.5 py-0.5 text-[0.65rem] text-fg-dim">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
