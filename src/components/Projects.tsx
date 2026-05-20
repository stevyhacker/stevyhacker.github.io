import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { SectionHeader } from './SectionHeader';

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof PROJECTS)[number];
  large?: boolean;
}) {
  return (
    <article className={`group relative ${large ? '' : 'transition duration-500 hover:-translate-y-1'}`}>
      <div
        className="absolute -inset-px rounded-3xl bg-gradient-to-br from-leaf via-sage-light to-sage opacity-30 blur-sm transition duration-500 group-hover:opacity-50"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/30 shadow-card backdrop-blur-md transition duration-500 group-hover:shadow-card-hover">
        <div
          className={`relative overflow-hidden ${large ? 'aspect-[21/9] sm:aspect-[2.35/1]' : 'aspect-video'}`}
        >
          <img
            src={project.image}
            alt={project.title}
            loading={large ? 'eager' : 'lazy'}
            decoding="async"
            width={1280}
            height={720}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/5" />
          <div className="absolute inset-x-0 top-0 flex justify-between p-5 sm:p-6">
            {large ? (
              <span className="rounded-full border border-white/35 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream shadow-[0_4px_14px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.15)] backdrop-blur-md">
                Featured
              </span>
            ) : (
              <span />
            )}
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-cream shadow-[0_4px_12px_rgba(0,0,0,0.2)] backdrop-blur-md transition group-hover:bg-white/30 group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.28)]">
              <ArrowUpRight size={18} aria-hidden />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8">
            <h3
              className={`font-display font-bold text-cream ${large ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}
            >
              {project.title}
            </h3>
            <p
              className={`mt-2 max-w-2xl text-cream/85 ${large ? 'text-sm sm:text-base' : 'text-sm line-clamp-2'}`}
            >
              {project.description}
            </p>
          </div>
        </div>

        <div className="space-y-5 border-t border-white/25 bg-white/15 p-5 sm:p-6">
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
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !min-w-0 !px-5 !py-2.5 text-sm"
          >
            View project
            <ExternalLink size={15} aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
  const rest = PROJECTS.filter((p) => p !== featured);

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

        <div className="mb-8 sm:mb-10">
          <ProjectCard project={featured} large />
        </div>

        <ul className="grid list-none gap-7 md:grid-cols-2 md:gap-8">
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
