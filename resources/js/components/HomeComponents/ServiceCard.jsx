import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

function ServiceCard({props}) {

    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
        <div className='service-card' data-aos="fade-up">
            <div className='service-img'>
                <img src={props.icon} alt="" />
            </div>
            <div className='service-info'>
                <h4 className=''>{props.name}</h4>
                <p className='mt-4'>Contrary to popular belief, ipsum is not simply random.</p>

                <Link to=""><h5 style={{color:'#212529', fontFamily:'Nunito', fontSize:'17px'}}>Read More</h5></Link>
            </div>
        </div>
        </>
    )
}

export default ServiceCard
