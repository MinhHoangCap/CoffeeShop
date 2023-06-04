import React, { Component } from 'react'
import {Container,Row,Col} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from '@fortawesome/free-regular-svg-icons'
import "./NewsIntro.css";
import styles from "../../css/HomePage.module.css";
import clsx from 'clsx';
export default class NewsIntro extends Component {
  render() {
    return (
      <div className="newElement">

          <Container>
            <Row>
              <Col md={6}>
                <div className={clsx("newsImage")}>
                  <img src="https://media.istockphoto.com/id/1264074047/vi/vec-to/n%E1%BB%81n-t%E1%BA%A3ng-tin-t%E1%BB%A9c-m%E1%BB%9Bi-nh%E1%BA%A5t.jpg?s=1024x1024&w=is&k=20&c=wPwPBnUKbKJY8QorKts2FbT0L4zO2vJIpBroBeJNGRQ=" alt="" />
                </div>
              </Col>
              <Col md={6}>
                <div className={clsx("newsContent")}>
                  <div className={clsx("newsHeading")}>News Heading</div>
                  <div className={clsx("newsDate")}> <FontAwesomeIcon icon={faCalendar}/> 18/05/2023</div>
                </div>
                
              </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
