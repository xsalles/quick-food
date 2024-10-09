import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import QuickFood from "./pages/landpage/index.jsx"
import { Global } from './Global.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuickFood />
    <Global/>
  </React.StrictMode>
);

reportWebVitals();
