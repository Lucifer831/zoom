import React from 'react'
import { LuLogOut } from "react-icons/lu";


export default function Logout() {
  return (
    <>
     <div className='w-[4%] bg-slate-950 text-white flex flex-col justify-end'>
     <button>
     <LuLogOut className='text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300' />
    </button>

     </div>
    </>
   
  )
}
