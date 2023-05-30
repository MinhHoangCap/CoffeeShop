import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="heading">Contact</div>

        <div className="content">
          <form action="" method="post">
            <div className="input">
              <label htmlFor="name">Name</label>
              <input type="text" id='name' />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' />
            </div>
            <div className="input">
              <label htmlFor="message">Message:</label>
              <input type="text" id='message' />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
