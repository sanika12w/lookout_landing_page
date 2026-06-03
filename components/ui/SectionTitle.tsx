export function SectionTitle({
  eyebrow,
  title,
  text,
  id,
}: {
  eyebrow: string;
  title: string;
  text: string;
  id?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-title">{title}</h2>
      <p className="section-copy">{text}</p>
    </div>
  );
}
