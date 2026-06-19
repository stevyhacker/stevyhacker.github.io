import { useEffect } from 'react';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { TrustStrip } from './components/TrustStrip';

function App() {
  // Staggered scroll reveal — adds .is-visible to .reveal elements as they enter.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell text-ink">
      <div className="page-grain" aria-hidden />
      <div className="relative z-[1]">
        <Nav />
        <main>
          <Hero />
          <TrustStrip />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
