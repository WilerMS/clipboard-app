import React from 'react'
import { createRoot } from 'react-dom/client'
import Main from './Main'
import { ContextListProvider } from './context/list.context'
import { ContextAuthProvider } from './context/auth.context'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <ContextAuthProvider>
    <ContextListProvider>
      <Main />
    </ContextListProvider>
  </ContextAuthProvider>
);