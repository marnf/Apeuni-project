import GreenThree from '../../assets/green_three.png'
import { CiCircleChevRight } from "react-icons/ci";

import P from "../../assets/P.png"
import T from "../../assets/T.png"
import E from "../../assets/E.png"

const ThreePage = () => {
    return (

        <div className='my-5 '>
            <div className="relative   p-6">
                {/* Background Image */}
                <img src={GreenThree} alt="Background" className=" h-auto" />
                <h3 className="absolute text-3xl font-semibold text-gray-900 left-20 top-20 ">学习 PTE 入门课程</h3>
            </div>

            <div className='gap-5'>
                <div className='flex justify-center gap-7 mt-12 flex-col md:flex-row lg:flex-row'>

                    <div className="bg-slate-200 rounded-2xl border rounded-tl-lg px-16 py-12 text-center    sm:w-full max-sm:w-full w-1/2">
                        <div className='flex flex-col md:flex-row lg:flex-row items-center gap-6 '>
                            <div class="text-teal-500 text-5xl mb-4">
                                <img className='w-16' src={P} alt="" />
                            </div>
                            <div className='text-start py-2'>
                                <h2 class=" font-bold text-gray-700 py-2 text-2xl">Daily Updated</h2>
                                <p class="text-gray-500 text-xl py-2">美国4000所大学，澳洲100%大 <br /> 学，英国2000所大学，其 <br />他地区10000所大学都接受PTE。</p>
                            </div>
                        </div>
                        <div className='block'>
                            <CiCircleChevRight className='ml-auto' size={40} />
                        </div>
                    </div>

                    <div className="bg-slate-200 rounded-2xl border rounded-tl-lg px-16 py-12 text-center    sm:w-full max-sm:w-full w-1/2">
                        <div className='flex flex-col md:flex-row lg:flex-row items-center gap-6'>
                            <div class="text-teal-500 text-5xl mb-4">
                                <img className='w-16' src={T} alt="" />
                            </div>
                            <div className='text-start py-2'>
                                <h2 class=" font-bold text-gray-700 py-2 text-2xl">Daily Updated</h2>
                                <p class="text-gray-500 text-xl py-2">美国4000所大学，澳洲100%大 <br /> 学，英国2000所大学，其 <br />他地区10000所大学都接受PTE。</p>
                            </div>
                        </div>
                        <div className='block'>
                            <CiCircleChevRight className='ml-auto' size={40} />
                        </div>
                    </div>
                </div>


                <div class="bg-slate-200 rounded-2xl border px-16 py-12   mt-4  ">

                    <div className='flex flex-col md:flex-row lg:flex-row items-center gap-6'>
                        <div class="text-teal-500 text-5xl mb-4">
                            <img className='w-16' src={E} alt="" />
                        </div>
                        <div className='text-start py-2'>
                            <h2 class=" font-bold text-gray-700 py-2 text-2xl">Daily Updated</h2>
                            <p class="text-gray-500 text-xl py-2">美国4000所大学，澳洲100%大 <br /> 学，英国2000所大学，其 <br />他地区10000所大学都接受PTE。</p>
                        </div>
                    </div>

                    <div className='block'>
                        <CiCircleChevRight className='ml-auto' size={40} />
                    </div>


                </div>

            </div>
        </div>


    );
};

export default ThreePage;