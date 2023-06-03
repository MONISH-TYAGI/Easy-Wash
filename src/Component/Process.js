import React, { useState } from 'react'
// import Poster from '../../images/videoImg.jpg';
// import VideoSrc from '../../images/works.mp4';
// import VideoPlayer from 'react-video-js-player';
function Process() {
    const [check1,setCheck1]=useState(false);
    const [check2,setCheck2]=useState(false);
    const playVideo=(check)=>{
      if(check==true)
        setCheck1(!check1)
        else
        setCheck2(!check2)
    }
  return (
    <>
    <div className='w-full h-full hidden sm:flex '>
      <div className='processFirstHalf w-1/2 h-full   flex items-center justify-center '>
        <div className=' h-3/4 w-36 '>
   
    
    <div className='w-full bg-white h-10 flex rounded-lg border-drymeBlue border-2 items-center justify-center  relative top-20' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue '><span>2</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Place Order</span></div>
    </div>
    
    <div className='w-full bg-white h-10 flex rounded-lg border-drymeBlue border-2 items-center  relative top-48 ' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue ml-2'><span>4</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Processed</span></div>
    
    </div>
        </div>
        
        <div className=' w-6 h-3/4 bg-drymeBlue rounded  border-black'> 
        <div className='w-full h-2 bg-white  relative top-4 border-2 border-black'></div>
        <div className='w-full h-2 bg-white  relative top-20 border-2 border-black mt-2'></div>
        <div className='w-full h-2 bg-white  relative top-20 border-2 border-black top-36 mt-2'></div>
        <div className='w-full h-2 bg-white  relative top-20 border-2 border-black top-52'></div>
        <div className='w-full h-2 bg-white  relative top-20 border-2 border-black top-72'></div>
         </div>
        <div className=' h-3/4 w-36'>
        <div className='w-full bg-white h-10 flex rounded-lg border-drymeBlue border-2 items-center justify-center' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue '><span>1</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Select Items</span></div>
    </div>
   
    <div className='w-full bg-white h-10 flex rounded-lg border-drymeBlue border-2 items-center justify-center relative top-1/3' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue '><span>3</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Free PickUp</span></div>
    </div>
    
    <div className='w-full bg-white h-10 flex rounded-lg border-drymeBlue border-2 items-center  relative top-2/3 ' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue  ml-2'><span>5</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Delivery</span></div>
    
    </div>
        </div>
      
      </div>
     
      <div className='processSecondHalf w-1/2 h-full flex items-center justify-center bg-white'>
        <div className='h-3/4 w-3/4 bg-black '>
            {
                (check1==true)?
       <video  src="https://smart-dhopa-online-laundry-app.web.app/static/media/works.8c3f1824.mp4" className="w-full h-full pb-6" controls autoPlay/>
           :
           <div className='w-full h-full bg-black'>
           <img src="https://raw.githubusercontent.com/PriontoAbdullah/Smart-Dhopa-React-App/main/src/images/videoImg.jpg" className='h-full w-full'>
            
           </img>
           <span className='bg-white border-solid border-2 border-white  ' onClick={()=>playVideo(true)}>
           <i class=" fa-brands fa-youtube fa-lg play relative bottom-52 text-lg hello" style={{"fontSize":"9rem"}}></i>
           </span>
           </div>
            } 
     
        </div>
      </div>
    
      <div></div>
    </div>
    <div className='w-full h-full flex flex-col sm:hidden bg-white' >
    <div className='processSecondHalf w-full h-full flex items-center justify-center mt-2'>
        <div className='h-4/5 w-4/5 bg-black '>
            {
                (check2==true)?
       <video  src="https://smart-dhopa-online-laundry-app.web.app/static/media/works.8c3f1824.mp4" className="w-full h-full pb-6" controls autoPlay/>
           :
           <div className='w-full h-full bg-black'>
           <img src="https://raw.githubusercontent.com/PriontoAbdullah/Smart-Dhopa-React-App/main/src/images/videoImg.jpg" className='h-full w-full'>
            
           </img>
           <span className='bg-white border-solid border-2 border-white  ' onClick={()=>playVideo(false)}>
           <i class=" fa-brands fa-youtube fa-lg play relative bottom-24  "  style={{"fontSize":"4rem"}}></i>
           </span>
           </div>
            } 
     
        </div>
      </div>
      <div className='processFirstHalf w-full h-full  bg-white mt-2 flex items-center justify-center mb-2'>
        <div className=' h-3/4 w-36 '>
   
    
    <div className='w-full bg-white h-8 flex rounded-lg border-drymeBlue border-2 items-center justify-center  relative top-6' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue '><span>2</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Place Order</span></div>
    </div>
    
    <div className='w-full bg-white h-8 flex rounded-lg border-drymeBlue border-2 items-center  relative top-20 ' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue ml-2'><span>4</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Processed</span></div>
    
    </div>
        </div>
        
        <div className=' w-6  h-full bg-drymeBlue rounded border-1 border-black flex flex-col justify-evenly stick' > 
        <div className='w-full h-2 bg-white   border-2 border-black'></div>
        <div className='w-full h-2 bg-white   border-2 border-black '></div>
        <div className='w-full h-2 bg-white   border-2 border-black '></div>
        <div className='w-full h-2 bg-white   border-2 border-black '></div>
        <div className='w-full h-2 bg-white   border-2 border-black '></div>
         </div>
        <div className=' h-3/4 w-36'>
        <div className='w-full bg-white h-8 flex rounded-lg border-drymeBlue border-2 items-center justify-center relative top-0' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue '><span>1</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Select Items</span></div>
    </div>
   
    <div className='w-full bg-white h-8 flex rounded-lg border-drymeBlue border-2 items-center justify-center relative top-10' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue '><span>3</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Free PickUp</span></div>
    </div>
    
    <div className='w-full bg-white h-8 flex rounded-lg border-drymeBlue border-2 items-center  relative top-24 ' >
    <div className='rounded-full  w-6  h-6 bg-gray-400 flex items-center justify-center border-4 border-drymeBlue  ml-2'><span>5</span></div>
    <div className='ml-2 justify-center items-center  font-bold'><span>Delivery</span></div>
    
    </div>
        </div>
      
      </div>
     
     
    
      <div></div>
    </div>
    </>
  )
}

export default Process
