import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Initialize Telegram Web App SDK
window.Telegram.WebApp.ready();
window.Telegram.WebApp.setHeaderColor('bg_color', '#FFFF00'); // Set header color to yellow

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
