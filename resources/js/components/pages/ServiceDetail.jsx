import React, { useEffect, useState } from 'react'
import GallerySection from '../HomeComponents/GallerySection'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PageBanner from '../../common/PageBanner';
import FaqSection from '../ServiceComponents/FaqSection';

import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Instagram from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function ServiceDetail() {

    const { slug } = useParams();
    const [subserviceData, setSubServiceData] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [path, setPath] = useState(null);

    useEffect(() => {

        axios.get(`/api/subservice/${slug}`).then(res => {
            setSubServiceData(res.data.subservice);
            setPhoto(res.data.subservice.photos);
        })
        setPath(window.location.href);
    },[slug]);
    const Banner = {mobile_banner: `/public/images/banners/${subserviceData.mobile_banner}`, desktop_banner: `/public/images/banners/${subserviceData.desktop_banner}`}

    var allphotos = "";
    allphotos = photo.map((item) => {
        return(
        <>
        <div className='col-md-3 mb-4'>
            <div className='gallery-bg'>
                <img src={`/public/images/gallery/${item.image}`} alt="event" width="100%" style={{borderRadius: '10px'}} />
            </div>
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
                    <div className='mt-4'>
                        <p><b>Share</b></p>
                    <div className='row'>
                    <div className='share-icon'>
                        <a href={`https://twitter.com/share?text=${subserviceData.name}&url=${path}`} target = '_blank'>
                        <XIcon className='icon-s' style={{color:'#222'}} />
                        </a>
                    </div>
                    <div className='share-icon'>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${path}&title=${subserviceData.name}`} target='_blank'>
                        <LinkedIn className='icon-s' style={{color:'#222'}} />
                        </a>
                    </div>
                    <div className='share-icon'>
                        <a href="#">
                        <Instagram className='icon-s' style={{color:'#222'}} />
                        </a>
                    </div>
                    <div className='share-icon'>
                        <a href={`https://www.facebook.com/sharer.php?u=${path}`}>
                            <Facebook className='icon-s' style={{color:'#222'}} />
                        </a>
                    </div>
                    <div className='share-icon'>
                    <a href={`https://api.whatsapp.com/send?text=${subserviceData.name}|${path}`} target='_blank'>
                        <WhatsApp className='icon-s' style={{color:'#222'}} />
                    </a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className='container-fluid wrapper-bg pt-8 pb-5'>
            <h2 className='text-center clr-palki sm-text-shadow bold-7 font-charm'>Latest Events</h2>
            <h6 className='text-center bold-9'>Our Social & Professional Events Gallery</h6>
            <div className='container pt-5'>
                
                <div className='row'>
                    { allphotos }
                </div>
            </div>
        </div>

        <FaqSection />
        
        </>
    )
}

export default ServiceDetail
