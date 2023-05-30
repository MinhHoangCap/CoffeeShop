import React, { Component } from 'react'
import styles from "../css/AboutUs.module.css"
import AboutUsContent from '../component/AboutUsContent/AboutUsContent'
export default class AboutUs extends Component {
  render() {
    return (
      <div className={styles.AboutUs}>
        <AboutUsContent/>
        <AboutUsContent wrap={true}/>
        <AboutUsContent/>

      </div>
    )
  }
}
