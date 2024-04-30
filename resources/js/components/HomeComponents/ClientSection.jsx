import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Ienergizer from 'imgPath/images/ienergier.png'
import Samsung from 'imgPath/images/samsung.png'
import Barco from 'imgPath/images/barco.jpg'
import Capgemini from 'imgPath/images/capgemini.png'
import Contata from 'imgPath/images/contata.png'
import Exl from 'imgPath/images/exl.jpg'
import Ds from 'imgPath/images/ds_group.png'
import Genpact from 'imgPath/images/genpact.png'
import Giss from 'imgPath/images/Giss.png'
import IBM from 'imgPath/images/ibm.png'
import IndiaTv from 'imgPath/images/India-TV.jpg'
import Sunwodr from 'imgPath/images/sunwodr.jpg'

function ClientSection() {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
        <div className='container-fluid pt-8'>
            <h4 className='text-center clr-palki bold-7'>Esteemed Clients</h4>
            <h2 className='text-center bold-9'>Delivering Food for leading brands</h2>
            <div className='container pt-4' data-aos="fade-up">
                <div className='row align-items-center'>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ Ienergizer } alt="Ienergizer" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ Samsung } alt="Samsung" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ Barco } alt="Barco" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ Capgemini } alt="capgemini" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ Contata } alt="contata" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ Exl } alt="exl" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ Ds } alt="Ds group" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ Genpact } alt="Genpact" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ Giss } alt="Giss" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ IBM } alt="IBM" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ IndiaTv } alt="India TV" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 col-6 mb-4'>
                        <div className='client-bg'>
                            <img src={ Sunwodr } alt="Sunwodr" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ClientSection
