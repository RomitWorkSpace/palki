import React from 'react'
import ServiceCard from './ServiceCard'
import { Link } from 'react-router-dom'

import EventIcon from 'imgPath/event-catering.png'
import CorporateIcon from 'imgPath/Corporate-Catering.png'
import BakeryIcon from 'imgPath/Industrial-Bakery.png'

function ServiceSection() {
    const EventService = {icon: EventIcon, name: 'Event Catering'}
    const CorporateService = {icon: CorporateIcon, name: 'Corporate Catering'}
    const BakeryService = {icon: BakeryIcon, name: 'Industrial Bakery'}
    return (
        <>
        <div className='container-fluid wrapper-bg pt-8 pb-5'>
            <h4 className='text-center clr-palki bold-7'>Our Services</h4>
            <h2 className='text-center bold-9'>What We Offer</h2>
            <div className='container pt-5'>
                <div className='row' style={{justifyContent:'space-around'}}>
                    <div className='col-md-3 mb-4'>
                        <ServiceCard props = {CorporateService} />
                    </div>
                    <div className='col-md-3 mb-4'>
                        <ServiceCard props = { BakeryService } />
                    </div>
                    <div className='col-md-3 mb-4'>
                        <ServiceCard props = { EventService } />
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
