import { ArrowUpRight } from 'lucide-react';
import { FEATURED, MORE_PRODUCTS } from '../content';
import { SectionHead } from './SectionHead';

const host = (href: string) => new URL(href).hostname.replace(/^www\./, '');

export function Products() {
  return (
    <section id="products" className="c-wrap py-20 sm:py-28">
      <SectionHead
        eyebrow="Reference implementation"
        title="Products I build and run"
        lead="My own products, built outside client work. The first two are live today; the rest are earlier builds."
      />

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-8">
        {FEATURED.map((product) => (
          <article key={product.name} className="group flex flex-col">
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${product.name} website`}
              className="block overflow-hidden rounded-2xl border border-c-rule bg-[#0b1115]"
            >
              <img
                src={product.image}
                alt={`${product.name} preview card`}
                width={1200}
                height={630}
                loading="lazy"
                decoding="async"
                className="aspect-[1200/630] w-full object-cover transition duration-500 group-hover:scale-[1.015]"
              />
            </a>
            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif text-3xl font-medium">{product.name}</h3>
              <p className="c-meta">{product.kind}</p>
            </div>
            <p className="mt-3 max-w-[52ch] leading-relaxed text-c-ink2">{product.description}</p>
            <p className="c-meta mt-4">{product.stack.join(' · ')}</p>
            <div className="mt-5 flex gap-6 text-sm font-semibold">
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="c-link inline-flex items-center gap-1"
              >
                {host(product.href)}
                <ArrowUpRight size={15} aria-hidden />
              </a>
              {product.repo && (
                <a
                  href={product.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-link inline-flex items-center gap-1"
                >
                  Source
                  <ArrowUpRight size={15} aria-hidden />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <h3 className="c-eyebrow mt-20">Earlier builds</h3>
      <ul className="mt-5 border-t border-c-rule">
        {MORE_PRODUCTS.map((product) => (
          <li key={product.name} className="border-b border-c-rule">
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1 py-4 sm:grid-cols-[11rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-medium transition-colors group-hover:text-c-accent">
                {product.name}
              </span>
              <span className="text-sm text-c-ink2">{product.description}</span>
              <span className="c-meta inline-flex items-center gap-2">
                {product.stack}
                <ArrowUpRight size={14} aria-hidden />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
