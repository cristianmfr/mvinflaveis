'use client' // This directive marks the component as a Client Component in Next.js

import React from 'react'

// Main App component
export function BannerSection() {
  const videoUrl =
    'https://pub-0c43a5b91b2c48b3a54b09c43b3d0b19.r2.dev/Inflatable_Ad_Video_Creation_Request.mp4' // Placeholder video URL

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center z-0">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => console.error('Video failed to load:', e)}
      >
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-58 py-38 bg-primary/20 backdrop-blur-md bg-opacity-50 rounded-2xl shadow-lg m-4">
        <h1 className="text-5xl font-bold text-secondary mb-4 leading-tight">
          MV Infláveis
        </h1>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl">
          A maior fábrica de infláveis do Brasil!
        </p>
        <button className="w-[24rem] bg-secondary cursor-pointer text-white font-black py-3 px-8 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 uppercase">
          Ver produtos
        </button>
      </div>

      {/* Optional: Overlay for better text readability on busy videos */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 z-0"></div>
    </div>
  )
}
