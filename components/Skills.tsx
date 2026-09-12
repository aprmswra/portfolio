import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="flex flex-col gap-5">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <span className="w-full shrink-0 text-xs text-accent sm:w-44">{category}</span>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="border border-border px-2 py-1 text-xs text-fg-dim transition-colors hover:border-accent-dim hover:text-fg-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
