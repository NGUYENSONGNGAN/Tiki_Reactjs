
import "../css/grid.css"
import "./slide_home.css";
import "../css/responsive.css"
import "../css/global.css"
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
// Import Swiper React componentsnpm strat

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slide_home = () => {
    return (
        <section className="slide_home">
            <div className="grid wide">
                <div className="row no-gutters">
                    <div className="col l-8 m12 c-12">
                        <div className="swiper mySwiper home-slider container-slide_left">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src="image/banner-left-1.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="image/banner-left-2.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="image/banner-left-3.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="image/booksale.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="image/ip13.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="image/sale-bn.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="image/sale-motsach.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="image/banner-left-1.png" alt="" /></SwiperSlide>
                            </Swiper>
                           
                        </div>
                    </div>
                    <div className="container-banner_right col l-4 m-0 c-0">
                        <div className="banner-item">
                            <img src="image/logo_sale_right.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Slide_home;
