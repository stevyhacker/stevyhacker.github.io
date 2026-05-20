import { ArrowDown, FileText } from 'lucide-react';
import { SITE, SKILLS, SOCIAL } from '../data/site';
import { EmailIconLink, SocialLinks } from './SocialLinks';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-3.75rem)] items-center justify-center overflow-hidden pt-[3.75rem] sm:min-h-[calc(100vh-4rem)] sm:pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(88,133,124,0.22),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-[18%] h-80 w-80 rounded-full bg-sage/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-12 bottom-[12%] h-72 w-72 rounded-full bg-sand-deep/50 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center sm:py-24">
        <div className="relative mx-auto mb-10 w-fit sm:mb-12">
          <div
            className="absolute -inset-3 rounded-full bg-gradient-to-br from-leaf/60 to-sage/40 blur-md"
            aria-hidden
          />
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-[3px] border-white/60 bg-gradient-to-br from-[#d1dfd2] to-leaf p-1 shadow-glow sm:h-56 sm:w-56">
            <img
              src={SITE.photo}
              decoding="async"
              alt={SITE.name}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <p className="section-eyebrow">{SITE.title}</p>
        <h1 className="font-display text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
          {SITE.name}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          {SITE.tagline}
        </p>
        <p className="mx-auto mt-4 inline-flex max-w-lg items-center justify-center gap-2 rounded-full border border-sage/25 bg-white/35 px-4 py-2 text-sm font-medium text-sage shadow-pill backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
          {SITE.proof}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a href="#work" className="btn-primary min-w-[11rem]">
            View selected work
          </a>
          <a
            href={SITE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary min-w-[11rem]"
          >
            <FileText size={18} aria-hidden />
            Download CV
          </a>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
          <SocialLinks links={SOCIAL} size={22} />
          <EmailIconLink size={22} />
        </div>

        <ul
          className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-2"
          aria-label="Core skills"
        >
          {SKILLS.map((skill) => (
            <li key={skill}>
              <span className="pill">{skill}</span>
            </li>
          ))}
        </ul>

        <a
          href="#work"
          className="mt-14 inline-flex flex-col items-center gap-1 text-xs font-medium uppercase tracking-widest text-ink-soft transition hover:text-sage"
          aria-label="Scroll to work"
        >
          <span>Explore</span>
          <ArrowDown size={18} className="animate-bounce" aria-hidden />
        </a>
      </div>
    </section>
  );
}
