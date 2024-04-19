import React from 'react'
import HeroSection from '../HomeComponents/HeroSection'
import DishSection from '../HomeComponents/DishSection'
import ServiceSection from '../HomeComponents/ServiceSection'
import ContactSection from '../HomeComponents/ContactSection'
import StorySection from '../HomeComponents/StorySection'
import PopularFood from '../HomeComponents/PopularFood'
import TeamSection from '../HomeComponents/TeamSection'
import BlogSection from '../HomeComponents/BlogSection'

function Home() {
    return (
        <>
        <HeroSection />
        <DishSection />
        <ServiceSection />
        <ContactSection />
        <StorySection />
        <PopularFood />
        <TeamSection />
        <BlogSection />
        </>
    )
}

export default Home
