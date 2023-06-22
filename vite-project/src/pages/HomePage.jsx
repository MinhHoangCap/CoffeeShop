import React, { Component } from 'react'
import "../css/HomePage.css";
import styles from "../css/HomePage.module.css";
import { Container,Row,Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import ProductType from '../component/ProductType/ProductType';
import NewsIntro from '../component/News/NewsIntro';
import AdvertisementIntro from '../component/Advertisement/AdvertisementIntro';
import HomePageBanner from '../component/Banner/HomePageBanner';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className={styles.banner}>
        <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 8500
                }}
                speed={1500}
              >
                <SwiperSlide>
                  <HomePageBanner imgLink="https://cong-news.appwifi.com/wp-content/uploads/2021/07/C-slide.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <HomePageBanner imgLink="https://cong-news.appwifi.com/wp-content/uploads/2021/07/C-slide.jpg"/>
                </SwiperSlide><SwiperSlide>
                  <HomePageBanner imgLink="https://cong-news.appwifi.com/wp-content/uploads/2021/07/C-slide.jpg"/>
                </SwiperSlide><SwiperSlide>
                  <HomePageBanner imgLink="https://cong-news.appwifi.com/wp-content/uploads/2021/07/C-slide.jpg"/>
                </SwiperSlide>
                
                
              </Swiper>
        </div>
        {/* <div className="products">
          <h1 className='products__heading'>Our product</h1>
          
          <ProductType 
            link={"#"} 
            bkgrdCl={"#DCB794"}
            imgLink={"#"}
          />
          <ProductType 
            link={"#"} 
            bkgrdCl={"#e7d400"}
            reverse={true}
          />
          <ProductType 
            link={"#"} 
            bkgrdCl={"#DCB794"}
          />
        </div> */}
        <div className={styles.advertise_news}>
          <Container>
            <Row >
              <Col md={6}>
                <div className={styles.advertise}>
          <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 2500
                }}
                speed={3000}
              >
                <SwiperSlide>
                  <AdvertisementIntro/>
                </SwiperSlide>
                <SwiperSlide>
                  <AdvertisementIntro/>
                </SwiperSlide><SwiperSlide>
                  <AdvertisementIntro/>
                </SwiperSlide><SwiperSlide>
                  <AdvertisementIntro/>
                </SwiperSlide>
                
                
              </Swiper>
          </div>
              </Col>
               <Col md={6}>
                <div className={styles.newsContent}>
            <div className={styles.heading}>
              Tin tức
            </div>
            <div className={styles.newList}>
              {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam inventore consectetur itaque ducimus voluptatum ipsa, totam amet eveniet fuga voluptatibus harum optio, natus facere assumenda quidem aspernatur enim id dolores. */}
              <div className="news">
               <NewsIntro/>
               <NewsIntro/>
               <NewsIntro/>

              </div>
            </div>
          </div>
              </Col>
            </Row>
          </Container>
          
          
        </div>
      </div>
    )
  }
}
