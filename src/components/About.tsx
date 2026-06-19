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
    <section id="about" className="section-padding relative overflow-hidden border-t border-paper-hairline bg-paper-deep">
      <div className="mx-auto max-w-edge px-5 sm:px-8">
        <SectionHeader
          eyebrow="Background"
          title="About"
          lead={ABOUT_LEAD}
          align="left"
          className="reveal mb-16 sm:mb-20"
        />

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-paper-hairline bg-paper-hairline sm:grid-cols-2">
          {ABOUT.map(({ icon, title, description }, index) => {
            const Icon = iconMap[icon];
            return (
              <li
                key={title}
                className="reveal group relative bg-paper p-7 transition-colors duration-300 hover:bg-paper-deep sm:p-9"
                data-delay={index * 60}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-paper-hairline bg-paper-deep">
                    <Icon size={20} className="text-accent" strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="font-mono text-[0.7rem] tracking-tight text-ink-soft tnum">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
