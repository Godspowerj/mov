'use client';
import React, { useEffect, useState } from 'react';
import { IoChevronForwardSharp } from "react-icons/io5";

const MovieProduct = () => {
    const [movieList, setMovieList] = useState([]);

    const getMovieProduct = () => {
        let movies = []; // Store all movies
    
        for (let i = 1; i <= 2; i++) { // Fetch page 1 and 2
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c0ebac5ff2fd75ab2eb0202a38c61031&page=${i}`)
                .then(response => response.json())
                .then(data => {
                    movies = movies.concat(data.results); // Add movies to list
                    setMovieList([...movies]); // Update state
                });
        }
    };
    
    useEffect(() => {
        getMovieProduct();
    }, []);
    

    return (
        <div className="space-y-10 md:space-y-13 2xl:space-y-20 ">
            {/* Trending Videos Section */}
            <div className="w-full space-y-6 xl:space-y-8 2xl:space-y-10">
                <div className="flex justify-between items-center px-4">
                    <p className="text-base md:text-[24px]  2xl:text-5xl text-white font-medium">
                        Recommended Movies
                    </p>
                    <p className="flex items-center gap-2 primary-color text-base xl:text-lg 2xl:text-6xl cursor-pointer">
                        more <IoChevronForwardSharp />
                    </p>
                </div>
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-3 w-full md:w-auto">
                        {movieList.map((movie, index) => (
                            <div
                                key={index}
                                className="flex-none flex flex-col items-center gap-2 rounded-lg"
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={`Movie ${index}`}
                                    className="w-[100px] h-[150px] lg:w-[150px] lg:h-[200px] 2xl:w-[600px] 2xl:h-[800px] object-cover rounded-lg"
                                />
                                <p className="text-white text-sm md:text-base 2xl:text-5xl">
                                    {movie.title.slice(0, 15)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recommended Movies Section */}
            <div className="w-full space-y-6 xl:space-y-8 2xl:space-y-10">
                <div className="flex justify-between items-center px-4">
                    <p className="text-base md:text-[24px]  2xl:text-5xl text-white font-medium">
                        Recommended Movies
                    </p>
                    <p className="flex items-center gap-2 primary-color text-base xl:text-lg 2xl:text-6xl cursor-pointer">
                        more <IoChevronForwardSharp />
                    </p>
                </div>
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-3 w-full md:w-auto">
                        {movieList.map((movie, index) => (
                            <div
                                key={index}
                                className="flex-none flex flex-col items-center gap-2 rounded-lg"
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={`Movie ${index}`}
                                    className="w-[100px] h-[150px] lg:w-[150px] lg:h-[200px] 2xl:w-[600px] 2xl:h-[800px] object-cover rounded-lg"
                                />
                                <p className="text-white text-sm md:text-base 2xl:text-5xl">
                                    {movie.title.slice(0, 15)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full space-y-6 xl:space-y-8 2xl:space-y-10">
                <div className="flex justify-between items-center px-4">
                    <p className="text-base md:text-[24px]  2xl:text-5xl text-white font-medium">
                        Recommended Movies
                    </p>
                    <p className="flex items-center gap-2 primary-color text-base xl:text-lg 2xl:text-6xl cursor-pointer">
                        more <IoChevronForwardSharp />
                    </p>
                </div>
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-3 w-full md:w-auto">
                        {movieList.map((movie, index) => (
                            <div
                                key={index}
                                className="flex-none flex flex-col items-center gap-2 rounded-lg"
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={`Movie ${index}`}
                                    className="w-[100px] h-[150px] lg:w-[150px] lg:h-[200px] 2xl:w-[600px] 2xl:h-[800px] object-cover rounded-lg"
                                />
                                <p className="text-white text-sm md:text-base 2xl:text-5xl">
                                    {movie.title.slice(0, 15)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <p className='text-gray-500 text-center'>----------- no more content ------------</p>
            </div>
        </div>
    );
};

export default MovieProduct;