import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConceptPage } from './ConceptPage';
import './concept.css';

const rootEl = document.getElementById('root');

if (!rootEl) {
  throw new Error('Root element #root not found');
}

createRoot(rootEl).render(
  <StrictMode>
    <ConceptPage />
  </StrictMode>,
);
