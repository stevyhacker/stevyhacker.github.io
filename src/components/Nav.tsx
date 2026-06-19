import { FileText } from 'lucide-react';
import { NAV, SITE } from '../data/site';

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper-hairline bg-paper/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-edge items-center justify-between gap-4 px-5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink transition hover:text-accent"
        >
          {SITE.name.split(' ')[0].toLowerCase()}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {NAV.map(({ href, label }, i) => (
            <li key={href}>
              <a href={href} className="nav-link">
                <span className="text-ink-soft">0{i + 1}</span>
                <span className="ml-1.5">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-4 sm:hidden">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="font-mono text-xs font-medium text-ink-muted hover:text-ink">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SITE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-3.5 !py-2 !text-xs"
          >
            <FileText size={13} aria-hidden />
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
