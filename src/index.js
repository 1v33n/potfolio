import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-1yeb86ad.eu.auth0.com"
    clientId="ZKHLHnUe0WgZahQShPpJiTEskVXjTRxH"
    redirectUri="https://ivanhorvath.dev/documents"
  >
            <App/>  
    </Auth0Provider>
  </React.StrictMode>

);
