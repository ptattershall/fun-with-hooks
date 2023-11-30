"use client"
import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div className='pt-4 flex flex-col h-4 space-y-2'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setDisplay(!display)}>Toggle Display</button>
        {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer