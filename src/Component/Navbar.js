import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function Navbar() {
  const { logout } = useContext(AuthContext);
  const [icon,setIcon]=useState(false);
  const navigate=useNavigate();
  const handleServices=()=>{
    navigate("/services");
  }
  const handleBag=()=>{
    navigate("/Bag");
  }
  const handleHome=()=>{
    navigate("/")
  }
  const handleReviews=()=>{
    navigate("/reviews")
  }
  const handleLogout=async()=>{
    await logout();
    alert("LogOut")    
    localStorage.clear();
    navigate("/login")

  }
  return (
    <div className='fixed z-40'>
    <div className='h-20 bg-drymeBlue fixed top-0 w-full z-30'>Head 1</div>
    <div className='h-20 bg-white w-3/4 m-auto flex fixed top-12 left-44 border-solid border-2 z-30'>
     <div className=' w-2/4 flex items-center pl-10 h-full '><span className=''><h1 className='EasyWashFirst'>Easy <span className='EasyWashSecond'>Wash</span></h1></span>
     </div>
     <div className='h-full w-2/4  flex  z-1'>
     
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select' onClick={handleHome}><i className="fa-solid fa-house"></i><span>Home</span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select' onClick={handleServices}><i className="fa-solid fa-gear"></i><span>Services</span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select ' onClick={handleReviews}><i className="fa-solid fa-heart"></i><span>Reviews</span></div>
       <div className='h-full w-1/6 flex items-center justify-center hover:text-select' onClick={handleBag}><i className="fa-solid fa-bag-shopping"></i><span>Bag</span></div>
       
        
        <div className='h-full w-2/6  flex  items-center justify-center hover:text-select cursor-pointer' onClick={handleLogout} >
          {
          (icon==false)?
          <span onMouseEnter={()=>setIcon(true)}>
          <i className="fa-solid fa-user m-1" ></i>Monish Tyagi</span>:<span onMouseLeave={()=>setIcon(false)}><i class="fa-solid fa-lock-open pr-1"></i>LogOut</span>
}
          </div>

       
       {/* <div className='fixed flex flex-column'>
       <i class="fa-solid fa-caret-up text-3xl"></i>
        <button className='bg-drymeBlue text-white underline'>LogOut</button>
       </div> */}
     </div>
     </div>
     </div>
  )
}

export default Navbar
