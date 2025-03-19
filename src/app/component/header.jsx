'use client'
import React, { useEffect, useState } from 'react';
import { IoPerson } from "react-icons/io5";
const Header = () => {
    return (
        <>
            <div className=" flex items-center sticky top-0 z-50  text-white bg-[#00000090]  shadow-2xl justify-between md:px-10 px-4 py-5 md:mx-10 md:rounded-b-2xl ">
                <h1 className='text-2xl '>MovStream</h1>
                <div className='flex items-center gap-2'>
                    <h2 className='text-base'>EN</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z" /></svg>
                    <div className=' flex items-center justify-center primary-color border-none bg-gray-300 rounded-full w-10 h-10 hover:border-8 hover:border-gray-50'>
                        <IoPerson className='text-2xl' />
                    </div>
                    {/* <div>
                        <div className='absolute text-center right-5 top-16  bg-gray-500 rounded-lg'>
                            <h2 className='text-gray-300'>Account</h2>
                            <span className='text-sm'>Login</span>
                        </div>
                    </div> */}
                </div>


            </div>

        </>
    );
};

export default Header;