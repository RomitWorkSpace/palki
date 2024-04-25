import React from 'react'

function DesktopBanner({banner}) {
    return (
        <>
        <div className='container-fluid p-0 mt-100'>
            <img src={ banner } alt="banner" width="100%" />
        </div>
        </>
    )
}

export default DesktopBanner
