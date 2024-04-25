import React from 'react'
import ServiceCard from './ServiceCard'

function GallerySection() {
    return (
        <>
        <div className='container-fluid wrapper-bg pt-8 pb-5'>
            <h4 className='text-center clr-palki bold-7'>Latest Events</h4>
            <h2 className='text-center bold-9'>Our Social & Professional Events Gallery</h2>
            <div className='container pt-5'>
                
                <div className='row'>
                    <div className='col-md-3 mb-4'>
                        <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/event/01.jpg" alt="event" width="100%" style={{borderRadius: '10px'}} />
                    </div>
                    <div className='col-md-3 mb-4'>
                        <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/event/02.jpg" alt="event" width="100%" style={{borderRadius: '10px'}} />
                    </div>
                    <div className='col-md-3 mb-4'>
                        <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/event/03.jpg" alt="event" width="100%" style={{borderRadius: '10px'}} />
                    </div>
                    <div className='col-md-3 mb-4'>
                        <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/event/02.jpg" alt="event" width="100%" style={{borderRadius: '10px'}} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default GallerySection
