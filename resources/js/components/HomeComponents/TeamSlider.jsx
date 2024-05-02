import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import TeamCard from './TeamCard';

import AnilShukla from 'imgPath/images/Anil-Shukla.jpg'
import SanjayShukla from 'imgPath/images/Sanjay-Shukla.jpg'
import AbhishekShukla from 'imgPath/images/Abhishek-Shukla.jpg'
import LalitJain from 'imgPath/images/Lalit-Jain.jpeg'
import RPSharma from 'imgPath/images/RP-Sharma.jpeg'
import SunderChauhan from 'imgPath/images/Sunder-Chauhan.jpg'

function TestimonialSection() {
    useEffect(() => {
        AOS.init();
      }, []);

      const Anil = {image: AnilShukla, name: 'Mr. Anil Shukla', designation: 'Director', intro: 'Graduated from Jamia Milia University,had that instinct for entrepreneurship at an early age.Started first business at the age of 22, now carry experience of 25 years in the food business.'}
      const Sanjay = {image: SanjayShukla, name: 'Mr. Snajay Shukla', designation: 'Director', intro: 'Graduated from NIFT Delhi , always has that creative narration in mind. Did HACCP and Food Safety Graduation from London. experience of 25 years in Food Bussiness.'}
      const Abhishek = {image: AbhishekShukla, name: 'Mr. Abhishek Shukla', designation: 'Director', intro: 'Graduated in 2016 from IHM Lucknow taken exposure with Shangri – La and looks business development in company and persuing master’s from SP JIMR in FMB.'}
      const Lalit = {image: LalitJain, name: 'Mr. Lalit Jain', designation: 'Honorable Mentor Advisory Board Member', intro: 'Graduated in 1976 from IHM-Delhi, Pusa Road. Worked for numerous five-star hotels in India and abroad having experience as General Manager of Asian Games Village and established WIMPPY’S in India, now working as a consultant and helping the brands to establish. From establishing kitchen to providing us the best talent during the initial days to as a member of the Advisory Board he has played the role of a troubleshooter.'}
      const RP = {image: RPSharma, name: 'Mr. R.P Sharma', designation: 'Honorable Mentor Advisory Board Member', intro: 'From graduating in 1981 from IHM Lucknow to taking the position of Pastry Chef Oberoi’s Group and then Corporate Chef with AB Mauri, Tropolite Goodrich, he participated not only as a career choice but for the love of bakery. Now, an active member of ICF and jury at the Skill Council of India Mr. Sharma is a renowned name in the Indian Bakery Industry.'}
      const Sunder = {image: SunderChauhan, name: 'Mr. Sunder Chauhan', designation: 'Executive Chef Founding Member', intro: 'Graduated in 1998 and worked with esteemed names of the industry like Shiva Continental, Connaught Castle, and Ashoka Hotel. He is one of the pillars of Palki Food Services and engaged with the growth since establishment till today, with all his spirit and never die attitude.You may find him playing cricket or listening to Pahadi music when not in Kitchen.'}

    return (
        <>
        <div className="container pt-5" data-aos="fade-up">
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
                    <TeamCard props = { Anil } />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard props = { Sanjay } />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard props = { Abhishek } />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard props = { Lalit } />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard props = {RP} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard props = {Sunder} />
                </SwiperSlide>
            </Swiper>
            </div>
        </>
    )
}

export default TestimonialSection
