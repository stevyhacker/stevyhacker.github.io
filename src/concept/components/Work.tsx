import { ArrowUpRight } from 'lucide-react';
import { ROLES } from '../content';
import { SectionHead } from './SectionHead';

export function Work() {
  return (
    <section id="work" className="c-wrap py-20 sm:py-28">
      <SectionHead
        eyebrow="Specification"
        title="Selected work, 2021 to now"
        lead="From NFT liquidity and token standards to lending, perps and DAO treasury: five teams in five years, each one closer to where the money moves."
      />
      <ol className="mt-14 border-t border-c-rule">
        {ROLES.map((role) => (
          <li
            key={role.org}
            className="grid gap-5 border-b border-c-rule py-10 lg:grid-cols-[17rem_1fr] lg:gap-12"
          >
            <div>
              <p className="c-meta">{role.dates}</p>
              <h3 className="mt-2 font-serif text-[1.9rem] font-medium leading-tight tracking-[-0.01em]">
                {role.org}
              </h3>
              <p className="mt-1 text-sm text-c-ink2">{role.role}</p>
              <p className="c-meta mt-3">{role.context}</p>
              {role.current && (
                <p className="c-chip mt-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-c-accent" aria-hidden />
                  Current
                </p>
              )}
            </div>

            <div className="min-w-0">
              <p className="max-w-[62ch] text-lg leading-relaxed">{role.summary}</p>
              <ul className="mt-5 grid gap-2.5 text-[0.95rem] leading-relaxed text-c-ink2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="relative max-w-[70ch] pl-5 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-2.5 before:bg-c-accent"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="c-meta">{role.stack.join(' · ')}</p>
                {role.scale && <MetaLink {...role.scale} />}
                {role.evidence?.map((item) => <MetaLink key={item.href} {...item} />)}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function MetaLink({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="c-meta inline-flex items-center gap-1 !text-c-accent hover:underline"
    >
      {text}
      <ArrowUpRight size={13} aria-hidden />
    </a>
  );
}
