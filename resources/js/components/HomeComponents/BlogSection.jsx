import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BlogSection() {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        AOS.init();

        axios.get(`/api/homeblogs`).then(res=>{
            if(res.status === 200)
            {
                setBlogs(res.data.blogs)
                // setLoading(false);
            }
        });
      }, []);

    return (
        <>
        <div className='container-fluid pt-8 pb-5'>
            <h1 className='text-center clr-palki bold-7 sm-text-shadow font-charm'>Blogs and Updates</h1>
            <h6 className='text-center bold-9'>Be First Who Read News</h6>

            <div className='container pt-5'>

                <div className='row'>
                    {blogs && blogs.map((item) => (
                    <div className='col-md-4 mb-4'>
                        <div className='inner-blog-wrapper' data-aos="fade-up">
                            <img src={`/public/images/blogs/${item.image}`} alt="blog" width="100%" />
                            <div className='blog-date'><span style={{fontSize:'23px'}}>16</span><br/>sep</div>
                            <div className='blog-info'>
                                <Link to={`/blog/${item.slug}`}>
                                <h5 className='bold-7 clr-black'>{item.title}</h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
        </div>
        </>
    )
}

export default BlogSection
