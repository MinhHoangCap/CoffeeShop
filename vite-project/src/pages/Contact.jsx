import React, { Component } from 'react'
import styles from '../css/Contact.module.css'
export default class Contact extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.contact__background}>
          <div className={styles.contact__wrapper}>

            <div className={styles.contact__heading}>Contact</div>

            <div className={styles.contact__content}>
              <form action="" method="post">
                <div className={styles.contact__input}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id='name' />
                </div>
                <div className={styles.contact__input}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' />
                </div>
                <div className={styles.contact__input}>
                  <label htmlFor="message">Message:</label>
                  {/* <input type="t" id='message' /> */}
                  <textarea name="message" id="message" cols="23" rows="5"></textarea>
                </div>
                <button className={styles.contact__btn}>Send</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
