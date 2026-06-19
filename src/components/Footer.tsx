import { Mail, MoveUpRight } from 'lucide-react';
import { SITE, SOCIAL } from '../data/site';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-paper-hairline">
      <div className="mx-auto max-w-edge px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left — the ask */}
          <div className="lg:col-span-7">
            <p className="section-eyebrow reveal" data-delay="0">
              Contact
            </p>
            <h2 className="reveal font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-ink sm:text-6xl md:text-7xl" data-delay="80">
              Let&apos;s build
              <br />
              something.
              <span className="text-accent">_</span>
            </h2>
            <p className="reveal mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg" data-delay="160">
              {SITE.availability}
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="reveal mt-10 inline-flex items-center gap-2 font-mono text-base font-medium text-ink transition-colors duration-200 hover:text-accent sm:text-lg"
              data-delay="220"
            >
              <Mail size={18} strokeWidth={1.75} aria-hidden />
              {SITE.email}
              <MoveUpRight size={16} aria-hidden />
            </a>
          </div>

          {/* Right — index column */}
          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-paper-hairline">
            <div className="reveal flex flex-col gap-8" data-delay="140">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">
                  Elsewhere
                </p>
                <SocialLinks links={SOCIAL} size={18} className="mt-4 !justify-start" />
              </div>

              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">
                  Résumé
                </p>
                <a
                  href={SITE.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-mono text-sm font-medium text-ink transition-colors duration-200 hover:text-accent"
                >
                  Download CV
                  <MoveUpRight size={14} aria-hidden />
                </a>
              </div>

              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">
                  Based in
                </p>
                <p className="mt-3 font-mono text-sm text-ink-muted">Podgorica, Montenegro</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-paper-hairline pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.68rem] tracking-tight text-ink-soft">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="font-mono text-[0.68rem] tracking-tight text-ink-soft">
            Built with React · Vite · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
