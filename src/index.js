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

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


const router = createBrowserRouter([
  { path: "/",          element: <MainPage />},
  { path: "Products",   element: <Products />},
  { path: "Contact",    element: <Contact />},
  { path: "Portfolio",  element: <Portfolio />},
  { path: "About",      element: <About />},
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
