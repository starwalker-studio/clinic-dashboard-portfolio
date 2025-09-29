import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClinicApp } from './main/app/ClinicApp';
import './scss/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClinicApp />
    </BrowserRouter>
  </StrictMode>,
)
