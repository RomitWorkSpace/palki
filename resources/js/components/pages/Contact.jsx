import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';

import ContactBg from 'imgPath/booking-bg.jpg'
import Iframe from 'react-iframe'
import PageBanner from '../../common/PageBanner'
import mbanner from 'imgPath/banners/Contact-banner-mb.jpg'
import dbanner from 'imgPath/banners/Contact-banner.jpg'
import Breadcrumb from '../../common/Breadcrumb';

function Contact() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [formstatus, setFormStatus] = useState(null);

    const handleForm = async (formData) => {
        console.log(formData);
        const response = await axios.post('/api/contact-form', formData);
        if (response.status === 200){
            setFormStatus('Message has received successfully! Thank You');
            reset();
        }
    }

    const Banners = {mobile_banner : mbanner, desktop_banner : dbanner}
    return (
        <>
        <PageBanner props = {Banners} />
        <Breadcrumb page='Contact' />
        <div className='contact-section pt-5 pb-5' style={{backgroundImage: `url(${ContactBg})`}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 contact-inner'>
                    {formstatus != null && (
                        <div className='alert alert-success'>{formstatus}</div>
                    )}
                        <div className='contact-form'>
                            <form onSubmit={handleSubmit(handleForm)}>
                                <div className='row'>
                                    <div className='col-md-6 mb-4'>
                                        <input type="text" 
                                        name="name" 
                                        className='form-control' 
                                        placeholder="Enter your name" 
                                        {...register("name",{
                                            required: true
                                        })}
                                        />

                                        {errors.name?.type === "required" && (
                                            <small className='clr-red'>* This field is required</small>
                                        )}
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <input type="email" 
                                        name="email" 
                                        className='form-control' 
                                        placeholder="Enter your email" 
                                        {...register("email",{
                                            required: true
                                        })}
                                        />

                                        {errors.email?.type === "required" && (
                                            <small className='clr-red'>* This field is required</small>
                                        )}
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <input type="number" 
                                        name="phone" 
                                        className='form-control' 
                                        placeholder="Enter your Number" 
                                        {...register("phone",{
                                            required: true
                                        })}
                                        />

                                        {errors.phone?.type === "required" && (
                                            <small className='clr-red'>* This field is required</small>
                                        )}
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <input type="text" 
                                        name="subject" 
                                        className='form-control' 
                                        placeholder="Enter your subject" 
                                        {...register("subject",{
                                            required: true
                                        })}
                                        />

                                        {errors.subject?.type === "required" && (
                                            <small className='clr-red'>* This field is required</small>
                                        )}
                                    </div>
                                    <div className='col-12 mb-4'>
                                        <textarea name="message" 
                                        id="message" rows="5" 
                                        className='form-control' 
                                        placeholder="Your message..."
                                        {...register("message",{
                                            required: true
                                        })}
                                        ></textarea>

                                        {errors.message?.type === "required" && (
                                            <small className='clr-red'>* This field is required</small>
                                        )}
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
                                <p>+91-8860619770 / 71</p>
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
                                <p>info@palkifoods.co.in</p>
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
                                <p>Plot no. 228 Udhyog Kendra 1st Ecotech 3, Extension, Noida</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid p-0'>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.992276023362!2d77.4546050366629!3d28.54720800822492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55c26ffff89%3A0xaef9a254844ae6e7!2sPalki%20Food%20Services%20The%20Best%20Catering%20Services!5e0!3m2!1sen!2sin!4v1719900813814!5m2!1sen!2sin" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </div>
        </>
    )
}

export default Contact
