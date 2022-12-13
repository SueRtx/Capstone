import React from 'react'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import outside1Img from "../../assets/images/1outside.jpg";
import outside2Img from "../../assets/images/2outside.jpg";
import outside3Img from "../../assets/images/3outside.jpg";
import roomImg from "../../assets/images/4room.jpg";
import sterilImg from "../../assets/images/5steril.jpg";
import office1Img from "../../assets/images/6office.jpg";
import office2Img from "../../assets/images/7office.jpg";
import office3Img from "../../assets/images/8office.jpg";

const Galley = () => {
  return (
  <section className="galley-section">
    <div className="galley-section-wrapper">
      <div className="officeImag-section">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay
        >

          <SwiperSlide>
            <img src={outside1Img} alt="Office Pictures" />
            
          </SwiperSlide>
          <SwiperSlide>
            <img src={outside2Img} alt="Office Pictures" />
            
          </SwiperSlide>
          <SwiperSlide>
            <img src={outside3Img} alt="Office Pictures" />
            
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={roomImg} alt="Office Pictures" />
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sterilImg } alt="Office Pictures" />
            sterilImg
          </SwiperSlide>
        </Swiper>
        </div>
        </div>
    </section> 
  )
}

export default Galley