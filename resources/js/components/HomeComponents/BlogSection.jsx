import React from 'react'

function BlogSection() {
    return (
        <>
        <div className='container-fluid pt-8 pb-5'>
            <h4 className='text-center clr-palki bold-7'>News and Blog</h4>
            <h2 className='text-center bold-9'>Be First Who Read News</h2>

            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-4 mb-4'>
                        <div className='inner-blog-wrapper'>
                            <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/dish/01.jpg" alt="blog" width="100%" />
                            <div className='blog-date'><span style={{fontSize:'23px'}}>16</span><br/>sep</div>
                            <div className='blog-info'>
                                <h5 className='bold-7'>How To Get More Test In Your Food From Out Catering Tips</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-4'>
                        <div className='inner-blog-wrapper'>
                            <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/dish/01.jpg" alt="blog" width="100%" />
                            <div className='blog-date'><span style={{fontSize:'23px'}}>16</span><br/>sep</div>
                            <div className='blog-info'>
                                <h5 className='bold-7'>How To Get More Test In Your Food From Out Catering Tips</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-4'>
                        <div className='inner-blog-wrapper'>
                            <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/dish/01.jpg" alt="blog" width="100%" />
                            <div className='blog-date'><span style={{fontSize:'23px'}}>16</span><br/>sep</div>
                            <div className='blog-info'>
                                <h5 className='bold-7'>How To Get More Test In Your Food From Out Catering Tips</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogSection
