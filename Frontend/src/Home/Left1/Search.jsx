import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <>
      <div className='px-6 py-4'>
        <div className='flex space-x-3'>

          {/* Outer Box */}
          <div className="text-white p-4 rounded-lg flex space-x-3 w-[80%] bg-slate-900">

            {/* SEARCH BAR */}
            <label className="input input-bordered flex items-center gap-2 w-full "> 
              <svg
                className="h-5 w-5 opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>

              <input 
                type="search"
                required
                placeholder="Search"
                className="grow bg-slate-900 text-white 
             focus:outline-none focus:border-transparent focus:ring-0"
              />
            </label>
          </div>

          {/* SEARCH BUTTON */}
          <button>
            <FaSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300' />
          </button>

        </div>
      </div>
    </>
  )
}
