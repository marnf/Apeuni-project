import React from 'react';
import { Carousel } from "flowbite-react";

const CarouselPage = () => {
    return (
        <div className=" z-1 mt-1 h-56 sm:h-64 xl:h-80 my-44 2xl:h-96">
            <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
                <div className="flex h-full w-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 1
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 2
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 3
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselPage;