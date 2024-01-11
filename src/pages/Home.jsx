import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { FcFilledFilter } from "react-icons/fc";
import { data } from '../Data'
import jgec from '../assets/jgec.png'

import { MdOutlineDoubleArrow } from "react-icons/md";
import logo2 from '../assets/logo2.png'
import { FcSearch } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import Sidebar from '../components/Sidebar/Sidebar'


const Home = () => {


    console.log(data);

    const [search, setSearch] = useState('')
    console.log(search);

    const [currPage, setCurrPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const [filteredData, setFilteredData] = useState(data);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    function prePage() {
        if (page > 1) setPage(page - 1);
    }
    function nextPage() {
        if (page * limit < data.length) setPage(page + 1)
    }
    function changeCPage(id) {
        setPage(id);
    }
    useEffect(() => {
        setFilteredData(data.slice((page - 1) * limit + 1, (page) * limit))
    }, [page, limit])


    return (
        <>
            <div className="bg-gradient-to-t from-cyan-500 to-cyan-800 flex pt-2 w-full fixed z-20">
                <div className='flex items-center w-[80%] justify-around mx-auto '>
                    <div className='flex items-center gap-5 '>
                        <img src={logo2} alt="" className='w-[50px] ' />
                        <h1 className='text-3xl font-bold inline-block text-transparent bg-gradient-to-r bg-clip-text from-purple-900  to-pink-600 '>askSenior</h1>
                    </div>
                    <form onChange={(e) => setSearch(e.target.value)}>
                        <div className='border w-[500px] h-fit bg-gray-200 flex items-center justify-between py-2 rounded-lg px-5'>
                            <input type='text' placeholder='Search here . . . .' className='w-[500px] outline-none bg-gray-200 text-black' />
                            <FcSearch className='text-xl cursor-pointer' />
                        </div>
                    </form>
                    <div className='flex items-center ml-5  gap-2'>
                        <IoMdContact className='text-2xl' />
                        <p className='text-xl font-semibold'>Profile Name</p>
                    </div>
                    <button className='border  px-7 py-2 text-gray-700 bg-white  font-semibold rounded-lg'>Logout</button>
                </div>
            </div>


            {/* <Navbar /> */}

            <div className='grid grid-cols-3 pt-20 z-10'>
                <div className='flex px-10 w-fit h-fit py-10'>
                    <div className='fixed'>
                        <Sidebar />

                        <ul className='pagination flex gap-10 float-right mt-20'>
                            <li className='border-2 rounded-md border-cyan-500 bg-white cursor-pointer my-auto px-3 py-1 '>
                                <p className=' flex items-center gap-2 text-xl font-semibold' onClick={() => prePage()}><MdOutlineDoubleArrow className='rotate-180 text-blue-500' />Prev</p>
                            </li>
                            {data.map((n, i) => {
                                <li className={`${currPage === n ? 'active' : ''}`} key={i}>
                                    <a href='#' className='page-item' onClick={() => changeCPage()}>{n}</a>
                                </li>
                            })
                            }
                            <li className=' border-2 rounded-md border-cyan-500 bg-white cursor-pointer my-auto px-3 py-1'>
                                <p className='page-link flex items-center text-xl gap-2 font-semibold' onClick={() => nextPage()}>Next <MdOutlineDoubleArrow className='text-blue-500'/></p>
                            </li>
                        </ul>

                    </div>
                </div>


                <div className='flex gap-10 flex-col w-[700px] h-[80vh]'>
                    {filteredData.filter((item) => {
                        return search.toLocaleLowerCase() === '' ? item : item.department.toLocaleLowerCase().includes(search) || item.Name.toLocaleLowerCase().includes(search) || item.topic.toLocaleLowerCase().includes(search);
                    }).map((item, id) =>
                        <div key={item.id} className='bg-gradient-to-t to-cyan-300 via-cyan-500 from-cyan-700 flex-col rounded-lg'>

                            <div className='flex bg-gradient-to-t from-cyan-500 to-cyan-800 text-center items-center gap-5 rounded-xl'>
                                <img src={jgec} alt='' className='w-[50px] border rounded-] border-white' />
                                <h1 className='text-white text-xl font-semibold'>Jalpaiguri Government Engineering College </h1>
                            </div>
                                <div className='flex justify-between px-5 py-4'>

                                        <div className=' flex flex-col gap-3 text-white mt-2'>
                                            <section className='flex gap-4 text-xl'>  <h1 className=''>Project Name : </h1> {item.topic}</section>
                                            <section className='flex items-center gap-2 text-2xl text-white font-semibold'><img src={item.image} alt='' className='w-[50px] h-[50px] rounded-[50%] border border-black bg-blue-400' />{item.Name}</section>
                                            <h1> Department : {item.department}</h1>
                                            {/* <p>Team Member : {'Name of the members'}</p> */}
                                            <p>Project Mentor : Prof. {item.mentor1st} {item.mentor2nd}</p>
                                            <h1 className='text-white'>Email : {item.email}</h1>
                                        </div>
                                        <div className='flex flex-col my-auto h-fit items-center gap-10'>
                                           <h1 className='text-black/70 text-xl'>Year : {item.year}</h1>
                                           <h1 className='text-white flex gap-2 text-xl font-semibold underline underline-offset-2'>PDF view <FaFileDownload className='text-blue-700 cursor-pointer my-auto text-xl' /></h1>
                                        </div>
                                </div>
                        </div>)
                    }

                </div>
                
            </div>
        </>
    );
};

export default Home;