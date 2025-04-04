'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { MdHistory } from "react-icons/md";
import Input from '../component/input';


const Navbar = () => {

    return (
        <div className='space-y-3 md:pt-6 2xl:pt-10 lg:pt-0  max-w-full bg-color'>
            <div className='flex items-center justify-between lg:px-0'>
                <div className="text-white pr-2 text-2xl font-semibold flex justify-between items-center w-full lg-hidden md:hidden 2xl:hidden">
                    <div className='flex items-center'>
                        <Image
                            src='/lolo.png'
                            width={60}
                            height={60}
                            alt='logo'
                            priority={true}
                            quality={100}

                        />
                        <p className='font-bold'>MovStream </p>
                    </div>

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
