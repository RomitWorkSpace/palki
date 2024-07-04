import React from 'react'

import User from 'imgPath/user.png'

function TestimonialCard({props}) {
    return (
        <>
        <div className='testimonial-wrapper p-4'>
            <div className='testimonial-inner'>
                <div className='row align-items-center'>
                    <img src={ User } alt="waiter" className='' />
                    <div className='testimonial-title'>
                        <h4 className='bold-7'>{props.name}</h4>
                        <p className='clr-palki'>{props.cname}</p>
                    </div>
                    <p className='text-justify mt-4'>{props.quote}</p>
    
                </div>
            </div>
        </div>
        </>
    )
}

export default TestimonialCard
