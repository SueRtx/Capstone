import React from 'react'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import outside1Img from "../../assets/images/1outside.png";
// import outside2Img from "../../assets/images/2outside.jpg";
// import outside3Img from "../../assets/images/3outside.jpg";
import roomImg from "../../assets/images/4room.jpg";
import sterilImg from "../../assets/images/5steril.jpg";
import office1Img from "../../assets/images/6office.jpg";
import office2Img from "../../assets/images/7office.jpg";
// import office3Img from "../../assets/images/8office.jpg";

import 'swiper/css'
import 'swiper/css/navigation'
import './gallery.scss'

const Galley = () => {
  return (
  <section className="gallery-section">
    <div className="gallery-section-wrapper">
      <h1>Gallery</h1>
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
            <img src={roomImg} alt="Office Pictures" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={office1Img} alt="Office Pictures" />
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img src={office2Img} alt="Office Pictures" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={sterilImg } alt="Office Pictures" />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </section> 
  )
}

export default Galley