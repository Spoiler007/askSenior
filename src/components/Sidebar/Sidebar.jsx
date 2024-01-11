import React from 'react'
import { RiShutDownLine } from "react-icons/ri";
import { LiaImagesSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Profile from '../../pages/Profile';




const Sidebar = () => {
    return (
        <div className='shadow-inner bg-gradient-to-b from-purple-700 text-white to-blue-500 h-[60vh] rounded-md flex flex-col px-5 pr-20 gap-7'>
            <section className='flex items-center gap-2 text-2xl font-semibold text-gray-800 mx-auto pt-5'> <MdOutlineDashboard /> Dashboard </section>
            <div className='flex items-center gap-2 text-xl cursor-pointer hover:bg-black/40 w-[200px] pl-5 py-1 rounded-lg  font-semibold'>
                <FaHome className='text-2xl' />
                <a href='/home'  className=''>Home</a>
            </div>
            <div className='flex items-center gap-2 text-xl cursor-pointer hover:bg-black/40 w-[200px] pl-5 py-1 rounded-lg  font-semibold'>
                <CgProfile className='text-2xl' />
                <a href='/profile' className=''>Profile</a>
            </div>
            <div className='flex items-center gap-2 text-xl font-semibold cursor-pointer  hover:bg-black/40 w-[200px] pl-5 py-1 rounded-lg'>
                <LiaImagesSolid className='text-2xl' />
                <h1 className=''>Posts</h1>
            </div>

            <div className='flex font-semibold border bg-white cursor-pointer  rounded-lg text-yellow-400'>

                <h1 className='flex gap-2 text-2xl text-center items-center mx-auto'> <RiShutDownLine className=' text-red-500' />Logout</h1>
            </div>
        </div>
    )
}

export default Sidebar;