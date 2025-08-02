import React from 'react';
import App from './App';
import { renderToString } from 'react-dom/server';
import './index.css';

export async function render() {
  
  const html = renderToString(<App />);
  return { html };
}
