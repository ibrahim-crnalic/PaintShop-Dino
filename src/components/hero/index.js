import React from "react";
import Hero1 from "../../assets/images/hero-first.png";
import Hero2 from "../../assets/images/hero-second.jpg";
import Hero3 from "../../assets/images/hero-third.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from "../navbar";
SwiperCore.use([Autoplay]);

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <Navbar />
      <div className="hero-listing">
        <div className="inner-swiper">
          <Swiper
            modules={[Autoplay]}
            initialSlide={0}
            slidesPerView={1}
            navigation={false}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
          >
            {imgs.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={item} alt="hero-image" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="inner">
          <div className="container">
            <h2>Paint shop Dino</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
const imgs = [Hero1, Hero2, Hero3];
