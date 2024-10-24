import React, { useState } from 'react';
import QRPic from "../../assets/QR-code.png"
import BgPic from "../../assets/BgPic.png"
import GreenTwo from "../../assets/green_two.png"
import MidNavBar from "../../Components/MidNavBar.jsx"



const TwoPage = () => {
    return (
        <div className="font-sans">

            <main className="container  px-4 py-8">
                {/* Hero Section */}
                <div className="relative   p-6">
                    {/* Background Image */}
                    <img src={GreenTwo} alt="Background" className=" h-auto" />

                    <h3 className="absolute text-3xl font-semibold text-gray-900 left-20 top-20 ">学习 PTE 入门课程</h3>
                    {/* Text over Image */}
                    <div className="   ">
                        <p className="text-gray-600 text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing  Architecto <br /> cupiditate temporibus repellat ducimus! Pariatur iure ex ab?
                        </p>
                    </div>
                </div>


                
<MidNavBar></MidNavBar>


                {/* App Download Section */}
                <section
                    className="flex justify-center py-16 bg-cover bg-center gap-4"
                    style={{
                        backgroundImage: `url(${BgPic})`,
                    }}
                >

                    <div className="flex justify-start  flex-col">
                        <h3 className="text-3xl font-bold text-white text-start">APP</h3>
                        <p className="text-white text-start">Lorem ipsum dolor sit amet <br /> AI 智能评分
                        模拟培生评分系统</p>
                        <button className="bg-green-600 text-white px-6 py-2 mt-2  text-center w-1/2 rounded-md hover:bg-green-700">button</button>
                    </div>
                    <img src={QRPic} alt="QR Code" className=" w-32 p-3 rounded bg-slate-200" />
                </section>
            </main>
        </div>
    );
};

export default TwoPage;