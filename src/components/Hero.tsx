import { ArrowRight } from 'lucide-react';
import { SITE } from '../data/site';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-20 lg:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(163,187,165,0.24),transparent_26%),radial-gradient(circle_at_15%_18%,rgba(242,211,173,0.46),transparent_34%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-dark">
            {SITE.title}
          </p>
          <h1 className="font-editorial mt-5 text-[3.25rem] font-medium leading-[0.92] tracking-[-0.05em] text-ink sm:text-6xl lg:text-[4.2rem]">
            Complex systems,
            <br />
            shipped end to end.
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl lg:mx-0">
            {SITE.tagline}
          </p>
          <a href="#work" className="btn-primary mt-9 gap-2">
            See the work
            <ArrowRight size={17} aria-hidden />
          </a>
        </div>

        <div className="mx-auto flex flex-col items-center">
          <div className="relative">
            <div className="absolute -inset-5 rounded-full bg-sage/15 blur-2xl" aria-hidden />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-[3px] border-white/80 bg-leaf p-1 shadow-glow sm:h-72 sm:w-72">
              <img
                src={SITE.photo}
                decoding="async"
                alt={SITE.name}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
          <p className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-sage" aria-hidden />
            Available for new opportunities
          </p>
        </div>
      </div>
    </section>
  );
}
