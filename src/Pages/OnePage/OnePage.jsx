import React from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import GreenOne from "../../assets/green_one.png"

const OnePage = () => {
    return (
        <div class="container mx-auto p-4 ">

            <div className="relative   p-6 mb-4">
                {/* Background Image */}
                <img src={GreenOne} alt="Background" className=" h-auto" />

                <h3 className="absolute text-3xl font-semibold text-gray-900 left-20 top-20 ">学习 PTE 入门课程</h3>
                {/* Text over Image */}
                <div className="   ">
                    <p className="text-gray-600 text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing  Architecto <br /> cupiditate temporibus repellat ducimus! Pariatur iure ex ab?
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 shadow-2xl ">

                <div class="bg-white border rounded-tl-lg p-8 text-center flex items-center gap-3 justify-center">
                    <div class="text-teal-500 text-5xl mb-4">📄</div>
                    <div className='text-start'>
                        <h2 class="text-lg font-bold text-gray-700">Daily Updated</h2>
                        <p class="text-gray-500">0 Exam Questions, Highly Repeated</p>
                    </div>
                </div>

                <div class="bg-white border  p-8 text-center flex items-center gap-3 justify-center">
                    <div class="text-teal-500 text-5xl mb-4">🎤</div>
                    <div className='text-start'>
                        <h2 class="text-lg font-bold text-gray-700">Daily Updated</h2>
                        <p class="text-gray-500">0 Exam Questions, Highly Repeated</p>
                    </div>
                </div>

                <div class="bg-white border rounded-tr-lg p-8 text-center flex items-center gap-3 justify-center">
                    <div class="text-teal-500 text-5xl mb-4">💡</div>
                    <div className='text-start'>
                        <h2 class="text-lg font-bold text-gray-700">Daily Updated</h2>
                        <p class="text-gray-500">0 Exam Questions, Highly Repeated</p>
                    </div>
                </div>

                <div class="bg-white border rounded-bl-lg p-8 text-center flex items-center gap-3 justify-center">
                    <div class="text-teal-500 text-5xl mb-4">🌍</div>
                    <div className='text-start'>
                        <h2 class="text-lg font-bold text-gray-700">Daily Updated</h2>
                        <p class="text-gray-500">0 Exam Questions, Highly Repeated</p>
                    </div>
                </div>

                <div class="bg-white border  p-8 text-center flex items-center gap-3 justify-center">
                    <div class="text-teal-500 text-5xl mb-4">📊</div>
                    <div className='text-start'>
                        <h2 class="text-lg font-bold text-gray-700">Daily Updated</h2>
                        <p class="text-gray-500">0 Exam Questions, Highly Repeated</p>
                    </div>
                </div>

                <div class="bg-white border rounded-br-lg p-8 text-center flex items-center gap-3 justify-center">
                    <div class="text-teal-500 text-5xl mb-4">💡</div>
                    <div className='text-start'>
                        <h2 class="text-lg font-bold text-gray-700">Daily Updated</h2>
                        <p class="text-gray-500">0 Exam Questions, Highly Repeated</p>
                    </div>
                </div>


            </div>
            <div className='flex justify-end items-center gap-2 mt-3 cursor-pointer'>
                <p className='text-2xl pb-1'>Enter </p>
                <IoIosArrowDropright size={25} />
            </div>
        </div>

    );
};

export default OnePage;