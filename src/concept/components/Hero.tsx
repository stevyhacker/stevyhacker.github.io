import { Fragment, type ReactNode } from 'react';
import { ArrowUpRight, FileText, Mail } from 'lucide-react';
import { ERCS, PERSON, ercHref } from '../content';
import { useLocalTime } from '../useLocalTime';

export function Hero() {
  return (
    <section
      id="top"
      className="c-wrap grid gap-12 pb-16 pt-28 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pb-24"
    >
      <div>
        <p className="c-eyebrow c-rise">Abstract</p>
        <h1 className="c-rise mt-5 font-serif text-[3.4rem] font-medium leading-[0.92] tracking-[-0.035em] sm:text-7xl lg:text-[5.4rem]">
          Stevan
          <br />
          Bogosavljević
        </h1>
        <p
          className="c-rise mt-8 max-w-[26ch] text-[1.4rem] leading-snug sm:text-[1.65rem]"
          style={{ animationDelay: '80ms' }}
        >
          I build cross-chain treasury and vault contracts for DeFi protocols.
        </p>
        <p className="c-lead c-rise mt-5" style={{ animationDelay: '140ms' }}>
          Senior Solidity engineer in Podgorica. Today: Aave DAO treasury infrastructure at
          TokenLogic. Before that: Synthetix v4 deposits, and five Ethereum standards at RMRK.
        </p>
        <div className="c-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: '200ms' }}>
          <a href={`mailto:${PERSON.email}`} className="c-btn">
            <Mail size={16} aria-hidden />
            Email me
          </a>
          <a href={PERSON.cvUrl} target="_blank" rel="noopener noreferrer" className="c-btn-ghost">
            <FileText size={16} aria-hidden />
            Résumé (PDF)
          </a>
          <a
            href="https://github.com/stevyhacker"
            target="_blank"
            rel="noopener noreferrer"
            className="c-btn-ghost"
          >
            GitHub
            <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>
      </div>

      <div className="relative">
        <figure className="relative ml-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-2xl bg-c-rule">
          <img
            src={PERSON.photo}
            alt="Stevan Bogosavljević at his desk"
            width={1000}
            height={739}
            decoding="async"
            className="h-full w-full object-cover object-[70%_center]"
          />
        </figure>
        <Preamble />
      </div>
    </section>
  );
}

/** The hero's spec card, formatted like an EIP preamble. */
function Preamble() {
  const { time, zone } = useLocalTime(PERSON.timeZone);

  const rows: [string, ReactNode][] = [
    [
      'author',
      <>
        Stevan Bogosavljević <span className="text-c-muted">(@{PERSON.handle})</span>
      </>,
    ],
    ['title', PERSON.role],
    [
      'status',
      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-c-accent" aria-hidden />
        Active · TokenLogic, Aave DAO
      </span>,
    ],
    ['created', '2013'],
    [
      'location',
      <>
        Podgorica, ME · <time>{time}</time> {zone}
      </>,
    ],
    [
      'requires',
      ERCS.map((erc, i) => (
        <Fragment key={erc.number}>
          {i > 0 && ', '}
          <a
            href={ercHref(erc.number)}
            target="_blank"
            rel="noopener noreferrer"
            title={`ERC-${erc.number}: ${erc.title}`}
            className="c-link text-c-accent"
          >
            {erc.number}
          </a>
        </Fragment>
      )),
    ],
  ];

  return (
    <div className="relative z-10 mx-3 -mt-20 rounded-xl border border-c-rule bg-c-surface/95 p-5 font-c-mono text-[0.76rem] leading-[1.9] shadow-[0_30px_60px_-30px_rgba(8,18,24,0.5)] backdrop-blur sm:mx-10 lg:absolute lg:bottom-10 lg:left-0 lg:mx-0 lg:mt-0 lg:w-[400px]">
      <p className="text-c-muted" aria-hidden>
        ---
      </p>
      <dl className="grid grid-cols-[5.25rem_1fr] gap-x-3">
        {rows.map(([key, value], i) => (
          <Fragment key={key}>
            <dt className="c-rise text-c-accent" style={{ animationDelay: `${i * 60}ms` }}>
              {key}:
            </dt>
            <dd className="c-rise min-w-0" style={{ animationDelay: `${i * 60}ms` }}>
              {value}
            </dd>
          </Fragment>
        ))}
      </dl>
      <p className="c-rise text-c-muted" style={{ animationDelay: `${rows.length * 60}ms` }}>
        # requires: the five ERCs I co-authored
      </p>
      <p className="text-c-muted" aria-hidden>
        ---
      </p>
    </div>
  );
}
