import React from 'react'
import AccordionSection from './AccordionSection'

function FaqSection() {
    return (
        <>
        <div className='container-fluid pt-5 pb-5'>
            <h2 className='clr-palki text-center font-charm'>Frequently Asked Questions</h2>
            <div className='container pt-4'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <AccordionSection />
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FaqSection
