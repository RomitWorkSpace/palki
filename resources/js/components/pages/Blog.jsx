import React, { useEffect, useState } from 'react'
import BlogImage from 'imgPath/blog-image.jpg'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/Blog-banner-mb.jpg'
import dbanner from 'imgPath/banners/Blog-banner.jpg'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../common/Breadcrumb'
import OnPage from '../../common/OnPage'
import axios from 'axios'

function Blog() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        axios.get(`/api/blogs`).then(res=>{
            if(res.status === 200)
            {
                setBlogs(res.data.blogs)
                // setLoading(false);
            }
        });

    }, []);

    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <OnPage meta_title="Blogs| Palki Food Services - Food Service Company"
        keywords = "Palki Food Services blog, Catering trends blog, Corporate catering insights, Palki Foods news and updates, Food service company blog, Catering services blog"
        meta_desc="Welcome to our Food Service Company blog where we share food service experiences from our accounts and helpful information on event, corporate and Industry Bakery food services."
        />

        <PageBanner props = {Banners} />
        <Breadcrumb page='Blog' />
        <div className='container-fluid pt-5'>
            <h2 className='text-center clr-palki bold-7 font-charm'>Latest News</h2>
            <div className='container pt-5'>
                <div className='row'>

                    {blogs.map((item) => (
                        <>
                        <div className='col-md-4 mb-4'>
                        <div className='blog-wrapper'>
                            <img src={`/public/images/blogs/${item.image}`} alt="Blog" width="100%" className='bdr-radius-10' />
                            <div className='blog-content'>
                                <h5 className='bold-7'>{item.title}</h5>
                                <i className="fa-regular fa-clock clr-gray"></i> <span className='publish-date clr-gray'>{item.created_at}</span>
                                <div
                                    dangerouslySetInnerHTML={{__html: item.short_desc.substr(0,170)+"..."}}
                                />
                                <Link to={`/blog/${item.slug}`}>
                                    <p className='read-more'>Read More &gt;&gt;&gt;</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                        </>
                    ))}
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog
