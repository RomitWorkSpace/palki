import React from 'react'

import StorySection from '../HomeComponents/StorySection'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/About-banner-mb.jpg'
import dbanner from 'imgPath/banners/About-banner.jpg'
import VisionSection from '../AboutComponents/VisionSection'
import AboutCompany from '../AboutComponents/AboutCompany'
import CertificateSection from '../AboutComponents/CertificateSection'
import Breadcrumb from '../../common/Breadcrumb'

function About() {
    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
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
