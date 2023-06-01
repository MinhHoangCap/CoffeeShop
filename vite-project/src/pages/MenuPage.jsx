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
    fetch("http://localhost:3000/product/type")
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
        {
          items.map((item) =>(
            <div>
              <h2 className={styles.product__type__heading}>{item.name}</h2>
              <ProductType type={item.name}/>

            </div>
          ))
        }
       
      </div> 
     )
    )   
  }

  
}
