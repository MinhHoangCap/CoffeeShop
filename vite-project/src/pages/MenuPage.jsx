import React, { Component } from 'react'
import ProductType from '../component/ProductType/ProductType'
import styles from "../css/Product.module.css"
import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export default class MenuPage extends Component {
  constructor(props){
    super(props);

    this.state ={
      items: [],
      DataisLoaded: false
    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/product")
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
    return (
      (!DataisLoaded) ?   (
        <>
          <FontAwesomeIcon icon={faArrowsRotate} spin />
          <h1>Waiting</h1>
        </>
          )
  
     :(
      <div className='menu'>
        <h2 className='menu__heading'>Coffee</h2>
        <ProductType type="coffee"/>
        <h2 className='menu__heading'>Tea</h2>
        <ProductType type="tea"/>


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
      </div>
     )
    )
  }
  
}
