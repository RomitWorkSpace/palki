import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import axios from 'axios';

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
            setFormStatus('Form submit successfully');
            reset();
        }
    }

    return (
        <>
        <div className='container-fluid pt-5 pb-5 home-contact-bg'>
            <h4 className='text-center clr-palki bold-7'>Ask Query</h4>
            <h2 className='text-center bold-9'>Where You Want Our Services</h2>

            <div className='container pt-5'>
                <form onSubmit={handleSubmit(handleForm)}>
                    <div className='row'>
                        <div className='col-md-4 mb-4'>
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
                            <label htmlFor="event">Query</label>
                                <select name="query" id="" className='form-control' {...register("query",{
                                    required: true
                                })}>
                                    <option value="">--- Nature of Query ---</option>
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
                            <label htmlFor="person">Person</label>
                                <select name="person" id="" className='form-control' {...register("person",{
                                    required: true
                                })}>
                                    <option value="">no. of person</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                {errors.person?.type === "required" && (
                                     <small className='clr-red'>* This field is required</small>
                                )}
                            </div>
                        </div>
                        
                        <div className='col-md-4 mb-4 text-center'>
                           <button type="submit" className='btn-palki'>Submit</button>
                        </div>
                        
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
}

export default BookingSection
