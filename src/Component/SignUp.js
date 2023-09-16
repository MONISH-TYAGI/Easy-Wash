import React, { useEffect, useState } from 'react'
// import { auth, db } from '../Config/Config'
import {db,storage,auth} from '../firebase'
import { Link ,useNavigate} from 'react-router-dom'
// import { getAuth, createUserWithEmailAndPassword } from "../firebase";
// import { doc, setDoc,getDoc } from "../firebase/firestore";
import { setDoc,doc, updateDoc,getDoc } from 'firebase/firestore';
import { AuthContext } from '../Context/AuthContext';
import {useContext} from 'react'
import pic1 from '../img/Pic1.jpg'
import pic2 from '../img/Pic2.jpg'
import pic3 from '../img/Pic3.jpg'
// import { Navigate, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate=useNavigate();
  useEffect(()=>{
    let button=document.getElementById("next");
    setTimeout(function() {button.click()}, 1);
    },[])
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {signUp}=useContext(AuthContext);
    const {user,googleSignIn}=useContext(AuthContext);
    const saveEmailIdAndItsName=async()=>{
     let name=localStorage.getItem("name");
     let email=localStorage.getItem("email");
      try{

        const docRef = doc(db, "SignUpUserData", "email");
        const docSnap = await getDoc(docRef);
      ;
        if(docSnap.exists())
        {
            let res=await updateDoc(doc(db, "SignUpUserData", email), {name});
            // console.log("save update email and name success");
            
          
        }else
        {
            let res=await setDoc(doc(db, "SignUpUserData", email), {name});
            // console.log("save set email and name success");
            
        }
    
}
catch(err)
{
// console.log("Fail name and email save");
// console.log(err);

// console.log(err);
}
finally{
// console.log("finally");
}

    }
  const goToLogin=()=>{
navigate("/login")
  }
  const handelSignUp=async()=>{
   
      let response=await  googleSignIn();
      // console.log("response ->"+response);
      if(response==true){
        try{
    let email=localStorage.getItem("email");
    let name=localStorage.getItem("name");
    // setEmail(email);
    // setName(name);
    let res= await saveEmailIdAndItsName();
        }
      catch(err){
        // console.log("errDB->"+err);
      }
    setEmail('')
  setPassword('')
    // alert("Successful signIn")
navigate("/");
      }else{
        alert("google Auth  Fail");
      }
//       }).then((err)=>{
//         console.log("error in response "+err)
//       })
  

    
//     }catch(error){
//         console.log(error);
//     }
    }
    function validateName(name) {
      const regex = /^[A-Za-z\s'-]+$/;
      return regex.test(name);
    }
  const signup = async(e) => {
    e.preventDefault();
document.getElementById("signUp").classList.remove("bg-drymeBlue");
document.getElementById("signUp").classList.add("bg-black");
    // alert("Sign In");
    if (validateName(name)) {
      console.log("Name is valid.");
    } else {
      setError("Name is not valid.");
      document.getElementById("signUp").classList.remove("bg-black");
      document.getElementById("signUp").classList.add("bg-drymeBlue");
      setTimeout(()=>{
        setError('')

      },3000);
      return ;
    }
    try{

        let userObj = await signUp(email,password)

    setError('')
    localStorage.setItem("email",email);
    localStorage.setItem("name",name);
    let res= await saveEmailIdAndItsName();
        setEmail('')
      setPassword('')
      
      // alert("Successful signIn")
navigate("/login");
        }catch(err)
        {
          // console.log("eror->"+err.message);
          if(err.message=="Firebase: Error (auth/email-already-in-use).")
          setError("Email Already In Use");
          else if(err.message=="Firebase: Password should be at least 6 characters (auth/weak-password).")
          setError('Password should be at least 6 characters')
          else
          setError("Check Email and PassWord Again");
          document.getElementById("signUp").classList.remove("bg-black");
          document.getElementById("signUp").classList.add("bg-drymeBlue");
         
          setTimeout(()=>{
            setError('')

          },3000);
          // console.log("fail");
          // alert("Fail signIn")
        }finally{
      // console.log("done");
      
        }
}
  return (
    <div className='w-full h-screen  flex bg-white'>
      <div className='FirstHalf w-3/5 h-full  p-16 hidden sm:flex'>
        <div className='CustomCaraousel  w-full h-full'>
        <div id="carouselExampleCaptions" className="carousel slide relative h-full" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 h-full flex items-end">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden  h-full">
    <div class="carousel-item active relative float-left w-full  h-full">
      <img
        src={pic1 }
        class="block w-full h-full"
        alt="..."
        style={{height:"36.8rem"}} />
      <div class="carousel-caption hidden md:block absolute text-center  ">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full ">
      <img
        src={pic2}
        class="block w-full h-full"
        alt="..."
        style={{height:"36.8rem"}}
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full h-full">
      <img
        src={pic3}
        class="block w-full h-full"
        alt="..."
        style={{height:"36.8rem"}}
         />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
    id="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
  
      <div className='SecondHalf w-2/5 h-full  p-20 sm:flex hidden'>
      <div className='CustomCaraousel  w-full h-5/6 mt-4'>
        <div className='w-full h-1/6 bg-white flex items-center justify-center'>
            <span className='font-bold text-5xl text-drymeBlue'>Easy<span className='text-select'>Wash</span></span>
            </div>
        <div className='w-full h-3/6 '>
            <div className='Email h-1/3 flex flex-column items-start px-2 '>
                <span className=''>Name</span>
                <input type='text ' className='w-full h-1/2 rounded-md  p-2 outline outline-1' 
                onChange={(e) => setName(e.target.value)} value={name} 
                ></input>
            </div>
            <div className='PhoneNumber h-1/3 flex flex-column items-start px-2'>
                <span>Email</span>
                <input type='email' className='w-full h-1/2 rounded-md outline outline-1 p-2' 
                 onChange={(e) => setEmail(e.target.value)} value={email} 
                ></input>
            </div>
            <div className='Password h-1/3 flex flex-column items-start px-2'>
                <span>Password</span>
                <input type='password' className='w-full h-1/2 rounded-md outline outline-1 p-2'
                 onChange={(e) => setPassword(e.target.value)} value={password}
                ></input>
            </div>
            
        </div>
        {error && <span className='error-msg text-red-400'>{error}</span>}
        <div className='w-full h-1/6  flex flex-column items-center px-2  text-white'>
            <button id="signUp" className=' w-full  h-2/4 mt-2 rounded-md bg-drymeBlue  border-2 border-drymeBlue'onClick={signup}>SignUp</button>
            <span className='text-black'>Already Registered ? Login <span className='text-drymeBlue underline cursor-pointer'onClick={goToLogin}> Here</span></span>
        </div>
        <div className='w-full h-1/6 '>
            <div className='w-full h-2/4  flex items-center justify-center text-3xl'>
                <span>OR</span>
                </div>
                <div className='h-2/4 flex  justify-center '>
                <div class="social-icon flex  rounded-xl h-full items-center border border-2 border-drymeBlue cursor-pointer" onClick={handelSignUp}>
                    <img src="https://cdn-teams-slug.flaticon.com/google.jpg"  className="rounded-xl h-full w-fit"width="25px"/>
                        <span class="mx-2 ">SignUp In with Google</span>
                        </div>
                        </div>
        </div>
        <div className='text-drymeBlue underline text-xl font-medium cursor-pointer bh-yellow-200 mt-8 hover:text-black' ><i class="fa-solid fa-house cursor-pointer"></i><Link to="/" className='hover:text-black cursor-pointer'>Back</Link></div>

      </div>
      </div>
      <div className='SecondHalf w-full h-full    flex sm:hidden '>
      <div className='CustomCaraousel  w-full h-5/6 mt-4'>
        <div className='w-full h-1/6 bg-white flex items-center justify-center'>
            <span className='font-bold text-5xl text-drymeBlue'>Easy<span className='text-select'>Wash</span></span>
            </div>
        <div className='w-full h-3/6 '>
            <div className='Email h-1/3 flex flex-column items-start px-2 '>
                <span className=''>Name</span>
                <input type='text ' className='w-full h-1/2 rounded-md  p-2 outline outline-1' 
                onChange={(e) => setName(e.target.value)} value={name} 
                ></input>
            </div>
            <div className='PhoneNumber h-1/3 flex flex-column items-start px-2'>
                <span>Email</span>
                <input type='email' className='w-full h-1/2 rounded-md outline outline-1 p-2' 
                 onChange={(e) => setEmail(e.target.value)} value={email} 
                ></input>
            </div>
            <div className='Password h-1/3 flex flex-column items-start px-2'>
                <span>Password</span>
                <input type='password' className='w-full h-1/2 rounded-md outline outline-1 p-2'
                 onChange={(e) => setPassword(e.target.value)} value={password}
                ></input>
            </div>
            
        </div>
        {error && <span className='error-msg text-red-400'>{error}</span>}
        <div className='w-full h-1/6  flex flex-column items-center px-2  text-white'>
            <button id="signUp" className=' w-full  h-2/4 mt-2 rounded-md bg-drymeBlue  border-2 border-drymeBlue'onClick={signup}>SignUp</button>
            <span className='text-black'>Already Registered ? Login <span className='text-drymeBlue underline cursor-pointer'onClick={goToLogin}> Here</span></span>
        </div>
        <div className='w-full h-1/6 '>
            <div className='w-full h-2/4  flex items-center justify-center text-3xl'>
                <span>OR</span>
                </div>
                <div className='h-2/4 flex  justify-center '>
                <div class="social-icon flex  rounded-xl h-full items-center border border-2 border-drymeBlue cursor-pointer" onClick={handelSignUp}>
                    <img src="https://cdn-teams-slug.flaticon.com/google.jpg"  className="rounded-xl h-full w-fit"width="25px"/>
                        <span class="mx-2 ">SignUp In with Google</span>
                        </div>
                        </div>
        </div>
        <div className='text-drymeBlue underline text-xl font-medium cursor-pointer bh-yellow-200 mt-4 hover:text-black ' ><i class="fa-solid fa-house cursor-pointer"></i><Link to="/" className='hover:text-black cursor-pointer'>Back</Link></div>

      </div>

      </div>

    </div>
  )
}

export default SignUp
