import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContadorApp } from './ContadorApp';
import './styles.css';

// Pasamos un valor a la función por default
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContadorApp value={0} />
  </StrictMode>,
);