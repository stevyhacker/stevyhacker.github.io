import { About } from './components/About';
import { FieldNotes } from './components/FieldNotes';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { TrustStrip } from './components/TrustStrip';
import { WizardCursor } from './components/WizardCursor';

function App() {
  return (
    <div className="page-shell text-ink">
      <WizardCursor />
      <div className="page-grain" aria-hidden />
      <div className="relative z-[1]">
        <Nav />
        <main>
          <Hero />
          <TrustStrip />
          <Projects />
          <About />
          <FieldNotes />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
