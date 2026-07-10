const METRICS = [
  { value: '5+ years', label: 'Building on EVM' },
  { value: 'Protocols, products,', label: 'and production' },
  { value: 'Open source and', label: 'public work' },
] as const;

export function TrustStrip() {
  return (
    <section className="relative border-y border-ink/10 bg-white/20 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink/10">
          {METRICS.map(({ value, label }) => (
            <li key={label} className="px-2 text-center sm:px-8">
              <p className="font-editorial text-3xl font-medium leading-none tracking-[-0.035em] text-ink sm:text-4xl">
                {value}
              </p>
              <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">
                {label}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
