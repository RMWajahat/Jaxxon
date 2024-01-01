import { NavLink } from "react-router-dom";

import Hero1 from "../assets/Hero1.avif";
import Hero2 from "../assets/hero2.avif";
import Hero3 from "../assets/hero3.avif";


import { Pagination, Autoplay, FreeMode } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Header = () => {
    return (
        <div className="sliderheader">
            <Swiper
                modules={[Pagination, FreeMode, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="swiper"
            >

                <SwiperSlide><img src={Hero1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Hero2} alt="" /> </SwiperSlide>
                <SwiperSlide><img src={Hero3} alt="" /> </SwiperSlide>
            </Swiper>
            <h1 className="headertag" ><span>Iced Out Cuban</span><br />TURN HEADS</h1>
            <NavLink to={"/products"}  className={"shopnow"}>Shop Now</NavLink>
        </div>
    )
}

export default Header;
