import React, { useEffect } from 'react'

import FastfoodIcon from '@mui/icons-material/Fastfood';

import NewSlider1 from 'imgPath/sliders/final-dk-slider3.jpg'
import NewSlider2 from 'imgPath/sliders/final-dk-slider4.jpg'
import NewSlider3 from 'imgPath/sliders/final-dk-slider2.jpg'
import NewSlider4 from 'imgPath/sliders/final-dk-slider1.jpg'

import MbSlider1 from 'imgPath/sliders/final-mb-slider1.jpg'
import MbSlider2 from 'imgPath/sliders/final-mb-slider2.jpg'
import MbSlider3 from 'imgPath/sliders/final-mb-slider3.jpg'
import MbSlider4 from 'imgPath/sliders/final-mb-slider4.jpg'
import { Link } from 'react-router-dom';

export function FullSlider2() {

    return (
        <>
        <div className='container-fluid p-0 slider-wrap'>
            <div className='scale-up-center'>
                <img src={ NewSlider1 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap pt-4'>
                <div className='row align-items-center mt-5'>
                    <div className='col-5'></div>
                    <div className='col-7'>
                        <div className='text-board'>
                        <div className='tracking-in-expand-fwd'>
                            <h1 className='bold-9 clr-blue font-charm text-shadow'>Solutions For</h1>
                            <h1 className='bold-9 clr-blue font-charm text-shadow'>Cafe, Restaurants</h1>
                            <h1 className='bold-9 clr-blue font-charm text-shadow'>Caters</h1>
                            <h3 className='bold-9 clr-palki font-charm sm-text-shadow'>Wholesale Supplies / Contract Manufacturing</h3>
                        </div>
                        </div>
                    </div>
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
                <img src={ NewSlider2 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap'>
                <div className='row align-items-center mt-100'>
                    <div className='col-7'>
                    <div className='tracking-in-expand-fwd'>
                            <h1 className='bold-9 font-charm clr-palki text-shadow'>Cakes For All</h1>
                            <h1 className='bold-9 font-charm clr-blue text-shadow'>Small celebrations or Bulk <br/>Requirements</h1>
                            <h3 className='bold-9 font-charm clr-blue sm-text-shadow'>Evergreen flavours & customized designs <br/>for every occasion</h3>
                        </div>
                    </div>
                    <div className='col-5'></div>
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
                    
                    <div className='col-6'>
                        <div className='text-board'>
                        <div className='tracking-in-expand-fwd'>
                            <h1 className='clr-palki bold-9 font-charm text-shadow'>Wholesomeness in food,</h1>
                            <h1 className="clr-palki bold-9 font-charm text-shadow">Warmth in service</h1>
                            <h3 className='clr-blue bold-9 font-charm text-shadow'>Best combination for cafeteria Meals</h3>
                        </div>
                        </div>
                    </div>
                    <div className='col-6'></div>
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
                    <div className='col-6'></div>
                    <div className='col-6 text-center'>
                    <div className='text-board'>
                        <div className='tracking-in-expand-fwd' style={{zIndex:'5'}}>
                            <h1 className='bold-9 font-charm clr-blue text-shadow'>Specialists in Hi-Teas</h1>
                            <h1 className='bold-9 font-charm clr-blue text-shadow'>and Snacks Offerings</h1>
                            
                        </div>
                        <Link to="/share-query">
                            <button className='btn-palki slide-in-bottom mt-4'>Book Now</button>
                        </Link>
                        </div>
                    </div>
                    <div className='col-4'></div>
                </div>
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
                <img src={ MbSlider1 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap pt-5'>
                <div className='row align-items-center'>
                    <div className='col-4'></div>
                    <div className='col-8'>
                    <div className='text-board text-center'>
                        <div className='tracking-in-expand-fwd'>
                            <h5 className='bold-9 clr-blue font-charm sm-text-shadow'>Specialists in Hi-Teas</h5>
                            <h5 className='bold-9 clr-blue font-charm sm-text-shadow'>and Snacks Offerings</h5>
                        </div>
                        <Link to="/share-query">
                            <button className='sm-btn-palki slide-in-bottom mt-3'>Book Now</button>
                        </Link>
                    </div>
                    </div>
                </div>
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
            <div className='slider-text-wrap pt-5'>
                    <div className='row align-items-center'>
                        <div className='col-4'></div>
                        <div className='col-8'>
                            <div className='text-board'>
                            <div className='tracking-in-expand-fwd'>
                                <h5 className='bold-9 clr-palki font-charm sm-text-shadow'>Wholesomeness in food</h5>
                                <h5 className='bold-9 clr-palki font-charm sm-text-shadow'>Warmth in service</h5>
                                <h5 className='bold-9 clr-blue font-charm sm-text-shadow'>Best combination for<br/>cafeteria Meals</h5>
                            </div>
                            </div>
                        </div>
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
                <img src={ MbSlider3 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap pt-5'>
                
                <div className='tracking-in-expand-fwd'>
                    <h4 className='bold-9 clr-palki font-charm sm-text-shadow'>Cakes for all</h4>
                    <h5 className='bold-9 clr-blue font-charm sm-text-shadow'>Small celebrations<br/>or Bulk requirements</h5>
                    <h6 className='bold-9 clr-blue font-charm sm-text-shadow'>Evergreen flavour & customized design<br/>for every occasion.</h6>
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
                <img src={ MbSlider4 } alt="cds" width="100%" />
            </div>
            <div className='container slider-text-wrap pt-5'>
                <div className='row align-items-center'>
                    <div className='col-5'></div>
                    <div className='col-7'>
                        <div className='text-board'>
                            <div className='tracking-in-expand-fwd'>
                                <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>Solution for</h4>
                                <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>Cafe, Restaurant</h4>
                                <h4 className='bold-9 clr-blue font-charm sm-text-shadow'>Caters</h4>
                            </div>
                            <Link to="/contact">
                                <button className='sm-btn-palki slide-in-bottom mt-3'>Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

