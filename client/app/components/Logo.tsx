import React from 'react'

type Props = {
  className?: string
}

const Logo = ({className}: Props) => {
  return (
    <h1  className={`text-primary-100 font-RC font-extrabold text-3xl cursor-pointer ${className}`}><span className='text-4xl text-primary-200'>U</span>ni-<span className='text-4xl text-primary-200'>S</span>kills<span className='text-4xl text-primary-200'>M</span>art</h1>
  )
}

export default Logo