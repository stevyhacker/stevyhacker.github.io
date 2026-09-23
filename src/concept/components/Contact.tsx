import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, FileText } from 'lucide-react';
import { LINKS, PERSON } from '../content';
import { useLocalTime } from '../useLocalTime';

export function Contact() {
  const { time, zone } = useLocalTime(PERSON.timeZone);
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSON.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PERSON.email}`;
    }
  };

  return (
    <section id="contact" className="c-wrap py-24 sm:py-32">
      <p className="c-eyebrow">Discussions-to</p>
      <h2 className="c-h2 mt-4 max-w-[17ch] sm:text-6xl">
        Vaults, treasuries, cross‑chain flows? Let’s talk.
      </h2>
      <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
        <a
          href={`mailto:${PERSON.email}`}
          className="c-link break-all font-serif text-[1.55rem] leading-tight sm:text-4xl"
        >
          {PERSON.email}
        </a>
        <button type="button" onClick={copyEmail} className="c-btn-ghost !px-3 !py-2">
          {copied ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />}
          <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <p className="c-meta mt-6">
        {PERSON.location} · <time>{time}</time> {zone}
      </p>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
        <li>
          <a
            href={PERSON.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="c-link inline-flex items-center gap-1.5"
          >
            <FileText size={15} aria-hidden />
            Résumé (PDF)
          </a>
        </li>
        {LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="c-link inline-flex items-center gap-1"
            >
              {label}
              <ArrowUpRight size={15} aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-c-rule">
      <div className="c-wrap c-meta flex flex-col gap-2 py-8 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PERSON.name} · Podgorica
        </p>
        <p>
          Design concept, not indexed ·{' '}
          <a href="/" className="c-link text-c-accent">
            Current site
          </a>
        </p>
      </div>
    </footer>
  );
}
