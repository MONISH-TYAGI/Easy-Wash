import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContextProvider';
import { setDoc,doc, updateDoc,getDoc } from 'firebase/firestore';
import {db,storage} from '../firebase'

import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

function EnterDetails() {
    // const {setObj,BigObj,BillId,setBillId,totalItems,setItems,totalAmt,setAmt}=useContext(CartContext);
    const [name,setName]=useState("");
    const [cell,setCell]=useState("");
    const [address,setAddress]=useState("");
   
    const {setObj,BigObj,BillId,setBillId,totalItems,setItems,totalAmt,setAmt}=useContext(CartContext)
    console.log("totalQuan-> ",totalItems);
    console.log("totalAmt-> ",totalAmt);
    
    const navigate=useNavigate();
const saveOrderInDB= async()=>{
  console.log("Save");
    let common=new Date();
    let date=common.getDate()+"-"+common.getMonth()+"-"+common.getFullYear();
    // console.log("date ",date);
    let time=common.getHours()+":"+common.getMinutes()+":"+common.getSeconds();
    let Id=common.getFullYear()+common.getMonth()+common.getDate()+time;
    // console.log("name ",name);
    // console.log("email",address);
    // console.log("phone ",cell)
    const subData={
        BigObj:BigObj,
        UniqueId:Id,
        Date:date,
        Time:time,
        Items:totalItems,
        Amount:totalAmt,
        Name:name,
        Address:address,
        PhoneNo:cell,
        }

try{

        const docRef = doc(db, "EmailOrders", "email");
        const docSnap = await getDoc(docRef);
      ;
        if(docSnap.exists())
        {
            let res=await updateDoc(doc(db, "EmailOrders", Id), subData);
            console.log("save update success");
            alert("Booking Done Returning to Home")
          
        }else
        {
            let res=await setDoc(doc(db, "EmailOrders", Id), subData);
            console.log("save set success");
            alert("Failed in Booking")
        }
    navigate("/Bag");
}
catch(err)
{
console.log("Fail save");
console.log(err);
}
finally{
console.log("finally");
}
}
  return (
    <>
    <Navbar/>
  
<div className=" w-full bg-white  mt-32  p-4 ">
    <div className="w-full  p-2">
        <div className='flex flex-column items-start '>
    <span  className='ml-1'>Name</span>
            <input type="text" className='form-control rounded-md' required
 name="Name" value={name}  onChange={(e)=>setName(e.target.value)}/>
 </div>
            <br />
            <div className='flex flex-column items-start '>
            <span  className='ml-1'>Email</span>
            <input type="email" className='form-control rounded-md' required
                name="Email" disabled />
                </div>
            <br />
            <div className='flex flex-column items-start '>
            <span  className='ml-1'>Cell No</span>
            <input type="number" className='form-control rounded-md' required
    placeholder='eg 03123456789' name="Contact No" value={cell} onChange={(e)=>setCell(e.target.value)}/>
    </div>
            <br />
            <div className='flex flex-column items-start '>
            <span  className='ml-1'>Delivery Address</span>
            <input type="text" className='form-control rounded-md' required
             name="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
             </div>
            <br />
            <div className='flex flex-column items-start '>
            <span  className='ml-1'>Price To Pay</span>
            <input type="number" className='form-control rounded-md' required
                va name="Total Cost"  disabled   defaultValue={totalAmt} />
                </div>
            <br />
            <div className='flex flex-column items-start '>
                <span  className='ml-1'>Total No Of Products</span>
            <input type="number" className='form-control rounded-md' required
                 name="Quantity" disabled defaultValue={totalItems}  />
                 </div>
            <br />
            <button  className='bg-drymeBlue text-white hover:bg-red p-2 'onClick={saveOrderInDB} >Cash On Delivery</button>
            <button  className='bg-drymeBlue     text-white ml-4 p-2      '>PayOnline</button>
        
       
    </div>
</div>
    </>
  )
}

export default EnterDetails