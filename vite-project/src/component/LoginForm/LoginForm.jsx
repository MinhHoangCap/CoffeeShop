import React from 'react'
import styles from "./LoginForm.module.css"
import { useState } from 'react'
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Route, useNavigate } from "react-router-dom";
import AdminPage from '../../pages/AdminPage';
import PropTypes from 'prop-types';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  
  {
    path: "/admin",
    element: <AdminPage/>,
  },
]);
async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
function LoginForm({ setToken }) {
  // const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  // const [opacity, setOpacity] = useState(0);
    // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const users = [{ username: "Jane", password: "testpassword" }];

  
    let clsname = "loginForm "
    if (props.isHide) {
      clsname +=' isActive';
    }
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
        localStorage.setItem("username", account.username)
        alert("authenticated")
        // go to admin page
      //   localStorage.getItem("authenticated") && (
      //   // navigate("/admin")
      //   console.log("navigated")
      // )
    }

    
  return (
    <>
      

        <form className={clsname} onSubmit={handleSubmit} >
            <h2>Login</h2>
            
            {/* <label htmlFor="username">Username</label> */}
            <input type="text" name='username' className={styles.username} placeholder='Username' onChange={(e) => setusername(e.target.value)} />
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" name='password' className={styles.password} placeholder='Password' onChange={(e) => setpassword(e.target.value)}/>
            <input type="submit" value="Login" />
            {
            //   if(localStorage.getItem("authenticated")==true){

            //   <Navigate to="/dashboard" replace={true} />
            // }
            }
           
        </form>
    </>
  )
}
export default LoginForm;
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}