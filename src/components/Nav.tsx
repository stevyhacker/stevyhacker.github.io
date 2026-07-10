import { ArrowRight } from 'lucide-react';
import { NAV, SITE } from '../data/site';

const MOBILE_NAV = NAV.filter(({ label }) => label === 'Work' || label === 'Field Notes');

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-[#f8efdf]/90 backdrop-blur-xl">
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

        <ul className="hidden items-center gap-9 md:flex">
          {NAV.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-5">
          <ul className="flex items-center gap-4 md:hidden">
            {MOBILE_NAV.map(({ href, label }) => (
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
            className="hidden text-sm font-medium text-ink-muted transition hover:text-ink sm:inline-flex"
          >
            CV
          </a>
          <a
            href={`mailto:${SITE.email}?subject=Project%20conversation`}
            className="btn-primary !px-4 !py-2 text-xs sm:!px-5 sm:text-sm"
          >
            Let&apos;s talk
            <ArrowRight size={15} aria-hidden />
          </a>
        </div>
      </nav>
    </header>
  );
}
