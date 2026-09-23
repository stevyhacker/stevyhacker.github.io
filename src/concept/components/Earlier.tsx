import { EARLIER } from '../content';
import { SectionHead } from './SectionHead';

export function Earlier() {
  return (
    <section id="earlier" className="border-y border-c-rule bg-c-surface">
      <div className="c-wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHead
          eyebrow="Backwards compatibility"
          title="Eight years of Android first"
          lead="Before Solidity I shipped phone and TV apps for banks, telecoms, streaming services and a health startup, and led a mobile team of six. It’s why I care about the product around the contract."
        />
        <ol className="self-start border-t border-c-rule">
          {EARLIER.map((entry) => (
            <li
              key={entry.org}
              className="grid grid-cols-[4.5rem_1fr] gap-x-4 gap-y-1 border-b border-c-rule py-4 sm:grid-cols-[5rem_12rem_1fr]"
            >
              <span className="c-meta pt-0.5">{entry.years}</span>
              <span className="font-medium">{entry.org}</span>
              <span className="col-start-2 text-sm leading-relaxed text-c-ink2 sm:col-start-auto">
                {entry.what}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
