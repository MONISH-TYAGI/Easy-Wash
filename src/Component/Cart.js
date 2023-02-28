import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { CartContext } from '../Context/CartContextProvider';
import Navbar from './Navbar'

function Bag() {
    const {setObj,BigObj,BillId,setBillId,totalItems,setItems,totalAmt,setAmt}=useContext(CartContext);
    // localStorage.setItem("totalItems",totalItems);
    // localStorage.setItem("totalAmt",totalAmt);
    // console.log("BigObj.length"+BigObj.length);
 const [run,setRun]=useState(true);
    const {user}=useContext(AuthContext);
  const navigate=useNavigate();
    const [change,setChange]=useState("1");
const EditQuantiy=(e)=>{
    // console.log("edit1"+change);
    setChange(e);   
    // console.log("edit2"+e);
setRun(!run);
}
// console.log("edit3"+change);
const handleCart=()=>{
  localStorage.setItem("BigObj",JSON.stringify(BigObj));
  localStorage.setItem("totalItems",totalItems);
  localStorage.setItem("totalAmt",totalAmt);
// console.log("save");
// console.log("BigObj"+localStorage.getItem("BigObj"));
    navigate("/EnterDetails");
    setRun(!run);
  }
const handleItemsChange=(e,check)=>{
  // console.log(JSON.stringify(BigObj));
    function findObjIndex(obj)
    {
        if(obj.ProdId==e) 
        return true;
        
    }
    // let index=BigObj.findIndex((obj)=>{
    //     return (obj.ProdId==e);
    // })
    let index=BigObj.findIndex(findObjIndex)
    // console.log("index"+index);
    
    let val;
    if(check==true)
    val=document.getElementById(e).value;
    else
    val=document.getElementById("A"+e).value;
    
    BigObj[index].Quantity=val;
    let newBigObj=BigObj;
    if(val==0)
    {
       newBigObj=BigObj.filter((obj)=>{
        return (obj.ProdId!=e);
      })
    }
    // console.log("Try"+BigObj[index].Quantity);
    setObj([...newBigObj]);
    setChange("1");
    localStorage.setItem("BigObj",JSON.stringify(newBigObj));
    setRun(!run);
    // let newBigObj=BigObj.filter((obj)=>{
    //     return (obj.Quantity!=0)
    //  })
    //  setObj(newBigObj);
}
useEffect(()=>{
  // console.log("user Navigate ->",user);
    if(user==null)
    {
      navigate("/Login");
    }else{
      let currArr=[];
      if(localStorage.getItem("BigObj")!=null){
 setObj([...JSON.parse(localStorage.getItem('BigObj'))])
  currArr=[...JSON.parse(localStorage.getItem('BigObj'))];
      }
    let Items=0;
    let Amt=0;
    let currName=""
 currArr.map((obj)=>{
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
},[change])
  return (
 
    <div className='w-full h-full bg-white'>
  <Navbar></Navbar>
  <div className='w-full mt-40   p-4   OuterMarginBox hidden sm:flex'>
   <div className='OuterMarginBoxFirstHalf h-full  w-3/6 '> 

   
   {
    BigObj.map((obj)=>{
        return (
  <div className=' w-full h-1/4  flex drop-shadow  mb-4  'style={{border:"solid",height:"10rem"}} >
    <img className='w-2/6  h-full' src={obj.Image}>
       
    </img>
    <div className='w-4/6    '>
        <div className='secondHalfFirst w-full  h-1/4 flex justify-around '> 
    <span className='text-xl'>{obj.Name}</span>
    <span className='text-xl'>{obj.Price}</span>
        <span className='text-xl'>X</span>
        <span className='text-xl'>{obj.Quantity}</span>
        <span className='text-xl'>=</span>
        <span className='text-xl'>Rs. {obj.Quantity*obj.Price}</span>
        </div>
        <div className=' h-1/4 flex  p-3'>
          <span className='text-xl'>Service:</span>
          <span className='text-xl ml-2'>{obj.Service}</span>
          </div> 
        <div className='secondHalfSecond w-full  h-2/4 flex justify-center items-center'>
        
            {
            (change!=obj.ProdId)?
 <button className='w-1/4 bg-drymeBlue h-4 text-white rounded' onClick={()=>EditQuantiy(obj.ProdId)} style={{height:"60%"}}>Edit Quantity</button> 
 :
<div className='ItemsChangeDiv flex row'>
<input type='number' id={obj.ProdId} className='' autoFocus defaultValue={obj.Quantity} min={0}></input>
<button className='bg-drymeBlue text-white' onClick={()=>handleItemsChange(obj.ProdId,true)}>Done</button>
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
        <span>Rs. {totalAmt}</span>
    </div>
    <div className='Bill4 w-full bg-drymeBlue h-1/4 flex justify-center'>
        <button className='text-white'onClick={handleCart}>Place Order</button>
    </div>
  </div>
  </div>
  </div>
  <div className='w-full     flex  flex-col OuterMarginBox block sm:hidden   '>
   <div className='z-20 bg-white h-44 mt-30 z-10 fixed z-10 w-full'>ff</div>
  <div className='OuterMarginBoxSecondHalf  w-full h-full   bg-orange-200 mb-7   '>
  <div className='OuterHalf2 w-full h-1/6   fixed p-2 right-0  bg-white z-20 top-40'style={{border:"solid"}}>
    <div className='Bill1 w-full bg-drymeBlue h-1/4 '><span className='text-white'>Bill Generated</span></div>
    <div className='Bill2 w-full h-1/4 flex justify-between px-2'>
        <span>Total Items</span>
        <span>{totalItems}</span>
    </div>
    <div className='Bill3 w-full  h-1/4 flex justify-between px-2'>
        <span>Total Price</span>
        <span>Rs. {totalAmt}</span>
    </div>
    <div className='Bill4 w-full bg-drymeBlue h-1/4 flex justify-center'>
        <button className='text-white text-sm'onClick={handleCart}>Place Order</button>
    </div>
  </div>
  </div>
  <div className='OuterMarginBoxFirstHalf h-1/2  w-full  mt-56'> 

   
{
 BigObj.map((obj)=>{
     return (
<div className=' w-full h-1/4  flex drop-shadow  mb-4  z-0'style={{border:"solid",height:"10rem"}} >
 <img className='w-2/6  h-full' src={obj.Image}>
    
 </img>
 <div className='w-4/6    '>
     <div className='secondHalfFirst w-full  h-1/4 flex justify-around '> 
 <span className='text-xl font-bold'>{obj.Name}</span>
 <span className='text-xl'>{obj.Price}</span>
     <span className='text-xl'>X</span>
     <span className='text-xl'>{obj.Quantity}</span>
     <span className='text-xl'>=</span>
     <span className='text-xl'>Rs. {obj.Quantity*obj.Price}</span>
     </div>
     <div className=' h-1/4 flex  p-3'>
       <span className='text-xl'>Service:</span>
       <span className='text-xl ml-2'>{obj.Service}</span>
       </div> 
     <div className='secondHalfSecond w-full  h-2/4 flex justify-center items-center'>
     
         {
         (change!=obj.ProdId)?
<button className='w-2/4  bg-drymeBlue  text-white rounded pb-2' onClick={()=>EditQuantiy(obj.ProdId)} style={{height:"30%"}}>Edit Quantity</button> 
:
<div className='ItemsChangeDiv flex row w-1/2'>
<input type='number ' id={"A"+obj.ProdId} className='w-1/2' autoFocus defaultValue={obj.Quantity} min={0}></input>
<button className='bg-drymeBlue text-white w-1/2' onClick={()=>handleItemsChange(obj.ProdId,false)}>Done</button>
</div>
}
     </div>
     </div   >

</div>
     )
})
}








</div>
  </div>
    </div>
   
  )
}

export default Bag
