import React, { useContext, useEffect, useReducer, useState } from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';
import { AuthContext } from '../Context/AuthContext';

function Products() {
  const {setObj,BillId,setBillId,totalItems,setItems,totalAmt,setAmt,cart,setCart}=useContext(CartContext);
  const [visibleCat,setVisibleCat]=useState(false);
  const [visibleSer,setVisibleSer]=useState(false);
  const [open1,setOpen1]=useState(false);
  const [open2,setOpen2]=useState(false);
  const [service,setService]=useState("Wash");
  const [val,setVal]=useState(99);
  let cartVal=false;
  if(localStorage.getItem("cart")!=null){
  cartVal=localStorage.getItem("cart");
  // console.log("cartValA"+cartVal);
  }
  // setCart(false);
  let BigObj=(localStorage.getItem("BigObj")!=null)?[...JSON.parse(localStorage.getItem("BigObj"))]:[];
 
  // let cart=false;
  const [categoryName,setCategoryName]=useState("Male");
  const [currPage,setCurrPage]=useState(1);

  
  const [value1,setValue1]=useState("gray");
  const [value2,setValue2]=useState("white");
  const [value3,setValue3]=useState("white");
  const [value4,setValue4]=useState("white");
  let i=0;
  // const [all,setAll]=useState(true); 
  let maleApi="https://monish-tyagi.github.io/CustomApi/Men/Men.json";
  let femaleApi="https://monish-tyagi.github.io/CustomApi/Female/Female.json";
  let maleIronApi="https://monish-tyagi.github.io/CustomApi/Men/IronMen.json";
  let washandironMenApi="https://monish-tyagi.github.io/CustomApi/Men/Wash&IronMen.json";
  let dryMenApi="https://monish-tyagi.github.io/CustomApi/Men/dryMen.json";
  let femaleIronApi="https://monish-tyagi.github.io/CustomApi/Female/IronFemale.json";
  let washandironFemaleApi="https://monish-tyagi.github.io/CustomApi/Female/Wash&IronFemale.json";
  let dryFemaleApi="https://monish-tyagi.github.io/CustomApi/Female/dryFemale.json";


  const handleService=(e)=>{
    // console.log("action"+e);
    if(e=="Wash")
    {
  setValue1("gray");
  setValue2("white");
  setValue3("white");
  setValue4("white");
  setService("Wash");
if(categoryName=="Male")
setCategory(maleApi);
else
setCategory(femaleApi)
    }else if(e=="Iron")
    {
      setValue1("white");
      setValue2("gray");
      setValue3("white");
      setValue4("white");
      setService("Iron")
      if(categoryName=="Male")
setCategory(maleIronApi);
else
setCategory(femaleIronApi)
      
      }else if(e=="Wash&Iron")
    {
      setValue1("white");
      setValue2("white");
      setValue3("gray");
      setValue4("white");
      setService("Wash&Iron")
      if(categoryName=="Male")
setCategory(washandironMenApi);
else
setCategory(washandironFemaleApi)
      }else
    {
      setValue1("white");
      setValue2("white");
      setValue3("white");
      setValue4("gray"); 
      setService("DryCleaning")
      if(categoryName=="Male")
setCategory(dryMenApi);
else
setCategory(dryFemaleApi)
     }
  
   }
  const [category,setCategory]=useState(maleApi);
  // const [pages,setPages]=useState(1);
  const navigate=useNavigate();
  const [products,setProducts]=useState([]);
  const [pagesArr,setPagesArr]=useState([]);
  const [val1,setVal1]=useState("gray");
  const [val2,setVal2]=useState("white");
  const [searchValue,setSearch]=useState("");

  let select=0;
  if(localStorage.getItem("selectedItems")!=null)
  select=localStorage.getItem("selectedItems");
  const [selectedItems,setSelectedItems]=useState(select);
 
  const INITIAL_STATE={
    open1:false,
    open2:false,
    visibleCat:false,
    visibleSer:false
  }
  
  const reducer=(state,action)=>{
   
    // console.log(action);
    let a={};
    switch(action.type)
    {
      case "handleVisibleCat":a=  {
       ...state,
        open1:!state.open1,
        visibleCat:!state.visibleCat,
       
      }; 
      break;
      case "handleVisibleSer":a= {
        ...state,
    open2:!state.open2,
    visibleSer:!state.visibleSer
      }
      break;
      default:a={...state}
    }
    // console.log("open1"+JSON.stringify(a));
    return a;
  }
  const [state,dispatch]=useReducer(reducer,INITIAL_STATE);
  // const handleVisibleCat=()=>{
  //   // console.log(visibleCat)
  //   setOpen1(!open1)
  //  setVisibleCat(!visibleCat)
  // }
  const handlePrevious=()=>{
if(currPage!=1)
setCurrPage(currPage-1);
  }
  const handleNext=()=>{
  
    if(currPage!=pagesArr.length)
    setCurrPage(currPage+1);
  }
  // const handleVisibleSer=()=>{
  //   setOpen2(!open2)
  //   setVisibleSer(!visibleSer)
  // } 
  const {user}=useContext(AuthContext);

  const handleSearch=(text)=>{
    // setTimeout(()=>{},1000);
    let curr=document.getElementById(text).value;
    // console.log("curr "+curr)
       setSearch(curr);
      // console.log("searchVal"+curr.length); 
     let  currproducts=JSON.parse(localStorage.getItem("products"));
      //  console.log("search 1 "+products.length);
     let newProd = currproducts.filter((obj)=>{
        return(curr.length==0||obj.Name.toUpperCase().substring(0,curr.length)==curr.toUpperCase());
       });
      //  console.log("search 2"+newProd.length);
       i=0;
       setProducts([...newProd])
       
  }
 const handlePage=(e)=>{
  setCurrPage(e);
 }
 const handleCategory=(e)=>{
  if(e=="male")
  {
 setCategory(maleApi);
 setCategoryName("Male");

 setVal(99);
 setVal1("gray");
 setVal2("white");
 
  }else
  {
setCategory(femaleApi);
setCategoryName("Female");
setVal2("gray");
setVal1("white");
setVal(199);
  }
// setVisibleCat(!visibleCat);  
setCurrPage(1); 
setValue1("gray");
  setValue2("white");
  setValue3("white");
  setValue4("white");
// setAll(!all);
 }
const [check,setCheck]=useState(false);
 useEffect(()=>{
  // console.log("user "+JSON.stringify(user));
  // console.log("user "+user.email);
  if(user==null){
    navigate("/login");
    return;
  }
  fetch(category).then(
    (res)=>{
      let data=res.json()
      // console.log(data);
      return data;
    }
  
  
  ).then((data)=>{
setProducts([...data]);
let val=Math.ceil(data.length/10);
let arr=[1];
for(let i=2;i<=val;i++)
arr.push(i);
setPagesArr([...arr]);
localStorage.setItem("products",JSON.stringify([...data]));
// console.log("CartVal"+cartVal)
// console.log("CartVal"+cart)
setCart(cartVal);

})
// console.log("window->"+window.innerWidth);
// let checkVal=window.innerWidth;
// console.log("checkVal->"+checkVal);
// if(checkVal<427)
// setCheck(true);
},[category]);
  
  const addToBag=(obj)=>{
    if(cart==false)
   setCart(true);
    let val=document.getElementById(obj.ProdId).value;
    // let present=false;
    let idx=-1;
    for(let i=0;i<BigObj.length;i++)
    {
      console.log("Prev BigObj "+BigObj[0].Quantity);
     if(BigObj[i].ProdId==obj.ProdId)
     idx=i;
    }
    if(idx!=-1)
    {
BigObj[idx].Quantity=Number(BigObj[idx].Quantity)+Number(val);
      
    }else{
   
 BigObj.push({
  
    Name:obj.Name,
    Price:obj.Price,
    Image:obj.Image,
    ProdId:obj.ProdId ,
    Quantity:val,
    Category:categoryName,
    Service:service
  
 })
}
// console.log("Prev BigObj "+BigObj[0].Quantity);
//  console.log("Updated BigObj"+BigObj.length);
 setSelectedItems(BigObj.length);
 localStorage.setItem("BigObj",JSON.stringify(BigObj));
 localStorage.setItem("cart",true);
localStorage.setItem("selectedItems",BigObj.length);
  }
 

const handleCart=()=>{
  // localStorage.setItem("BigObj",JSON.stringify(BigObj));
  navigate("/cart");
}
  return (
    <div className='w-full h-full '>
      <Navbar></Navbar>
<div className='product hidden sm:block  bg-white 'id="check">
      <div className='bg-white  w-full h-1/4 flex items-end justify-start fixed z-20 p-3 mt-4'>
     
   <div className="w-11/12  h-12  flex items-center  rounded mx-2 "style={{border:"solid"}}>
 
 <button ><i class="fa-solid fa-magnifying-glass ml-4"></i></button>
   <input type="search"  id="search1" className=" w-full h-1/2 p-2 outline-none  " placeholder="Search Here " onChange={()=>handleSearch("search1")} value={searchValue} />
   <button className='bg-drymeBlue text-white  rounded-lg px-4 h-3/4'onClick={()=>handleSearch("search1")} >Search</button>
   </div>
   <button className='bg-white  text-white w-1/6 h-12 rounded-lg  mx-2 text-3xl ' onClick={handleCart} style={{border:"solid",borderColor:"#194376"}}>
    {
      (BigObj.length==0)?
      
    <i class="fa-solid fa-cart-shopping text-drymeBlue"></i>
    :<i class="fa-solid fa-cart-plus text-drymeBlue " style={{color:"#46C6CE"}}><span className='text-lg'>{BigObj.length}</span></i>
}
     </button> 
   <button className='bg-white text-drymeBlue w-1/6  h-12 rounded-lg mx-2 text-md' onClick={()=>dispatch({type:"handleVisibleCat",payload:open1})} style={{border:"solid",borderColor:"#194376"}}>Category 
  {
    (state.open1==false)?
   <i class="ml-2 fa-sharp fa-solid fa-caret-down "></i>:<i class="ml-2 fa-solid fa-xmark font-bold"></i>
  }
 </button>
   
   <button className='bg-white  text-drymeBlue w-1/6 h-12 rounded-lg  mx-2'onClick={()=>dispatch({type:"handleVisibleSer",payload:open2})} style={{border:"solid",borderColor:"#194376"}}>Select Service 
   {(state.open2==false)?
   <i class="ml-2   fa-sharp fa-solid fa-caret-down"></i>:<i class="ml-2 fa-solid fa-xmark font-bold"></i>
}
   </button> 
   
  


      </div>
      <div className='bg-white w-full h-max flex flex-wrap z-30' style={{paddingTop:"12%"}}>
  
      {
  (state.visibleCat==true)?<div className='Box1 bg-drymeBlue  fixed  rounded-b-lg z-30 h-auto'>

<ul>
    <li className='underline text-gray-400 my-1 cursor-pointer' onClick={()=>handleCategory("male")} style={{color:val1}}>Men</li>
    <li className='underline text-gray-400 my-1 cursor-pointer'onClick={()=>handleCategory("female")} style={{color:val2}}>Female</li>
    {/* <li className='underline text-gray-400 my-1 text-white'>Others</li> */}
  </ul>
</div>
:

<div className='Box1 bg-white  fixed  rounded-b-lg z-30'style={{visibility:"hidden"}} >

<ul>
    <li className='underline text-gray-400 my-1 '>Men</li>
    <li className='underline text-gray-400 my-1'>Female</li>
    <li className='underline text-gray-400 my-1'>Others</li>
  </ul>
</div>

}
{
  (state.visibleSer==true)?
<div className='Box2  bg-drymeBlue   rounded-b-lg  h-auto z-30'>

<ul>
    <li className='underline text-gray-400 my-1  cursor-pointer' onClick={()=>handleService("Wash")} style={{color:value1}}>Wash</li>
    <li className='underline text-gray-400 my-1 cursor-pointer'onClick={()=>handleService("Iron")} style={{color:value2}}>Iron</li>
    <li className='underline text-gray-400 my-1  cursor-pointer'onClick={()=>handleService("Wash&Iron")} style={{color:value3}}>Wash&Iron</li>
    <li className='underline text-gray-400 my-1  cursor-pointer'onClick={()=>handleService("DryCleaning")} style={{color:value4}}>DryCleaning</li>
  </ul>
</div>
:
<div className='Box2 bg-white   z-30 'style={{visibility:"hidden"}} >

<ul>
    <li className='underline text-gray-400 my-1'>Wash</li>
    <li className='underline text-gray-400 my-1'>Iron</li>
    <li className='underline text-gray-400 my-1'>DryCleaning</li>
  </ul>
</div>
}







{
  
  products.map((obj)=>{
    // {console.log(JSON.stringify(products))}
//  {console.log("currPage->"+currPage+" and i-> "+i)}
    return (
      (window.innerWidth>427&&i<currPage*12&&i++>=(currPage-1)*12)?
<div className='w-1/5 bg-red-400 h-1/2 m-8 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-64'>
  <img src={obj.Image} className='w-full h-full'></img>
</div>
<div className='flex'>
<div className='bg-white font-bold text-xl w-1/2 flex flex-start pl-2'>{obj.Name}</div>
<div className='bg-white font-bold text-xl w-1/2 flex justify-end pr-2'><span>Rs {obj.Price}</span></div>
</div>

<div className='bg-drymeBlue h-10 flex '>{
(obj.ProdId!=100)?
  <input type="number" id={obj.ProdId} className='h-full w-1/2 p-2 text-2xl border-2 border-drymeBlue ' defaultValue={1} ></input>:
  <input type="number" id={obj.ProdId} className='h-full w-1/2 p-2 text-2xl' defaultValue={1} autoFocus></input>
}
  <button className='w-1/2 h-full bg-drymeBlue text-white hover:bg-black' onClick={(e)=>addToBag(obj)}>AddToBag</button> 
</div>

</div>   
:<></>
    )
  })
}





       </div>
       <div className='p-4 bg-white'>
       <nav aria-label="Page navigation example ">
  <ul class="inline-flex -space-x-px ">
    <li>
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handlePrevious}>Previous</a>
    </li>
    { 
  pagesArr.map((obj)=>{
    return (
   (obj==currPage)? 
    <li>
      <a href="#" class="px-3 py-2 bg-drymeBlue text-white leading-tight text-gray-500  border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 "onClick={()=>handlePage(obj)}>{obj}</a>
    </li>
    :
    <li>
    <a href="#" class="px-3 py-2  text-drymeBlue  leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>handlePage(obj)}>{obj}</a>
  </li>
    )
    })
  } 
    

    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleNext}>Next</a>
    </li>
  </ul>
</nav>
</div>

{/* /////////////////////////////////////////////////////////// */}

</div>
<div className='product block sm:hidden white'>
      <div className=' bg-white w-full h-52 items-end flex flex-wrap fixed z-10  mt-4'>
     <div className='SearchBoxandCard h-12 w-full  flex mt-28 mb-0'>
   <div className="w-10/12     flex items-center  rounded mx-2 "style={{border:"solid"}}>
 
 <button ><i class="fa-solid fa-magnifying-glass "></i></button>
   <input type="search"  id="search2" className=" w-full h-2/3 p-2 outline-none  " placeholder="Search Here " onChange={()=>handleSearch("search2")} value={searchValue} />
   <button className='bg-drymeBlue text-white  rounded-lg  h-2/3 text-sm p-1'onClick={()=>handleSearch("search2")} >Search</button>
   </div>
   <button className='  text-white w-2/12 h-12 rounded-lg  mx-2 text-3xl ' onClick={handleCart} style={{border:"solid",borderColor:"#194376"}}>
    {
      (BigObj.length==0)?
      
    <i class="fa-solid fa-cart-shopping text-drymeBlue"></i>
    :<i class="fa-solid fa-cart-plus text-drymeBlue " style={{color:"#46C6CE"}}><span className='text-lg'>{BigObj.length}</span></i>
}
     </button> 
     </div>
   <div className='flex w-full pb-2 h-24  flex-col'>
    <div className='flex w-full  pt-2 '>
     <button className='bg-white text-drymeBlue   h-full rounded-lg mx-2 text-md w-1/2' onClick={()=>dispatch({type:"handleVisibleCat",payload:open1})} style={{border:"solid",borderColor:"#194376"}}>Category 
  {
    (state.open1==false)?
   <i class="ml-2 fa-sharp fa-solid fa-caret-down "></i>:<i class="ml-2 fa-solid fa-xmark font-bold"></i>
  }
 </button>
   
   <button className='bg-white  text-drymeBlue h-full rounded-lg  mx-2 w-1/2'onClick={()=>dispatch({type:"handleVisibleSer",payload:open2})} style={{border:"solid",borderColor:"#194376"}}>Select Service 
   {(state.open2==false)?
   <i class="ml-2   fa-sharp fa-solid fa-caret-down"></i>:<i class="ml-2 fa-solid fa-xmark font-bold"></i>
}
   </button>
   </div>
<div className=' w-full h-full flex bg-white  '>
  {
       (state.open1==true)?
   <div className=' bg-drymeBlue    rounded-b-lg z-10 w-1/2 h-full mx-2'>

<ul>
    <li className='underline text-gray-400 h-1/2  cursor-pointer' onClick={()=>handleCategory("male")} style={{color:val1}}>Men</li>
    <li className='underline text-gray-400 h-1/2  cursor-pointer'onClick={()=>handleCategory("female")} style={{color:val2}}>Female</li>
    {/* <li className='underline text-gray-400 my-1 text-white'>Others</li> */}
  </ul>
</div>:<div className='w-1/2 h-full bg-white mx-2'></div>
}
{
   (state.open2==true)?
<div className='  bg-drymeBlue     h-full w-1/2 mx-2 flex flex-wrap'>


    <div className='underline text-gray-400 h-1/2 w-1/2 text-xs cursor-pointer pt-1 ' onClick={()=>handleService("Wash")} style={{color:value1}}>Wash</div>
    <div className='underline text-gray-400 h-1/2 w-1/2 text-xs cursor-pointer pt-1'onClick={()=>handleService("Iron")} style={{color:value2}}>Iron</div>
    <div className='underline text-gray-400 h-1/2 w-1/2 text-xs cursor-pointer'onClick={()=>handleService("Wash&Iron")} style={{color:value3}}>Wash&Iron</div>
    <div className='underline text-gray-400 h-1/2 w-1/2 text-xs  rounded-b-lg cursor-pointer'onClick={()=>handleService("DryCleaning")} style={{color:value4}}>DryCleaning</div>
  
</div>
:
<div className='bg-white   h-full w-1/2 mx-2  '></div>
}
</div>
   </div>

      </div>
      
      <div className='bg-white w-full h-max flex flex-wrap ' style={{paddingTop:"60%"}}>
  









{
//  console.log("products.length")}
  products.map((obj)=>{
   
 
 
    return (
      (i<currPage*12&&i++>=(currPage-1)*12)?
<div className='w-1/2  h-1/2  p-1 justify-center drop-shadow-2xl	'>
<div className='bg-gray-400 w-full h-64'>
  <img src={obj.Image} className='w-full h-full'></img>
</div>
<div className='flex'>
<div className='bg-white font-bold text-xl w-1/2 flex flex-start pl-2'>{obj.Name}</div>
<div className='bg-white font-bold text-xl w-1/2 flex justify-end pr-2'><span>Rs {obj.Price}</span></div>
</div>

<div className='bg-drymeBlue h-10 flex '>{
(obj.ProdId!=100)?
  <input type="number" id={obj.ProdId} className='h-full w-1/2 p-2 text-2xl border-2 border-drymeBlue ' defaultValue={1} ></input>:
  <input type="number" id={obj.ProdId} className='h-full w-1/2 p-2 text-2xl' defaultValue={1} autoFocus></input>
}
  <button className='w-1/2 h-full bg-drymeBlue text-white hover:bg-black' onClick={(e)=>addToBag(obj)}>AddToBag</button> 
</div>

</div>   
:<></>
    )
  })
}





       </div>
       <div className='p-4 bg-white'>
       <nav aria-label="Page navigation example ">
  <ul class="inline-flex -space-x-px ">
    <li>
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handlePrevious}>Previous</a>
    </li>
    { 
  pagesArr.map((obj)=>{
    return (
   (obj==currPage)? 
    <li>
      <a href="#" class="px-3 py-2 bg-drymeBlue text-white leading-tight text-gray-500  border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 "onClick={()=>handlePage(obj)}>{obj}</a>
    </li>
    :
    <li>
    <a href="#" class="px-3 py-2  text-drymeBlue  leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>handlePage(obj)}>{obj}</a>
  </li>
    )
    })
  } 
    

    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleNext}>Next</a>
    </li>
  </ul>
</nav>
</div>

{/* /////////////////////////////////////////////////////////// */}

</div>

      </div>

   

  )
}

export default Products
