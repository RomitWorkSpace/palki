import React from 'react'
import Vision from 'imgPath/Vission.png'
import Mission from 'imgPath/Mission.png'
import Goal from 'imgPath/Goal.png'

function VisionSection() {
    return (
        <>
        <div className='container-fluid pt-5 wrapper-bg'>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-4 mb-100'>
                        <div className='vision-bg box-shadow'>
                            <div className='text-center vision-icon box-shadow'>
                                <img src={ Vision } alt="vision" width="80" />
                            </div>
                            <div className='text-center vision-padding bg-white height-180'>
                                <h4 className='bold-7'>Our Vision</h4>
                                <p>We aim to reach the global platform of the food & beverage industry to make a mark through our valuable products & services having passion with honest practices.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-100'>
                        <div className='vision-bg box-shadow'>
                            <div className='text-center vision-icon box-shadow'>
                                <img src={ Mission } alt="vision" width="80" />
                            </div>
                            <div className='text-center vision-padding bg-white height-180 box-shadow'>
                                <h4 className='bold-7'>Our Mission</h4>
                                <p>Eliminate any Possible chance of error in achieving the vision by involving technology, upgradation of staff skillset & the latest equipment to achieve that broader aspect.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-100'>
                        <div className='vision-bg box-shadow'>
                            <div className='text-center vision-icon box-shadow'>
                                <img src={ Goal } alt="vision" width="80" />
                            </div>
                            <div className='text-center vision-padding bg-white height-180 box-shadow'>
                                <h4 className='bold-7'>Our Goal</h4>
                                <p>Run daily  operations on ZETOS-Zero Error Time Oriented System</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default VisionSection
