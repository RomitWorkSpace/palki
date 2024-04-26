import React from 'react'
import TeamSlider from './TeamSlider'

function TeamSection() {
    return (
        <>
        <div className='container-fluid pt-8 pb-5'>
            <h4 className='clr-palki text-center bold-7'>Our Chefs</h4>
            <h2 className='text-center bold-9'>We Have Experienced Chef Team</h2>

            <TeamSlider />
        </div>
        </>
    )
}

export default TeamSection
