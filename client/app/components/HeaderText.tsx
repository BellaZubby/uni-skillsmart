import React from 'react'

type Props = {
    children: React.ReactNode,
    className: string
}

const HeaderText = ({children, className}:Props) => {
  return (
    <h2 className={`text-3xl w-[90%] mx-auto font-bold text-primary-100 ${className}`}>{children}</h2>
  )
}

export default HeaderText