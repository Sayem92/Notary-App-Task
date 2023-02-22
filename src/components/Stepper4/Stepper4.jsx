import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Stepper4 = ({ handleStepChange }) => {
    const [data, setData] = useState([]);
    const [confirm, setConfirm] = useState('');

    useEffect(() => {
        const stepper1Data = localStorage.getItem("stepper1Data");
        const stepper2Data = localStorage.getItem("stepper2Data");
        const stepper3Data = localStorage.getItem("stepper3Data");

        const data1 = JSON.parse(stepper1Data);
        const data2 = JSON.parse(stepper2Data);
        const data3 = JSON.parse(stepper3Data);

        const allData = [data1, data2, data3];
        setData(allData);

    }, []);





    const handleSubmitData = () => {

        fetch(`https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ response: data })

        })
            .then((response) => response.json())
            .then(data => {
                setConfirm("ok")
                toast.success(data?.msg)
                console.log(data);
            })
    }



    return (
        <div>

            {
                confirm === 'ok' ?
                    //    confirm sms 
                    <div className='flex justify-center items-center min-h-screen'>
                        <div className='border bg-slate-100 text-center p-10 rounded-md'>

                            <button onClick={handleStepChange}
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

                    :

                    <div className='flex justify-center items-center min-h-screen'>
                        <button onClick={handleSubmitData}
                            className="hover:shadow-form rounded-md bg-[#08ec1b] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Confirm Schedule Appointment
                        </button>
                    </div>

            }

        </div>
    );
};

export default Stepper4;