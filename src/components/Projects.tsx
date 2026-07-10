import { ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/projects';

type Project = (typeof PROJECTS)[number];

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-[1.25rem] border border-ink/10 bg-white/35 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-card-hover">
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="aspect-[16/9] overflow-hidden bg-ink">
          <img
            src={project.image}
            alt={project.title}
            loading="eager"
            decoding="async"
            width={1280}
            height={720}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
          />
        </div>
        <div className="p-6 sm:p-7">
          <h3 className="font-display text-2xl font-bold text-ink">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>
          <ul className="mt-5 space-y-2">
            {project.highlights.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                <span className="mt-2.5 h-px w-4 shrink-0 bg-sage" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tech.map((tech) => (
              <li key={tech}>
                <span className="pill !px-3 !py-1 font-mono !text-[0.65rem]">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  );
}

function ProjectStory({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <article
      id={`${project.title.toLowerCase()}-case-study`}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={reverse ? 'lg:order-2' : ''}>
        <ProjectVisual project={project} />
      </div>
      <div className={reverse ? 'lg:order-1 lg:pl-5' : 'lg:pr-5'}>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-dark">
          {project.eyebrow}
        </p>
        <h2 className="font-editorial mt-4 text-5xl font-medium tracking-[-0.045em] text-ink sm:text-6xl">
          {project.title}
        </h2>
        <dl className="mt-7 space-y-6 text-sm leading-relaxed sm:text-base">
          <div>
            <dt className="font-semibold text-sage-dark">Problem</dt>
            <dd className="mt-1 text-ink-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-sage-dark">Role</dt>
            <dd className="mt-1 text-ink-muted">{project.role}</dd>
          </div>
          <div>
            <dt className="font-semibold text-sage-dark">Outcome</dt>
            <dd className="mt-1 text-ink-muted">{project.outcome}</dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary gap-2">
            Read the case study
            <ArrowRight size={17} aria-hidden />
          </a>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-sage/60 pb-1 text-sm font-semibold text-ink transition hover:border-ink"
          >
            Visit {project.url.replace('https://', '')}
            <ExternalLink size={14} aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = PROJECTS.filter((project) => project.featured);
  return (
    <section id="work" className="relative bg-[#fbf5ea] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.26em] text-sage-dark">
          Selected case studies
        </p>
        <div className="space-y-20 sm:space-y-24 lg:space-y-28">
          {featured.map((project, index) => (
            <ProjectStory key={project.title} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>

      <div className="mt-20 bg-sage py-10 text-cream sm:mt-24 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-6">
          <div>
            <h2 className="font-editorial text-4xl font-medium tracking-[-0.035em] sm:text-[2.75rem]">
              Need someone who can own the hard middle?
            </h2>
            <p className="mt-3 text-base text-cream/85 sm:text-lg">
              From protocol logic and data pipelines to the product people touch.
            </p>
          </div>
          <a
            href="mailto:stevan.bogosavljevic@gmail.com?subject=Project%20conversation"
            className="btn-secondary shrink-0 gap-2 !bg-cream !px-7 !text-ink"
          >
            Start a conversation
            <ArrowRight size={17} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
