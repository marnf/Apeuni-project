import React, { useState } from 'react';
import { FaHeadphones } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";


const MidNavBar = () => {

    const [activeLink, setActiveLink] = useState('home');


    return (
        <section className='my-16'>
            <div className="flex justify-center flex-col items-center gap-5  py-4">
                <nav className="flex ">


                    <div
                        onClick={() => setActiveLink('talking')}
                        className={`flex flex-col bg-gray-300 p-5 rounded-l-lg border-r-2  items-center cursor-pointer space-x-2 ${activeLink === 'talking' ? 'text-blue-600' : 'text-gray-500'
                            } hover:text-blue-600`}
                    >
                        <FaMicrophone size={26} className='ml-1' />
                        <span className="text-xl font-semibold">Talking</span>
                    </div>


                    <div
                        onClick={() => setActiveLink('writing')}
                        className={`flex flex-col border-r-2  bg-gray-300 p-5   items-center cursor-pointer space-x-2 ${activeLink === 'writing' ? 'text-blue-600' : 'text-gray-500'
                            } hover:text-blue-600`}
                    >
                        <FaPen size={26} className='ml-1' />
                        <span className="text-xl font-semibold">Writing</span>
                    </div>

                    <div
                        onClick={() => setActiveLink('search')}
                        className={`flex flex-col border-r-2  bg-gray-300 p-5   items-center cursor-pointer space-x-2 ${activeLink === 'search' ? 'text-blue-600' : 'text-gray-500'
                            } hover:text-blue-600`}
                    >
                        <FaSearchPlus size={26} className='ml-1' />
                        <span className="text-xl font-semibold">ReSearch</span>
                    </div>

                    <div
                        onClick={() => setActiveLink('listening')}
                        className={`flex flex-col   bg-gray-300 p-5 rounded-r-lg  items-center cursor-pointer space-x-2 ${activeLink === 'listening' ? 'text-blue-600' : 'text-gray-500'
                            } hover:text-blue-600`}
                    >
                        <FaHeadphones size={26} className='ml-1' />
                        <span className="text-xl font-semibold">Listening</span>
                    </div>


                </nav>
                <a href='#' className='flex items-center m-auto gap-4 '>
                    <p className='text-center text-2xl text-gray-500 hover:text-green-300'>题型的答题技巧及训练方法</p>
                    <IoIosArrowDropright size={30} color='gray' />
                </a>
            </div>

        </section>
    );
};

export default MidNavBar;