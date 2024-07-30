import React from 'react'
import OperationTraining from './OperationTraining'
import DevelopmentTraining from './DevelopmentTraining'
import OffsiteTraining from './OffsiteTraining'


function AllTraining() {
    return (
        <>
        <div className='container-fluid p-0'>
            <OperationTraining />
            <DevelopmentTraining />
            <OffsiteTraining />
        </div>
        </>
    )
}

export default AllTraining
