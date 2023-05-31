import React, { Component } from 'react'
import Coffeeimg from '../../assets/img/pngwing.com.png'
import {clsx} from 'clsx';
import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from "./ProductType.module.css"
export default class ProductType extends Component {
  constructor(props){
    super(props);

    this.state ={
      items: [],
      DataisLoaded: false
    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/product/"+this.props.type)
      .then((res) => res.json())
      .then((json)=>{
        this.setState({
          items: json,
          DataisLoaded: true
        })
      })
  }
  render() {
    const {DataisLoaded, items} = this.state;
    return(
    (!DataisLoaded) ?   (
      <>
        <FontAwesomeIcon icon={faArrowsRotate} spin />
        <h1>Waiting</h1>
      </>
        )

   : (
      <div className={`${styles.grid_container}`}>
        {items.map((item) => (
          <div className={`${styles.product__item} `}>
            <img src={item.image_link} className={`${styles.product__img}`} alt="Image Link" />
            <p className={`${styles.product__name} `}>
                {item.product_name}

            </p>
            <p className="product__item--price">
                Price: {item.price}

            </p>
          </div>
          
        ))}


      </div>
    )
  )
  }
}
