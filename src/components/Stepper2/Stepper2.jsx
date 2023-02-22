import React from 'react';
import { useForm } from 'react-hook-form';
import editProfile from '../../assets/edit-profile.svg'
import arrow from '../../assets/right-arrow.svg';

const Stepper2 = ({handleStepChange}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const handleAddInfo = (data)=>{
        
    }

    return (
        <div>
      
<div class="flex items-center justify-start px-10 py-5">

  <div class="mx-auto w-full ">
    <form onSubmit={handleSubmit(handleAddInfo)}>
        <div className='mt-3 flex items-center border-b-2 mb-4 border-gray-400 pb-2'>
         <img src={editProfile} className="w-6 h-6" alt="" />
         <h1 className='ml-2 text-xl font-semibold'>Signers Details</h1>
        </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]"
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
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
             {errors.fullName && <p className='text-red-600'>{errors.fullName?.message}</p>}
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="pNumber"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone number
            </label>
            <input
              type="number"
              name="phoneNumber"
              id="pNumber"
              placeholder="Phone Number"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>


      <div className='mt-3 flex items-center border-b-2 mb-4 border-gray-400 pb-2'>
         <img src={editProfile} className="w-6 h-6" alt="" />
         <h1 className='ml-2 text-xl font-semibold'>Title Company Details</h1>
        </div>


        <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="cName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="cName"
              placeholder="Company Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="aName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
            Agent Name
            </label>
            <input
              type="text"
              name="agentName"
              id="aName"
              placeholder="Agent Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="cemail"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="email"
              name="cemail"
              id="cemail"
              placeholder="Enter email address"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="cpNumber"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone number
            </label>
            <input
              type="number"
              name="cPhoneNumber"
              id="cpNumber"
              placeholder="Phone Number"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

      </div>



      <div className='mt-3 flex items-center border-b-2 mb-4 border-gray-400 pb-2'>
         <img src={editProfile} className="w-6 h-6" alt="" />
         <h1 className='ml-2 text-xl font-semibold'>Order Info</h1>
        </div>


        <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="loanNo"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
             Escrow # / Loan No
            </label>
            <input
              type="number"
              name="loanNo"
              id="loanNo"
              placeholder="Escrow # / Loan No"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="PropertyAddress"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
             Property Address
            </label>
            <input
              type="text"
              name="propertyAddress"
              id="PropertyAddress"
              placeholder="Property Address"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

      </div>


      

      <div className='flex justify-end mr-8 mt-4'>
                        <p className="mt-4 font-semibold text-gray-800">Next step
                            <span onClick={handleStepChange} className='ml-2 p-1 pb-2 rounded-2xl bg-yellow-300'>
                                <img className=' w-6 h-6 inline-block' src={arrow} alt="Next step" /></span>
                        </p>
                    </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Stepper2;