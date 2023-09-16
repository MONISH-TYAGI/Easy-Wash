import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import service1 from '../img/service1.jpeg'
import service2 from '../img/service2.jpg'
import service3 from '../img/service3.webp'

function Services() {
    const navigate=useNavigate();
    const {user}=useContext(AuthContext);
    const handleService=()=>{
        navigate("/services")
    }
    useEffect(()=>{
        // console.log("user "+user);
        if(user==null)
        {
            // navigate("/login");
            // return ;
        }
    },[])
  return (
    <>
    <div className='h-full w-full hidden sm:block '>
     <div className='h-1/5 bg-white flex items-end justify-center'>
        <h1 className='text-drymeBlue text-6xl font-bold 	underline underline-offset-8 text-drymeBlue'>Our Services</h1>
     </div >
<div className='h-4/5 w-full flex space-x-24 items-center justify-center bg-white'>
    <div className='h-3/4 w-1/5  drop-shadow-2xl border-2 bg-white'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src={service1}></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Wash & Fold</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>All your regular wear garments will be washed, steam ironed and neatly packed for delivery.</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl' onClick={handleService}>Continue</button>
        </div>
        </div>
    </div>
    <div className='h-3/4 w-1/5  drop-shadow-2xl border-2 bg-white'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src={service2}></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Iron & Fold</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl' onClick={handleService}>Continue</button>
        </div>
        </div>
    </div>
    <div className='h-3/4 w-1/5  drop-shadow-2xl border-2 bg-white'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src={service3}></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Dry Cleaning</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>All your sensitive and special garments will be individually treated for any stains and dry cleaned.</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl' onClick={handleService}>Continue</button>
        </div>
        </div>
    </div>
</div>
    </div>
    <div className='h-max w-full flex flex-col sm:hidden p-4 bg-white mt-16'>
     <div className='h-1/6 bg-white flex items-end justify-center'>
        <h1 className='text-drymeBlue text-5xl font-bold 	underline underline-offset-8 text-drymeBlue'>Our Services</h1>
     </div >
<div className='h-5/6 w-full flex flex-col  items-center justify-center bg-white mt-8'>
    <div className='h-1/3 w-full  drop-shadow-2xl border-2 bg-white p-2 '>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src={service1}></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Wash & Fold</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2 '>All your regular wear garments will be washed, steam ironed and neatly packed for delivery.</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl' onClick={handleService}>Continue</button>
        </div>
        </div>
    </div>
    <div className='h-1/3 w-full  drop-shadow-2xl border-2 bg-white mt-2 p-2'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src={service2}></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Iron & Fold</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl' onClick={handleService}>Continue</button>
        </div>
        </div>
    </div>
    <div className='h-1/3 w-full drop-shadow-2xl border-2 bg-white mt-2 p-2'>
        <div className='h-1/2  '>
            <img className='w-full h-full hover:scale-95' src={service3}></img>
        </div>
        <div className='h-1/2 bg-white'>
        <div className='bg-white h-1/3 flex items-center text-start '><h1 className='ml-2 text-xl font-medium text-drymeBlue'>Dry Cleaning</h1></div>
        <div className='bg-white h-1/3 flex text-start ml-2'>All your sensitive and special garments will be individually treated for any stains and dry cleaned.</div>
        <div className='bg-white h-1/3 flex items-center justify-end '>
            <button className='bg-drymeBlue w-1/3 h-10 text-white rounded-bl-lg rounded-tl-lg rounded-tl-3xl rounded-bl-3xl' onClick={handleService}>Continue</button>
        </div>
        </div>
    </div>
</div>
    </div>
    </>
  )
}

export default Services
