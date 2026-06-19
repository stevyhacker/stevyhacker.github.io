import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { SectionHeader } from './SectionHeader';

function ProjectRow({
  project,
  index,
  featured = false,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  featured?: boolean;
}) {
  return (
    <li className="project-row reveal" data-delay={index * 60}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid grid-cols-1 items-center gap-6 py-8 sm:py-10 md:grid-cols-12 md:gap-8 focus:outline-none focus-visible:shadow-focus focus-visible:ring-0"
        aria-label={`View project: ${project.title}`}
      >
        {/* Index + thumbnail */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-5">
            <span className="font-mono text-sm font-medium tracking-tight text-ink-soft tnum">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="relative aspect-[16/10] flex-1 overflow-hidden rounded-xl border border-paper-hairline bg-paper-deep">
              <img
                src={project.image}
                alt={project.title}
                loading={featured ? 'eager' : 'lazy'}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>

        {/* Title + description */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {project.title}
            </h3>
            {featured ? (
              <span className="pill border-accent/30 text-accent">featured</span>
            ) : null}
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Tech + arrow */}
        <div className="md:col-span-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow — pinned right */}
        <div className="hidden md:col-span-12 md:block" />
        <span
          className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 text-ink-soft transition-all duration-300 group-hover:right-0 group-hover:text-ink md:block"
          aria-hidden
        >
          <ArrowUpRight size={22} strokeWidth={1.75} />
        </span>
      </a>
    </li>
  );
}

export function Projects() {
  return (
    <section id="work" className="section-padding relative">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected work"
          lead="Products shipped end-to-end — smart contracts, frontends, and live deployments."
          align="left"
          className="reveal mb-16 sm:mb-20"
        />

        <ul className="list-none">
          {PROJECTS.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              featured={project.featured}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
