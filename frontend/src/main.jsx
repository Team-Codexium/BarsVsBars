import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import AuthProvider from '../contexts/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <Auth0Provider
    domain="dev-bgutf6jpk2j0g542.us.auth0.com"
    clientId="kyV8enYKpGB1BntGdIVbTZZgjDQMd2Fz"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > */}
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  
    {/* </Auth0Provider> */}
  </StrictMode>,
)
