import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Products from './pages/MenuPage';

import Contact from './pages/Contact';
import { faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';
// import {faCupToGo}
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
// import {faCoffeePot} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
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
                <a href={`/contact`}>Contact</a>
              </li>
          
            </ul>
          </nav>
      </header>
       <RouterProvider router={router} />
      <footer>
        <p>Create by Hoang</p>
      </footer>
      
      
          <nav className='header2'>
            <ul>
              <li>
                <a href={`/`}><FontAwesomeIcon icon={faHouse} style={{color: 'white',}} /></a>
              </li>
              <li>
                <a href={`/about-us`}><FontAwesomeIcon icon={faUsers} style={{color: 'white',}} /></a>
              </li>
              <li>
                <a href={`/products`}><FontAwesomeIcon icon={faMugHot} style={{color: 'white',}} /></a>
              </li>
              
              <li>
                <a href={`/contact`}><FontAwesomeIcon icon={faMessage} style={{color: "#ffffff",}} /></a>
              </li>
          
            </ul>
          </nav>
       
    </>
  )
}

export default App
