import React, { Component } from 'react'
import Coffeeimg from '../../assets/img/pngwing.com.png'
import {clsx} from 'clsx';
import "./ProductType.css"
export default class ProductType extends Component {
  render() {
    return (
      
        <div className="product" style={{background: `linear-gradient( to bottom, rgba(255,255,255) 0%,${this.props.bkgrdCl} 100%)`}}>
          <div className="product__img">
            <img src={Coffeeimg} alt="" />
            {/* src={this.props.imgLink} */}
          </div>
          <div className ={ clsx('product__content',{['reverse']:this.props.reverse})}>
              <div className="product__content-wrap">
                <div className="product__heading">Coffee Heading</div>
                <div className ={ clsx('product__description')}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime illo sint at optio. Labore, ut id cumque velit consequatur quasi iure. Voluptates inventore repudiandae sint sit vero distinctio eaque ipsum!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime illo sint at optio. Labore, ut id cumque velit consequatur quasi iure. Voluptates inventore repudiandae sint sit vero distinctio eaque ipsum!
                </div>
                <button className='product__discover-btn'>
                <a className='product__link' href={this.props.link}>
                  Khám Phá Thêm
                  </a>
                </button>
              </div>
          </div>
        </div>
        
      
    )
  }
}
