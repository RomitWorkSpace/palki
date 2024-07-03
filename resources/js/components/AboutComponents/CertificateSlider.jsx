import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Cert1 from 'imgPath/cert1.jpg'
import Cert2 from 'imgPath/cert2.jpg'
import Cert3 from 'imgPath/cert3.jpg'
import Cert4 from 'imgPath/cert4.jpg'
import Cert5 from 'imgPath/cert5.jpg'
import Cert6 from 'imgPath/cert6.jpg'

function CertificateSlider() {

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
    
                        slidesPerView: 3,
                      },
                  }}
                spaceBetween={150}
                modules={[Autoplay]}
                loop={true}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">
                <SwiperSlide>
                    <div className="box-shadow text-center">
                    <img src={ Cert1 } alt="certificate" width="90%" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="box-shadow text-center">
                <img src={ Cert2 } alt="certificate" width="90%" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="box-shadow text-center">
                <img src={ Cert3 } alt="certificate" width="90%" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="box-shadow text-center">
                <img src={ Cert4 } alt="certificate" width="90%" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="box-shadow text-center">
                <img src={ Cert5 } alt="certificate" width="90%" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="box-shadow text-center">
                <img src={ Cert6 } alt="certificate" width="90%" />
                </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}

export default CertificateSlider
