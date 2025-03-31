'use client'
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdHistory } from "react-icons/md";


const Navbar = () => {

    const router = useRouter();
    return (
        <div className='space-y-3 md:pt-6 2xl:pt-10 lg:pt-0 pt-4 max-w-full bg-color'>
            <div >
                <div className="text-white text-2xl font-semibold flex justify-between items-center px-4 lg-hidden md:hidden 2xl:hidden">
                    <p>MovStream </p>
                    <div className='flex items-center gap-2'>
                        <MdHistory />
                    </div>
                </div>

            </div>
            <div className='px-3 space-y-4'>
                <div className='flex items-center gap-10 w-full justify-between border-none'>
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
                    <div className='md:flex items-center gap-2 px-4 hidden rounded-full whitespace-nowrap text-white '>
                        <MdHistory className='text-5xl' />
                        <p>Watch history</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
