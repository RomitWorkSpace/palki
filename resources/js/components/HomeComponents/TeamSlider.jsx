import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import TeamCard from './TeamCard';


function TestimonialSection() {
    return (
        <>
        <div className="container pt-5">
        <Swiper
                slidesPerView={1}
                breakpoints={{
                    360: {

                      slidesPerView: 1,
                    },
                    768: {
    
                      slidesPerView: 3,
                    },
                    1280: {
    
                        slidesPerView: 4,
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
                    <TeamCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard />
                </SwiperSlide>
            </Swiper>
            </div>
        </>
    )
}

export default TestimonialSection
