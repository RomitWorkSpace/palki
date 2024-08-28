import React from 'react'
import BookingSection from '../HomeComponents/BookingSection'
import GallerySection from '../HomeComponents/GallerySection'
import mbanner from 'imgPath/banners/Share-banner-mb.jpg'
import dbanner from 'imgPath/banners/Share-banner.jpg'
import PageBanner from '../../common/PageBanner'
import Breadcrumb from '../../common/Breadcrumb'
import OnPage from '../../common/OnPage'

function Booking() {
    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>

        <OnPage meta_title="Share Query | Details are Safe With Us! - Palki Food Services"
        keywords = "Enquiry. Booking with us, Contact with us for more info"
        meta_desc = "Share your query with Palki Foods—rest assured, your details are safe with us. We prioritize your privacy and ensure secure handling of your information."
        />
        <PageBanner props = {Banners} />
        <Breadcrumb page='Share Query' />
        <BookingSection />
        <GallerySection />
        </>
    )
}

export default Booking
