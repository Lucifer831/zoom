import React from 'react'
import '../../App.css'

export default function User() {
    const users = [
  { name: "Aashi Badal", email: "aashipaglu@gmail.com" ,img : '../../../public/Screenshot 2025-11-23 at 6.38.29 PM.png' },
  { name: "Aditya Badal", email: "aditya@gmail.com",img : '../../../public/Screenshot 2025-11-23 at 7.09.18 PM.png' },
  { name: "Gauri Badal", email: "gauri@gmail.com" , img : '../../../public/Screenshot 2025-11-23 at 7.09.50 PM.png'},
  { name: "Nidhi", email: "nidhi@gmail.com" ,img : '../../../public/Screenshot 2025-11-23 at 7.10.49 PM.png' },
  { name: "Manju", email: "manju@gmail.com",img : '../../../public/Screenshot 2025-11-23 at 7.11.10 PM.png' }
];

  return (
    <>
      <hr />
      <br />
      <div className="space-y-1 h-[400px] overflow-y-scroll scrollbar-hide ">
  {users.map((u, i) => (
    <div key={i} className="flex items-center space-x-4 hover:bg-slate-600 h-[60px] duration-300 px-6">

      <div className="avatar py-8">
        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-2 ring-offset-slate-900 overflow-hidden">
          <img src={u.img} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="text-white leading-tight">
        <h1 className="font-semibold">{u.name}</h1>
        <span className="text-sm opacity-70">{u.email}</span>
      </div>

    </div>
  ))}
</div>


    </>
  )
}
