import React from 'react'

import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/Blog-banner-mb.jpg'
import dbanner from 'imgPath/banners/training-banner.jpg'
import Breadcrumb from '../../common/Breadcrumb'
import Slogan from '../TrainingComponents/Slogan'
import AllTraining from '../TrainingComponents/AllTraining'
import TrainingSlider from '../TrainingComponents/TrainingSlider'


function Training() {

    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <PageBanner props = {Banners} />
        <Breadcrumb page='Training, learning & growing' />
        <Slogan />
        <AllTraining />
        <TrainingSlider />
        </>
    )
}

export default Training
