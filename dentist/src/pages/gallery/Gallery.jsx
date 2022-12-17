import React from 'react'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import roomImg from "../../components/images/g1-room.jpg";
import sterilImg from "../../components/images/g2-steril.jpg";
import office1Img from "../../components/images/g3-office.jpg";
import office2Img from "../../components/images/g4-office.jpg";
import office3Img from "../../components/images/g5-office.jpg";
import outside1Img from "../../components/images/g6-outside.png";
import 'swiper/css'
import 'swiper/css/navigation'
import './gallery.scss'

const Galley = () => {
  return (
    <>
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
                <div>
                  <img src={office3Img} alt="Office Pictures" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <img src={sterilImg } alt="Office Pictures" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={outside1Img} alt="Office Pictures" />
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Galley