import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { GlobalStyle } from './global.js/';
import { UserProvider } from './contexts/AuthContext/index.jsx';
import Header from './components/Header/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <GlobalStyle />
      <Header />
      <App />
    </UserProvider>
  </BrowserRouter>,
)
