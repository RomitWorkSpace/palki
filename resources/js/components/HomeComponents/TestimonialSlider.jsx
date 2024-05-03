import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import TestimonialCard from './TestimonialCard';



function TestimonialSlider() {

    const Client1 = {name: "Mr. Anil Sareen", cname: "EXL Services", quote: "Palki Food has been always very supportive, very positive people to work with. I have seen them growing faster than anyone in the food business."}
    const Client2 = {name: "Mr. Shishir Shahapure", cname: "Samsung Electronics", quote: "we have very good experience with the vendor on time delivery and verity is provided."}
    const Client3 = {name: "Parveen Deshwal", cname: "Capgemini ", quote: "Good quality Food and hygienically maintain and supportive staff."}
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
                    <TestimonialCard props = { Client1 }/>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard props = { Client2 } />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard props = { Client3 } />
                </SwiperSlide>
            </Swiper>

        </>
    )
}

export default TestimonialSlider
