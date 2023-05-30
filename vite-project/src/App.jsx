import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';

import "./App.css"
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
    path: "/reservation",
    element: <Reservation/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);
function App() {

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
                <a href={`/reservation`}>Reservation</a>
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

export default App
