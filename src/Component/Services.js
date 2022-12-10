import React from 'react'

function Services() {
  return (
    <div className='h-full w-full  '>
     <div className='h-1/5 bg-white flex items-end justify-center'>
        <h1 className='text-drymeBlue text-6xl font-bold 	underline underline-offset-8 text-drymeBlue'>Our Services</h1>
     </div >
<div className='h-4/5 w-full flex space-x-24 items-center justify-center bg-white'>
    <div className='h-3/4 w-1/5  drop-shadow-2xl border-2 bg-white'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src="https://smart-dhopa-online-laundry-app.web.app/static/media/wash-iron.a47c473a.jpeg"></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Wash & Fold</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>All your regular wear garments will be washed, steam ironed and neatly packed for delivery.</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl'>Continue</button>
        </div>
        </div>
    </div>
    <div className='h-3/4 w-1/5  drop-shadow-2xl border-2 bg-white'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src="https://smart-dhopa-online-laundry-app.web.app/static/media/iron-fold.9640f0d2.jpg"></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Iron & Fold</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl'>Continue</button>
        </div>
        </div>
    </div>
    <div className='h-3/4 w-1/5  drop-shadow-2xl border-2 bg-white'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src="https://smart-dhopa-online-laundry-app.web.app/static/media/dry-cleaning.6a5bef2e.webp"></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Dry Cleaning</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>All your sensitive and special garments will be individually treated for any stains and dry cleaned.</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl'>Continue</button>
        </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Services
