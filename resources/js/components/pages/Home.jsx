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
import OnPage from '../../common/OnPage'

function Home() {
    return (
        <>
        <OnPage meta_title="Premier catering Service Provider for Corporate, Industrial"
        keywords = "Palki Food, Food Service Company, Palki Food Services, Industrial Cafeteria Meals,Corporate Cafeteria Meals, Bulk Bakery Supplies, Corporate Supplies, Catering for Social Ceremonies, Catering for Large Corporate"
        meta_desc = "Palki Food Services: Premier catering for corporate, industrial, and MNCs. Tailored solutions for diverse tastes and seamless dining experiences."
        />
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
