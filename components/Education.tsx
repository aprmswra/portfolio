import Section from "./Section";
import { education, publications, qualifications } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" index="03" title="Education">
      <div className="flex flex-col gap-8">
        {education.map((e, i) => (
          <div key={i}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-sm font-bold text-fg-primary">{e.school}</h3>
              <span className="text-xs text-fg-dim">{e.period}</span>
            </div>
            <p className="mb-1 text-xs text-accent">{e.degree}</p>
            <p className="text-sm text-fg-dim">{e.detail}</p>
            <p className="mt-1 text-xs text-fg-dim">Notable courses: {e.courses}</p>
          </div>
        ))}

        <div>
          <h3 className="mb-3 text-xs uppercase tracking-widest text-fg-dim">Publications</h3>
          <ul className="flex flex-col gap-2">
            {publications.map((p, i) => (
              <li key={i} className="flex text-sm leading-relaxed text-fg-dim">
                <span className="mr-2 shrink-0 text-accent-dim">-</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs uppercase tracking-widest text-fg-dim">Qualifications</h3>
          <ul className="flex flex-col gap-2">
            {qualifications.map((q, i) => (
              <li key={i} className="flex justify-between text-sm text-fg-dim">
                <span>
                  <span className="mr-2 text-accent-dim">-</span>
                  {q.name}
                </span>
                <span className="ml-4 shrink-0 text-xs text-fg-dim">{q.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
