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
    <RouterProvider router={router} />
  </React.StrictMode>
);
