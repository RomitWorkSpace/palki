import React from 'react'
import FoodCatalog from './FoodCatalog'

function PopularFood() {
    return (
        <>
        <div className='container-fluid pt-8 pb-5 wrapper-bg'>
            <h4 className='clr-palki text-center bold-7'>Our Story</h4>
            <h2 className='text-center bold-9'>TMost Popular Food In The World</h2>

            <div className='container menu-section pt-5'>
                <div className='row'>
                    <FoodCatalog />
                    <FoodCatalog />
                    <FoodCatalog />
                    <FoodCatalog />
                </div>
            </div>
        </div>
        </>
    )
}

export default PopularFood
