import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginRegister from './components/pages/LoginRegister';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Register/Login",
    element: <LoginRegister/>,
  },
  {
    path: "Tools",
    element: <ToolsPage/>,
  },
  {
    path: "API",
    element: <APIPage/>,
  },
  {
    path: "Pricing",
    element: <PricingPage/>,
  },
  {
    path: "About",
    element: <AboutPage/>,
  },
  {
    path: "Contact",
    element: <ContactPage/>,
  },

  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
