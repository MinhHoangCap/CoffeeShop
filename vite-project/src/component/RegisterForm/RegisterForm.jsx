import React, { Component } from 'react'
import styles from "./RegisterForm.module.css"
export default class RegisterForm extends Component {
  render() {
    return (
        <form className='registerForm'>
            <h2>Register</h2>
            
            {/* <label htmlFor="email">Email</label> */}
            <input type="text" name='username' className={styles.username} placeholder='Type Username' />
            {/* <label htmlFor="password">Password</label> */}
            <input type='password' name='password' className={styles.password} placeholder='Type password'/>
            {/* <label htmlFor="repassword">Password</label> */}
            <input type='password' name='repassword' className={styles.repassword} placeholder='Retype password'/>
            <button>Register</button>

            
        </form>
    )
  }
}
