import React from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

import DiwaliIcon from 'imgPath/Diwali-Mela.png'
import HoliIcon from 'imgPath/holi.png'
import MusicalIcon from 'imgPath/Musical.png'
import FamilyIcon from 'imgPath/family.png'

function Video() {
    return (
        <><hr/>
        <div className='container pt-5 pb-5'>
            <div className='row align-items-center'>
                <div className='col-md-5'>
                    <div className='video-wrapper'>
                        {/* <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/banner-bg.jpg" alt="video" width="100%" />
                        <div className='play-btn'>
                            <Link to="/" className='popup-youtube'>
                                <i className='fa fa-play'></i>
                            </Link>
                            <div className='sonar-wave'></div>
                        </div> */}
                        <video class="elementor-video" src="/public/Palki-Food-Full-480-1.mp4" autoplay="" loop="" muted="muted" playsinline="" controlslist="nodownload" style={{width:'100%'}}></video>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='counter-section'>
                        <div className='row'>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={FamilyIcon} alt="counter" width="100%" />
                                    <h4 className='clr-palki mt-2'>
                                        <CountUp start={0} end={12000} duration={4} enableScrollSpy={true} scrollSpyOnce={ true } />+
                                    </h4>
                                    <p>Pax Family Day</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={DiwaliIcon} alt="counter" width="100%" />
                                    <h4 className='clr-palki mt-2'>
                                        <CountUp start={0} end={16000} duration={4} enableScrollSpy={true} scrollSpyOnce={ true } />+
                                    </h4>
                                    <p>Pax Diwali Mela</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={MusicalIcon} alt="counter" width="100%" />
                                    <h4 className='clr-palki mt-2'>
                                        <CountUp start={0} end={3000} duration={4} enableScrollSpy={true} scrollSpyOnce={ true } />+
                                    </h4>
                                    <p>Musical Concert</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-4'>
                                <div className='counter-inner'>
                                    <img src={HoliIcon} alt="counter" width="100%" />
                                    <h4 className='clr-palki mt-2'>
                                        <CountUp start={0} end={1200} duration={4} enableScrollSpy={true} scrollSpyOnce={ true } />+
                                    </h4>
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
