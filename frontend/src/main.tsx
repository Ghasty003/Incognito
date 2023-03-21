import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { MessageContextProvider } from './contexts/MessageContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthContextProvider>
       <MessageContextProvider>
          <App />
       </MessageContextProvider>
      </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
)
