import React from 'react'
import { Link } from 'react-router-dom'
import CounterImg from 'imgPath/c1.svg'

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
                                    <img src={CounterImg} alt="counter" width="100%" />
                                    <h4 className=''>786</h4>
                                    <p>Happy Customer</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={CounterImg} alt="counter" width="100%" />
                                    <h4 className=''>109</h4>
                                    <p>Expert Chefs</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={CounterImg} alt="counter" width="100%" />
                                    <h4 className=''>23</h4>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={CounterImg} alt="counter" width="100%" />
                                    <h4 className=''>786</h4>
                                    <p>Happy Customer</p>
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
