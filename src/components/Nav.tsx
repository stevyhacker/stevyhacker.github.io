import { FileText } from 'lucide-react';
import { NAV, SITE } from '../data/site';

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-sand/80 shadow-[0_4px_20px_rgba(47,72,88,0.1),0_1px_0_rgba(255,255,255,0.5)_inset] backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[3.75rem] max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-tight text-ink transition hover:text-sage sm:text-base"
        >
          {SITE.name.split(' ')[0]}
          <span className="text-sage">.</span>
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {NAV.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ul className="flex items-center gap-4 sm:hidden">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[0.7rem] font-bold uppercase tracking-wider text-ink-muted hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SITE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !min-w-0 !px-3.5 !py-2 text-xs sm:!px-4 sm:text-sm"
          >
            <FileText size={15} aria-hidden />
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
