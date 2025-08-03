import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Check if we're doing CSR or SSR hydration
const rootElement = document.getElementById('root')!;

if (rootElement.innerHTML === '') {
  // CSR: No server-rendered content, render from scratch
  hydrateRoot(rootElement, (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ));
} else {
  // SSR: Hydrate server-rendered content
  hydrateRoot(rootElement, (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ));
}
