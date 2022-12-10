import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate=useNavigate();
  const handleServices=()=>{
    navigate("/services");
  }
  return (
    <>
    <div className='h-20 bg-drymeBlue fixed top-0 w-full z-10'>Head 1</div>
    <div className='h-20 bg-white w-3/4 m-auto flex fixed top-12 left-44 border-solid border-2 z-10'>
     <div className=' w-2/4 flex items-center pl-10 h-full '><span className=''><h1 className='EasyWashFirst'>Easy <span className='EasyWashSecond'>Wash</span></h1></span>
     </div>
     <div className='h-full w-2/4  flex  z-1'>
       <div className='h-full w-1/6 flex items-center justify-center hover:text-select'><span></span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select'><span></span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select'><span>Home</span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select ' onClick={handleServices}><span>Services</span></div>
       <div className='h-full w-1/6 flex items-center justify-center hover:text-select'><span>Reviews</span></div>
       <div className='h-full w-1/6  flex  items-center justify-center hover:text-select'><i class="fa-solid fa-user m-1"></i><span>LogIn</span></div>
     </div>
     </div>
     </>
  )
}

export default Navbar
