import React from 'react'
import '../../App.css'
import Search from './Search'
import User from './User'

export default function Left1() {
  return (
    <div className='w-[30%] border min-h-screen bg-slate-950 text-white border-white'>
        <h1 className='text-5xl text-green-600 py-3'><center><b>ChatApp</b></center></h1>
    <Search/>
    <User/>
    </div>
  )
}
