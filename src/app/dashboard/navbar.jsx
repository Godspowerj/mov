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
        { src: '/AppleTVLogo.png', alt: 'Image 1' },
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
            <div className='space-y-4 md:pt-8 pt-4 w-screen pb-7 bg-color ' >
                <div className='px-4 space-y-4'>
                    <div className='flex items-center gap-5 w-full justify-between '>
                        <div className='flex items-center px-2 w-full bg-gray-600 border-2 px-4bg-gray-50 text-white border-gray-700 rounded-lg py-2'>
                            <IoSearchOutline className='text-[23px]' />
                            <input type="text" placeholder='Search movies...' className='w-full outline-none border-none text-[20px]  text-white pl-2' />
                        </div>
                        <svg className='md:hidden block' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff"><path d="M622.31-426.15h213.07v-140H622.31v140Zm-60 129.61V-590q0-15.46 10.34-25.81 10.35-10.34 25.81-10.34h260.77q15.46 0 25.81 10.34 10.34 10.35 10.34 25.81v187.69q0 15.46-10.34 25.81-10.35 10.35-25.81 10.35H631.92l-69.61 69.61ZM292.31-60q-29.92 0-51.12-21.19Q220-102.39 220-132.31v-695.38q0-29.92 21.19-51.12Q262.39-900 292.31-900h375.38q29.92 0 51.12 21.19Q740-857.61 740-827.69v146.15h-60V-730H280v500h400v-48.46h60v146.15q0 29.92-21.19 51.12Q697.61-60 667.69-60H292.31ZM280-170v37.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-170H280Zm0-620h400v-37.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H292.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-790Zm0 0v-50 50Zm0 620v50-50Zm342.31-256.15v-140 140Z" /></svg>
                    </div>


                    <span className='text-[24px] primary-color font-bold'>Movie Categories</span><div className=''>
                        <ul className='flex items-center text-[20px] overflow-x-auto gap-8 scrollbar-hide py-4 primary-color justify-between whitespace-nowrap'>
                            {navbarItems.map((items, index) => (
                                <li key={index}>
                                    {items.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>



          
                <div >
                    <p className='text-[24px] text-white pl-3 font-medium py-4'>Popular Playlist</p>
                    <div className='flex items-center gap-4 overflow-x-auto scrollbar-hide'>
                        {images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} className='md:w-36 md:h-36 w-30 h-30' />
                    ))}
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Navbar;