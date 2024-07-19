import React, { useEffect } from 'react'

import FastfoodIcon from '@mui/icons-material/Fastfood';

import NewSlider1 from 'imgPath/sliders/new-dk-slider1.jpg'
import NewSlider2 from 'imgPath/sliders/new-dk-slider2.jpg'
import NewSlider3 from 'imgPath/sliders/new-dk-slider3.jpg'
import NewSlider4 from 'imgPath/sliders/new-dk-slider4.jpg'

import MbSlider1 from 'imgPath/sliders/new-mb-slider1.jpg'
import MbSlider2 from 'imgPath/sliders/new-mb-slider2.jpg'
import MbSlider3 from 'imgPath/sliders/new-mb-slider3.jpg'
import MbSlider4 from 'imgPath/sliders/new-mb-slider4.jpg'
import { Link } from 'react-router-dom';

export function FullSlider2() {

    return (
        <>
        <div className='container-fluid p-0 slider-wrap'>
            <div className='scale-up-center'>
                <img src={ NewSlider2 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap'>
                <div className='row align-items-center mt-5'>
                    <div className='col-1'></div>
                    <div className='col-7'>
                        <div className='tracking-in-expand-fwd'>
                            <h1 className='bold-9 clr-blue font-charm text-shadow'>Solutions For</h1>
                            <h1 className='bold-9 clr-blue font-charm text-shadow'>Cafe</h1>
                            <h1 className='bold-9 clr-blue font-charm text-shadow'>Restaurants</h1>
                            <h1 className='bold-9 clr-blue font-charm text-shadow'>Caters</h1>
                            <h3 className='bold-9 clr-orange font-charm sm-text-shadow'>Wholesale Supplies / Contract Manufacturing</h3>
                        </div>
                        <Link to="">
                            <button className='btn-palki slide-in-bottom mt-4'>Book Now</button>
                        </Link>
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
        </div>
        </>
    )
}


export function FullSlider3() {

    return (
        <>
        <div className='container-fluid p-0 slider-wrap'>
            <div className='scale-up-center'>
                <img src={ NewSlider1 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap'>
                <div className='row align-items-center mt-100 pt-5'>
                    <div className='col-1'></div>
                    <div className='col-7'>
                        <div className='tracking-in-expand-fwd'>
                            <h1 className='bold-9 font-charm clr-orange text-shadow'>We Cater Cake For All</h1>
                            <h1 className='bold-9 font-charm clr-blue text-shadow'>Social & Corporate Requirements</h1>
                            <h3 className='bold-9 font-charm clr-orange sm-text-shadow'>Evergreen flavours to customized designs</h3>
                        </div>
                        <Link to="/share-query">
                            <button className='btn-palki slide-in-bottom mt-4'>Book Now</button>
                        </Link>
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
        </div>
        </>
    )
}


export function FullSlider4() {

    return (
        <>
        <div className='container-fluid p-0 slider-wrap'>
            <div className='scale-up-center'>
                <img src={ NewSlider3 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap pt-5'>
                <div className='row mt-5'>
                    <div className='col-1'></div>
                    <div className='col-11'>
                        <div className='tracking-in-expand-fwd'>
                            <h1 className='clr-blue bold-9 font-charm text-shadow'>We are</h1>
                            <h1 className="clr-blue bold-9 font-charm text-shadow">Specialist in</h1>
                            <h1 className='clr-orange bold-9 font-charm text-shadow'>Social Event Caterings</h1>
                        </div>
                
                        <Link to="/share-query">
                            <button className='btn-palki slide-in-fwd-top mt-4'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export function FullSlider1() {

    return (
        <>
        <div className='container-fluid p-0 slider-wrap'>
            <div className='scale-up-center'>
                <img src={ NewSlider4 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap pt-5'>
                <div className='row align-items-center mt-4'>
                    <div className='col-1'></div>
                    <div className='col-7'>
                        <div className='tracking-in-expand-fwd'>
                            <h1 className='bold-9 font-charm clr-blue text-shadow'>Wholesomeness</h1>
                            <h1 className='bold-9 font-charm clr-blue text-shadow'>in food, Warmth in service</h1>
                            <h3 className='bold-9 font-charm clr-orange sm-text-shadow'>Best Combination for Cafeteria Meals</h3>
                        </div>
                        <Link to="/share-query">
                            <button className='btn-palki slide-in-bottom mt-4'>Book Now</button>
                        </Link>
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
        </div>
        </>
    )
}


export function ShortSlider3() {

    return (
        <>
        <div className='container-fluid p-0 slider-wrap'>
            <div className='scale-up-center'>
                <img src={ MbSlider1 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap pt-4'>
                <div className='tracking-in-expand-fwd' style={{marginTop: '55px'}}>
                    <h4 className='bold-9 font-charm clr-orange sm-text-shadow'>We Cater Cake For All</h4>
                    <h4 className='bold-9 font-charm clr-blue sm-text-shadow'>Social & Corporate Requirements</h4>
                    <h6 className='bold-9 font-charm clr-orange sm-text-shadow'>Evergreen flavours to customized design</h6>
                </div>
                <Link to="/share-query">
                    <button className='sm-btn-palki slide-in-bottom mt-4'>Book Now</button>
                </Link>
            </div>
        </div>
        </>
    )
}


export function ShortSlider4() {

    return (
        <>
        <div className='container-fluid p-0 slider-wrap'>
            <div className='scale-up-center'>
                <img src={ MbSlider2 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap pt-4'>
                    <div className='tracking-in-expand-fwd'>
                        <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>Solution For</h4>
                        <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>Cafe</h4>
                        <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>Restaurants</h4>
                        <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>Caters</h4>
                        <h6 className='bold-9 clr-orange font-charm sm-text-shadow'>Wholesale Supplies / Contract Manufacturing</h6>
                    </div>
                    
            </div>
        </div>
        </>
    )
}


export function ShortSlider2() {

    return (
        <>
        <div className='container-fluid p-0 slider-wrap'>
            <div className='scale-up-center'>
                <img src={ MbSlider3 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap pt-4'>
                <div className='tracking-in-expand-fwd' style={{marginTop:'55px'}}>
                    <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>We are</h4>
                    <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>Specialist in</h4>
                    <h5 className='bold-9 clr-orange font-charm sm-text-shadow'>Social Event Caterings</h5>
                </div>
                <Link to="/share-query">
                        <button className='sm-btn-palki slide-in-bottom mt-3'>Book Now</button>
                    </Link>
            </div>
        </div>
        </>
    )
}


export function ShortSlider1() {

    return (
        <>
        <div className='container-fluid p-0 slider-wrap'>
            <div className='scale-up-center'>
                <img src={ MbSlider4 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap pt-5'>
                <div className='tracking-in-expand-fwd'>
                    <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>Wholesomeness</h4>
                    <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>in food, Warmth in service</h4>
                    <h6 className='bold-9 clr-orange font-charm sm-text-shadow'>Best Combination for Cafeteria Meals</h6>
                </div>
                <Link to="/share-query">
                        <button className='sm-btn-palki slide-in-bottom mt-3'>Book Now</button>
                    </Link>
            </div>
        </div>
        </>
    )
}

