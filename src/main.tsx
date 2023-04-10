import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./components/Router";
import {Auth0Provider} from "@auth0/auth0-react";

const CLIENT_ID=import.meta.env.VITE_CLIENT_ID
const DOMAIN=import.meta.env.VITE_DOMAIN
const redirectUrl = import.meta.env.PROD ? 'https://briskly.tech': window.location.origin

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Auth0Provider domain={DOMAIN}
      clientId={CLIENT_ID}
    authorizationParams={{redirect_uri:redirectUrl }}
      >
      <RouterProvider router={router} />
      </Auth0Provider>
  </React.StrictMode>,
)
