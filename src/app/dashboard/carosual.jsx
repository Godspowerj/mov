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
        </>
    )
}

export default Carosual