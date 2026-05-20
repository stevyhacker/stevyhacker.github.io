import { PILLARS } from '../data/site';

const METRICS = [
  { value: '5+', label: 'Years on Solidity & EVM' },
  { value: '5', label: 'Live products shipped' },
  { value: 'EOA → UI', label: 'Contracts to interface' },
] as const;

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/35 bg-leaf/45 py-16 backdrop-blur-md sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink/10">
          {METRICS.map(({ value, label }) => (
            <li key={label} className="px-2 text-center sm:px-8">
              <p className="font-display text-4xl font-extrabold tracking-tight text-ink [text-shadow:0_2px_8px_rgba(47,72,88,0.12)] sm:text-5xl">
                {value}
              </p>
              <p className="mt-2 text-sm font-medium leading-snug text-ink-muted [text-shadow:0_1px_2px_rgba(255,255,255,0.5)]">
                {label}
              </p>
            </li>
          ))}
        </ul>

        <ul className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {PILLARS.map(({ title, detail }, index) => (
            <li key={title} className="glass-card group relative overflow-hidden p-6">
              <span
                className="font-display text-5xl font-extrabold leading-none text-ink/[0.06] transition group-hover:text-sage/15"
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display -mt-6 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
