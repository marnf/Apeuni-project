import React from 'react';
import "../Components/Header.css"
import HeaderLogo from "../assets/header_logo.png"

const Header = () => {
    return (

        <nav className="  border-gray-200 dark:bg-gray-900 w-full">

            <div className="max-w-screen-xl flex flex-wrap items-center justify-between my-auto mx-auto p-4">

               <img className='h-14' src={HeaderLogo} alt="" />


                <div className="hidden w-full md:block md:w-auto mx-auto items-center gap-y-2 py-4" >
                    <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


                        <div className=''>
                            <a href="#" className="block p-5  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                        </div>


                        <div className="hoverable z-20 mx-4  hover:text-black">
                            <a href="#" className="relative  ">Hover</a>
                            <div className="p-6 mega-menu    mt-9 sm:mb-0 shadow-xl bg-base-300  rounded-box  text-black">
                               
                                <div className="container p-8 mx-auto w-full flex flex-wrap justify-between  ">
                                <div class="w-full  mb-8  border-b-4 border-blue-700  rounded-full flex items-center gap-4">
                                    <h2 class="font-bold text-2xl rounded-full px-4 bg-blue-300">PTE academic</h2>
                                    <h2 class="font-bold text-2xl">PTE code</h2>
                                    
                                </div>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 1</h3>
                                        </div>
                                        <li>ami</li>
                                        <li>ami</li>
                                        <li>ami</li>
                                        <li>ami</li>
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 2</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 3</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 4</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className=''>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </div>
                        <div className=''>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </div>
                        <div className=''>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </div>


                    </div>
                </div>


                <button data-collapse-toggle="navbar-default" type="button" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" data-drawer-target="drawer-navigation" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>


            <div id="drawer-navigation" class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
                <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close menu</span>
                </button>
                <div class="py-4 overflow-y-auto">
                    <div class="space-y-2 font-medium">
                        <div className=''>
                            <a href="#" className="block p-5  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                        </div>
                        <div className=''>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </div>
                        <div className=''>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </div>
                        <div className=''>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </div>
                        <div className="hoverable    hover:text-black">
                            <a href="#" className="relative  ">Hover</a>
                            <div className="p-6 mega-menu  sm:mb-0 shadow-xl bg-base-300  rounded-box  text-black">
                                <div className="grid grid-cols-1 gap-3  ">
                                    <ul className="px-4 w-full  pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 1</h3>
                                        </div>
                                        <li>ami</li>
                                        <li>ami</li>
                                        <li>ami</li>
                                        <li>ami</li>
                                    </ul>
                                    <ul className="px-4 w-full   pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 2</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                    <ul className="px-4 w-full    pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 3</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                    <ul className="px-4 w-full  pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 4</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </nav>







    );
};

export default Header;