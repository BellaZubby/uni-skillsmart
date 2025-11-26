import React from 'react'


const services = [
    "Repairs",
    "Delivery",
    "Consulting",
    "Training",
    "Support",
    "Installation",
    "Maintenance",
]

const ServicesCarousel = () => {
  return (
    <div className='absolute bottom-24 w-full overflow-x-hidden'>
        <div className='flex animate-marquee space-x-8'>
            {services.map((service, i) => (
                <span key={i} className='px-4 py-2 text-md font-cabin font-medium text-primary-100'>
                    {service}
                </span>
            ))}
            {/* duplicate once for smoother scroll */}
            {services.map((service, i) => (
                <span key={`dup-${i}`} className='px-4 py-2 text-md font-cabin font-medium text-primary-100'>
                    {service}
                </span>
            ))}
        </div>
    </div>
  )
}

export default ServicesCarousel