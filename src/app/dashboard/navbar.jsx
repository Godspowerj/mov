import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const navbarItems = [
        'Trending', 'Nollywood', 'Western', 'Asian', 'Anime', 'ShortTV', 
        'Kids', 'Education', 'Game', 'TV/Series', 'Bollywood', 'K-Drama'
    ];

    const images = [
        '/AppleTVLogo.png', '/NetflixLogo.png', '/PrimeVideoLogo.png', 
        '/ShowmaxLogo.png', '/ViuLogo.png', '/VivamaxLogo.png', 
        '/HuluLogo.png', '/DisneyLogo.png', '/HoichoiLogo.png'
    ];

    return (
        <div className='space-y-4 md:pt-8 pt-4 max-w-full pb-8 bg-color '>
            {/* Search Bar */}
            <div className='px-4 space-y-4'>
                <div className='flex items-center gap-5 w-full justify-between border-none'>
                    <div className='flex items-center px-2 w-full bg-gray-600 border-2 border-gray-700 rounded-lg py-2'>
                        <IoSearchOutline className='text-[23px] text-white' />
                        <input 
                            type="text" 
                            placeholder='Search movies...' 
                            className='w-full outline-none border-none text-[18px] text-white pl-2 ' 
                        />
                    </div>
                    <svg className='md:hidden block' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff">
                        <path d="M622.31-426.15h213.07v-140H622.31v140Zm-60 129.61V-590q0-15.46 10.34-25.81 10.35-10.34 25.81-10.34h260.77q15.46 0 25.81 10.34 10.34 10.35 10.34 25.81v187.69q0 15.46-10.34 25.81-10.35 10.35-25.81 10.35H631.92l-69.61 69.61ZM292.31-60q-29.92 0-51.12-21.19Q220-102.39 220-132.31v-695.38q0-29.92</svg> 21.19-51.12Q262.39-900 292.31-900h375.38q29.92 0 51.12 21.19Q740-857.61 740-827.69v146.15h-60V-730H280v500h400v-48.46h60v146.15q0 29.92-21.19 51.12Q697.61-60 667.69-60H292.31ZM280-170v37.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-170H280Zm0-620h400v-37.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H292.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-790Zm0 0v-50 50Zm0 620v50-50Zm342.31-256.15v-140 140Z" />
                    </svg>
                </div>

                {/* Movie Categories */}
                <span className='text-[24px] text-white font-bold'>Movie Categories</span>
                <div className='overflow-hidden'>
                    <ul className='flex items-center text-[20px] overflow-x-auto md:gap-10 gap-5  scrollbar-hide py-4 primary-color whitespace-nowrap'>
                        {navbarItems.map((title, index) => (
                            <li key={index} className='shrink-0'>{title}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Popular Playlist */}
            <div>
                <p className='text-[24px] text-white pl-3 font-medium py-4'>Popular Playlist</p>
                <div className='flex items-center gap-4 overflow-x-auto scrollbar-hide px-2'>
                    {images.map((src, index) => (
                        <img 
                            key={index} 
                            src={src} 
                            alt={`Image ${index + 1}`} 
                            className='md:w-32 md:h-32 w-28 h-28 shrink-0' 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
