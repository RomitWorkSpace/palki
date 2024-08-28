import React from 'react'

import StorySection from '../HomeComponents/StorySection'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/About-banner-mb.jpg'
import dbanner from 'imgPath/banners/About-banner.jpg'
import VisionSection from '../AboutComponents/VisionSection'
import AboutCompany from '../AboutComponents/AboutCompany'
import CertificateSection from '../AboutComponents/CertificateSection'
import Breadcrumb from '../../common/Breadcrumb'
import OnPage from '../../common/OnPage'

function About() {
    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <OnPage meta_title = "About Us| Palki Food Services - Food Service Company"
        keywords = "About Palki Food Services, Palki Food Services company overview, Food service company Noida, Palki Foods mission and values, Who we are Palki Food Services, Palki Foods team and expertise, Why choose Palki Food Services"
        meta_desc = "Palki Food Services, your premier provider of catering solutions for various industries including corporate, industrial, and MNCs."
         />
        <PageBanner props = {Banners}/>
        <Breadcrumb page= 'About' />
        <StorySection />
        <AboutCompany />
        <VisionSection />
        <CertificateSection />
        </>
    )
}

export default About
