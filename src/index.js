import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CryptoContextProvider } from './contexts/CryptoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CryptoContextProvider>
      <App />
    </CryptoContextProvider>
  </React.StrictMode>
);
