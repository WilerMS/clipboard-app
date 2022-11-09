import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextListProvider } from './context/list.context'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ContextListProvider>
      <App />
    </ContextListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
