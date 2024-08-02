import React from 'react'

function GoogleReview() {
    return (
        <>
        <div className='review-box mt-100'>
            <div className='row'>
                <div className='col-4'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="google" width="100%" />
                </div>
                <div className='col-8'>
                    <h4 className=''>Client Reviews</h4>
                    <span>(4).</span>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa-regular fa-star'></i>
                    <div className=''>
                    <a href="https://www.google.com/search?gs_ssp=eJwFwUsOQDAQANDYikPUwtrQUeEIbjFMy8SnE0R6fO_lRb3WjWqb3BYUsrGCZAdYfPBs5x4DUT9C6tC1OMPgmBx2aKdS6djFhBj5MXKxkNFbPnq9OeSU1_MPj8cb5w&q=palki+foods+india+private+limited&oq=palki+foods&gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyBggAEEUYOTINCAEQLhivARjHARiABDIHCAIQABiABDIKCAMQABiiBBiJBTIKCAQQABiABBiiBDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDg5NjNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank">
                        <button className='btn btn-primary'>Read Review</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default GoogleReview
