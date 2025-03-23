'use client'
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const navbarItems = [
        'Trending', 'Nollywood', 'Western', 'Asian', 'Anime', 'ShortTV',
        'Kids', 'Education', 'Game', 'TV/Series', 'Bollywood', 'K-Drama'
    ];
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='space-y-4 md:pt-8 pt-4 max-w-full bg-color '>
            <div className='px-4 space-y-4'>
                <div className='flex items-center gap-6 w-full justify-between border-none'>
                    <label className='transform md:hidden block scale-150'>
                        <div
                            className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
                        >
                            <input className="hidden peer" type="checkbox" />
                            <div
                                className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
                            ></div>
                            <div
                                className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"
                            ></div>
                            <div
                                className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
                            ></div>
                        </div>
                    </label>

                    <div className='flex items-center px-2 w-full bg-transparent border-2 border-gray-700 rounded-lg py-2'>
                        <IoSearchOutline className='text-[23px] text-white' />
                        <input
                            type="text"
                            placeholder='Search movies...'
                            className='w-full outline-none border-none text-[18px] text-white pl-2 '
                        />
                    </div>
                    <Image src="/mobile.png" width={30} height={30} layout="intrinsic" className="" alt="" />
                </div>

                {/* Movie Categories */}
                <span className='text-[24px] text-white font-bold'>Movie Categories</span>
                <div className='overflow-hidden'>
                    <ul className='flex items-center text-[20px] overflow-x-auto md:gap-10 gap-5 scrollbar-hide py-4 primary-color whitespace-nowrap'>
                        {navbarItems.map((title, index) => (
                            <li key={index} className='shrink-0'>{title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
