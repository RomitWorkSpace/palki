import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({ page }) {
    return (
        <>
        <div className='container-fluid breadcrumb-bg p-3'>
            <div className='container'>
                <i className='fa fa-home clr-palki'></i>
                <Link to="/">
                    <span className='clr-palki'>Home</span>
                </Link>
                <i className='fa fa-angle-right'></i>
                <span className=''>{ page }</span>
            </div>
        </div>
        </>
    )
}

export default Breadcrumb
