import React from 'react';
import ReactDOM from 'react-dom/client';
import Loader from './Loader';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Loader />
  </React.StrictMode>,
);
