import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import Signup from './Signup'

// import Login from '../Validation/Login'
import bgimg from '../../assets/background.png'
import img1 from '../../assets/login.webp'



const Login = () => {

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


                <div className='px-10 text-white my-auto flex flex-col gap-5 '>
                    <h1 className='mx-auto text-4xl mb-10'>Login</h1>

                    <div className="social-container mx-auto flex gap-7 ">
                        <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
                            <ImFacebook className="text-xl" />
                            {/* <i className="fab fa-facebook-f" /> */}
                        </a>
                        <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
                            <FcGoogle className="text-xl" />
                            {/* <i className="fab fa-google-plus-g" /> */}
                        </a>
                        <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
                            <TfiLinkedin className="text-xl" />
                            {/* <i className="fab fa-linkedin-in" /> */}
                        </a>
                    </div>
                    <p className='text-[20px] font-semibold'>- - - - - - - - - Or - - - - - - - - -</p>
                    <form className='flex flex-col gap-7 w-full'>
                        <input type='email' placeholder='Email' className='bg-transparent rounded-lg border py-2 px-5 outline-none' />
                        <input type='password' placeholder='Password' className='bg-transparent rounded-lg border py-2 px-5 outline-none' />
                        <a href="#" className='text-white '>Forgot your password ?</a>
                        <button className='border w-fit mx-auto py-2 px-10 rounded-xl text-xl font-semibold'>Login</button>
                    </form>
                    <div>
                        <h1>Dont't have a account ? <a href="/signup" className="underline " onClick={<Signup/>} >Register Now</a></h1>
                    </div>
                </div>

            </div>



        </div>



    );

}

export default Login;
