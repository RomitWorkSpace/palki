import React from 'react'

function TeamCard({props}) {
    return (
        <>
            <div className='team-wrapper wrapper-bg text-center p-3'>
                <img src={ props.image } alt="Director" width="100%" />
                
                <div className='team-info'>
                    <h5 className='mt-3'>{props.name}</h5>
                    <p className='clr-palki'>{props.designation}</p>
                    <p>{props.intro}</p>
                </div>
            </div>
        </>
    )
}

export default TeamCard
