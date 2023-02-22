import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import editProfile from '../../assets/edit-profile.svg'
import arrow from '../../assets/right-arrow.svg';

const Stepper2 = ({ handleStepChange }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [next, setNext] = useState(false);


    const handleAddInfo = (data) => {
        const fullName = data.fullName;
        const phoneNumber = data.phoneNumber;
        const email = data.email;

        const companyName = data.companyName;
        const agentName = data.agentName;
        const companyEmail = data.cemail;
        const companyPhone = data.cPhoneNumber;

        const loanNo = data.loanNo;
        const propertyAddress = data.propertyAddress


        const stepper2Data = {
            fullName, phoneNumber, email,
            companyName, agentName, companyEmail, companyPhone,
            loanNo, propertyAddress
        }


        if (!fullName || !phoneNumber || !email ||
            !companyName || !agentName || !companyEmail || !companyPhone ||
            !loanNo || !propertyAddress) {
            return
        }

        localStorage.setItem("stepper2Data", JSON.stringify({ stepper2Data }))
        setNext(true);
        toast.success("Please go to the next")
        reset();


    }

    return (
        <div>

            <div className="flex items-center justify-start px-10 py-5">

                <div className="mx-auto w-full ">
                    <form onSubmit={handleSubmit(handleAddInfo)}>
                        <div className='mt-3 flex items-center border-b-2 mb-4 border-gray-400 pb-2'>
                            <img src={editProfile} className="w-6 h-6" alt="" />
                            <h1 className='ml-2 text-xl font-semibold'>Signers Details</h1>
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="fName"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        {...register("fullName", {
                                            required: "Full Name is required"
                                        })}
                                        id="fName"
                                        placeholder="Full Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.fullName && <p className='text-red-600'>{errors.fullName?.message}</p>}
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="pNumber"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        type="number"
                                        name="phoneNumber"
                                        {...register("phoneNumber", {
                                            required: "Phone Number is required"
                                        })}
                                        id="pNumber"
                                        placeholder="Phone Number"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.phoneNumber && <p className='text-red-600'>{errors.phoneNumber?.message}</p>}
                                </div>
                            </div>

                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                        id="email"
                                        placeholder="Enter email address"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>
                            </div>
                        </div>


                        <div className='mt-3 flex items-center border-b-2 mb-4 border-gray-400 pb-2'>
                            <img src={editProfile} className="w-6 h-6" alt="" />
                            <h1 className='ml-2 text-xl font-semibold'>Title Company Details</h1>
                        </div>


                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="cName"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        {...register("companyName", {
                                            required: "Company Name is required"
                                        })}
                                        id="cName"
                                        placeholder="Company Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.companyName && <p className='text-red-600'>{errors.companyName?.message}</p>}
                                </div>
                            </div>

                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="aName"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Agent Name
                                    </label>
                                    <input
                                        type="text"
                                        name="agentName"
                                        {...register("agentName", {
                                            required: "Agent Name is required"
                                        })}
                                        id="aName"
                                        placeholder="Agent Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.agentName && <p className='text-red-600'>{errors.agentName?.message}</p>}
                                </div>
                            </div>

                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="cemail"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="cemail"
                                        {...register("cemail", {
                                            required: "Company email is required"
                                        })}
                                        id="cemail"
                                        placeholder="Enter email address"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.cemail && <p className='text-red-600'>{errors.cemail?.message}</p>}
                                </div>
                            </div>

                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="cpNumber"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        type="number"
                                        name="cPhoneNumber"
                                        {...register("cPhoneNumber", {
                                            required: "Company phone number is required"
                                        })}
                                        id="cpNumber"
                                        placeholder="Phone Number"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.cPhoneNumber && <p className='text-red-600'>{errors.cPhoneNumber?.message}</p>}
                                </div>
                            </div>

                        </div>



                        <div className='mt-3 flex items-center border-b-2 mb-4 border-gray-400 pb-2'>
                            <img src={editProfile} className="w-6 h-6" alt="" />
                            <h1 className='ml-2 text-xl font-semibold'>Order Info</h1>
                        </div>


                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="loanNo"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Escrow # / Loan No
                                    </label>
                                    <input
                                        type="number"
                                        name="loanNo"
                                        {...register("loanNo", {
                                            required: "Escrow # / Loan No is required"
                                        })}
                                        id="loanNo"
                                        placeholder="Escrow # / Loan No"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.loanNo && <p className='text-red-600'>{errors.loanNo?.message}</p>}
                                </div>
                            </div>

                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="PropertyAddress"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Property Address
                                    </label>
                                    <input
                                        type="text"
                                        name="propertyAddress"
                                        {...register("propertyAddress", {
                                            required: "Property Address is required"
                                        })}
                                        id="PropertyAddress"
                                        placeholder="Property Address"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    {errors.propertyAddress && <p className='text-red-600'>{errors.propertyAddress?.message}</p>}
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

export default Stepper2;