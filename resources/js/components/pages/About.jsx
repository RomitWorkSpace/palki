import React from 'react'

import StorySection from '../HomeComponents/StorySection'
import Video from '../AboutComponents/Video'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/About-banner-mb.jpg'
import dbanner from 'imgPath/banners/About-banner.jpg'
import VisionSection from '../AboutComponents/VisionSection'
import AboutCompany from '../AboutComponents/AboutCompany'

function About() {
    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <PageBanner props = {Banners}/>
        <StorySection />
        <AboutCompany />
        <VisionSection />
        <Video />
        </>
    )
}

export default About
