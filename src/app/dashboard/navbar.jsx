'use client'
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const Navbar = () => {
 
    const router = useRouter();
    return (
        <div className='space-y-4 md:pt-6 2xl:pt-10 pt-4 max-w-full bg-color'>
            <div className="text-white text-2xl font-semibold text-center block lg-hidden md:hidden 2xl:hidden">
                MovStream
            </div>
            <div className='px-3 space-y-4'>
                <div className='flex items-center w-full justify-between border-none'>
                    {/* Search Bar */}
                    <div className='relative flex items-center w-full bg-transparent  border-gray-700 rounded-lg py-2'>
                        <div className="w-full max-w-lg bg-gray-800 p-2 rounded-lg flex items-center">
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;
