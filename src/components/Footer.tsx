import { Mail } from 'lucide-react';
import { SITE, SOCIAL } from '../data/site';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div
        className="absolute inset-0 bg-gradient-to-br from-sage-light via-sage to-sage-dark"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(255,255,255,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="inline-block rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cream/80 shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
          Contact
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold text-cream sm:text-4xl">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
          {SITE.availability}
        </p>

        <a
          href={`mailto:${SITE.email}`}
          className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-cream/30 bg-cream/15 px-8 py-4 text-base font-semibold text-cream shadow-[0_8px_28px_rgba(0,0,0,0.22),0_3px_8px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-md transition duration-300 hover:border-cream/45 hover:bg-cream/25 hover:shadow-[0_12px_36px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 sm:text-lg"
        >
          {SITE.email}
          <Mail size={20} strokeWidth={1.75} aria-hidden />
        </a>

        <SocialLinks links={SOCIAL} size={20} variant="footer" className="mt-10" />

        <p className="mt-16 text-xs tracking-wide text-cream/50">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
