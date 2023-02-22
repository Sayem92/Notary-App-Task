import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import logo from '../../assets/bolt-circle.svg';
import leftArrow from '../../assets/left-arrow-back.svg';


import sms from '../../assets/profile/sms.svg';
import call from '../../assets/profile/call.svg';
import location from '../../assets/profile/location.svg';
import user from '../../assets/profile/user.svg';
import Loading from '../Loading/Loading';
import Stepper1 from '../Stepper1/Stepper1';
import Stepper2 from '../Stepper2/Stepper2';


const Home = () => {
    const [step1] = useState('1');
    const [step2, setStep2] = useState('');
    const [step3, setStep3] = useState('');
    const [step4, setStep4] = useState('');

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

    // console.log(data);

    const handleStepChange = () => {
        if (step1) {
            setStep2('2')
        }
        if (step2) {
            setStep3('3')
        }
        if (step3) {
            setStep4('4')
        }
    }

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
                            <h5 className="mt-4 text-3xl font-bold text-gray-200 lg:block">{firstName} {lastName}</h5>
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

                        <div className='flex justify-start gap-5 mb-8'>
                            <img src={leftArrow} className='mt-2 w-6 h-6' alt="" />
                            <div>
                                <h1 className='font-semibold text-2xl'>New Appointment Request</h1>
                                <p>Some great coverage for less</p>
                            </div>
                        </div>


                        {/* steps  */}
                        <div className=" my-4 border-b-2 pb-4">
                            <div className="flex pb-3">
                                {/* start  */}
                                <div className="flex-1">
                                    <div className="w-5 h-5 my-3 bg-violet-500 border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center">
                                        <span className="text-black text-center w-full">
                                        </span>
                                    </div>
                                </div>


                                <div className="w-1/6 align-center items-center align-middle content-center flex">
                                    <div className="w-full bg-violet-500 rounded items-center align-middle align-center flex-1">
                                        {
                                            step1 === '1' ?

                                                <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded  width: 100%" ></div>
                                                :

                                                <div className="bg-gray-300 text-xs leading-none py-1 text-center text-grey-darkest rounded  width: 100%" ></div>
                                        }
                                    </div>
                                </div>

                                {/* first  */}

                                <div className="flex-1">
                                    <div
                                        className={step1 ? "w-10 h-10 bg-violet-500 border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center" : "w-10 h-10 bg-violet-200 border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center"}

                                    >
                                        <span className="text-white text-center w-full">
                                            1
                                        </span>
                                    </div>
                                </div>


                                <div className="w-1/6 align-center items-center align-middle content-center flex">
                                    <div className="w-full bg-violet-500 rounded items-center align-middle align-center flex-1">

                                        {
                                            step2 === '2' ?


                                                <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded  width: 100%" ></div>
                                                :
                                                <div className="bg-gray-300 text-xs leading-none py-1 text-center text-grey-darkest rounded  width: 100%" ></div>
                                        }
                                    </div>
                                </div>


                                {/* second  */}

                                <div className="flex-1">
                                    <div className={step2 ? "w-10 h-10 bg-violet-500 border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center" : "w-10 h-10 bg-violet-200 border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center"}>
                                        <span className="text-white text-center w-full">
                                            2</span>
                                    </div>
                                </div>

                                <div className="w-1/6 align-center items-center align-middle content-center flex">
                                    <div className="w-full bg-violet-500 rounded items-center align-middle align-center flex-1">

                                        {
                                            step3 === '3' ?

                                                <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded  width: 100%" ></div>
                                                :
                                                <div className="bg-gray-300 text-xs leading-none py-1 text-center text-grey-darkest rounded  width: 100%" ></div>
                                        }
                                    </div>
                                </div>

                                {/* third */}

                                <div className="flex-1">
                                    <div className={step3 ? "w-10 h-10 bg-violet-500 border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center" : "w-10 h-10 bg-violet-200 border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center"}>
                                        <span className="text-white text-center w-full">
                                            3</span>
                                    </div>
                                </div>


                                <div className="w-1/6 align-center items-center align-middle content-center flex">
                                    <div className="w-full bg-violet-500 rounded items-center align-middle align-center flex-1">

                                        {
                                            step4 === '4' ?

                                                <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded  width: 100%" ></div>
                                                :
                                                <div className="bg-gray-300 text-xs leading-none py-1 text-center text-grey-darkest rounded  width: 100%" ></div>
                                        }
                                    </div>
                                </div>

                                {/* fourth  */}
                                <div className="flex-1">
                                    <div className={step4 ? "w-10 h-10 bg-violet-500 border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center" : "w-10 h-10 bg-violet-200 border-2 border-grey-light mx-auto rounded-full text-lg text-black flex items-center"}>
                                        <span className="text-white text-center w-full">
                                            4</span>
                                    </div>
                                </div>

                            </div>

                        </div>


                        {/* change section  */}
                        {
                            step1 && !step2 &&
                            <Stepper1
                                handleStepChange={handleStepChange}
                            ></Stepper1>
                        }
                        {
                            step2 && step1 === '1' &&
                            <Stepper2
                                handleStepChange={handleStepChange}
                            ></Stepper2>
                        }


                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;