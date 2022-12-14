import React from 'react'

function SignUp() {
  return (
    <div className='w-full h-screen  flex bg-white'>
      <div className='FirstHalf w-3/5 h-full  p-16'>
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
        src="https://i.ibb.co/xLz698n/Pic1.jpg"
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
        src="https://i.ibb.co/VCGBqLr/Pic3.jpg"
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
        src="https://i.ibb.co/9qG8dny/Pic2.webp"
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
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
      <div className='SecondHalf w-2/5 h-full  p-20'>
      <div className='CustomCaraousel  w-full h-5/6 mt-4'>
        <div className='w-full h-1/6 bg-white flex items-center justify-center'>
            <span className='font-bold text-5xl text-drymeBlue'>Easy<span className='text-select'>Wash</span></span>
            </div>
        <div className='w-full h-3/6 '>
            <div className='Email h-1/3 flex flex-column items-start px-2 '>
                <span className=''>Name</span>
                <input type='text ' className='w-full h-1/2 rounded-md  p-2 outline outline-1' 	></input>
            </div>
            <div className='PhoneNumber h-1/3 flex flex-column items-start px-2'>
                <span>PhoneNumber</span>
                <input type='number' className='w-full h-1/2 rounded-md outline outline-1 p-2'></input>
            </div>
            <div className='Password h-1/3 flex flex-column items-start px-2'>
                <span>Password</span>
                <input type='password' className='w-full h-1/2 rounded-md outline outline-1 p-2'></input>
            </div>
            
        </div>
        <div className='w-full h-1/6  flex flex-column items-center px-2 '>
            <button  className='bg-drymeBlue w-full text-white h-2/4 mt-2 rounded-md'>SignUp</button>
            <span>Already Registered ? Login <span className='text-drymeBlue underline'> Here</span></span>
        </div>
        <div className='w-full h-1/6 '>
            <div className='w-full h-2/4  flex items-center justify-center text-3xl'>
                <span>OR</span>
                </div>
                <div className='h-2/4 flex  justify-center '>
                <div class="social-icon flex  rounded-xl h-full items-center border border-2 border-drymeBlue">
                    <img src="https://cdn-teams-slug.flaticon.com/google.jpg"  className="rounded-xl h-full w-fit"width="25px"/>
                        <span class="mx-2 ">SignUp In with Google</span>
                        </div>
                        </div>
        </div>
       
      </div>
      </div>

    </div>
  )
}

export default SignUp
