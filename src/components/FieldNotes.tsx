import { ArrowRight } from 'lucide-react';

const NOTES = [
  {
    date: 'Oct 20, 2026',
    category: 'AI agents',
    title: 'Porting LokalBot to Linux and Windows with agents',
    excerpt: 'How a 150,000-line Swift Mac app got a Rust version for Linux and Windows in three days, after a first attempt that didn’t work out.',
    href: '/blog/posts/porting-lokalbot-to-linux-and-windows/',
  },
  {
    date: 'Oct 20, 2026',
    category: 'AI hardware',
    title: 'Inference, Bottom Up',
    excerpt: 'Why a machine with huge memory can still be slow at running a language model, built up one step at a time.',
    href: '/blog/posts/inference-bottom-up/',
  },
  {
    date: 'Oct 16, 2026',
    category: 'AI hardware',
    title: 'Anatomy of a Token',
    excerpt: 'A field guide to memory, bandwidth and compute, with a calculator that runs the same request on seven chips.',
    href: '/blog/posts/anatomy-of-a-token/',
  },
  {
    date: 'Oct 06, 2026',
    category: 'Local AI',
    title: 'Keystroke to ghost text',
    excerpt: 'How LokalBot’s autocomplete gets from a keystroke to a suggestion in about 140 ms, and where the cloud could fit.',
    href: '/blog/posts/keystroke-to-ghost-text/',
  },
  {
    date: 'Oct 05, 2026',
    category: 'DeFi',
    title: 'Vaults, explained',
    excerpt: 'An animated explainer on DeFi vaults, from Yearn in 2020 to ERC-4626, Morpho Vaults V2 and async ERC-7540 vaults.',
    href: '/blog/posts/vaults-explained/',
  },
  {
    date: 'Oct 03, 2026',
    category: 'Crypto and AI',
    title: 'Inside Bittensor subnets',
    excerpt: 'Part two of the Bittensor explainer: how subnets launch and stay alive, and which ones lead.',
    href: '/blog/posts/inside-bittensor-subnets/',
  },
  {
    date: 'Oct 03, 2026',
    category: 'Crypto and AI',
    title: 'Bittensor, explained',
    excerpt: 'A short animated explainer of how Bittensor pays miners and validators for useful AI work.',
    href: '/blog/posts/bittensor-explained/',
  },
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
            26 posts · 2011–2026 · old posts in their original voice
          </p>
          <a href="/blog/" className="btn-primary mt-9 gap-2">
            Read all posts
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
                  <span className="block text-sage-dark">{String(index + 1).padStart(2, '0')} · {note.category}</span>
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
