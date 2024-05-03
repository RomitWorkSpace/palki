import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCatalog({props}) {
    return (
        <>
        <div className='container pt-5'>
                <div className='row align-items-center'>
                    <div className='col-md-5 mb-4'>
                        <img src={`https://filmcityinfo.com/public/images/services/${props.image}`} alt="event" width="100%" style={{borderRadius:'10px'}} />
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-6 text-center'>
                        <h4 className='event-text'>{props.name}</h4>
                        <hr className='line' />
                        <div className='event-info mt-4'>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>
                        </div>
                        <Link to="/service-detail">
                        <button className='btn-palki'>Explore Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCatalog
