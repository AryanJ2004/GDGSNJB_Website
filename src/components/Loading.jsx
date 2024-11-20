import React from 'react'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-32 h-32 relative">
        <div className="w-12 h-12 bg-blue-500 rounded-full absolute top-0 left-0 animate-bounce" style={{animationDelay: '-0.3s'}}></div>
        <div className="w-12 h-12 bg-red-500 rounded-full absolute top-0 right-0 animate-bounce" style={{animationDelay: '-0.2s'}}></div>
        <div className="w-12 h-12 bg-yellow-500 rounded-full absolute bottom-0 left-0 animate-bounce" style={{animationDelay: '-0.1s'}}></div>
        <div className="w-12 h-12 bg-green-500 rounded-full absolute bottom-0 right-0 animate-bounce"></div>
      </div>
    </div>
  )
}