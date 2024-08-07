import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import CertificateSlider from './CertificateSlider';

function CertificateSection() {

    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
        <div className='container-fluid pt-8 pb-5'>
                <div className='' data-aos="fade-down">
                    <h1 className='bold-9 text-center clr-palki sm-text-shadow font-charm'>Recoginition and Certificate</h1>
                </div>
            <div className='container pt-5 pb-4'>
                <CertificateSlider />
            </div>
        </div>
        </>
    )
}

export default CertificateSection
