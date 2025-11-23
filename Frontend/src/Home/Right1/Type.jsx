import React from 'react'
import { IoSend } from "react-icons/io5";

export default function Type() {
  return (
    <div className="flex items-center space-x-3">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full bg-gray-800 text-white"
      />
      <button>
        <IoSend className="text-4xl bg-amber-600 p-2 rounded-lg hover:bg-gray-500 duration-300" />
      </button>
    </div>
  )
}
