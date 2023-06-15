import { useRef } from 'react';
import React, { Component } from 'react'
import styles from '../css/Contact.module.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x8ob7vg', 'template_9586j1l', form.current, 'QOYMbW81bB7e8QzYG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  
  
    return (
      <div className={styles.contact}>
        <div className={styles.contact__background}>
          <div className={styles.contact__wrapper}>

            <div className={styles.contact__heading}>Contact</div>

            <div className={styles.contact__content}>
              <form action="" method="post"
              ref={form} onSubmit={sendEmail}
              >
                <div className={styles.contact__input}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id='name' name='name'/>
                </div>
                <div className={styles.contact__input}>
                  <label htmlFor="email">Subject</label>
                  <input type="text" id='subject' name='subject'/>
                </div>
                <div className={styles.contact__input}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' name='email'/>
                </div>
                <div className={styles.contact__input}>
                  <label htmlFor="message">Message:</label>
                  {/* <input type="t" id='message' /> */}
                  <textarea name="message" id="message" cols="23" rows="5"></textarea>
                </div>
                <button className={styles.contact__btn} type='submit'>Send</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    )
  }