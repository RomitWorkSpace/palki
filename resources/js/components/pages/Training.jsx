import React from 'react'

import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/Blog-banner-mb.jpg'
import dbanner from 'imgPath/banners/training-banner.jpg'
import Breadcrumb from '../../common/Breadcrumb'
import Slogan from '../TrainingComponents/Slogan'
import AllTraining from '../TrainingComponents/AllTraining'
import TrainingSlider from '../TrainingComponents/TrainingSlider'
import OnPage from '../../common/OnPage'


function Training() {

    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <OnPage meta_title="Training, Learning & Growing - Palki Food Services"
        keywords = "Palki Food Services training, Food service industry training, Palki Foods learning and growth, Professional development in food service, Corporate training Palki Foods, Learning programs Palki Food Services, Learning opportunities Palki Foods"
        meta_desc ="Palki Foods: Expert training in operations and development. Enhance skills and efficiency with our specialized training programs tailored to your needs."
        />
        <PageBanner props = {Banners} />
        <Breadcrumb page='Training, learning & growing' />
        <Slogan />
        <AllTraining />
        <TrainingSlider />
        </>
    )
}

export default Training
