import React from 'react'
import DishCard from './DishCard'

function DishSection() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5 mt-4'>
            <h4 className='text-center clr-palki bold-7'>Offer Zone</h4>
            <h2 className='text-center bold-9'>Popular Dishes Of Our Caterers</h2>

            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-4 mb-4'>
                        <DishCard 
                        dishImage = "https://kamleshyadav.com/html/catering/html/assets/images/main/dish/01.jpg" 
                        title = 'Delicious Sweets' 
                        price = '50'
                        />
                    </div>
                    <div className='col-md-4 mb-4'>
                        <DishCard 
                        dishImage = "https://kamleshyadav.com/html/catering/html/assets/images/main/dish/01.jpg" 
                        title = 'Delicious Sweets' 
                        price = '50'
                        />
                    </div>
                    <div className='col-md-4 mb-4'>
                        <DishCard 
                        dishImage = "https://kamleshyadav.com/html/catering/html/assets/images/main/dish/01.jpg" 
                        title = 'Delicious Sweets' 
                        price = '50'
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DishSection
