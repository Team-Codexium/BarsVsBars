import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <GoogleOAuthProvider clientId="189919288589-2e3s22e2he1dhgl4p3iso94slammroim.apps.googleusercontent.com">
    
    <App />
  
    </GoogleOAuthProvider>
    ;
  </StrictMode>,
)
