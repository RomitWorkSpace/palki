import React from 'react'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/Blog-banner-mb.jpg'
import dbanner from 'imgPath/banners/Blog-banner.jpg'
import BlogImage from 'imgPath/blog-image.jpg'

function BlogDetail() {

    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <PageBanner props = {Banners} />
        <div className='container-fluid pt-5 pb-5'>
            <div className='container pt-4'>
                <div className='row'>
                    <div className='col-md-7'>
                        <img src={ BlogImage } alt="blog" width="100%" />
                        <div className='contant-area'>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4'>
                        <h4 className='bold-7'>Related Articles</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogDetail
