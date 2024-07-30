import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

function DevelopmentTraining() {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
        <div className='container training-section pt-5 pb-5' data-aos="fade-up">
            <div className='row development-training'>
                <div className='col-md-6'>
                    <div className='training-content p-3 text-justify'>
                        <h5 className='bold-7'>DEVELOPMENT ORIENTED TRAINING</h5>
                        <p>Conducted MONTHLY for all the departments.  To enhance the intellect quotient, motivation and  leadership qualities in employees. Aimed towards having highly motivated employees which has customer handling skills, well aware of surroundings, enabled with leadership qualities and up to date to current world scenario.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                <div className="text-center training-img">
                        <img className='bdr-radius-10 box-shadow' src="https://palkifoods.in/wp-content/uploads/2020/10/IMG_2557-1536x1024.jpg" alt="training" width="85%" />
                        <div className='training-title'>
                            <span style={{fontSize:'13px', marginRight:'11vh'}}>Development Oriented Training</span>
                            <span style={{fontSize:'10px'}}>02/12/2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DevelopmentTraining
