import React from 'react'
import ServiceCard from './ServiceCard'
import { Link } from 'react-router-dom'

function ServiceSection() {
    return (
        <>
        <div className='container-fluid wrapper-bg pt-8 pb-5'>
            <h4 className='text-center clr-palki bold-7'>Our Services</h4>
            <h2 className='text-center bold-9'>What We Offer</h2>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-3 mb-4'>
                        <ServiceCard />
                    </div>
                    <div className='col-md-3 mb-4'>
                        <ServiceCard />
                    </div>
                    <div className='col-md-3 mb-4'>
                        <ServiceCard />
                    </div>
                    <div className='col-md-3 mb-4'>
                        <ServiceCard />
                    </div>
                </div>
                <div className='text-center'>
                    <Link to="/services">
                        <button className='btn-palki'>View all Services</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceSection
