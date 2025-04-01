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
            <div>
                <p className='text-[24px] text-white pl-3 font-medium py-4'>Popular Playlist</p>
                <div className='flex items-center overflow-x-auto gap-2 scrollbar-hide px-2 2xl:space-x-3'>
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