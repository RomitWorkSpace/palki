import React from 'react'
import Button from '../Button'

function HeroSection() {
    
    return (
        <>
        <div className='container-fluid pt-5 pb-5 wrapper-bg'>
            <div className='container pt-5'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <div className='banner-text-area'>
                            <h4 className='span-text'><span className='Nunito'>Planning Fabulous</span></h4>
                            <h1 className='banner-title mt-4'>Book Us for your Dream Event</h1>
                            <p className='text-justify'>Find out professional caterers in your city for your Dream Events, long established fact a reader will be distracted the readable.</p>
                            <div className='row mt-4'>
                                <div className='col-md-6 mb-3'>
                                    <Button name = 'Book Know' bg = '#cd3131'/>
                                </div>
                                <div className='col-md-6'>
                                    <Button name = 'Know More' bg = '#000'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/story.png" alt="food" width="100%" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection
