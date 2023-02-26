import React from 'react'
import { createRoot } from 'react-dom/client'
import Main from './Main'
import { ContextAuthProvider } from './context/auth.context'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <ContextAuthProvider>
    <Main />
  </ContextAuthProvider>
);