import React from 'react'

const Carosual = () => {

    const images = [
        '/AppleTVLogo.png', '/NetflixLogo.png', '/PrimeVideoLogo.png',
        '/ShowmaxLogo.png', '/ViuLogo.png', '/VivamaxLogo.png',
        '/HuluLogo.png', '/DisneyLogo.png', '/HoichoiLogo.png'
    ];
    return (
        <>
            {/* Popular Playlist */}
            <div className='space-y-4 md:space-y-6 2xl:space-y-10 pt-4'>
                <div className='md:flex block  items-center justify-between lg:px-3'>
                    <p className='lg:text-[24px] text-[20px] text-white pl-3 font-medium '>Popular Playlist</p>
                    <p className='text-gray-400 pl-3 lg:text-base text-sm'>All contents are uploaded by users in App</p>
                </div>

                <div className='flex items-center overflow-x-auto gap-2 scrollbar-hide  2xl:space-x-3'>
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Image ${index + 1}`}
                            className='md:w-30 md:h-30 w-20 h-20 2xl:w-[550px]  2xl:h-[550px] shrink-0'
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Carosual