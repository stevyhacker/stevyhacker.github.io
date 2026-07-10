import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { SectionHeader } from './SectionHeader';

function ProjectCard({
  project,
  prominent = false,
}: {
  project: (typeof PROJECTS)[number];
  prominent?: boolean;
}) {
  return (
    <article className="group relative h-full transition duration-500 hover:-translate-y-1">
      <div
        className="absolute -inset-px rounded-3xl bg-gradient-to-br from-leaf via-sage-light to-sage opacity-30 blur-sm transition duration-500 group-hover:opacity-50"
        aria-hidden
      />
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="wizard-hover relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/35 bg-white/30 shadow-card backdrop-blur-md transition duration-500 group-hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-4 focus-visible:ring-offset-sand"
        aria-label={`View project: ${project.title}`}
      >
        <div className={`relative overflow-hidden ${prominent ? 'aspect-[40/21]' : 'aspect-video'}`}>
          <img
            src={project.image}
            alt={project.title}
            loading={prominent ? 'eager' : 'lazy'}
            decoding="async"
            width={1280}
            height={720}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
          {!prominent && (
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/5" />
          )}
          <div className="absolute inset-x-0 top-0 flex justify-between p-5 sm:p-6">
            {prominent ? (
              <span className="rounded-full border border-white/35 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream shadow-[0_4px_14px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.15)] backdrop-blur-md">
                Latest project
              </span>
            ) : (
              <span />
            )}
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-cream shadow-[0_4px_12px_rgba(0,0,0,0.2)] backdrop-blur-md transition group-hover:bg-white/30 group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.28)]">
              <ArrowUpRight size={18} aria-hidden />
            </span>
          </div>
          {!prominent && (
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="font-display text-xl font-bold text-cream sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-cream/85 line-clamp-2">
                {project.description}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col space-y-5 border-t border-white/25 bg-white/15 p-5 sm:p-6">
          {prominent && (
            <div>
              <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                {project.description}
              </p>
            </div>
          )}
          <ul className="space-y-2">
            {project.highlights.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                <span
                  className="mt-2 h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-sage to-leaf"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {project.tech.map((tech) => (
              <li key={tech}>
                <span className="pill !py-1 font-mono !text-[0.7rem] sm:!text-xs">{tech}</span>
              </li>
            ))}
          </ul>
          <span className="btn-secondary pointer-events-none mt-auto !min-w-0 self-start !px-5 !py-2.5 text-sm">
            View project
            <ExternalLink size={15} aria-hidden />
          </span>
        </div>
      </a>
    </article>
  );
}

export function Projects() {
  const featured = PROJECTS.filter((project) => project.featured);
  const rest = PROJECTS.filter((project) => !project.featured);

  return (
    <section id="work" className="section-padding relative">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-moss/30 via-leaf/40 to-sage-light/50"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected work"
          lead="Products shipped end-to-end — smart contracts, frontends, and live deployments."
          className="mb-12 sm:mb-16"
        />

        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-sage">
          Latest projects
        </h3>
        <ul className="mb-14 grid list-none gap-7 sm:mb-16 lg:grid-cols-2 lg:gap-8">
          {featured.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} prominent />
            </li>
          ))}
        </ul>

        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-sage">
          More selected work
        </h3>
        <ul className="grid list-none gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {rest.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
