import React from 'react'
import BlogImage from 'imgPath/blog-image.jpg'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/Blog-banner-mb.jpg'
import dbanner from 'imgPath/banners/Blog-banner.jpg'

function Blog() {

    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <PageBanner props = {Banners} />
        <div className='container-fluid pt-5'>
            <h4 className='text-center clr-palki bold-7'>Latest News</h4>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-4 mb-4'>
                        <div className='blog-wrapper'>
                            <img src={ BlogImage } alt="Blog" width="100%" />
                            <div className='blog-content'>
                                <h5 className='bold-7'>Tips of making catering affordable</h5>
                                <i className="fa-regular fa-clock clr-gray"></i> <span className='publish-date clr-gray'>October 15, 2024</span>
                                <p className='text-justify mt-3'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua.</p>
                                <p className='read-more'>Read More &gt;&gt;&gt;</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-4'>
                        <div className='blog-wrapper'>
                            <img src={ BlogImage } alt="Blog" width="100%" />
                            <div className='blog-content'>
                                <h5 className='bold-7'>Tips of making catering affordable</h5>
                                <i className="fa-regular fa-clock clr-gray"></i> <span className='publish-date clr-gray'>October 15, 2024</span>
                                <p className='text-justify mt-3'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua.</p>
                                <p className='read-more'>Read More &gt;&gt;&gt;</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-4'>
                        <div className='blog-wrapper'>
                            <img src={ BlogImage } alt="Blog" width="100%" />
                            <div className='blog-content'>
                                <h5 className='bold-7'>Tips of making catering affordable</h5>
                                <i className="fa-regular fa-clock clr-gray"></i> <span className='publish-date clr-gray'>October 15, 2024</span>
                                <p className='text-justify mt-3'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua.</p>
                                <p className='read-more'>Read More &gt;&gt;&gt;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog
