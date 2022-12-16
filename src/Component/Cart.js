import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { CartContext } from '../Context/CartContextProvider';
import Navbar from './Navbar'

function Bag() {
    const {setObj,BigObj,BillId,setBillId,totalItems,setItems,totalAmt,setAmt}=useContext(CartContext);
    const {user}=useContext(AuthContext);
  const navigate=useNavigate();
    const [change,setChange]=useState("1");
const EditQuantiy=(e)=>{
    // console.log("edit"+e);
    setChange(e);   

}
const handleCart=()=>{
    navigate("/EnterDetails");
  }
const handleItemsChange=(e)=>{
    function findObjIndex(obj)
    {
        if(obj.ProdId==e) 
        return true;
        
    }
    // let index=BigObj.findIndex((obj)=>{
    //     return (obj.ProdId==e);
    // })
    let index=BigObj.findIndex(findObjIndex)
    console.log("index"+index);
    let val=document.getElementById(e).value;
    BigObj[index].Quantity=val;
    console.log("Try"+BigObj[index].Quantity);
    setObj([...BigObj]);
    setChange("1");
    // let newBigObj=BigObj.filter((obj)=>{
    //     return (obj.Quantity!=0)
    //  })
    //  setObj(newBigObj);
}
useEffect(()=>{
  console.log("user Navigate ->",user);
    if(user==null)
    {
      navigate("/Login");
    }else{
    let Items=0;
    let Amt=0;
    let currName=""
 BigObj.map((obj)=>{
    Items+=parseInt(obj.Quantity);
    Amt+=obj.Quantity*obj.Price;
    // currName=obj.Name;
    // console.log("hello ",obj.Quantity);
    // console.log("Items ",Items);
 })
//  console.log("Items ",Items);
//  console.log("Amt ",Amt);
 setItems(Items);
 setAmt(Amt);
}
//  setName(name);
},[BigObj])
  return (
    <div className='w-full h-full bg-white'>
  <Navbar></Navbar>
  <div className='w-full mt-40   p-4 flex  OuterMarginBox'>
   <div className='OuterMarginBoxFirstHalf h-full  w-3/6 '> 
   {
    BigObj.map((obj)=>{
        return (
  <div className=' w-full h-1/4  flex drop-shadow  mb-4 'style={{border:"solid",height:"10rem"}} >
    <img className='w-2/6  h-full' src={obj.Image}>
       
    </img>
    <div className='w-4/6    '>
        <div className='secondHalfFirst w-full  h-2/3 flex justify-around '> 
    <span className='text-xl'>{obj.Name}</span>
        <span className='text-xl'>X</span>
        <span className='text-xl'>{obj.Quantity}</span>
        <span className='text-xl'>=</span>
        <span className='text-xl'>{obj.Quantity*obj.Price}</span>
        </div>
        <div className='secondHalfSecond w-full  h-1/3 flex justify-center items-center'>
            {
            (change!=obj.ProdId)?
 <button className='w-1/4 bg-drymeBlue h-2/5 text-white rounded' onClick={()=>EditQuantiy(obj.ProdId)} style={{height:"60%"}}>Edit Quantity1</button> 
 :
<div className='ItemsChangeDiv flex row'>
<input type='number' id={obj.ProdId} className='' autoFocus defaultValue={obj.Quantity}></input>
<button className='bg-drymeBlue text-white' onClick={()=>handleItemsChange(obj.ProdId)}>Done</button>
</div>
}
        </div>
        </div   >

  </div>
        )
  })
}



  
 
 
  </div>
  <div className='OuterMarginBoxSecondHalf  w-1/2 '>
  <div className='OuterHalf2 w-1/4 h-1/6  ml-60 fixed  bg-white'style={{border:"solid"}}>
    <div className='Bill1 w-full bg-drymeBlue h-1/4 '><span className='text-white'>Bill Generated</span></div>
    <div className='Bill2 w-full h-1/4 flex justify-between px-2'>
        <span>Total Items</span>
        <span>{totalItems}</span>
    </div>
    <div className='Bill3 w-full  h-1/4 flex justify-between px-2'>
        <span>Total Price</span>
        <span>{totalAmt}</span>
    </div>
    <div className='Bill4 w-full bg-drymeBlue h-1/4 flex justify-center'>
        <button className='text-white'onClick={handleCart}>Place Order</button>
    </div>
  </div>
  </div>
  </div>
    </div>
  )
}

export default Bag
