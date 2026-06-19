import { ArrowDown, FileText, MoveUpRight } from 'lucide-react';
import { SITE, SKILLS, SOCIAL } from '../data/site';
import { EmailIconLink, SocialLinks } from './SocialLinks';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16"
    >
      {/* Ambient — single soft accent glow, top-right. */}
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-accent/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-edge px-5 py-24 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left — copy */}
          <div className="lg:col-span-8">
            <p className="reveal section-eyebrow" data-delay="0">
              {SITE.title}
            </p>

            <h1
              className="reveal font-display text-[3rem] font-semibold leading-[0.98] tracking-tightest text-ink sm:text-7xl md:text-[5.5rem]"
              data-delay="80"
            >
              {SITE.name.split(' ')[0]}
              <br />
              {SITE.name.split(' ').slice(1).join(' ')}
              <span className="text-accent">.</span>
            </h1>

            <p
              className="reveal mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
              data-delay="160"
            >
              {SITE.tagline}
            </p>

            <p
              className="reveal mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.78rem] tracking-tight text-ink-soft"
              data-delay="220"
            >
              <span className="tnum">5+ yrs</span>
              <span className="text-ink-faint">/</span>
              <span className="tnum">5 ERCs</span>
              <span className="text-ink-faint">/</span>
              <span>DeFi &amp; NFT protocols</span>
            </p>

            <div
              className="reveal mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
              data-delay="280"
            >
              <a href="#work" className="btn-primary">
                View selected work
                <MoveUpRight size={15} aria-hidden />
              </a>
              <a
                href={SITE.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText size={15} aria-hidden />
                Download CV
              </a>
            </div>

            <div className="reveal mt-10 flex flex-wrap items-center gap-2.5" data-delay="340">
              <SocialLinks links={SOCIAL} size={18} />
              <span className="mx-1 h-5 w-px bg-paper-hairline" aria-hidden />
              <EmailIconLink size={18} />
            </div>

            {/* Skills — now in normal flow, no overlap risk. */}
            <ul
              className="reveal mt-12 flex flex-wrap items-center gap-2"
              aria-label="Core skills"
              data-delay="400"
            >
              {SKILLS.map((skill) => (
                <li key={skill}>
                  <span className="pill">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — asymmetric photo column */}
          <div className="lg:col-span-4">
            <div className="reveal relative mx-auto w-fit lg:mr-0" data-delay="200">
              <div className="relative overflow-hidden rounded-2xl border border-paper-hairline">
                <img
                  src={SITE.photo}
                  decoding="async"
                  alt={SITE.name}
                  className="aspect-[4/5] w-56 object-cover sm:w-72 lg:w-full"
                />
              </div>
              <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-muted">
                [ {SITE.name.split(' ')[0]} — Podgorica ]
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue — tiny, isolated, bottom-center; never overlaps content. */}
      <a
        href="#work"
        className="absolute inset-x-0 bottom-5 mx-auto hidden w-fit flex-col items-center gap-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-soft transition hover:text-ink sm:flex"
        aria-label="Scroll to work"
      >
        <span>scroll</span>
        <ArrowDown size={13} className="animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
