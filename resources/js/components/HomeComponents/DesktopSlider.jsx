import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import {FullSlider1} from './AnimatedSlider';
import {FullSlider2} from './AnimatedSlider';
import {FullSlider3} from './AnimatedSlider';
import {FullSlider4} from './AnimatedSlider';

function DesktopSlider() {
    
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
                <FullSlider1 />
            </SwiperSlide>
            <SwiperSlide>
                <FullSlider2 />
            </SwiperSlide>
            <SwiperSlide>
                <FullSlider3 />
            </SwiperSlide>
            <SwiperSlide>
                <FullSlider4 />
            </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default DesktopSlider
