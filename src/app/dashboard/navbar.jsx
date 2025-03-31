'use client'
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const Navbar = () => {
    const navbarItems = [
        'Trending', 'Nollywood', 'Western', 'Asian', 'Anime', 'ShortTV',
        'Kids', 'Education', 'Game', 'TV/Series', 'Bollywood', 'K-Drama'
    ];
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <div className='space-y-4 md:pt-6 2xl:pt-10 pt-4 max-w-full bg-color'>
            <div className='px-4 space-y-4'>
                <div className='flex items-center gap-6 w-full justify-between border-none'>
                    {/* Hamburger Menu */}
                    <label onClick={() => setIsOpen(!isOpen)} className='transform md:hidden block scale-150'>
                        <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                            <input className="hidden peer" type="checkbox" />
                            <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
                            <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                            <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
                        </div>
                    </label>

                    {/* Search Bar */}
                    <div className='relative flex items-center px-2 w-full bg-transparent  border-gray-700 rounded-lg py-2'>
                           <div className="w-full max-w-lg bg-gray-800 p-3 rounded-lg flex items-center">
                            <IoSearchOutline className="text-[23px] text-white" />
                            <input
                                type="text"
                                placeholder="Search movies..."
                                className="w-full outline-none border-none bg-transparent text-[18px] text-white pl-2"
                                onFocus={() => {
                                    router.prefetch('/dashboard/search'); // Prefetch the page for faster navigation
                                    router.push('/dashboard/search');
                                }}
                            />
                        </div>
                    </div>
                    

                    <Image src="/mobile.png" width={30} height={30} layout="intrinsic" alt="Mobile" />
                </div>

                {/* Movie Categories */}
                <span className='text-[24px] text-white font-bold'>Movie Categories</span>
                <div className='overflow-hidden'>
                    <ul className='flex items-center lg:text-base overflow-x-auto md:gap-10 gap-5 scrollbar-hide py-4 primary-color whitespace-nowrap'>
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
