import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

function Products() {
  const [visibleCat,setVisibleCat]=useState(true);
  const [visibleSer,setVisibleSer]=useState(false);
  const navigate=useNavigate();
  
  const handleVisibleCat=()=>{
    console.log(visibleCat)
   setVisibleCat(!visibleCat)
  }
  const handleVisibleSer=()=>{
    setVisibleSer(!visibleSer)
  }
  const handleCart=()=>{
    navigate("/Cart")
  }
  
  
 


  return (
    <div className='w-full h-full '>
      <Navbar></Navbar>
      <div className='bg-white w-full h-1/3 flex items-end justify-start fixed z-10'>
     
   <div className="w-11/12  h-12  flex items-center  rounded mx-2 "style={{border:"solid"}}>
 
 <button ><i class="fa-solid fa-magnifying-glass ml-4"></i></button>
   <input type="search"  className=" w-full h-1/2 p-2 outline-none  " placeholder="Search Here "  />
   <button className='bg-drymeBlue text-white  rounded-lg px-4 h-3/4'>Search</button>
   </div>
   
   <button className='bg-drymeBlue text-white w-1/6  h-12 rounded-lg mx-2' onClick={handleVisibleCat}>Category <i class="ml-2 fa-sharp fa-solid fa-caret-down "></i>
 </button>
   
   <button className='bg-drymeBlue  text-white w-1/6 h-12 rounded-lg  mx-2'onClick={handleVisibleSer}>Select Service <i class="ml-2   fa-sharp fa-solid fa-caret-down"></i></button> 
   <button className='bg-drymeBlue  text-white w-1/6 h-12 rounded-lg  mx-2'onClick={handleCart}>PlaceOrder </button> 
   {/* <div class="dropdown">
{/* <div class="dropdown1 w-56">
  <button class="dropbtn">Category 
  <i class="ml-2 fa-sharp fa-solid fa-caret-down "></i>
  </button>
  <div class="dropdown-content ">
    <a href="https://thepotatoshop.com/shop/mash/highland-burgundy-red-1kg/">Greenhouse Gases</a>
    <a href="https://thepotatoshop.com/shop/mash/arran-victory-1kg/">Carbon Dioxide</a>
    <a href="https://thepotatoshop.com/shop/mash/desiree-1kg/">Methane</a>
    <a href="https://thepotatoshop.com/shop/salad/belle-de-fontenay-1kg/">Water Vapour</a>
    <a href="https://thepotatoshop.com/shop/salad/belle-de-fontenay-1kg/">NF3</a>
  </div> */}
{/* </div> */}
{/* </div>  */}


      </div>
      <div className='bg-white w-full h-max flex flex-wrap ' style={{paddingTop:"16%"}}>
  
      {
  (visibleCat==false)?<div className='Box1 bg-drymeBlue  fixed  rounded-b-lg z-10'>

<ul>
    <li className='underline text-gray-400 my-1 text-white'>Men</li>
    <li className='underline text-gray-400 my-1 text-white'>Female</li>
    <li className='underline text-gray-400 my-1 text-white'>Others</li>
  </ul>
</div>
:

<div className='Box1 bg-white  fixed  rounded-b-lg'style={{visibility:"hidden"}} >

<ul>
    <li className='underline text-gray-400 my-1'>Men</li>
    <li className='underline text-gray-400 my-1'>Female</li>
    <li className='underline text-gray-400 my-1'>Others</li>
  </ul>
</div>

}
{
  (visibleSer==true)?
<div className='Box2  bg-drymeBlue   rounded-b-lg '>

<ul>
    <li className='underline text-gray-400 my-1 text-white'>Wash</li>
    <li className='underline text-gray-400 my-1 text-white'>Iron</li>
    <li className='underline text-gray-400 my-1 text-white'>DryCleaning</li>
  </ul>
</div>
:
<div className='Box2 bg-white    'style={{visibility:"hidden"}} >

<ul>
    <li className='underline text-gray-400 my-1'>Wash</li>
    <li className='underline text-gray-400 my-1'>Iron</li>
    <li className='underline text-gray-400 my-1'>DryCleaning</li>
  </ul>
</div>
}






        

<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className=' w-full bg-white h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 hover:text-black"style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}} >4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue hover:text-black" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button>
</div>

</div>   
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className=' w-full bg-white h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 hover:text-black"style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}} >4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue hover:text-black" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button>
</div>

</div>   
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className=' w-full bg-white h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 hover:text-black"style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}} >4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue hover:text-black" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button>
</div>

</div>   
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className=' w-full bg-white h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 hover:text-black"style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}} >4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue hover:text-black" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button>
</div>

</div>   
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className=' w-full bg-white h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 hover:text-black"style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}} >4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue hover:text-black" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button>
</div>

</div>   
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className=' w-full bg-white h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 hover:text-black"style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}} >4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue hover:text-black" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button>
</div>

</div>   
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className=' w-full bg-white h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 hover:text-black"style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}} >4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue hover:text-black" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button>
</div>

</div>   
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className=' w-full bg-white h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 hover:text-black"style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}} >4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue hover:text-black" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button>
</div>

</div>   
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className=' w-full bg-white h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 hover:text-black"style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}} >4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue hover:text-black" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full bg-drymeBlue text-white hover:bg-black'>AddToBag</button>
</div>

</div>   




       </div>
       <div className='p-4 bg-white'>
       <nav aria-label="Page navigation example ">
  <ul class="inline-flex -space-x-px ">
    <li>
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 bg-drymeBlue text-white leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="px-3 py-2  border border-gray-300  hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>
</div>

      </div>

   

  )
}

export default Products
{/* <div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-72'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU" className='w-full h-full'></img>
</div>
<div className='bg-green-400 w-full h-10 flex items-center justify-between'>
<i class="fa-solid fa-circle-plus text-drymeBlue ml-1 "style={{fontSize:"2rem"}}></i>
<span style={{fontSize:"2rem"}}>4</span>
<i class="fa-solid fa-circle-minus text-drymeBlue" style={{fontSize:"2rem"}}></i>
</div>
<div className='bg-drymeBlue w-full h-10'>
  <button className='w-full h-full text-white'>AddToBag</button>
</div>

</div>    */}



// {
//   (visibleCat==false)?<div className='Box1 bg-red-400  relative  rounded-b-lg z-40' >

// <ul>
//     <li className='underline text-gray-400 my-1'>Men</li>
//     <li className='underline text-gray-400 my-1'>Female</li>
//     <li className='underline text-gray-400 my-1'>Others</li>
//   </ul>
// </div>
// :

// <div className='Box1 bg-white  relative  rounded-b-lg'style={{visibility:"hidden"}} >

// <ul>
//     <li className='underline text-gray-400 my-1'>Men</li>
//     <li className='underline text-gray-400 my-1'>Female</li>
//     <li className='underline text-gray-400 my-1'>Others</li>
//   </ul>
// </div>

// }
// {
//   (visibleSer==true)?
// <div className='Box2 bg-white  relative  rounded-b-lg'>

// <ul>
//     <li className='underline text-gray-400 my-1'>Wash</li>
//     <li className='underline text-gray-400 my-1'>Iron</li>
//     <li className='underline text-gray-400 my-1'>DryCleaning</li>
//   </ul>
// </div>
// :
// <div className='Box2 bg-white  relative  'style={{visibility:"hidden"}} >

// <ul>
//     <li className='underline text-gray-400 my-1'>Wash</li>
//     <li className='underline text-gray-400 my-1'>Iron</li>
//     <li className='underline text-gray-400 my-1'>DryCleaning</li>
//   </ul>
// </div>
// }