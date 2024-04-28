import React from 'react'
import About1 from 'imgPath/images/about1.jpg'
import About2 from 'imgPath/images/about2.jpg'
import About3 from 'imgPath/images/about3.jpg'
import About4 from 'imgPath/images/about4.jpg'

function AboutCompany() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className='text-center clr-palki bold-7'>
                            Our State of Art Kitchen
                        </h2>
                        <hr className='line' />
                        <div className='text-justify pt-5'>
                            <p>Our state-of-the-art kitchen spans approximately 2500 sq. ft. and is managed by a team of skilled professionals. Every day, our experienced chefs, led by Executive Chef Mr. Sunder Enriched, who brings over 20 years of culinary expertise, prepare delicious meals for up to 15,000 people. </p>
                            <p>Located at Udyog Kendra – I, Ecotech -3, Greater Noida, our facility is open for visits anytime. Experience the excellence of Palki Food Services firsthand and discover how we can elevate your catering experience.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-6 mb-4 company-photo'>
                                <img src={ About1 } alt="palki" width="100%" />
                            </div>
                            <div className='col-6 mb-4 company-photo'>
                                <img src={ About2 } alt="palki" width="100%" />
                            </div>
                            <div className='col-6 mb-4 company-photo'>
                                <img src={ About3 } alt="palki" width="100%" />
                            </div>
                            <div className='col-6 mb-4 company-photo'>
                                <img src={ About4 } alt="palki" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutCompany
