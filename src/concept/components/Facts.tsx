import { FACTS } from '../content';

export function Facts() {
  return (
    <section aria-label="At a glance" className="c-wrap">
      <dl className="grid grid-cols-2 gap-px overflow-hidden border-y border-c-rule bg-c-rule lg:grid-cols-4">
        {FACTS.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col gap-2 bg-c-paper px-5 py-6 [&:nth-child(odd)]:pl-0 lg:[&:nth-child(odd)]:pl-5 lg:first:!pl-0"
          >
            <dt className="order-2 text-sm leading-snug text-c-ink2">
              {fact.label}
              {'note' in fact && <span className="c-meta"> · {fact.note}</span>}
            </dt>
            <dd className="order-1 font-serif text-4xl font-medium tracking-[-0.02em] sm:text-5xl">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="c-meta mt-3">
        TVL is protocol-wide context from DefiLlama (the highest value while I was on the team), not
        funds held in my contracts.
      </p>
    </section>
  );
}
