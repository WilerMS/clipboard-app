import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import { ContextListProvider } from './context/list.context'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <ContextListProvider>
    <App />
  </ContextListProvider>
);