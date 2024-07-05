import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Ienergizer from 'imgPath/images/ienergier.png'
import Samsung from 'imgPath/images/samsung.png'
import UKG from 'imgPath/images/ukg.png'
import NPCL from 'imgPath/images/npcl.png'
import Contata from 'imgPath/images/contata.png'
import Transsion from 'imgPath/images/transsion.png'
import Ds from 'imgPath/images/ds_group.png'
import Genpact from 'imgPath/images/genpact.png'
import Giss from 'imgPath/images/Giss.png'
import APL from 'imgPath/images/APL.jpg'
import RMS from 'imgPath/images/rms.png'
import KGL from 'imgPath/images/kgl.jpg'
import MD from 'imgPath/images/md.png'
import Applied from 'imgPath/images/applied.jpg'
import Ingram from 'imgPath/images/ingram.png'
import QN from 'imgPath/images/qn.jpeg'
import IndiaTv from 'imgPath/images/India-TV.jpg'
import Lifeworks from 'imgPath/images/lifeworks.png'
import Winone from 'imgPath/images/winone.png'
import Safexpress from 'imgPath/images/safexpress.png'
import Servosys from 'imgPath/images/servosys.png'
import Noida from 'imgPath/images/noida.jpg'

function ClientSection() {
    useEffect(() => {
        AOS.init();
      }, []);

      const [showClient, setShowClient] = useState(false)
      const handleClient = () =>{
        setShowClient(!showClient)
      }

    return (
        <>
        <div className='container-fluid pt-8'>
            <h1 className='text-center clr-palki bold-7 sm-text-shadow font-charm'>Esteemed Clients</h1>
            <h6 className='text-center bold-9'>Serving the Leading Brands of Industry</h6>
            <div className='container pt-4' data-aos="fade-up">
                <div className={showClient ? '' : 'client-container'}>
                <div className='row align-items-center'>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Ienergizer } alt="Ienergizer" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ UKG } alt="Samsung" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Ds } alt="Ds group" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ NPCL } alt="npcl" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Samsung } alt="Samsung" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ APL } alt="apl" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ RMS } alt="RMS Moody" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ KGL } alt="KGL" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Ingram } alt="ingram" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ MD } alt="md" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Genpact } alt="Genpact" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Applied } alt="applied" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ QN } alt="QN" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ IndiaTv } alt="India TV" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Contata } alt="contata" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Lifeworks } alt="Lifeworks" width="100%" />
                        </div>
                    </div>
 
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Transsion } alt="Transsion Holiding" width="100%" />
                        </div>
                    </div>
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Winone } alt="Winone" width="100%" />
                        </div>
                    </div>
                    
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Safexpress } alt="Safexpress" width="100%" />
                        </div>
                    </div>
                    
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Servosys } alt="Servosys" width="100%" />
                        </div>
                    </div>
                    
                    <div className='col-md-2 client-bg col-6 mb-4 rotate-in-2-cw'>
                        <div className=''>
                            <img src={ Noida } alt="Noida Authority" width="100%" />
                        </div>
                    </div>
                    
                </div>
                <div className={showClient ? 'd-none' : 'hider'}>
                    <button onClick = {()=>handleClient()} className='btn-palki'>View all Client</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ClientSection
