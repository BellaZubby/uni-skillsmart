import { CldImage } from 'next-cloudinary'
import React from 'react'
import Counter from './Counter'

const userImages = [
    "https://res.cloudinary.com/dxveggtpi/image/upload/v1764237665/pexels-adedamola-adetoyi-503771-30410447_ijcppv.jpg",
    "https://res.cloudinary.com/dxveggtpi/image/upload/v1764237664/pexels-laker-5792641_z1rgzh.jpg",
    "https://res.cloudinary.com/dxveggtpi/image/upload/v1764237661/pexels-nappy-936090_igc2wf.jpg"
]

type UserProp = {
  className: string
}

const Users = ({className}: UserProp) => {
  return (
    <div className={`flex font-RC text-primary-100 gap-3 ${className}`}>
        <div className='flex'>
             {userImages.map((url, i) => (
                <div key={i} className='relative w-12 h-12 -ml-4 first:ml-0'>
                 <CldImage src={url} alt={`user${i}`} fill className='object-cover rounded-full border-2 border-primary-200'/>
                </div>
           
        ))}
        </div>
       <div>
        Trusted and used by <br/> <Counter target={22} suffix={'K+'}/> college students.
       </div>
    </div>
  )
}

export default Users