
import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import MenuPage from './pages/MenuPage';

import Contact from './pages/Contact';

import "./App.css"
import LoginForm from './component/LoginForm/LoginForm';
import RegisterForm from './component/RegisterForm/RegisterForm';

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
    path: "/menu",
    element: <MenuPage/>,
  },

  {
    path: "/contact",
    element: <Contact/>,
  },
  // {
  //   path: "/admin",
  //   element: <AdminPage/>,
  // },
]);


const App = () => {
  const [hideLoginForm, setHideLoginForm] = useState(false);

  function onLoginForm(){
    setHideLoginForm(!hideLoginForm)
    console.log(hideLoginForm);
    if(hideLoginForm){
      const loginForm = document.getElementsByClassName('loginForm');
      // loginForm.style.display = 'block';
      console.log(loginForm.style);
    }
  }
 
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
                <a href={`/menu`}>Menu</a>
              </li>
              
              <li>
                <a href={`/contact`}>Contact</a>
              </li>
              <li>
                {/* <a href=""></a> */}
                <div className='links'>
                  <button className='loginBtn' onClick={onLoginForm}>Login</button> 
                  <LoginForm isHide={hideLoginForm}/>
                  <p>/</p>
                  <button className='registerBtn'>Register</button>
                  <RegisterForm/>
                </div>
               
                  
                  
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