import React from 'react';
import { MdMargin } from 'react-icons/md';
import QRPic from "../assets/QR-code.png"
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import monkey from "../assets/monkey.png"

const RightNavigationBar = () => {
    return (
        <div class="fixed z-20 top-1/4 right-0 my-auto   rounded-l-lg

">

            <div className=" 	">
                <img className='w-20 bg-inherit' src={monkey} alt="" />
            </div>
            <div class="flex flex-col my-auto">

                <div class="relative group border bg-base-200 rounded-tl-lg ">
                    <a href="/logOut" class="flex items-center justify-center p-3">
                    <IoDocumentTextOutline size={30} />
                    </a>
                    <span class=" btn-disabled w-20 bg-white absolute text-center mt-1 right-full top-0   rounded rounded-r-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                        <img src={QRPic} alt="" />
                    </span>
                </div>

                <div class="relative group border bg-base-200  ">
                    <a href="/logOut" class="flex items-center justify-center p-3">
                    <IoChatbubbleEllipsesOutline size={30} />
                    </a>
                    <span class=" btn-disabled w-20 bg-white absolute text-center mt-1 right-full top-0   rounded rounded-r-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                        <img src={QRPic} alt="" />
                    </span>
                </div>

                <div class="relative group border bg-base-200  ">
                    <a href="/logOut" class="flex items-center justify-center p-3">
                    <FaUserFriends size={30} />

                    </a>
                    <span class=" btn-disabled w-20 bg-white absolute text-center mt-1 right-full top-0   rounded rounded-r-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                        <img src={QRPic} alt="" />
                    </span>
                </div>

                <div class="relative group border  rounded-bl-lg bg-base-200">
                    <a href="/logOut" class="flex items-center justify-center p-3">
                    <MdOutlinePhoneEnabled size={30}/>
                    </a>
                    <span class=" btn-disabled  bg-white absolute text-center mt-1 right-full top-0 p-3   rounded rounded-r-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                       01*********
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RightNavigationBar;