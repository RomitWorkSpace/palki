import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import { ShortSlider1 } from './AnimatedSlider';
import { ShortSlider2 } from './AnimatedSlider';
import { ShortSlider3 } from './AnimatedSlider';
import { ShortSlider4 } from './AnimatedSlider';

function MobileSlider() {
    
    return (
        <>
        <div className='container-fluid p-0 mt-100'>
        <Swiper
                slidesPerView={1}
                effect={'fade'}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">

            <SwiperSlide>
                <ShortSlider1 />
            </SwiperSlide>
            <SwiperSlide>
                <ShortSlider2 />
            </SwiperSlide>
            <SwiperSlide>
                <ShortSlider3 />
            </SwiperSlide>
            <SwiperSlide>
                <ShortSlider4 />
            </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default MobileSlider
