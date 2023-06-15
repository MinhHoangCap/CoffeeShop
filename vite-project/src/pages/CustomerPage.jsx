import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Products from './MenuPage';

import Contact from './Contact';

import "../App.css"


import React from 'react'
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    
    {
      path: "/about-us",
      element: <AboutUs/>,
    },
    {
      path: "/products",
      element: <Products/>,
    },
  
    {
      path: "/contact",
      element: <Contact/>,
    },
  ]);
export const CustomerPage = () => {
  return (
    <>
    <header>
      <div className='logo'>
        <a href={`/`}>My Coffee Shop</a>
      </div>
      <nav>
          <ul>
            <li>
              <a href={`/`}>Home Page</a>
            </li>
            <li>
              <a href={`/about-us`}>About Us</a>
            </li>
            <li>
              <a href={`/products`}>Menu</a>
            </li>
            
            <li>
              <a href={`/contact`}>Contact</a>
            </li>
        
          </ul>
        </nav>
    </header>
     <RouterProvider router={router} />
    <footer>
      <p>Create by Hoang</p>
    </footer>
     
  </>
  )
}
