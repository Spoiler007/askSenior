
import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import bgimg from '../../assets/background.png'
import img1 from '../../assets/login.webp'
import Login from './Login'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import {auth} from '../../firebase'

const Signup = () => {
//     const [submitButtondisable,setSubmitButtondisable] = useState(false)
//  const [values,setValues] = useState({
// name:"",
// email:"",
// password:"",
//     });

//   const handleSubmission = () =>{
// console.log(values)
// setSubmitButtondisable(true);
// createUserWithEmailAndPassword(auth,values.email,values.password).then(
//   (res)=>{
//     setSubmitButtondisable(false)
//     console.log(res)
//   })
// .catch((err) => 
// setSubmitButtondisable(false),
// console.log("Error",err));

  // }
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

       {/* <Login/> */}
{/* <Signup/> */}


<div className='px-10 text-white my-auto flex flex-col bg-black/60 h-full'>
<h1 className='mx-auto text-4xl mb-5 pt-5'>Create Account</h1>
<form className='flex flex-col gap-7 py-5 w-full'>
    <input required onchange={(event) => setValues((prev) => ({...prev, name: event. event.target.value}))} type='text' placeholder='Username' className=' rounded-lg bg-transparent border py-2 px-5 outline-none' />
    <input required onchange={(event) => setValues((prev) => ({...prev, email: event. event.target.value}))} type='email' placeholder='Email' className='bg-transparent rounded-lg border py-2 px-5 outline-none' />
    <input required onchange={(event) => setValues((prev) => ({...prev, password: event. event.target.value}))} type='password' placeholder='Password' className='bg-transparent rounded-lg border py-2 px-5 outline-none' />
    <button className='border w-fit mx-auto py-2 px-10 rounded-xl text-xl font-semibold' 
    // disabled={submitButtondisable}  onClick={handleSubmission}
    >
      Register
      </button>
</form>

<span className="flex text-center gap-2">Have a account ?  <a href="/login" className="underline" onClick={<Login/>}> Click Here</a></span>
<p className='text-[20px] py-2 mx-auto font-semibold'>- - - Or Login with - - -</p>
<div className="social-container mx-auto mt-4 flex gap-7">
    <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
    <ImFacebook  className="text-xl"/>

    </a>
    <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
    <FcGoogle className="text-xl"/>

    </a>
    <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
    <TfiLinkedin className="text-xl"/>

    </a>
</div>
</div>



      </div>



    </div>







    
      );
}

export default Signup;



