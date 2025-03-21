import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
    const navbarItems = [
        { title: 'Trending' },
        { title: 'Nollywood' },
        { title: 'Western' },
        { title: 'Asian' },
        { title: 'Anime' },
        { title: 'ShortTV' },
        { title: 'Kids' },
        { title: 'Education' },
        { title: 'Game' },
        { title: 'TV/Series' },
        { title: 'Bollywood' },
        { title: 'K-Drama' },
        
    ]
    return (
        <>
            <div className='space-y-4 pb-2 md:pl-80 pt-8 bg-color' >
                <div className='flex items-center  bg-color-2 border-2 px-4 text-white border-gray-700 rounded-lg py-2'>
                    <IoSearchOutline />
                    <input type="text" className='w-full outline-none border-none text-white pl-2' />
                </div>
                <span className='text-[20px] primary-color font-medium'>Movie Categories</span>

                <div className=''>
                    <ul className='flex items-center overflow-x-auto gap-4 py-4 primary-color justify-between whitespace-nowrap'>
                        {navbarItems.map((items, index) => (
                            <li key={index}>
                                {items.title}
                            </li>
                        ))},
                    </ul>

                </div>
            </div>

        </>
    );
};

export default Navbar;