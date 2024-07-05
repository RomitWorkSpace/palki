import React, { useEffect } from 'react'
import TestimonialSlider from './TestimonialSlider'
import AOS from 'aos';
import 'aos/dist/aos.css';

function TestimonialSection() {

    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
        <div className='container-fluid testimonial-bg pt-8 pb-5'>
                <div className='' data-aos="fade-down">
                    <h1 className='clr-palki bold-7 text-center sm-text-shadow font-charm'>Testimonials</h1>
                    <h6 className='bold-9 text-center'>What Our Clients Say About Us!</h6>
                </div>
            <div className='container pt-5 pb-4'>
                <TestimonialSlider />
            </div>
        </div>
        </>
    )
}

export default TestimonialSection
