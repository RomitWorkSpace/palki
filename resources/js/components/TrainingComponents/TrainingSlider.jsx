import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Game1 from 'imgPath/Training/Game1.jpg'
import Game2 from 'imgPath/Training/Game2.jpg'
import Game3 from 'imgPath/Training/Game3.jpg'
import Game4 from 'imgPath/Training/Game4.jpg'
import Game5 from 'imgPath/Training/Game5.jpg'
import Game6 from 'imgPath/Training/Game6.jpg'
import Game7 from 'imgPath/Training/Game7.jpg'
import Game8 from 'imgPath/Training/Game8.jpg'
import Game9 from 'imgPath/Training/Game9.jpg'

function TrainingSlider() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5 bg-palki'>
            <div className='container'>
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
        
                            slidesPerView: 3,
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
                            <img className='br-radius-10 box-shadow' src={ Game1 } alt="training" width="100%" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='br-radius-10 box-shadow' src={ Game2 } alt="training" width="100%" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='br-radius-10 box-shadow' src={ Game3 } alt="training" width="100%" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='br-radius-10 box-shadow' src={ Game4 } alt="training" width="100%" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='br-radius-10 box-shadow' src={ Game5 } alt="training" width="100%" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='br-radius-10 box-shadow' src={ Game6 } alt="training" width="100%" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='br-radius-10 box-shadow' src={ Game7 } alt="training" width="100%" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='br-radius-10 box-shadow' src={ Game8 } alt="training" width="100%" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='br-radius-10 box-shadow' src={ Game9 } alt="training" width="100%" />
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>
        </>
    )
}

export default TrainingSlider
