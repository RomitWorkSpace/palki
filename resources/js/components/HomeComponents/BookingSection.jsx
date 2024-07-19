import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BookingBg from 'imgPath/book-event-bg.jpg'

function BookingSection() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [formstatus, setFormStatus] = useState(null);

    const handleForm = async (formData) => {
        console.log(formData);
        const response = await axios.post('/api/submit-form', formData);
        if (response.status === 200){
            setFormStatus('Form submitted successfully, Thank you!');
            reset();
        }
    }

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
        <div className='container-fluid pt-5 pb-5 home-contact-bg' style={{backgroundImage:`url(${BookingBg})`}}>
            <h1 className='text-center clr-palki sm-text-shadow bold-7 font-charm'>Share Query</h1>
            <h6 className='text-center bold-9' data-aos="fade-right">Details are Safe With Us!</h6>

            <div className='container pt-5'>
                <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                {formstatus != null && (
                    <div className='alert alert-success'>{formstatus}</div>
                )}
                <form onSubmit={handleSubmit(handleForm)}>
                    <div className='row'>
                        <div className='col-md-6 mb-4'>
                            <div className='form-group'>
                                <label htmlFor="name">Name</label>
                                <input type="text" 
                                name="name" 
                                className='form-control' 
                                placeholder="Enter name" 
                                {...register("name",{
                                    required: true
                                })}
                                />

                                {errors.name?.type === "required" && (
                                     <small className='clr-red'>* This field is required</small>
                                )}
                            </div>
                        </div>

                        <div className='col-md-6 mb-4'>
                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <input type="email" 
                                name="email" 
                                className='form-control' 
                                placeholder="Enter Email" 
                                {...register("email",{
                                    required: true
                                })}
                                />
                                {errors.email?.type === "required" && (
                                     <small className='clr-red'>* This field is required</small>
                                )}
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='form-group'>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" 
                                name="phone" 
                                className='form-control' 
                                placeholder="Enter phone no" 
                                {...register("phone",{
                                    required: true
                                })}
                                />

                                {errors.phone?.type === "required" && (
                                     <small className='clr-red'>* This field is required</small>
                                )}
                            </div>
                        </div>
                        
                        <div className='col-md-4 mb-4'>
                            <div className='form-group'>
                            <label htmlFor="event">Query</label>
                                <select name="query" id="" className='form-control' {...register("query",{
                                    required: true
                                })}>
                                    <option value="">--- Type of Query ---</option>
                                    <option value="corporate_meals">Corporate Cafeteria Meals</option>
                                    <option value="industrial_meals">Industrial Canteen Meals</option>
                                    <option value="outdoor-catering">Outdoor Catering</option>
                                    <option value="bulk_backery">Bulk Bakery</option>
                                    <option value="consultancy">Consultancy</option>
                                    <option value="other">Any other</option>
                                </select>
                                {errors.query?.type === "required" && (
                                     <small className='clr-red'>* This field is required</small>
                                )}
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='form-group'>
                            <label htmlFor="person">No. of Pax</label>
                                <input type="number" 
                                name="person" 
                                className='form-control' 
                                placeholder="No. of Pax"
                                {...register("person",{
                                    required: false
                                })}
                                />
                            </div>
                        </div>
                        
                    </div>
                        <div className='mb-4 mt-4 text-center'>
                           <button type="submit" className='btn-palki'>Submit</button>
                        </div>
                </form>
                </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
        </>
    )
}

export default BookingSection
