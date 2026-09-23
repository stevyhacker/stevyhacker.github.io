import { PRINCIPLES } from '../content';
import { SectionHead } from './SectionHead';

export function Principles() {
  return (
    <section id="principles" className="c-wrap py-20 sm:py-28">
      <SectionHead
        eyebrow="Security considerations"
        title="How I work"
        lead="Most of my work touches funds that can’t be recovered after a bad deploy. These habits come from that."
      />
      <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
        {PRINCIPLES.map((principle) => (
          <div key={principle.title} className="border-t border-c-ink pt-6">
            <h3 className="font-serif text-2xl font-medium leading-snug">{principle.title}</h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-c-ink2">{principle.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
