import React from 'react'
import './App.css'
import Left1 from './Home/Left1/Left1'
import Right1 from './Home/Right1/Right1'
import Logout from './Home/Left2/Logout'

export default function App() {
  return (
    <>
     <div className='border-black flex'>
      <Logout/>
     <Left1/>
     <Right1/>
     </div>
    </>
   
  )
}
