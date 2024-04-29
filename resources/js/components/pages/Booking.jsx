import React from 'react'
import BookingSection from '../HomeComponents/BookingSection'
import GallerySection from '../HomeComponents/GallerySection'
import mbanner from 'imgPath/banners/Share-banner-mb.jpg'
import dbanner from 'imgPath/banners/Share-banner.jpg'
import PageBanner from '../../common/PageBanner'

function Booking() {
    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <PageBanner props = {Banners} />
        <BookingSection />
        <GallerySection />
        </>
    )
}

export default Booking
