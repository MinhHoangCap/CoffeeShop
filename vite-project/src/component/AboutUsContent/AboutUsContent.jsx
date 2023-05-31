import React, { Component } from 'react'
import styles from "./AboutUsContent.module.css"
import {Container,Row,Col} from 'react-bootstrap'
import {clsx} from 'clsx';
export default class AboutUsContent extends Component {
  render() {
    return (
      
        <div className={clsx(styles.AboutUs__Content,styles.noReverse,{[styles.Reverse]:this.props.wrap})}>
          
                <div className={styles.wrapper}>
                  <h1 className={styles.AboutUs__heading}>About Us</h1>
                  <div className={styles.AboutUs__body}>
                  Our main goal since we began has remained basic: acquaint our clients with the domains we specifically purchase our extraordinary tasting coffee from, broil the beans with consideration, and make astounding coffee increasingly available through our bistros and our site. The coffee we cook is the coffee we like to drink, and we trust you like it as well.
                  </div>

                </div>
             
                <div className ={ clsx(styles.AboutUs__Content__img,{[styles.noReverse]:!this.props.wrap},{[styles.Reverse]:this.props.wrap})}>
                  <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg" alt="" />
                </div>
              
          {/* <div className={styles.wrapper}>
            <h1 className={styles.heading}>About Us</h1>
            <div className="body">
            Our main goal since we began has remained basic: acquaint our clients with the domains we specifically purchase our extraordinary tasting coffee from, broil the beans with consideration, and make astounding coffee increasingly available through our bistros and our site. The coffee we cook is the coffee we like to drink, and we trust you like it as well.
            </div>
            <button>Read more</button>

          </div>
          <div className ={ clsx(styles.AboutUs__Content__img,{[styles.wrap]:this.props.wrap})}>
            <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg" alt="" />
          </div> */}
        </div>

     
    )
  }
}
