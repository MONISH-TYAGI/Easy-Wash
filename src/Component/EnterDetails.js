import React from 'react'
import Navbar from './Navbar'

function EnterDetails() {
  return (
    <>
    <Navbar/>
  
<div className=" w-full bg-white  mt-32  p-4 ">
    <div className="w-full  p-2">
        <div className='flex flex-column items-start '>
    <span  className='ml-1'>Name</span>
            <input type="text" className='form-control rounded-md' required
 name="Name"   />
 </div>
            <br />
            <div className='flex flex-column items-start '>
            <span  className='ml-1'>Email</span>
            <input type="email" className='form-control rounded-md' required
                name="Email" disabled />
                </div>
            <br />
            <div className='flex flex-column items-start '>
            <span  className='ml-1'>Cell No</span>
            <input type="number" className='form-control rounded-md' required
    placeholder='eg 03123456789' name="Contact No" />
    </div>
            <br />
            <div className='flex flex-column items-start '>
            <span  className='ml-1'>Delivery Address</span>
            <input type="text" className='form-control rounded-md' required
             name="Address" />
             </div>
            <br />
            <div className='flex flex-column items-start '>
            <span  className='ml-1'>Price To Pay</span>
            <input type="number" className='form-control rounded-md' required
                va name="Total Cost"  disabled  />
                </div>
            <br />
            <div className='flex flex-column items-start '>
                <span  className='ml-1'>Total No Of Products</span>
            <input type="number" className='form-control rounded-md' required
                 name="Quantity" disabled   />
                 </div>
            <br />
            <button  className='bg-drymeBlue text-white hover:bg-red p-2 ' >Cash On Delivery</button>
            <button  className='bg-drymeBlue     text-white ml-4 p-2      '>PayOnline</button>
        
       
    </div>
</div>
    </>
  )
}

export default EnterDetails
