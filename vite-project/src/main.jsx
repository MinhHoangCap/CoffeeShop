import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import AdminPage from "./pages/AdminPage.jsx"
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import HomePage from './pages/HomePage.jsx';
// import AboutUs from './pages/AboutUs.jsx';
// import MenuPage from './pages/MenuPage.jsx';
// import Contact from './pages/Contact.jsx';
// import './index.css'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage/>,
//   },
  
//   {
//     path: "/about-us",
//     element: <AboutUs/>,
//   },
//   {
//     path: "/products",
//     element: <MenuPage/>,
//   },

//   {
//     path: "/contact",
//     element: <Contact/>,
//   },
//   {
//     path: "/admin",
//     element: <AdminPage/>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
        {/* <Route index element={<App />} />
        <Route path="login" element={<Login />} /> */}
        <App />
  </React.StrictMode>,


)
