import React, { useEffect, useState } from 'react'
// import { auth, db } from '../Config/Config'
import {db,storage,auth} from '../firebase'
import { Link ,useNavigate} from 'react-router-dom'
// import { getAuth, createUserWithEmailAndPassword } from "../firebase";
// import { doc, setDoc,getDoc } from "../firebase/firestore";
import { setDoc,doc, updateDoc,getDoc, getDocs, collection } from 'firebase/firestore';
import { AuthContext } from '../Context/AuthContext';
import {useContext} from 'react'
import {  ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import Navbar from './Navbar'

function Reviews() {
   
  const [val1,setVal1]=useState({
    fontSize: "0.8rem",
    
    
  })
  
  const [val2,setVal2]=useState({
    fontSize:"0.8rem",
    
  })
  const [val3,setVal3]=useState({
    fontSize:"0.8rem",
    
  })
  

  
  const [change2,setChange2]=useState(false);
    const handleInput=()=>{
        let upload=document.getElementById("file");
        upload.click();
    }
    const [change,setChange]=useState(false);
    const [star,setStar]=useState(0);
    const [image,setImage]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU");
    const handleStar=(val)=>{
      setStar(val);
    }
    const [reviews,setReviews]=useState([])
   const [show,setShow]=useState(false);
    let i=0;
    const [text,setText]=useState("");
    let userEmailId=localStorage.getItem("email");
    const [file,setFile]=useState(null);
    const[loading,setLoading]=useState(false);
    const [error, setError] = useState('');
    const navigate=useNavigate();
    const handleLowToHigh=()=>{
      // console.log("low to high");
      reviews.sort(function(a, b){return a.Star - b.Star});
      setVal3({
        fontSize: "0.8rem",
        color: "rgb(209 213 219)",
        textDecoration: "underline"

      })
      setVal2({fontSize:"0.8rem"})
      setVal1({fontSize:"0.8rem"})
      // console.log("first"+reviews[0].Star);
      setChange(!change);
    }
 
    const handleHighToLow=()=>{
      // console.log("low to high");
      setVal2({
        fontSize: "0.8rem",
        color: "rgb(209 213 219)",
        textDecoration: "underline"

      })
      setVal1({fontSize:"0.8rem"})
      setVal3({fontSize:"0.8rem"})
      reviews.sort(function(a, b){return b.Star - a.Star});
      // console.log("first"+reviews[0].Star);
      setChange(!change);
    }
    const handleDateWise=()=>{
      // console.log("low to high");
      setVal1({
        fontSize: "0.8rem",
        color: "rgb(209 213 219)",
        textDecoration: "underline"

      })
      setVal2({fontSize:"0.8rem"})
      setVal3({fontSize:"0.8rem"})
      reviews.sort(function(a, b){return parseInt(b.Date) - parseInt(a.Date)});
     
      setChange(!change);
    }
    const saveReviews=async(downloadURL,curr,a,b)=>{
      try{
        const docRef = doc(db, "Reviews", userEmailId);
        const docSnap = await getDoc(docRef);
  let name=localStorage.getItem("name");
  // console.log("name"+name);
  let common=new Date();
  let date=common.getDate()+"-"+common.getMonth()+"-"+common.getFullYear();
  // console.log("date ",date);
  let time=common.getHours()+":"+common.getMinutes()+":"+common.getSeconds();
  var ampm = common.getHours >= 12 ? 'pm' : 'am';

  let Id=common.getFullYear()+""+common.getMonth()+""+common.getDate()+""+common.getHours()+""+common.getMinutes()+""+common.getSeconds();
      let subData={
        Name:name,
        Star:a,
        Text:b,
        Date:date,
        Time:time,
        Image:downloadURL,
        zone:ampm,
        Id:Id

            }
        if(docSnap.exists())
        {
            let res=await updateDoc(doc(db, "Reviews", userEmailId), subData);
            // alert("data update");
            
          
        }else
        {
            let res=await setDoc(doc(db, "Reviews", userEmailId), subData);
            // console.log("data set");
            
        }
        // alert("Please Wait & Refresh");
    
}
catch(err)
{
// console.log("Data Not Set");
// console.log(err);

// console.log(err);
}
finally{
// console.log("finally");
}

    }
    const [check,setCheck]=useState(false);
   const handleDisplayImage=(e)=>{
    // console.log("hello");
    setFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));

   }
    const SaveImage=async(id)=>{
      setCheck(true)
      let fileCon=file;
      setFile(null);
      document.getElementById(id).classList.remove("bg-drymeBlue");
      document.getElementById(id).classList.add("bg-black");
      let starCon=star;
      let textCon=text;
 
      
setStar(0);
setText('');

        const storageRef = ref(storage, `${user.email}/Profile`);
        // if(file==null)
        // setFile("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU")
        const uploadTask = uploadBytesResumable(storageRef, fileCon);
  
      
        try{
        
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
            // console.log("Upload is " + progress + "% done");
          },
          (error) => {
          
            alert("Upload fail");
              // console.log(error)
          
          },
          () => {
           
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              // console.log("File available at", downloadURL);
              
         if(file==null)
         downloadURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU";
let res=await saveReviews(downloadURL,false,starCon,textCon);


setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU")
document.getElementById(id).classList.remove("bg-black");
document.getElementById(id).classList.add("bg-drymeBlue");
setChange2(!change2);
setCheck(false)
            });
          }
        );
        }
         
          catch (err) {
            // console.log("err", err);
       alert("Failed To Upload Review");
       document.getElementById(id).classList.remove("bg-black");
       document.getElementById(id).classList.add("bg-drymeBlue");
            // setTimeout(() => {
             setCheck(false)
            // }, 2000);
          }
      
      }
      
    const {user}=useContext(AuthContext);
    useEffect(()=>{
        if(user==null)
        {
            navigate("/login");
            return ;
        }
       
        async function fetchData() {
          let arr=[];
        const querySnapshot = await getDocs(collection(db, "Reviews"));
      querySnapshot.forEach((doc) => {
        arr=[...arr,doc.data()];
      })
      
      setReviews([...arr]);
    }
    fetchData();
    
      // console.log("len1"+reviews.length);

    },[change2])
    let s1="";
    // console.log("len2"+reviews.length);
    // console.log("star"+star);
  return (
    
    <div className="h-full bg-white">
        <Navbar></Navbar>
        <div className='hidden sm:block'>
        <div className=' bg-white h-52  fixed w-full flex items-end z-10'>
        <div className=' w-2/3 h-20  flex justify-between items-end border-b-4 fixed z-10 bg-white'>
<span className='ml-2 text-5xl items-end text-drymeBlue font-bold'>Reviews</span>
<button className="bg-drymeBlue text-1xl text-white   px-4 py-1 rounded-md" style={{width:"12%"}} onClick={()=>setShow(!show)}>Sort By<i class="fa-solid fa-caret-down ml-2"></i></button>
        </div>
        <br></br>
        </div>
      
      <div className='w-full h-fit   flex'>
        <div className='w-2/3  h-full   flex  pb-4 mt-52 '>
          <div className=' h-full 'style={{width:"88%"}}>
          {
            reviews.map((obj,index)=>{
              // {console.log("obj"+obj.Image)}
            {(index%2==1)?s1="row-reverse":s1=""} 
              return  (
            
        <div className='w-11/12  h-44 ml-12 mt-4 flex drop-shadow-2xlA mb-6  ' style={{flexDirection:s1}}>
               
                <div className='w-1/4 h-full  '>
                    <img className='w-full h-full border' src={obj.Image} style={{borderRadius:"50%"}}></img>
                </div>
                <div className='w-5/6 h-full bg-white border rounded-xl '>
                    <div className="Text w-full h-2/3  flex items-center  ">
                   <span className='pl-2 text-lg' > 
                   {obj.Text}
                    .</span>
                    </div>
                    <div className='Star w-full h-1/3 bg-white flex items-center justify-start rounded-xl '>
                        <div className='w-1/2 h-full flex items-center   rounded-xl pl-1'>
            {(obj.Star>=1)?<i class="fa-solid fa-star text-drymeBlue text-3xl"></i>: <i class="fa-regular fa-star text-3xl"></i>}
            {(obj.Star>=2)? <i class="fa-solid fa-star text-drymeBlue text-3xl"></i>: <i class="fa-regular fa-star text-3xl"></i>}
            {(obj.Star>=3)?<i class="fa-solid fa-star text-drymeBlue text-3xl"></i>: <i class="fa-regular fa-star text-3xl"></i>}
            {(obj.Star>=4)?<i class="fa-solid fa-star text-drymeBlue text-3xl"></i>: <i class="fa-regular fa-star text-3xl"></i>}
            {(obj.Star>=5)?<i class="fa-solid fa-star text-drymeBlue text-3xl"></i>: <i class="fa-regular fa-star text-3xl"></i>}
                   
</div>
<div className='w-1/2 h-full flex flex-column justify-end items-end pr-2'>
<span><span className='text-drymeBlue text-md'>Review By:</span> {obj.Name}</span>
<span><span className='text-drymeBlue text-md'>Dated:</span> {obj.Date}</span>
<span><span className='text-drymeBlue text-md'>Time:</span> {obj.Time} {obj.zone}</span>
</div>
                    </div>
                </div>
            </div>
              )
            })
}

</div>
<div className='h-24 rounded-lg  'style={{width:"12%"}}>
{
        (show==true)?
        <div className='w-20 h-auto bg-drymeBlue text-white  flex flex-column sort rounded p-1 '>
            <div style={val1} className="mb-1 cursor-pointer " onClick={handleDateWise} >Date</div>
            <div style={val2} className='mb-1  cursor-pointer' onClick={handleHighToLow} >Ratings High to Low</div>
            <div style={val3} className='mb-1 cursor-pointer' onClick={handleLowToHigh}>Ratings Low to High</div>
        </div>:<></>
}
</div>

                       
        </div>
        <div className='w-1/3 bg-white h-full '>
          <img className='w-3/4 h-3/4  uploadImg drop-shadow-2xl setImage' src={image} style={{borderRadius:"50%"}}></img>
          <div className="file  inline   fixed z-20 imageUploadIcon" onClick={handleInput}>
          <i class="fa-solid fa-camera text-3xl"></i>
  <input type="file" id="file" style={{display:"none"}} onChange={handleDisplayImage} />
  <i class="fa-solid fa-plus"></i>
</div>
          <div className='OuterCommentBox w-1/4 h-1/3 bg-white mt-2 m-auto fixed top-1/2 pt-8 drop-shadow-2xl' style={{right:"5%"}} >
            
         <div className='First  h-1/5  flex items-center justify-center  '>
       {  (star>=1)? <i class="fa-solid fa-star text-4xl text-drymeBlue" onClick={()=>handleStar(0)}></i>:<i class="fa-regular fa-star text-4xl " onClick={()=>handleStar(1)}></i>}
       {  (star>=2)? <i class="fa-solid fa-star text-4xl text-drymeBlue" onClick={()=>handleStar(2)}></i>:<i class="fa-regular fa-star text-4xl " onClick={()=>handleStar(2)}></i>}
       {  (star>=3)? <i class="fa-solid fa-star text-4xl text-drymeBlue" onClick={()=>handleStar(3)}></i>:<i class="fa-regular fa-star text-4xl " onClick={()=>handleStar(3)}></i>}
       {  (star>=4)? <i class="fa-solid fa-star text-4xl text-drymeBlue" onClick={()=>handleStar(4)}></i>:<i class="fa-regular fa-star text-4xl " onClick={()=>handleStar(4)}></i>}
       {  (star>=5)? <i class="fa-solid fa-star text-4xl text-drymeBlue" onClick={()=>handleStar(5)}></i>:<i class="fa-regular fa-star text-4xl " onClick={()=>handleStar(5)}></i>}
                    
            </div>
            
            <div className='First w-full h-3/5 bg-gray-200'>
              <textarea className='w-full h-full p-2 border-2 border-drymeBlue' id="box" autoFocus onChange={(e)=>setText(e.target.value)} value={text}></textarea>
            </div>
            <div className='First w-full h-1/5 bg-drymeBlue text-white'>
              {
            (check==false)?
           <button className='w-full h-full text-xl ' id="saveReview2"  onClick={()=>SaveImage("saveReview2")}>Add Review</button>
           :
           <button className='w-full h-full text-xl ' >Please Wait</button>

            }
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='block sm:hidden '>
        <div className=' bg-white h-52  fixed w-full flex items-end z-10'>
        <div className=' w-full h-20  flex justify-between items-end border-b-4 fixed z-10 bg-white'>
<span className='ml-2 text-5xl items-end text-drymeBlue font-bold'>Reviews</span>
<button className="bg-drymeBlue text-1xl text-white mr-2  px-4 py-1 rounded-md" onClick={()=>setShow(!show)}>Sort By<i class="fa-solid fa-caret-down ml-2"></i></button>
        </div>
        <br></br>
        </div>
      
      <div className='w-full h-fit   flex'>
        <div className='w-full  h-full   flex flex-col  mt-48 '>
          <div className='h-24  w-full flex '>
            <div className='w-8/12 h-full'></div>
          {
        (show==true)?
        <div className='w-4/12 h-full bg-drymeBlue text-white  flex flex-col  rounded   '>
            <div style={val1} className=" cursor-pointer h-1/3     text-xs items-center pt-4" onClick={handleDateWise} ><span>Date</span></div>
            <div style={val2} className='  cursor-pointer h-1/3   text-xs pt-3'  onClick={handleHighToLow} ><span>Ratings High to Low</span></div>
            <div style={val3} className='cursor-pointer h-1/3   text-xs  flex   items-center pb-1 justify-center' onClick={handleLowToHigh}><span className=''>Ratings Low to High</span></div>
        </div>:<></>
}
          </div>
          {
            reviews.map((obj,index)=>{
              // {console.log("obj"+obj.Image)}
            {(index%2==1)?s1="row-reverse":s1=""} 
              return  (
            
        <div className='w-full p-2 h-44  mt-4 flex drop-shadow-2xl mb-4 ' style={{flexDirection:s1}}>
               
                <div className='w-1/4 h-full  '>
                    <img className='w-full h-full ' src={obj.Image} style={{borderRadius:"50%"}}></img>
                </div>
                <div className='w-3/4 h-full bg-white'>
                    <div className="Text w-full h-2/3  flex items-center  ">
                   <span className='pl-2 text-sm' > 
                   {obj.Text}
                    .</span>
                    </div>
                    <div className='Star w-full h-1/3 bg-white flex items-center justify-start '>
                        <div className='w-1/3 h-full flex items-center z-1'>
            {(obj.Star>=1)?<i class="fa-solid fa-star text-drymeBlue text-xl"></i>: <i class="fa-regular fa-star text-xl"></i>}
            {(obj.Star>=2)? <i class="fa-solid fa-star text-drymeBlue text-xl"></i>: <i class="fa-regular fa-star text-xl"></i>}
            {(obj.Star>=3)?<i class="fa-solid fa-star text-drymeBlue text-xl"></i>: <i class="fa-regular fa-star text-xl"></i>}
            {(obj.Star>=4)?<i class="fa-solid fa-star text-drymeBlue text-xl"></i>: <i class="fa-regular fa-star text-xl"></i>}
            {(obj.Star>=5)?<i class="fa-solid fa-star text-drymeBlue text-xl"></i>: <i class="fa-regular fa-star text-xl"></i>}
                   
</div>

<div className='w-2/3 h-full flex flex-column  justify-end items-end pr-2 '>
<span className='text-xs h-1/3'><span className='text-drymeBlue text-xs'>Review By:</span> {obj.Name}</span>
<span className='text-xs  h-1/3'><span className='text-drymeBlue text-xs'>Dated:</span> {obj.Date}</span>
<span className='text-xs h-1/3'><span className='text-drymeBlue text-xs'>Time:</span> {obj.Time} {obj.zone}</span>
</div>
                    </div>
                </div>
            </div>
              )
            })
}

  

                       
        </div>
        <div className='w-full  h-24 fixed flex bg-white bottom-1 pb-2 '>
          <img className='w-1/4 h-full   drop-shadow-2xl ' src={image} style={{borderRadius:"50%"}}></img>
          <div className="file  inline    z-20   flex items-end fixed left-10 bottom-0" onClick={handleInput}>
          <i class="fa-solid fa-camera text-2xl"></i>
  <input type="file" id="file" style={{display:"none"}} onChange={handleDisplayImage} />
  <i class="fa-solid fa-plus"></i>
</div>
          <div className='OuterCommentBox w-3/4 h-full   drop-shadow-2xl' style={{right:"5%"}} >
            
         <div className='First  h-2/5  flex items-center justify-center  '>
       {  (star>=1)? <i class="fa-solid fa-star text-xl text-drymeBlue" onClick={()=>handleStar(0)}></i>:<i class="fa-regular fa-star text-xl " onClick={()=>handleStar(1)}></i>}
       {  (star>=2)? <i class="fa-solid fa-star text-xl text-drymeBlue" onClick={()=>handleStar(2)}></i>:<i class="fa-regular fa-star text-xl " onClick={()=>handleStar(2)}></i>}
       {  (star>=3)? <i class="fa-solid fa-star text-xl text-drymeBlue" onClick={()=>handleStar(3)}></i>:<i class="fa-regular fa-star text-xl " onClick={()=>handleStar(3)}></i>}
       {  (star>=4)? <i class="fa-solid fa-star text-xl text-drymeBlue" onClick={()=>handleStar(4)}></i>:<i class="fa-regular fa-star text-xl " onClick={()=>handleStar(4)}></i>}
       {  (star>=5)? <i class="fa-solid fa-star text-xl text-drymeBlue" onClick={()=>handleStar(5)}></i>:<i class="fa-regular fa-star text-xl " onClick={()=>handleStar(5)}></i>}
                    
            </div>
            <div className='rem h-3/5 flex'>
            <div className='First w-2/3 h-full bg-gray-200'>
              <textarea className='w-full h-full p-2 border-2 border-drymeBlue' id="box" autoFocus onChange={(e)=>setText(e.target.value)} value={text}></textarea>
            </div>
            <div className='First w-1/3 h-full bg-drymeBlue text-white'>{
              (check==false)?
           <button className='w-full h-full text-lg ' id="saveReview1"  onClick={()=>SaveImage("saveReview1")}>Add Review</button>
           :
           <button className='w-full h-full text-lg ' >Please Wait</button>

            }
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Reviews