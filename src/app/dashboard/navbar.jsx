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
    const images = [
        { src: '/AppleTvLogo.png', alt: 'Image 1' },
        { src: '/NetflixLogo.png', alt: 'Image 2' },
        { src: '/PrimeVideoLogo.png', alt: 'Image 3' },
        { src: '/ShowmaxLogo.png', alt: 'Image 4' },
        { src: '/ViuLogo.png', alt: 'image 5' },
        { src: '/VivamaxLogo.png', alt: 'Image 3' },
        { src: '/HuluLogo.png', alt: 'Image 4' },
        { src: '/DisneyLogo.png', alt: 'Image 5' },
        { src: '/HoichoiLogo.png', alt: 'Image 4' },
    ];

    return (
        <>
            <div className='space-y-4 pt-8 w-screen pb-8 bg-color ' >
                <div className='px-4 space-y-4'>
                    <div className='flex items-center  bg-color-2 border-2 px-4 text-white border-gray-700 rounded-lg py-2'>
                        <IoSearchOutline />
                        <input type="text" className='w-full outline-none border-none text-white pl-2' />
                    </div>
                    <span className='text-[20px] primary-color font-medium'>Movie Categories</span><div className=''>
                        <ul className='flex items-center overflow-x-auto gap-4 py-4 primary-color justify-between whitespace-nowrap'>
                            {navbarItems.map((items, index) => (
                                <li key={index}>
                                    {items.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>




                <div className='flex items-center gap-4 overflow-x-auto scrollbar-hide'>
                    {images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} className='md:w-40 md:h-40 w-30 h-30' />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;