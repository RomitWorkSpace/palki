import React from 'react'
import HeroSection from '../HomeComponents/HeroSection'
import DishSection from '../HomeComponents/DishSection'
import ServiceSection from '../HomeComponents/ServiceSection'
import BookingSection from '../HomeComponents/BookingSection'
import StorySection from '../HomeComponents/StorySection'
import PopularFood from '../HomeComponents/PopularFood'
import TeamSection from '../HomeComponents/TeamSection'
import BlogSection from '../HomeComponents/BlogSection'
import TestimonialSection from '../HomeComponents/TestimonialSection'

function Home() {
    return (
        <>
        <HeroSection />
        <DishSection />
        <ServiceSection />
        <BookingSection />
        <StorySection />
        <TestimonialSection />
        <TeamSection />
        <BlogSection />
        </>
    )
}

export default Home
