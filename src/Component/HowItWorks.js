import React from 'react'
import Process from './Process'
import Reviews from './Reviews'
import Services from './Services'
import Footer from './Footer'

function HowItWorks() {
  return (
    <div className='h-full w-full'>
     <div className='bg-gray-400 h-screen'>
        <div className='bg-white h-2/3 mt-2'>
            <Process></Process>
        </div>
        <div className='bg-green-400 h-screen'>
          <Services></Services>
        </div>
        <div className='bg-gray-400 h-2/3'>
          <Reviews></Reviews>
        </div>
        <div className='bg-black h-1/3'>
          <Footer></Footer>
        </div>
     </div>
    </div>
  )
}

export default HowItWorks
