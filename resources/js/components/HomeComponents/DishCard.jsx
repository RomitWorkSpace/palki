import React from 'react'

function DishCard(props) {
    return (
        <>
        <div className='dish-card-wrapper box-shadow'>
            <img src={props.dishImage} alt="dish" width="100%" />
            <div className='dish-info p-3'>
                <h4 className='dish-title'>{props.title}<span className='price'>${props.price}</span></h4>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
            </div>
        </div>
        </>
    )
}

export default DishCard
