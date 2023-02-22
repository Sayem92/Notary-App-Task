import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import arrow from '../../assets/right-arrow.svg';

const Stepper1 = ({ handleStepChange }) => {
    const [next, setNext] = useState(false);
    const [services, setServices] = useState('');
    const [signatures, setSignatures] = useState('');
    const [files, setFiles] = useState('');
    const [signers, setSigners] = useState('');
    const [witness, setWitness] = useState('');


    const handleAddInfo = () => {

        if (!services || !signatures || !files || !signers || !witness) {
            return toast.error("Please select a service and fill up input fields");
        }

        const stepper1Data = {
            servicesName: services,
            signaturesCount: signatures,
            filesCount: files,
            signersCount: signers,
            witness: witness
        }

        localStorage.setItem("stepper1Data", JSON.stringify({ stepper1Data }));
        setNext(true);
        setServices('');
        setSignatures('');
        setFiles('');
        setSigners('');
        setWitness('');
        toast.success("Please go to the next!!")

    }

    return (
        <div>
            <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
                {/* first section  */}
                <div className='space-y-4'>
                    <div className="md:col-span-2 lg:col-span-1" >

                        <div
                            onClick={() => setServices('Notary Singing Agent')}

                            className={services === "Notary Singing Agent" ? "h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-yellow-200"
                                :
                                "h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white"}>

                            <div>
                                <h5 className="text-2xl font-semibold text-gray-600 ">Notary Singing Agent</h5>
                                <p className="mt-2 text-gray-500">Suitable for those who have purchased a brand new car </p>
                                <p className="mt-4 font-semibold text-gray-700">View details <span>
                                    <img className='w-6 h-6 inline-block' src={arrow} alt="view arrow" /></span> </p>
                            </div>


                        </div>
                    </div>

                    <div>
                        <div
                            onClick={() => setServices('Remote Online Notary')}

                            className={services === "Remote Online Notary" ? "h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-yellow-200"
                                :
                                "h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white"}>

                            <div>
                                <h5 className="text-2xl font-semibold text-gray-600 ">Remote Online Notary</h5>

                                <p className="mt-2 text-gray-500">Suitable for those who already have a valid third party cover </p>
                                <p className="mt-4 font-semibold text-gray-700">View details <span>
                                    <img className='w-6 h-6 inline-block' src={arrow} alt="view arrow" /></span> </p>
                            </div>


                        </div>
                    </div>

                    <div>
                        <div
                            onClick={() => setServices('Mobile General Notary')}

                            className={services === "Mobile General Notary" ? "h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-yellow-200"
                                :
                                "h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white"}>

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
                            <input onChange={(e) => setSignatures(e.target.value)} type="text" className='w-14 h-10 pl-2 border border-gray-400 rounded' value={signatures} />
                        </div>

                        <div className='mt-7 flex justify-between items-center'>
                            <div>
                                <h1 className='text-xl font-normal'>How many files will you be uploading in the session</h1>
                            </div>
                            <input onChange={(e) => setFiles(e.target.value)} type="text" className='w-20 h-10 pl-2 border border-gray-400 rounded' value={files} />
                        </div>

                        <div className='mt-7 flex justify-between items-center'>
                            <div>
                                <h1 className='text-xl font-normal'>Number of Signers</h1>
                            </div>
                            <input onChange={(e) => setSigners(e.target.value)} type="text" className='w-20 h-10 pl-2 border border-gray-400 rounded' value={signers} />
                        </div>

                        <div className='mt-7 flex justify-between items-center'>
                            <div>
                                <h1 className='text-xl font-normal'>Do you Need Witness?</h1>
                                <p className='text-gray-500'>Do not enter anything if you are bring your own Witness</p>
                            </div>
                            <input onChange={(e) => setWitness(e.target.value)} type="text" className='w-14 h-10 pl-2 border border-gray-400 rounded' value={witness} />
                        </div>

                        <h5 className="mt-14 text-2xl font-bold text-gray-400 text-center">Your approximate Quote: $59</h5>

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
        </div>
    );
};

export default Stepper1;