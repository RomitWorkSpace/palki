import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCard() {
    return (
        <>
        <div className='service-card'>
            <div className='service-img'>
                <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/service/wedding.svg" alt="" />
            </div>
            <div className='service-info'>
                <h4 className=''>Wedding Services</h4>
                <p className='mt-4'>Contrary to popular belief, ipsum is not simply random.</p>

                <Link to=""><h5 style={{color:'#212529', fontFamily:'Nunito', fontSize:'17px'}}>Read More</h5></Link>
            </div>
        </div>
        </>
    )
}

export default ServiceCard
