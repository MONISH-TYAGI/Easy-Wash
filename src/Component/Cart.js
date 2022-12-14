import React, { useState } from 'react'
import Navbar from './Navbar'

function Bag() {
    const [itemsChange,setItemsChange]=useState(false);
const handleItemsQuantity=()=>{
    setItemsChange(!itemsChange);   
}
  return (
    <div className='w-full h-full bg-white'>
  <Navbar></Navbar>
  <div className='w-full mt-40   p-4 flex  OuterMarginBox'>
   <div className='OuterMarginBoxFirstHalf h-full  w-3/6 '> 
  <div className=' w-full h-1/3  flex drop-shadow  mb-4 'style={{border:"solid"}} >
    <img className='w-2/6  h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU">
       
    </img>
    <div className='w-4/6    '>
        <div className='secondHalfFirst w-full  h-2/3 flex justify-around '> 
    <span className='text-xl'> T-shirt</span>
        <span className='text-xl'>X</span>
        <span className='text-xl'>2</span>
        <span className='text-xl'>=</span>
        <span className='text-xl'>300</span>
        </div>
        <div className='secondHalfSecond w-full  h-1/3 flex justify-center items-center'>
            {
            (itemsChange==false)?
 <button className='w-1/4 bg-drymeBlue h-2/5 text-white rounded' onClick={handleItemsQuantity}>Edit Quantity1</button> 
 :
<div className='ItemsChangeDiv flex row'>
<input type='number' className='' autoFocus></input>
<button className='bg-drymeBlue text-white' onClick={handleItemsQuantity} >Done</button>
</div>
}
        </div>
        </div   >

  </div>
  <div className=' w-full h-1/3  flex drop-shadow  mb-4 'style={{border:"solid"}} >
    <img className='w-2/6  h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU">
       
    </img>
    <div className='w-4/6    '>
        <div className='secondHalfFirst w-full  h-2/3 flex justify-around '> 
    <span className='text-xl'> T-shirt</span>
        <span className='text-xl'>X</span>
        <span className='text-xl'>2</span>
        <span className='text-xl'>=</span>
        <span className='text-xl'>300</span>
        </div>
        <div className='secondHalfSecond w-full  h-1/3 flex justify-center items-center'>
            {
            (itemsChange==false)?
 <button className='w-1/4 bg-drymeBlue h-2/5 text-white rounded' onClick={handleItemsQuantity}>Edit Quantity1</button> 
 :
<div className='ItemsChangeDiv flex row'>
<input type='number' className='' autoFocus></input>
<button className='bg-drymeBlue text-white' onClick={handleItemsQuantity} >Done</button>
</div>
}
        </div>
        </div   >

  </div>
  <div className=' w-full h-1/3  flex drop-shadow  mb-4 'style={{border:"solid"}} >
    <img className='w-2/6  h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU">
       
    </img>
    <div className='w-4/6    '>
        <div className='secondHalfFirst w-full  h-2/3 flex justify-around '> 
    <span className='text-xl'> T-shirt</span>
        <span className='text-xl'>X</span>
        <span className='text-xl'>2</span>
        <span className='text-xl'>=</span>
        <span className='text-xl'>300</span>
        </div>
        <div className='secondHalfSecond w-full  h-1/3 flex justify-center items-center'>
            {
            (itemsChange==false)?
 <button className='w-1/4 bg-drymeBlue h-2/5 text-white rounded' onClick={handleItemsQuantity}>Edit Quantity1</button> 
 :
<div className='ItemsChangeDiv flex row'>
<input type='number' className='' autoFocus></input>
<button className='bg-drymeBlue text-white' onClick={handleItemsQuantity} >Done</button>
</div>
}
        </div>
        </div   >

  </div>
  <div className=' w-full h-1/3  flex drop-shadow  mb-4 'style={{border:"solid"}} >
    <img className='w-2/6  h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU">
       
    </img>
    <div className='w-4/6    '>
        <div className='secondHalfFirst w-full  h-2/3 flex justify-around '> 
    <span className='text-xl'> T-shirt</span>
        <span className='text-xl'>X</span>
        <span className='text-xl'>2</span>
        <span className='text-xl'>=</span>
        <span className='text-xl'>300</span>
        </div>
        <div className='secondHalfSecond w-full  h-1/3 flex justify-center items-center'>
            {
            (itemsChange==false)?
 <button className='w-1/4 bg-drymeBlue h-2/5 text-white rounded' onClick={handleItemsQuantity}>Edit Quantity1</button> 
 :
<div className='ItemsChangeDiv flex row'>
<input type='number' className='' autoFocus></input>
<button className='bg-drymeBlue text-white' onClick={handleItemsQuantity} >Done</button>
</div>
}
        </div>
        </div   >

  </div>
  <div className=' w-full h-1/3  flex drop-shadow  mb-4 'style={{border:"solid"}} >
    <img className='w-2/6  h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dBJaSfsFH-dw17KqI3FYyl01ZPgsy1ab2g&usqp=CAU">
       
    </img>
    <div className='w-4/6    '>
        <div className='secondHalfFirst w-full  h-2/3 flex justify-around '> 
    <span className='text-xl'> T-shirt</span>
        <span className='text-xl'>X</span>
        <span className='text-xl'>2</span>
        <span className='text-xl'>=</span>
        <span className='text-xl'>300</span>
        </div>
        <div className='secondHalfSecond w-full  h-1/3 flex justify-center items-center'>
            {
            (itemsChange==false)?
 <button className='w-1/4 bg-drymeBlue h-2/5 text-white rounded' onClick={handleItemsQuantity}>Edit Quantity1</button> 
 :
<div className='ItemsChangeDiv flex row'>
<input type='number' className='' autoFocus></input>
<button className='bg-drymeBlue text-white' onClick={handleItemsQuantity} >Done</button>
</div>
}
        </div>
        </div   >

  </div>
  
 
 
  </div>
  <div className='OuterMarginBoxSecondHalf  w-1/2 '>
  <div className='OuterHalf2 w-1/4 h-1/6  ml-60 fixed  bg-white'style={{border:"solid"}}>
    <div className='Bill1 w-full bg-drymeBlue h-1/4 '><span className='text-white'>Bill Generated</span></div>
    <div className='Bill2 w-full h-1/4 flex justify-between px-2'>
        <span>Total Items</span>
        <span>10</span>
    </div>
    <div className='Bill3 w-full  h-1/4 flex justify-between px-2'>
        <span>Total Price</span>
        <span>1000</span>
    </div>
    <div className='Bill4 w-full bg-drymeBlue h-1/4 flex justify-center'>
        <button className='text-white'>Place Order</button>
    </div>
  </div>
  </div>
  </div>
    </div>
  )
}

export default Bag
