import React,{useState} from 'react'
import bgimg from '../assets/background.png'
import img1 from '../assets/login.webp'
import Login from '../components/Validation/Login'
import Signup from '../components/Validation/Signup'


const Landing = () => {


  return (
    <div className='relative ' >
      <img
        src={bgimg}
        fill={true}
        alt={"Background Image"}
        className='w-full  h-[100vh] blur-sm'
      />

      <div className='w-fit flex h-[80vh] border-2 border-white'
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <img src={img1} alt='' className='h-[80vh]' />
        {/* <Validation /> */}

       <Login/>
{/* <Signup/> */}

      </div>



    </div>

  );
};

export default Landing;
