import { Mail } from 'lucide-react';
import { SITE, SOCIAL } from '../data/site';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden py-12 sm:py-14">
      <div
        className="absolute inset-0 bg-gradient-to-br from-sage-light via-sage to-sage-dark"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(255,255,255,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="inline-block rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cream/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
          Contact
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold text-cream">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream/85 sm:text-base">
          {SITE.availability}
        </p>

        <a
          href={`mailto:${SITE.email}`}
          className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-cream/30 bg-cream/15 px-7 py-3 text-sm font-semibold text-cream shadow-[0_8px_28px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:border-cream/45 hover:bg-cream/25 hover:-translate-y-0.5 sm:text-base"
        >
          {SITE.email}
          <Mail size={20} strokeWidth={1.75} aria-hidden />
        </a>

        <SocialLinks links={SOCIAL} size={18} variant="footer" className="mt-7" />

        <a
          href="/blog/"
          className="mt-6 inline-flex items-center border-b border-cream/35 pb-1 text-xs font-semibold text-cream/85 transition hover:border-cream hover:text-cream"
        >
          Read Field Notes
        </a>

        <p className="mt-8 text-xs tracking-wide text-cream/50">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
