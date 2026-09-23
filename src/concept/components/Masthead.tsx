import { NAV, PERSON } from '../content';

export function Masthead() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-c-rule/70 bg-c-paper/85 backdrop-blur-md">
      <div className="c-wrap flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-c-mono text-sm font-medium tracking-tight">
          {PERSON.handle}
          <span className="text-c-muted">/concept</span>
        </a>
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex gap-7 text-sm text-c-ink2">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="c-link transition-colors hover:text-c-ink">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`mailto:${PERSON.email}`} className="c-btn !px-4 !py-2">
          Email
        </a>
      </div>
    </header>
  );
}
