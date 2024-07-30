import React from 'react'
import BgImg from 'imgPath/Background.png'

function Slogan() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5 relative'>
            <div className='container p-0'>
            <h1 className='text-center clr-palki bold-7 font-charm tracking-in-expand-fwd-text'>Training, Learning & Growing</h1>
            <div className='text-center'>
                <p style={{fontSize:'18px'}}>"Education is the most powerful weapon which you can use to change the world."​</p>
                <p><b>- Nelson Mandela</b></p>
            </div>
            </div>
            <div className='bg-design' style={{backgroundImage: `url(${BgImg})`}}></div>
        </div>
        </>
    )
}

export default Slogan
