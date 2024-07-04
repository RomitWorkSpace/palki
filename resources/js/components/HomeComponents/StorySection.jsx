import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import ExperienceIcon from 'imgPath/1.png'
import DealIcon from 'imgPath/Delicious-Deals.png'
import ServiceIcon from 'imgPath/24x7.png'
import PartnerIcon from 'imgPath/3.png'

function StorySection() {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
        <div className='container-fluid pt-5 pb-5'>
            <div className='container' data-aos="fade-up">
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/story.png" alt="food" width="100%" />
                    </div>
                    <div className='col-md-6'>
                        <h4 className='clr-palki bold-7 dancing'>Our Story</h4>
                        <h2 className='bold-9'>Served more than 100 + clients</h2>
                        <div className='content-area text-justify p-2'>
                            <p>Welcome to Palki Food Services, your premier provider of catering solutions for various industries including corporate, industrial, and MNCs. With a track record of innovation and problem-solving, we pride ourselves on delivering top-notch services tailored to our clients' needs across different sectors and regions.</p>

                            <div className="story-list-bg row align-items-center" data-aos="fade-right">
                                <img src={ ExperienceIcon } alt="food" />
                                <div className='story-list'>20+ years experience in food industry</div>
                            </div>
                            <div className="story-list-bg row align-items-center" data-aos="fade-right">
                                <img src={ ServiceIcon } alt="food" />
                                <div className='story-list'>24/7 Client Support</div>
                            </div>    
                            <div className="story-list-bg row align-items-center" data-aos="fade-right">
                                <img src={ PartnerIcon } alt="food" />
                                <div className='story-list'>100+ registered business partners for best sourced ingredients</div>    
                            </div>    
                            <div className="story-list-bg row align-items-center" data-aos="fade-right">
                                <img src={ DealIcon } alt="food" />
                                <div className='story-list'>25000 sqft. base kitchen</div>    
                            </div>  
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default StorySection
