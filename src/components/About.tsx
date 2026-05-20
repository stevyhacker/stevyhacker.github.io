import { Brain, Code2, Database, Wallet } from 'lucide-react';
import { ABOUT, ABOUT_LEAD } from '../data/site';
import { SectionHeader } from './SectionHeader';

const iconMap = {
  code: Code2,
  wallet: Wallet,
  database: Database,
  brain: Brain,
} as const;

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-moss/40 via-leaf/50 to-sage-light/60"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Background"
          title="About"
          lead={ABOUT_LEAD}
          className="mb-12 sm:mb-16"
        />

        <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {ABOUT.map(({ icon, title, description }) => {
            const Icon = iconMap[icon];
            return (
              <li key={title} className="glass-card flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-white/50 to-white/20 shadow-soft">
                  <Icon size={24} className="text-sage-dark" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
