import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Products() {
  return (
    <div className='w-full h-full'>
      <Navbar></Navbar>
      <div className='bg-yellow-200 w-full h-1/2 flex items-end justify-center'>

   <div className="w-3/4 bg-white h-16  flex items-center ">
 
 <i class="fa-solid fa-magnifying-glass ml-4"></i>
   <input type="search"  className="ml-2 w-full h-1/2 p-2" placeholder="Search Here "  />
   <button className='bg-drymeBlue text-white px-2 py-2 rounded-lg ml-2'>Search</button>
   </div>
   <div className=''>
   <button className='bg-drymeBlue text-white p-2'>Category</button>
   <button className='bg-drymeBlue text-white p-2 ml-4'>Select Service</button>
   </div>
      </div>
      <div className='bg-green-200 w-full h-screen'>

      </div>

    </div>
  )
}

export default Products
