import React from 'react';
import arrow from '../../assets/right-arrow.svg';

const Stepper1 = () => {
    return (
        <div>
            <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
                            {/* first section  */}
                            <div className='space-y-4'>
                                <div className="md:col-span-2 lg:col-span-1" >
                                    <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">

                                        <div>
                                            <h5 className="text-2xl font-semibold text-gray-600 ">Notary Singing Agent</h5>

                                            <p className="mt-2 text-gray-500">Suitable for those who have purchased a brand new car </p>
                                            <p className="mt-4 font-semibold text-gray-700">View details <span>
                                                <img className='w-6 h-6 inline-block' src={arrow} alt="view arrow" /></span> </p>
                                        </div>


                                    </div>
                                </div>

                                <div>
                                    <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">

                                        <div>
                                            <h5 className="text-2xl font-semibold text-gray-600 ">Remote Online Notary</h5>

                                            <p className="mt-2 text-gray-500">Suitable for those who already have a valid third party cover </p>
                                            <p className="mt-4 font-semibold text-gray-700">View details <span>
                                                <img className='w-6 h-6 inline-block' src={arrow} alt="view arrow" /></span> </p>
                                        </div>


                                    </div>
                                </div>

                                <div>
                                    <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">

                                        <div>
                                            <h5 className="text-2xl font-semibold text-gray-600 ">Mobile General Notary</h5>

                                            <p className="mt-2 text-gray-500">Suitable for those who use the car infrequently </p>

                                            <p className="mt-4 font-semibold text-gray-700">View details <span>
                                                <img className='w-6 h-6 inline-block' src={arrow} alt="view arrow" /></span> </p>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            {/* second section  */}
                            <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">

                                <div>
                                    <h5 className="text-2xl font-semibold text-gray-600 text-center">Calculate your Costs for RON!</h5>

                                    <div className='mt-7 flex justify-between items-center'>
                                        <div>
                                            <h1 className='text-xl font-normal'>No of Extra Signatures</h1>
                                            <p className='text-gray-500'>Please enter zero, if only one signature is required</p>
                                        </div>
                                        <input type="text" className='w-14 h-10 border border-gray-400 rounded' />
                                    </div>

                                    <div className='mt-7 flex justify-between items-center'>
                                        <div>
                                            <h1 className='text-xl font-normal'>How many files will you be uploading in the session</h1>
                                        </div>
                                        <input type="text" className='w-20 h-10 border border-gray-400 rounded' />
                                    </div>

                                    <div className='mt-7 flex justify-between items-center'>
                                        <div>
                                            <h1 className='text-xl font-normal'>Number of Signers</h1>
                                        </div>
                                        <input type="text" className='w-20 h-10 border border-gray-400 rounded' />
                                    </div>

                                    <div className='mt-7 flex justify-between items-center'>
                                        <div>
                                            <h1 className='text-xl font-normal'>Do you Need Witness?</h1>
                                            <p className='text-gray-500'>Do not enter anything if you are bring your own Witness</p>
                                        </div>
                                        <input type="text" className='w-14 h-10 border border-gray-400 rounded' />
                                    </div>

                                    <h5 className="mt-14 text-2xl font-bold text-gray-400 text-center">Your approximate Quote: $59</h5>

                                </div>


                            </div>
                        </div>
        </div>
    );
};

export default Stepper1;