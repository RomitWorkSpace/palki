import React, { useEffect, useState } from 'react'
import GallerySection from '../HomeComponents/GallerySection'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PageBanner from '../../common/PageBanner';

function ServiceDetail() {

    const { slug } = useParams();
    const [subserviceData, setSubServiceData] = useState([]);

    useEffect(() => {

        axios.get(`/api/subservice/${slug}`).then(res => {
            setSubServiceData(res.data.subservice);
        })
    },[slug]);
    const Banner = {mobile_banner: `/public/images/banners/${subserviceData.mobile_banner}`, desktop_banner: `/public/images/banners/${subserviceData.desktop_banner}`}
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
        <GallerySection />
        </>
    )
}

export default ServiceDetail
