type SectionHeadProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
};

export function SectionHead({ eyebrow, title, lead, className = '' }: SectionHeadProps) {
  return (
    <div className={className}>
      <p className="c-eyebrow">{eyebrow}</p>
      <h2 className="c-h2 mt-4">{title}</h2>
      {lead && <p className="c-lead mt-5">{lead}</p>}
    </div>
  );
}
