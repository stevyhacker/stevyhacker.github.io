import { ArrowUpRight } from 'lucide-react';
import { ERCS, ercHref } from '../content';
import { SectionHead } from './SectionHead';

export function Standards() {
  return (
    <section id="standards" className="border-y border-c-rule bg-c-surface">
      <div className="c-wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHead
          eyebrow="Standards"
          title="Five ERCs, all Final"
          lead="Co-authored at RMRK with Bruno Škvorc, Steven Pineda and the rest of the team. Together they make NFTs composable: tokens that hold other tokens, switch assets by context and equip parts."
        />
        <ul className="self-start border-t border-c-rule">
          {ERCS.map((erc) => (
            <li key={erc.number} className="border-b border-c-rule">
              <a
                href={ercHref(erc.number)}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[6.25rem_1fr_auto] items-start gap-4 py-5 sm:grid-cols-[7.5rem_1fr_auto]"
              >
                <span className="pt-0.5 font-c-mono text-sm font-medium text-c-accent">
                  ERC-{erc.number}
                </span>
                <span>
                  <span className="block font-medium leading-snug transition-colors group-hover:text-c-accent">
                    {erc.title}
                  </span>
                  <span className="mt-1 block text-sm text-c-ink2">{erc.summary}</span>
                </span>
                <span className="flex items-center gap-3 pt-0.5">
                  <span className="c-chip hidden sm:inline-flex">Final</span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="text-c-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-c-accent"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
