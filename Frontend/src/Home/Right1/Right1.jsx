import React from 'react'
import Chatuser from './Chatuser'
import Message from './Message'
import Type from './Type'
import '../../App.css'

export default function Right1() {
  return (
    <div className="w-[70%] min-h-screen bg-slate-950 text-white border-l border-white flex flex-col">

      {/* TOP BAR */}
      <div className="h-[8vh]">
        <Chatuser />
      </div>

      {/* MESSAGE AREA (scrollable) */}
      <div className="flex-1 overflow-y-scroll px-4 py-2 space-y-4">
        <Message />
      </div>

      {/* TYPE BOX */}
      <div className="h-[8vh] p-4">
        <Type />
      </div>

    </div>
  )
}
