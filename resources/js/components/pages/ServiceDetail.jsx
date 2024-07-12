import React, { useEffect, useState } from 'react'
import GallerySection from '../HomeComponents/GallerySection'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PageBanner from '../../common/PageBanner';
import FaqSection from '../ServiceComponents/FaqSection';

function ServiceDetail() {

    const { slug } = useParams();
    const [subserviceData, setSubServiceData] = useState([]);
    const [photo, setPhoto] = useState([]);

    useEffect(() => {

        axios.get(`/api/subservice/${slug}`).then(res => {
            setSubServiceData(res.data.subservice);
            setPhoto(res.data.subservice.photos);
        })
    },[slug]);
    const Banner = {mobile_banner: `/public/images/banners/${subserviceData.mobile_banner}`, desktop_banner: `/public/images/banners/${subserviceData.desktop_banner}`}

    var allphotos = "";
    allphotos = photo.map((item) => {
        return(
        <>
        <div className='col-md-3 mb-4'>
            <img src={`/public/images/gallery/${item.image}`} alt="event" width="100%" style={{borderRadius: '10px'}} />
        </div>
        </>
        )
    })

    return (
        <>
        <PageBanner props = {Banner} />
        <div className='container-fluid pt-5 pb-5'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-5 mb-4'>
                    <img src={`https://filmcityinfo.com/public/images/services/${subserviceData.image}`} 
                    alt="event" width="100%" 
                    style={{borderRadius:'8px'}}
                    />
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-6 text-justify'>
                    <h4 className='text-center clr-palki bold-7'>{ subserviceData.name }</h4>

                    <div dangerouslySetInnerHTML={{__html: subserviceData.short_desc}}></div>
                    <div dangerouslySetInnerHTML={{__html: subserviceData.description}}></div>
                </div>
            </div>
            </div>
        </div>
        <FaqSection />
        <div className='container-fluid wrapper-bg pt-8 pb-5'>
            <h2 className='text-center clr-palki sm-text-shadow bold-7 font-charm'>Latest Events</h2>
            <h6 className='text-center bold-9'>Our Social & Professional Events Gallery</h6>
            <div className='container pt-5'>
                
                <div className='row'>
                    { allphotos }
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceDetail
