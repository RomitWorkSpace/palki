import React from 'react'
import ContactBg from 'imgPath/booking-bg.jpg'
import Iframe from 'react-iframe'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/Contact-banner-mb.jpg'
import dbanner from 'imgPath/banners/Contact-banner.jpg'

function Contact() {

    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <PageBanner props = {Banners} />
        <div className='contact-section pt-5 pb-5' style={{backgroundImage: `url(${ContactBg})`}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 contact-inner'>
                        <div className='contact-form'>
                            <form>
                                <div className='row'>
                                    <div className='col-md-6 mb-4'>
                                        <input type="text" name="name" className='form-control' placeholder="Enter your name" />
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <input type="email" name="email" className='form-control' placeholder="Enter your email" />
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <input type="number" name="phone" className='form-control' placeholder="Enter your Number" />
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <input type="text" name="subject" className='form-control' placeholder="Enter your subject" />
                                    </div>
                                    <div className='col-12 mb-4'>
                                        <textarea name="message" id="message" rows="5" className='form-control' placeholder="Your message..."></textarea>
                                    </div>
                                </div>
                                <button type="submit" className='btn-palki'>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </div>

        <div className='container-fluid pt-8 pb-4 wrapper-bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 mb-4'>
                        <div className='contact-wrapper'>
                            <div className='contact-item'>
                                <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/call.svg" alt="phone" width="100%" />
                            </div>
                            <div className='contact-info text-center'>
                                <h4 className='bold-7'>Call Us</h4>
                                <p>+ 1800-1245-1245</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-4'>
                        <div className='contact-wrapper'>
                            <div className='contact-item'>
                                <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/mail.svg" alt="phone" width="100%" />
                            </div>
                            <div className='contact-info text-center'>
                                <h4 className='bold-7'>Mail Us</h4>
                                <p>info@palkifoods.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mb-4'>
                        <div className='contact-wrapper'>
                            <div className='contact-item'>
                                <img src="https://kamleshyadav.com/html/catering/html/assets/images/main/location.svg" alt="phone" width="100%" />
                            </div>
                            <div className='contact-info text-center'>
                                <h4 className='bold-7'>Location</h4>
                                <p>Plot No. 6, Sector 21, Greater Noida</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid p-0'>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1752.446899703991!2d77.4528871349845!3d28.542911675713796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20no.%20228%20Udhyog%20Kendra%201st%20Ecotech%203%2C%20Extension%2C%20Noida!5e0!3m2!1sen!2sin!4v1713355519819!5m2!1sen!2sin" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </div>
        </>
    )
}

export default Contact
