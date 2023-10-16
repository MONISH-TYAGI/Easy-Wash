import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
//Second Start
function Navbar() {
  const { logout } = useContext(AuthContext);
  const [icon,setIcon]=useState(false);
  const [menu,setMenu]=useState(false);
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
    // alert("LogOut")    
    localStorage.clear();
    navigate("/login")

  }
  const [style,setStyle]=useState("none");
  const goToLoginPage=()=>{
    // console.log("name->"+name)
    if(name==="LogIn")
    navigate("/login")
  }
  let name;
  const handleMenu=()=>{
    setMenu(!menu);
    setIcon(!icon)
    if(style=="none")
    setStyle("solid")
    else
    setStyle("none");

  }
  
  if(localStorage.getItem("name")!=null){
   let string=localStorage.getItem("name");
   let arr=string.split(" ");
   name=arr[0];
  }
   else
   name="LogIn"
   
  return (
    <div className='fixed z-40 '>
    <div className=' h-20 bg-drymeBlue fixed top-0 w-full z-30  shadow-2xl'>Head 1</div>
    <div className=' hidden sm:flex  h-20 bg-white w-3/4 m-auto  fixed top-12 left-44 border-solid border-2 z-30  shadow-xl'>
     <div className=' w-2/4 flex items-center pl-10 h-full '><span className=''><h1 className='EasyWashFirst'>Easy <span className='EasyWashSecond'>Wash</span></h1></span>
     </div>
     <div className='h-full w-2/4  flex  z-1'>
     
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select cursor-pointer mr-1' onClick={handleHome}><i className="fa-solid fa-house text-lg "></i><span className='text-2xl ' style={{"font-family": "-webkit-body"}}>Home</span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select cursor-pointer mr-2' onClick={handleServices}><i className="fa-solid fa-gear text-lg"></i><span  className='text-2xl ' style={{"font-family": "-webkit-body"}}>Services</span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select  cursor-pointer mr-1 ml-2' onClick={handleReviews}><i className="fa-solid fa-heart text-lg"></i><span  className='text-2xl ' style={{"font-family": "-webkit-body"}}>Reviews</span></div>
       <div className='h-full w-1/6 flex items-center justify-center hover:text-select cursor-pointer mr-1' onClick={handleBag}><i className="fa-solid fa-bag-shopping text-lg"></i><span  className='text-2xl ' style={{"font-family": "-webkit-body"}}>Bag</span></div>
       
        
        <div className='h-full w-2/6  flex  items-center justify-center hover:text-select cursor-pointer'  onMouseEnter={()=>setIcon(true)} onMouseLeave={()=>setIcon(false)}>
          {
          (icon==false||name=="LogIn")?
          <span onMouseEnter={()=>setIcon(true)} onClick={goToLoginPage} onMouseLeave={()=>setIcon(false)} >
          <i className="fa-solid fa-user m-1 text-xl" ></i><span className='font-bold'>{name}</span></span>:<span className="text-xl" onMouseLeave={()=>setIcon(false)} onClick={handleLogout}><i class="fa-solid fa-lock-open pr-1 text-base text-xl"></i><span className='font-bold'>LogOut</span></span>
}
{/* <i class="ml-3   fa-sharp fa-solid fa-caret-down" onClick={handleMenu}></i> */}
          </div>
    
       
       {/* <div className='fixed flex flex-column'>
       <i class="fa-solid fa-caret-up text-3xl"></i>
        <button className='bg-drymeBlue text-white underline'>LogOut</button>
       </div> */}
     </div>
     

     </div>
     <div className=' flex sm:hidden bg-white h-20 w-3/4 m-auto  fixed top-12 left-10 border-solid border-2 z-30'>
     <div className=' w-1/2 flex items-center  h-full '><span className=''><h1 className='EasyWashFirst'>Easy <span className='EasyWashSecond'>Wash</span></h1></span>
     </div>
     <div className='h-full w-1/2  flex flex-col z-1  items-center '>
     <div className="h-1/4  w-full  flex justify-center items-center   hover:text-select cursor-pointer mt-8 " style={{border:"#dcd5d5", borderStyle:style, borderWidth:"thin"}}  onMouseEnter={()=>setIcon(true)} onMouseLeave={()=>setIcon(false)}>
          {
          (icon==false||name=="LogIn")?
          <span onMouseEnter={()=>setIcon(false)} onClick={goToLoginPage} onMouseLeave={()=>setIcon(false)} >
          <i className="fa-solid fa-user m-1" ></i>{name}</span>:<span onMouseLeave={()=>setIcon(false)} onClick={handleLogout}><i class="fa-solid fa-lock-open pr-1"></i>LogOut</span>
          
}
<i class="ml-3   fa-sharp fa-solid fa-caret-down" onClick={handleMenu}></i>
          </div>
          {
            (menu==true)?
            <>
       <div className='h-full border p-1 w-full bg-white flex items-center justify-center hover:text-select cursor-pointer' onClick={handleHome}><i className="fa-solid fa-house "></i><span>Home</span></div>
       <div className='h-full border p-1 w-full bg-white flex items-center justify-center hover:text-select cursor-pointer' onClick={handleServices}><i className="fa-solid fa-gear "></i><span>Services</span></div>
       <div className='h-full border p-1 w-full bg-white flex items-center justify-center hover:text-select  cursor-pointer' onClick={handleReviews}><i className="fa-solid fa-heart "></i><span>Reviews</span></div>
       <div className='h-full border p-1 w-full bg-white flex items-center justify-center hover:text-select cursor-pointer' onClick={handleBag}><i className="fa-solid fa-bag-shopping "></i><span>Bag</span></div>
       </>:<></>
          }
       

       
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