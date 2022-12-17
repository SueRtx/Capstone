import React from 'react'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import outside1Img from "../../components/images/1outside.png";
import roomImg from "../../components/images/4room.jpg";
import sterilImg from "../../components/images/5steril.jpg";
import office1Img from "../../components/images/6office.jpg";
import office2Img from "../../components/images/7office.jpg";
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
    </>
  )
}

export default Galley