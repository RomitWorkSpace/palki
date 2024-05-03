import React from 'react'
import TestimonialSlider from './TestimonialSlider'

function TestimonialSection() {
    return (
        <>
        <div className='container-fluid wrapper-bg pt-8 pb-5'>
                <h4 className='clr-palki bold-7 text-center'>Our Testimonials</h4>
                <h2 className='bold-9 text-center'>What Our Customers Say!</h2>
            <div className='container pt-5 pb-4'>
                <TestimonialSlider />
            </div>
        </div>
        </>
    )
}

export default TestimonialSection
