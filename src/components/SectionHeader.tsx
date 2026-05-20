type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'center' | 'left';
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'center',
  className = '',
}: Props) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <header className={`${alignClass} ${className}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {lead ? <p className={`section-lead ${align === 'left' ? 'mx-0' : ''}`}>{lead}</p> : null}
    </header>
  );
}
