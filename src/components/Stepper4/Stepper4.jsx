import React from 'react';

const Stepper4 = () => {
    
    return (
        <div>

            <div className='flex justify-center items-center min-h-screen'>
                <button 
                    className="hover:shadow-form rounded-md bg-[#08ec1b] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                    Confirm Schedule Appointment
                </button>
            </div>



            <div className='flex justify-center items-center min-h-screen'>
                <div className='border bg-slate-100 text-center p-10 rounded-md'>

                <button 
                    className="hover:shadow-form rounded-md bg-[#08ec1b] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                    Thank you 
                </button>
                <h1 
                    className="hover:shadow-form rounded-md  py-3  text-center text-base font-semibold text-black outline-none"
                >
                    Your information is save successfully! 
                </h1>

                </div>
            </div>
        </div>
    );
};

export default Stepper4;