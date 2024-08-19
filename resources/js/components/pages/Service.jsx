import React, { useEffect, useState } from 'react'
import GallerySection from '../HomeComponents/GallerySection'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/Services-banner-mb.jpg'
import dbanner from 'imgPath/banners/Services-banner.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Divider from 'imgPath/divider.png'
import Breadcrumb from '../../common/Breadcrumb'
import OnPage from '../../common/OnPage'

function Service() {

    const [allservices, setAllServices] = useState([]);

    useEffect(() => {

        axios.get(`/api/allservices`).then(res=>{
            if(res.status === 200)
            {
                setAllServices(res.data.services)
                // setLoading(false);
            }
        });

    }, []);
    
    var serviceData ="";
    serviceData = allservices.map( (item, index) => {
        return (
            <>
            {item.id % 2 == 0 ?
             <>
             <div key={item.id} className='container pt-5'>
                <div className='row align-items-center column-reverse'>
                    
                    <div className='col-md-6 text-center'>
                        <h4 className='event-text'>{item.name}</h4>
                        <hr className='line' />
                        <div className='event-info mt-4'>
                            <div dangerouslySetInnerHTML={{ __html: item.short_desc }} />
                        </div>
                        <Link to={`/service/${item.slug}`}>
                        <button className='btn-palki'>Explore Now</button>
                        </Link>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5 mb-4'>
                        <img src={`/public/images/services/${item.image}`} alt="event" width="100%" style={{borderRadius:'10px'}} />
                    </div>
                </div>
                <div className='mt-4 mb-4 divider'>
                    <img src={ Divider } alt="separator" width="100%" />
                </div>
            </div>
             </>:<>
             <div key={item.id} className='container pt-5'>
                <div className='row align-items-center'>
                    <div className='col-md-5 mb-4'>
                        <img src={`/public/images/services/${item.image}`} alt="event" width="100%" style={{borderRadius:'10px'}} />
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-6 text-center'>
                        <h4 className='event-text'>{item.name}</h4>
                        <hr className='line' />
                        <div className='event-info mt-4'>
                            <div dangerouslySetInnerHTML={{ __html: item.short_desc }} />
                        </div>
                        <Link to={`/service/${item.slug}`}>
                        <button className='btn-palki'>Explore Now</button>
                        </Link>
                    </div>
                </div>
                <div className='mt-4 mb-4 divider'>
                    <img src={ Divider } alt="separator" width="100%" />
                </div>
            </div>
             </>}
            </>
        )
    })

    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <OnPage meta_title="Our Services - Palki Food Services"
        keywords = "Palki Food Services, Industrial Cafeteria Meals,Corporate Cafeteria Meals, Bulk Bakery Supplies, Corporate Supplies, Catering for Social Ceremonies, Catering for Large Corporate"
        meta_desc = "Explore Palki Foods' services: From bespoke catering and bulk bakery supplies to corporate and industrial cafeteria solutions. Quality and excellence guaranteed."
        />
        <PageBanner props = {Banners}/>
        <Breadcrumb page='Services' />
        <div className='container-fluid pt-5 pb-5'>
            <h2 className='text-center clr-palki bold-7 font-charm'>Our Services</h2>

                { serviceData }

        </div>
        <GallerySection />
        </>
    )
}

export default Service
