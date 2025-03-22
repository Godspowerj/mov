'use client';
import React from 'react';

const MovieProduct = () => {
    const movieProduct = [
        { image: 'imh.jpg', title: 'Movie 1' },
        { image: 'imh.jpg', title: 'Movie 2' },
        { image: 'imh.jpg', title: 'Movie 3' },
        { image: 'imh.jpg', title: 'Movie 4' },
        { image: 'imh.jpg', title: 'Movie 5' },
        { image: 'imh.jpg', title: 'Movie 6' },
        { image: 'imh.jpg', title: 'Movie 4' },
        { image: 'imh.jpg', title: 'Movie 5' },
        { image: 'imh.jpg', title: 'Movie 6' },
        { image: 'imh.jpg', title: 'Movie 4' },
    ];

    return (
        <div className="w-screen">
            <div className="w-full overflow-x-auto ">
                <div className="flex gap-4 w-max">
                    {movieProduct.map((product, index) => (
                        <div key={index} className="flex-none flex flex-col items-center gap-2 rounded-lg">
                            <img
                                src={product.image}
                                alt={`Movie ${index}`}
                                className="md:w-[150px] md:h-[200px] w-[100px] h-[150px] object-cover rounded-lg"
                            />
                            <p className="text-white">{product.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full overflow-x-auto">
                <div className="flex gap-4 w-max">
                    {movieProduct.map((product, index) => (
                        <div key={index + movieProduct.length} className="flex-none flex flex-col items-center gap-2 rounded-lg">
                            <img
                                src={product.image}
                                alt={`Movie ${index + movieProduct.length}`}
                                className="md:w-[150px] md:h-[200px] w-[100px] h-[150px] object-cover rounded-lg"
                            />
                            <p className="text-white">{product.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full overflow-x-auto">
                <div className="flex gap-4 w-max">
                    {movieProduct.map((product, index) => (
                        <div key={index + movieProduct.length} className="flex-none flex flex-col items-center gap-2 rounded-lg">
                            <img
                                src={product.image}
                                alt={`Movie ${index + movieProduct.length}`}
                                className="md:w-[150px] md:h-[200px] w-[100px] h-[150px] object-cover rounded-lg"
                            />
                            <p className="text-white">{product.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieProduct;
