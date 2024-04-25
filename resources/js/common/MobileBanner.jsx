import React from 'react'

function MobileBanner({banner}) {
    return (
        <>
        <div className='container-fluid p-0 mt-100'>
            <img src={ banner } alt="banner" width="100%" />
        </div>
        </>
    )
}

export default MobileBanner
