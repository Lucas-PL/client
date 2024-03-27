import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Layout from './Pages/Layout';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const router = createBrowserRouter([
  { element: <Layout />,
  
   children: [
     { path: "/",          element: <MainPage />},
     { path: "Products",   element: <Products />},
     { path: "Contact",    element: <Contact />},
     { path: "Portfolio",  element: <Portfolio />},
     { path: "About",      element: <About />},
    ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri = {window.location.origin}>

    <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
