import { PILLARS } from '../data/site';

const METRICS = [
  { value: '5+', label: 'Years on Solidity & EVM' },
  { value: '5', label: 'Live products shipped' },
  { value: '5', label: 'Co-authored ERCs' },
] as const;

export function TrustStrip() {
  return (
    <section className="relative border-y border-paper-hairline bg-paper-deep">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        {/* Metrics */}
        <ul className="grid divide-y divide-paper-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {METRICS.map(({ value, label }) => (
            <li key={label} className="px-2 py-8 sm:px-10">
              <p className="tnum font-display text-5xl font-semibold tracking-tightest text-ink sm:text-6xl">
                {value}
              </p>
              <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Pillars — numbered, hairline rows */}
      <div className="border-t border-paper-hairline">
        <div className="mx-auto max-w-edge px-5 sm:px-8">
          <ul className="grid divide-y divide-paper-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {PILLARS.map(({ title, detail }, index) => (
              <li key={title} className="group surface-card-quiet px-2 py-8 sm:px-10">
                <p className="font-mono text-[0.7rem] font-medium tracking-tight text-ink-soft">
                  0{index + 1} ——
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
