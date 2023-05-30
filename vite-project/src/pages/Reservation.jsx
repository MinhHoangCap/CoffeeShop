import React, { Component } from 'react'

export default class Reservation extends Component {
  render() {
    return (
      <div className='reservation'>
        <div className="heading">Reservation</div>
        <div className="content">#Caffè provides both online and offline table reservations for our customers.</div>
        <form action="" method="post">
          <label htmlFor="name-input">Name</label>
          <input type="text" id='name-input' />
          <label htmlFor="email-input">Email</label>          
          <input type="email" id='email-input' />

          <label htmlFor="date-input">Date</label>
          <input type="date" id='date-input' />
          <label htmlFor="phone-input">Phone</label>
          <input type="tel" id='phone-input' />
          <label htmlFor="people-input">Numper of people</label>
          <input type="number" id='-input' />
          <label htmlFor="time-input">Time</label>
          <input type="date" id='time-input' />
        </form>
      </div>
    )
  }
}
