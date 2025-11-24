"use client"

import Logo from '@/app/components/Logo'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const VerifyAccount = () => {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    
    const router = useRouter();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        setOtp(e.target.value);
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccessMsg("");

        if(!otp.trim()) {
            return setError("Please enter OTP");
        }

        if (otp.length !== 6) {
            return setError("Invalid OTP");
        }

        console.log("Account successfully verified");
        router.replace("/dashboard");
    }
  return (
    <div>
        
          <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen py-10 font-inter'>

        <div className="col-span-1 relative w-full hidden md:block md:mt-24 lg:mt-0">
              {/* <CldImage alt={'password-avatar'} src={'https://res.cloudinary.com/dxveggtpi/image/upload/v1763977679/19198908_qhkkwf.jpg'} width={600} height={600}
              className="object-cover rounded-lg"/> */}
              <CldImage src='https://res.cloudinary.com/dxveggtpi/image/upload/v1763977640/Wavy_Gen-01_Single-07_oqb3tx.jpg' alt='image' width={600} height={500}/>
        </div>
      
        <div className='col-span-1 px-2 md:px-0 md:mt-24 lg:mt-0'>
             <Link href={"/"}><Logo className ="text-right mr-10"/></Link>
             <div className='mt-20 flex flex-col gap-6 items-center justify-center'>
                <h2 className='font-bold text-primary-100'>Account Verification</h2>
        <form onSubmit={handleSubmit} className='border border-gray-200 px-3 py-5'>
            <p className='xs:text-sm text-[12px] mb-4 text-primary-100 font-semibold'>Enter the 6-digit OTP sent to your registered email.</p>
            <div>
                <input 
                type='text'
                value={otp}
                onChange={handleChange}
            placeholder='Enter OTP'
            className='placeholder:text-sm border w-full border-primary-200 pl-3 py-2 outline-0 mb-2'
            />
            {error && <p className='text-sm text-red-500 ml-3'>{error}</p>}
            {successMsg && <p className='text-sm text-green-500 ml-3'>{successMsg}</p>}
            </div>
            

            <button className='bg-primary-100 mt-4 text-white py-2 px-2 w-full rounded-md transition-all duration-300 ease-in-out hover:bg-primary-200 hover:text-primary-100 font-semibold cursor-pointer'>Verify</button>
            <p className="text-[12px] text-gray-500 mt-4">Didn't receive a code? <Link href={""} className="text-primary-100 font-semibold">Resend OTP</Link></p>
        </form>
            </div>
            
        </div>
       
    </div>
    </div>
  )
}

export default VerifyAccount