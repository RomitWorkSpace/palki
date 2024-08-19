import React, { useEffect, useState } from 'react'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/Blog-banner-mb.jpg'
import dbanner from 'imgPath/banners/Blog-banner.jpg'
import BlogImage from 'imgPath/blog-image.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import RelatedBlog from './RelatedBlog'

function BlogDetail() {

    const [blogData, setBlogData] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        axios.get(`/api/blogdata/${slug}`).then(res=>{
            if(res.status === 200)
            {
                setBlogData(res.data.blog)
                // setLoading(false);
            }
        });
    }, [slug]);

    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <PageBanner props = {Banners} />
        <div className='container-fluid pt-5 pb-5'>
            <div className='container pt-4'>
            {blogData && blogData.map((item) => (
                <div className='row'>
                    <div className='col-md-7'>
                            <h3 className='clr-palki bold mb-4 bold-7'>{item.name}</h3>
                                <img src={`/public/images/blogs/${item.image}`} alt="blog" width="100%" className='bdr-radius-10' />
                                <div className='contant-area mt-5'>
                                    <div className='text-justify' dangerouslySetInnerHTML={{__html: item.short_desc}} />
                                    <div className='mt-4 text-justify' dangerouslySetInnerHTML={{__html: item.description}} />
                                </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4'>
                        <h4 className='bold-7'>Related Articles</h4>
                            <RelatedBlog BlogItem = {item.slug} />
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default BlogDetail
