import React, { useEffect, useState } from 'react'
// import { auth, db } from '../Config/Config'
import {db,storage,auth} from '../firebase'
import { Link ,useNavigate} from 'react-router-dom'
// import { getAuth, createUserWithEmailAndPassword } from "../firebase";
// import { doc, setDoc,getDoc } from "../firebase/firestore";
import { setDoc,doc, updateDoc,getDoc } from 'firebase/firestore';
import { AuthContext } from '../Context/AuthContext';
import {useContext} from 'react'
import {  ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import Navbar from './Navbar'

function Reviews() {
    const handleInput=()=>{
        let upload=document.getElementById("file");
        upload.click();
    }
    let userEmailId=localStorage.getItem("email");
    const [file,setFile]=useState(null);
    const[loading,setLoading]=useState(false);
    const [error, setError] = useState('');
    const navigate=useNavigate();
  
    const SaveImage=async()=>{
        const storageRef = ref(storage, `${user.email}/Profile`);
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        // // Listen for state changes, errors, and completion of the upload.
        try{
          alert("Uploading Started");
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            alert("Upload fail");
              console.log(error)
          
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              console.log("File available at", downloadURL);
              alert("Upload Successfull");
              // let userData = {
              //   fullName,
              //   email,
              //   password,
              //   profilePhoto: downloadURL,
              //   uid: userInfo.user.uid,
              //   posts:[]
              // };
  
              // await setDoc(doc(db, "users", ), userData);
            });
          }
        );
        }
          // console.log("user signed up");
          catch (err) {
            console.log("err", err);
            // setError(err.code);
            setTimeout(() => {
              // setError('')
            }, 2000);
          }
      }
      
    const {user}=useContext(AuthContext);
    useEffect(()=>{
        if(user==null)
        {
            navigate("/login");
            return ;
        }
    },[])
  return (
    <div className="h-full bg-white">
        <Navbar></Navbar>
        <div className=' w-2/3 h-20 mt-36 flex justify-between items-end border-b-4'>
<span className='ml-2 text-5xl items-end text-drymeBlue font-bold'>Reviews</span>
<button className="bg-drymeBlue text-1xl text-white mr-2  px-4 py-1 rounded-md">Sort By<i class="fa-solid fa-caret-down ml-2"></i></button>
        </div>
        <br></br>
        
        <div className='w-20 h-auto bg-drymeBlue text-white fixed flex flex-column sort rounded p-1'>
            <div style={{fontSize:"0.8rem"}} className='mb-1'>Date</div>
            <div style={{fontSize:"0.8rem"}} className='mb-1 underline text-gray-300'>Ratings High to Low</div>
            <div style={{fontSize:"0.8rem"}} className='mb-1'>Ratings Low to High</div>
        </div>
      <div className='w-full h-fit   flex'>
        <div className='w-2/3  h-full   flex flex-column pb-4'>
        <div className='w-5/6  h-52 ml-12 mt-4 flex drop-shadow-2xl mb-4'>
                <div className='w-1/3 h-full  '>
                    <img className='w-full h-full' src="https://smart-dhopa-online-laundry-app.web.app/static/media/customer-1.f217f346.jpg" style={{borderRadius:"50%"}}></img>
                </div>
                <div className='w-2/3 h-full bg-blue-200'>
                    <div className="Text w-full h-3/4 bg-gray-400 flex items-center">
                   <span> 
                    Lorem ipsum dolor sit amet conseh-fullctetur adipisicing elit. Quae ut doloribus eaque odio nulla est, sit hic minima in corporis
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque odio nulla est, sit hic minima in corporis
                    .</span>
                    </div>
                    <div className='Star w-full h-1/4 bg-white flex items-center justify-start '>
                        <div className='w-1/2 h-full'>
                    <i class="fa-solid fa-star text-drymeBlue text-5xl"></i>
                    <i class="fa-solid fa-star text-drymeBlue text-5xl"></i>
                    <i class="fa-solid fa-star text-drymeBlue text-5xl"></i>
                    <i class="fa-solid fa-star text-drymeBlue text-5xl"></i>
                    <i class="fa-regular fa-star text-5xl"></i>
</div>
<div className='w-1/2 h-full flex flex-column justify-end items-end pr-2'>
<span>Review By: Avnit Singh</span>
<span>Dated: 22,August,2012</span>
</div>
                    </div>
                </div>
            </div>
                <div className='w-5/6  h-52 ml-12 mt-4 flex flex-row-reverse drop-shadow-2xl mb-4'>
                <div className='w-1/3 h-full '>
                    <img className='w-full h-full' src="https://smart-dhopa-online-laundry-app.web.app/static/media/customer-1.f217f346.jpg" style={{borderRadius:"50%"}}></img>
                </div>
                <div className='w-2/3 h-full bg-blue-200'>
                    <div className="Text w-full h-3/4 bg-gray-400 flex items-center">
                   <span> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque odio nulla est, sit hic minima in corporis
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut doloribus eaque odio nulla est, sit hic minima in corporis
                    .</span>
                    </div>
                    <div className='Star w-full h-1/4 bg-white flex items-center justify-center'>
                    <i class="fa-solid fa-star text-drymeBlue text-5xl"></i>
                    <i class="fa-solid fa-star text-drymeBlue text-5xl"></i>
                    <i class="fa-solid fa-star text-drymeBlue text-5xl"></i>
                    <i class="fa-solid fa-star text-drymeBlue text-5xl"></i>
                    <i class="fa-regular fa-star text-5xl"></i>
                    </div>
                </div>
            </div>
  

                       
        </div>
        <div className='w-1/3 bg-white h-full '>
          <img className='w-full h-full bg-red-200 uploadImg drop-shadow-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU" style={{borderRadius:"50%"}}></img>
          <div className="file bg-red-200 inline   fixed z-20 imageUploadIcon" onClick={handleInput}>
          <i class="fa-solid fa-camera text-3xl"></i>
  <input type="file" id="file" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
  <i class="fa-solid fa-plus"></i>
</div>
          <div className='OuterCommentBox w-1/4 h-1/3 bg-white mt-2 m-auto fixed top-1/2 pt-8 drop-shadow-2xl' style={{right:"5%"}} >
            
            <div className='First  h-1/5  flex items-center justify-center  '>
                    <i class="fa-regular fa-star text-4xl"></i>
                    <i class="fa-regular fa-star text-4xl"></i>
                    <i class="fa-regular fa-star text-4xl"></i>
                    <i class="fa-regular fa-star text-4xl"></i>
                    <i class="fa-regular fa-star text-4xl"></i>
            </div>
            
            <div className='First w-full h-3/5 bg-gray-200'>
              <textarea className='w-full h-full p-2' autoFocus></textarea>
            </div>
            <div className='First w-full h-1/5 bg-drymeBlue text-white'>
           <button className='w-full h-full text-3xl' onClick={SaveImage}>Add Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
