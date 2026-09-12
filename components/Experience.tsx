import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" index="01" title="Work Experience">
      <div className="flex flex-col gap-10">
        {experience.map((job, i) => (
          <div key={i} className="relative border-l border-border pl-6">
            <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-sm font-bold text-fg-primary">
                {job.role}
                <span className="ml-2 font-normal text-fg-dim">({job.contract})</span>
              </h3>
              <span className="text-xs text-fg-dim">{job.period}</span>
            </div>
            <p className="mb-3 text-xs text-accent">{job.company}</p>
            <ul className="flex flex-col gap-2">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex text-sm leading-relaxed text-fg-dim">
                  <span className="mr-2 shrink-0 text-accent-dim">-</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
