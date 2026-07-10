import { ArrowRight } from 'lucide-react';

const NOTES = [
  {
    date: 'Jan 18, 2019',
    category: 'Work',
    title: 'Nedostaci i problemi rada od “kuće”',
    excerpt: 'What several years of working remotely taught me before distributed work became normal.',
    href: '/blog/posts/nedostaci-i-problemi-rada-od-kuce/',
  },
  {
    date: 'Dec 26, 2017',
    category: 'Early crypto',
    title: 'Rudarenje kriptovaluta: Bitcoin i Ethereum',
    excerpt: 'An early field note on mining, hardware, and the economics of public blockchains.',
    href: '/blog/posts/rudarenjemining-kriptovaluta-bitcoin-i-ethereum/',
  },
  {
    date: 'Nov 12, 2012',
    category: 'Community',
    title: 'Prvi crnogorski hakaton',
    excerpt: 'A snapshot of Montenegro’s early builder community, long before today’s product work.',
    href: '/blog/posts/prvi-crnogorski-hakaton/',
  },
] as const;

export function FieldNotes() {
  return (
    <section id="notes" className="section-padding relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(242,211,173,0.72),transparent_34%),radial-gradient(circle_at_88%_72%,rgba(163,187,165,0.38),transparent_32%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="self-start lg:sticky lg:top-28">
          <span className="section-eyebrow">Field Notes</span>
          <h2 className="font-editorial max-w-xl text-5xl font-medium leading-[0.94] tracking-[-0.045em] text-ink sm:text-6xl">
            Before the protocols, there were notes.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            A trail from Linux, Android, and Montenegro&apos;s first hackathons to early crypto and
            the work I build today.
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
            19 posts · 2011–2021 · original voice preserved
          </p>
          <a href="/blog/" className="btn-primary mt-9 gap-2">
            Explore the archive
            <ArrowRight size={17} aria-hidden />
          </a>
        </div>

        <ol className="border-t border-ink/15">
          {NOTES.map((note, index) => (
            <li key={note.href} className="border-b border-ink/15">
              <a
                href={note.href}
                className="group grid gap-4 py-7 transition duration-300 hover:translate-x-1 sm:grid-cols-[7rem_1fr_auto] sm:items-start sm:gap-6 sm:py-9"
              >
                <div className="font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.14em] text-ink-soft">
                  <span className="block text-sage-dark">0{index + 1} · {note.category}</span>
                  <span className="mt-1 block">{note.date}</span>
                </div>
                <div>
                  <h3 className="font-editorial text-3xl font-medium leading-none tracking-[-0.035em] text-ink transition-colors group-hover:text-sage-dark sm:text-4xl">
                    {note.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                    {note.excerpt}
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition duration-300 group-hover:-rotate-45 group-hover:border-sage group-hover:bg-sage group-hover:text-cream">
                  <ArrowRight size={17} aria-hidden />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
