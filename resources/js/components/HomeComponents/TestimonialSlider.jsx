import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import TestimonialCard from './TestimonialCard';



function TestimonialSlider() {
    return (
        <>
        <Swiper
                slidesPerView={1}
                breakpoints={{
                    360: {

                      slidesPerView: 1,
                    },
                    768: {
    
                      slidesPerView: 2,
                    },
                    1280: {
    
                        slidesPerView: 2,
                      },
                  }}
                spaceBetween={30}
                modules={[Autoplay]}
                loop={true}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
            </Swiper>

        </>
    )
}

export default TestimonialSlider
