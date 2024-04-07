import React from 'react'

function Button(props) {
    return (
        <>
        <div className='p-2'>
        <span className='button-style' style={{backgroundColor: props.bg}}>{props.name}</span>
        </div>
        </>
    )
}

export default Button
