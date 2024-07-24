import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import About1 from 'imgPath/images/about1.jpg'
import About2 from 'imgPath/images/about2.jpg'
import About3 from 'imgPath/images/about3.jpg'
import About4 from 'imgPath/images/about4.jpg'
import Vision from 'imgPath/images/vision.jpg'
import Mission from 'imgPath/images/mission.jpg'
import Goal from 'imgPath/images/goal.jpg'

function AboutCompany() {

    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
        <div className='container-fluid pt-5 pb-5' style={{overflowX:'hidden'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6' data-aos="fade-right">
                        <h2 className='text-center clr-palki bold-7 font-charm'>
                            Our State of Art Kitchen
                        </h2>
                        <hr className='line' />
                        <div className='text-justify pt-5'>
                            <p>Our state-of-the-art kitchen spans approximately 2500 sq. ft. and is managed by a team of skilled professionals. Every day, our experienced chefs, led by Executive Chef Mr. Sunder Enriched, who brings over 20 years of culinary expertise, prepare delicious meals for up to 15,000 people. </p>
                            <p>Located at Udyog Kendra – I, Ecotech -3, Greater Noida, our facility is open for visits anytime. Experience the excellence of Palki Food Services firsthand and discover how we can elevate your catering experience.</p>
                        </div>
                    </div>
                    <div className='col-md-6' data-aos="fade-left">
                    <Swiper
                slidesPerView={1}
                breakpoints={{
                    360: {

                      slidesPerView: 1,
                    },
                    768: {
    
                      slidesPerView: 1,
                    },
                    1280: {
    
                        slidesPerView: 1,
                      },
                  }}
                modules={[Autoplay]}
                loop={true}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">
                <SwiperSlide>
                    <div className='brd-radius-10'>
                        <img src={ About1 } alt="palki" width="100%" className='bdr-radius-10' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bdr-radius-10'>
                        <img src={ About2 } alt="palki" width="100%" className='bdr-radius-10' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bdr-radius-10'>
                        <img src={ About3 } alt="palki" width="100%" className='bdr-radius-10' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bdr-radius-10'>
                        <img src={ About4 } alt="palki" width="100%" className='bdr-radius-10' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bdr-radius-10'>
                        <img src={ Vision } alt="palki" width="100%" className='bdr-radius-10' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bdr-radius-10'>
                        <img src={ Mission } alt="palki" width="100%" className='bdr-radius-10' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bdr-radius-10'>
                        <img src={ Goal } alt="palki" width="100%" className='bdr-radius-10' />
                    </div>
                </SwiperSlide>
            </Swiper>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutCompany
