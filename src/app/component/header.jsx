'use client'
import React, { useEffect, useState } from 'react';
import { IoPerson } from "react-icons/io5";
const Header = () => {
    return (
        <>
            <div className=" flex items-center sticky top-0 z-50  text-white bg-color justify-between md:px-10 px-4 py-5 md:mx-10 md:rounded-b-2xl ">
                <h1 className='text-2xl '>MovStream</h1>
                <div className='flex items-center gap-2'>
                    <h2>EN</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z" /></svg>
                    <div>
                        <IoPerson className='text-2xl primary-color' />
                    </div>
                </div>


            </div>

        </>
    );
};

export default Header;