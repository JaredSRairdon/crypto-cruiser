import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CryptoContextProvider } from './contexts/CryptoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // Re-mounts the child components twice in dev mode
    <CryptoContextProvider>
      <App />
    </CryptoContextProvider>
  // </React.StrictMode>
);
