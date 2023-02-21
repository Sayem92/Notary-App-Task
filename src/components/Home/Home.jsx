import { useQuery } from '@tanstack/react-query';
import React from 'react';
import logo from '../../assets/bolt-circle.svg';
import arrow from '../../assets/right-arrow.svg';

import sms from '../../assets/profile/sms.svg';
import call from '../../assets/profile/call.svg';
import location from '../../assets/profile/location.svg';
import user from '../../assets/profile/user.svg';
import Loading from '../Loading/Loading';


const Home = () => {

    const { data = [], isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            try {

                const res = await fetch(`https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse`, {
                    method: "POST"
                })
                const data = await res.json();
                return data;

            }
            catch (err) {
                console.log(err);
            }
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    };

    const personalInfo = data?.response?.personalInfo;
    const { photoURL, firstName, lastName, email, phoneNumber, createdOn, businessDetails
    } = personalInfo;

    // console.log(data?.response?.personalInfo);
    // console.log(businessDetails);


    return (
        <div className="">
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

                <aside className='bg-blue-900 pt-5 pb-10 md:col-span-3 lg:col-auto rounded'>
                    <div>
                        <div className="mr-24 px-6 py-4">
                            <div className='flex justify-center items-center'>
                                <img src={logo} className="w-10" alt="BeInsurance logo" />
                                <h1 className='ml-3 text-xl font-bold text-yellow-300'>
                                    BeInsurance
                                </h1>
                            </div>
                        </div>

                        <div className="mr-18 text-center">
                            <img src={photoURL} alt="userPhoto" className="w-24 h-24 m-auto rounded-full object-cover md:w-28 md:h-28 lg:w-28 lg:h-28" />
                            <h5 className="hidden mt-4 text-xl font-semibold text-gray-200 lg:block">{firstName} {lastName}</h5>
                        </div>

                        <ul className="px-10 md:px-64 lg:px-10 space-y-2 tracking-wide mt-8">
                            <li>
                                <div className="flex items-center space-x-4 rounded-md text-gray-200 group">
                                    <img src={sms} className="w-6 " alt="" />
                                    <span>{email}  </span>
                                </div>

                                <div className="mt-5 flex items-center space-x-4 rounded-md text-gray-200 group">
                                    <img src={call} className="w-6" alt="" />
                                    <span>{phoneNumber}</span>
                                </div>

                                <div className="mt-5 flex items-center space-x-4 rounded-md text-gray-200 group">
                                    <img src={location} className="w-6 " alt="" />
                                    <span>{businessDetails?.businessAddress} </span>
                                </div>

                                <div className="mt-5 flex items-center space-x-4 rounded-md text-gray-200 group">
                                    <img src={user} className="w-6 " alt="" />
                                    <span>Insurance Id {createdOn} </span>
                                </div>
                            </li>

                        </ul>
                    </div>
                </aside>


                <div className='col-span-3 mb-10'>

                    <div className="px-6 pt-6 2xl:container">
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

                                    <h5 className="mt-14 text-2xl font-bold text-gray-400 text-center">Your approximate Quote: $55</h5>

                                </div>


                            </div>
                        </div>
                    </div>



                    <div className='flex justify-end mr-8 mt-4'>
                        <p className="mt-4 font-semibold text-gray-800">Next step <span className='p-1 pb-2 rounded-2xl bg-yellow-300'>
                            <img className=' w-6 h-6 inline-block' src={arrow} alt="Next step" /></span> </p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Home;