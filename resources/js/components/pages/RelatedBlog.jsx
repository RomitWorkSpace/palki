import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function RelatedBlog({ BlogItem }) {

    const [relatedBlogs, setRelatedBlogs] = useState([]);
    useEffect(()=>{
        axios.get(`/api/blogs`).then(res=>{
            if(res.status === 200)
            {
                setRelatedBlogs(res.data.blogs)
                // setLoading(false);
            }
        });
    },[])
    return (
        <>
         {relatedBlogs.filter(item => item.slug != BlogItem).map(blog => (
        <div className="related-blog-bg mb-4">
                <img src={`/public/images/blogs/${blog.image}`} width="100%" alt="blog" />
                <div className="blog-content-area text-justify p-3">
                    <h5 className='bold-7'>{ blog.name }</h5>
                    
                    <Link to={`/blog/${blog.slug}`}>
                    <div className='btn-palki' style={{display:'inline-block'}}>Read More</div>
                    </Link>
                </div>
        </div>
         ))}
        </>
    )
}

export default RelatedBlog
