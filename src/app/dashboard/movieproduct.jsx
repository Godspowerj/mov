'use client';
import React from 'react';
import { IoChevronForwardSharp } from "react-icons/io5";

const MovieProduct = () => {
    const movieProduct = [
        { image: 'imh.jpg', title: 'Movie 1' },
        { image: 'imh.jpg', title: 'Movie 2' },
        { image: 'imh.jpg', title: 'Movie 3' },
        { image: 'imh.jpg', title: 'Movie 4' },
        { image: 'imh.jpg', title: 'Movie 5' },
        { image: 'imh.jpg', title: 'Movie 6' },
        { image: 'imh.jpg', title: 'Movie 4' },
        { image: 'imh.jpg', title: 'Movie 5' },
        { image: 'imh.jpg', title: 'Movie 6' },
        { image: 'imh.jpg', title: 'Movie 4' },
    ];

    return (
        <div className="w-screen space-y-15">


            <div className="w-full space-y-6">
                <div className='flex justify-between items-center'>
                    <p className='text-[24px] text-white  font-medium'>Trending Videos</p>
                    <p className='flex items-center gap-2 primary-color text-base'>more<IoChevronForwardSharp /></p>
                </div>
                <div className='overflow-x-auto scrollbar-hide '>
                    <div className="flex gap-4 w-max">
                        {movieProduct.map((product, index) => (
                            <div key={index} className="flex-none flex flex-col items-center gap-2 rounded-lg">
                                <img
                                    src={product.image}
                                    alt={`Movie ${index}`}
                                    className="md:w-[150px] md:h-[200px] w-[100px] h-[150px] object-cover rounded-lg"
                                />
                                <p className="text-white">{product.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            <div className="w-full space-y-6">
                <div className='flex justify-between items-center'>
                    <p className='text-[24px] text-white  font-medium'>Recommeded movies</p>
                    <p className='flex items-center gap-2 primary-color text-base'>more<IoChevronForwardSharp /></p>
                </div>
                <div className='overflow-x-auto scrollbar-hide'>
                    <div className="flex gap-4 w-max">
                        {movieProduct.map((product, index) => (
                            <div key={index + movieProduct.length} className="flex-none flex flex-col items-center gap-2 rounded-lg">
                                <img
                                    src={product.image}
                                    alt={`Movie ${index + movieProduct.length}`}
                                    className="md:w-[150px] md:h-[200px] w-[100px] h-[150px] object-cover rounded-lg"
                                />
                                <p className="text-white">{product.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            <div className="w-full space-y-6">
                <div className='flex justify-between items-center'>
                    <p className='text-[24px] text-white  font-medium'>Suggestions</p>
                    <p className='flex items-center gap-2 primary-color text-base'>more<IoChevronForwardSharp /></p>
                </div>
                <div className='overflow-x-auto scrollbar-hide'>
                    <div className="flex gap-4 w-max">
                        {movieProduct.map((product, index) => (
                            <div key={index + movieProduct.length} className="flex-none flex flex-col items-center gap-2 rounded-lg">
                                <img
                                    src={product.image}
                                    alt={`Movie ${index + movieProduct.length}`}
                                    className="md:w-[150px] md:h-[200px] w-[100px] h-[150px] object-cover rounded-lg"
                                />
                                <p className="text-white">{product.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MovieProduct;
