import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { GlobalStyle } from './global.js/';
import { UserProvider } from './contexts/AuthContext/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <GlobalStyle />
    <App />
  </UserProvider>,
)
