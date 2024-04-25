import React from 'react'

function FoodCatalog() {
    return (
        <>
        <div className='col-md-6 mb-4'>
            <div className='catalog-cover' style={{display:'flex'}}>
                <span className=''>
                    <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/menu/01.png" width="100%" alt="food" />
                </span>
                <div className='food-info'>
                    <div className='food-title'>
                        <h4>Paneer</h4>
                        <span className='food-price'>$50</span>
                    </div>
                    <p>Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default FoodCatalog
