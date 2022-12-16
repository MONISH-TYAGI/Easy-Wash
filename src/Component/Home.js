import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Carousel from './Carousel'
import Navbar from './Navbar'

function Home() {
  const {user}=useContext(AuthContext);
  console.log("userEmailId"+localStorage.getItem("email"));
  const navigate=useNavigate();
  useEffect(()=>{
if(user==null)
navigate("/login");
  },[])
  return (
    <>
    <Navbar></Navbar>
    <Carousel></Carousel>
  </>
  )
}

export default Home
