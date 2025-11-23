import React from 'react'

export default function Chatuser() {
  return (
    <>
      <div className="flex items-center space-x-4 px-4 py-4 bg-gray-900 hover:bg-gray-600 duration-300 h-[8vh]">

        {/* Avatar */}
        <div className="avatar">
          <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-2 ring-offset-slate-900 overflow-hidden">
            <img
              src="../../../public/Screenshot 2025-11-23 at 6.38.29 PM.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-white leading-tight">
          <h1 className="font-semibold text-lg">
            Aashi Badal ❤️
          </h1>
          <span className="text-sm opacity-80">
            Online 🟢
          </span>
        </div>

      </div>
    </>
  )
}
