import React, { Component } from 'react'
import styles from "./HomePageBanner.module.css"
export default class HomePageBanner extends Component {
  render() {    
    return (
      <div className={styles.HomePageBanner}>
        <img src={this.props.imgLink} alt="" />
      </div>
    )   
  }
}
