import { ArrowRight } from 'lucide-react';
import { NOTES } from '../content';
import { SectionHead } from './SectionHead';

export function Notes() {
  return (
    <section id="notes" className="border-y border-c-rule bg-c-surface">
      <div className="c-wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHead
            eyebrow="Motivation"
            title="Writing in public since 2011"
            lead="Nineteen posts from 2011 to 2021, on Linux, Android, Montenegro’s first hackathons and early crypto. The originals are archived as I wrote them."
          />
          <a href="/blog/" className="c-btn-ghost mt-8">
            Read the archive
            <ArrowRight size={16} aria-hidden />
          </a>
        </div>
        <ol className="self-start border-t border-c-rule">
          {NOTES.map((note) => (
            <li key={note.href} className="border-b border-c-rule">
              <a href={note.href} className="group grid gap-2 py-6 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
                <span className="c-meta pt-1.5">{note.date}</span>
                <span>
                  <span
                    lang="sr"
                    className="block font-serif text-2xl font-medium leading-snug transition-colors group-hover:text-c-accent"
                  >
                    {note.title}
                  </span>
                  <span className="mt-2 block text-sm text-c-ink2">{note.excerpt}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
