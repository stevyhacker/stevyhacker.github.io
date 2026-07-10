import { ArrowRight, Code2, Database, FileText, Layers3 } from 'lucide-react';
import { ABOUT_LEAD, SITE } from '../data/site';

const NOTES = [
  {
    meta: '02 · Early crypto · Dec 26, 2017',
    title: 'Rudarenje kriptovaluta: Bitcoin i Ethereum',
    href: '/blog/posts/rudarenjemining-kriptovaluta-bitcoin-i-ethereum/',
  },
  {
    meta: '03 · Community · Nov 12, 2012',
    title: 'Prvi crnogorski hakaton',
    href: '/blog/posts/prvi-crnogorski-hakaton/',
  },
] as const;

const EXPERTISE = [
  {
    icon: Code2,
    text: 'Smart contracts and DeFi on EVM, Solidity, and production protocol patterns.',
  },
  {
    icon: Database,
    text: 'Products that ship: from backends and data pipelines to React and TypeScript interfaces.',
  },
  {
    icon: Layers3,
    text: 'Open-source and public projects that document the thinking and the work.',
  },
] as const;

export function ClosingSection() {
  return (
    <section className="bg-[#fbf5ea] py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:gap-0">
        <div id="about" className="lg:border-r lg:border-ink/15 lg:pr-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-dark">About</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {ABOUT_LEAD}
          </p>
          <ul className="mt-8 space-y-5">
            {EXPERTISE.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-4 text-sm leading-relaxed text-ink-muted">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 text-sage-dark">
                  <Icon size={17} strokeWidth={1.6} aria-hidden />
                </span>
                <span className="pt-1.5">{text}</span>
              </li>
            ))}
          </ul>
          <a href={SITE.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-9 gap-2 !px-5 !py-2.5">
            <FileText size={16} aria-hidden />
            Download CV
          </a>
        </div>

        <div className="lg:pl-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-dark">
            Field Notes
          </p>
          <h2 className="font-editorial mt-5 max-w-lg text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-ink sm:text-[2.65rem]">
            Notes from early crypto and product building.
          </h2>
          <ol className="mt-8 border-t border-ink/15">
            {NOTES.map((note) => (
              <li key={note.href} className="border-b border-ink/15">
                <a href={note.href} className="group flex items-center justify-between gap-6 py-5">
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-soft">
                      {note.meta}
                    </p>
                    <h3 className="font-editorial mt-2 text-xl font-medium text-ink transition group-hover:text-sage-dark sm:text-2xl">
                      {note.title}
                    </h3>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition group-hover:border-sage group-hover:bg-sage group-hover:text-cream">
                    <ArrowRight size={15} aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <a href="/blog/" className="mt-7 inline-flex items-center gap-2 border-b border-sage/60 pb-1 text-sm font-semibold text-ink">
            Explore the archive
            <ArrowRight size={15} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
