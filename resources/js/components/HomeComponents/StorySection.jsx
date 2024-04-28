import React from 'react'

function StorySection() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/story.png" alt="food" width="100%" />
                    </div>
                    <div className='col-md-6'>
                        <h4 className='clr-palki bold-7'>Our Story</h4>
                        <h2 className='bold-9'>Trusted By 20 + Satisfied Clients</h2>
                        <div className='content-area text-justify p-2'>
                            <p>Welcome to Palki Food Services, your premier provider of catering solutions for various industries including corporate, industrial, and MNCs. With a track record of innovation and problem-solving, we pride ourselves on delivering top-notch services tailored to our clients' needs across different sectors and regions.</p>

                            <ul className='story-list'>
                                <li>Fresh and Fast food Delivery</li>
                                <li>24/7 Customer Support</li>
                                <li>Easy Customization Options</li>
                                <li>Delicious Deals for Delicious Meals</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default StorySection
