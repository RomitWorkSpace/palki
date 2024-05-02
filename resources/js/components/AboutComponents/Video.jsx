import React from 'react'
import { Link } from 'react-router-dom'
import DiwaliIcon from 'imgPath/Diwali-Mela.png'
import HoliIcon from 'imgPath/holi.png'
import MusicalIcon from 'imgPath/Musical.png'
import FamilyIcon from 'imgPath/family.png'

function Video() {
    return (
        <>
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='video-wrapper'>
                        <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/banner-bg.jpg" alt="video" width="100%" />
                        <div className='play-btn'>
                            <Link to="/" className='popup-youtube'>
                                <i className='fa fa-play'></i>
                            </Link>
                            <div className='sonar-wave'></div>
                        </div>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='counter-section'>
                        <div className='row'>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={FamilyIcon} alt="counter" width="100%" />
                                    <h4 className=''>12,000+</h4>
                                    <p>Pax Family Day</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={DiwaliIcon} alt="counter" width="100%" />
                                    <h4 className=''>6,000+</h4>
                                    <p>Pax Diwali Mela</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={MusicalIcon} alt="counter" width="100%" />
                                    <h4 className=''>3,000+</h4>
                                    <p>Musical Concert</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={HoliIcon} alt="counter" width="100%" />
                                    <h4 className=''>1,200+</h4>
                                    <p>Holi Party</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Video
