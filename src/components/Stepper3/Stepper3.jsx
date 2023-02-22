import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import editProfile from '../../assets/edit-profile.svg'
import arrow from '../../assets/right-arrow.svg';


const Stepper3 = ({ handleStepChange }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [next, setNext] = useState(false);


    const handleAddInfo = (data) => {
        const location = data.location
        const date = data.date
        const time = data.time

        const stepper3Data = {
            location, date, time
        }


        if (!location || !date || !time) {
            return
        }

        localStorage.setItem("stepper3Data", JSON.stringify({ stepper3Data }))
        setNext(true);
        toast.success("Please go to the next!!")
        reset();


    }


    return (
        <div>
            <div className="flex items-center justify-start px-2 md:px-10 py-5">

                <div className="mx-auto w-full ">
                    <form onSubmit={handleSubmit(handleAddInfo)}>
                        <div className='mt-3 flex items-center border-b-2 mb-4 border-gray-400 pb-2'>
                            <img src={editProfile} className="w-6 h-6" alt="" />
                            <h1 className='ml-2 text-xl font-semibold'>Signing Location</h1>
                        </div>

                        <div className="-mx-3 ">
                            <div className="w-full px-3">
                                <div className="mb-5">
                                    <label
                                        htmlFor="location"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Enter Signers Location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        {...register("location", {
                                            required: "Signers Location is required"
                                        })}
                                        id="fName"
                                        placeholder="Enter Signers Location"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                                </div>
                            </div>


                        </div>



                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="date"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        {...register("date", {
                                            required: "Date is required"
                                        })}
                                        id="date"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.date && <p className='text-red-600'>{errors.date?.message}</p>}
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="time"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        {...register("time", {
                                            required: "Time is required"
                                        })}
                                        id="time"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.time && <p className='text-red-600'>{errors.time?.message}</p>}
                                </div>
                            </div>
                        </div>






                        <div className='flex justify-end mt-5'>

                            {
                                next === true ? "" :

                                    <button type="submit" onClick={handleAddInfo}
                                        className="hover:shadow-form rounded-md bg-[#08ec1b] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                    >
                                        Submit
                                    </button>
                            }


                            {
                                next === false ? "" :

                                    <div className=' mr-8'>
                                        <p className="mt-4 font-semibold text-gray-800">Next step
                                            <span onClick={handleStepChange} className='ml-2 p-1 pb-2 rounded-2xl bg-yellow-300'>
                                                <img className='cursor-pointer w-6 h-6 inline-block' src={arrow} alt="Next step" /></span>
                                        </p>
                                    </div>
                            }
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Stepper3;