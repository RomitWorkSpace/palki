import React from 'react'
import DishSection from '../HomeComponents/DishSection'
import ServiceSection from '../HomeComponents/ServiceSection'
import BookingSection from '../HomeComponents/BookingSection'
import StorySection from '../HomeComponents/StorySection'
import PopularFood from '../HomeComponents/PopularFood'
import TeamSection from '../HomeComponents/TeamSection'
import BlogSection from '../HomeComponents/BlogSection'
import TestimonialSection from '../HomeComponents/TestimonialSection'
import ClientSection from '../HomeComponents/ClientSection'
import MainSlider from '../../common/MainSlider'
import Video from '../AboutComponents/Video'

function Home() {
    return (
        <>
        <MainSlider />
        <StorySection />
        <Video />
        <ServiceSection />
        <BookingSection />
        <TestimonialSection />
        <ClientSection />
        <TeamSection />
        <BlogSection />
        </>
    )
}

export default Home
