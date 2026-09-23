import { Contact, Footer } from './components/Contact';
import { Earlier } from './components/Earlier';
import { Facts } from './components/Facts';
import { Hero } from './components/Hero';
import { Masthead } from './components/Masthead';
import { Notes } from './components/Notes';
import { Principles } from './components/Principles';
import { Products } from './components/Products';
import { Standards } from './components/Standards';
import { Work } from './components/Work';

// Section labels borrow EIP document headings (Abstract, Specification, ...),
// a nod to the five standards; the content itself reads as a normal portfolio.
export function ConceptPage() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-c-ink focus:px-4 focus:py-2 focus:text-c-paper"
      >
        Skip to work
      </a>
      <Masthead />
      <main>
        <Hero />
        <Facts />
        <Work />
        <Standards />
        <Products />
        <Earlier />
        <Principles />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
