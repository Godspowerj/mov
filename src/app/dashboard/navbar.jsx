'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdHistory } from "react-icons/md";
import Input from '../component/input';


const Navbar = () => {

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
            <Input />
        </div>
    );
};

export default Navbar;
