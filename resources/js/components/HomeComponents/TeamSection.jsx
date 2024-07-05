import React from 'react'
import TeamSlider from './TeamSlider'
import PillarBg from 'imgPath/our-pillars-bg.jpg'

function TeamSection() {
    return (
        <>
        <div className='container-fluid our-team-bg pt-8 pb-5' style={{backgroundImage: `url(${ PillarBg })`}}>
            
            <h1 className='clr-palki text-center bold-7 sm-text-shadow font-charm'>Founding Pillars</h1>
            <h6 className='text-center bold-9'>Our Skilled Team Sets the Standard</h6>

            <TeamSlider />
        </div>
        </>
    )
}

export default TeamSection
