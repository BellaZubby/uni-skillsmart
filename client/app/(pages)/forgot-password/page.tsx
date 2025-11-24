"use client"
import React, { useState } from 'react'
import { CldImage } from 'next-cloudinary'
import Logo from '@/app/components/Logo'
import Link from 'next/link'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [validationError, setValidationError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        setValidationError("");
        setEmail(e.target.value);
    }

    // validate email

    const validateEmailInput = () => {
        if(!email.trim()) {
            setValidationError("Email is required");
            return false;

        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setValidationError("Email is invalid");
            return false;
        }
        setValidationError("");
        return true;
         
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        setSuccessMsg("");
        setError("");
        setValidationError("");

        if (validateEmailInput()) {
            console.log("Check email for password reset link")
        } 
    }
    
  return (
       
          <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen py-10 font-inter'>

        <div className="col-span-1 relative w-full hidden md:block md:mt-24 lg:mt-0">
              <CldImage alt={'password-avatar'} src={'https://res.cloudinary.com/dxveggtpi/image/upload/v1763977679/19198908_qhkkwf.jpg'} width={600} height={600}
              className="object-cover rounded-lg"/>
              {/* <CldImage src='https://res.cloudinary.com/dxveggtpi/image/upload/v1763977640/Wavy_Gen-01_Single-07_oqb3tx.jpg' alt='image' width={500} height={500}/> */}
        </div>
      
        <div className='col-span-1 px-2 md:px-0 md:mt-24 lg:mt-0'>
             <Link href={"/"}><Logo className ="text-right mr-10"/></Link>
             <div className='mt-20 flex flex-col gap-6 items-center justify-center'>
                <h2 className='font-bold text-primary-100'>Forgot Password</h2>
        <form onSubmit={handleSubmit} className='border border-gray-200 px-3 py-5'>
            <p className='xs:text-sm text-[12px] mb-4 text-primary-100 font-semibold'>Enter the email address you used to register with Uni-SkillsMart</p>
            <div>
                <input 
            type='text'
            value={email}
            onChange={handleChange}
            placeholder='Enter email id'
            className='placeholder:text-sm border w-full border-primary-200 pl-3 py-2 outline-0 mb-2'
            />
            {validationError && <p className='text-sm text-red-500 ml-3'>{validationError}</p>}
            {error && <p className='text-sm text-red-500 ml-3'>{error}</p>}
            {successMsg && <p className='text-sm text-green-500 ml-3'>{successMsg}</p>}
            </div>
            

            <button className='bg-primary-100 mt-4 text-white py-2 px-2 w-full rounded-md transition-all duration-300 ease-in-out hover:bg-primary-200 hover:text-primary-100 font-semibold cursor-pointer'>Send me instructions</button>

        </form>
            </div>
            
        </div>
       
    </div>
  )
}

export default ForgotPassword
