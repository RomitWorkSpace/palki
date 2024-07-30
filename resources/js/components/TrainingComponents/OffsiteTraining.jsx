import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function OffsiteTraining() {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
        <div className='container training-section mb-5' data-aos="fade-up">
            <div className='row'>
                <div className='col-md-6'>
                    <div className="text-center training-img">
                        <img className='bdr-radius-10 box-shadow' src="https://palkifoods.in/wp-content/uploads/2020/10/Visit.jpg" alt="training" width="85%" />
                        <div className='training-title'>
                            <span style={{fontSize:'13px', marginRight:'20vh'}}>Off-sites Training</span>
                            <span style={{fontSize:'11px'}}>02/12/2024</span>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='training-content p-3 text-justify'>
                        <h5 className='bold-7'>OFF-SITES</h5>
                        <p>Learning through fun and activities</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OffsiteTraining
