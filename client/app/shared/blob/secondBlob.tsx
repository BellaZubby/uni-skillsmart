import React from 'react'

const SecondBlob = () => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#001F3F" />
      <stop offset="100%" stopColor="#001F3F" />
    </linearGradient>
  </defs>

      <path fill="url(#blobGradient)" d="M44.3,-43.3C60.7,-27.9,79.5,-14,83.3,3.7C87,21.5,75.7,42.9,59.3,55.8C42.9,68.7,21.5,73,0.8,72.2C-19.9,71.5,-39.8,65.6,-49.8,52.7C-59.8,39.8,-59.9,19.9,-61.5,-1.5C-63,-22.9,-65.9,-45.9,-55.9,-61.3C-45.9,-76.7,-22.9,-84.6,-4.5,-80.2C14,-75.7,27.9,-58.8,44.3,-43.3Z" transform="translate(100 100)" />
    </svg>
  )
}

export default SecondBlob

