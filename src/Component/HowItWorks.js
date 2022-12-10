import React from 'react'
import Process from './Process'

function HowItWorks() {
  return (
    <div className='h-full w-full'>
     <div className='bg-gray-400 h-screen'>
        <div className='bg-white h-2/3'>
            <Process></Process>
        </div>
        <div className='bg-green-400 h-screen'></div>
        <div className='bg-gray-400 h-2/3'></div>
        <div className='bg-black h-1/3'></div>
     </div>
    </div>
  )
}

export default HowItWorks
