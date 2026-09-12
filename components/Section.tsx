export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-8">
      <h2 className="section-heading mb-8 text-sm tracking-widest text-fg-primary uppercase">
        <span className="mr-2 text-fg-dim">{index}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
