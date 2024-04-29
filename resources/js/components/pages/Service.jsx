import React from 'react'
import EventImg from 'imgPath/event.jpeg'
import { Link } from 'react-router-dom'
import GallerySection from '../HomeComponents/GallerySection'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/Services-banner-mb.jpg'
import dbanner from 'imgPath/banners/Services-banner.jpg'

function Service() {

    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <PageBanner props = {Banners}/>
        <div className='container-fluid pt-5 pb-5'>
            <h4 className='text-center clr-palki bold-7'>Our Services</h4>
            <div className='container pt-5'>
                <div className='row align-items-center'>
                    <div className='col-md-5 mb-4'>
                        <img src={ EventImg } alt="event" width="100%" style={{borderRadius:'10px'}} />
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-6 text-center'>
                        <h4 className='event-text'>SPECIAL EVENTS</h4>
                        <hr className='line' />
                        <div className='event-info mt-4'>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>
                        </div>
                        <Link to="/service-detail">
                        <button className='btn-palki'>Explore Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='container pt-5'>
                <div className='row align-items-center column-reverse'>
                    <div className='col-md-6 text-center mb-4'>
                        <h4 className='event-text'>CORPORATE EVENTS</h4>
                        <hr className='line' />
                        <div className='event-info mt-4'>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>
                        </div>
                        <Link to="/service-detail">
                        <button className='btn-palki'>Explore Now</button>
                        </Link>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5 mb-4'>
                        <img src={ EventImg } alt="event" width="100%" style={{borderRadius:'10px'}} />
                    </div>
                </div>
            </div>
        </div>
        <GallerySection />
        </>
    )
}

export default Service
