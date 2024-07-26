import React from 'react'
import { Link } from 'react-router-dom'

function ServiceBreadcrumb({ prev, current }) {
    return (
        <>
        <div className='container-fluid breadcrumb-bg p-3'>
            <div className='container'>
                <i className='fa fa-home clr-palki'></i>
                <Link to="/">
                    <span className='clr-palki'>Home</span>
                </Link>
                <i className='fa fa-angle-right'></i>
                <Link to="/services">
                    <span className='clr-palki'>Services</span>
                </Link>
                <i className='fa fa-angle-right'></i>
                <span className='clr-palki'>{prev}</span>
                <i className='fa fa-angle-right'></i>
                <span className=''>{current}</span>
            </div>
        </div>
        </>
    )
}

export default ServiceBreadcrumb
